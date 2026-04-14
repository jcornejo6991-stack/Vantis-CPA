# SEO Resource Clusters & E-E-A-T Improvements — Design Spec

**Date:** 2026-04-08
**Goal:** Improve Google rankings and topical authority by restructuring the resource section into topic cluster hubs, adding schema markup, and publishing new high-intent articles.

---

## Context

The site currently has 11 resource articles tagged with services/practices for auto-cross-linking via bottom cards. However, each cluster has no dedicated crawlable URL — Google sees one `/resources/` page with JavaScript filtering, not distinct topic authority pages. Additionally, article schema uses `@type: Organization` as author (no person), there is no FAQPage schema, no BreadcrumbList, and no structured FAQ content for "People Also Ask" placement.

---

## 1. Topic Cluster Architecture

### 7 Hub Pages

New Hugo section pages at `/resources/{cluster}/` using a new `hub` layout. Each hub auto-populates spoke cards from articles tagged with `cluster: {slug}` in frontmatter.

| Hub Slug | URL | Existing Spokes | New Spokes |
|---|---|---|---|
| `international-tax` | `/resources/international-tax/` | FEIE/FTC, Form 5471, Form 5472, Pre-Immigration | Digital Nomad Checklist |
| `real-estate-tax` | `/resources/real-estate-tax/` | 1031 Exchange, REPS, Short-Term Rental | — |
| `individual-tax` | `/resources/individual-tax/` | Solo 401k/SEP-IRA | Crypto/Form 8949 |
| `business-tax` | `/resources/business-tax/` | S-Corps | — |
| `general-tax-compliance` | `/resources/general-tax-compliance/` | Due Dates Calendar | Penalty Abatement Guide |
| `ecommerce-sellers` | `/resources/ecommerce-sellers/` | Form 5472 (shared) | Sales Tax Nexus for Online Sellers; Entity Structure for Amazon/Etsy Sellers |
| `latam-inbound` | `/resources/latam-inbound/` | Form 5472 (shared) | Form 1120-F for Foreign Corporations; Estate Planning Blockers for Foreign Nationals; Form 8832 Entity Classification |

> Note: Form 5472 is tagged to multiple clusters (`international-tax`, `ecommerce-sellers`, `latam-inbound`) — it appears on all three hub pages.

### Hub Page Layout

Each hub `_index.md` contains:
```yaml
---
title: "International U.S. Tax Compliance"
description: "Everything U.S. citizens and foreign nationals need to know about international tax reporting — from FEIE elections to controlled foreign corporations."
cluster: international-tax
coming_soon:
  - title: "GILTI & Subpart F Income"
    tag: "GILTI"
    description: "How global intangible low-taxed income rules affect U.S. shareholders of foreign corporations."
---
```

Layout (`/layouts/resources/hub.html`) renders:
- Breadcrumb: Resources › [Hub Title]
- Hero with title + description
- Grid of spoke article cards (auto-pulled via `cluster:` tag)
- Coming-soon stub cards (from `coming_soon:` frontmatter, visually dimmed)
- CTA strip linking to contact/schedule page
- Back link to `/resources/`

### Spoke Article Frontmatter Changes

Add to all existing articles. Always use `clusters:` as a list (even for single-hub articles). The first entry is the primary cluster used for breadcrumb display.

```yaml
clusters: ["international-tax"]                        # single hub
clusters: ["international-tax", "ecommerce-sellers"]   # multi-hub: first = primary for breadcrumb
faqs:
  - q: "Do I need to file Form 5471 every year?"
    a: "Yes, if you meet the ownership thresholds, Form 5471 is required annually with your federal return."
  - q: "What is the penalty for missing Form 5471?"
    a: "The IRS imposes a $10,000 penalty per missing or late Form 5471, with potential additional penalties up to $50,000."
```

---

## 2. New Articles (3)

Write full markdown content for each. Each article must include:
- 2–3 `faqs:` entries in frontmatter
- At least 2 IRS.gov primary source links in body text
- `cluster:` tag for its hub
- `services:` and `practices:` tags (existing system)

| File | Title | Cluster | Key IRS Citations |
|---|---|---|---|
| `digital-nomad-checklist.md` | 2026 Digital Nomad Tax Checklist | `international-tax` | IRS Pub 54, Form 2555 instructions |
| `crypto-tax-form-8949.md` | Crypto Taxes & Form 8949: What International Traders Need to Know | `individual-tax` | IRS Notice 2014-21, Form 8949 instructions |
| `penalty-abatement-guide.md` | IRS Penalty Abatement: How to Fix a Notice Before It Gets Worse | `general-tax-compliance` | IRS First Time Abatement policy, CP2000 notice guidance |

---

## 3. Article Template Changes (`/layouts/resources/single.html`)

### Breadcrumb
Add visible breadcrumb above article title:
```
Resources › International Tax › FEIE vs. Foreign Tax Credit
```
Link "Resources" to `/resources/`, link cluster name to its hub page. For articles in multiple clusters, use `clusters[0]` (first entry) as the breadcrumb parent.

### Author / Reviewed By Placeholder
```html
<!-- TODO: Add "Reviewed by [Name], CPA, MTax" badge here when ready.
     Schema placeholder is in the JSON-LD block below (commented out). -->
```
No visible badge rendered yet.

### BreadcrumbList Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vantiscpa.com/"},
    {"@type": "ListItem", "position": 2, "name": "Resources", "item": "https://vantiscpa.com/resources/"},
    {"@type": "ListItem", "position": 3, "name": "[Cluster Hub Title]", "item": "[Hub URL]"},
    {"@type": "ListItem", "position": 4, "name": "[Article Title]", "item": "[Article URL]"}
  ]
}
```

### FAQPage Schema (JSON-LD)
Rendered only when `faqs:` frontmatter is present:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need to file Form 5471 every year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you meet the ownership thresholds..."
      }
    }
  ]
}
```

### Person Schema Placeholder (commented out)
```json
/* TODO: Uncomment when author name is ready
"author": {
  "@type": "Person",
  "name": "[Author Name]",
  "jobTitle": "CPA, Master of Taxation",
  "url": "[LinkedIn URL]"
}
*/
```

---

## 4. Resource Library Index (`/resources/`)

Add a short introductory paragraph to the top of the resource library page (above the filter/carousel), plus a brief one-liner description per cluster that links to the hub page. This gives Google indexable text instead of just a JavaScript-filtered grid.

Example intro:
> "Our resource library covers the full range of U.S. tax topics — from international compliance for expats and foreign investors, to real estate tax strategy, business entity planning, and general IRS compliance. Browse by topic or use the filters below."

---

## 5. IRS Link Audit

During implementation, check all existing outbound IRS.gov links across the 11 resource articles for 404s. Known risk: IRS frequently reorganizes PDF URLs. Fix any broken links and update to current IRS.gov paths.

Script approach: extract all `irs.gov` hrefs from markdown files and run HTTP status checks before publishing.

---

## 6. Meta Titles for Hub Pages

Each hub `_index.md` should have a hand-written `title:` and `description:` optimized for search — not auto-generated. Examples:

| Hub | Title Tag | Meta Description |
|---|---|---|
| International Tax | "International Tax Resources for U.S. Expats & Business Owners \| Vantis CPA" | "Guides on FEIE, foreign tax credits, Form 5471, FBAR, and pre-immigration planning from a licensed CPA." |
| Real Estate Tax | "Real Estate Tax Strategy Resources \| Vantis CPA" | "In-depth guides on 1031 exchanges, real estate professional status, and short-term rental taxes." |
| Individual Tax | "Individual Tax Planning Resources \| Vantis CPA" | "Retirement accounts, crypto taxes, and tax-saving strategies for individuals and freelancers." |
| Business Tax | "Business Tax Resources for Founders & Owners \| Vantis CPA" | "S-Corp elections, entity planning, and tax strategy guides for small business owners." |
| General Tax Compliance | "IRS Compliance & Tax Deadline Resources \| Vantis CPA" | "Tax calendars, penalty abatement guides, and IRS notice response resources." |
| E-Commerce Sellers | "Tax Resources for Etsy, eBay & Amazon Sellers \| Vantis CPA" | "Sales tax nexus, 1099-K reporting, and entity structure guides for online marketplace sellers." |
| LATAM Inbound | "U.S. Tax Resources for Latin American Investors \| Vantis CPA" | "Form 1120-F, Form 5472, estate blockers, and Form 8832 guides for foreign nationals investing in the U.S." |

---

## Critical Files

| File | Change |
|---|---|
| `/layouts/resources/hub.html` | **New** — hub page layout |
| `/layouts/resources/single.html` | Add breadcrumb, TODO comment, BreadcrumbList + FAQPage schema |
| `/layouts/resources/list.html` | Add intro paragraph + cluster links |
| `/content/resources/international-tax/_index.md` | **New** hub page |
| `/content/resources/real-estate-tax/_index.md` | **New** hub page |
| `/content/resources/individual-tax/_index.md` | **New** hub page |
| `/content/resources/business-tax/_index.md` | **New** hub page |
| `/content/resources/general-tax-compliance/_index.md` | **New** hub page |
| `/content/resources/ecommerce-sellers/_index.md` | **New** hub page |
| `/content/resources/latam-inbound/_index.md` | **New** hub page |
| `/content/resources/digital-nomad-checklist.md` | **New** article |
| `/content/resources/crypto-tax-form-8949.md` | **New** article |
| `/content/resources/penalty-abatement-guide.md` | **New** article |
| All 11 existing `/content/resources/*.md` | Add `cluster:` + `faqs:` frontmatter |

---

## Verification

1. `hugo server` — confirm all 7 hub pages render at their expected URLs
2. Spoke cards on each hub auto-populate from `cluster:` tags
3. Coming-soon stubs appear on e-commerce and LATAM hubs
4. Breadcrumbs render correctly on article pages
5. FAQPage and BreadcrumbList schema validate via Google's Rich Results Test
6. IRS link audit passes (no 404s)
7. `/resources/` index shows intro text + cluster links above the filter grid
8. `hugo --minify` builds without errors
