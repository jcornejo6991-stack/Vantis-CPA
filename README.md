# Vantis CPA Website

A Hugo-based static website with centralized configuration for complete flexibility.

## Quick Start

### For Content Updates
1. Edit `data/siteconfig.json` for company info, colors, navigation
2. Edit markdown files in `content/` directory
3. Push to GitHub
4. Cloudflare auto-deploys

### For Developers
1. Install Hugo: `choco install hugo-extended`
2. Clone repository
3. Run `hugo server` to preview locally
4. Build with `hugo --minify`

## Structure

- `data/siteconfig.json` - All configuration (company, colors, navigation, integrations)
- `content/` - All page content (markdown files)
- `layouts/` - Hugo templates (HTML structure)
- `assets/css/` - Styles (CSS variables reference config)
- `assets/js/` - JavaScript (forms, integrations, tracking)
- `static/` - Static files (robots.txt, images)
- `wrangler.toml` - Cloudflare Worker configuration for the form handler

## Documentation

- [Deployment](docs/DEPLOYMENT.md) - Deploy to Cloudflare Pages
- [Adding Pages](docs/ADDING-PAGES.md) - Add expertise/service pages
- [Configuration](docs/CONFIGURATION.md) - Change company info, colors, integrations
- [SEO Checklist](docs/SEO-CHECKLIST.md) - SEO setup and monitoring
- [GA4 Setup](docs/GA4-SETUP.md) - Google Analytics 4 configuration

## Key Features

- Centralized configuration
- Flexible and scalable content model
- Mobile responsive design
- SEO-ready structure
- Fast static delivery
- HTTPS via Cloudflare
- Google Analytics 4 integration
- Contact form handling

## Technology Stack

- Hugo
- HTML5 / CSS3 / JavaScript
- Cloudflare Pages
- Google Analytics 4

## Deployment

1. Connect the GitHub repository to Cloudflare Pages
2. Set build command: `hugo --minify`
3. Set publish directory: `public`
4. Each commit auto-builds and deploys in 1-2 minutes

## Pages

### Expertise Pages
- `/expertise/local/` - Local Businesses
- `/expertise/founders/` - Founders & Startups
- `/expertise/realestate/` - Real Estate Owners
- `/expertise/outbound/` - Outbound U.S. Businesses
- `/expertise/inbound/` - Foreign Business & Investors
- `/expertise/expats/` - U.S. Expats

### Service Pages
- `/services/tax-strategy/` - Tax Strategy Consulting
- `/services/tax-compliance/` - Tax Compliance & Filing
- `/services/international-tax/` - International Tax Services
- `/services/back-office/` - Back-Office Services
- `/services/bookkeeping/` - Bookkeeping & Financial Reporting
- `/services/payroll-sales-tax/` - Payroll & Sales Tax Services

### Legal Pages
- `/legal/privacy/` - Privacy Policy
- `/legal/terms/` - Terms of Service

## Support

For questions or changes:
1. Edit `data/siteconfig.json` for configuration
2. Create new content files in `content/` for pages
3. See documentation files for detailed guides

No coding knowledge required.
