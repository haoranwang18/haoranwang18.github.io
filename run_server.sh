#!/usr/bin/env bash
set -euo pipefail

# Prefer Homebrew Ruby to avoid the old system Ruby on macOS.
if [ -x "/opt/homebrew/opt/ruby@3.3/bin/ruby" ]; then
  export PATH="/opt/homebrew/opt/ruby@3.3/bin:/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH"
elif [ -x "/opt/homebrew/opt/ruby/bin/ruby" ]; then
  export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
fi

bundle exec jekyll serve