# StaySaaS

Static site, built with Jekyll, hosted free on GitHub Pages.

## Local preview

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000

## Adding a review

Copy `templates/review-template.md` into `_reviews/`, rename it to a slug
(e.g. `_reviews/trainual-review.md`), fill in the front matter and body.
It publishes automatically at `/reviews/<slug>/` on the next deploy.

## Deploying

Push to the `main` branch of the GitHub repo connected to GitHub Pages —
GitHub builds and deploys automatically, no CI config needed.

## Adding an ASP site-verification tag

Paste the `<meta>` tag the ASP gives you into `_includes/head-custom.html`.
If an ASP instead asks you to host a static verification file at the site
root (e.g. `/impact-verification.html`), just drop that file directly into
this directory — anything here that isn't Markdown/HTML-with-front-matter
is served as-is.
