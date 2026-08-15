(function () {
  var MAX_RESULTS = 12;
  var SNIPPET_RADIUS = 70;

  var manifestEl = document.getElementById('search-manifest');
  var modal = document.getElementById('search-modal');
  var input = document.getElementById('search-input');
  var resultsEl = document.getElementById('search-results');
  if (!manifestEl || !modal || !input || !resultsEl) return;

  var manifest = JSON.parse(manifestEl.textContent);
  var records = null;
  var indexing = null;
  var results = [];
  var activeIndex = 0;
  var lastFocused = null;

  function normalize(text) {
    text = text.toLowerCase();
    return text.normalize ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : text;
  }

  function terms(query) {
    return normalize(query).split(/\s+/).filter(function (t) { return t.length > 0; });
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function samePage(url) {
    return new URL(url, location.href).pathname === location.pathname;
  }

  /*
     Index building: walk the rendered page so results always match what a
     visitor sees, and keep the nearest heading as each block's context.
  */

  function isNestedBlock(el, root) {
    var parent = el.parentElement;
    while (parent && parent !== root) {
      if (/^(P|LI|DT|DD)$/.test(parent.tagName)) return true;
      parent = parent.parentElement;
    }
    return false;
  }

  function collect(doc, page) {
    var root = doc.querySelector('.page__content');
    if (!root) return [];

    var out = [];
    var seen = {};
    var section = null;

    Array.prototype.forEach.call(root.querySelectorAll('h1, h2, h3, p, li, dt, dd'), function (el) {
      var text = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (!text) return;

      if (/^H[123]$/.test(el.tagName)) {
        section = { title: text, id: el.id || '' };
        out.push({ page: page, section: section, text: text, isHeading: true });
        return;
      }

      if (text.length < 12 || isNestedBlock(el, root)) return;
      if (seen[text]) return;
      seen[text] = true;
      out.push({ page: page, section: section, text: text, isHeading: false });
    });

    return out.map(function (record) {
      record.normText = normalize(record.text);
      record.normContext = normalize(page.title + ' ' + (record.section ? record.section.title : ''));
      return record;
    });
  }

  function fetchPage(page) {
    if (samePage(page.url)) return Promise.resolve(collect(document, page));

    return fetch(page.url, { credentials: 'same-origin' })
      .then(function (response) { return response.ok ? response.text() : ''; })
      .then(function (html) {
        if (!html) return [];
        return collect(new DOMParser().parseFromString(html, 'text/html'), page);
      })
      .catch(function () { return []; });
  }

  function buildIndex() {
    if (records) return Promise.resolve(records);
    if (!indexing) {
      indexing = Promise.all(manifest.pages.map(fetchPage)).then(function (lists) {
        records = lists.reduce(function (all, list) { return all.concat(list); }, []);
        return records;
      });
    }
    return indexing;
  }

  /*
     Scoring: every term has to appear somewhere, headings and word-start
     matches rank higher, and shorter blocks win ties as they are more precise.
  */

  function scoreRecord(record, queryTerms) {
    var score = 0;

    for (var i = 0; i < queryTerms.length; i++) {
      var term = queryTerms[i];
      var at = record.normText.indexOf(term);

      if (at === -1) {
        if (record.normContext.indexOf(term) === -1) return 0;
        score += 6;
        continue;
      }

      score += 20;
      if (at === 0 || /[^a-z0-9]/.test(record.normText.charAt(at - 1))) score += 12;
      if (record.isHeading) score += 18;
    }

    return score + Math.max(0, 24 - record.text.length / 25);
  }

  function search(query) {
    var queryTerms = terms(query);
    if (!queryTerms.length || !records) return [];

    return records
      .map(function (record) { return { record: record, score: scoreRecord(record, queryTerms) }; })
      .filter(function (hit) { return hit.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, MAX_RESULTS)
      .map(function (hit) { return hit.record; });
  }

  /*
     Rendering
  */

  function highlight(text, queryTerms) {
    var normText = normalize(text);
    var marks = [];

    queryTerms.forEach(function (term) {
      var from = 0;
      var at;
      while ((at = normText.indexOf(term, from)) !== -1) {
        marks.push([at, at + term.length]);
        from = at + term.length;
      }
    });

    if (!marks.length) return escapeHtml(text);
    marks.sort(function (a, b) { return a[0] - b[0]; });

    var html = '';
    var cursor = 0;
    marks.forEach(function (range) {
      if (range[0] < cursor) return;
      html += escapeHtml(text.slice(cursor, range[0])) + '<mark>' + escapeHtml(text.slice(range[0], range[1])) + '</mark>';
      cursor = range[1];
    });

    return html + escapeHtml(text.slice(cursor));
  }

  function snippet(text, queryTerms) {
    var limit = SNIPPET_RADIUS * 3;
    if (text.length <= limit) return text;

    var normText = normalize(text);
    var at = -1;

    for (var i = 0; i < queryTerms.length && at === -1; i++) {
      at = normText.indexOf(queryTerms[i]);
    }

    var start = at > SNIPPET_RADIUS ? at - SNIPPET_RADIUS : 0;

    if (start > 0) {
      // start on a word boundary, but never past the match itself
      var space = text.indexOf(' ', start);
      if (space !== -1 && space < at) start = space + 1;
    }

    var end = Math.min(text.length, start + limit);
    return (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '');
  }

  function targetUrl(record) {
    var anchor = record.section && record.section.id ? '#' + record.section.id : '';
    return record.page.url + anchor;
  }

  function contextLabel(record) {
    if (!record.section || record.isHeading) return record.page.title;
    return record.page.title + ' › ' + record.section.title;
  }

  function renderMessage(message) {
    results = [];
    resultsEl.innerHTML = '<p class="search-results__message">' + escapeHtml(message) + '</p>';
  }

  function renderQuickLinks() {
    results = manifest.links.map(function (link) {
      return { page: link, section: null, text: link.title, isHeading: true, quick: true };
    });
    activeIndex = 0;
    paint([], 'Jump to a page');
  }

  function paint(queryTerms, heading) {
    if (!results.length) {
      renderMessage('No matches found.');
      return;
    }

    var html = heading ? '<p class="search-results__heading">' + escapeHtml(heading) + '</p>' : '';

    results.forEach(function (record, i) {
      var title = record.quick || record.isHeading
        ? highlight(record.text, queryTerms)
        : highlight(snippet(record.text, queryTerms), queryTerms);

      html += '<a class="search-result' + (i === activeIndex ? ' is-active' : '') + '"' +
        ' id="search-result-' + i + '" role="option" aria-selected="' + (i === activeIndex) + '"' +
        ' href="' + escapeHtml(record.quick ? record.page.url : targetUrl(record)) + '" data-index="' + i + '">' +
        '<span class="search-result__text">' + title + '</span>' +
        '<span class="search-result__context">' + escapeHtml(record.quick ? 'Page' : contextLabel(record)) + '</span>' +
        '</a>';
    });

    resultsEl.innerHTML = html;
    input.setAttribute('aria-activedescendant', 'search-result-' + activeIndex);
  }

  function update() {
    var query = input.value.trim();

    if (!query) {
      renderQuickLinks();
      return;
    }

    if (!records) {
      renderMessage('Building the search index…');
      buildIndex().then(function () {
        if (input.value.trim() === query) update();
      });
      return;
    }

    results = search(query);
    activeIndex = 0;
    paint(terms(query));
  }

  function move(step) {
    if (!results.length) return;
    activeIndex = (activeIndex + step + results.length) % results.length;
    paint(terms(input.value.trim()));

    var active = resultsEl.querySelector('.is-active');
    if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest' });
  }

  function openActive() {
    var active = resultsEl.querySelector('.is-active');
    if (active) active.click();
  }

  /*
     Open and close
  */

  function isOpen() {
    return modal.classList.contains('is-open');
  }

  function open() {
    if (isOpen()) return;
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overflow--hidden');
    input.value = '';
    renderQuickLinks();
    input.focus();
    buildIndex();
  }

  function close() {
    if (!isOpen()) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overflow--hidden');
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  /* the markup spells the shortcut the Mac way, so relabel everywhere else */
  if (!/Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent)) {
    Array.prototype.forEach.call(document.querySelectorAll('.search-toggle__shortcut'), function (label) {
      label.textContent = 'Ctrl K';
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-search-open]'), function (button) {
      button.setAttribute('title', 'Search (Ctrl K)');
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-search-open]'), function (button) {
    button.addEventListener('click', open);
    button.addEventListener('mouseenter', buildIndex);
  });

  Array.prototype.forEach.call(modal.querySelectorAll('[data-search-close]'), function (button) {
    button.addEventListener('click', close);
  });

  input.addEventListener('input', update);

  resultsEl.addEventListener('click', function (event) {
    var link = event.target.closest('.search-result');
    if (!link) return;

    // same-page jumps only change the hash, so close the dialog ourselves
    if (samePage(link.getAttribute('href'))) close();
  });

  resultsEl.addEventListener('mousemove', function (event) {
    var link = event.target.closest('.search-result');
    if (!link) return;
    var index = +link.getAttribute('data-index');
    if (index === activeIndex) return;
    activeIndex = index;
    paint(terms(input.value.trim()));
  });

  document.addEventListener('keydown', function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (isOpen()) close(); else open();
      return;
    }

    if (!isOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      move(-1);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      openActive();
    }
  });
})();
