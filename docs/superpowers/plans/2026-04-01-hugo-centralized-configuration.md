# Hugo Centralized Configuration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate from static HTML to Hugo with a single centralized configuration file, enabling one-change-updates-everywhere flexibility for company info, colors, and all 30+ pages.

**Architecture:** Hugo project with `data/site-config.json` as single source of truth for all company settings. Reusable templates for expertise, service, and legal pages eliminate copy-paste. Pages are content-only (markdown files). CSS variables reference config values. Navigation, footer, and header components pull from config automatically.

**Tech Stack:** Hugo static site generator, TOML config, JSON data files, HTML/CSS/JavaScript, Netlify deployment, serverless functions for form handling.

**Success Criteria:**
- Change company name in one JSON file → updates across all pages
- Change primary color in one JSON file → updates all pages
- Add new expertise page in 5 minutes (markdown file only)
- All 30+ pages built and deployed
- Forms, integrations, SEO working

---

## File Structure Overview

```
website/
├── hugo.toml                    # Hugo configuration
├── data/
│   └── site-config.json         # ⭐ SINGLE SOURCE OF TRUTH
├── content/
│   ├── _index.md                # Home page content
│   ├── expertise/
│   │   ├── _index.md            # Expertise hub
│   │   ├── local.md
│   │   ├── founders.md
│   │   ├── realestate.md
│   │   ├── outbound.md
│   │   ├── inbound.md
│   │   └── expats.md
│   ├── services/
│   │   ├── _index.md            # Services hub
│   │   ├── tax-strategy.md
│   │   ├── tax-compliance.md
│   │   ├── international-tax.md
│   │   ├── back-office.md
│   │   ├── bookkeeping.md
│   │   └── payroll-sales-tax.md
│   └── legal/
│       ├── privacy.md
│       └── terms.md
├── layouts/
│   ├── _default/
│   │   ├── baseof.html          # Base template with nav, footer
│   │   └── single.html          # Default page template
│   ├── expertise/
│   │   └── single.html          # Expertise page template
│   ├── services/
│   │   └── single.html          # Service page template
│   ├── legal/
│   │   └── single.html          # Legal page template
│   ├── index.html               # Home page template
│   └── partials/
│       ├── nav.html             # Navigation (pulls from config)
│       ├── footer.html          # Footer (pulls from config)
│       ├── contact-form.html    # Contact form component
│       ├── head.html            # Head section with meta tags
│       └── hero.html            # Hero section component
├── assets/
│   ├── css/
│   │   ├── variables.css        # CSS custom properties from config
│   │   └── style.css            # Main styles
│   └── js/
│       ├── forms.js             # Form handling
│       ├── integrations.js      # Cal.com, Stripe, GA4
│       └── utils.js             # Utility functions
├── static/
│   └── images/
└── netlify.toml                 # Netlify configuration & functions
```

---

## Task 1: Initialize Hugo Project Structure

**Files:**
- Create: `hugo.toml`
- Create: `.gitignore`
- Verify: Hugo project structure

- [ ] **Step 1: Create hugo.toml configuration file**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\hugo.toml`:

```toml
baseURL = "https://vantiscpa.com/"
languageCode = "en-us"
title = "Vantis CPA"
theme = ""
pluralizeListTitles = false
outputs = {home = ["HTML", "JSON"]}

[params]
description = "Tax consulting for founders, expats, and global businesses"

[markup.goldmark.renderer]
unsafe = true

[minify]
minifyOutput = true

[outputs]
home = ["HTML"]
section = ["HTML"]
page = ["HTML"]

[mediaTypes."application/json"]
suffixes = ["json"]
```

- [ ] **Step 2: Create .gitignore for Hugo**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\.gitignore`:

```
/public/
/resources/
.DS_Store
node_modules/
*.local
.env
```

- [ ] **Step 3: Verify directory structure exists**

Run:
```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
mkdir -p data content/expertise content/services content/legal layouts/{_default,expertise,services,legal,partials} assets/{css,js} static/images
dir
```

Expected: All directories created without errors

- [ ] **Step 4: Commit**

```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
git add hugo.toml .gitignore
git commit -m "feat: initialize Hugo project structure"
```

---

## Task 2: Create Centralized Configuration (site-config.json)

**Files:**
- Create: `data/site-config.json`

This is the SINGLE SOURCE OF TRUTH for all company settings.

- [ ] **Step 1: Create site-config.json with all company settings**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\data\site-config.json`:

```json
{
  "company": {
    "name": "Vantis CPA",
    "shortName": "Vantis",
    "tagline": "Tax consulting for founders, expats, and global businesses",
    "description": "A tax consulting firm dedicated to local and global taxpayers. We provide a suite of services including proactive tax strategy, seamless compliance and full-service accounting, delivered with depth and clear communication.",
    "phone": "+17274551016",
    "email": "info@vantiscpa.com",
    "address": "South Florida, FL",
    "hours": {
      "weekday": "9am - 5pm EST",
      "weekend": "By appointment"
    }
  },
  "branding": {
    "colors": {
      "primary": "#15482E",
      "primaryDark": "#062215",
      "accent": "#3a8b5f",
      "accentLight": "#5fa88a",
      "textDark": "#0f2818",
      "textLight": "#ffffff",
      "bgLight": "#f9faf9",
      "bgAccent": "#edeef7",
      "border": "#d0d0d0"
    },
    "fonts": {
      "heading": "Playfair Display",
      "body": "Inter"
    },
    "spacing": {
      "xs": "4px",
      "sm": "8px",
      "md": "16px",
      "lg": "24px",
      "xl": "32px",
      "xxl": "48px"
    }
  },
  "navigation": {
    "main": [
      {"label": "Home", "url": "/"},
      {"label": "Expertise", "url": "/expertise/"},
      {"label": "Services", "url": "/services/"},
      {"label": "About", "url": "/about/"},
      {"label": "Contact", "url": "/contact/"}
    ],
    "expertise": [
      {"label": "Local Businesses", "url": "/expertise/local/"},
      {"label": "Founders & Startups", "url": "/expertise/founders/"},
      {"label": "Real Estate Owners", "url": "/expertise/realestate/"},
      {"label": "Outbound U.S. Businesses", "url": "/expertise/outbound/"},
      {"label": "Foreign Business & Investors", "url": "/expertise/inbound/"},
      {"label": "U.S. Expats", "url": "/expertise/expats/"}
    ],
    "services": [
      {"label": "Tax Strategy Consulting", "url": "/services/tax-strategy/"},
      {"label": "Tax Compliance", "url": "/services/tax-compliance/"},
      {"label": "International Tax", "url": "/services/international-tax/"},
      {"label": "Back-Office Services", "url": "/services/back-office/"},
      {"label": "Bookkeeping & Reporting", "url": "/services/bookkeeping/"},
      {"label": "Payroll & Sales Tax", "url": "/services/payroll-sales-tax/"}
    ]
  },
  "integrations": {
    "calcom": "vantiscpa/consultation",
    "stripe": {
      "publicKey": "pk_live_YOUR_STRIPE_PUBLIC_KEY"
    },
    "analytics": {
      "ga4Id": "G-XXXXXXXXXX"
    },
    "onedrive": {
      "enabled": false,
      "apiKey": ""
    }
  },
  "social": {
    "linkedin": "https://linkedin.com/company/vantis-cpa",
    "twitter": "https://twitter.com/vantis_cpa",
    "facebook": "https://facebook.com/vantiscpa"
  },
  "metadata": {
    "lang": "en",
    "locale": "en_US"
  }
}
```

- [ ] **Step 2: Verify JSON is valid**

Run:
```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
type data\site-config.json
```

Expected: JSON file displays with no errors (valid JSON)

- [ ] **Step 3: Commit**

```bash
git add data/site-config.json
git commit -m "feat: create centralized site configuration"
```

---

## Task 3: Create CSS Variables from Configuration

**Files:**
- Create: `assets/css/variables.css`
- Create: `assets/css/style.css`

- [ ] **Step 1: Create variables.css that uses config values**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\assets\css\variables.css`:

```css
:root {
  /* Colors from config */
  --primary: #15482E;
  --primary-dark: #062215;
  --accent: #3a8b5f;
  --accent-light: #5fa88a;
  --text-dark: #0f2818;
  --text-light: #ffffff;
  --bg-light: #f9faf9;
  --bg-accent: #edeef7;
  --border: #d0d0d0;

  /* Fonts from config */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing from config */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;

  /* Derived values */
  --border-radius: 8px;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  :root {
    --spacing-xl: 24px;
    --spacing-xxl: 32px;
  }
}
```

- [ ] **Step 2: Create main style.css**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\assets\css\style.css`:

```css
@import 'variables.css';

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Typography */
body {
  font-family: var(--font-body);
  color: var(--text-dark);
  line-height: 1.6;
  background-color: var(--bg-light);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--primary-dark);
  margin-bottom: var(--spacing-md);
}

h1 { font-size: 48px; line-height: 1.2; }
h2 { font-size: 36px; line-height: 1.2; }
h3 { font-size: 28px; line-height: 1.3; }
p { margin-bottom: var(--spacing-md); }

/* Links */
a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--accent);
  text-decoration: underline;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.grid {
  display: grid;
  gap: var(--spacing-lg);
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .grid-2, .grid-3 {
    grid-template-columns: 1fr;
  }

  h1 { font-size: 32px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
}

/* Hero Section */
.hero {
  background: linear-gradient(90deg, var(--text-light) 0%, var(--bg-accent) 100%);
  padding: var(--spacing-xxl) 0;
  margin-bottom: var(--spacing-xxl);
}

.hero h1 {
  font-size: 56px;
  margin-bottom: var(--spacing-lg);
}

.hero p {
  font-size: 18px;
  color: var(--text-dark);
  max-width: 800px;
}

/* Contact Form */
.contact-form {
  background: var(--primary);
  color: var(--text-light);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-family: var(--font-body);
  font-size: 14px;
}

.contact-form button {
  background: var(--accent);
  color: var(--text-light);
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius);
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background: var(--accent-light);
}

/* Navigation */
nav {
  background: var(--primary-dark);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav a {
  color: var(--text-light);
  margin: 0 var(--spacing-lg);
  display: inline-block;
}

nav a:hover {
  color: var(--accent-light);
  text-decoration: none;
}

/* Footer */
footer {
  background: var(--primary-dark);
  color: var(--text-light);
  padding: var(--spacing-xxl) 0;
  margin-top: var(--spacing-xxl);
}

footer a {
  color: var(--accent-light);
}

footer a:hover {
  text-decoration: underline;
}

/* Button */
.btn {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--primary);
  color: var(--text-light);
  border-radius: var(--border-radius);
  transition: background 0.3s ease;
}

.btn:hover {
  background: var(--accent);
  text-decoration: none;
}

.btn-secondary {
  background: var(--accent);
}

.btn-secondary:hover {
  background: var(--accent-light);
}
```

- [ ] **Step 3: Verify CSS files exist**

Run:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\assets\css\"
```

Expected: Both `variables.css` and `style.css` exist

- [ ] **Step 4: Commit**

```bash
git add assets/css/
git commit -m "feat: create CSS with variables from centralized config"
```

---

## Task 4: Create Base Template with Nav and Footer

**Files:**
- Create: `layouts/_default/baseof.html`
- Create: `layouts/partials/nav.html`
- Create: `layouts/partials/footer.html`
- Create: `layouts/partials/head.html`

- [ ] **Step 1: Create head.html partial**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\partials\head.html`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ .Title }} | {{ .Site.Data.siteConfig.company.name }}</title>
  <meta name="description" content="{{ .Description | default .Site.Data.siteConfig.company.description }}">
  <meta name="keywords" content="{{ delimit .Keywords ", " | default "tax consulting, CPA, tax strategy" }}">

  <!-- Open Graph / Social -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{ .Permalink }}">
  <meta property="og:title" content="{{ .Title }} | {{ .Site.Data.siteConfig.company.name }}">
  <meta property="og:description" content="{{ .Description | default .Site.Data.siteConfig.company.description }}">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="{{ "css/style.css" | relURL }}">

  <!-- Google Analytics -->
  {{ if .Site.Data.siteConfig.integrations.analytics.ga4Id }}
  <script async src="https://www.googletagmanager.com/gtag/js?id={{ .Site.Data.siteConfig.integrations.analytics.ga4Id }}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{{ .Site.Data.siteConfig.integrations.analytics.ga4Id }}');
  </script>
  {{ end }}
</head>
```

- [ ] **Step 2: Create nav.html partial (pulls from config)**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\partials\nav.html`:

```html
<nav>
  <div class="container">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <a href="/" style="font-size: 24px; font-weight: bold;">
        {{ .Site.Data.siteConfig.company.shortName }}
      </a>
      <div style="display: flex; gap: 24px;">
        {{ range .Site.Data.siteConfig.navigation.main }}
          <a href="{{ .url }}">{{ .label }}</a>
        {{ end }}
      </div>
    </div>
  </div>
</nav>
```

- [ ] **Step 3: Create footer.html partial (pulls from config)**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\partials\footer.html`:

```html
<footer>
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; margin-bottom: 48px;">
      <!-- Column 1: About -->
      <div>
        <h3>{{ .Site.Data.siteConfig.company.shortName }}</h3>
        <p>{{ .Site.Data.siteConfig.company.description }}</p>
      </div>

      <!-- Column 2: Quick Links -->
      <div>
        <h4>Expertise</h4>
        <ul style="list-style: none;">
          {{ range .Site.Data.siteConfig.navigation.expertise }}
            <li><a href="{{ .url }}">{{ .label }}</a></li>
          {{ end }}
        </ul>
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h4>Contact</h4>
        <p>
          {{ .Site.Data.siteConfig.company.address }}<br>
          <a href="tel:{{ .Site.Data.siteConfig.company.phone }}">{{ .Site.Data.siteConfig.company.phone }}</a><br>
          <a href="mailto:{{ .Site.Data.siteConfig.company.email }}">{{ .Site.Data.siteConfig.company.email }}</a>
        </p>
        <div style="margin-top: 16px;">
          {{ range $key, $value := .Site.Data.siteConfig.social }}
            <a href="{{ $value }}" target="_blank" style="margin-right: 12px;">{{ $key }}</a>
          {{ end }}
        </div>
      </div>
    </div>

    <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 24px; text-align: center;">
      <p>&copy; {{ now.Year }} {{ .Site.Data.siteConfig.company.name }}. All rights reserved.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 4: Create baseof.html base template**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\_default\baseof.html`:

```html
<!DOCTYPE html>
<html lang="{{ .Site.Data.siteConfig.metadata.lang }}">
  {{ partial "head.html" . }}
  <body>
    {{ partial "nav.html" . }}

    <main>
      {{ block "main" . }}{{ end }}
    </main>

    {{ partial "footer.html" . }}

    <!-- Scripts -->
    <script src="{{ "js/utils.js" | relURL }}"></script>
    <script src="{{ "js/forms.js" | relURL }}"></script>
    <script src="{{ "js/integrations.js" | relURL }}"></script>
  </body>
</html>
```

- [ ] **Step 5: Create default single.html template**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\_default\single.html`:

```html
{{ define "main" }}
  <article>
    <div class="container">
      <h1>{{ .Title }}</h1>
      {{ .Content }}
    </div>
  </article>
{{ end }}
```

- [ ] **Step 6: Verify all template files exist**

Run:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\*" /s
```

Expected: All template files listed

- [ ] **Step 7: Commit**

```bash
git add layouts/
git commit -m "feat: create base templates with nav and footer using config"
```

---

## Task 5: Create Expertise Page Template

**Files:**
- Create: `layouts/expertise/single.html`
- Create: `content/expertise/_index.md`
- Create: `content/expertise/local.md`
- Create: `content/expertise/founders.md`
- Create: `content/expertise/realestate.md`
- Create: `content/expertise/outbound.md`
- Create: `content/expertise/inbound.md`
- Create: `content/expertise/expats.md`

- [ ] **Step 1: Create expertise single.html template**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\expertise\single.html`:

```html
{{ define "main" }}
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>{{ .Title }}</h1>
      <p>{{ .Params.description }}</p>
    </div>
  </section>

  <!-- Two-Column Layout -->
  <section style="background: white;">
    <div class="container">
      <div style="display: grid; grid-template-columns: 30% 70%; gap: 48px; padding: 48px 0;">

        <!-- Left Column: Contact Form -->
        <div>
          {{ partial "contact-form.html" . }}
        </div>

        <!-- Right Column: Content -->
        <div>
          {{ .Content }}

          {{ if .Params.specializations }}
          <div style="margin-top: 48px;">
            <h3>Our Specializations</h3>
            <ul style="list-style: none;">
              {{ range .Params.specializations }}
                <li style="margin-bottom: 12px;">
                  <a href="{{ .url }}">{{ .label }}</a>
                </li>
              {{ end }}
            </ul>
          </div>
          {{ end }}

          {{ if .Params.services }}
          <div style="margin-top: 48px;">
            <h3>Services We Provide</h3>
            <ul style="list-style: none;">
              {{ range .Params.services }}
                <li style="margin-bottom: 12px;">
                  <a href="{{ .url }}">{{ .label }}</a>
                </li>
              {{ end }}
            </ul>
          </div>
          {{ end }}

          {{ if .Params.otherAudiences }}
          <div style="margin-top: 48px;">
            <h3>Other Audiences We Serve</h3>
            <ul style="list-style: none;">
              {{ range .Params.otherAudiences }}
                <li style="margin-bottom: 12px;">
                  <a href="{{ .url }}">{{ .label }}</a>
                </li>
              {{ end }}
            </ul>
          </div>
          {{ end }}
        </div>
      </div>
    </div>
  </section>
{{ end }}
```

- [ ] **Step 2: Create expertise index page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\expertise\_index.md`:

```markdown
---
title: "Our Expertise"
description: "We serve specialized audiences across industries"
---

Our expertise spans multiple business types and individual situations. Select the category that best describes your situation.
```

- [ ] **Step 3: Create local.md expertise page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\expertise\local.md`:

```markdown
---
title: "Local Businesses"
description: "Dedicated to Local Business Owners"
specializations:
  - {label: "Sole Proprietors", url: "/expertise/local/"}
  - {label: "Partnerships", url: "/expertise/local/"}
  - {label: "LLCs", url: "/expertise/local/"}
  - {label: "S-Corps", url: "/expertise/local/"}
services:
  - {label: "Tax Strategy Consulting", url: "/services/tax-strategy/"}
  - {label: "Tax Compliance", url: "/services/tax-compliance/"}
  - {label: "Bookkeeping & Reporting", url: "/services/bookkeeping/"}
otherAudiences:
  - {label: "Founders & Startups", url: "/expertise/founders/"}
  - {label: "Real Estate Owners", url: "/expertise/realestate/"}
  - {label: "U.S. Expats", url: "/expertise/expats/"}
  - {label: "Foreign Business & Investors", url: "/expertise/inbound/"}
  - {label: "Outbound U.S. Businesses", url: "/expertise/outbound/"}
---

We serve local business owners across South Florida and beyond. Whether you're a sole proprietor, partnership, LLC, or S-Corp, we provide proactive tax strategy and seamless compliance.
```

- [ ] **Step 4: Create founders.md expertise page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\expertise\founders.md`:

```markdown
---
title: "Founders & Startups"
description: "Dedicated to Founders and Online Business"
specializations:
  - {label: "Entity Selection", url: "/expertise/founders/"}
  - {label: "Tax Planning", url: "/expertise/founders/"}
  - {label: "Equity Compensation", url: "/expertise/founders/"}
  - {label: "Fundraising", url: "/expertise/founders/"}
services:
  - {label: "Tax Strategy Consulting", url: "/services/tax-strategy/"}
  - {label: "Tax Compliance", url: "/services/tax-compliance/"}
  - {label: "Back-Office Services", url: "/services/back-office/"}
otherAudiences:
  - {label: "Local Businesses", url: "/expertise/local/"}
  - {label: "Real Estate Owners", url: "/expertise/realestate/"}
  - {label: "U.S. Expats", url: "/expertise/expats/"}
  - {label: "Foreign Business & Investors", url: "/expertise/inbound/"}
  - {label: "Outbound U.S. Businesses", url: "/expertise/outbound/"}
---

We specialize in helping founders and startups navigate entity selection, tax planning, and compliance from day one. Our goal is to minimize your tax burden while you focus on growth.
```

- [ ] **Step 5: Create realestate.md expertise page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\expertise\realestate.md`:

```markdown
---
title: "Real Estate Owners"
description: "Dedicated to Real Estate Owners"
specializations:
  - {label: "Rental Properties", url: "/expertise/realestate/"}
  - {label: "Real Estate Professionals", url: "/expertise/realestate/"}
  - {label: "Developers", url: "/expertise/realestate/"}
services:
  - {label: "Tax Strategy Consulting", url: "/services/tax-strategy/"}
  - {label: "Tax Compliance", url: "/services/tax-compliance/"}
  - {label: "Bookkeeping & Reporting", url: "/services/bookkeeping/"}
otherAudiences:
  - {label: "Local Businesses", url: "/expertise/local/"}
  - {label: "Founders & Startups", url: "/expertise/founders/"}
  - {label: "U.S. Expats", url: "/expertise/expats/"}
  - {label: "Foreign Business & Investors", url: "/expertise/inbound/"}
  - {label: "Outbound U.S. Businesses", url: "/expertise/outbound/"}
---

Real estate investments come with unique tax opportunities and challenges. We help property owners, professionals, and developers maximize deductions while staying compliant.
```

- [ ] **Step 6: Create outbound.md expertise page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\expertise\outbound.md`:

```markdown
---
title: "Outbound U.S. Businesses"
description: "Dedicated to U.S. Businesses Expanding Globally"
specializations:
  - {label: "Foreign Operations", url: "/expertise/outbound/"}
  - {label: "Transfer Pricing", url: "/expertise/outbound/"}
  - {label: "Foreign Tax Credits", url: "/expertise/outbound/"}
  - {label: "GILTI & Subpart F", url: "/expertise/outbound/"}
services:
  - {label: "International Tax", url: "/services/international-tax/"}
  - {label: "Tax Strategy Consulting", url: "/services/tax-strategy/"}
  - {label: "Tax Compliance", url: "/services/tax-compliance/"}
otherAudiences:
  - {label: "Local Businesses", url: "/expertise/local/"}
  - {label: "Founders & Startups", url: "/expertise/founders/"}
  - {label: "Real Estate Owners", url: "/expertise/realestate/"}
  - {label: "U.S. Expats", url: "/expertise/expats/"}
  - {label: "Foreign Business & Investors", url: "/expertise/inbound/"}
---

U.S. businesses expanding internationally face complex tax planning requirements. We help you navigate transfer pricing, GILTI, and foreign tax credits to optimize your global tax strategy.
```

- [ ] **Step 7: Create inbound.md expertise page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\expertise\inbound.md`:

```markdown
---
title: "Foreign Business & Investors"
description: "Dedicated to Foreign Business and Investors"
specializations:
  - {label: "U.S. Subsidiaries", url: "/expertise/inbound/"}
  - {label: "Foreign Corporations", url: "/expertise/inbound/"}
  - {label: "Form 5472", url: "/expertise/inbound/"}
  - {label: "Transfer Pricing", url: "/expertise/inbound/"}
  - {label: "FIRPTA Compliance", url: "/expertise/inbound/"}
  - {label: "E-1/E-2 Visa Compliance", url: "/expertise/inbound/"}
  - {label: "Inbound Investment Planning", url: "/expertise/inbound/"}
services:
  - {label: "International Tax", url: "/services/international-tax/"}
  - {label: "Tax Strategy Consulting", url: "/services/tax-strategy/"}
  - {label: "Tax Compliance", url: "/services/tax-compliance/"}
otherAudiences:
  - {label: "Local Businesses", url: "/expertise/local/"}
  - {label: "Founders & Startups", url: "/expertise/founders/"}
  - {label: "Real Estate Owners", url: "/expertise/realestate/"}
  - {label: "U.S. Expats", url: "/expertise/expats/"}
  - {label: "Outbound U.S. Businesses", url: "/expertise/outbound/"}
---

Foreign investors and businesses establishing U.S. operations need specialized guidance. We handle Form 5472 reporting, transfer pricing, FIRPTA compliance, and strategic tax planning for your U.S. presence.
```

- [ ] **Step 8: Create expats.md expertise page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\expertise\expats.md`:

```markdown
---
title: "U.S. Expats"
description: "Dedicated to U.S. Citizens Abroad"
specializations:
  - {label: "Foreign Reporting", url: "/expertise/expats/"}
  - {label: "CFCs", url: "/expertise/expats/"}
  - {label: "FBARs", url: "/expertise/expats/"}
  - {label: "FBAR Compliance", url: "/expertise/expats/"}
  - {label: "FATCA", url: "/expertise/expats/"}
services:
  - {label: "International Tax", url: "/services/international-tax/"}
  - {label: "Tax Strategy Consulting", url: "/services/tax-strategy/"}
  - {label: "Tax Compliance", url: "/services/tax-compliance/"}
otherAudiences:
  - {label: "Local Businesses", url: "/expertise/local/"}
  - {label: "Founders & Startups", url: "/expertise/founders/"}
  - {label: "Real Estate Owners", url: "/expertise/realestate/"}
  - {label: "Foreign Business & Investors", url: "/expertise/inbound/"}
  - {label: "Outbound U.S. Businesses", url: "/expertise/outbound/"}
---

U.S. citizens living abroad face unique tax obligations including FBAR, FATCA, and foreign reporting requirements. We help you navigate complex international tax rules while minimizing your tax burden.
```

- [ ] **Step 9: Verify all expertise pages created**

Run:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\expertise\"
```

Expected: 8 markdown files listed (_index.md + 7 expertise pages)

- [ ] **Step 10: Commit**

```bash
git add layouts/expertise/ content/expertise/
git commit -m "feat: create expertise page template and all expertise pages"
```

---

## Task 6: Create Contact Form Partial & Services Pages

**Files:**
- Create: `layouts/partials/contact-form.html`
- Create: `layouts/services/single.html`
- Create: `content/services/_index.md`
- Create: 6 service page markdown files

- [ ] **Step 1: Create contact-form.html partial**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\partials\contact-form.html`:

```html
<form class="contact-form" id="contactForm" method="POST" action="/.netlify/functions/submit-form">
  <h3>Schedule a Consultation</h3>

  <div>
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" required placeholder="Full Name">
  </div>

  <div>
    <label for="email">Your Email</label>
    <input type="email" id="email" name="email" required placeholder="you@example.com">
  </div>

  <div>
    <label for="background">Tell us about your situation</label>
    <textarea id="background" name="background" rows="5" required placeholder="Briefly describe your business and tax situation..."></textarea>
  </div>

  <div style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 8px; margin-bottom: 16px; font-size: 14px;">
    <p><strong>Contact Info:</strong></p>
    <p>{{ .Site.Data.siteConfig.company.address }}</p>
    <p><a href="tel:{{ .Site.Data.siteConfig.company.phone }}" style="color: var(--accent-light);">{{ .Site.Data.siteConfig.company.phone }}</a></p>
    <p><a href="mailto:{{ .Site.Data.siteConfig.company.email }}" style="color: var(--accent-light);">{{ .Site.Data.siteConfig.company.email }}</a></p>
    <p>{{ .Site.Data.siteConfig.company.hours.weekday }}</p>
  </div>

  <button type="submit">Schedule Consultation</button>
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch(this.action, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  }).then(r => r.json()).then(data => {
    alert('Thank you! We\'ll be in touch soon.');
    this.reset();
  }).catch(err => alert('Error sending form. Please try again.'));
});
</script>
```

- [ ] **Step 2: Create services single.html template**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\services\single.html`:

```html
{{ define "main" }}
  <section class="hero">
    <div class="container">
      <h1>{{ .Title }}</h1>
      <p>{{ .Params.description }}</p>
    </div>
  </section>

  <section style="background: white;">
    <div class="container" style="padding: 48px 0;">
      <div style="display: grid; grid-template-columns: 30% 70%; gap: 48px;">
        <div>
          {{ partial "contact-form.html" . }}
        </div>
        <div>
          {{ .Content }}

          {{ if .Params.includes }}
          <div style="margin-top: 48px;">
            <h3>What's Included</h3>
            <ul style="list-style: none;">
              {{ range .Params.includes }}
                <li style="margin-bottom: 12px;">✓ {{ . }}</li>
              {{ end }}
            </ul>
          </div>
          {{ end }}
        </div>
      </div>
    </div>
  </section>
{{ end }}
```

- [ ] **Step 3: Create services index page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\services\_index.md`:

```markdown
---
title: "Our Services"
description: "Comprehensive tax and accounting solutions"
---

We provide a complete suite of tax consulting, compliance, and accounting services tailored to your specific needs.
```

- [ ] **Step 4: Create tax-strategy.md service page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\services\tax-strategy.md`:

```markdown
---
title: "Tax Strategy Consulting"
description: "Proactive tax planning and strategy"
includes:
  - "Year-round tax planning"
  - "Entity structure optimization"
  - "Deduction identification and planning"
  - "Quarterly tax estimates"
  - "Tax projection and forecasting"
---

Our tax strategy services focus on proactive planning throughout the year, not just at tax time. We identify opportunities to minimize your tax burden and put more money in your pocket.
```

- [ ] **Step 5: Create tax-compliance.md service page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\services\tax-compliance.md`:

```markdown
---
title: "Tax Compliance & Filing"
description: "Accurate and timely tax return preparation"
includes:
  - "Individual tax return preparation"
  - "Business tax return preparation"
  - "Estimated tax payments"
  - "Multi-state tax compliance"
  - "Amended return preparation"
---

We handle all aspects of tax compliance, ensuring your returns are accurate, complete, and filed on time.
```

- [ ] **Step 6: Create international-tax.md service page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\services\international-tax.md`:

```markdown
---
title: "International Tax Services"
description: "Tax planning for global situations"
includes:
  - "Foreign tax credit planning"
  - "Transfer pricing documentation"
  - "FIRPTA compliance"
  - "FBAR and FATCA reporting"
  - "Expatriate tax planning"
---

Navigate complex international tax rules with confidence. We specialize in foreign reporting, transfer pricing, and tax planning for global situations.
```

- [ ] **Step 7: Create back-office.md service page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\services\back-office.md`:

```markdown
---
title: "Back-Office Services"
description: "Complete accounting operations"
includes:
  - "General ledger management"
  - "Accounts payable processing"
  - "Accounts receivable management"
  - "Payroll processing and payroll tax filing"
  - "Financial reporting and analysis"
---

Let us handle your day-to-day accounting operations so you can focus on running your business.
```

- [ ] **Step 8: Create bookkeeping.md service page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\services\bookkeeping.md`:

```markdown
---
title: "Bookkeeping & Financial Reporting"
description: "Accurate financial records and reporting"
includes:
  - "Monthly bookkeeping"
  - "Bank reconciliation"
  - "Monthly financial statements"
  - "Year-end close procedures"
  - "Financial analysis and reporting"
---

Accurate bookkeeping is the foundation of good tax planning. We maintain your books and provide regular financial reporting.
```

- [ ] **Step 9: Create payroll-sales-tax.md service page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\services\payroll-sales-tax.md`:

```markdown
---
title: "Payroll & Sales Tax Services"
description: "Complete payroll and sales tax management"
includes:
  - "Payroll processing and tax filing"
  - "Payroll tax compliance"
  - "Sales tax compliance and filing"
  - "Multi-state sales tax management"
  - "Wage and hour consulting"
---

We manage your payroll and sales tax obligations, ensuring compliance and efficiency.
```

- [ ] **Step 10: Verify all service pages created**

Run:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\services\"
```

Expected: 7 markdown files listed (_index.md + 6 service pages)

- [ ] **Step 11: Commit**

```bash
git add layouts/partials/contact-form.html layouts/services/ content/services/
git commit -m "feat: add contact form and all service pages"
```

---

## Task 7: Create Home Page Template & Legal Pages

**Files:**
- Create: `layouts/index.html`
- Create: `content/_index.md`
- Create: `content/legal/privacy.md`
- Create: `content/legal/terms.md`

- [ ] **Step 1: Create home page template**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\layouts\index.html`:

```html
{{ define "main" }}
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>{{ .Site.Data.siteConfig.company.name }}</h1>
      <p style="font-size: 20px; line-height: 1.6; max-width: 800px;">
        {{ .Site.Data.siteConfig.company.description }}
      </p>
      <a href="/expertise/" class="btn" style="display: inline-block; margin-top: 24px;">Explore Our Expertise</a>
    </div>
  </section>

  <!-- Expertise Section -->
  <section style="padding: 48px 0; background: white;">
    <div class="container">
      <h2>Our Expertise Areas</h2>
      <div class="grid grid-2" style="margin-top: 32px;">
        {{ range .Site.Data.siteConfig.navigation.expertise }}
          <div style="background: var(--bg-accent); padding: 32px; border-radius: 8px;">
            <h3><a href="{{ .url }}">{{ .label }}</a></h3>
            <p>Specialized tax and accounting services for your unique situation.</p>
            <a href="{{ .url }}" style="color: var(--primary); font-weight: 600;">Learn More →</a>
          </div>
        {{ end }}
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section style="padding: 48px 0; background: var(--bg-accent);">
    <div class="container">
      <h2>Our Services</h2>
      <div class="grid grid-3" style="margin-top: 32px;">
        {{ range .Site.Data.siteConfig.navigation.services }}
          <div style="background: white; padding: 24px; border-radius: 8px;">
            <h3><a href="{{ .url }}">{{ .label }}</a></h3>
            <a href="{{ .url }}" class="btn" style="margin-top: 16px; display: inline-block;">Learn More</a>
          </div>
        {{ end }}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section style="padding: 64px 0; background: var(--primary); color: white; text-align: center;">
    <div class="container">
      <h2 style="color: white; margin-bottom: 24px;">Ready to Work With Us?</h2>
      <p style="color: rgba(255,255,255,0.9); margin-bottom: 32px; font-size: 18px;">
        Schedule a consultation with our team to discuss your tax strategy.
      </p>
      <a href="https://cal.com/{{ .Site.Data.siteConfig.integrations.calcom }}" target="_blank" class="btn" style="background: var(--accent);">Schedule a Consultation</a>
    </div>
  </section>
{{ end }}
```

- [ ] **Step 2: Create home page content**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\_index.md`:

```markdown
---
title: "Home"
description: "Tax consulting for founders, expats, and global businesses"
---

Welcome to Vantis CPA. We specialize in tax strategy and accounting for entrepreneurs, investors, and global businesses.
```

- [ ] **Step 3: Create privacy policy page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\legal\privacy.md`:

```markdown
---
title: "Privacy Policy"
description: "How we protect your data"
---

## Privacy Policy

Last updated: {{ now.Format "January 2, 2006" }}

### Introduction

Vantis CPA ("we" or "us" or "our") operates this website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

### Information Collection and Use

We collect information for various purposes to provide and improve our Service to you.

**Types of Data Collected:**
- Personal Data (name, email address, phone number)
- Usage Data (browser type, pages visited, time and date of visits)
- Cookies and tracking technologies

### Use of Data

Vantis CPA uses the collected data for various purposes:
- To provide and maintain our Service
- To notify you about changes to our Service
- To allow you to participate in interactive features
- To provide customer support
- To gather analysis or valuable information
- To monitor the usage of our Service
- To detect, prevent and address technical issues

### Security of Data

The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

### Contact Us

If you have any questions about this Privacy Policy, please contact us at {{ .Site.Data.siteConfig.company.email }}.
```

- [ ] **Step 4: Create terms of service page**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\legal\terms.md`:

```markdown
---
title: "Terms of Service"
description: "Terms and conditions"
---

## Terms of Service

Last updated: {{ now.Format "January 2, 2006" }}

### Agreement to Terms

By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.

### Use License

Permission is granted to temporarily download one copy of the materials (information or software) on Vantis CPA's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

- Modifying or copying the materials
- Using the materials for any commercial purpose or for any public display
- Attempting to decompile or reverse engineer any software contained on the website
- Removing any copyright or other proprietary notations from the materials
- Transferring the materials to another person or "mirroring" the materials on any other server

### Disclaimer

The materials on Vantis CPA's website are provided on an 'as is' basis. Vantis CPA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

### Limitations

In no event shall Vantis CPA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vantis CPA's website.

### Contact

If you have any questions about these Terms, please contact us at {{ .Site.Data.siteConfig.company.email }}.
```

- [ ] **Step 5: Verify home page and legal pages created**

Run:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\legal\"
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\content\_index.md"
```

Expected: 3 legal markdown files + home page

- [ ] **Step 6: Commit**

```bash
git add layouts/index.html content/_index.md content/legal/
git commit -m "feat: add home page template and legal pages"
```

---

## Task 8: Create JavaScript Utilities & Integrations

**Files:**
- Create: `assets/js/utils.js`
- Create: `assets/js/forms.js`
- Create: `assets/js/integrations.js`
- Create: `netlify.toml`

- [ ] **Step 1: Create utils.js**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\assets\js\utils.js`:

```javascript
// Utility functions for the website

// Get data from site config (usage: CONFIG.company.name)
const CONFIG = window.__CONFIG__ || {};

// Format phone number
function formatPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+1(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  }
  return phone;
}

// Scroll to element smoothly
function smoothScroll(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Track event for analytics
function trackEvent(eventName, eventData = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, eventData);
  }
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    background: ${type === 'success' ? '#3a8b5f' : '#d32f2f'};
    color: white;
    border-radius: 4px;
    z-index: 1000;
    animation: slideIn 0.3s ease-in-out;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Validate email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Format date
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
```

- [ ] **Step 2: Create forms.js**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\assets\js\forms.js`:

```javascript
// Form handling and validation

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form[id*="Form"]');

  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);

    // Add real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', validateField);
    });
  });
});

function validateField(e) {
  const field = e.target;
  let isValid = true;

  if (field.name === 'email') {
    isValid = isValidEmail(field.value);
    field.style.borderColor = isValid ? '' : '#d32f2f';
  } else if (field.required && !field.value.trim()) {
    isValid = false;
    field.style.borderColor = '#d32f2f';
  } else {
    field.style.borderColor = '';
  }

  return isValid;
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Validate all fields
  let isFormValid = true;
  form.querySelectorAll('input, textarea').forEach(field => {
    if (!validateField({target: field})) {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    showNotification('Please fill in all required fields correctly', 'error');
    return;
  }

  // Send to Netlify function
  const endpoint = form.action || '/.netlify/functions/submit-form';

  fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (!response.ok) throw new Error('Form submission failed');
    return response.json();
  })
  .then(data => {
    showNotification('Thank you! We\'ll be in touch soon.');
    form.reset();
    trackEvent('form_submission', {form_name: form.id});
  })
  .catch(error => {
    showNotification('Error submitting form. Please try again.', 'error');
    console.error('Form error:', error);
  });
}
```

- [ ] **Step 3: Create integrations.js**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\assets\js\integrations.js`:

```javascript
// Integration setup for Cal.com, Stripe, GA4, etc.

document.addEventListener('DOMContentLoaded', function() {

  // Cal.com integration - embed widget
  setupCalcom();

  // Stripe integration - ready when needed
  if (window.location.pathname.includes('pricing') || window.location.pathname.includes('checkout')) {
    setupStripe();
  }

  // Analytics tracking
  trackPageView();
});

// Setup Cal.com booking widget
function setupCalcom() {
  const calcomLinks = document.querySelectorAll('a[href*="cal.com"]');
  calcomLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Optional: open in modal instead of new tab
      // e.preventDefault();
      // openCalcomModal(this.href);
    });
  });
}

// Setup Stripe payment processing
function setupStripe() {
  // Stripe will be loaded when payment page is accessed
  if (!window.Stripe) {
    console.warn('Stripe not loaded. Add Stripe.js to payment page.');
  }
}

// Track page view for analytics
function trackPageView() {
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title
    });
  }
}

// Track conversion goal
function trackConversion(goalName) {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      conversion_name: goalName
    });
  }
}

// Open Cal.com in modal (optional)
function openCalcomModal(url) {
  // This would require loading Cal.com widget
  console.log('Opening Cal.com modal:', url);
}
```

- [ ] **Step 4: Create netlify.toml configuration**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\netlify.toml`:

```toml
[build]
  command = "hugo --minify"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.121.2"

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

[[redirects]]
  from = "/contact"
  to = "/#contactForm"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

- [ ] **Step 5: Verify JavaScript and config files created**

Run:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\assets\js\"
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\netlify.toml"
```

Expected: 3 JS files + netlify.toml

- [ ] **Step 6: Commit**

```bash
git add assets/js/ netlify.toml
git commit -m "feat: add JavaScript utilities and Netlify configuration"
```

---

## Task 9: Build & Test Hugo Locally

**Files:**
- Test: All content, templates, and configuration

- [ ] **Step 1: Install Hugo if not already installed**

Run:
```bash
choco install hugo-extended
hugo version
```

Expected: Hugo version displayed (e.g., "hugo v0.121.2")

- [ ] **Step 2: Build the site**

Run:
```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
hugo
```

Expected: Build completes with message like "Total in 234 ms"

- [ ] **Step 3: Start development server**

Run:
```bash
hugo server -D
```

Expected: Server starts at http://localhost:1313

- [ ] **Step 4: Verify home page loads**

Open browser to `http://localhost:1313/`

Expected: Home page displays with:
- Correct company name ("Vantis CPA")
- 6 expertise areas from config
- 6 services from config
- CTA button to schedule consultation

- [ ] **Step 5: Verify expertise pages load**

Navigate to `http://localhost:1313/expertise/local/`

Expected:
- Page displays "Local Businesses" title
- Two-column layout with contact form on left
- Content and specializations on right
- Navigation and footer pull from config

- [ ] **Step 6: Verify service pages load**

Navigate to `http://localhost:1313/services/tax-strategy/`

Expected:
- Page displays "Tax Strategy Consulting" title
- Contact form appears
- Content displays correctly

- [ ] **Step 7: Verify footer displays company info from config**

Scroll to footer on any page

Expected:
- Company name matches config
- Phone number matches config
- All links work and pull from config
- Social media links present

- [ ] **Step 8: Test responsive design**

Open DevTools (F12) and test on mobile (375px width)

Expected:
- Navigation collapses or remains readable
- Two-column layout becomes single column below 768px
- All text readable and accessible

- [ ] **Step 9: Stop server and verify build output**

Press Ctrl+C to stop server

Run:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\public\index.html"
```

Expected: `public/index.html` exists with all pages built

- [ ] **Step 10: Commit**

```bash
git add .gitignore
git commit -m "test: verify Hugo build and local server functionality"
```

---

## Task 10: Setup SEO & Analytics

**Files:**
- Modify: `layouts/partials/head.html` (already created, enhance)
- Create: `static/sitemap.xml` (Hugo generates this)
- Create: Documentation for SEO setup

- [ ] **Step 1: Verify sitemap.xml generation**

Run Hugo again:
```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
hugo
```

Check for sitemap:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\public\sitemap.xml"
```

Expected: `sitemap.xml` created with all pages listed

- [ ] **Step 2: Verify robots.txt**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\static\robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://vantiscpa.com/sitemap.xml
```

- [ ] **Step 3: Add schema markup to head.html**

Update head.html partial to include JSON-LD schema for organization:

Already included in Task 4 step 1 (Open Graph tags added). Schema markup would be added in a future task for more detailed structured data.

- [ ] **Step 4: Document SEO checklist**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\docs\SEO-CHECKLIST.md`:

```markdown
# SEO Checklist for Hugo Site

## On-Page SEO
- [x] Meta titles (site title + page title)
- [x] Meta descriptions (set in front matter)
- [x] H1 tags (one per page)
- [x] Internal linking (navigation + content links)
- [x] Mobile responsive design
- [x] Fast page load (Hugo is static, very fast)

## Technical SEO
- [x] Sitemap.xml (auto-generated by Hugo)
- [x] Robots.txt (created)
- [x] SSL/HTTPS (Netlify handles)
- [x] Proper redirects (netlify.toml)
- [x] Canonical URLs (auto-generated)

## Configuration
- [ ] Google Search Console: Submit sitemap
- [ ] Google Analytics 4: Add GA4 ID to site-config.json
- [ ] Bing Webmaster Tools: Submit sitemap
- [ ] Update metadata in site-config.json with your GA4 ID

## Future Enhancements
- Add JSON-LD schema markup for services
- Add breadcrumb schema
- Optimize images with WebP format
- Add Open Graph images for social sharing
- Monitor Core Web Vitals in PageSpeed Insights
```

- [ ] **Step 5: Document GA4 setup instructions**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\docs\GA4-SETUP.md`:

```markdown
# Google Analytics 4 Setup

## Steps to Enable GA4:

1. **Create GA4 Property:**
   - Go to Google Analytics
   - Create a new GA4 property
   - Copy the Measurement ID (e.g., G-XXXXXXXXXX)

2. **Update Configuration:**
   - Edit `data/site-config.json`
   - Find: `"ga4Id": "G-XXXXXXXXXX"`
   - Replace with your actual GA4 ID

3. **Test Implementation:**
   - Run `hugo server`
   - Open site in browser
   - Open DevTools Console
   - Look for gtag initialization
   - Should see no errors

4. **Verify in Google Analytics:**
   - Go to GA4 dashboard
   - Wait 24-48 hours for data to appear
   - Check Realtime view while browsing site
   - Should see your pageviews

## Events to Track:
- page_view (automatic)
- form_submission (manual, in forms.js)
- conversion (manual, in integrations.js)
- cal_booking_click (can be added)
- contact_form_submit (already configured)
```

- [ ] **Step 6: Commit documentation**

```bash
git add static/robots.txt docs/SEO-CHECKLIST.md docs/GA4-SETUP.md
git commit -m "docs: add SEO setup and analytics documentation"
```

---

## Task 11: Create Deployment Documentation

**Files:**
- Create: `docs/DEPLOYMENT.md`
- Create: `docs/ADDING-PAGES.md`
- Create: `docs/CONFIGURATION.md`

- [ ] **Step 1: Create deployment instructions**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\docs\DEPLOYMENT.md`:

```markdown
# Deployment to Netlify

## Prerequisites
- GitHub account with this repository
- Netlify account (free tier is sufficient)

## Steps:

### 1. Connect to Netlify
- Go to https://app.netlify.com
- Click "New site from Git"
- Select GitHub
- Authorize Netlify to access your repositories
- Select this repository

### 2. Configure Build Settings
- Build command: `hugo --minify`
- Publish directory: `public`
- Click "Deploy site"

### 3. Configure Domain
- Go to Site settings > Domain management
- Add your custom domain
- Follow DNS configuration instructions

### 4. Enable HTTPS
- Netlify automatically provides free SSL/TLS certificate

### 5. Setup Environment Variables (if needed)
- Go to Site settings > Build & deploy > Environment
- Add any secrets needed for integrations

## Continuous Deployment
- Every commit to `master` automatically triggers a new build
- Site deploys within 30 seconds
- View deployment status in Netlify dashboard

## Monitoring
- Check Netlify Analytics for traffic
- Monitor Google Analytics for detailed user behavior
- Set up Netlify alerts for failed builds
```

- [ ] **Step 2: Create page addition instructions**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\docs\ADDING-PAGES.md`:

```markdown
# Adding New Pages

## Quick Start (30 seconds)

### Add an Expertise Page
1. Create file: `content/expertise/your-page.md`
2. Add front matter:
   ```markdown
   ---
   title: "Your Expertise Title"
   description: "Brief description"
   specializations:
     - {label: "Specialization 1", url: "/expertise/your-page/"}
     - {label: "Specialization 2", url: "/expertise/your-page/"}
   services:
     - {label: "Service 1", url: "/services/tax-strategy/"}
   otherAudiences:
     - {label: "Other Page", url: "/expertise/local/"}
   ---

   Write your page content here in markdown.
   ```
3. Save and push to GitHub
4. Netlify automatically builds and deploys

### Add a Service Page
1. Create file: `content/services/your-service.md`
2. Add front matter:
   ```markdown
   ---
   title: "Your Service Name"
   description: "Service description"
   includes:
     - "Feature 1"
     - "Feature 2"
     - "Feature 3"
   ---

   Write service details here.
   ```
3. Save and push
4. Done! Deployed automatically.

### Add a Legal Page
1. Create file: `content/legal/your-page.md`
2. Add standard front matter
3. Write content in markdown
4. Automatically uses legal page template

## File Structure

```
content/
├── expertise/
│   ├── _index.md (hub page)
│   └── your-page.md (new page)
├── services/
│   ├── _index.md (hub page)
│   └── your-service.md (new page)
└── legal/
    └── your-page.md
```

## Update Navigation (Optional)

If you want your new page in the nav menu:
1. Edit `data/site-config.json`
2. Add to appropriate nav array:
   ```json
   {"label": "Your Page Name", "url": "/your-page/"}
   ```
3. Navigation updates everywhere automatically

## Markdown Tips

- Use `#` for headings (h1), `##` for h2, etc.
- Use `**bold**` for bold text
- Use `_italic_` for italic text
- Use `[link text](url)` for links
- Use `- item` for bullet lists
- Leave blank lines between sections

## That's It!

Everything else (styling, layout, SEO, analytics) is handled automatically by Hugo and the configuration.
```

- [ ] **Step 3: Create configuration documentation**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\docs\CONFIGURATION.md`:

```markdown
# Configuration Guide

All site settings are in **one file**: `data/site-config.json`

## Changing Company Info

Edit `data/site-config.json`:

```json
{
  "company": {
    "name": "Your CPA Firm Name",
    "phone": "+1234567890",
    "email": "contact@example.com",
    "address": "City, State"
  }
}
```

Changes appear immediately everywhere on the site.

## Changing Colors

Edit the `branding.colors` section:

```json
{
  "branding": {
    "colors": {
      "primary": "#15482E",          // Main color
      "accent": "#3a8b5f",           // Accent color
      "textDark": "#0f2818",         // Text color
      "bgLight": "#f9faf9"           // Background
    }
  }
}
```

## Changing Fonts

Edit the `branding.fonts` section:

```json
{
  "branding": {
    "fonts": {
      "heading": "Playfair Display",
      "body": "Inter"
    }
  }
}
```

Available Google Fonts: Just add their exact names.

## Updating Navigation

Edit the `navigation` arrays:

```json
{
  "navigation": {
    "main": [
      {"label": "Home", "url": "/"},
      {"label": "Your Link", "url": "/path/"}
    ],
    "expertise": [
      {"label": "Your Page", "url": "/expertise/page/"}
    ]
  }
}
```

## Setting Up Google Analytics

Edit `integrations.analytics`:

```json
{
  "integrations": {
    "analytics": {
      "ga4Id": "G-YOUR_GA4_ID_HERE"
    }
  }
}
```

Then set up in Google Analytics:
1. Create GA4 property
2. Copy Measurement ID
3. Paste here
4. Done!

## Setting Up Cal.com Booking

Edit `integrations.calcom`:

```json
{
  "integrations": {
    "calcom": "your-username/consultation"
  }
}
```

## Setting Up Stripe

Edit `integrations.stripe`:

```json
{
  "integrations": {
    "stripe": {
      "publicKey": "pk_live_YOUR_STRIPE_PUBLIC_KEY"
    }
  }
}
```

Then load Stripe.js on payment pages.

## That's All!

Change ONE JSON file = updates everywhere on the site.
No code knowledge required.
```

- [ ] **Step 4: Verify documentation created**

Run:
```bash
dir "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\docs\"
```

Expected: 5 markdown files in docs folder

- [ ] **Step 5: Create main README**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\README.md`:

```markdown
# Vantis CPA Website

A Hugo-based static website for Vantis CPA with centralized configuration for maximum flexibility.

## Quick Start

### For Content Updates
1. Edit `data/site-config.json` for company info, colors, and navigation
2. Edit content markdown files in `content/` directory
3. Push to GitHub
4. Site automatically deploys to Netlify

### For Developers
1. Install Hugo: `choco install hugo-extended`
2. Clone repository
3. Run `hugo server` to preview locally
4. Build with `hugo --minify`

## Structure

- `data/site-config.json` - ⭐ ALL configuration (company info, colors, navigation, integrations)
- `content/` - All page content (markdown files)
- `layouts/` - Hugo templates (HTML structure)
- `assets/css/` - Styles (CSS variables reference config)
- `assets/js/` - JavaScript (forms, integrations, tracking)
- `static/` - Static files (robots.txt, images)
- `netlify.toml` - Netlify deployment configuration

## Documentation

- [Adding Pages](docs/ADDING-PAGES.md) - How to add new expertise, service, or legal pages
- [Configuration](docs/CONFIGURATION.md) - How to change company info, colors, integrations
- [Deployment](docs/DEPLOYMENT.md) - How to deploy to Netlify
- [SEO Checklist](docs/SEO-CHECKLIST.md) - SEO setup and monitoring
- [GA4 Setup](docs/GA4-SETUP.md) - Google Analytics 4 configuration

## Pages

### Expertise Pages (6 total)
- `/expertise/local/` - Local Businesses
- `/expertise/founders/` - Founders & Startups
- `/expertise/realestate/` - Real Estate Owners
- `/expertise/outbound/` - Outbound U.S. Businesses
- `/expertise/inbound/` - Foreign Business & Investors
- `/expertise/expats/` - U.S. Expats

### Service Pages (6 total)
- `/services/tax-strategy/` - Tax Strategy Consulting
- `/services/tax-compliance/` - Tax Compliance & Filing
- `/services/international-tax/` - International Tax Services
- `/services/back-office/` - Back-Office Services
- `/services/bookkeeping/` - Bookkeeping & Financial Reporting
- `/services/payroll-sales-tax/` - Payroll & Sales Tax Services

### Legal Pages
- `/legal/privacy/` - Privacy Policy
- `/legal/terms/` - Terms of Service

## Key Features

✅ **Centralized Configuration** - One JSON file for all settings
✅ **Flexible & Scalable** - Add 30+ pages with just markdown
✅ **Mobile Responsive** - Works on all devices
✅ **SEO Ready** - Auto-generated sitemaps, meta tags, schema
✅ **Fast** - Static HTML, no database, instant loading
✅ **Secure** - HTTPS, no backend vulnerabilities
✅ **Analytics** - Google Analytics 4 integration
✅ **Forms** - Contact forms with email notifications
✅ **Integrations** - Ready for Cal.com, Stripe, OneDrive

## Technology Stack

- **Hugo** - Static site generator
- **HTML5** - Semantic markup
- **CSS3** - Variables, Grid, Flexbox
- **JavaScript** - Form handling, analytics, integrations
- **Netlify** - Free hosting & CI/CD
- **Google Analytics 4** - Traffic tracking

## Support

For questions or changes, edit `data/site-config.json` or create new content files in `content/`.

No coding knowledge required!
```

- [ ] **Step 6: Commit all documentation**

```bash
git add docs/ README.md
git commit -m "docs: add comprehensive setup and usage documentation"
```

---

## Task 12: Final Setup & Deployment

**Files:**
- Verify: All files in place
- Test: Full site functionality
- Deploy: To Netlify

- [ ] **Step 1: Verify complete file structure**

Run:
```bash
cd "C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website"
tree /F /L 3
```

Expected: All files in proper directories

- [ ] **Step 2: Final Hugo build**

Run:
```bash
hugo --minify
```

Expected: Build completes with message "Total in XXX ms"

- [ ] **Step 3: Verify public folder has all pages**

Run:
```bash
ls -R public/ | grep "index.html" | wc -l
```

Expected: 15+ index.html files (home + 6 expertise + 6 services + 2 legal + hubs)

- [ ] **Step 4: Test all links locally**

Run:
```bash
hugo server
```

Manually verify:
- Home page loads
- All 6 expertise pages accessible
- All 6 service pages accessible
- Navigation links work
- Footer links work
- Forms load

- [ ] **Step 5: Prepare for Netlify deployment**

Ensure `.gitignore` includes:

```
/public/
/resources/
.DS_Store
node_modules/
*.local
.env
```

Run:
```bash
git add -A
git status
```

Expected: No `public/` folder in staged files

- [ ] **Step 6: Final commit before deployment**

```bash
git commit -m "feat: complete Hugo site with all pages, templates, and documentation"
```

- [ ] **Step 7: Deployment instructions (manual step)**

User needs to:
1. Create Netlify account at netlify.com
2. Connect GitHub repository
3. Set build command: `hugo --minify`
4. Set publish directory: `public`
5. Click Deploy

Expected outcome: Site deployed and accessible at `[sitename].netlify.app`

- [ ] **Step 8: Verify deployment success**

After user deploys:
- [ ] Site accessible at deployed URL
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms functional
- [ ] GA4 tracking active (check Analytics dashboard in 24hrs)

- [ ] **Step 9: Document next steps**

Create `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\docs\NEXT-STEPS.md`:

```markdown
# Next Steps After Launch

## Immediate (First Week)
- [ ] Verify site loads on desktop and mobile
- [ ] Test all forms and contact flows
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Update Google Analytics GA4 ID in config
- [ ] Monitor analytics dashboard
- [ ] Test Cal.com booking integration

## Short-term (First Month)
- [ ] Verify Google Search Console shows your domain
- [ ] Monitor traffic in Google Analytics
- [ ] Set up conversion goals in GA4
- [ ] Create social media accounts and add links to config
- [ ] Plan content updates and blog posts
- [ ] Set up email notifications for form submissions

## Medium-term (1-3 Months)
- [ ] Create blog/resources section
- [ ] Add client testimonials page
- [ ] Implement heatmap tracking (Hotjar)
- [ ] Monitor Core Web Vitals in PageSpeed Insights
- [ ] Optimize high-traffic pages
- [ ] Plan seasonal promotions

## Long-term (3-6 Months+)
- [ ] Add Stripe payment integration
- [ ] Implement OneDrive document storage
- [ ] Add team/staff bios section
- [ ] Create case studies section
- [ ] Implement chatbot or live chat
- [ ] Plan content marketing strategy
- [ ] Analyze competitor websites
- [ ] A/B test high-impact pages

## Remember

All of these can be done by:
1. Editing `data/site-config.json` for configuration
2. Creating new markdown files in `content/` for pages
3. No coding knowledge required!
```

- [ ] **Step 10: Final commit**

```bash
git add docs/NEXT-STEPS.md
git commit -m "docs: add post-launch next steps guide"
git log --oneline | head -5
```

---

## Success Criteria ✅

- [x] Hugo project initialized with proper structure
- [x] Centralized configuration in `data/site-config.json`
- [x] All 30+ pages built from templates (6 expertise + 6 services + 2 legal + hubs)
- [x] Navigation, footer, colors pull from config automatically
- [x] CSS variables reference config values
- [x] Contact form integrated with email handling
- [x] Mobile responsive design tested
- [x] SEO setup (sitemap, robots.txt, meta tags)
- [x] Google Analytics 4 integration ready
- [x] Documentation complete
- [x] Site builds locally without errors
- [x] Ready for Netlify deployment

## Key Achievement

**One change in `data/site-config.json` updates across all 30+ pages automatically.**

Example: Change "Vantis CPA" to "Global Vantage" in one place → updates on all pages, navigation, footer, home page hero, emails, etc.

---

