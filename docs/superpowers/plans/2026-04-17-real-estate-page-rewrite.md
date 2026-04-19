# Real Estate Pages Rewrite — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the single `/expertise/realestate/` page into two focused pages — one for domestic real estate investors (under Business Tax in nav) and one for international/cross-border real estate (under International Tax in nav).

**Architecture:** Rewrite `content/expertise/realestate/_index.md` for domestic focus. Create new `content/expertise/realestate/international.md` for foreign-owned US property, US partnerships with nonresident partners, and US persons with foreign real estate. Update the nav to point the International Tax → Real Estate link to the new URL. Add geo.js entry for the new slug. Existing sub-pages (`foreign-owned-us-rental-property.md`, `firpta-us-real-estate-sales.md`) are unchanged and linked from the new international page.

**Tech Stack:** Hugo static site (YAML front matter, markdown body), vanilla JS (geo.js), Go HTML templates

---

## File Map

| File | Change |
|---|---|
| `content/expertise/realestate/_index.md` | Full rewrite — domestic focus |
| `content/expertise/realestate/international.md` | New file — international/cross-border focus |
| `layouts/partials/nav.html` | Update International Tax → Real Estate link to `/expertise/realestate/international/` |
| `static/js/geo.js` | Add `"international"` slug entry |

Existing sub-pages are unchanged:
- `content/expertise/realestate/foreign-owned-us-rental-property.md`
- `content/expertise/realestate/firpta-us-real-estate-sales.md`

---

## Task 1: Rewrite Domestic Real Estate Page

**Files:**
- Modify: `content/expertise/realestate/_index.md`

- [ ] **Step 1: Replace the full contents of `content/expertise/realestate/_index.md`**

```yaml
---
title: "Real Estate"
description: "Tax compliance and planning for real estate investors — rental properties, short-term rentals, commercial, 1031 exchanges, cost segregation, REPS, and property-holding partnerships including those with foreign partners."
layout: "service"
subtitle: "Tax compliance and planning for real estate investors, rental owners, and property-holding partnerships."
sections:
  - title: "Real Estate Tax as Its Own Discipline"
    body: |
      Real estate has its own set of tax rules, and they are different from the rules that apply to wages, business income, or investment portfolios. Depreciation is a paper deduction that reduces taxable income even when the property produces positive cash flow. Passive activity rules determine whether losses can be used against other income or must be suspended. Short-term rental rules override the standard rental framework under certain conditions. The 1031 exchange allows gains to be deferred indefinitely if the reinvestment rules are followed. None of this is complicated in the hands of someone who works with it regularly — but it requires someone who actually works with it regularly. This is a significant part of our practice.
  - title: "Rental Properties and Depreciation Planning"
    body: |
      The Schedule E is where rental income and expenses are reported, but the planning work happens well before the return is filed. Depreciation is calculated on the property's cost basis and allocated over 27.5 years for residential property and 39 years for commercial. The depreciation deduction reduces taxable income each year, but it also reduces basis — which affects the gain calculation and the depreciation recapture tax on a future sale.

      Cost segregation studies accelerate depreciation by reclassifying components of the property into shorter recovery periods. Eligible components — fixtures, land improvements, certain building systems — can be depreciated over 5, 7, or 15 years instead of the full recovery period. Combined with bonus depreciation, this can front-load a significant deduction in the year of acquisition.

      The decision to expense a cost or capitalize and depreciate it is not always obvious. Repairs and routine maintenance are generally deductible in the year incurred. Betterments, restorations, and acquisitions must be capitalized. The IRS safe harbor rules provide guidance, but the line between a repair and an improvement is a judgment call that should be made deliberately, not after the fact.
  - title: "Real Estate Professional Status"
    body: |
      Rental activities are passive by default, which means losses can only be used to offset passive income — not wages, business income, or portfolio income. For a property that produces a tax loss, this is a meaningful limitation. Real Estate Professional Status changes the characterization.

      To qualify, a taxpayer must spend more than 750 hours per year in real property trades or businesses in which they materially participate, and more than 50 percent of their total working time must be in those activities. If both tests are met and the taxpayer materially participates in their rental activities, the rental losses become non-passive and can offset other income.

      The analysis requires contemporaneous records and careful structuring of the grouping election, which determines whether rentals are treated as a single activity or separately for material participation purposes. We review the REPS position annually and document it correctly, because the IRS audits this more frequently than most real estate deductions.
  - title: "Short-Term Rentals"
    body: |
      Short-term rentals — properties rented for an average of seven days or fewer — are not subject to the standard passive activity rental rules. Instead, they are treated as a business activity, and the material participation tests that apply to businesses govern whether losses are passive or active.

      This creates a planning opportunity. A taxpayer who materially participates in a short-term rental — typically by spending more hours managing it than anyone else — can deduct losses against non-passive income without needing to meet the Real Estate Professional Status requirements. The tradeoff is that the activity may be subject to self-employment considerations depending on how services are provided.

      Short-term rentals also create state and local tax obligations that traditional long-term rentals do not. Florida imposes sales tax on rentals of six months or fewer. We handle the compliance and the planning for short-term rental clients.
  - title: "1031 Exchanges"
    body: |
      A 1031 exchange allows a taxpayer to defer gain on the sale of investment property by reinvesting the proceeds into like-kind replacement property. If done correctly, the gain that would otherwise be recognized on sale is carried forward into the replacement property through a reduced basis.

      The rules are strict: the replacement property must be identified within 45 days of the sale and acquired within 180 days. The exchange must be handled through a qualified intermediary — the seller cannot receive the sale proceeds directly. Boot — cash or unlike property received in the exchange — is taxable to the extent of gain.

      Reverse exchanges and improvement exchanges are available when the replacement property must be acquired before the relinquished property can be sold, or when the replacement property needs renovation to qualify. These structures are more complex and require careful coordination with the intermediary. We handle the planning, the coordination, and the filing for clients doing 1031 exchanges.
  - title: "Partnerships and Co-Ownership"
    body: |
      Most investment properties held by more than one person are structured as partnerships or multi-member LLCs. The entity files Form 1065 and issues K-1s to each partner reporting their share of income, loss, depreciation, and other items. The K-1 flows into each partner's individual return.

      Allocations in a partnership do not have to be pro rata. Special allocations — where one partner receives a disproportionate share of depreciation or gain — are permitted if they have substantial economic effect. This creates planning opportunities, particularly when partners have different tax situations. The price of flexibility is complexity: the partnership agreement must be drafted to support the allocation, and the returns must be prepared to reflect it consistently.

      We prepare partnership returns for real estate holding entities, handle the K-1s for each partner's individual filing, and help partners think through how the ownership structure and allocation mechanics affect their tax position over time.
  - title: "US Partnerships with Nonresident Partners"
    body: |
      When a US real estate partnership has one or more foreign partners, the filing and withholding obligations expand significantly. Under Section 1446, the partnership is required to withhold tax on each foreign partner's allocable share of effectively connected income — the rental income and gain that is treated as connected to a US trade or business.

      The partnership files Form 8804 (annual withholding tax return for a partnership with foreign partners) and Form 8805 for each foreign partner, reporting the amount withheld. The foreign partner uses the 8805 as a credit against their own US tax liability, reported on Form 1040-NR.

      The withholding is calculated at the highest applicable rate on the partner's allocable share of ECI, which may exceed the actual tax owed if the partner has deductions or treaty benefits. Foreign partners in a real estate partnership need both the partnership-level withholding handled correctly and their own nonresident individual return filed for the year. We handle both sides of this: the partnership's withholding and 8804/8805 filings, and the foreign partner's 1040-NR.
  - title: "Who This Is For"
    body: |
      This practice fits individuals and families with one or more rental properties, short-term rental hosts, investors in real estate partnerships, and property owners with complex depreciation, grouping, or gain-deferral questions. It also covers partnerships with foreign partners that need Section 1446 withholding handled alongside the annual partnership return. For foreign nationals owning US property or US persons owning foreign real estate, see the international real estate page.
sectionTitle: "What We Handle"
specializations:
  - label: "Schedule E Rental Income and Expense Reporting"
  - label: "Depreciation Planning and Cost Segregation"
  - label: "Real Estate Professional Status (REPS)"
    url: "/resources/real-estate-professional-status/"
  - label: "Passive Loss and Grouping Elections"
  - label: "Short-Term Rental Tax Treatment"
    url: "/resources/short-term-rental-taxes/"
  - label: "Expense vs. Capitalization Analysis"
  - label: "1031 Exchange Planning"
    url: "/resources/1031-exchange/"
  - label: "Commercial Property (39-Year) and Residential (27.5-Year)"
  - label: "Bonus Depreciation Planning"
  - label: "Partnership Returns (Form 1065)"
  - label: "Special Allocations and Waterfall Structures"
  - label: "K-1 Preparation and Partner Reporting"
  - label: "Section 1446 Withholding (Form 8804/8805)"
  - label: "Foreign Partner Nonresident Returns (1040-NR)"
  - label: "Florida Sales Tax on Short-Term Rentals"
---
```

- [ ] **Step 2: Verify the build passes**

```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
hugo --minify 2>&1 | tail -5
```

Expected: "Total in Xms" — zero ERROR lines.

- [ ] **Step 3: Commit**

```bash
git add content/expertise/realestate/_index.md
git commit -m "feat: rewrite domestic real estate page — partnerships, REPS, STR, 1031, 1446"
```

---

## Task 2: Create International Real Estate Page

**Files:**
- Create: `content/expertise/realestate/international.md`

- [ ] **Step 1: Create the new file with this exact content**

```yaml
---
title: "International Real Estate"
description: "Cross-border real estate tax for foreign owners of US property — FIRPTA, 871(d) elections, 1040-NR, Form 8804/8805 for partnerships with foreign partners, and US persons with foreign real estate."
layout: "service"
weight: 5
nav_title: "International Real Estate"
subtitle: "Tax compliance for foreign owners of US property and US persons with real estate across borders."
sections:
  - title: "Cross-Border Real Estate Is a Distinct Practice"
    body: |
      Foreign nationals owning US property and US persons owning property abroad are subject to rules that do not apply to a straightforward domestic rental. The compliance stack is different, the elections matter more, and the consequences of getting it wrong are larger. This page covers the core cross-border real estate situations we handle: foreign nationals renting US property, FIRPTA on sale, US real estate partnerships with nonresident partners, and US persons with foreign holdings.
  - title: "Foreign-Owned US Rental Property"
    body: |
      A foreign national who owns US rental property is subject to US tax on that income, but the default withholding rules are often harsher than necessary. Without an election in place, the withholding agent must withhold 30 percent of gross rental receipts — before any deductions for mortgage interest, depreciation, repairs, or management fees.

      The net income election under IRC Section 871(d) treats the rental income as effectively connected income, which means it is taxed at regular graduated rates on net income after deductions rather than at 30 percent of gross. For most properties with meaningful expenses, this election is significantly more favorable. It is made on the first Form 1040-NR filed and remains in effect until formally revoked.

      Annual compliance for a foreign national with US rental property includes ITIN support, net income election maintenance, Form 1040-NR preparation, state returns where required, and withholding agent coordination. We also review whether a tax treaty between the owner's home country and the US affects the rate or characterization of the income.
    cards:
      - label: "Foreign-Owned US Rental Property"
        description: "Ongoing compliance for foreign nationals earning US rental income, including net income elections, ITIN, and 1040-NR."
        url: "/expertise/realestate/foreign-owned-us-rental-property/"
  - title: "FIRPTA on Sale"
    body: |
      When a foreign national sells US real property, FIRPTA requires the buyer to withhold 15 percent of the gross sales price at closing. The withholding is a deposit against the seller's US tax liability, not the tax itself — but it is calculated on the gross price with no reduction for basis, expenses, or debt payoff. A seller with modest gain relative to the sales price will often have far more withheld than the tax ultimately owed.

      A withholding certificate application allows the seller to request that the IRS reduce or eliminate the withholding based on the actual expected tax. The application must be submitted before or at closing; once funds are remitted to the IRS, recovery requires filing a return and waiting for a refund. Timing matters significantly.

      The sale-year compliance stack includes basis reconstruction, depreciation recapture analysis (which applies at 25 percent regardless of whether depreciation was claimed), withholding certificate application if timing allows, Form 1040-NR for the year of sale, and state returns where the property is located. Buyers of US real property from foreign sellers also have their own FIRPTA withholding and remittance obligations.
    cards:
      - label: "FIRPTA and US Real Estate Sales"
        description: "FIRPTA withholding certificates, gain reporting, and depreciation recapture for foreign sellers of US real estate."
        url: "/expertise/realestate/firpta-us-real-estate-sales/"
  - title: "US Partnerships with Nonresident Partners"
    body: |
      A US real estate partnership that has one or more foreign partners is required under Section 1446 to withhold tax on each foreign partner's allocable share of effectively connected income. The withholding is calculated at the highest applicable rate on the ECI allocated to that partner for the year, whether or not any distribution is made.

      The partnership files Form 8804 — the annual withholding tax return — and a separate Form 8805 for each foreign partner showing the income allocated and the withholding remitted. The foreign partner credits the withholding on their Form 1040-NR for the year.

      This creates two distinct filing requirements: the partnership-level withholding and 8804/8805 filings, and the foreign partner's individual nonresident return. The withholding calculated under Section 1446 is often based on the partner's gross allocable share of ECI, which may exceed the actual tax owed once the partner's deductions and treaty benefits are accounted for on the 1040-NR. The excess becomes a refund on the individual return.

      We handle both sides: the partnership return with the Section 1446 withholding computation and the 8804/8805 filings, and the foreign partner's 1040-NR. For partnerships with foreign partners in multiple countries, treaty analysis at the partner level is part of the engagement.
  - title: "US Persons Owning Foreign Real Estate"
    body: |
      A US person who owns real property outside the United States must report the rental income on their US return and navigate depreciation rules that are different from those that apply to domestic property.

      Foreign residential rental property is depreciated over 30 years using the Alternative Depreciation System. Foreign commercial property uses a 40-year ADS life. These lives are longer than the 27.5 and 39 years used for US property, and the ADS method does not allow bonus depreciation. The result is a smaller annual depreciation deduction than a comparable US property would produce.

      Foreign taxes paid on foreign rental income are generally creditable against US tax under the foreign tax credit rules. The mechanics require tracking income by country and applying the limitation separately for passive category income. For properties in countries with tax treaties, the treaty may affect how the income is characterized or whether the credit applies.

      Foreign rental income must also be considered in the context of other international reporting obligations. A foreign bank account used to collect rent or hold property proceeds may trigger FBAR and FATCA reporting requirements.
  - title: "Ownership Structure and Planning"
    body: |
      How a foreign national holds US real property affects the ongoing compliance stack, the exit, and the estate tax exposure. Foreign nationals are subject to US estate tax on US situs assets — which includes US real property regardless of how it is held. Direct ownership exposes the full value of the property to US estate tax; holding through a foreign corporation can eliminate that exposure but creates different income tax consequences, including potential FIRPTA treatment of the shares.

      We review ownership structure questions at the start of an engagement and flag planning considerations before the current structure creates issues that are expensive to unwind.
  - title: "Who This Is For"
    body: |
      This practice fits foreign nationals who own US rental property, foreign sellers navigating FIRPTA, US real estate partnerships with one or more nonresident partners, and US persons with rental property outside the United States. For domestic real estate topics — REPS, short-term rentals, 1031 exchanges, and partnerships with all-US partners — see the real estate page.
sectionTitle: "What We Handle"
specializations:
  - label: "Net Income Election (IRC 871(d))"
  - label: "ITIN Application Support"
  - label: "Form 1040-NR (Nonresident Individual Return)"
    url: "/expertise/realestate/foreign-owned-us-rental-property/"
  - label: "FIRPTA Withholding Certificates"
    url: "/expertise/realestate/firpta-us-real-estate-sales/"
  - label: "Gain, Basis, and Depreciation Recapture Analysis"
  - label: "Buyer FIRPTA Withholding Compliance"
  - label: "Section 1446 Withholding (Form 8804/8805)"
  - label: "Foreign Partner 1040-NR Filing"
  - label: "ADS Depreciation for Foreign-Held US Property"
  - label: "US Persons with Foreign Real Estate"
  - label: "Foreign Tax Credit on Rental Income"
  - label: "Tax Treaty Analysis"
  - label: "Ownership Structure and Estate Tax Review"
  - label: "FBAR and FATCA for Foreign Property Accounts"
---
```

- [ ] **Step 2: Verify the build passes**

```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
hugo --minify 2>&1 | tail -5
```

Expected: "Total in Xms" — zero ERROR lines.

- [ ] **Step 3: Confirm the page is accessible**

Check that `/expertise/realestate/international/` would be generated — look for output file in `public/expertise/realestate/international/index.html` after build.

```bash
ls "public/expertise/realestate/international/"
```

Expected: `index.html` present.

- [ ] **Step 4: Commit**

```bash
git add content/expertise/realestate/international.md
git commit -m "feat: add international real estate page — FIRPTA, 871d, 8804/8805, ADS"
```

---

## Task 3: Update Nav + geo.js

**Files:**
- Modify: `layouts/partials/nav.html`
- Modify: `static/js/geo.js`

- [ ] **Step 1: Read the current nav International Tax submenu (lines 38–48 of nav.html)**

Confirm the current Real Estate link under International Tax is `/expertise/realestate/`.

- [ ] **Step 2: Update the International Tax → Real Estate nav link**

In `layouts/partials/nav.html`, find this line inside the International Tax `.nav-dropdown-submenu`:

```html
                <a href="/expertise/realestate/">Real Estate</a>
```

Change it to:

```html
                <a href="/expertise/realestate/international/">Real Estate</a>
```

Also update the mobile accordion — find this line in the International Tax mobile sub-items block:

```html
            <a href="/expertise/realestate/" role="menuitem" class="mobile-subitem">Real Estate</a>
```

After the line `<a href="/expertise/inbound/" role="menuitem" class="mobile-subitem">Foreign Business and Investors</a>`, change it to:

```html
            <a href="/expertise/realestate/international/" role="menuitem" class="mobile-subitem">Real Estate</a>
```

The Business Tax → Real Estate link stays at `/expertise/realestate/` (domestic page) — do not change it.

- [ ] **Step 3: Add `"international"` slug to geo.js**

In `static/js/geo.js`, find the `realestate` entry:

```js
    realestate:  { us: "Serving real estate owners in {location}",                         intl: "Serving U.S. real estate owners based in {location}" },
```

Add a new line immediately after it:

```js
    "realestate/international": { us: null,                                                intl: "Serving foreign real estate investors from {location}" },
```

Wait — the geo.js `getSlug()` function returns only the last path segment. For `/expertise/realestate/international/` the last segment is `"international"`, not `"realestate/international"`. Use the key `"international"` instead:

```js
    international: { us: null,                                                              intl: "Serving foreign real estate investors from {location}" },
```

Insert this line after the `realestate` entry.

- [ ] **Step 4: Run the Hugo build**

```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
hugo --minify 2>&1 | tail -5
```

Expected: "Total in Xms" — zero ERROR lines.

- [ ] **Step 5: Commit**

```bash
git add layouts/partials/nav.html static/js/geo.js
git commit -m "fix: update International Tax nav link to international real estate page; add geo slug"
```

---

## Verification Checklist

After all three commits, verify in the browser at `http://localhost:1313`:

1. `/expertise/realestate/` loads — title "Real Estate", covers domestic topics (REPS, STR, 1031, 8804/8805)
2. `/expertise/realestate/international/` loads — title "International Real Estate", covers FIRPTA, 871(d), 8804/8805 partnership side, ADS
3. Desktop nav: hover Business Tax → "Real Estate" → clicks through to `/expertise/realestate/`
4. Desktop nav: hover International Tax → "Real Estate" → clicks through to `/expertise/realestate/international/`
5. Mobile: Business Tax sub-item "Real Estate" links to `/expertise/realestate/`
6. Mobile: International Tax sub-item "Real Estate" links to `/expertise/realestate/international/`
7. Existing sub-pages still load: `/expertise/realestate/foreign-owned-us-rental-property/` and `/expertise/realestate/firpta-us-real-estate-sales/`
8. Hugo build produces zero ERROR lines
