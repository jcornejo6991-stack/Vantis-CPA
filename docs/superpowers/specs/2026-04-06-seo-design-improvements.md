# SEO & Design Improvements — Vantis CPA

**Date:** 2026-04-06
**Status:** Approved
**Scope:** Technical SEO foundations + homepage design polish

---

## Context

The site launched roughly one week ago. Google Search Console is connected but no organic traffic yet — ideal timing to fix SEO foundations before Google forms strong opinions about the pages. GA4 was not tracking (placeholder ID). 20 of 27 pages were missing unique meta descriptions, falling back to the global tagline. No page-specific schema markup existed beyond the global AccountingService type.

Design scope is intentionally narrow: homepage visual polish and trust signals only. Service page layout stays as-is (form left, content right) per user preference.

---

## Phase 1 — Technical SEO

### 1. GA4 Tracking
**File:** `data/siteconfig.json`
Replace `"G-XXXXXXXXXX"` with `"G-FFYDDX4MCN"`.
The gtag.js integration is already in `layouts/partials/head.html` and fires conditionally on this value.

### 2. Meta Descriptions
Add `description` field to frontmatter of every page currently missing one. Descriptions should be 140–160 characters, specific to page content, and action-oriented.

**Pages and their descriptions:**

| Page | File | Description |
|------|------|-------------|
| Home | `content/_index.md` | Tax strategy, compliance, and accounting for founders, expats, real estate owners, and global businesses. South Florida CPA firm. |
| Expertise | `content/expertise/_index.md` | Specialized tax expertise for local businesses, U.S. expats, international investors, real estate owners, and founders. Vantis CPA. |
| Services | `content/services/_index.md` | Tax strategy, compliance, international tax, bookkeeping, payroll, and sales tax — full-service accounting from entity formation to exit. |
| Local Businesses | `content/expertise/local/_index.md` | S-corp elections, entity structuring, quarterly tax planning, and bookkeeping for sole proprietors and South Florida businesses. |
| Outbound U.S. | `content/expertise/outbound/_index.md` | Form 5471, GILTI, foreign tax credits, and cross-border compliance for U.S. businesses operating abroad. Avoid $10,000+ automatic penalties. |
| Founders & Startups | `content/expertise/founders/_index.md` | Entity elections, equity compensation, R&D credits, and investor-ready books for startups at every stage. S-corp, C-corp, and multi-state. |
| Real Estate | `content/expertise/realestate/_index.md` | Cost segregation, 1031 exchanges, REPS qualification, and passive loss planning for rental property owners and real estate investors. |
| U.S. Expats | `content/expertise/expats/_index.md` | Foreign tax credit, FEIE, FBAR, and Streamlined Filing for Americans living abroad. Avoid automatic FBAR penalties of $10,000+ per account. |
| Tax Strategy | `content/services/tax-strategy/_index.md` | Year-round tax planning for business owners — entity elections, income timing, retirement plans, depreciation. Stop reacting at year-end. |
| Tax Compliance | `content/services/tax-compliance/_index.md` | Accurate, defensible federal and state tax returns for individuals, S-corps, C-corps, partnerships, and trusts. IRS notice response included. |
| International Tax | `content/services/international-tax/_index.md` | FBAR, FATCA, Form 5471, GILTI, foreign tax credits, and pre-immigration planning. Full in-house international tax — no referrals. |
| Back-Office | `content/services/back-office/_index.md` | LLC formation, S-corp elections, EIN applications, operating agreements, and annual compliance for Florida, Wyoming, and Texas entities. |
| Bookkeeping | `content/services/bookkeeping/_index.md` | Monthly bank reconciliation, financial statements, and QuickBooks setup for business owners who need clean books year-round. |
| Payroll | `content/services/payroll/_index.md` | Full-service payroll through Gusto — direct deposits, tax filings, W-2s, 1099s, and S-corp reasonable compensation strategy. |
| Sales Tax | `content/services/sales-tax/_index.md` | Florida sales tax registration, monthly filings, rental and e-commerce compliance, and DOR correspondence. Stay compliant before the notice arrives. |

### 3. Homepage Title
**File:** `content/_index.md`
Change `title: Home` to:
`title: "Vantis CPA | Tax and Accounting"`

This renders as: *"Vantis CPA | Tax and Accounting"* — clean, direct, and doesn't get truncated.

### 4. Twitter Card Tags
**File:** `layouts/partials/head.html`
Add after the Open Graph block:
```html
<!-- Twitter / X Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ .Title }} | {{ .Site.Data.siteconfig.company.name }}">
<meta name="twitter:description" content="{{ .Description | default .Site.Data.siteconfig.company.description }}">
<meta name="twitter:image" content="{{ "images/social-card.png" | absURL }}">
```

### 5. Social Card Image (og:image + twitter:image)
**File:** `static/images/social-card.png`
Create a 1200×630px branded image: dark green background (#041f12), "Vantis CPA" in Playfair Display, tagline in Inter, subtle grid texture. Update `head.html` og:image to reference this file.

### 6. BreadcrumbList Schema
**File:** `layouts/partials/head.html`
Add a BreadcrumbList JSON-LD block that generates from the current page's URL path. Helps Google display breadcrumb trails in search results.

### 7. Service Schema on Service Pages
**File:** `layouts/_default/service.html` (or a new partial)
Add a `Service` JSON-LD block scoped to service pages using `.Title` and `.Description`. Each service page gets its own schema entry.

### 8. Article Schema on Resource Pages
**File:** `layouts/resources/single.html`
Add `Article` or `HowTo` JSON-LD using frontmatter `title`, `description`, and `date` fields. Resource guides are prime candidates for Google featured snippets.

### 9. Move Hardcoded URLs to siteconfig.json
**Files:** `layouts/partials/nav.html`, all form templates
Add to `data/siteconfig.json`:
```json
"stripe": {
  "billPayUrl": "https://buy.stripe.com/eVq4gA6DF2YV4eeff54sE00"
}
```
Cal.com URL is already in siteconfig as `integrations.calcom`. Audit templates to ensure they reference `$.Site.Data.siteconfig.integrations.calcom` rather than hardcoding the URL.

---

## Phase 2 — Homepage Design Polish

### 1. Sub-headline on Hero
**File:** `layouts/index.html`
The current hero shows the large "Vantis CPA" wordmark but no supporting line. Add a concise sub-headline below it that speaks directly to the target client type, e.g.:
*"Tax strategy and compliance for founders, expats, and global businesses."*

Keep it one line, Inter font, muted color — not competing with the wordmark.

### 2. Trust Signals Bar
**File:** `layouts/index.html`
Add a simple horizontal stat bar between the hero and the first content section. Three or four numbers that build credibility at a glance. Examples (use real numbers when available):
- Returns filed annually
- Countries served
- Years of international experience
- Response time guarantee

Design: white card with green accent numbers, same floating card style as other sections.

### 3. Social Card Image (shared with Phase 1)
Already covered above — same image serves both og:image and visual branding.

---

## What Was Explicitly Kept As-Is

- Service page layout (form left 30%, content right 70%) — user preference
- Legal pages — no meta descriptions needed for SEO
- Global AccountingService schema — already well-structured

---

## Verification

1. **GA4**: After deploying, open GA4 → Realtime report and visit the site — should see active session.
2. **Meta descriptions**: Use Google Search Console → URL Inspection → view rendered HTML and confirm description tags are page-specific.
3. **Schema**: Use Google's Rich Results Test on homepage, a service page, and a resource page.
4. **Social cards**: Use LinkedIn Post Inspector or Twitter Card Validator on any page URL.
5. **Titles**: Check page source on homepage — should read `<title>Tax Strategy for Founders, Expats & Global Business | Vantis CPA</title>`.
