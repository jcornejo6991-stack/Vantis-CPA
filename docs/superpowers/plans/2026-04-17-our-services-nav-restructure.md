# Our Services Nav Restructure — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the two separate "Who We Serve" and "Services" nav dropdowns with a single "Our Services" dropdown organized as: Individual Tax, Business Tax, International Tax (→ 3 audience sub-items), Real Estate, Full Suite (→ 4 support service sub-items).

**Architecture:** Two files change — `layouts/partials/nav.html` (HTML structure for desktop dropdown and mobile accordion) and `layouts/partials/nav-css.html` (one new CSS rule for mobile section label). The desktop dropdown reuses the existing `.nav-dropdown-sideways` pattern already in the codebase for International Tax and Full Suite sub-items. The mobile accordion replaces two separate accordions with one.

**Tech Stack:** Hugo templates (Go HTML templating), vanilla CSS, vanilla JS (inline scripts, no framework)

---

## File Map

| File | Change |
|---|---|
| `layouts/partials/nav.html` | Replace `Who We Serve` dropdown + `Services` dropdown with single `Our Services` dropdown; replace two mobile accordions with one |
| `layouts/partials/nav-css.html` | Add `.mobile-section-label` rule (one new class) |

No data file changes. No new files. No changes to expertise pages or service pages.

---

## Task 1: Rewrite Desktop Nav — Replace Two Dropdowns With "Our Services"

**Files:**
- Modify: `layouts/partials/nav.html` (lines 28–75 — the two `<li class="nav-dropdown">` items)

The `<ul class="nav-links">` currently has these items in order:
1. Home
2. Who We Serve dropdown (data-driven, lines 28–62)
3. Services dropdown (hardcoded, lines 64–75)
4. Resources pill
5. Partnerships dropdown
6. Contact Us

Replace items 2 and 3 with a single "Our Services" dropdown. Keep items 1, 4, 5, 6 exactly as-is.

- [ ] **Step 1: Read the current nav.html to find exact line ranges**

```bash
# In directory: C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website
# Read layouts/partials/nav.html lines 25-86 to see current ul.nav-links content
```

- [ ] **Step 2: Replace the two dropdown `<li>` elements with the new "Our Services" `<li>`**

Remove this block (the entire "Who We Serve" `<li>` from line 28 through the "Services" `<li>` closing tag around line 75):

```html
        <li class="nav-dropdown">
          <a href="/expertise/">Who We Serve</a>
          <div class="nav-dropdown-menu">
            {{ range $.Site.Data.expertise }}
              {{ if eq .slug "inbound" }}
              <div class="nav-dropdown-sideways">
                <a href="{{ .url }}"><span>{{ .name }}</span><span class="nav-sideways-arrow">&rarr;</span></a>
                <div class="nav-dropdown-submenu">
                  <a href="/expertise/inbound/foreign-owned-us-llc-operating-business/">Operating-Business LLCs</a>
                  <a href="/expertise/inbound/foreign-owned-us-llc-investment-structures/">Investment LLC Structures</a>
                  <a href="/expertise/inbound/us-subsidiaries-of-foreign-companies/">U.S. Subsidiaries</a>
                </div>
              </div>
              {{ else if eq .slug "realestate" }}
              <div class="nav-dropdown-sideways">
                <a href="{{ .url }}"><span>{{ .name }}</span><span class="nav-sideways-arrow">&rarr;</span></a>
                <div class="nav-dropdown-submenu">
                  <a href="/expertise/realestate/foreign-owned-us-rental-property/">Foreign Rental Property</a>
                  <a href="/expertise/realestate/firpta-us-real-estate-sales/">FIRPTA &amp; Sales</a>
                </div>
              </div>
              {{ else if eq .slug "outbound" }}
              <div class="nav-dropdown-sideways">
                <a href="{{ .url }}"><span>{{ .name }}</span><span class="nav-sideways-arrow">&rarr;</span></a>
                <div class="nav-dropdown-submenu">
                  <a href="/expertise/outbound/latam/">Latin America</a>
                  <a href="/expertise/outbound/canada/">Canada</a>
                </div>
              </div>
              {{ else }}
              <a href="{{ .url }}">{{ .name }}</a>
              {{ end }}
            {{ end }}
          </div>
        </li>

        <li class="nav-dropdown">
          <a href="/services/">Services</a>
          <div class="nav-dropdown-menu">
            <a href="/services/individual-tax/">Individual Tax</a>
            <a href="/services/business-tax/">Business Tax</a>
            <a href="/services/international-tax/">International Tax</a>
            <a href="/services/back-office/">Back Office</a>
            <a href="/services/bookkeeping/">Bookkeeping</a>
            <a href="/services/payroll/">Payroll</a>
            <a href="/services/sales-tax/">Sales Tax</a>
          </div>
        </li>
```

Replace with this single block:

```html
        <li class="nav-dropdown">
          <a href="/services/">Our Services</a>
          <div class="nav-dropdown-menu">
            <a href="/services/individual-tax/">Individual Tax</a>
            <a href="/services/business-tax/">Business Tax</a>
            <hr class="nav-dropdown-divider">
            <div class="nav-dropdown-sideways">
              <a href="/services/international-tax/"><span>International Tax</span><span class="nav-sideways-arrow">&rarr;</span></a>
              <div class="nav-dropdown-submenu">
                <a href="/expertise/expats/">U.S. Expats Abroad</a>
                <a href="/expertise/outbound/">U.S. with International Ties</a>
                <a href="/expertise/inbound/">Foreign Business and Investors</a>
              </div>
            </div>
            <a href="/expertise/realestate/">Real Estate</a>
            <hr class="nav-dropdown-divider">
            <div class="nav-dropdown-sideways">
              <a href="/services/"><span>Full Suite</span><span class="nav-sideways-arrow">&rarr;</span></a>
              <div class="nav-dropdown-submenu">
                <a href="/services/back-office/">Back Office</a>
                <a href="/services/bookkeeping/">Bookkeeping</a>
                <a href="/services/payroll/">Payroll</a>
                <a href="/services/sales-tax/">Sales Tax</a>
              </div>
            </div>
          </div>
        </li>
```

- [ ] **Step 3: Verify the edit looks correct**

Read lines 25–80 of the updated nav.html. Confirm:
- `<li><a href="/">Home</a></li>` is still first
- The new "Our Services" `<li>` follows immediately
- `<li><a href="/resources/" class="nav-pill">Resources</a></li>` follows after
- No leftover "Who We Serve" or old "Services" `<li>` elements remain

---

## Task 2: Rewrite Mobile Nav — Replace Two Accordions With "Our Services"

**Files:**
- Modify: `layouts/partials/nav.html` (lines 150–185 — the two mobile accordion `<div>` elements)

The mobile menu currently has:
1. Home link
2. `mobile-accordion` id="mobile-who-we-serve" (data-driven, lines 150–170)
3. `mobile-accordion` id="mobile-services" (hardcoded, lines 172–185)
4. Resources link
5. Partnerships accordion
6. Pay Bill link (conditional)
7. Contact Us link

Replace items 2 and 3 with a single "Our Services" accordion.

- [ ] **Step 1: Read lines 147–200 of nav.html to see current mobile menu structure**

- [ ] **Step 2: Remove both mobile accordions and replace with one**

Remove this block:

```html
        <div class="mobile-accordion" id="mobile-who-we-serve">
          <button class="mobile-accordion-toggle" aria-expanded="true" aria-controls="mobile-wws-body">
            Who We Serve <span class="mobile-accordion-arrow" aria-hidden="true">&#9662;</span>
          </button>
          <div class="mobile-accordion-body open" id="mobile-wws-body">
            {{ range $.Site.Data.expertise }}
              <a href="{{ .url }}" role="menuitem">{{ .nav_icon }} {{ .name }}</a>
              {{ if eq .slug "inbound" }}
              <a href="/expertise/inbound/foreign-owned-us-llc-operating-business/" role="menuitem" class="mobile-subitem">Operating-Business LLCs</a>
              <a href="/expertise/inbound/foreign-owned-us-llc-investment-structures/" role="menuitem" class="mobile-subitem">Investment LLC Structures</a>
              <a href="/expertise/inbound/us-subsidiaries-of-foreign-companies/" role="menuitem" class="mobile-subitem">U.S. Subsidiaries</a>
              {{ else if eq .slug "realestate" }}
              <a href="/expertise/realestate/foreign-owned-us-rental-property/" role="menuitem" class="mobile-subitem">Foreign Rental Property</a>
              <a href="/expertise/realestate/firpta-us-real-estate-sales/" role="menuitem" class="mobile-subitem">FIRPTA &amp; Sales</a>
              {{ else if eq .slug "outbound" }}
              <a href="/expertise/outbound/latam/" role="menuitem" class="mobile-subitem">Latin America</a>
              <a href="/expertise/outbound/canada/" role="menuitem" class="mobile-subitem">Canada</a>
              {{ end }}
            {{ end }}
          </div>
        </div>

        <div class="mobile-accordion" id="mobile-services">
          <button class="mobile-accordion-toggle" aria-expanded="false" aria-controls="mobile-svc-body">
            Services <span class="mobile-accordion-arrow" aria-hidden="true">&#9662;</span>
          </button>
          <div class="mobile-accordion-body" id="mobile-svc-body">
            <a href="/services/individual-tax/" role="menuitem">Individual Tax</a>
            <a href="/services/business-tax/" role="menuitem">Business Tax</a>
            <a href="/services/international-tax/" role="menuitem">International Tax</a>
            <a href="/services/back-office/" role="menuitem">Back Office</a>
            <a href="/services/bookkeeping/" role="menuitem">Bookkeeping</a>
            <a href="/services/payroll/" role="menuitem">Payroll</a>
            <a href="/services/sales-tax/" role="menuitem">Sales Tax</a>
          </div>
        </div>
```

Replace with:

```html
        <div class="mobile-accordion" id="mobile-our-services">
          <button class="mobile-accordion-toggle" aria-expanded="true" aria-controls="mobile-os-body">
            Our Services <span class="mobile-accordion-arrow" aria-hidden="true">&#9662;</span>
          </button>
          <div class="mobile-accordion-body open" id="mobile-os-body">
            <a href="/services/individual-tax/" role="menuitem">Individual Tax</a>
            <a href="/services/business-tax/" role="menuitem">Business Tax</a>
            <a href="/services/international-tax/" role="menuitem">International Tax</a>
            <a href="/expertise/expats/" role="menuitem" class="mobile-subitem">U.S. Expats Abroad</a>
            <a href="/expertise/outbound/" role="menuitem" class="mobile-subitem">U.S. with International Ties</a>
            <a href="/expertise/inbound/" role="menuitem" class="mobile-subitem">Foreign Business and Investors</a>
            <a href="/expertise/realestate/" role="menuitem">Real Estate</a>
            <div class="mobile-section-label">Full Suite</div>
            <a href="/services/back-office/" role="menuitem" class="mobile-subitem">Back Office</a>
            <a href="/services/bookkeeping/" role="menuitem" class="mobile-subitem">Bookkeeping</a>
            <a href="/services/payroll/" role="menuitem" class="mobile-subitem">Payroll</a>
            <a href="/services/sales-tax/" role="menuitem" class="mobile-subitem">Sales Tax</a>
          </div>
        </div>
```

- [ ] **Step 3: Verify the edit looks correct**

Read the mobile menu section of the updated file. Confirm:
- `id="mobile-our-services"` accordion is present with `aria-expanded="true"` and the body has class `open`
- No `id="mobile-who-we-serve"` or `id="mobile-services"` elements remain
- `<a href="/resources/" role="menuitem">Resources</a>` still follows after
- The Partnerships accordion, Pay Bill, and Contact Us links are all still present unchanged

- [ ] **Step 4: Commit**

```bash
git add layouts/partials/nav.html
git commit -m "feat: replace Who We Serve + Services nav with single Our Services dropdown"
```

---

## Task 3: Add Mobile Section Label CSS + Final Build Check

**Files:**
- Modify: `layouts/partials/nav-css.html` (add one rule after the `.mobile-accordion-body a.mobile-subitem::before` block, around line 378)

- [ ] **Step 1: Read nav-css.html lines 370–383 to find the insertion point**

The `.mobile-subitem::before` rule ends around line 381. Insert the new rule after it, before the closing `</style>` tag.

- [ ] **Step 2: Add the `.mobile-section-label` CSS rule**

Insert this block after the `.mobile-accordion-body a.mobile-subitem::before` closing brace:

```css
    .mobile-section-label {
      font-size: 11px;
      font-weight: 600;
      color: rgba(255,255,255,0.35);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 10px 0 4px 12px;
    }
```

- [ ] **Step 3: Run Hugo build to confirm no errors**

```bash
hugo --minify 2>&1 | tail -5
```

Expected output: build completes with no ERROR lines. "Total in Xms" line present.

- [ ] **Step 4: Commit**

```bash
git add layouts/partials/nav-css.html
git commit -m "feat: add mobile-section-label style for Our Services accordion Full Suite header"
```

---

## Verification Checklist

After both commits, verify in the browser at `http://localhost:1313`:

1. Desktop nav shows: `[Vantis CPA] [Our Services ▾] [Resources] [Partnerships ▾] [Contact Us]` — no "Who We Serve" or "Services" items
2. Hovering "Our Services" opens a dropdown with: Individual Tax, Business Tax, [divider], International Tax →, Real Estate, [divider], Full Suite →
3. Hovering "International Tax →" opens a submenu with: U.S. Expats Abroad, U.S. with International Ties, Foreign Business and Investors
4. Hovering "Full Suite →" opens a submenu with: Back Office, Bookkeeping, Payroll, Sales Tax
5. Clicking "Individual Tax" navigates to `/services/individual-tax/`
6. Clicking "Real Estate" navigates to `/expertise/realestate/`
7. On mobile (≤768px): hamburger opens menu with single "Our Services" accordion expanded by default
8. Mobile "Our Services" shows all items with correct indentation for sub-items and "Full Suite" label
9. Hugo build produces zero ERROR lines
