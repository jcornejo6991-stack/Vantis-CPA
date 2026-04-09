# SEO Resource Clusters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 7 topic cluster hub pages under `/resources/`, add FAQPage + BreadcrumbList schema to articles, update 10 existing articles with cluster tags and FAQ frontmatter, write 3 new articles, update the resource library index, and audit IRS links for 404s.

**Architecture:** New `hub.html` Hugo layout auto-populates spoke cards from a `clusters:` frontmatter list on articles. Hub pages live at `content/resources/{cluster}/_index.md` with `layout: hub`. Article template gains BreadcrumbList + FAQPage JSON-LD and a TODO comment placeholder for future author badge. Resource library index gets an intro paragraph and cluster hub links above the existing filter/carousel.

**Tech Stack:** Hugo (static site generator), Go templates, JSON-LD schema markup, Markdown/YAML frontmatter

---

## File Map

| File | Action |
|---|---|
| `layouts/resources/hub.html` | Create — hub page layout |
| `layouts/resources/single.html` | Modify — breadcrumb cluster link, BreadcrumbList + FAQPage schema, TODO comment |
| `layouts/resources/list.html` | Modify — add intro paragraph + cluster hub links |
| `content/resources/international-tax/_index.md` | Create |
| `content/resources/real-estate-tax/_index.md` | Create |
| `content/resources/individual-tax/_index.md` | Create |
| `content/resources/business-tax/_index.md` | Create |
| `content/resources/general-tax-compliance/_index.md` | Create |
| `content/resources/ecommerce-sellers/_index.md` | Create |
| `content/resources/latam-inbound/_index.md` | Create |
| `content/resources/feie-vs-ftc.md` | Modify — add clusters + faqs |
| `content/resources/form-5471.md` | Modify — add clusters + faqs |
| `content/resources/smllc-5472.md` | Modify — add clusters + faqs |
| `content/resources/pre-immigration-planning.md` | Modify — add clusters + faqs |
| `content/resources/1031-exchange.md` | Modify — add clusters + faqs |
| `content/resources/real-estate-professional-status.md` | Modify — add clusters + faqs |
| `content/resources/short-term-rental-taxes.md` | Modify — add clusters + faqs |
| `content/resources/s-corps.md` | Modify — add clusters + faqs |
| `content/resources/solo-401k-vs-sep-ira.md` | Modify — add clusters + faqs |
| `content/resources/due-dates.md` | Modify — add clusters + faqs |
| `content/resources/digital-nomad-checklist.md` | Create — new article |
| `content/resources/crypto-tax-form-8949.md` | Create — new article |
| `content/resources/penalty-abatement-guide.md` | Create — new article |

---

## Task 1: Add `clusters` and `faqs` frontmatter to all 10 existing articles

**Files:** All 10 `content/resources/*.md` (not `_index.md`)

Add `clusters:` (list, first entry = primary for breadcrumb) and `faqs:` to each article. Do not change any other frontmatter or body content.

- [ ] **Step 1: Update `content/resources/feie-vs-ftc.md` frontmatter**

Open the file. The current frontmatter ends with `featured: false`. Add these lines before the closing `---`:

```yaml
clusters: ["international-tax"]
faqs:
  - q: "Can I claim both the FEIE and the Foreign Tax Credit on the same income?"
    a: "No. You cannot apply the FEIE and the FTC to the same dollars of foreign income. However, you can use the FEIE to exclude some income and apply the FTC to taxes paid on non-excluded income above the exclusion threshold."
  - q: "What is the FEIE exclusion limit for 2026?"
    a: "The 2026 FEIE exclusion is $130,000 (adjusted annually for inflation). Income above this amount is still subject to U.S. tax, though the Foreign Tax Credit may offset remaining liability."
  - q: "Do I have to choose between the FEIE and the FTC every year?"
    a: "Yes. The election is made annually on Form 2555. Revoking a prior FEIE election requires IRS consent and typically bars you from re-electing for five years."
```

- [ ] **Step 2: Update `content/resources/form-5471.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["international-tax"]
faqs:
  - q: "Who is required to file Form 5471?"
    a: "U.S. persons who are officers, directors, or shareholders owning 10% or more of a foreign corporation must file Form 5471. There are five categories of filers with different disclosure requirements."
  - q: "What is the penalty for a missing or late Form 5471?"
    a: "The IRS imposes a $10,000 penalty per Form 5471 not filed, with continuation penalties up to $50,000 for each 90-day period after IRS notification. These penalties apply even if no tax is owed."
  - q: "Does Form 5471 need to be filed if the foreign corporation had no activity?"
    a: "Yes. Dormant foreign corporations still require Form 5471 filing under most filer categories. Failure to file is penalized regardless of income or activity level."
```

- [ ] **Step 3: Update `content/resources/smllc-5472.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["international-tax", "ecommerce-sellers", "latam-inbound"]
faqs:
  - q: "Does a foreign-owned single-member LLC need to file Form 5472?"
    a: "Yes. Since 2017, foreign-owned single-member LLCs disregarded for income tax purposes are treated as domestic corporations for Form 5472 purposes. All transactions with the foreign owner must be reported."
  - q: "What is the penalty for failing to file Form 5472?"
    a: "The penalty is $25,000 per return per year. An additional $25,000 applies for each 90-day period following IRS notice of non-compliance. There is no de minimis exception."
  - q: "What transactions must be reported on Form 5472?"
    a: "Reportable transactions include capital contributions, loans, sales of property, payments for services, and any other financial exchange between the LLC and its foreign owner or related parties."
```

- [ ] **Step 4: Update `content/resources/pre-immigration-planning.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["international-tax", "latam-inbound"]
faqs:
  - q: "When should I start pre-immigration tax planning?"
    a: "Ideally 12 to 24 months before obtaining a U.S. green card or long-term visa. Key elections, basis step-ups, and entity restructurings must be completed before U.S. tax residency begins or tax savings opportunities are permanently lost."
  - q: "What assets should be reviewed before immigrating to the U.S.?"
    a: "Foreign real estate, investment portfolios, business interests, life insurance policies, and pension plans all require review. Some assets receive favorable tax treatment only if restructured before immigration."
  - q: "Can I still own a foreign business after becoming a U.S. resident?"
    a: "Yes, but foreign business ownership triggers new U.S. filing obligations including Form 5471 (foreign corporations), FBAR, and potentially PFIC rules. Advance planning can avoid costly misclassifications."
```

- [ ] **Step 5: Update `content/resources/1031-exchange.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["real-estate-tax"]
faqs:
  - q: "How long do I have to identify replacement property in a 1031 exchange?"
    a: "You have 45 days from the date of sale of the relinquished property to identify up to three potential replacement properties in writing."
  - q: "Can I use a 1031 exchange for foreign real estate?"
    a: "No. Since the Tax Cuts and Jobs Act of 2017, 1031 exchanges apply only to U.S. real property. Foreign property cannot be exchanged for domestic property under Section 1031."
  - q: "What happens to the deferred gain when I eventually sell the replacement property?"
    a: "The deferred gain carries into the replacement property's basis. When you sell without another exchange, the full accumulated gain — including all prior deferred amounts — becomes taxable."
```

- [ ] **Step 6: Update `content/resources/real-estate-professional-status.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["real-estate-tax"]
faqs:
  - q: "How many hours per year do I need to qualify as a real estate professional?"
    a: "You must spend more than 750 hours per year in real property trades or businesses in which you materially participate, and those real estate hours must exceed the hours spent in all other trades or businesses combined."
  - q: "Can a married couple qualify if only one spouse works in real estate?"
    a: "Yes. Only one spouse needs to satisfy the 750-hour test. Once that spouse qualifies, their real estate professional status applies to the joint return, allowing rental losses to offset other income."
  - q: "Do real estate professionals still need to materially participate in each rental property?"
    a: "Yes. Qualifying as a real estate professional removes the passive activity classification, but you must still materially participate in each rental property — or make a grouping election — to deduct losses against non-passive income."
```

- [ ] **Step 7: Update `content/resources/short-term-rental-taxes.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["real-estate-tax"]
faqs:
  - q: "Is Airbnb and short-term rental income subject to self-employment tax?"
    a: "Generally no. Short-term rental income is treated as investment income, not self-employment income, unless you provide substantial services (like a hotel). Most hosts do not owe self-employment tax."
  - q: "Can I deduct short-term rental losses against my W-2 salary?"
    a: "Possibly. If your average rental period is 7 days or fewer and you materially participate, losses may be non-passive and deductible against any income. The 750-hour real estate professional test is not required for this specific exception."
  - q: "What is the 14-day personal use rule for short-term rentals?"
    a: "If you personally use the property for more than 14 days or 10% of rental days (whichever is greater), it is classified as a vacation home. Expense deductions become limited and losses cannot offset other income."
```

- [ ] **Step 8: Update `content/resources/s-corps.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["business-tax"]
faqs:
  - q: "At what income level does an S-Corp election make sense?"
    a: "An S-Corp election typically saves money once your net self-employment profit exceeds $40,000 to $50,000 per year. Below that threshold, the cost of payroll compliance often outweighs the self-employment tax savings."
  - q: "What is the deadline to elect S-Corp status?"
    a: "Form 2553 must be filed by March 15 for the election to take effect for the current calendar year. Elections filed after March 15 generally take effect the following year, unless you qualify for late election relief."
  - q: "Do S-Corp shareholders have to take a salary?"
    a: "Yes. Shareholder-employees who perform services for the S-Corp must receive reasonable compensation reported on a W-2. Taking no salary and treating all income as distributions is a common audit trigger."
```

- [ ] **Step 9: Update `content/resources/solo-401k-vs-sep-ira.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["individual-tax"]
faqs:
  - q: "Which allows higher contributions — a Solo 401(k) or SEP-IRA?"
    a: "Both allow employer contributions up to 25% of compensation or $69,000 (2024 limit). However, the Solo 401(k) also allows an additional $23,000 employee deferral (plus $7,500 catch-up if age 50+), making it significantly more powerful for high-income self-employed individuals."
  - q: "Can I contribute to a Solo 401(k) if I have a day job with a 401(k)?"
    a: "The $23,000 employee deferral limit is shared across all 401(k) plans. If your day job 401(k) already maxes out employee deferrals, your Solo 401(k) contributions are limited to the employer (profit-sharing) portion only."
  - q: "When is the deadline to open a Solo 401(k)?"
    a: "The plan must be established by December 31 of the tax year you want to make contributions. Contributions themselves can be made up to the tax return deadline (plus extensions)."
```

- [ ] **Step 10: Update `content/resources/due-dates.md` frontmatter**

Add before closing `---`:

```yaml
clusters: ["general-tax-compliance"]
faqs:
  - q: "What is the deadline to file a personal tax return?"
    a: "April 15 for most individuals. An automatic 6-month extension to October 15 is available by filing Form 4868, but any taxes owed are still due April 15 — the extension is to file, not to pay."
  - q: "What are the penalties for missing a tax deadline?"
    a: "The failure-to-file penalty is 5% of unpaid taxes per month (up to 25%). The failure-to-pay penalty is 0.5% per month. Both penalties plus interest accrue simultaneously from the due date."
  - q: "When are quarterly estimated tax payments due?"
    a: "Estimated tax payments are due April 15, June 15, September 15, and January 15 of the following year. Underpayment of estimated taxes triggers a separate penalty calculated on each quarter's shortfall."
```

- [ ] **Step 11: Verify build still passes**

```bash
cd "C:/Users/jcorn/Desktop/Claude/JC CPA LLC/website"
hugo --minify 2>&1 | tail -20
```

Expected: `Total in X ms` with no errors. Warnings about missing sections are OK at this stage.

- [ ] **Step 12: Commit**

```bash
git add content/resources/feie-vs-ftc.md content/resources/form-5471.md content/resources/smllc-5472.md content/resources/pre-immigration-planning.md content/resources/1031-exchange.md content/resources/real-estate-professional-status.md content/resources/short-term-rental-taxes.md content/resources/s-corps.md content/resources/solo-401k-vs-sep-ira.md content/resources/due-dates.md
git commit -m "feat: add cluster tags and FAQ frontmatter to all resource articles"
```

---

## Task 2: Create hub page layout

**Files:**
- Create: `layouts/resources/hub.html`

- [ ] **Step 1: Create `layouts/resources/hub.html`**

```html
{{ define "main" }}
  {{ partial "service-css.html" . }}
  {{ partial "nav-css.html" . }}
  {{ partial "footer-css.html" . }}

  {{ $clusterSlug := .Params.cluster }}

  {{ $spokes := slice }}
  {{ range where .Site.RegularPages "Section" "resources" }}
    {{ if in (.Params.clusters | default slice) $clusterSlug }}
      {{ $spokes = $spokes | append . }}
    {{ end }}
  {{ end }}

  <!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "{{ .Site.BaseURL }}"},
      {"@type": "ListItem", "position": 2, "name": "Resources", "item": "{{ .Site.BaseURL }}resources/"},
      {"@type": "ListItem", "position": 3, "name": "{{ .Title }}", "item": "{{ .Permalink }}"}
    ]
  }
  </script>

  <style>
    .hub-page {
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding: 25px;
    }

    .hub-hero {
      background: linear-gradient(135deg, #041f12 0%, #15482E 100%);
      color: #fff;
      border-radius: 20px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
      padding: 48px 52px 44px;
    }

    .hub-breadcrumb {
      font-size: 13px;
      opacity: 0.7;
      margin-bottom: 14px;
    }

    .hub-breadcrumb a {
      color: #fff;
      text-decoration: underline;
    }

    .hub-eyebrow {
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #7ecef7;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .hub-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(28px, 4vw, 44px);
      font-weight: 700;
      margin: 0 0 14px;
      line-height: 1.2;
    }

    .hub-hero-desc {
      font-size: 17px;
      opacity: 0.85;
      margin: 0;
      max-width: 640px;
      line-height: 1.65;
    }

    .hub-body {
      background: linear-gradient(90deg, #fff 0%, #edeef7 100%);
      border-radius: 20px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
      padding: 44px 48px 48px;
    }

    .hub-section-label {
      font-size: 11px;
      font-weight: 700;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
    }

    .hub-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 36px;
    }

    .hub-card {
      background: #fff;
      border-radius: 10px;
      border-left: 3px solid #15482E;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      text-decoration: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .hub-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    }

    .hub-card-stub {
      opacity: 0.5;
      border-left-color: #ccc;
      pointer-events: none;
    }

    .hub-card-coming {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #aaa;
      font-weight: 700;
    }

    .hub-card-title {
      font-family: 'Playfair Display', serif;
      font-size: 16px;
      font-weight: 700;
      color: #0f2818;
      line-height: 1.3;
    }

    .hub-card-stub .hub-card-title {
      color: #aaa;
    }

    .hub-card-desc {
      font-size: 13px;
      color: #666;
      line-height: 1.55;
      flex: 1;
    }

    .hub-card-link {
      font-size: 13px;
      color: #15482E;
      font-weight: 600;
      margin-top: 4px;
    }

    .hub-cta {
      background: #f0f7f3;
      border-radius: 12px;
      padding: 24px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 28px;
    }

    .hub-cta-text {
      font-size: 16px;
      font-weight: 600;
      color: #0f2818;
    }

    .hub-cta-btn {
      background: #15482E;
      color: #fff;
      padding: 12px 22px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.2s;
    }

    .hub-cta-btn:hover {
      background: #1e5c3a;
    }

    .hub-back {
      display: inline-block;
      font-size: 14px;
      color: #15482E;
      font-weight: 500;
      text-decoration: none;
    }

    .hub-back:hover {
      text-decoration: underline;
    }

    @media (max-width: 1024px) {
      .hub-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 768px) {
      .hub-page { padding: 12px; gap: 12px; }
      .hub-hero { padding: 32px 24px 28px; border-radius: 14px; }
      .hub-body { padding: 28px 24px 32px; border-radius: 14px; }
      .hub-grid { grid-template-columns: 1fr; }
      .hub-cta { flex-direction: column; align-items: flex-start; }
    }

    @media (max-width: 480px) {
      .hub-page { padding: 8px; }
    }
  </style>

  {{ partial "nav.html" . }}

  <div class="hub-page">

    <div class="hub-hero">
      <div class="hub-breadcrumb">
        <a href="/resources/">Resources</a> / {{ .Title }}
      </div>
      <div class="hub-eyebrow">Resource Hub</div>
      <h1>{{ .Title }}</h1>
      <p class="hub-hero-desc">{{ .Description }}</p>
    </div>

    <div class="hub-body">
      {{ if or $spokes .Params.coming_soon }}
        <div class="hub-section-label">Articles in this cluster</div>
        <div class="hub-grid">
          {{ range $spokes }}
          <a href="{{ .RelPermalink }}" class="hub-card">
            <div class="hub-card-title">{{ .Title }}</div>
            <div class="hub-card-desc">{{ .Description }}</div>
            <div class="hub-card-link">Read article →</div>
          </a>
          {{ end }}

          {{ range .Params.coming_soon }}
          <div class="hub-card hub-card-stub">
            <div class="hub-card-coming">Coming Soon</div>
            <div class="hub-card-title">{{ .title }}</div>
            <div class="hub-card-desc">{{ .description }}</div>
          </div>
          {{ end }}
        </div>
      {{ end }}

      <div class="hub-cta">
        <div class="hub-cta-text">Have questions? We can help.</div>
        <a href="/contact/" class="hub-cta-btn">Schedule a Consultation</a>
      </div>

      <a href="/resources/" class="hub-back">← Back to Resource Library</a>
    </div>

  </div>

  {{ partial "footer.html" . }}
{{ end }}
```

- [ ] **Step 2: Verify Hugo can find the layout — run build**

```bash
cd "C:/Users/jcorn/Desktop/Claude/JC CPA LLC/website"
hugo --minify 2>&1 | tail -10
```

Expected: build completes. The layout isn't used yet so no hub pages render — that's fine.

- [ ] **Step 3: Commit**

```bash
git add layouts/resources/hub.html
git commit -m "feat: add hub page layout for resource cluster pages"
```

---

## Task 3: Create 7 hub `_index.md` content files

**Files:** 7 new `_index.md` files in `content/resources/` subdirectories

- [ ] **Step 1: Create `content/resources/international-tax/_index.md`**

```markdown
---
title: "International U.S. Tax Compliance"
description: "Guides on FEIE, foreign tax credits, Form 5471, Form 5472, FBAR, and pre-immigration planning from a licensed CPA with a Master of Taxation."
layout: hub
cluster: international-tax
---
```

- [ ] **Step 2: Create `content/resources/real-estate-tax/_index.md`**

```markdown
---
title: "Real Estate Tax Strategy"
description: "In-depth guides on 1031 exchanges, real estate professional status, and short-term rental taxes for investors and property owners."
layout: hub
cluster: real-estate-tax
---
```

- [ ] **Step 3: Create `content/resources/individual-tax/_index.md`**

```markdown
---
title: "Individual Tax Planning"
description: "Retirement account strategy, crypto taxes, and tax-saving strategies for individuals, freelancers, and self-employed professionals."
layout: hub
cluster: individual-tax
---
```

- [ ] **Step 4: Create `content/resources/business-tax/_index.md`**

```markdown
---
title: "Business Tax Strategy"
description: "S-Corp elections, entity planning, and tax strategy guides for small business owners, founders, and self-employed individuals."
layout: hub
cluster: business-tax
---
```

- [ ] **Step 5: Create `content/resources/general-tax-compliance/_index.md`**

```markdown
---
title: "IRS Compliance & Tax Deadlines"
description: "Tax calendars, penalty abatement guides, and IRS notice response resources to stay compliant and avoid costly penalties."
layout: hub
cluster: general-tax-compliance
---
```

- [ ] **Step 6: Create `content/resources/ecommerce-sellers/_index.md`**

```markdown
---
title: "Tax Resources for E-Commerce Sellers"
description: "Sales tax nexus, 1099-K reporting, entity structure, and foreign-owner compliance guides for Etsy, eBay, and Amazon sellers."
layout: hub
cluster: ecommerce-sellers
coming_soon:
  - title: "Sales Tax Nexus for Online Sellers"
    description: "When you owe sales tax in states where you sell — 1099-K thresholds, economic nexus rules, and how to register."
  - title: "Entity Structure for Amazon & Etsy Sellers"
    description: "LLC vs. S-Corp for high-volume marketplace sellers, and how to structure a foreign-owned U.S. selling entity."
---
```

- [ ] **Step 7: Create `content/resources/latam-inbound/_index.md`**

```markdown
---
title: "U.S. Tax Resources for Latin American Investors"
description: "Form 1120-F, Form 5472, estate planning blockers, and Form 8832 guides for foreign nationals and Latin American businesses investing in the U.S."
layout: hub
cluster: latam-inbound
coming_soon:
  - title: "Form 1120-F: U.S. Tax Return for Foreign Corporations"
    description: "When a foreign corporation must file a U.S. return, effectively connected income rules, and treaty positions."
  - title: "Estate Planning Blockers for Foreign Nationals"
    description: "Using U.S. LLCs and foreign corporations to shield U.S. situs assets from estate tax exposure."
  - title: "Form 8832 Entity Classification Elections"
    description: "Choosing how your foreign entity is taxed in the U.S. — corporation, partnership, or disregarded entity."
---
```

- [ ] **Step 8: Run `hugo server` and verify all 7 hub pages render**

```bash
cd "C:/Users/jcorn/Desktop/Claude/JC CPA LLC/website"
hugo server --buildDrafts
```

Open in browser and check each URL:
- `http://localhost:1313/resources/international-tax/` — should show FEIE, Form 5471, Form 5472, Pre-Immigration spoke cards
- `http://localhost:1313/resources/real-estate-tax/` — should show 1031, REPS, Short-Term Rental cards
- `http://localhost:1313/resources/individual-tax/` — should show Solo 401k card (Crypto article not written yet)
- `http://localhost:1313/resources/business-tax/` — should show S-Corps card
- `http://localhost:1313/resources/general-tax-compliance/` — should show Due Dates card (Penalty article not written yet)
- `http://localhost:1313/resources/ecommerce-sellers/` — should show Form 5472 card + 2 coming-soon stubs
- `http://localhost:1313/resources/latam-inbound/` — should show Form 5472 + Pre-Immigration cards + 3 coming-soon stubs

- [ ] **Step 9: Commit**

```bash
git add content/resources/international-tax/ content/resources/real-estate-tax/ content/resources/individual-tax/ content/resources/business-tax/ content/resources/general-tax-compliance/ content/resources/ecommerce-sellers/ content/resources/latam-inbound/
git commit -m "feat: add 7 resource cluster hub pages"
```

---

## Task 4: Update article template with breadcrumb, schema, and TODO comment

**Files:**
- Modify: `layouts/resources/single.html`

- [ ] **Step 1: Replace the existing Article schema block**

Find this block (lines 3–22 approximately in `layouts/resources/single.html`):

```html
  <!-- Article Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{{ .Title }}",
    "description": "{{ .Description | default .Site.Data.siteconfig.company.description }}",
    "url": "{{ .Permalink }}",
    "datePublished": "{{ .Date.Format "2006-01-02" }}",
    "dateModified": "{{ .Lastmod.Format "2006-01-02" }}",
    "author": {
      "@type": "Organization",
      "name": "{{ .Site.Data.siteconfig.company.name }}",
      "url": "{{ .Site.BaseURL }}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "{{ .Site.Data.siteconfig.company.name }}",
      "url": "{{ .Site.BaseURL }}"
    }
  }
  </script>
```

Replace with this expanded block:

```html
  <!-- Article Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{{ .Title }}",
    "description": "{{ .Description | default .Site.Data.siteconfig.company.description }}",
    "url": "{{ .Permalink }}",
    "datePublished": "{{ .Date.Format "2006-01-02" }}",
    "dateModified": "{{ .Lastmod.Format "2006-01-02" }}",
    "author": {
      "@type": "Organization",
      "name": "{{ .Site.Data.siteconfig.company.name }}",
      "url": "{{ .Site.BaseURL }}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "{{ .Site.Data.siteconfig.company.name }}",
      "url": "{{ .Site.BaseURL }}"
    }
  }
  </script>
  <!-- TODO: When author name is ready, add Person schema to the "author" field above — see memory/feedback_author_bio.md -->

  <!-- BreadcrumbList Schema -->
  {{ $primaryCluster := index (.Params.clusters | default slice) 0 }}
  {{ $hubPage := "" }}
  {{ if $primaryCluster }}{{ $hubPage = .Site.GetPage (printf "/resources/%s" $primaryCluster) }}{{ end }}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "{{ .Site.BaseURL }}"},
      {"@type": "ListItem", "position": 2, "name": "Resources", "item": "{{ .Site.BaseURL }}resources/"}
      {{ if $hubPage }}
      ,{"@type": "ListItem", "position": 3, "name": "{{ $hubPage.Title }}", "item": "{{ $hubPage.Permalink }}"}
      ,{"@type": "ListItem", "position": 4, "name": "{{ .Title }}", "item": "{{ .Permalink }}"}
      {{ else }}
      ,{"@type": "ListItem", "position": 3, "name": "{{ .Title }}", "item": "{{ .Permalink }}"}
      {{ end }}
    ]
  }
  </script>

  {{ if .Params.faqs }}
  <!-- FAQPage Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {{ range $i, $faq := .Params.faqs }}{{ if $i }},{{ end }}
      {
        "@type": "Question",
        "name": {{ $faq.q | jsonify }},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": {{ $faq.a | jsonify }}
        }
      }
      {{ end }}
    ]
  }
  </script>
  {{ end }}
```

- [ ] **Step 2: Update the breadcrumb HTML in the article hero**

Find (inside the `.article-hero` div):

```html
      <div class="article-breadcrumb">
        <a href="/resources/">Resources</a> / {{ .Title }}
      </div>
```

Replace with:

```html
      {{ $primaryCluster := index (.Params.clusters | default slice) 0 }}
      {{ $hubPage := "" }}
      {{ if $primaryCluster }}{{ $hubPage = .Site.GetPage (printf "/resources/%s" $primaryCluster) }}{{ end }}
      <div class="article-breadcrumb">
        <a href="/resources/">Resources</a>
        {{ if $hubPage }} / <a href="{{ $hubPage.RelPermalink }}">{{ $hubPage.Title }}</a>{{ end }}
        / {{ .Title }}
      </div>
```

- [ ] **Step 3: Add TODO comment for Reviewed By badge**

Find (inside `.article-content` div, right after the `article-back` link):

```html
          <a href="/resources/" class="article-back">← Back to Resource Library</a>
          {{ .Content }}
```

Replace with:

```html
          <a href="/resources/" class="article-back">← Back to Resource Library</a>
          <!-- TODO: Add "Reviewed by [Name], CPA, MTax" badge here when ready — see memory/feedback_author_bio.md -->
          {{ .Content }}
```

- [ ] **Step 4: Run `hugo server` and check an article page**

```bash
hugo server --buildDrafts
```

Open `http://localhost:1313/resources/feie-vs-ftc/` and verify:
- Breadcrumb shows: `Resources / International U.S. Tax Compliance / FEIE vs. Foreign Tax Credit`  
- "International U.S. Tax Compliance" is a clickable link to the hub page
- View page source and confirm the `FAQPage` and `BreadcrumbList` JSON-LD blocks are present

- [ ] **Step 5: Check an article that has no `clusters:` tag yet (any future unclustered article falls back gracefully)**

Temporarily verify: create a test by checking that `due-dates.md` (which has `clusters: ["general-tax-compliance"]`) shows the hub link, while the existing `_index.md` list page is unaffected.

- [ ] **Step 6: Commit**

```bash
git add layouts/resources/single.html
git commit -m "feat: add BreadcrumbList + FAQPage schema and cluster breadcrumb to article template"
```

---

## Task 5: Update resource library index with intro and cluster hub links

**Files:**
- Modify: `layouts/resources/list.html`

- [ ] **Step 1: Add CSS for cluster hub section**

Find the closing `}` of the `.lib-card.hidden` rule (near the end of the `<style>` block, before the responsive media queries). Insert after it:

```css
    /* Cluster hub links */
    .library-clusters {
      margin-bottom: 28px;
      padding-bottom: 24px;
      border-bottom: 1px solid #e0e0e0;
    }

    .library-clusters-intro {
      font-size: 15px;
      color: #555;
      line-height: 1.7;
      margin-bottom: 16px;
      max-width: 720px;
    }

    .library-cluster-links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .cluster-pill-link {
      display: inline-block;
      padding: 7px 14px;
      background: #fff;
      border: 1.5px solid #15482E;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      color: #15482E;
      text-decoration: none;
      transition: all 0.2s;
    }

    .cluster-pill-link:hover {
      background: #15482E;
      color: #fff;
    }
```

- [ ] **Step 2: Add intro and cluster links HTML**

Find (inside `.library-body` div):

```html
      <div class="library-search">
```

Insert this block immediately before it:

```html
      <div class="library-clusters">
        <p class="library-clusters-intro">Our resource library covers the full range of U.S. tax topics — from international compliance for expats and foreign investors, to real estate tax strategy, business entity planning, and general IRS compliance. Browse by topic or use the search and filters below.</p>
        <div class="library-cluster-links">
          <a href="/resources/international-tax/" class="cluster-pill-link">International Tax</a>
          <a href="/resources/real-estate-tax/" class="cluster-pill-link">Real Estate Tax</a>
          <a href="/resources/individual-tax/" class="cluster-pill-link">Individual Tax</a>
          <a href="/resources/business-tax/" class="cluster-pill-link">Business Tax</a>
          <a href="/resources/general-tax-compliance/" class="cluster-pill-link">Tax Compliance</a>
          <a href="/resources/ecommerce-sellers/" class="cluster-pill-link">E-Commerce Sellers</a>
          <a href="/resources/latam-inbound/" class="cluster-pill-link">LATAM Inbound</a>
        </div>
      </div>

```

- [ ] **Step 3: Run `hugo server` and verify library page**

```bash
hugo server --buildDrafts
```

Open `http://localhost:1313/resources/` and confirm:
- Intro paragraph appears above the search bar
- 7 cluster pill links appear, each clickable
- Existing search/filter/carousel is unchanged below

- [ ] **Step 4: Commit**

```bash
git add layouts/resources/list.html
git commit -m "feat: add intro paragraph and cluster hub links to resource library"
```

---

## Task 6: Write new article — Digital Nomad Tax Checklist

**Files:**
- Create: `content/resources/digital-nomad-checklist.md`

- [ ] **Step 1: Create the article file**

```markdown
---
title: "2026 Digital Nomad Tax Checklist: What Remote Workers Owe the IRS"
description: "If you work remotely from abroad, U.S. tax rules still apply. This checklist covers FEIE, FBAR, state tax exit, self-employment tax, and every filing you need to stay compliant."
date: 2026-04-08
practices: ["expats"]
services: ["international-tax", "tax-compliance"]
featured: false
clusters: ["international-tax"]
faqs:
  - q: "Do I still have to pay U.S. taxes if I live abroad full time?"
    a: "Yes. The United States taxes its citizens and permanent residents on worldwide income regardless of where they live. However, the Foreign Earned Income Exclusion (FEIE) and Foreign Tax Credit can eliminate most or all of your U.S. tax bill if you qualify."
  - q: "What is the FEIE exclusion limit for 2026?"
    a: "The 2026 FEIE exclusion is $130,000 (adjusted annually for inflation). Income below this threshold earned abroad while meeting the physical presence or bona fide residence test can be excluded from U.S. taxable income."
  - q: "Do I need to file an FBAR if I bank abroad?"
    a: "Yes, if the aggregate value of your foreign financial accounts exceeded $10,000 at any point during the year, you must file FinCEN Form 114 (FBAR) by April 15. The penalty for willful non-filing can reach $100,000 per violation."
---

Working remotely from Lisbon, Medellín, or Chiang Mai is increasingly common — but the IRS follows you. As a U.S. citizen or green card holder, your worldwide income is taxable regardless of where you earn it. The good news: the tax code has specific tools designed for people in your situation. The bad news: missing any one of them can create penalties that dwarf your tax bill.

Use this checklist to verify you have every required filing covered.

---

## Step 1: Confirm Your Physical Presence Test Status

The IRS requires you to be outside the United States for **330 full days in any 12-month period** to claim the Foreign Earned Income Exclusion (FEIE) under the Physical Presence Test. Days in transit through the U.S. count as U.S. days.

**Action:** Log every travel date. The IRS can and does request evidence. A spreadsheet of entry/exit stamps is your first line of defense.

**Alternative — Bona Fide Residence Test:** If you have established a genuine domicile in a foreign country (not just a tourist visa situation), you may qualify under the Bona Fide Residence Test instead, which requires only that you be a resident of a foreign country for an uninterrupted tax year.

*Primary source: [IRS Publication 54, Tax Guide for U.S. Citizens and Resident Aliens Abroad](https://www.irs.gov/publications/p54)*

---

## Step 2: File Form 2555 to Claim the FEIE

If you qualify, **Form 2555** is how you claim the Foreign Earned Income Exclusion on your Form 1040. The 2026 exclusion limit is **$130,000**.

**What it excludes:** Foreign earned income (wages, self-employment income from services performed abroad). It does NOT exclude passive income like dividends, interest, or rental income.

**Key trap:** If you revoke a prior FEIE election, you generally cannot re-elect for five years without IRS consent. Be consistent year to year.

*Primary source: [IRS Form 2555 Instructions](https://www.irs.gov/forms-pubs/about-form-2555)*

---

## Step 3: Evaluate the Foreign Tax Credit as an Alternative

If you pay income tax to a foreign country, the **Foreign Tax Credit (Form 1116)** may reduce your U.S. tax dollar-for-dollar. For high-tax countries (France, Germany, Australia), the FTC often outperforms the FEIE.

| Scenario | FEIE Better | FTC Better |
|---|---|---|
| Low-tax country (Portugal NHR, UAE, Thailand) | ✓ | |
| High-tax country (Germany, France, UK) | | ✓ |
| Income near or above $130k | | ✓ |
| Self-employed with Social Security credit concerns | | ✓ |

You cannot apply both to the same income — but you can use the FEIE on foreign earned income up to $130,000 and the FTC on any remaining foreign taxes on income above that threshold.

---

## Step 4: Don't Forget Self-Employment Tax

The FEIE excludes income from U.S. *income* tax — but **self-employment tax (15.3%)** on net earnings from self-employment is a separate calculation. Many freelancers are surprised to find they owe self-employment tax even after the FEIE zeros out their income tax.

**Exception:** If you work in a country that has a [Totalization Agreement](https://www.ssa.gov/international/agreements_overview.html) with the United States and you pay into that country's social security system, you may be exempt from U.S. self-employment tax for those earnings.

Countries with U.S. Totalization Agreements include most of Western Europe, Australia, Japan, South Korea, and Chile, among others.

---

## Step 5: File Your FBAR (FinCEN 114)

If the **aggregate value** of all your foreign financial accounts — bank accounts, brokerage accounts, pension accounts — exceeded **$10,000 at any point during the year**, you must file FinCEN Form 114 (the FBAR).

**Due date:** April 15, with an automatic extension to October 15.  
**Where to file:** Through the BSA E-Filing System at FinCEN.gov — not with your tax return.  
**Penalty exposure:** Non-willful violations: up to $10,000 per violation. Willful violations: the greater of $100,000 or 50% of the account balance per violation.

---

## Step 6: Check Form 8938 (FATCA) Thresholds

In addition to the FBAR, **Form 8938** (Statement of Specified Foreign Financial Assets) must be attached to your Form 1040 if you hold specified foreign financial assets above these thresholds:

| Filing Status | Living Abroad Threshold |
|---|---|
| Single or MFS | $200,000 at year-end or $300,000 at any point |
| Married Filing Jointly | $400,000 at year-end or $600,000 at any point |

Form 8938 covers a broader category of assets than the FBAR, including foreign business interests and certain foreign insurance products.

*Primary source: [IRS Form 8938 Instructions](https://www.irs.gov/forms-pubs/about-form-8938)*

---

## Step 7: Exit Your State — Properly

Several U.S. states are aggressive about claiming residency — and your tax obligation — even after you leave. **California, New York, Virginia, and New Mexico** are the most aggressive.

**What you need to do:**
- Change your driver's license to a non-income-tax state (Texas, Florida, Nevada, etc.) before departing, if possible
- Close or transfer bank accounts tied to your home state
- Update your voter registration
- File a final-year state return and affirmatively claim your departure date

Do not maintain a "domicile" in a high-tax state while living abroad — courts look at social ties, property ownership, and intent.

---

## Step 8: File on Time — or Get an Automatic Extension

U.S. citizens living abroad automatically get a 2-month extension to **June 15** without filing Form 4868. However:
- Taxes owed are still due April 15 — interest accrues from that date
- If you need more time, file Form 4868 by June 15 to extend to October 15
- FBAR has its own automatic extension to October 15 (no form required)

---

## Summary Checklist

| Filing | Threshold | Due Date |
|---|---|---|
| Form 1040 | Always required | April 15 (June 15 abroad) |
| Form 2555 (FEIE) | If qualifying abroad | With Form 1040 |
| Form 1116 (FTC) | If paying foreign taxes | With Form 1040 |
| Schedule SE (SE Tax) | Net SE income > $400 | With Form 1040 |
| FinCEN 114 (FBAR) | Foreign accounts > $10,000 | April 15 / Oct 15 |
| Form 8938 (FATCA) | Foreign assets > $200k (single) | With Form 1040 |

International tax compliance is one of the most audit-prone areas of the U.S. tax code. If any of the above applies to your situation, working with a CPA who specializes in international tax — not a generalist — is worth every dollar.
```

- [ ] **Step 2: Run `hugo server` and verify the article renders**

```bash
hugo server --buildDrafts
```

Open `http://localhost:1313/resources/digital-nomad-checklist/` and confirm:
- Breadcrumb shows: `Resources / International U.S. Tax Compliance / 2026 Digital Nomad Tax Checklist`
- Article body renders with tables and sections
- Check the International Tax hub at `/resources/international-tax/` — the new article card should appear

- [ ] **Step 3: Commit**

```bash
git add content/resources/digital-nomad-checklist.md
git commit -m "feat: add Digital Nomad Tax Checklist article"
```

---

## Task 7: Write new article — Crypto Taxes & Form 8949

**Files:**
- Create: `content/resources/crypto-tax-form-8949.md`

- [ ] **Step 1: Create the article file**

```markdown
---
title: "Crypto Taxes & Form 8949: What Every U.S. Holder Needs to Know"
description: "Every crypto sale, swap, or exchange is a taxable event in the U.S. This guide covers capital gains, staking income, DeFi, Form 8949, and how to calculate your actual tax liability."
date: 2026-04-08
practices: ["founders", "expats"]
services: ["tax-strategy", "tax-compliance"]
featured: false
clusters: ["individual-tax"]
faqs:
  - q: "Is cryptocurrency taxed in the United States?"
    a: "Yes. The IRS treats cryptocurrency as property, not currency. Every sale, exchange, or use of crypto to purchase goods or services is a taxable event requiring you to calculate and report gain or loss on Form 8949."
  - q: "What form do I use to report crypto gains and losses?"
    a: "Form 8949 (Sales and Other Dispositions of Capital Assets), which feeds into Schedule D of your Form 1040. Each taxable transaction must be listed individually with date acquired, date sold, proceeds, and cost basis."
  - q: "Do I owe taxes if I just hold crypto and never sell?"
    a: "No. Simply holding cryptocurrency — even if its value increases — is not a taxable event. Tax liability is triggered only when you dispose of crypto through a sale, exchange, swap, or use as payment."
---

The IRS has been clear since [Notice 2014-21](https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21): cryptocurrency is property for U.S. tax purposes. That means every time you sell, trade, or spend crypto, you have a reportable taxable event — just like selling a stock. The complexity comes from the sheer volume of transactions modern crypto users have, and the often-unclear cost basis tracking.

This guide covers the core rules every U.S. holder needs to understand before filing.

---

## The Fundamental Rule: Every Disposal Is Taxable

A "disposal" of cryptocurrency occurs whenever you:

- **Sell** crypto for U.S. dollars or another fiat currency
- **Swap** one cryptocurrency for another (ETH → BTC is a taxable exchange)
- **Use crypto to buy goods or services** (paying with Bitcoin is a taxable event)
- **Receive and later sell** staking rewards or mining income
- **Bridge** tokens across blockchains (treated as a swap in most cases)

**Not a taxable event:**
- Buying crypto with fiat and holding it
- Transferring crypto between your own wallets
- Receiving crypto as a gift (the donor may owe gift tax)

---

## Short-Term vs. Long-Term Capital Gains

The holding period determines your tax rate:

| Holding Period | Tax Rate |
|---|---|
| 12 months or less | Ordinary income rates (10% – 37%) |
| More than 12 months | Long-term capital gains rates (0%, 15%, or 20%) |

**Example:**
- You bought 1 ETH on January 1, 2025 for $2,000
- You sold it on March 1, 2026 for $3,500
- Holding period: 14 months → long-term gain of $1,500
- Tax at 15% long-term rate: $225

If you had sold after only 10 months, the same $1,500 gain would be taxed at your ordinary income rate — potentially 22%, 24%, or higher.

---

## How to Calculate Cost Basis

Cost basis is what you paid for the crypto, including fees. When you sell, your gain or loss is:

**Gain = Proceeds − Cost Basis**

If you bought the same cryptocurrency at different times (dollar-cost averaging), you need a **cost basis accounting method**:

| Method | Description |
|---|---|
| **FIFO** (First In, First Out) | Oldest coins sold first — default if no method specified |
| **Specific Identification** | Choose exactly which lots to sell — can minimize taxes by selecting high-basis lots |
| **HIFO** (Highest In, First Out) | Highest-cost lots sold first — minimizes gains (must use specific ID to implement) |

**Important:** You must be consistent with your method and document it. The IRS allows specific identification for cryptocurrency, but you must keep adequate records.

---

## Reporting on Form 8949

Every taxable crypto transaction must appear on **Form 8949**, organized by:
- **Part I:** Short-term transactions (held 12 months or less)
- **Part II:** Long-term transactions (held more than 12 months)

Each row requires:
1. Description of property (e.g., "0.5 BTC")
2. Date acquired
3. Date sold or disposed
4. Proceeds (what you received)
5. Cost basis (what you paid)
6. Gain or loss

The net totals from Form 8949 flow to **Schedule D**, which then feeds into your Form 1040.

*Primary source: [IRS Form 8949 Instructions](https://www.irs.gov/forms-pubs/about-form-8949)*

---

## Staking and Mining Income

When you receive staking rewards or mining income, the **fair market value at the time of receipt** is ordinary income — taxed at your regular income tax rate, not capital gains rates.

Per [Rev. Rul. 2023-14](https://www.irs.gov/irb/2023-35_IRB#REV-RUL-2023-14), staking rewards are income in the year received. Your cost basis in those rewards is the fair market value at receipt. When you later sell, any additional gain is a capital gain measured from that basis.

**Example:**
- You received 10 SOL as staking rewards when SOL = $100
- You recognize $1,000 of ordinary income in that year
- Your basis in the 10 SOL is $1,000
- Later you sell for $1,500 → $500 capital gain

---

## DeFi: Swaps, Liquidity Pools, and Wrapped Tokens

Decentralized finance transactions are among the most complex areas in crypto tax:

| Transaction | Tax Treatment |
|---|---|
| Token swap (e.g., USDC → ETH on Uniswap) | Taxable disposal of USDC, acquisition of ETH |
| Adding to a liquidity pool | May be treated as a disposal (IRS guidance unclear — document your position) |
| Receiving LP fees | Ordinary income at receipt |
| Wrapping tokens (ETH → WETH) | Generally not taxable (same economic asset) |
| Borrowing against collateral | Not taxable (you retain ownership) |

Because IRS guidance on DeFi remains incomplete, document your rationale for each treatment. A well-documented position is more defensible than an undocumented one.

---

## NFTs

NFTs are also property. Buying and selling an NFT triggers capital gain or loss. Creating and selling an NFT is typically ordinary income (self-employment income). Royalties received from NFT resales are ordinary income.

---

## International Considerations

If you are a U.S. person holding crypto on a **foreign exchange**, the exchange itself may constitute a foreign financial account requiring:
- **FBAR (FinCEN 114)** if aggregate value exceeded $10,000
- **Form 8938** if value exceeded the applicable FATCA threshold

Foreign exchanges that issue 1099s are rare — assume you are responsible for your own recordkeeping.

---

## Practical Steps Before Filing

1. **Export transaction history** from every exchange you used (CSV format)
2. **Use crypto tax software** (Koinly, CoinTracker, TaxBit) to aggregate and calculate gains — manual tracking across hundreds of transactions is error-prone
3. **Review for missed transactions** — DeFi, bridging, NFTs, and staking often fall through the cracks
4. **Reconcile wallet activity** using a block explorer (Etherscan, Solscan) against your records
5. **Report even small amounts** — there is no de minimis exception for crypto under current IRS rules
```

- [ ] **Step 2: Run `hugo server` and verify**

```bash
hugo server --buildDrafts
```

Open `http://localhost:1313/resources/crypto-tax-form-8949/` and confirm the article renders.
Check `http://localhost:1313/resources/individual-tax/` — new article card should appear alongside Solo 401k.

- [ ] **Step 3: Commit**

```bash
git add content/resources/crypto-tax-form-8949.md
git commit -m "feat: add Crypto Taxes & Form 8949 article"
```

---

## Task 8: Write new article — IRS Penalty Abatement Guide

**Files:**
- Create: `content/resources/penalty-abatement-guide.md`

- [ ] **Step 1: Create the article file**

```markdown
---
title: "IRS Penalty Abatement: How to Fix a Notice Before It Gets Worse"
description: "Received an IRS penalty notice? First-Time Abatement and Reasonable Cause relief can eliminate failure-to-file and failure-to-pay penalties. Here's exactly how to request it."
date: 2026-04-08
practices: ["all"]
services: ["tax-compliance"]
featured: false
clusters: ["general-tax-compliance"]
faqs:
  - q: "Can IRS penalties be waived or reduced?"
    a: "Yes. The IRS has two primary penalty relief programs: First-Time Penalty Abatement (FTA), which is available to taxpayers with a clean compliance history, and Reasonable Cause relief, which applies when you had a legitimate reason for non-compliance such as a serious illness, natural disaster, or reliance on incorrect IRS advice."
  - q: "What is First-Time Penalty Abatement?"
    a: "First-Time Abatement (FTA) is an administrative waiver that removes failure-to-file, failure-to-pay, and failure-to-deposit penalties for taxpayers who have no penalties in the prior three years and are otherwise compliant. It can typically be requested by phone in a single IRS call."
  - q: "How do I respond to a CP2000 notice from the IRS?"
    a: "A CP2000 is a proposed change notice — not a bill. You have the right to agree, disagree, or partially agree. Respond in writing within 60 days with documentation supporting your position. Do not ignore it; failure to respond results in automatic assessment of the proposed amount."
---

An IRS notice in the mail triggers a panic response in almost everyone. But the majority of penalty notices — especially first-time issues — are resolvable, often by a single phone call. The IRS has two formal programs for penalty relief, and most CPAs know that asking for them is standard procedure, not a Hail Mary.

This guide explains which penalties can be abated, which programs to use, and exactly how to request relief.

---

## The Two Main Penalty Relief Programs

### 1. First-Time Penalty Abatement (FTA)

FTA is the IRS's administrative waiver for taxpayers who have been compliant but made a one-time mistake. It removes the three most common penalties:

- **Failure-to-file** (5% per month, up to 25% of unpaid tax)
- **Failure-to-pay** (0.5% per month, up to 25% of unpaid tax)
- **Failure-to-deposit** (for employment tax deposits)

**Eligibility requirements — all three must be met:**
1. You filed (or filed a valid extension) for all required returns in the prior three years
2. You paid, or arranged to pay, any tax owed (a payment plan counts)
3. You have no prior penalties in the past three years (other than an estimated tax penalty)

FTA does not require you to explain *why* the penalty occurred. You simply need to meet the eligibility criteria. It is available once per tax type per year.

**How to request FTA:**
- **By phone:** Call the IRS at 1-800-829-1040. State: "I'm calling to request First-Time Abatement under the administrative waiver for the [penalty type] on my [year] [form type] account." Most representatives can process this during the call.
- **In writing:** Include a statement citing IRM 20.1.1.3.6 (the FTA administrative waiver) in your response letter.

*Primary source: [IRS Internal Revenue Manual — First Time Abate (FTA)](https://www.irs.gov/irm/part20/irm_20-001-001r)*

---

### 2. Reasonable Cause Relief

When you don't qualify for FTA — or the penalty is for a type FTA doesn't cover — you can request abatement based on Reasonable Cause. This requires demonstrating that you exercised ordinary business care and prudence but were still unable to comply.

**Accepted reasonable cause examples:**
- Serious illness, death in the family, or incapacitation of the taxpayer
- Natural disaster (fire, flood, hurricane) that destroyed records
- Reliance on incorrect written advice from the IRS
- Inability to obtain records despite good-faith efforts
- First year in business with new payroll/tax obligations

**Not accepted:**
- "I forgot" or "I was busy"
- Reliance on a tax preparer who made an error (unless you can prove the preparer had all necessary information)
- Financial hardship alone (hardship affects the ability to pay, not the obligation to file)

**How to request Reasonable Cause relief:**
Submit a written statement explaining the circumstances, supported by documentation (medical records, insurance claims, correspondence, etc.). Attach it to your response to the penalty notice or submit via Form 843.

---

## Understanding Common IRS Penalty Notices

| Notice | What It Means | Action Required |
|---|---|---|
| **CP14** | First notice of balance due | Pay in full, set up payment plan, or dispute within 60 days |
| **CP501** | Second reminder of balance due | Same as CP14 — escalating urgency |
| **CP503** | Third reminder, stronger language | Same, but timeline to avoid further action is shortening |
| **CP504** | Final notice before levy | Respond immediately — IRS can levy state tax refunds after this |
| **CP2000** | Proposed changes based on third-party reporting (W-2s, 1099s) | Agree, disagree, or partially agree in writing within 60 days |
| **CP90/CP297** | Final Notice of Intent to Levy | 30 days to request a Collection Due Process hearing before levy |
| **LT11** | Intent to seize assets | Same as CP90 — act immediately |

*Primary source: [IRS Understanding Your IRS Notice](https://www.irs.gov/individuals/understanding-your-irs-notice-or-letter)*

---

## How to Respond to a CP2000 Notice

A CP2000 is one of the most common notices the IRS sends. It proposes changes to your return based on information it received from third parties (employers, brokers, banks) that don't match what you reported.

**Important:** A CP2000 is NOT a bill and NOT a final determination. It is a proposal.

**Step-by-step response:**

1. **Compare the proposed changes** to your records. The IRS is often right — a 1099 you forgot to report, or a W-2 from a brief job.

2. **If you agree:** Sign the response form and return it with payment (or set up a payment plan). No further explanation needed.

3. **If you disagree:** Write a letter explaining why the proposed change is incorrect. Include supporting documentation (1099 showing different amount, proof of basis for securities sold, etc.).

4. **If you partially agree:** Indicate which changes you accept, which you dispute, and provide documentation for the disputed items.

5. **Meet the 60-day deadline.** If you need more time, call the number on the notice and request an extension before the deadline passes. Ignoring the notice results in automatic assessment.

---

## Using Form 843 to Claim a Refund of Penalties Already Paid

If you already paid a penalty and now want it refunded, file **Form 843** (Claim for Refund and Request for Abatement). State the penalty code, the tax year, the amount paid, and your abatement basis (FTA or Reasonable Cause).

Generally file within **2 years of paying the penalty** (3 years from the original return due date in some cases).

---

## When to Get Professional Help

Consider involving a CPA or tax attorney when:
- The penalty exceeds $5,000
- The notice involves potential fraud (civil or criminal) — these require different handling entirely
- You have multiple years of non-compliance
- The IRS has issued a Final Notice of Intent to Levy or Lien
- You received a notice from the IRS Exam (audit) division rather than the Collections division

Penalty abatement requests are not adversarial — the IRS processes tens of thousands of them. A well-prepared request citing the correct IRM section is far more effective than an emotional appeal.
```

- [ ] **Step 2: Run `hugo server` and verify**

```bash
hugo server --buildDrafts
```

Open `http://localhost:1313/resources/penalty-abatement-guide/` and verify article renders.
Check `http://localhost:1313/resources/general-tax-compliance/` — Due Dates and Penalty Abatement cards should both appear.

- [ ] **Step 3: Commit**

```bash
git add content/resources/penalty-abatement-guide.md
git commit -m "feat: add IRS Penalty Abatement Guide article"
```

---

## Task 9: IRS link audit — check and fix broken links

**Files:** All `content/resources/*.md`

- [ ] **Step 1: Extract and check all IRS.gov links**

Run this from the project root:

```bash
cd "C:/Users/jcorn/Desktop/Claude/JC CPA LLC/website"
grep -roh 'https\?://[^)>" ]*irs\.gov[^)>" ]*' content/resources/*.md | sed 's/^[^:]*://' | sort -u > /tmp/irs-links.txt
cat /tmp/irs-links.txt
```

Then check each URL's HTTP status:

```bash
while IFS= read -r url; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 15 "$url")
  echo "$STATUS  $url"
done < /tmp/irs-links.txt
```

- [ ] **Step 2: Fix any URLs returning 404 or 301 chains**

For each broken link found, locate the correct current IRS URL manually at [irs.gov](https://www.irs.gov) and update the markdown file. Common replacements:

- Old PDF URLs like `https://www.irs.gov/pub/irs-pdf/f5471.pdf` → current form page `https://www.irs.gov/forms-pubs/about-form-5471`
- Old publication URLs → use the "About" page format: `https://www.irs.gov/publications/p54`

Edit each affected file and replace the broken URL in the markdown body.

- [ ] **Step 3: Commit fixes (if any)**

```bash
git add content/resources/
git commit -m "fix: update broken IRS.gov links in resource articles"
```

If no broken links were found, skip this commit.

---

## Task 10: Final verification

- [ ] **Step 1: Full production build**

```bash
cd "C:/Users/jcorn/Desktop/Claude/JC CPA LLC/website"
hugo --minify 2>&1
```

Expected: `Total in X ms` with 0 errors. Note the page count — should be significantly higher than before (7 new hub pages + 3 new articles = ~10 additional pages).

- [ ] **Step 2: Spot-check hub pages in browser**

```bash
hugo server
```

Verify these URLs render correctly:
- `/resources/` — intro paragraph and 7 cluster pill links visible above search bar
- `/resources/international-tax/` — shows 5 spoke cards (FEIE, 5471, 5472, Pre-Immigration, Digital Nomad)
- `/resources/ecommerce-sellers/` — shows Form 5472 card + 2 coming-soon stub cards (dimmed)
- `/resources/latam-inbound/` — shows Form 5472 + Pre-Immigration cards + 3 coming-soon stubs

- [ ] **Step 3: Verify schema on one article**

Open `http://localhost:1313/resources/feie-vs-ftc/`. View page source (Ctrl+U) and search for:
- `FAQPage` — should be present with 3 questions from the `feie-vs-ftc.md` frontmatter
- `BreadcrumbList` — should show 4 levels (Home, Resources, International U.S. Tax Compliance, article title)
- `TODO` comment — should appear in the HTML source but not render visibly

- [ ] **Step 4: Validate schema with Google Rich Results Test**

Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results). Test the article URL (or paste source HTML). Verify FAQPage and BreadcrumbList pass validation with no errors.

- [ ] **Step 5: Final commit**

```bash
git add .
git status  # verify no unintended files
git commit -m "feat: complete SEO resource cluster architecture — 7 hubs, 3 articles, schema, IRS link audit"
```
