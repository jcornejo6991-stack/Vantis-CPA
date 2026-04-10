# Project Audit

## Current State

- Hugo builds successfully.
- Section and taxonomy layout warnings have been resolved.
- Top-level breadcrumb schema now renders correctly.
- Structured data place names are encoded safely.
- Public-facing docs now point to `data/siteconfig.json`.

## Keep

- `assets/` for styles and scripts
- `content/` for page content
- `data/siteconfig.json` as the main configuration file
- `functions/` for the Cloudflare form handler
- `layouts/` for Hugo templates
- `static/` for static assets
- `hugo.toml` and `wrangler.toml`

## Notes

- Formspree remains the active contact form service.
- The Cloudflare form handler is still available in the repo, but it is not currently the live submission path.
- Hugo taxonomies are disabled because the site is not using `tags` or `categories`.
- A generic fallback list template now exists for section pages without a dedicated template.

## Follow-Up Ideas

- Remove stale generated files from `public/` before commits when needed.
- Review whether all files in `docs/superpowers/` should stay in the main repo.
- If you later replace Formspree, update the Cloudflare form handler before switching traffic.
