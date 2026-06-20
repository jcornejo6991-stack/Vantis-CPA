# Florida City Location Pages: Design

**Date:** 2026-06-20
**Status:** Approved (pending spec review)

## Goal

Replace the current region-based location structure (3 regional hub pages) with a city-based structure of SEO landing pages focused on Florida. Each city page targets a "[City] CPA" search intent and must carry genuinely unique content to avoid Google's doorway-page penalty. Surface locations through a reworked `/locations/` hub plus a single nav link, rather than footer-only.

## Background

The site currently has 3 region hubs under `/locations/`:

- `/locations/south-florida/`
- `/locations/tampa-bay/`
- `/locations/southwest-florida/`

They are surfaced only via the footer ("Florida Service Areas") and share repeated boilerplate copy. The owner wants city-level pages for local SEO, does not want them confined to the footer, and has chosen to drop the regional layer entirely in favor of cities.

## Scope

In scope:

1. Five new city landing pages: Miami, Fort Lauderdale, Tampa, Naples, Orlando.
2. Reworked `/locations/` hub: a flat grid of city cards (small `landing.html` enhancement if needed).
3. Delete the 3 region pages (content + generated `public/` output).
4. 301 redirects from the 3 old region URLs to their nearest flagship city.
5. Nav: add a single "Locations" link (desktop + mobile), pointing to `/locations/`.
6. Footer: replace the 3-region "Florida Service Areas" list with the hub + city links.

Out of scope (future expansion):

- Additional city pages beyond the first 5 (St. Petersburg, Boca Raton/Palm Beach, Fort Myers/Cape Coral, Sarasota, Jacksonville). Format is validated on these 5 first, then expanded.
- Any reintroduction of region hubs.

## Final URL structure

```
/locations/                  hub: flat grid of city cards
/locations/miami/            city
/locations/fort-lauderdale/  city
/locations/tampa/            city
/locations/naples/           city
/locations/orlando/          city
```

Flat cities under `/locations/` (rather than nesting cities under regions) keep URLs short and keyword-strong, keep crawl depth shallow, and avoid orphaning Orlando (which is Central Florida and had no region hub).

## Doorway-page avoidance: how each city page stays unique

Each city page is built on `layout: service` (the same layout the region hubs use: `sections` with `body` and optional `cards`). Uniqueness comes from four real, non-cosmetic sources:

1. **A distinct local economic angle** that forms the spine of the page:
   - **Miami** -> international / Latin America, foreign-owned LLCs, Form 5472, FIRPTA, inbound investment.
   - **Fort Lauderdale** -> marine industry, professional practices, second-home owners.
   - **Tampa** -> fast-growth and relocated service businesses, S-corp and entity strategy.
   - **Naples** -> high-net-worth retirees, pre-immigration planning, short-term and vacation rentals.
   - **Orlando** -> hospitality, vacation-rental operators, franchises.
2. **A different curated subset of the existing resource library** linked from each page (for example Miami -> FIRPTA, foreign-owned LLC, Form 5472 guides; Naples -> short-term rental + pre-immigration; Orlando -> short-term rental + sales tax). This produces structurally distinct internal linking per page.
3. **Local specifics**: relevant counties, neighborhoods, and local client types named in prose.
4. **Unique `title` and `description` frontmatter** per page. `head.html` renders `[Title] | Vantis CPA`, so `title: "Miami CPA"` etc., with a distinct meta description targeting that market.

The validation test for every page: if its body could be find-replaced onto a different city and remain 100% accurate, it is a doorway page and must be rewritten.

### Per-page content outline (each city)

Built with `layout: service`. Frontmatter mirrors the existing region pages:

- `title`: "[City] CPA"
- `description`: unique meta description for the city.
- `layout: service`, `slug`, `heroEyebrow: "Florida Service Areas"`, `subtitle`.
- `showCoreServiceLinks: true` with a city-specific `coreServiceLinksTitle`.
- `aliases`: the old region URL where this city is the redirect target (see Redirects).
- `sections`:
  1. "A CPA for [City]" / local-angle intro naming counties and neighborhoods.
  2. "Who We Work With in [City]" / client types specific to the local economy.
  3. A focus section tied to the city's angle, with `cards` linking to the most relevant service pages and resource guides for that market.
  4. A closing "Work With Us in [City]" section (varied language across cities, not boilerplate).

## Hub rework (`/locations/`)

The hub uses `layout: landing`, which currently renders a single flat grid from `items` (each item: `eyebrow`, `label`, `description`, `url`). Rework the hub's `items` to list the 5 cities instead of the 3 regions.

Five cards fit the existing flat 2-column grid cleanly, so **no layout change is strictly required**. If a heading/grouping is desired later, that becomes a separate small enhancement to `landing.html`; it is not needed for the city-only grid and is left out under YAGNI.

`_index.md` updates: title, subtitle, and `items` (5 city entries with city-specific eyebrows such as county names).

## Navigation

`nav.html` is hardcoded HTML (not Hugo menus). Add a single "Locations" link in two places:

1. Desktop: a new `<li>` in `.nav-links` (a plain link, no dropdown), positioned after "Resources" and before "Contact Us".
2. Mobile: a new `<a role="menuitem">` in `#mobileMenu`, in the same relative position.

Both link to `/locations/`.

## Footer

In `footer.html`, the "Florida Service Areas" block currently lists the 3 region URLs. Replace with:

- A link to the hub (`/locations/`), and
- The 5 city links.

## Redirects (preserve existing SEO equity)

The 3 region URLs are likely indexed. Delete the pages but 301-redirect each to its nearest flagship city via Hugo `aliases` on the new city pages:

- `/locations/south-florida/` -> `/locations/miami/`
- `/locations/tampa-bay/` -> `/locations/tampa/`
- `/locations/southwest-florida/` -> `/locations/naples/`

Implementation: add `aliases` frontmatter to the corresponding city `_index.md`. Hugo generates redirecting stub pages at the old paths. (If the host requires server-level 301s instead of Hugo alias meta-refresh, add equivalent Cloudflare redirects; Hugo aliases are the default approach here.)

## Deletions

- `content/locations/south-florida/_index.md`
- `content/locations/tampa-bay/_index.md`
- `content/locations/southwest-florida/_index.md`
- Corresponding `public/locations/<region>/` output (regenerated on build).

## Schema / SEO notes

- Global JSON-LD in `head.html` (`AccountingService`) already lists Miami, Tampa, Orlando, Naples, and Fort Lauderdale (plus ~30 more FL cities) in `areaServed`. No schema change required for the 5 launch cities.
- `BreadcrumbList` JSON-LD auto-generates from page parent: each city resolves to Home > Florida Service Areas (hub) > [City], which is correct.
- Each city page must set a unique `title` and `description` (the primary on-page SEO levers alongside H1 and internal links).

## Content rules

- No em dashes anywhere in copy (project hard rule). Use commas, colons, periods, parentheses, or restructure. En dashes in numeric ranges are acceptable.
- Match the voice and structure of the existing region pages (proactive, plain, client-fear-aware), but vary closing/boilerplate language across cities to avoid duplicate-content signals.

## Implementation order

1. Create the 5 city `_index.md` files with unique content and `aliases`.
2. Rework `/locations/_index.md` hub items to the 5 cities.
3. Update `nav.html` (desktop + mobile) with the "Locations" link.
4. Update `footer.html` "Florida Service Areas" block.
5. Delete the 3 region content files.
6. Build and verify: new pages render, hub grid shows 5 cities, old region URLs redirect, nav/footer links resolve, no em dashes.
