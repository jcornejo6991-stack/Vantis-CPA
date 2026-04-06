# Resource Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a SEO-driven resource library at `/resources/` with individual Hugo article pages, fix the homepage resource section (working links, mobile, 2025 dates), and update navigation.

**Architecture:** Hugo content files in `content/resources/` generate individual article pages. A `layouts/resources/list.html` renders the library index; `layouts/resources/single.html` renders each article with two floating cards (hero + body). The homepage carousel is patched in-place — no structural change, just JS fixes.

**Tech Stack:** Hugo static site, Go templates, vanilla JS, Formspree (form submissions), Cal.com (scheduling). CSS inline in layout files (existing site pattern).

---

## File Map

| File | Action |
|------|--------|
| `content/resources/_index.md` | Create |
| `content/resources/s-corps.md` | Create |
| `content/resources/smllc-5472.md` | Create |
| `content/resources/form-5471.md` | Create |
| `content/resources/due-dates.md` | Create |
| `content/resources/1031-exchange.md` | Create |
| `layouts/resources/list.html` | Create |
| `layouts/resources/single.html` | Create |
| `layouts/index.html` | Edit (4 targeted changes) |
| `layouts/partials/nav.html` | Edit (2 lines) |

---

## Task 1: Content Files

**Files:**
- Create: `content/resources/_index.md`
- Create: `content/resources/s-corps.md`
- Create: `content/resources/smllc-5472.md`
- Create: `content/resources/form-5471.md`
- Create: `content/resources/due-dates.md`
- Create: `content/resources/1031-exchange.md`

- [ ] **Step 1: Create `content/resources/_index.md`**

```markdown
---
title: "Resource Library"
description: "Tax guides, planning strategies, and compliance checklists for founders, expats, real estate owners, and global businesses."
---
```

- [ ] **Step 2: Create `content/resources/s-corps.md`**

```markdown
---
title: "S-Corporation Election: When It Makes Sense (and When It Doesn't)"
description: "Learn when an S-Corp election saves taxes and when it costs more. Covers the savings calculation, reasonable salary rules, and who should avoid electing."
date: 2025-01-15
practices: ["founders", "local", "realestate"]
services: ["tax-strategy", "tax-compliance"]
featured: true
---

## What Is an S-Corp Election?

An S-Corporation isn't a separate business entity — it's a tax election made on IRS Form 2553. A standard LLC or C-Corporation can elect S-Corp status to change how profits flow to your personal tax return.

The key benefit: only your W-2 salary is subject to self-employment (SE) tax. Remaining profits pass through as distributions — not subject to the 15.3% SE tax rate.

## The Math Behind the Savings

SE tax applies at 15.3% on the first $176,100 of net self-employment income (2025), then 2.9% above that threshold. For a business owner with $200,000 in net profit paying themselves a $90,000 reasonable salary:

- SE tax on $90,000 salary: approximately $12,700
- SE tax avoided on $110,000 distribution: approximately $15,900 in savings
- Minus S-Corp administrative costs (payroll processing, Form 1120-S): $3,000–$5,000/year
- **Net annual savings: approximately $10,000–$13,000**

## When S-Corp Election Makes Sense

The election typically becomes worthwhile when net profit consistently exceeds $50,000–$75,000 per year. Below that threshold, the administrative overhead — mandatory payroll, a separate S-Corp tax return, and potential state fees — often outweighs the SE tax savings.

**Good candidates:**
- Single-member LLCs or C-Corps with stable net profit above $75,000
- Businesses with predictable cash flow to fund payroll
- Owners who want to maximize retirement contributions tied to W-2 income

## When the Election Doesn't Make Sense

- **Venture-backed or investor-funded businesses** — S-Corps cannot exceed 100 shareholders, cannot have corporate shareholders, and cannot have non-resident alien shareholders
- **Businesses with foreign owners or investors** — non-resident alien shareholders are prohibited
- **Net profit below $50,000** — administrative costs exceed the tax savings
- **California businesses** — the state imposes an $800 minimum franchise tax plus a 1.5% S-Corp tax rate, which erodes savings significantly

## How to Elect

File IRS Form 2553 within 75 days of the tax year you want the election to apply, or within 75 days of forming your entity. Late elections may be accepted with a reasonable cause statement.

You must also set up payroll immediately. The IRS requires S-Corp owners who perform services to take a "reasonable salary" — compensation comparable to what you'd pay a third party to do the same work. Underpaying yourself is one of the most common S-Corp audit triggers.

## State Tax Considerations

S-Corp treatment varies significantly by state. Some states do not recognize the federal election and tax the entity as a C-Corp. Always confirm your state's rules before electing.
```

- [ ] **Step 3: Create `content/resources/smllc-5472.md`**

```markdown
---
title: "Form 5472 for Foreign-Owned Single-Member LLCs"
description: "Foreign-owned disregarded entities must file Form 5472 or face a $25,000 penalty. Here's what triggers the requirement and how to comply."
date: 2025-01-20
practices: ["founders", "local", "inbound"]
services: ["international-tax", "tax-compliance"]
featured: false
---

## What Is Form 5472?

Form 5472 is an information return required by the IRS for certain U.S. corporations and foreign-owned domestic disregarded entities. Despite being called an "information return" — meaning it doesn't calculate a tax owed — the penalty for failure to file is $25,000 per form, per year.

## Who Must File

A foreign-owned single-member LLC (SMLLC) that is treated as a disregarded entity for U.S. tax purposes must file Form 5472 if it had any "reportable transactions" with its foreign owner or other related parties during the year.

**Reportable transactions include:**
- Capital contributions from the foreign owner
- Distributions to the foreign owner
- Loans between the LLC and the owner
- Payments for services between related parties
- Sale or purchase of property between related parties

In practice, almost any activity between the foreign owner and the LLC counts. Even a single contribution of capital to open the business account creates a filing obligation.

## How to File

The SMLLC must obtain an Employer Identification Number (EIN) and file a pro forma Form 1120 (U.S. Corporation Income Tax Return) along with the attached Form 5472. The 1120 itself is essentially a shell — it reports no income or tax — but it is the required vehicle for submitting the 5472.

The due date follows the standard corporate return deadline: April 15 for calendar-year filers, with a six-month extension available.

## The $25,000 Penalty

The penalty under IRC Section 6038A is $25,000 per Form 5472 that is not filed, not timely filed, or is incomplete. The IRS has been actively enforcing this penalty, and courts have upheld it even for taxpayers who were unaware of the requirement.

There is a reasonable cause exception, but it requires proactive documentation and is not guaranteed.

## Common Mistakes

- Assuming a disregarded entity has no U.S. filing obligations
- Missing the deadline because the filer didn't know a 1120 was required
- Omitting intercompany transactions that don't seem significant
- Failing to file in years with only passive activity (the obligation exists regardless)

If you are a foreign national who owns a U.S. LLC — even a dormant one — confirm your Form 5472 filing status before the next deadline.
```

- [ ] **Step 4: Create `content/resources/form-5471.md`**

```markdown
---
title: "Form 5471: U.S. Shareholders of Foreign Corporations"
description: "U.S. persons who own 10% or more of a foreign corporation must file Form 5471. Here's who qualifies, what's reported, and the penalties for non-compliance."
date: 2025-01-25
practices: ["outbound", "inbound"]
services: ["international-tax"]
featured: false
---

## What Is Form 5471?

Form 5471 is an information return that U.S. persons — citizens, residents, domestic corporations, partnerships, and trusts — must file when they have certain ownership or control over a foreign corporation. It is one of the most complex international tax forms, often running dozens of pages with multiple schedules.

## Who Must File

The filing obligation depends on which "category" of filer you are:

**Category 2:** A U.S. person who is an officer or director of a foreign corporation in which a U.S. person acquires stock meeting certain thresholds.

**Category 3:** A U.S. person who acquires stock in a foreign corporation, bringing their ownership to 10% or more. Also covers dispositions that reduce ownership below 10%.

**Category 4:** A U.S. person who controls a foreign corporation — generally owning more than 50% of the vote or value.

**Category 5:** A U.S. shareholder of a Controlled Foreign Corporation (CFC) — a foreign corporation more than 50% owned by U.S. shareholders who each own at least 10%.

Category 5 filers carry the heaviest reporting burden and must include detailed income, balance sheet, and Subpart F income calculations.

## What Is Reported

Depending on filer category, Form 5471 may require:
- The foreign corporation's income statement and balance sheet
- Transactions between the U.S. shareholder and the foreign corporation
- Earnings and profits (E&P) computations
- Subpart F income inclusions
- GILTI (Global Intangible Low-Taxed Income) calculations
- Foreign tax credit information

## Subpart F and GILTI

U.S. shareholders of CFCs must currently include certain types of income in their U.S. taxable income, regardless of whether the foreign corporation distributed that income. This "deemed inclusion" applies to:

- **Subpart F income:** Passive income, certain related-party payments, and other categories defined under IRC Sections 951–965
- **GILTI:** A minimum tax on the excess returns of CFCs, introduced by the 2017 Tax Cuts and Jobs Act

Proper planning can reduce or defer these inclusions.

## Penalties

The penalty for failure to file Form 5471 is $10,000 per form per year. Additional penalties of $10,000 per month apply if the failure continues after IRS notification, up to $50,000 per form. The IRS may also reduce foreign tax credits by 10% if the form is not filed.

The statute of limitations on the entire tax return remains open if Form 5471 is missing — even if the rest of the return was timely filed and accurate.

## When to Seek Help

If you own shares in a non-U.S. company — including a holding company, operating company, or investment vehicle — consult a CPA before your return is due. The complexity and penalty exposure make professional preparation essential.
```

- [ ] **Step 5: Create `content/resources/due-dates.md`**

```markdown
---
title: "2025 Tax Deadlines: Key Filing and Payment Dates"
description: "Every important IRS filing and payment deadline for the 2025 tax year, including business returns, individual returns, extensions, and estimated tax payments."
date: 2025-01-01
practices: ["all"]
services: ["tax-compliance"]
featured: true
---

## Individual Tax Returns

**April 15, 2025** — Form 1040 due for calendar-year individual filers. Also the deadline for:
- IRA contributions for the 2024 tax year
- First quarter 2025 estimated tax payment (Form 1040-ES)
- FinCEN 114 (FBAR) — due April 15 with automatic extension to October 15

**October 15, 2025** — Extended deadline for individual returns (Form 1040) if Form 4868 was filed by April 15.

## Business Returns

**March 17, 2025** — Returns due for:
- S-Corporations (Form 1120-S) — calendar year
- Partnerships (Form 1065) — calendar year

**April 15, 2025** — Returns due for:
- C-Corporations (Form 1120) — calendar year
- Foreign-owned single-member LLCs (pro forma 1120 + Form 5472) — calendar year

**September 15, 2025** — Extended deadline for S-Corp and Partnership returns

**October 15, 2025** — Extended deadline for C-Corp returns

## Estimated Tax Payments (2025)

| Payment | Period Covered | Due Date |
|---------|---------------|----------|
| Q1 2025 | Jan 1 – Mar 31 | April 15, 2025 |
| Q2 2025 | Apr 1 – May 31 | June 16, 2025 |
| Q3 2025 | Jun 1 – Aug 31 | September 15, 2025 |
| Q4 2025 | Sep 1 – Dec 31 | January 15, 2026 |

Underpayment penalties apply if you owe more than $1,000 at filing and haven't paid at least 90% of the current year tax or 100% of prior year tax (110% if prior year AGI exceeded $150,000).

## Payroll Tax Deposits

Payroll deposit deadlines depend on your deposit schedule (monthly or semi-weekly) determined by your lookback period. Semi-weekly depositors must deposit:
- Payroll paid Wednesday–Friday → deposit by following Wednesday
- Payroll paid Saturday–Tuesday → deposit by following Friday

**January 31, 2025** — W-2s and 1099-NECs due to recipients and IRS/SSA

**February 28, 2025** — Paper 1099s due to IRS (electronic filers: March 31)

## International Filing Deadlines

**April 15, 2025** — Form 5472 (with pro forma 1120) for foreign-owned U.S. LLCs

**April 15, 2025 (automatic extension to October 15)** — FinCEN 114 (FBAR) for foreign financial accounts exceeding $10,000 in aggregate

**June 16, 2025** — Form 1040 for U.S. citizens and residents living abroad (automatic 2-month extension; no Form 4868 required)

## Missing a Deadline

The failure-to-file penalty is generally 5% of unpaid tax per month, up to 25%. The failure-to-pay penalty is 0.5% per month. Interest accrues on unpaid balances at the federal short-term rate plus 3 percentage points.

If you cannot file on time, always file an extension and pay as much as possible by the original deadline. Extensions extend the filing date — not the payment deadline.
```

- [ ] **Step 6: Create `content/resources/1031-exchange.md`**

```markdown
---
title: "1031 Exchange Guide: Defer Capital Gains on Real Estate"
description: "A 1031 exchange lets you sell investment property and defer capital gains tax by reinvesting in like-kind property. Here are the rules, timelines, and common pitfalls."
date: 2025-02-01
practices: ["realestate"]
services: ["tax-strategy", "international-tax"]
featured: false
---

## What Is a 1031 Exchange?

A 1031 exchange — named after Section 1031 of the Internal Revenue Code — allows you to sell investment or business property and defer federal (and often state) capital gains tax by reinvesting the proceeds into a "like-kind" replacement property.

Without a 1031 exchange, selling appreciated real estate triggers capital gains tax at rates up to 20% plus the 3.8% Net Investment Income Tax, plus depreciation recapture at 25%. A well-executed exchange defers all of this indefinitely.

## What Qualifies

**Property that qualifies:**
- Investment real estate (rental homes, apartment buildings, commercial properties)
- Business-use real estate (office buildings, warehouses, farm land)
- Vacant land held for investment

**Property that does not qualify:**
- Primary residences (though a partial exclusion may apply under Section 121)
- Property held primarily for sale (dealer inventory, fix-and-flips)
- Personal property (the 2017 Tax Cuts and Jobs Act eliminated 1031 treatment for non-real-estate assets)
- Foreign property exchanged for U.S. property (and vice versa — must be like-kind within the same country)

## The Key Timelines

A 1031 exchange has two hard deadlines that cannot be extended:

**45-day identification period:** From the date you close on the sale of the relinquished property, you have 45 calendar days to formally identify potential replacement properties in writing to your Qualified Intermediary. You may identify up to three properties (the "3-property rule"), any number of properties with a combined fair market value up to 200% of the relinquished property (the "200% rule"), or any number of properties if you actually close on 95% of their combined value.

**180-day exchange period:** You must close on the replacement property within 180 calendar days of the relinquished property sale (or by the due date of your tax return, whichever is earlier). The 180-day window runs concurrently with the 45-day window — it does not start over after identification.

Both deadlines are absolute. Missing either by even one day disqualifies the exchange entirely.

## The Qualified Intermediary Requirement

You cannot receive the sale proceeds, even temporarily. The IRS requires a Qualified Intermediary (QI) — an independent third party — to hold the exchange funds between the sale and the purchase. If proceeds touch your hands or your agent's hands at any point, the exchange is disqualified.

Select your QI before closing on the sale. The QI cannot be your attorney, accountant, realtor, or anyone who has acted as your agent in the prior two years.

## Boot and Partial Exchanges

**Boot** is any non-like-kind property received in the exchange — typically cash, net mortgage relief, or personal property. Boot is taxable in the year of the exchange.

To fully defer tax, you must:
1. Purchase replacement property of equal or greater value than the relinquished property
2. Use all cash proceeds in the purchase (reinvest 100% of equity)
3. Replace any mortgage on the relinquished property with equal or greater debt on the replacement

If you receive some cash or net fewer liabilities, you pay tax only on the boot — the rest of the gain is still deferred.

## Reverse and Build-to-Suit Exchanges

**Reverse exchange:** You acquire the replacement property before selling the relinquished property. This requires a more complex structure (an Exchange Accommodation Titleholder holds one of the properties) and strict 45/180-day timelines apply from the date of acquisition.

**Build-to-suit (improvement) exchange:** Allows you to use exchange funds for construction or improvements on the replacement property. The improvements must be substantially complete within the 180-day window.

Both structures require advance planning and experienced intermediaries.

## Depreciation Recapture

Deferred gain includes accumulated depreciation on the relinquished property. When you ultimately sell the replacement property in a taxable sale, depreciation recapture is taxed at 25% — not at capital gains rates. 1031 exchanges defer this recapture; they do not eliminate it.

One popular strategy: exchange properties throughout your lifetime, then pass them to heirs. At death, heirs receive a stepped-up basis equal to fair market value, potentially eliminating the deferred gain entirely.
```

- [ ] **Step 7: Commit content files**

```bash
git add content/resources/
git commit -m "feat: add resource library content files (5 articles + index)"
```

---

## Task 2: Resource Library Page

**Files:**
- Create: `layouts/resources/list.html`

- [ ] **Step 1: Create `layouts/resources/list.html`**

```html
{{ define "main" }}
  {{ partial "service-css.html" . }}
  {{ partial "nav-css.html" . }}
  {{ partial "footer-css.html" . }}

  <style>
    /* ── Resource Library Page ── */
    .resource-library {
      margin: 25px;
      border-radius: 20px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      position: relative;
      z-index: 1;
    }

    .library-hero {
      background: linear-gradient(135deg, #15482E 0%, #3a8b5f 100%);
      color: #fff;
      padding: 56px 48px 48px;
    }

    .library-hero .section-label {
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      opacity: 0.7;
      margin-bottom: 10px;
      display: block;
    }

    .library-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 700;
      margin: 0 0 16px;
      line-height: 1.15;
    }

    .library-hero p {
      font-size: 18px;
      opacity: 0.85;
      margin: 0;
      max-width: 580px;
      line-height: 1.6;
    }

    .library-body {
      background: linear-gradient(90deg, #fff 0%, #edeef7 100%);
      padding: 36px 48px 48px;
    }

    /* Search */
    .library-search {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .library-search input {
      flex: 1;
      padding: 12px 16px;
      border: 1.5px solid #ddd;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      color: #0f2818;
      background: #fff;
      transition: border-color 0.2s;
    }

    .library-search input:focus {
      outline: none;
      border-color: #15482E;
    }

    .library-search input::placeholder {
      color: #aaa;
    }

    /* Filter pills */
    .library-filters {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .filter-pill {
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      border: 1.5px solid #d0d0d0;
      background: #fff;
      color: #555;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'Inter', sans-serif;
    }

    .filter-pill:hover {
      border-color: #15482E;
      color: #15482E;
    }

    .filter-pill.active {
      background: #15482E;
      color: #fff;
      border-color: #15482E;
    }

    .library-count {
      font-size: 13px;
      color: #888;
      margin-bottom: 24px;
    }

    /* Article grid */
    .library-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .lib-card {
      background: #fff;
      border-radius: 10px;
      border-left: 3px solid #15482E;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      flex-direction: column;
    }

    .lib-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    }

    .lib-card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-bottom: 10px;
    }

    .lib-practice-tag {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #3a8b5f;
      font-weight: 700;
    }

    .lib-practice-tag + .lib-practice-tag::before {
      content: " · ";
      color: #ccc;
    }

    .lib-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 17px;
      color: #0f2818;
      font-weight: 700;
      margin: 0 0 10px;
      line-height: 1.35;
    }

    .lib-card p {
      font-size: 14px;
      color: #555;
      line-height: 1.6;
      margin: 0 0 14px;
      flex: 1;
    }

    .lib-svc-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-bottom: 14px;
    }

    .lib-svc-chip {
      font-size: 10px;
      padding: 2px 8px;
      background: #edeef7;
      border-radius: 3px;
      color: #555;
    }

    .lib-card a.read-link {
      font-size: 13px;
      color: #15482E;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.2s;
    }

    .lib-card a.read-link:hover {
      color: #3a8b5f;
      text-decoration: underline;
    }

    .lib-card.hidden {
      display: none;
    }

    @media (max-width: 1024px) {
      .library-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .resource-library {
        margin: 12px;
        border-radius: 14px;
      }

      .library-hero {
        padding: 36px 24px 32px;
      }

      .library-body {
        padding: 24px 20px 32px;
      }

      .library-search {
        flex-direction: column;
      }

      .library-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .resource-library {
        margin: 8px;
      }
    }
  </style>

  {{ partial "nav.html" . }}

  <div class="resource-library">
    <!-- Hero -->
    <div class="library-hero">
      <span class="section-label">Knowledge Base</span>
      <h1>Resource Library</h1>
      <p>Tax guides, planning strategies, and compliance checklists — built for founders, expats, real estate owners, and global businesses.</p>
    </div>

    <!-- Body -->
    <div class="library-body">
      <div class="library-search">
        <input type="text" id="librarySearch" placeholder="Search: S-corp, 1031, FBAR, deadlines…" />
      </div>

      <div class="library-filters">
        <button class="filter-pill active" data-filter="all">All Topics</button>
        {{ range $.Site.Data.expertise }}
        <button class="filter-pill" data-filter="{{ .slug }}">{{ .name }}</button>
        {{ end }}
      </div>

      <p class="library-count" id="libraryCount"></p>

      <div class="library-grid" id="libraryGrid">
        {{ range .Pages }}
        {{ $practices := .Params.practices | default (slice) }}
        <div class="lib-card"
             data-practices="{{ delimit $practices "," }}"
             data-text="{{ .Title | lower }} {{ .Description | lower }}">
          <div class="lib-card-tags">
            {{ if in $practices "all" }}
              <span class="lib-practice-tag">All Clients</span>
            {{ else }}
              {{ range $practices }}
                {{ $slug := . }}
                {{ range $.Site.Data.expertise }}
                  {{ if eq .slug $slug }}
                    <span class="lib-practice-tag">{{ .name }}</span>
                  {{ end }}
                {{ end }}
              {{ end }}
            {{ end }}
          </div>
          <h3>{{ .Title }}</h3>
          <p>{{ .Description }}</p>
          <div class="lib-svc-chips">
            {{ range .Params.services }}
              {{ $svc := . }}
              {{ range $.Site.Data.siteconfig.navigation.services }}
                {{ if in .url $svc }}
                  <span class="lib-svc-chip">{{ .label }}</span>
                {{ end }}
              {{ end }}
            {{ end }}
          </div>
          <a href="{{ .RelPermalink }}" class="read-link">Read Article →</a>
        </div>
        {{ end }}
      </div>
    </div>
  </div>

  {{ partial "footer.html" . }}

  <script>
    (function() {
      var cards = Array.from(document.querySelectorAll('.lib-card'));
      var pills = document.querySelectorAll('.filter-pill');
      var searchInput = document.getElementById('librarySearch');
      var countEl = document.getElementById('libraryCount');
      var activeFilter = 'all';
      var searchQuery = '';

      function updateCards() {
        var visible = 0;
        cards.forEach(function(card) {
          var practices = card.dataset.practices || '';
          var text = card.dataset.text || '';
          var matchesFilter = activeFilter === 'all'
            || practices.indexOf(activeFilter) !== -1
            || practices.indexOf('all') !== -1;
          var matchesSearch = searchQuery === ''
            || text.indexOf(searchQuery) !== -1;
          if (matchesFilter && matchesSearch) {
            card.classList.remove('hidden');
            visible++;
          } else {
            card.classList.add('hidden');
          }
        });
        countEl.textContent = 'Showing ' + visible + ' article' + (visible !== 1 ? 's' : '');
      }

      pills.forEach(function(pill) {
        pill.addEventListener('click', function() {
          pills.forEach(function(p) { p.classList.remove('active'); });
          pill.classList.add('active');
          activeFilter = pill.dataset.filter;
          updateCards();
        });
      });

      searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase().trim();
        updateCards();
      });

      updateCards();
    })();
  </script>
{{ end }}
```

- [ ] **Step 2: Run `hugo server` and verify `/resources/` renders**

Run: `hugo server -D` in the website directory
Expected: No build errors. Visit `http://localhost:1313/resources/` and see the library page with 5 article cards.

- [ ] **Step 3: Commit**

```bash
git add layouts/resources/list.html
git commit -m "feat: add resource library list page layout"
```

---

## Task 3: Article Page Layout

**Files:**
- Create: `layouts/resources/single.html`

- [ ] **Step 1: Create `layouts/resources/single.html`**

```html
{{ define "main" }}
  {{ partial "service-css.html" . }}
  {{ partial "nav-css.html" . }}
  {{ partial "footer-css.html" . }}

  <style>
    /* ── Article Page ── */
    .article-page {
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding: 25px;
    }

    /* Card 1: Hero */
    .article-hero {
      background: linear-gradient(135deg, #15482E 0%, #3a8b5f 100%);
      color: #fff;
      border-radius: 20px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
      padding: 48px 52px 44px;
      position: relative;
      z-index: 1;
    }

    .article-breadcrumb {
      font-size: 13px;
      opacity: 0.7;
      margin-bottom: 14px;
    }

    .article-breadcrumb a {
      color: #fff;
      text-decoration: underline;
    }

    .article-breadcrumb a:hover {
      opacity: 0.85;
    }

    .article-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 16px;
    }

    .article-tag {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      padding: 3px 9px;
      font-weight: 600;
    }

    .article-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(26px, 4vw, 42px);
      font-weight: 700;
      margin: 0 0 14px;
      line-height: 1.2;
    }

    .article-hero-desc {
      font-size: 17px;
      opacity: 0.85;
      margin: 0;
      max-width: 680px;
      line-height: 1.65;
    }

    /* Card 2: Body */
    .article-body-card {
      background: linear-gradient(90deg, #fff 0%, #edeef7 100%);
      border-radius: 20px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      position: relative;
      z-index: 1;
    }

    .article-top {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 0;
    }

    /* Article content */
    .article-content {
      padding: 44px 48px 40px;
      font-size: 16px;
      color: #333;
      line-height: 1.75;
    }

    .article-back {
      display: inline-block;
      font-size: 14px;
      color: #15482E;
      font-weight: 500;
      margin-bottom: 28px;
      text-decoration: none;
      transition: color 0.2s;
    }

    .article-back:hover {
      color: #3a8b5f;
      text-decoration: underline;
    }

    .article-content h2 {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      color: #0f2818;
      font-weight: 700;
      margin: 32px 0 12px;
      line-height: 1.3;
    }

    .article-content h3 {
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      color: #0f2818;
      font-weight: 700;
      margin: 26px 0 10px;
    }

    .article-content p {
      margin: 0 0 16px;
    }

    .article-content ul,
    .article-content ol {
      margin: 0 0 16px;
      padding-left: 24px;
    }

    .article-content li {
      margin-bottom: 6px;
    }

    .article-content strong {
      color: #0f2818;
      font-weight: 700;
    }

    .article-content table {
      width: 100%;
      border-collapse: collapse;
      margin: 0 0 20px;
      font-size: 14px;
    }

    .article-content th {
      background: #15482E;
      color: #fff;
      padding: 10px 14px;
      text-align: left;
      font-weight: 600;
    }

    .article-content td {
      padding: 9px 14px;
      border-bottom: 1px solid #e8e8e8;
    }

    .article-content tr:nth-child(even) td {
      background: #f9f9f9;
    }

    .article-updated {
      font-size: 12px;
      color: #aaa;
      margin-top: 32px;
      padding-top: 20px;
      border-top: 1px solid #e8e8e8;
    }

    /* Intake sidebar */
    .article-sidebar {
      background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px),
                        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px);
      background-color: #041f12;
      padding: 44px 36px 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .article-sidebar h3 {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      font-weight: 600;
      color: #fff;
      margin: 0;
      letter-spacing: -0.3px;
    }

    .sidebar-form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .sidebar-form-group label {
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.3px;
    }

    .sidebar-form-group input,
    .sidebar-form-group textarea {
      padding: 11px 13px;
      border: 1.5px solid rgba(255,255,255,0.2);
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: #fff;
      transition: border-color 0.2s, background 0.2s;
    }

    .sidebar-form-group input::placeholder,
    .sidebar-form-group textarea::placeholder {
      color: rgba(255,255,255,0.4);
    }

    .sidebar-form-group input:focus,
    .sidebar-form-group textarea:focus {
      outline: none;
      border-color: rgba(255,255,255,0.4);
      background: rgba(255,255,255,0.15);
    }

    .sidebar-form-group textarea {
      min-height: 110px;
      resize: vertical;
      font-size: 13px;
    }

    .sidebar-submit {
      padding: 13px;
      background: #2f5342;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    }

    .sidebar-submit:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.3);
    }

    .sidebar-privacy {
      font-size: 12px;
      color: rgba(255,255,255,0.5);
      font-style: italic;
      margin: -10px 0 0;
    }

    .sidebar-divider {
      border: none;
      border-top: 1px solid rgba(255,255,255,0.15);
      margin: 0;
    }

    .sidebar-cal-label {
      font-size: 17px;
      font-weight: 700;
      color: #fff;
      margin: 0;
    }

    .sidebar-cal-sublabel {
      font-size: 13px;
      color: rgba(255,255,255,0.6);
      margin: 0;
    }

    .sidebar-cal-btn {
      display: block;
      padding: 12px;
      border: 1.5px solid rgba(255,255,255,0.3);
      background: transparent;
      color: #fff;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      text-decoration: none;
      transition: all 0.2s;
    }

    .sidebar-cal-btn:hover {
      border-color: #fff;
      background: rgba(255,255,255,0.1);
      color: #fff;
      text-decoration: none;
    }

    /* Bottom row */
    .article-bottom {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      padding: 24px 48px 36px;
      border-top: 1px solid #e0e0e0;
    }

    .bottom-card {
      background: #fff;
      border-radius: 10px;
      border-left: 3px solid #15482E;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .bottom-card h4 {
      font-size: 11px;
      font-weight: 700;
      color: #0f2818;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 12px;
    }

    .bottom-link {
      display: block;
      font-size: 14px;
      color: #15482E;
      font-weight: 500;
      padding: 5px 0;
      border-bottom: 1px solid #f0f0f0;
      text-decoration: none;
      transition: color 0.2s;
    }

    .bottom-link:last-child {
      border-bottom: none;
    }

    .bottom-link:hover {
      color: #3a8b5f;
      text-decoration: underline;
    }

    @media (max-width: 1024px) {
      .article-top {
        grid-template-columns: 1fr;
      }

      .article-sidebar {
        order: -1;
      }

      .article-bottom {
        grid-template-columns: 1fr;
        padding: 24px 24px 32px;
      }
    }

    @media (max-width: 768px) {
      .article-page {
        padding: 12px;
        gap: 12px;
      }

      .article-hero {
        padding: 32px 24px 28px;
        border-radius: 14px;
      }

      .article-body-card {
        border-radius: 14px;
      }

      .article-content {
        padding: 28px 24px 24px;
      }

      .article-bottom {
        padding: 20px 24px 28px;
      }
    }

    @media (max-width: 480px) {
      .article-page {
        padding: 8px;
      }

      .article-hero {
        border-radius: 12px;
      }

      .article-body-card {
        border-radius: 12px;
      }

      .article-content {
        padding: 24px 18px 20px;
        font-size: 15px;
      }

      .article-sidebar {
        padding: 28px 20px 24px;
      }
    }
  </style>

  {{ partial "nav.html" . }}

  {{ $practices := .Params.practices | default (slice) }}
  {{ $services := .Params.services | default (slice) }}

  <!-- Build related articles list -->
  {{ $current := . }}
  {{ $related := slice }}
  {{ range where .Site.RegularPages "Section" "resources" }}
    {{ if ne .Permalink $current.Permalink }}
      {{ $thisPractices := .Params.practices | default (slice) }}
      {{ if or (in $thisPractices "all") (in $practices "all") (intersect $thisPractices $practices) }}
        {{ $related = $related | append . }}
      {{ end }}
    {{ end }}
  {{ end }}

  <div class="article-page">

    <!-- Card 1: Hero -->
    <div class="article-hero">
      <div class="article-breadcrumb">
        <a href="/resources/">Resources</a> / {{ .Title }}
      </div>
      <div class="article-tags">
        {{ if in $practices "all" }}
          <span class="article-tag">All Clients</span>
        {{ else }}
          {{ range $practices }}
            {{ $slug := . }}
            {{ range $.Site.Data.expertise }}
              {{ if eq .slug $slug }}
                <span class="article-tag">{{ .name }}</span>
              {{ end }}
            {{ end }}
          {{ end }}
        {{ end }}
        {{ range $services }}
          {{ $svc := . }}
          {{ range $.Site.Data.siteconfig.navigation.services }}
            {{ if in .url $svc }}
              <span class="article-tag">{{ .label }}</span>
            {{ end }}
          {{ end }}
        {{ end }}
      </div>
      <h1>{{ .Title }}</h1>
      <p class="article-hero-desc">{{ .Description }}</p>
    </div>

    <!-- Card 2: Body -->
    <div class="article-body-card">
      <div class="article-top">

        <!-- Article content -->
        <div class="article-content">
          <a href="/resources/" class="article-back">← Back to Resource Library</a>
          {{ .Content }}
          <p class="article-updated">Last updated: {{ .Date.Format "January 2006" }}</p>
        </div>

        <!-- Intake form sidebar -->
        <div class="article-sidebar">
          <h3>Contact Us</h3>
          <form id="resourceContactForm" action="https://formspree.io/f/mkopvwja" method="POST" novalidate>
            <input type="hidden" name="_subject" value="Inquiry from {{ .Title }} article" />
            <div style="display:flex;flex-direction:column;gap:16px;">
              <div class="sidebar-form-group">
                <label for="res-name">Name</label>
                <input type="text" id="res-name" name="name" required />
              </div>
              <div class="sidebar-form-group">
                <label for="res-email">Email Address</label>
                <input type="email" id="res-email" name="email" required />
              </div>
              <div class="sidebar-form-group">
                <label for="res-background">Provide a Brief Background</label>
                <textarea id="res-background" name="background" required></textarea>
              </div>
              <button type="submit" class="sidebar-submit">Send Us an Email</button>
              <p class="sidebar-privacy">Your information is confidential and protected.</p>
            </div>
          </form>
          <hr class="sidebar-divider" />
          <p class="sidebar-cal-label">Schedule a Meeting</p>
          <p class="sidebar-cal-sublabel">Book a 30-minute Consultation</p>
          <a href="https://cal.com/vantis-cpa/30min" target="_blank" rel="noopener noreferrer" class="sidebar-cal-btn">Open Calendar</a>
        </div>

      </div>

      <!-- Bottom row -->
      <div class="article-bottom">

        <!-- Related Services -->
        <div class="bottom-card">
          <h4>Related Services</h4>
          {{ range $services }}
            {{ $svc := . }}
            {{ range $.Site.Data.siteconfig.navigation.services }}
              {{ if in .url $svc }}
                <a href="{{ .url }}" class="bottom-link">{{ .label }} →</a>
              {{ end }}
            {{ end }}
          {{ end }}
        </div>

        <!-- Related Expertise -->
        <div class="bottom-card">
          <h4>Related Expertise</h4>
          {{ if in $practices "all" }}
            {{ range $.Site.Data.expertise }}
              <a href="{{ .url }}" class="bottom-link">{{ .name }} →</a>
            {{ end }}
          {{ else }}
            {{ range $practices }}
              {{ $slug := . }}
              {{ range $.Site.Data.expertise }}
                {{ if eq .slug $slug }}
                  <a href="{{ .url }}" class="bottom-link">{{ .name }} →</a>
                {{ end }}
              {{ end }}
            {{ end }}
          {{ end }}
        </div>

        <!-- More Articles -->
        <div class="bottom-card">
          <h4>More Articles</h4>
          {{ if $related }}
            {{ range first 3 $related }}
              <a href="{{ .RelPermalink }}" class="bottom-link">{{ .Title }} →</a>
            {{ end }}
          {{ else }}
            <a href="/resources/" class="bottom-link">Browse all articles →</a>
          {{ end }}
        </div>

      </div>
    </div>

  </div>

  {{ partial "footer.html" . }}
{{ end }}
```

- [ ] **Step 2: Run `hugo server` and verify an article page renders**

Run: `hugo server -D`
Expected: Visit `http://localhost:1313/resources/s-corps/` — see two floating cards, green hero with breadcrumb + tags, article content with sidebar form, and bottom row of 3 cards.

- [ ] **Step 3: Commit**

```bash
git add layouts/resources/single.html
git commit -m "feat: add resource article page layout"
```

---

## Task 4: Homepage Fixes

**Files:**
- Modify: `layouts/index.html`

Four targeted changes: fix article IDs + links, fix mobile CSS, add "View All" link, update 2024→2025.

- [ ] **Step 1: Fix article IDs and links in the JS data block**

In `layouts/index.html`, find the `resourcesData` array (around line 1718). Replace the entire array and the `renderResourceArticles` function's template literal:

Change `resourcesData` to:
```js
const resourcesData = [
  {
    id: "s-corps",
    title: "S-Corporations",
    description: "Understand S-Corp election benefits, requirements, and tax implications.",
    practices: ["founders", "local", "realestate"]
  },
  {
    id: "smllc-5472",
    title: "SMLLC 5472 Election",
    description: "Elect single-member LLC as C-Corp for tax optimization.",
    practices: ["founders", "local"]
  },
  {
    id: "form-5471",
    title: "Form 5471",
    description: "Foreign Corporation Information Return and PFIC Rules.",
    practices: ["outbound", "inbound"]
  },
  {
    id: "due-dates",
    title: "2025 Tax Deadlines",
    description: "Key tax filing and payment dates for businesses and individuals.",
    practices: ["all"]
  },
  {
    id: "1031-exchange",
    title: "1031 Exchange Guide",
    description: "Real estate exchange strategies to defer capital gains tax.",
    practices: ["realestate"]
  }
];
```

- [ ] **Step 2: Fix the `href="#"` link in `renderResourceArticles`**

Find the template literal inside `renderResourceArticles` (around line 1764). Change:
```js
          <a href="#" class="resource-link">Read Article →</a>
```
to:
```js
          <a href="/resources/${article.id}/" class="resource-link">Read Article →</a>
```

- [ ] **Step 3: Fix mobile CSS for resource card overflow**

Find this CSS block in `layouts/index.html` (around line 859):
```css
      .resources .resource-card {
        flex: 0 0 calc(100vw - 60px);
      }
```

Replace with:
```css
      .resources .resource-card {
        flex: 0 0 calc(100vw - 100px);
        max-width: 420px;
      }
```

- [ ] **Step 4: Add "View All" link below the carousel**

Find the closing `</div>` of `.resources-carousel-wrapper` (around line 1713):
```html
    </div>
  </div>

  <script>
```

Replace with:
```html
    </div>
    <div style="text-align:right;padding:8px 22px 4px;">
      <a href="/resources/" style="font-size:14px;color:var(--primary);font-weight:600;text-decoration:none;">View all articles in the library →</a>
    </div>
  </div>

  <script>
```

- [ ] **Step 5: Run `hugo server`, visit homepage, verify fixes**

Run: `hugo server -D`
Expected:
- Carousel cards show correct article titles (including "2025 Tax Deadlines")
- Clicking "Read Article →" on any card navigates to `/resources/{slug}/` instead of jumping to `#`
- "View all articles in the library →" link appears below carousel and goes to `/resources/`
- On mobile (resize browser to ≤768px): carousel cards don't overflow the section edges

- [ ] **Step 6: Commit**

```bash
git add layouts/index.html
git commit -m "fix: resource section links, mobile overflow, 2025 deadlines, view all link"
```

---

## Task 5: Navigation Update

**Files:**
- Modify: `layouts/partials/nav.html`

- [ ] **Step 1: Update desktop nav Resources link**

In `layouts/partials/nav.html`, find line 32:
```html
      <li><a href="#resources" class="nav-pill">Resources</a></li>
```

Replace with:
```html
      <li><a href="/resources/" class="nav-pill">Resources</a></li>
```

- [ ] **Step 2: Update mobile menu Resources link**

In the same file, find line 113:
```html
      <a href="#resources" role="menuitem">Resources</a>
```

Replace with:
```html
      <a href="/resources/" role="menuitem">Resources</a>
```

- [ ] **Step 3: Run `hugo server` and verify nav links**

Run: `hugo server -D`
Expected:
- Clicking "Resources" in the desktop nav goes to `/resources/` (not scrolls to `#resources`)
- Clicking "Resources" in the mobile hamburger menu goes to `/resources/`
- On the homepage, the Resources section still has `id="resources"` so any existing bookmarks still work

- [ ] **Step 4: Commit**

```bash
git add layouts/partials/nav.html
git commit -m "fix: update Resources nav links to /resources/ page"
```

---

## Verification Checklist

Run `hugo server -D` and check each item:

- [ ] `/resources/` loads — library page with 5 cards visible
- [ ] Filter pill "Startups and Online Business" → shows only S-Corps and SMLLC cards
- [ ] Filter pill "Real Estate Owners" → shows S-Corps, 1031 Exchange
- [ ] Filter pill "All Topics" → shows all 5 cards
- [ ] Search "1031" → shows only the 1031 Exchange card
- [ ] "Read Article →" on any card → navigates to `/resources/{slug}/`
- [ ] `/resources/s-corps/` loads — two floating cards, green hero, article content
- [ ] Sidebar form: fill Name + Email + Background → submit → success modal appears
- [ ] "Open Calendar" → opens cal.com link
- [ ] "← Back to Resource Library" → returns to `/resources/`
- [ ] Related Services links → each links to correct `/services/{slug}/` page
- [ ] Related Expertise links → each links to correct `/expertise/{slug}/` page
- [ ] "More Articles" shows different articles per page (check S-Corps vs 1031 Exchange)
- [ ] `/resources/due-dates/` → practices tag shows "All Clients", More Articles shows all other articles
- [ ] Homepage carousel: click "Read Article →" → goes to `/resources/{slug}/` (not `#`)
- [ ] Homepage "View all articles in the library →" → goes to `/resources/`
- [ ] Desktop nav "Resources" → goes to `/resources/`
- [ ] Mobile: resize to ≤768px, homepage carousel card doesn't overflow section margin
- [ ] Mobile: resize to ≤768px, `/resources/` shows 1-column grid
- [ ] Mobile: resize to ≤768px, `/resources/s-corps/` shows sidebar below article content
