# Vantis CPA Website

Hugo-based static website for Vantis CPA — a tax consulting firm serving founders, expats, and global businesses (South Florida).

## Quick Start

### Content Updates
1. Edit markdown files in `content/` for page text
2. Edit `data/siteconfig.json` for company info, colors, navigation
3. Push to GitHub — Cloudflare auto-deploys in 1-2 minutes

### Local Preview
1. Run `Hugo/hugo.exe server` to preview locally
2. Build with `Hugo/hugo.exe --minify`

## Site Structure

```
content/
  _index.md               Homepage
  contact/                Contact page
  expertise/              Client segment pages (local, founders, expats, etc.)
  services/               Service pages (tax strategy, compliance, bookkeeping, etc.)
  resources/              Resource library (articles, guides)
  referrals/              Referral partner page
  legal/                  Privacy, terms, disclaimer
```

## Folder Structure

- `data/siteconfig.json` — Company info, colors, navigation, integrations
- `content/` — Page content (markdown)
- `layouts/` — Hugo HTML templates
- `assets/css/` — Styles
- `assets/js/` — JavaScript (forms, analytics)
- `static/` — Images and static files
- `functions/` — Cloudflare Worker (contact form handler)
- `wrangler.toml` — Cloudflare Worker config

## Pages

### Expertise
- `/expertise/local/` — Local Businesses
- `/expertise/founders/` — Founders & Startups
- `/expertise/realestate/` — Real Estate Owners
- `/expertise/expats/` — U.S. Expats
- `/expertise/outbound/` — Outbound U.S. Businesses
- `/expertise/inbound/` — Foreign Business & Investors

### Services
- `/services/tax-strategy/` — Tax Strategy Consulting
- `/services/tax-compliance/` — Tax Compliance & Filing
- `/services/international-tax/` — International Tax Services
- `/services/back-office/` — Back-Office Services
- `/services/bookkeeping/` — Bookkeeping & Financial Reporting
- `/services/payroll/` — Payroll Services
- `/services/sales-tax/` — Sales Tax Services

### Resources
Topic clusters covering international tax, real estate tax, business tax, individual tax, and more.

## Documentation

- [Deployment](docs/DEPLOYMENT.md)
- [Adding Pages](docs/ADDING-PAGES.md)
- [Configuration](docs/CONFIGURATION.md)
- [Form Setup](docs/FORM-SETUP.md)
- [SEO Checklist](docs/SEO-CHECKLIST.md)
- [GA4 Setup](docs/GA4-SETUP.md)

## Tech Stack

- Hugo (static site generator) — binary at `Hugo/hugo.exe`
- Cloudflare Pages (hosting + auto-deploy from GitHub)
- Cloudflare Workers (contact form)
- Google Analytics 4
