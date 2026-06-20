# Location Pages: Design (As-Built)

**Date:** 2026-06-20
**Status:** Implemented

## Goal

City-based SEO landing pages for the firm, organized so the structure scales as cities and states are added without becoming overwhelming. Each city page targets "[City] CPA" search intent, covers the firm's full range of services, and carries genuinely unique local content to avoid Google's doorway-page penalty.

## Final structure (two-tier state hubs)

```
/locations/            state cards: Florida, Texas
/locations/florida/    Florida city cards
/locations/texas/      Texas city cards
/locations/<city>/     individual city pages (flat URLs)
```

- **Top level** grows only when a state is added (slow), so it never becomes a wall.
- **State hub pages** (`/locations/florida/`, `/locations/texas/`) are standalone "[State] CPA" pages that can rank on their own. Built on `layout: landing` (title + subtitle + card grid of that state's cities).
- **City pages** keep flat URLs (`/locations/miami/`), so adding the state tier required no redirects.
- All three levels reuse the existing glass-tile card styling.

This superseded two earlier iterations: (1) three regional hubs (South/Tampa Bay/Southwest Florida), removed early; (2) a single filterable grid with a state filter bar, replaced by the two-tier hubs. The filter layout (`layouts/_default/locations.html`) was retired.

## Cities (as built)

- **Florida (7):** Miami, Fort Lauderdale, Tampa, Orlando, Naples, Fort Myers, Cape Coral
- **Texas (4):** Austin, Dallas, Houston, San Antonio

Local angle per city (the spine that keeps each page unique):

| City | Angle |
|---|---|
| Miami | International / Latin America, foreign-owned LLCs, FIRPTA, inbound investment |
| Fort Lauderdale | Marine industry, professional practices, second homes |
| Tampa | Fast-growth service businesses, S-corp / entity strategy |
| Orlando | Hospitality, vacation rentals, sales tax |
| Naples | High-net-worth retirees, wealth planning, short-term rentals |
| Fort Myers | Real estate investors, small business, retirees (Lee County) |
| Cape Coral | Vacation rentals, waterfront/canal real estate (Lee County) |
| Austin | Founders, tech equity, entity strategy |
| Dallas | Real estate, professional practices |
| Houston | Energy, international / cross-border |
| San Antonio | Small business, military families |

Texas pages use a federal-tax-and-service framing (the firm is Florida-licensed) and a light touch on remote work, not a heavy "served remotely" pitch.

## City page format (`layout: service`)

Six sections, covering all services rather than a single specialty:

1. **A CPA for [City]**: local economy, counties, neighborhoods, the no-income-tax angle (Florida and Texas both).
2. **Who We Work With in [City]**: all audiences (individuals/families, business owners, investors, international), tied to the local economy.
3. **Full-Service Tax and Accounting for [City]**: Individual Tax, Business Tax, International Tax, and Full-Suite accounting (bookkeeping, payroll, sales tax) in the city's context.
4. **[City]'s standout angle**: the local specialty as one section, not the whole page.
5. **Why [City] Clients Work With Us**: personalization grounded in real firm material: the three pillars (One Point of Contact, Responsive by Default, We Reach Out You Don't Have To), the process (discovery call, scope/fixed fee, year-round work), and credentials (licensed CPA, Master of Taxation, bilingual EN/ES). The CPA is not named in the body.
6. **Get Started in [City]**: closing CTA, varied per city (no "Let's Talk / we should talk" phrasing).

Each page sets a unique `title` ("[City] CPA") and `description`. `head.html` renders `[Title] | Vantis CPA`.

### Links policy

City pages contain **no in-body links**. The only links are the service-page grid at the bottom (`showCoreServiceLinks`, "How We Help [City] Clients"). No links into the `/resources/` library.

## Hero images

State-level shared images, one per state, set via `heroImage` frontmatter:

- `/images/locations/florida.jpg` (Florida flag), used by all Florida cities
- `/images/locations/texas.jpg` (Texas flag), used by all Texas cities

Photos sourced from Unsplash. See memory `image-source`.

## Navigation and footer

- **Nav:** unchanged. `nav.html` is not touched. Locations are reached via the hub and footer.
- **Footer:** a single "Locations" link in Quick Links pointing to `/locations/`.

## SEO notes

- Global `AccountingService` JSON-LD in `head.html` already lists the launch cities in `areaServed`.
- `BreadcrumbList` JSON-LD auto-generates from page parent (Home > Locations > [City or State]). City URLs are flat, so the breadcrumb does not nest city under state; this was an accepted tradeoff to avoid moving existing city URLs.
- No em dashes anywhere in copy (project hard rule).

## Adding more later

- **New city:** create `content/locations/<city>/_index.md` (copy an existing city, swap the local angle), then add one item to that state's hub `_index.md`.
- **New state:** create `content/locations/<state>/_index.md` (copy `florida` or `texas`), add a state card to the top `/locations/_index.md`, and add a `/images/locations/<state>.jpg` hero.
