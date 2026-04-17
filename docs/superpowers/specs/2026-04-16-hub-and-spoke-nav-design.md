# Hub-and-Spoke Navigation Redesign

**Date:** 2026-04-16
**Status:** Superseded — see Piece 2 nav restructure spec (Our Services mega-menu combining Who We Serve + Services)

---

## Problem

The current nav has two overlapping dropdowns — **Services** and **Expertise** — that create a navigation dead-end for new visitors. A U.S. expat, a foreign investor, and a real estate owner all land on the same nav and don't know whether to click "Services › International Tax" or "Expertise › U.S. Expats Abroad." This is the "Matrix Problem": two axes (what we do, who we serve) presented as equals, with no clear entry point.

---

## Solution

Reorganize the nav around a single primary question: **"Who We Serve?"** The expertise pages become the entry point (hubs). Service pages remain accessible via a secondary dropdown (spokes) for returning clients who already know what they need.

---

## Nav Structure (After)

```
[Vantis CPA]  [Who We Serve ▾]  [Services ▾]  [Resources]  [Referrals]     [Schedule a Call →]
```

- **"Home" link removed** — the brand/logo already links home; the standalone link is redundant
- **"Who We Serve"** — primary dropdown, rendered as a mega-menu panel
- **"Services"** — secondary dropdown, unchanged from today, moved to second position
- **"Resources"** — unchanged (pill style)
- **"Referrals"** — unchanged
- **"CONTACT" link removed** — replaced by "Schedule a Call →" CTA button (already in design)
- **"Schedule a Call →"** — orange CTA button, far right

---

## Who We Serve — Mega-Menu

Hovering "Who We Serve" opens a full-width panel anchored below the nav bar. The panel contains a 3×2 grid (3 columns, 2 rows) — one cell per expertise area.

### Panel layout

```
┌──────────────────────────────────────────────────────────────────┐
│  🌍 U.S. Expats Abroad    🏢 Founders & Startups   🌎 Foreign Investors  │
│  · FEIE & Foreign Tax Credit   · S-Corp Election        · U.S. Entity Setup      │
│  · FBAR / FATCA Reporting      · Intl. Business Structure· Form 5472 Compliance  │
│  · Streamlined Filing          · Bookkeeping & Back Office· FIRPTA & Withholding │
│  · Self-Employment Abroad      · Payroll Setup           · Treaty Analysis       │
│  → All expat services          → All founder services    → All inbound services  │
│                                                                                   │
│  🏠 Real Estate Owners    🧭 U.S. with Foreign Ties  👤 Individuals & Families  │
│  · 1031 Exchange Planning      · Forms 5471/8865/8858    · Tax Prep & Planning    │
│  · Cost Segregation            · Foreign Inheritance     · RSUs & Stock Options  │
│  · Real Estate Professional    · Dual Citizen Filing     · Multi-State Returns   │
│  · Short-Term Rental Strategy  · Foreign Pension         · IRS Notice Response   │
│  → All real estate services    → All outbound services   → All individual services│
└──────────────────────────────────────────────────────────────────┘
```

### Linking behavior

Every item in a column — both the column header and the 4 bullet points — links to the **same expertise hub page**. The bullet point labels are recognition cues only; they are not separate pages.

| Column | Links to |
|---|---|
| U.S. Expats Abroad | `/expertise/expats/` |
| Founders & Startups | `/expertise/business/` |
| Foreign Investors | `/expertise/inbound/` |
| Real Estate Owners | `/expertise/realestate/` |
| U.S. with Foreign Ties | `/expertise/outbound/` |
| Individuals & Families | `/expertise/individuals/` |

The "→ All X services" footer link at the bottom of each column also links to the same expertise page. It is a fallback, not a separate destination.

### Data source

The mega-menu is driven by `data/expertise.json`. Each entry needs a new `preview_items` array (4 short strings) added. All other existing fields (`name`, `slug`, `url`, `accent`, `description`) are preserved.

Example entry after change:
```json
{
  "name": "U.S. Expats Abroad",
  "slug": "expats",
  "url": "/expertise/expats/",
  "accent": "expats",
  "description": "...",
  "preview_items": [
    "FEIE & Foreign Tax Credit",
    "FBAR / FATCA Reporting",
    "Streamlined Prior-Year Filing",
    "Self-Employment Abroad"
  ]
}
```

The Hugo template loops `$.Site.Data.expertise` to render columns. No hardcoded content in the partial.

---

## Services Dropdown (Unchanged)

The Services dropdown keeps its current items and behavior. Only its position in the nav changes (moves from first dropdown to second).

Items (in order, with a visual divider between strategy and support):
- Tax Strategy
- Tax Compliance
- International Tax
- *(divider)*
- Back Office
- Bookkeeping
- Payroll
- Sales Tax

---

## Mobile Nav

The mobile hamburger menu is updated to reflect the new structure:

```
[Vantis CPA]                            [☰]
─────────────────────────────────────────
Who We Serve                            [▾]   ← tappable accordion
  🌍 U.S. Expats Abroad
  🏢 Founders & Startups
  🌎 Foreign Investors
  🏠 Real Estate Owners
  🧭 U.S. with Foreign Ties
  👤 Individuals & Families
Services                                [▾]   ← tappable accordion (collapsed by default)
Resources
Referrals
─────────────────────────────────────────
Schedule a Call →                             ← full-width CTA
```

- "Who We Serve" expands by default (or on tap) to show the 6 segment links
- "Services" is collapsed by default — tap to expand
- "Home" and "Contact" links removed (brand = home, CTA = contact)
- "Pay Bill" link retained if it was present in prior mobile menu

---

## Files Changed

| File | Change |
|---|---|
| `layouts/partials/nav.html` | Full rewrite of nav link list and mobile menu; add mega-menu panel HTML |
| `layouts/partials/nav-css.html` | Add mega-menu panel styles; update mobile accordion styles |
| `data/expertise.json` | Add `preview_items` array (4 strings) to each of the 6 entries |

No new files. No changes to expertise pages, service pages, or any layout files outside the nav partial.

---

## CSS Notes

The mega-menu panel:
- Position: `absolute`, full viewport width, anchored to bottom of nav bar
- Background: matches nav (`linear-gradient` or solid dark green)
- Border-top: 2px solid accent color to visually separate from nav bar
- Grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- Show/hide: same JS hover pattern as existing dropdowns (mouseenter/mouseleave with 300ms timeout)
- On mobile (≤768px): panel hidden; mega-menu replaced by accordion in mobile menu

Existing dropdown CSS for Services dropdown stays as-is.

---

## What Is Not Changing

- Top contact strip (email + phone)
- Scroll shadow behavior (`.scrolled` class)
- Nav background color / gradient
- Services page content
- Expertise page content
- Resources, Referrals, Contact pages
- The `data/expertise.json` fields other than adding `preview_items`
