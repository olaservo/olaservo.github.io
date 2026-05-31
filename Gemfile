source "https://rubygems.org"

# Pins Jekyll and all plugins to the exact versions GitHub Pages runs in production.
gem "github-pages", group: :jekyll_plugins

# Windows + JRuby timezone data and file-watching support for local `jekyll serve`.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]
