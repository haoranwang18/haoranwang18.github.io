---
permalink: /misc
title: "Misc"
excerpt: ""
author_profile: true
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span style="color:blue">**Personal Links**</span>

- [_Personal Website_](https://brucehrwang.com/)
- [_Tech Blog_](https://brucehrwang.github.io/)
