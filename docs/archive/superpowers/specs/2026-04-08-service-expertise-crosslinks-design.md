# Cross-Linking: Services ↔ Expertise Pages

**Date:** 2026-04-08

## Context

The website has 7 service pages (`/services/*/`) and 6 expertise pages (`/expertise/*/`). Currently these two page types have no links between them — a visitor on "Tax Strategy" has no path to discover which client types we serve, and a visitor on "Local Businesses" has no path to see the full menu of services. Adding bidirectional cross-links improves internal navigation, SEO link equity, and helps prospects self-qualify.

## Design

### What gets added

**On each service page** — a new section titled **"Who We Serve"** listing all 6 expertise areas as mini cards, each linking to the corresponding expertise page.

**On each expertise page** — a new section titled **"Our Services"** listing all 7 services as mini cards, each linking to the corresponding service page.

### Visual treatment

Mini card grid (2 columns). Each card shows the name and a `→` arrow. Cards link to the target page. Styled to match the existing site palette (green border, light green background on hover).

### Placement

The new section appears in the right column, after the specializations list ("What We Handle" / "What's Included") and before the existing "Related Reading" block.

### Names used

Expertise names pulled from `data/expertise.json` (the canonical source):
- Individuals and Local Business
- Startups and Online Business
- Real Estate Owners
- International U.S. Citizens
- Foreign Business and Investors
- U.S. Expats Abroad

Service names pulled from a new `data/services.json` (to be created, parallel to expertise.json):
- Tax Strategy → `/services/tax-strategy/`
- Tax Compliance → `/services/tax-compliance/`
- International Tax → `/services/international-tax/`
- Back-Office Services → `/services/back-office/`
- Bookkeeping → `/services/bookkeeping/`
- Payroll → `/services/payroll/`
- Sales Tax → `/services/sales-tax/`

## Files to Create or Modify

| File | Change |
|------|--------|
| `data/services.json` | **Create** — centralized services data (name, slug, url) mirroring expertise.json structure |
| `layouts/_default/service.html` | **Edit** — add cross-link section block; branch on `.Section` to show the right direction |
| `layouts/partials/service-css.html` | **Edit** — add mini card styles |

## Implementation Notes

- Both expertise and service pages use the same `service.html` layout. Use `{{ if eq .Section "services" }}` / `{{ else }}` to branch between "Who We Serve" and "Our Services".
- Expertise data already available via `$.Site.Data.expertise` (array). Services data will be available via `$.Site.Data.services` after creating the JSON file.
- No frontmatter changes needed on any content pages — this is purely template + data driven.

## Verification

1. Run `hugo serve` and open any service page (e.g. `/services/tax-strategy/`) — confirm "Who We Serve" section appears with 6 expertise cards, all linking correctly.
2. Open any expertise page (e.g. `/expertise/local/`) — confirm "Our Services" section appears with 7 service cards, all linking correctly.
3. Confirm section appears after specializations and before Related Reading.
4. Confirm cards are absent on any page that uses `service.html` but is neither under `/services/` nor `/expertise/` (if any).
