# Location Pages: Design (As-Built)

**Date:** 2026-06-20
**Status:** Implemented

## Goal

City-based SEO landing pages for the firm, organized so the structure scales as cities and states are added without becoming overwhelming. Each city page targets "[City] CPA" search intent, covers the firm's full range of services, and carries genuinely unique local content to avoid Google's doorway-page penalty.

## Final structure

The firm's strategy is split: **deep coverage in Florida** (where it is licensed and can rank locally and via Google Business Profile) and **niche-only pages elsewhere** (national, federal cross-border work where geography matters less).

```
/locations/            Florida state card + niche city cards (New York, Los Angeles, Chicago)
/locations/florida/    Florida city cards (14)
/locations/<city>/     individual city pages (flat URLs)
```

- **Top hub** mixes one Florida state card (leading to the Florida hub) with individual niche city cards. Niche cities are sparse and one-off per state, so forcing a thin single-city state hub for each was avoided; they link straight to the city page.
- **Florida hub** (`/locations/florida/`) is a standalone "Florida CPA" page (`layout: landing`) listing the 14 Florida city cards.
- **City pages** keep flat URLs (`/locations/miami/`), so structure changes never require redirects.
- All levels reuse the existing glass-tile card styling.

Superseded iterations: (1) three regional hubs (South/Tampa Bay/Southwest Florida), removed early; (2) a single filterable grid with a state filter bar; (3) a symmetric two-tier state model with a Texas hub. The Texas pages and hub were removed in favor of Florida depth plus the international niche play. The filter layout (`layouts/_default/locations.html`) was retired.

## Cities (as built)

**Florida (14), full-service format.** Local angle per city (the spine that keeps each page unique):

| City | Angle |
|---|---|
| Miami | International / Latin America, foreign-owned LLCs, FIRPTA, inbound investment |
| Coral Gables | International business, regional HQs, cross-border (Gateway to the Americas) |
| Fort Lauderdale | Marine industry, professional practices, second homes |
| West Palm Beach | Wealth, finance, residency planning (Palm Beach corridor) |
| Boca Raton | Corporate HQs, professionals, affluent families |
| Port St. Lucie | Small business, families, fast-growing Treasure Coast |
| Orlando | Hospitality, vacation rentals, sales tax |
| Tampa | Fast-growth service businesses, S-corp / entity strategy |
| St. Petersburg | Small business, creative economy |
| Sarasota | Retirees, real estate, wealth planning |
| Fort Myers | Real estate investors, small business, retirees (Lee County) |
| Cape Coral | Vacation rentals, waterfront/canal real estate (Lee County) |
| Naples | High-net-worth retirees, wealth planning, short-term rentals |
| Jacksonville | Small business and growth, largest FL city |

**Niche cities (3), international-only format:** New York, Los Angeles, Chicago. These do not pursue generic "[City] CPA" intent (unwinnable out of state, weak conversion). They target the firm's cross-border moat: foreign investors, foreign-owned LLCs, FIRPTA, expats, U.S. persons with foreign ties, and the Latin American community in each metro. NY and LA are the strongest fits; Chicago leans on the Latino/cross-border-individual angle. DC and the Bay Area are noted as next-best if expanded.

## City page formats (`layout: service`)

There are two formats.

### Florida full-service (six sections)

Covers all services rather than a single specialty:

1. **A CPA for [City]**: local economy, counties, neighborhoods, the no-income-tax angle (Florida and Texas both).
2. **Who We Work With in [City]**: all audiences (individuals/families, business owners, investors, international), tied to the local economy.
3. **Full-Service Tax and Accounting for [City]**: Individual Tax, Business Tax, International Tax, and Full-Suite accounting (bookkeeping, payroll, sales tax) in the city's context.
4. **[City]'s standout angle**: the local specialty as one section, not the whole page.
5. **Why [City] Clients Work With Us**: personalization grounded in real firm material: the three pillars (One Point of Contact, Responsive by Default, We Reach Out You Don't Have To), the process (discovery call, scope/fixed fee, year-round work), and credentials (licensed CPA, Master of Taxation, bilingual EN/ES). The CPA is not named in the body.
6. **Get Started in [City]**: closing CTA, varied per city (no "Let's Talk / we should talk" phrasing).

Each page sets a unique `title` ("[City] CPA") and `description`. `head.html` renders `[Title] | Vantis CPA`.

### Niche international (five sections)

Used for non-Florida cities (New York, Los Angeles, Chicago). Leads with the cross-border specialty, not full service:

1. **International Tax for [City]**: the metro's international/foreign-investor/Latin American character and the firm's specialist focus.
2. **Who We Help in [City]**: foreign investors, foreign-owned LLCs, U.S. persons with foreign ties, expats, pre-immigration.
3. **What We Handle**: foreign business and investors, FIRPTA, U.S. persons with foreign ties, expats and pre-immigration.
4. **Why [City] Clients Work With Us**: same firm pillars and credentials, framed around the cross-border specialty.
5. **Get Started in [City]**.

Title targets the niche ("[City] International Tax CPA"), not generic "[City] CPA". `heroEyebrow` is "International & Cross-Border Tax". These pages avoid implying a local office or local licensure; international tax is federal.

### Links policy

City pages contain **no in-body links**. The only links are the service-page grid at the bottom (`showCoreServiceLinks`, "How We Help [City] Clients"). No links into the `/resources/` library.

## Hero images

Set via `heroImage` frontmatter:

- `/images/locations/florida.jpg` (Florida flag), used by all Florida cities
- `/images/globe-hero.jpg` (globe), used by the niche international cities

Photos sourced from Unsplash. See memory `image-source`.

## Navigation and footer

- **Nav:** unchanged. `nav.html` is not touched. Locations are reached via the hub and footer.
- **Footer:** a single "Locations" link in Quick Links pointing to `/locations/`.

## SEO notes

- Global `AccountingService` JSON-LD in `head.html` already lists the launch cities in `areaServed`.
- `BreadcrumbList` JSON-LD auto-generates from page parent (Home > Locations > [City or State]). City URLs are flat, so the breadcrumb does not nest city under state; this was an accepted tradeoff to avoid moving existing city URLs.
- No em dashes anywhere in copy (project hard rule).

## Adding more later

- **New Florida city:** create `content/locations/<city>/_index.md` (copy an existing Florida city, swap the local angle), then add one item to `content/locations/florida/_index.md`.
- **New niche city:** create `content/locations/<city>/_index.md` (copy New York), reframe for the metro's international community, then add one card to the top `/locations/_index.md`. Uses the globe hero.
- **Promoting a niche state to a hub:** once a non-Florida state has multiple cities, add `content/locations/<state>/_index.md` (copy `florida`), replace its top-hub city cards with a single state card, and optionally add a `/images/locations/<state>.jpg` hero.
