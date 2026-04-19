# Hub-and-Spoke Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Services + Expertise dual-dropdown nav with a "Who We Serve" mega-menu (primary) and Services dropdown (secondary), driven by expertise.json.

**Architecture:** Three files change. `data/expertise.json` gains `nav_icon`, `nav_label`, and `preview_items` fields. `layouts/partials/nav.html` replaces the desktop link list and mobile menu. `layouts/partials/nav-css.html` adds mega-menu panel styles. No new files, no page content changes.

**Tech Stack:** Hugo (Go templates), vanilla CSS (existing nav-css.html pattern), vanilla JS (existing inline script pattern)

---

### Task 1: Extend expertise.json with mega-menu fields

**Files:**
- Modify: `data/expertise.json`

- [ ] **Step 1: Replace expertise.json with the extended version**

Open `data/expertise.json` and replace its entire contents with:

```json
[
  {
    "name": "Individuals and Families",
    "slug": "individuals",
    "url": "/expertise/individuals/",
    "accent": "local",
    "description": "Tax preparation for individuals and families with W-2s, 1099s, K-1s, rental income, equity compensation, and investment complexity.",
    "nav_icon": "👤",
    "nav_label": "Individuals & Families",
    "preview_items": [
      "Tax Preparation & Planning",
      "RSUs, Stock Options & QSBS",
      "Multi-State Returns",
      "IRS Notice Response"
    ]
  },
  {
    "name": "Local and Online Business",
    "slug": "business",
    "url": "/expertise/business/",
    "accent": "founders",
    "description": "Tax and accounting for owner-operated businesses, from local stores, trades, and professional practices to online businesses and digital service companies.",
    "nav_icon": "🏢",
    "nav_label": "Founders & Startups",
    "preview_items": [
      "S-Corp Election & Strategy",
      "International Business Structure",
      "Bookkeeping & Back Office",
      "Payroll Setup"
    ]
  },
  {
    "name": "Real Estate Owners",
    "slug": "realestate",
    "url": "/expertise/realestate/",
    "accent": "realestate",
    "description": "Tax planning for property owners, short-term rental operators, and investors in real estate partnerships and funds.",
    "nav_icon": "🏠",
    "nav_label": "Real Estate Owners",
    "preview_items": [
      "1031 Exchange Planning",
      "Cost Segregation & Depreciation",
      "Real Estate Professional Status",
      "Short-Term Rental Strategy"
    ]
  },
  {
    "name": "U.S. Individuals with International Ties",
    "slug": "outbound",
    "url": "/expertise/outbound/",
    "accent": "outbound",
    "description": "Tax compliance and planning for citizens, green card holders, and dual residents with foreign accounts, foreign companies, and cross-border tax complexity.",
    "nav_icon": "🧭",
    "nav_label": "U.S. with Foreign Ties",
    "preview_items": [
      "Forms 5471 / 8865 / 8858",
      "Foreign Inheritance & Form 3520",
      "Dual Citizen & Green Card Filing",
      "Foreign Pension Reporting"
    ]
  },
  {
    "name": "Foreign Business and Investors",
    "slug": "inbound",
    "url": "/expertise/inbound/",
    "accent": "inbound",
    "description": "We offer comprehensive services to help foreign businesses and investors enter the U.S. smoothly.",
    "nav_icon": "🌎",
    "nav_label": "Foreign Investors",
    "preview_items": [
      "U.S. Entity & EIN Setup",
      "Form 5472 Compliance",
      "FIRPTA & Withholding",
      "Treaty Analysis"
    ]
  },
  {
    "name": "U.S. Expats Abroad",
    "slug": "expats",
    "url": "/expertise/expats/",
    "accent": "expats",
    "description": "Remote compliance support bridging the gap between the U.S. tax system and international residency.",
    "nav_icon": "🌍",
    "nav_label": "U.S. Expats Abroad",
    "preview_items": [
      "FEIE & Foreign Tax Credit",
      "FBAR / FATCA Reporting",
      "Streamlined Prior-Year Filing",
      "Self-Employment Abroad"
    ]
  }
]
```

- [ ] **Step 2: Verify Hugo can parse the updated file**

Run: `hugo --quiet 2>&1 | head -20`

Expected: no errors. If you see `error: failed to unmarshal JSON`, check for trailing commas or mismatched brackets in expertise.json.

- [ ] **Step 3: Commit**

```bash
git add data/expertise.json
git commit -m "feat: add nav_icon, nav_label, preview_items to expertise.json"
```

---

### Task 2: Rebuild the desktop nav link list

**Files:**
- Modify: `layouts/partials/nav.html`

The goal: replace everything inside `<ul class="nav-links">` with the new structure. The `<ul>` tag, hamburger button, and all script tags stay untouched — only the `<ul>` contents change.

- [ ] **Step 1: Replace the contents of `<ul class="nav-links">`**

In `layouts/partials/nav.html`, find the `<ul class="nav-links" ...>` block (lines 27–54) and replace its entire contents with:

```html
      <ul class="nav-links" role="list">

        {{/* ── WHO WE SERVE — mega-menu ── */}}
        <li class="nav-dropdown nav-mega" id="nav-who-we-serve">
          <a href="/expertise/">Who We Serve</a>
          <div class="nav-mega-panel" id="who-we-serve-panel">
            {{ range $.Site.Data.expertise }}
            {{ $url := .url }}
            {{ $label := .nav_label }}
            <div class="nav-mega-col">
              <a class="nav-mega-col-head" href="{{ $url }}">
                <span class="nav-mega-icon" aria-hidden="true">{{ .nav_icon }}</span>
                {{ $label }}
              </a>
              {{ range .preview_items }}
              <a class="nav-mega-item" href="{{ $url }}">{{ . }}</a>
              {{ end }}
              <a class="nav-mega-see-all" href="{{ $url }}">All {{ $label }} services →</a>
            </div>
            {{ end }}
          </div>
        </li>

        {{/* ── SERVICES — standard dropdown (second position) ── */}}
        <li class="nav-dropdown">
          <a href="/services/">Services</a>
          <div class="nav-dropdown-menu">
            <a href="/services/tax-strategy/">Tax Strategy</a>
            <a href="/services/tax-compliance/">Tax Compliance</a>
            <a href="/services/international-tax/">International Tax</a>
            <hr class="nav-dropdown-divider">
            <a href="/services/back-office/">Back Office</a>
            <a href="/services/bookkeeping/">Bookkeeping</a>
            <a href="/services/payroll/">Payroll</a>
            <a href="/services/sales-tax/">Sales Tax</a>
          </div>
        </li>

        <li><a href="/resources/" class="nav-pill">Resources</a></li>
        <li><a href="/referrals/">Referrals</a></li>
        <li><a href="/contact/" class="nav-cta-link">Schedule a Call</a></li>

      </ul>
```

- [ ] **Step 2: Update the dropdown hover script**

The existing hover script (inside the `<script>` tag after `</ul>`) uses `querySelectorAll(':scope > li.nav-dropdown')` — this already covers the new `nav-mega` li because it has `nav-dropdown` class. No changes needed to the script itself.

Verify by reading the script block and confirming the selector `.nav-links > li.nav-dropdown` or `:scope > li.nav-dropdown` is present. If it is, leave it as-is.

- [ ] **Step 3: Start Hugo dev server and verify desktop nav renders**

Run: `hugo server -D --disableFastRender`

Open `http://localhost:1313` in a browser. Confirm:
- "Who We Serve" appears first in the nav
- "Services" appears second
- Hovering "Who We Serve" opens a panel (even unstyled at this point — the CSS comes in Task 3)
- Hovering "Services" opens the existing white dropdown with all 7 items
- The `<hr>` divider appears between International Tax and Back Office

- [ ] **Step 4: Commit**

```bash
git add layouts/partials/nav.html
git commit -m "feat: replace desktop nav with Who We Serve mega-menu"
```

---

### Task 3: Add mega-menu CSS

**Files:**
- Modify: `layouts/partials/nav-css.html`

- [ ] **Step 1: Add positioning context to nav-main-row**

In `layouts/partials/nav-css.html`, find `.nav-main-row {` and add `position: relative;` to it:

```css
    .nav-main-row {
      width: 100%;
      position: relative;
    }
```

- [ ] **Step 2: Make nav-mega use static positioning so its panel breaks out to nav-main-row**

Add this rule after the existing `.nav-dropdown { position: relative; ... }` block:

```css
    /* Mega-menu li must be static so panel positions relative to nav-main-row */
    .nav-mega {
      position: static;
    }
```

- [ ] **Step 3: Add the mega-panel styles**

Append the following CSS block to `layouts/partials/nav-css.html`, before the closing `</style>` tag:

```css
    /* ── MEGA-MENU PANEL ── */
    .nav-mega-panel {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: linear-gradient(160deg, #0a2e1c 0%, #081e12 100%);
      border-top: 2px solid rgba(255,255,255,0.12);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 12px 32px rgba(0,0,0,0.35);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      padding: 24px 18px 20px;
      max-width: none;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.25s ease, visibility 0.25s ease;
      z-index: 9999;
    }
    .nav-mega-panel.open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .nav-mega-col {
      padding: 0 20px 4px;
      border-right: 1px solid rgba(255,255,255,0.06);
      display: flex;
      flex-direction: column;
    }
    .nav-mega-col:nth-child(3n) {
      border-right: none;
    }

    .nav-mega-col-head {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      text-transform: none;
      letter-spacing: 0;
      padding: 0 0 10px;
      margin-bottom: 6px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      transition: opacity 0.15s;
    }
    .nav-mega-col-head:hover { opacity: 0.75; }
    .nav-mega-icon { font-size: 14px; }

    .nav-mega-item {
      font-size: 12px;
      font-weight: 500;
      color: rgba(255,255,255,0.55);
      text-decoration: none;
      text-transform: none;
      letter-spacing: 0;
      padding: 5px 0 5px 4px;
      border-left: 2px solid transparent;
      transition: color 0.15s, border-color 0.15s, padding-left 0.15s;
    }
    .nav-mega-item:hover {
      color: rgba(255,255,255,0.9);
      border-left-color: var(--accent, #4ade80);
      padding-left: 8px;
      opacity: 1;
    }

    .nav-mega-see-all {
      margin-top: auto;
      padding-top: 10px;
      font-size: 11px;
      font-weight: 600;
      color: rgba(255,255,255,0.3);
      text-decoration: none;
      text-transform: none;
      letter-spacing: 0.02em;
      transition: color 0.15s;
    }
    .nav-mega-see-all:hover { color: rgba(255,255,255,0.65); opacity: 1; }

    /* Services dropdown divider */
    .nav-dropdown-divider {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 4px 0;
    }

    /* CTA link in nav */
    .nav-cta-link {
      background: #f97316 !important;
      color: #fff !important;
      padding: 7px 16px !important;
      border-radius: 6px !important;
      font-weight: 700 !important;
      text-transform: none !important;
      letter-spacing: 0 !important;
      transition: background 0.2s !important;
    }
    .nav-cta-link:hover { background: #ea6c0a !important; opacity: 1 !important; }

    /* Hide mega panel on mobile — accordion handles it */
    @media (max-width: 768px) {
      .nav-mega-panel { display: none !important; }
    }
```

- [ ] **Step 4: Update the dropdown hover script to use the .open class for the mega panel**

In `layouts/partials/nav.html`, find the first `<script>` block — the one inside `.nav-inner`, immediately after `</ul>` and before `</div>`. This is the dropdown hover script. Replace it entirely with:

```html
      <script>
        (function() {
          var dropdownTimeout;
          var navLinks = document.querySelector('.nav-links');
          if (!navLinks) return;
          var mainDropdowns = navLinks.querySelectorAll(':scope > li.nav-dropdown');

          mainDropdowns.forEach(function(dropdown) {
            var menu = dropdown.querySelector('.nav-dropdown-menu, .nav-mega-panel');
            if (!menu) return;
            var isMega = menu.classList.contains('nav-mega-panel');

            function showMenu() {
              clearTimeout(dropdownTimeout);
              mainDropdowns.forEach(function(other) {
                if (other !== dropdown) {
                  var otherMenu = other.querySelector('.nav-dropdown-menu, .nav-mega-panel');
                  if (otherMenu) {
                    if (otherMenu.classList.contains('nav-mega-panel')) {
                      otherMenu.classList.remove('open');
                    } else {
                      otherMenu.style.opacity = '0';
                      otherMenu.style.visibility = 'hidden';
                      otherMenu.style.pointerEvents = 'none';
                    }
                  }
                }
              });
              if (isMega) {
                menu.classList.add('open');
              } else {
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.style.pointerEvents = 'auto';
              }
            }

            function hideMenu() {
              dropdownTimeout = setTimeout(function() {
                if (isMega) {
                  menu.classList.remove('open');
                } else {
                  menu.style.opacity = '0';
                  menu.style.visibility = 'hidden';
                  menu.style.pointerEvents = 'none';
                }
              }, 300);
            }

            dropdown.addEventListener('mouseenter', showMenu);
            dropdown.addEventListener('mouseleave', hideMenu);
            menu.addEventListener('mouseenter', function() { clearTimeout(dropdownTimeout); });
            menu.addEventListener('mouseleave', hideMenu);
          });
        })();
      </script>
```

Note: this is the **first** `<script>` block (inside `.nav-inner`). Do not touch the second `<script>` block after `</nav>` — that one handles scroll shadow and hamburger and is updated in Task 4.

- [ ] **Step 5: Verify in browser**

With `hugo server -D` running, open `http://localhost:1313`. Confirm:
- Hovering "Who We Serve" opens the full-width dark panel with 6 columns in a 3×2 grid
- Each column shows the emoji, bold header, 4 grey items with left-border hover effect, and a faint "All X services →" footer
- Moving mouse from "Who We Serve" into the panel keeps it open; leaving the panel closes it after ~300ms
- Hovering "Services" opens the white dropdown (unchanged appearance) with the divider between International Tax and Back Office
- "Schedule a Call" appears as an orange button at the far right

- [ ] **Step 6: Commit**

```bash
git add layouts/partials/nav-css.html layouts/partials/nav.html
git commit -m "feat: add mega-menu panel CSS and update hover script"
```

---

### Task 4: Update the mobile menu

**Files:**
- Modify: `layouts/partials/nav.html`

- [ ] **Step 1: Replace the mobile-menu div**

In `layouts/partials/nav.html`, find the `<div class="mobile-menu" id="mobileMenu" ...>` block (currently a flat list of `<a>` tags) and replace it entirely with:

```html
      <div class="mobile-menu" id="mobileMenu" role="menu">

        {{/* Who We Serve — expanded by default */}}
        <div class="mobile-accordion" id="mobile-who-we-serve">
          <button class="mobile-accordion-toggle" aria-expanded="true" aria-controls="mobile-wws-body">
            Who We Serve <span class="mobile-accordion-arrow" aria-hidden="true">▾</span>
          </button>
          <div class="mobile-accordion-body open" id="mobile-wws-body">
            {{ range $.Site.Data.expertise }}
            <a href="{{ .url }}" role="menuitem">{{ .nav_icon }} {{ .nav_label }}</a>
            {{ end }}
          </div>
        </div>

        {{/* Services — collapsed by default */}}
        <div class="mobile-accordion" id="mobile-services">
          <button class="mobile-accordion-toggle" aria-expanded="false" aria-controls="mobile-svc-body">
            Services <span class="mobile-accordion-arrow" aria-hidden="true">▾</span>
          </button>
          <div class="mobile-accordion-body" id="mobile-svc-body">
            <a href="/services/tax-strategy/" role="menuitem">Tax Strategy</a>
            <a href="/services/tax-compliance/" role="menuitem">Tax Compliance</a>
            <a href="/services/international-tax/" role="menuitem">International Tax</a>
            <a href="/services/back-office/" role="menuitem">Back Office</a>
            <a href="/services/bookkeeping/" role="menuitem">Bookkeeping</a>
            <a href="/services/payroll/" role="menuitem">Payroll</a>
            <a href="/services/sales-tax/" role="menuitem">Sales Tax</a>
          </div>
        </div>

        <a href="/resources/" role="menuitem">Resources</a>
        <a href="/referrals/" role="menuitem">Referrals</a>
        {{ with $.Site.Data.siteconfig.integrations.stripe.billPayUrl }}
        <a href="{{ . }}" role="menuitem" target="_blank" rel="noopener noreferrer">Pay Bill</a>
        {{ end }}
        <a href="/contact/" class="mobile-menu-cta" role="menuitem">Schedule a Call →</a>

      </div>
```

- [ ] **Step 2: Add accordion JS to the mobile menu script block**

In `layouts/partials/nav.html`, find the hamburger/mobile-menu `<script>` block (the second `<script>` tag after the nav, which handles hamburger toggle and link-click close). Add the accordion logic inside that IIFE, after the existing hamburger code:

Replace the entire second `<script>` block with:

```html
<script>
  // Nav scroll shadow with throttling
  (function () {
    var nav = document.getElementById('nav');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          nav.classList.toggle('scrolled', window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  })();

  // Hamburger / mobile menu
  (function () {
    var btn = document.getElementById('hamburger');
    var menu = document.getElementById('mobileMenu');
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
    // Close menu when a non-accordion link is clicked
    menu.querySelectorAll('a[role="menuitem"]').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  })();

  // Mobile accordion toggles
  (function () {
    document.querySelectorAll('.mobile-accordion-toggle').forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var bodyId = toggle.getAttribute('aria-controls');
        var body = document.getElementById(bodyId);
        var isOpen = body.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        var arrow = toggle.querySelector('.mobile-accordion-arrow');
        if (arrow) arrow.style.transform = isOpen ? 'rotate(180deg)' : '';
      });
    });
  })();
</script>
```

- [ ] **Step 3: Add mobile accordion CSS**

In `layouts/partials/nav-css.html`, append the following inside the `<style>` block, before `</style>`:

```css
    /* ── MOBILE ACCORDION ── */
    .mobile-accordion {
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .mobile-accordion-toggle {
      width: 100%;
      background: none;
      border: none;
      padding: 13px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      color: #e2e8f0;
      cursor: pointer;
      text-align: left;
    }
    .mobile-accordion-arrow {
      font-size: 12px;
      color: rgba(255,255,255,0.4);
      transition: transform 0.2s ease;
    }
    .mobile-accordion-body {
      display: none;
      flex-direction: column;
      padding-bottom: 6px;
    }
    .mobile-accordion-body.open {
      display: flex;
    }
    .mobile-accordion-body a {
      font-size: 14px;
      font-weight: 400;
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      padding: 9px 0 9px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .mobile-accordion-body a:last-child { border-bottom: none; }
    .mobile-accordion-body a:hover { color: rgba(255,255,255,0.9); }

    .mobile-menu-cta {
      display: block;
      margin-top: 8px;
      background: #f97316;
      color: #fff !important;
      font-weight: 700 !important;
      font-size: 15px !important;
      text-align: center;
      border-radius: 6px;
      padding: 12px 0 !important;
      border-bottom: none !important;
    }
    .mobile-menu-cta:hover { background: #ea6c0a; }
```

- [ ] **Step 4: Verify mobile nav on a narrow viewport**

With `hugo server -D` running, open `http://localhost:1313` and resize the browser below 768px (or use DevTools device emulation). Confirm:
- Hamburger icon appears; desktop nav links are hidden
- Tapping hamburger opens the mobile menu
- "Who We Serve" section is expanded by default, showing all 6 segments with emoji
- Tapping "Who We Serve" collapses it; tapping again expands it; arrow rotates
- "Services" section is collapsed by default; tapping it expands to show 7 service links
- "Resources" and "Referrals" appear as flat links below the accordions
- "Schedule a Call →" appears as an orange full-width button at the bottom
- Tapping any expertise or service link closes the entire mobile menu

- [ ] **Step 5: Commit**

```bash
git add layouts/partials/nav.html layouts/partials/nav-css.html
git commit -m "feat: add mobile accordion menu for Who We Serve and Services"
```

---

### Task 5: Cross-browser verification and cleanup

**Files:**
- No code changes — verification only

- [ ] **Step 1: Verify all expertise hub links work**

With `hugo server -D` running, hover over "Who We Serve" on desktop. Click each of the 6 column headers and confirm they land on the correct expertise page:
- 👤 → `/expertise/individuals/`
- 🏢 → `/expertise/business/`
- 🏠 → `/expertise/realestate/`
- 🧭 → `/expertise/outbound/`
- 🌎 → `/expertise/inbound/`
- 🌍 → `/expertise/expats/`

Also click one preview item in each column — confirm it also lands on the same expertise page as the header.

- [ ] **Step 2: Verify Services dropdown links work**

Hover "Services" and click each item. Confirm:
- Tax Strategy → `/services/tax-strategy/`
- Tax Compliance → `/services/tax-compliance/`
- International Tax → `/services/international-tax/`
- Back Office → `/services/back-office/`
- Bookkeeping → `/services/bookkeeping/`
- Payroll → `/services/payroll/`
- Sales Tax → `/services/sales-tax/`

- [ ] **Step 3: Verify no Hugo build errors**

Run: `hugo --quiet 2>&1`

Expected: empty output (no warnings or errors). If you see template errors referencing `.nav_icon` or `.preview_items`, the expertise.json change from Task 1 did not save correctly — re-verify that file.

- [ ] **Step 4: Final commit**

```bash
git add -p   # review any unstaged changes
git commit -m "fix: verify and finalize hub-and-spoke nav implementation"
```

If there are no unstaged changes, skip this step.
