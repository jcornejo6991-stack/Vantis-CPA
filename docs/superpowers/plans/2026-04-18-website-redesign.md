# Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual overhaul of Vantis CPA Hugo site — remove floating cards/gridlines, apply VS Code terminal color palette with glassmorphism nav and contact form, restructure homepage into 4 distinct full-width service sections each with images and emojis.

**Architecture:** All changes are to Hugo templates in `layouts/` and CSS assets in `assets/css/`. The homepage (`layouts/index.html`) contains an inline `<style>` block and all section HTML. Nav and footer are partials. Inner pages use `layouts/_default/` templates + `layouts/partials/service-css.html`. No JavaScript logic changes — only colors/structure updated.

**Tech Stack:** Hugo static site generator, vanilla CSS, HTML5. Dev: `hugo server` at `http://localhost:1313`. Build: `hugo`.

---

### Task 1: Replace CSS variable tokens

**Files:**
- Modify: `assets/css/variables.css`

- [ ] **Step 1: Replace the full content of `assets/css/variables.css`**

```css
:root {
  /* Nav & Footer — premium dark gray */
  --nav-bg: rgba(26, 26, 46, 0.82);
  --footer-bg: #1a1a2e;

  /* Section backgrounds */
  --dark-navy: #0d1117;
  --dark-gray: #1a1a2e;
  --section-white: #ffffff;

  /* Hero */
  --hero-gradient: linear-gradient(135deg, #f8f7ff 0%, #edeef7 60%, #e8e6f5 100%);

  /* VS Code terminal accent colors */
  --accent-blue: #569CD6;
  --accent-orange: #CE9178;
  --accent-green: #4EC9B0;
  --accent-silver: #9CDCFE;
  --accent-silver-dark: #4a90b8;

  /* Text */
  --text-light: #e8e8e8;
  --text-dark: #1a1a2e;
  --text-mid-dark: #b0b8c8;
  --text-mid-light: #4a5568;

  /* Legacy aliases — keep for inner page compatibility */
  --primary: #569CD6;
  --primary-dark: #1a1a2e;
  --primary-darkest: #0d1117;
  --accent: #4EC9B0;
  --accent-light: #e8e6f5;
  --bg-light: #f8f7ff;
  --bg-accent: #edeef7;
  --bg: #e8e8e8;
  --bg-alt: #e0e0e0;
  --border: #d0d0d0;
  --navy: #1a1a2e;
  --navy-mid: #569CD6;
  --navy-dark: #0d1117;
  --text-mid: #4a5568;
  --card-radius: 8px;

  /* Fonts */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;

  /* Misc */
  --border-radius: 8px;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --nav-height: 68px;
}

@media (max-width: 768px) {
  :root {
    --spacing-xl: 24px;
    --spacing-xxl: 32px;
  }
}
```

- [ ] **Step 2: Run build to verify no errors**

```bash
hugo
```
Expected: Build output table with 0 errors.

- [ ] **Step 3: Commit**

```bash
git add assets/css/variables.css
git commit -m "feat: replace CSS variables with VS Code terminal palette"
```

---

### Task 2: Clean up global styles

**Files:**
- Modify: `assets/css/style.css`

- [ ] **Step 1: Replace the full content of `assets/css/style.css`**

```css
@import 'variables.css';

/* Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* Typography */
body {
  font-family: var(--font-body);
  color: var(--text-dark);
  line-height: 1.6;
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  padding-top: var(--nav-height);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--text-dark);
  margin-bottom: var(--spacing-md);
}

h1 { font-size: 48px; line-height: 1.2; }
h2 { font-size: 36px; line-height: 1.2; }
h3 { font-size: 28px; line-height: 1.3; }
p { margin-bottom: var(--spacing-md); }

a { color: var(--accent-blue); text-decoration: none; transition: color 0.3s ease; }
a:hover { color: var(--accent-green); text-decoration: underline; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing-xl); }

.grid { display: grid; gap: var(--spacing-lg); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }

@media (max-width: 768px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  h1 { font-size: 32px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
}

/* Fade-up animations */
.fade-up { opacity: 0; transform: translateY(22px); transition: opacity 0.55s ease, transform 0.55s ease; }
.fade-up.visible { opacity: 1; transform: translateY(0); }
.fade-up-d1 { transition-delay: 0.08s; }
.fade-up-d2 { transition-delay: 0.16s; }
.fade-up-d3 { transition-delay: 0.24s; }
.fade-up-d4 { transition-delay: 0.32s; }
.fade-up-d5 { transition-delay: 0.40s; }
.fade-up-d6 { transition-delay: 0.48s; }

/* Section label */
.section-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-heading {
  font-family: var(--font-heading);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
}

.section-subheading {
  font-size: 17px;
  line-height: 1.65;
  max-width: 600px;
  margin-top: 8px;
}

/* Buttons */
.btn-primary {
  background: var(--accent-blue);
  color: #fff;
  padding: 13px 26px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid var(--accent-blue);
  display: inline-block;
  transition: background 0.2s, transform 0.15s;
}
.btn-primary:hover { background: #4a88be; border-color: #4a88be; transform: translateY(-1px); color: #fff; text-decoration: none; }

.btn-secondary {
  background: transparent;
  color: var(--text-dark);
  padding: 13px 26px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid var(--text-dark);
  display: inline-block;
  transition: background 0.2s, color 0.2s, transform 0.15s;
}
.btn-secondary:hover { background: var(--text-dark); color: #fff; transform: translateY(-1px); text-decoration: none; }
```

- [ ] **Step 2: Build and verify**

```bash
hugo
```
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: global styles — remove gridlines, clean palette, shared fade-up"
```

---

### Task 3: Update nav to glassmorphism dark gray

**Files:**
- Modify: `layouts/partials/nav-css.html`

- [ ] **Step 1: In `layouts/partials/nav-css.html`, replace only the `.nav` and `.nav.scrolled` rules**

Find this block:
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(160deg, #0c3421 0%, #0a301e 100%);
  border-bottom: none;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: box-shadow 0.25s ease, backdrop-filter 0.25s ease;
  overflow: visible;
}
```

Replace with:
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(26, 26, 46, 0.82);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: box-shadow 0.25s ease, background 0.25s ease;
  overflow: visible;
}
```

- [ ] **Step 2: Replace `.nav.scrolled` rule**

Find:
```css
.nav.scrolled { background: rgba(5, 40, 24, 0.90); box-shadow: 0 4px 20px rgba(5,40,24,0.25); backdrop-filter: blur(8px); }
```

Replace with:
```css
.nav.scrolled { background: rgba(26, 26, 46, 0.95); box-shadow: 0 4px 20px rgba(0,0,0,0.3); backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); }
```

- [ ] **Step 3: Update nav link hover color from opacity to blue**

Find:
```css
.nav-links a:hover { opacity: 0.7; }
```

Replace with:
```css
.nav-links a:hover { opacity: 1; color: #569CD6; }
```

- [ ] **Step 4: Update mobile menu background**

Find:
```css
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--navy-dark);
```

Replace with:
```css
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(26, 26, 46, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
```

- [ ] **Step 5: Update mobile menu link color**

Find:
```css
.mobile-menu a {
  font-size: 15px;
  font-weight: 500;
  color: #7aaa8f;
```

Replace with:
```css
.mobile-menu a {
  font-size: 15px;
  font-weight: 500;
  color: #b0b8c8;
```

- [ ] **Step 6: Update mobile accordion link color**

Find:
```css
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
```

This is already a good light color — keep it. Find:
```css
.mobile-accordion-body a {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255,255,255,0.6);
```
Keep as-is (already appropriate). No change needed here.

- [ ] **Step 7: Remove the `.nav::before` grain overlay block** (no longer needed)

Find and delete this entire block:
```css
.nav::before {
  content: '';
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  opacity: 0.12;
  pointer-events: none;
  z-index: 0;
}
.nav > * { position: relative; z-index: 1; }
```

- [ ] **Step 8: Build and preview**

```bash
hugo server
```
Navigate to `http://localhost:1313`. Confirm: frosted glass nav over dark gray background, white links, blue hover.

- [ ] **Step 9: Commit**

```bash
git add layouts/partials/nav-css.html
git commit -m "feat: nav glassmorphism — dark gray backdrop-filter, blue hover"
```

---

### Task 4: Update footer to premium dark gray

**Files:**
- Modify: `layouts/partials/footer-css.html`
- Modify: `layouts/partials/footer.html`

- [ ] **Step 1: In `layouts/partials/footer-css.html`, replace the `.footer` rule**

Find:
```css
.footer { background: #092316; padding: 64px 0 32px; margin: 0; border-radius: 0; box-shadow: none; width: 100%; position: relative; z-index: 1; }
```

Replace with:
```css
.footer { background: #1a1a2e; padding: 64px 0 32px; margin: 0; border-radius: 0; box-shadow: none; border-top: 1px solid rgba(255,255,255,0.06); width: 100%; position: relative; z-index: 1; }
```

- [ ] **Step 2: Update footer text colors in `footer-css.html`**

Find and replace each line:
```css
.footer-tagline { font-family: 'Playfair Display', serif; font-style: italic; font-size: 14px; color: #5a8b6f; margin-bottom: 14px; }
```
→
```css
.footer-tagline { font-family: 'Playfair Display', serif; font-style: italic; font-size: 14px; color: #b0b8c8; margin-bottom: 14px; }
```

```css
.footer-license { font-size: 12px; color: #4a7b5f; margin-bottom: 16px; }
```
→
```css
.footer-license { font-size: 12px; color: #6b7280; margin-bottom: 16px; }
```

```css
.footer-contact a { display: block; font-size: 14px; color: #7aaa8f; text-decoration: none; margin-bottom: 6px; }
.footer-contact a:hover { color: #fff; }
```
→
```css
.footer-contact a { display: block; font-size: 14px; color: #9CDCFE; text-decoration: none; margin-bottom: 6px; }
.footer-contact a:hover { color: #fff; }
```

```css
.footer-about { font-size: 13px; color: #7aaa8f; line-height: 1.6; margin-top: 16px; max-width: 380px; }
```
→
```css
.footer-about { font-size: 13px; color: #b0b8c8; line-height: 1.6; margin-top: 16px; max-width: 380px; }
```

```css
.footer-col-title { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #4a7b5f; margin-bottom: 16px; }
```
→
```css
.footer-col-title { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #569CD6; margin-bottom: 16px; }
```

```css
.footer-links a { font-size: 14px; color: #7aaa8f; text-decoration: none; transition: color 0.2s; white-space: nowrap; }
.footer-links a:hover { color: #fff; }
```
→
```css
.footer-links a { font-size: 14px; color: #b0b8c8; text-decoration: none; transition: color 0.2s; white-space: nowrap; }
.footer-links a:hover { color: #9CDCFE; }
```

```css
.footer-copy { font-size: 12px; color: #4a7b5f; }
.footer-legal a { font-size: 12px; color: #4a7b5f; text-decoration: none; }
.footer-legal a:hover { color: #fff; }
```
→
```css
.footer-copy { font-size: 12px; color: #6b7280; }
.footer-legal a { font-size: 12px; color: #6b7280; text-decoration: none; }
.footer-legal a:hover { color: #9CDCFE; }
```

- [ ] **Step 3: In `layouts/partials/footer.html`, remove `grain-overlay` class from `<footer>`**

Find:
```html
<footer class="footer grain-overlay" role="contentinfo">
```

Replace with:
```html
<footer class="footer" role="contentinfo">
```

- [ ] **Step 4: Update inline color in footer-bottom legal separator**

Find:
```html
<span style="color:#2a5a3a;padding:0 8px;">&middot;</span>
```
(appears twice)

Replace both with:
```html
<span style="color:#4a5568;padding:0 8px;">&middot;</span>
```

- [ ] **Step 5: Build and preview**

```bash
hugo server
```
Navigate to `http://localhost:1313`, scroll to footer. Confirm: `#1a1a2e` dark gray background, light text, silver/blue links.

- [ ] **Step 6: Commit**

```bash
git add layouts/partials/footer-css.html layouts/partials/footer.html
git commit -m "feat: footer — dark gray #1a1a2e matching nav family"
```

---

### Task 5: Replace homepage inline `<style>` block

**Files:**
- Modify: `layouts/index.html` (style block only, lines 3–1331)

This replaces the entire `<style>` block at the top of `index.html` (everything between `{{ define "main" }}` and `{{ partial "nav-css.html" . }}`). The new style block removes all floating card effects, gridlines, and old green colors. It adds the new section backgrounds, VS Code accents, glassmorphism contact, and service section layouts.

- [ ] **Step 1: In `layouts/index.html`, replace the opening `<style>` tag through the closing `</style>` tag (the entire inline style block) with the following**

```html
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; overflow-x: hidden; }
    body {
      font-family: 'Inter', sans-serif;
      background: #ffffff;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      padding-top: var(--nav-height, 68px);
    }

    /* ─── LAYOUT ─── */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
    .section-label {
      font-size: 13px; font-weight: 600; letter-spacing: 0.12em;
      text-transform: uppercase; margin-bottom: 10px;
      display: flex; align-items: center; gap: 8px;
    }
    .section-heading {
      font-family: 'Playfair Display', serif;
      font-size: clamp(28px, 4vw, 42px); font-weight: 700;
      line-height: 1.2; margin-bottom: 12px;
    }
    .section-subheading { font-size: 17px; line-height: 1.65; max-width: 600px; margin-top: 8px; }

    /* ─── FADE ANIMATIONS ─── */
    .fade-up { opacity: 0; transform: translateY(22px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .fade-up.visible { opacity: 1; transform: translateY(0); }
    .fade-up-d1 { transition-delay: 0.08s; }
    .fade-up-d2 { transition-delay: 0.16s; }
    .fade-up-d3 { transition-delay: 0.24s; }
    .fade-up-d4 { transition-delay: 0.32s; }
    .fade-up-d5 { transition-delay: 0.40s; }
    .fade-up-d6 { transition-delay: 0.48s; }

    /* ─── HERO ─── */
    .hero {
      background: linear-gradient(135deg, #f8f7ff 0%, #edeef7 60%, #e8e6f5 100%);
      min-height: 80vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
    .hero-body {
      padding: 80px 0;
      position: relative;
      z-index: 1;
      width: 100%;
    }
    .hero-inner {
      display: grid;
      grid-template-columns: 0.8fr 1px 1.2fr;
      gap: 0 48px;
      align-items: center;
    }
    .hero-watermark {
      position: absolute;
      top: 20px; right: 36%;
      font-size: 88px;
      opacity: 0.10;
      pointer-events: none;
      z-index: 0;
      line-height: 1;
    }
    .hero-left { padding-right: 8px; }
    .hero-brand-name {
      font-family: 'Playfair Display', serif;
      font-size: clamp(56px, 8vw, 100px);
      font-weight: 700; color: #1a1a2e;
      line-height: 1.05; letter-spacing: -0.02em;
      margin-bottom: 12px; white-space: nowrap;
    }
    .hero-tagline {
      font-family: 'Playfair Display', serif;
      font-size: clamp(14px, 1.8vw, 18px);
      font-style: italic; color: #569CD6; letter-spacing: 0.01em;
    }
    .hero-divider { width: 1px; background: rgba(26,26,46,0.15); align-self: stretch; }
    .hero-right { padding-left: 8px; }
    .hero-intro-label {
      font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
      text-transform: uppercase; color: #4a5568; margin-bottom: 10px;
    }
    .hero-sub { font-size: 15px; color: #1a1a2e; line-height: 1.7; margin-bottom: 24px; }

    /* Hero contact box — glassmorphism */
    .hero-contact-box {
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      background: rgba(255,255,255,0.45);
      border: 1px solid rgba(255,255,255,0.6);
      border-radius: 10px;
      padding: 18px 22px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 24px;
      margin-bottom: 24px;
    }
    .hero-contact-item { display: flex; flex-direction: column; gap: 2px; }
    .hero-contact-item .label {
      font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
      text-transform: uppercase; color: #569CD6;
    }
    .hero-contact-item .value {
      font-size: 13px; font-weight: 600; color: #1a1a2e; text-decoration: none;
    }
    .hero-contact-item .value:hover { text-decoration: underline; color: #569CD6; }
    .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
    .btn-primary {
      background: #569CD6; color: #fff; padding: 13px 26px; border-radius: 8px;
      font-size: 14px; font-weight: 600; text-decoration: none;
      border: 2px solid #569CD6; display: inline-block;
      transition: background 0.2s, transform 0.15s;
    }
    .btn-primary:hover { background: #4a88be; border-color: #4a88be; transform: translateY(-1px); color: #fff; text-decoration: none; }
    .btn-secondary {
      background: transparent; color: #1a1a2e; padding: 13px 26px; border-radius: 8px;
      font-size: 14px; font-weight: 600; text-decoration: none;
      border: 2px solid #1a1a2e; display: inline-block;
      transition: background 0.2s, color 0.2s, transform 0.15s;
    }
    .btn-secondary:hover { background: #1a1a2e; color: #fff; transform: translateY(-1px); text-decoration: none; }

    /* Hero image panel */
    .hero-image-panel {
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: 32%;
      overflow: hidden;
      pointer-events: none;
    }
    .hero-image-panel img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .hero-image-panel::before {
      content: '';
      position: absolute; top: 0; left: 0; bottom: 0;
      width: 120px;
      background: linear-gradient(to right, #edeef7, transparent);
      z-index: 1;
    }

    /* ─── SERVICE SECTIONS SHARED ─── */
    .svc-section { position: relative; overflow: hidden; }
    .svc-layout { display: grid; align-items: stretch; min-height: 460px; }
    .svc-content {
      padding: 80px 60px;
      display: flex; flex-direction: column; justify-content: center;
    }
    .svc-image-panel { overflow: hidden; }
    .svc-image-panel img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 460px; }
    .svc-list {
      list-style: none; display: flex; flex-direction: column;
      gap: 8px; margin: 20px 0 28px;
    }
    .svc-list li {
      font-size: 14px; font-weight: 500;
      padding: 10px 14px; padding-left: 16px;
      border-left: 2px solid;
      line-height: 1.5;
      display: flex; align-items: center; gap: 10px;
      border-radius: 0 4px 4px 0;
    }
    .svc-learn-more {
      font-size: 13px; font-weight: 700;
      text-decoration: none; letter-spacing: 0.06em;
      text-transform: uppercase;
      transition: letter-spacing 0.2s, opacity 0.2s;
      display: inline-flex; align-items: center; gap: 6px;
    }
    .svc-learn-more:hover { letter-spacing: 0.1em; text-decoration: none; }

    /* ─── INDIVIDUAL TAX (white) ─── */
    .individual-tax { background: #ffffff; }
    .individual-tax .svc-layout { grid-template-columns: 1fr 38%; }
    .individual-tax .section-label { color: #569CD6; }
    .individual-tax .section-heading { color: #1a1a2e; }
    .individual-tax .section-subheading { color: #4a5568; }
    .individual-tax .svc-list li { border-left-color: #569CD6; color: #1a1a2e; background: rgba(86,156,214,0.04); }
    .individual-tax .svc-learn-more { color: #569CD6; }
    .individual-tax .svc-learn-more:hover { color: #1a1a2e; }

    /* ─── BUSINESS TAX (dark gray) ─── */
    .business-tax { background: #1a1a2e; }
    .business-tax .svc-layout { grid-template-columns: 38% 1fr; }
    .business-tax .section-label { color: #CE9178; }
    .business-tax .section-heading { color: #e8e8e8; }
    .business-tax .section-subheading { color: #b0b8c8; }
    .business-tax .svc-list li { border-left-color: #CE9178; color: #e8e8e8; background: rgba(206,145,120,0.06); }
    .business-tax .svc-learn-more { color: #CE9178; }
    .business-tax .svc-learn-more:hover { color: #e8e8e8; }

    /* ─── INTERNATIONAL TAX (dark navy) ─── */
    .international-tax { background: #0d1117; }
    .international-tax .svc-layout { grid-template-columns: 1fr 38%; }
    .international-tax .section-label { color: #4EC9B0; }
    .international-tax .section-heading { color: #e8e8e8; }
    .international-tax .section-subheading { color: #b0b8c8; }
    .international-tax .svc-list li { border-left-color: #4EC9B0; color: #e8e8e8; background: rgba(78,201,176,0.06); }
    .international-tax .svc-learn-more { color: #4EC9B0; }
    .international-tax .svc-learn-more:hover { color: #e8e8e8; }
    .intl-watermark {
      position: absolute; top: 40px; right: 42%;
      font-size: 120px; opacity: 0.05;
      pointer-events: none; z-index: 0; line-height: 1;
    }
    .international-tax .svc-content { position: relative; z-index: 1; }

    /* ─── FULL OFFICE (white) ─── */
    .full-office { background: #ffffff; position: relative; overflow: hidden; padding: 80px 0; }
    .full-office-bg {
      position: absolute; inset: 0;
      background-image: url('/images/card-realestate.jpg');
      background-size: cover; background-position: center;
      opacity: 0.05; z-index: 0;
    }
    .full-office > .container { position: relative; z-index: 1; }
    .full-office .section-label { color: #4a90b8; }
    .full-office .section-heading { color: #1a1a2e; }
    .full-office .section-subheading { color: #4a5568; }
    .full-office-grid {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 0; margin-top: 40px;
      border-top: 1px solid rgba(26,26,46,0.08);
    }
    .full-office-item {
      padding: 28px 24px;
      border-right: 1px solid rgba(26,26,46,0.08);
      border-top: 2px solid #9CDCFE;
    }
    .full-office-item:last-child { border-right: none; }
    .full-office-item-title {
      font-size: 16px; font-weight: 700; color: #1a1a2e;
      margin-bottom: 10px; display: flex; align-items: center; gap: 8px;
    }
    .full-office-item-desc { font-size: 13px; color: #4a5568; line-height: 1.6; margin-bottom: 10px; }
    .full-office-item-tools { font-size: 11px; color: #4a90b8; font-weight: 500; letter-spacing: 0.02em; margin-bottom: 12px; }
    .full-office-learn-more {
      font-size: 12px; font-weight: 700; color: #4a90b8;
      text-decoration: none; text-transform: uppercase;
      letter-spacing: 0.06em; display: inline-block;
      transition: letter-spacing 0.2s, color 0.2s;
    }
    .full-office-learn-more:hover { letter-spacing: 0.1em; color: #1a1a2e; text-decoration: none; }

    /* ─── WHO WE SERVE (dark gray) ─── */
    .industries { padding: 80px 0; background: #1a1a2e; }
    .industries .section-label { color: #569CD6; }
    .industries .section-heading { color: #e8e8e8; }
    .industries .section-subheading { color: #b0b8c8; }
    .industries-header { margin-bottom: 40px; }
    .industries-grid {
      display: grid; grid-template-columns: repeat(2, 1fr);
      gap: 0; max-width: 900px; margin: 0 auto;
    }
    .industry-card-wrapper {
      border-top: 1px solid rgba(255,255,255,0.08);
      position: relative; transition: background 0.25s;
    }
    .industry-card-wrapper:nth-last-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.08); }
    .industry-card-wrapper:hover { background: rgba(255,255,255,0.04); }
    .industry-card {
      display: grid; grid-template-columns: minmax(0,1fr) auto;
      gap: 18px; align-items: center;
      padding: 24px 12px; text-decoration: none; color: #e8e8e8;
      transition: padding 0.25s;
    }
    .industry-card-wrapper:hover .industry-card { padding-left: 20px; }
    .industry-card-wrapper:hover .industry-learn-more { letter-spacing: 0.04em; color: #9CDCFE; }
    .industry-row-left { display: flex; align-items: center; gap: 14px; }
    .industry-thumbnail {
      width: 36px; height: 36px; border-radius: 50%;
      object-fit: cover; flex-shrink: 0; opacity: 0.75;
    }
    .industry-title-group { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
    .industry-category-label {
      display: inline-flex; align-items: center; align-self: flex-start;
      padding: 3px 8px; border-radius: 999px;
      background: rgba(86,156,214,0.12); color: #569CD6;
      font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    }
    .industry-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(18px, 2vw, 24px); font-weight: 700;
      color: #e8e8e8; line-height: 1.1; letter-spacing: -0.01em;
      margin: 0;
    }
    .industry-description { font-size: 13px; color: #b0b8c8; line-height: 1.6; margin: 0; }
    .industry-learn-more {
      font-size: 11px; color: #569CD6; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.1em; white-space: nowrap;
      transition: letter-spacing 0.2s, color 0.2s;
    }
    .industry-niches { display: none; }

    /* ─── PROCESS + WHAT TO BRING (dark navy) ─── */
    .process-bring-section { padding: 80px 0; background: #0d1117; }
    .process-bring-section .section-label { color: #4EC9B0; }
    .process-bring-section .section-heading { color: #e8e8e8; }
    .process-bring-section .section-subheading { color: #b0b8c8; }
    .process-bring-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
    .process-steps { display: flex; flex-direction: column; }
    .process-step { display: flex; gap: 18px; align-items: flex-start; }
    .process-step-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
    .process-step-badge {
      width: 40px; height: 40px; border-radius: 50%;
      background: #4EC9B0; color: #0d1117;
      font-size: 12px; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .process-step-connector {
      width: 2px; flex: 1; min-height: 28px;
      background: repeating-linear-gradient(to bottom, rgba(78,201,176,0.4) 0px, rgba(78,201,176,0.4) 5px, transparent 5px, transparent 10px);
      margin: 5px 0;
    }
    .process-step-content { padding-bottom: 24px; padding-top: 8px; }
    .process-step:last-child .process-step-content { padding-bottom: 0; }
    .process-step-pill {
      display: inline-block; font-size: 10.5px; font-weight: 600;
      color: #4EC9B0; background: rgba(78,201,176,0.1);
      border-radius: 20px; padding: 2px 10px; margin-bottom: 8px; letter-spacing: 0.04em;
    }
    .process-step-title { font-size: 16px; font-weight: 700; color: #e8e8e8; margin-bottom: 5px; }
    .process-step-desc { font-size: 13.5px; color: #b0b8c8; line-height: 1.6; }
    .bring-intro { font-size: 13.5px; color: #b0b8c8; line-height: 1.6; margin-top: 8px; margin-bottom: 24px; }
    .bring-list { display: flex; flex-direction: column; gap: 10px; }
    .bring-item {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 16px;
      border-left: 2px solid #4EC9B0;
      background: rgba(78,201,176,0.04);
      border-radius: 0 6px 6px 0;
    }
    .bring-check {
      width: 22px; height: 22px; border-radius: 50%;
      background: #4EC9B0; color: #0d1117;
      font-size: 12px; display: flex;
      align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;
    }
    .bring-text { font-size: 13.5px; color: #e8e8e8; font-weight: 400; line-height: 1.3; }

    /* ─── CONTACT (dark gray, glassmorphism) ─── */
    .contact { padding: 80px 0; background: #1a1a2e; }
    .contact .section-label { color: #9CDCFE; }
    .contact .section-heading { color: #e8e8e8; }
    .contact .section-subheading { color: #b0b8c8; }
    .contact-header { margin-bottom: 48px; text-align: center; }
    .contact-header .section-subheading { margin: 8px auto 0; }
    .contact-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 36px; align-items: start; max-width: 860px; margin: 0 auto; }
    .contact-form-panel {
      backdrop-filter: blur(16px) saturate(150%);
      -webkit-backdrop-filter: blur(16px) saturate(150%);
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 14px; padding: 32px;
    }
    .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
    .form-group label { font-size: 14px; font-weight: 600; color: #e8e8e8; letter-spacing: 0.02em; }
    .form-group input, .form-group textarea {
      font-family: 'Inter', sans-serif; font-size: 15px; color: #e8e8e8;
      background: rgba(255,255,255,0.07);
      border: 1.5px solid rgba(255,255,255,0.15);
      border-radius: 8px; padding: 12px 14px; outline: none;
      transition: border-color 0.2s; width: 100%;
    }
    .form-group input:focus, .form-group textarea:focus { border-color: #9CDCFE; }
    .form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,0.35); }
    .form-group textarea { resize: vertical; min-height: 220px; }
    .form-submit-row { display: flex; gap: 16px; align-items: center; margin-bottom: 16px; }
    .form-submit {
      background: #569CD6; color: #fff; border: none;
      padding: 14px 32px; border-radius: 8px;
      font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600;
      cursor: pointer; transition: background 0.2s, transform 0.15s;
    }
    .form-submit:hover { background: #4a88be; transform: translateY(-1px); }
    .form-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
    .form-privacy-note { font-size: 13px; font-style: italic; color: #6b7280; margin: 0; }
    .form-success {
      display: none; background: rgba(78,201,176,0.08);
      border: 1.5px solid #4EC9B0; border-radius: 10px;
      padding: 20px 24px; font-size: 15px; color: #4EC9B0; line-height: 1.6;
    }
    .form-success.visible { display: block; }
    .contact-right-column { display: flex; flex-direction: column; gap: 16px; margin-top: 0; }
    .contact-info, .contact-calendar {
      backdrop-filter: blur(16px) saturate(150%);
      -webkit-backdrop-filter: blur(16px) saturate(150%);
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 14px; padding: 24px; text-align: center;
    }
    .contact-info-title, .contact-calendar-title {
      font-family: 'Playfair Display', serif;
      font-size: 18px; font-weight: 600; color: #e8e8e8; margin-bottom: 14px;
    }
    .contact-item { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-bottom: 14px; font-size: 13px; }
    .contact-item:last-of-type { margin-bottom: 0; }
    .contact-item-icon { width: 34px; height: 34px; background: rgba(255,255,255,0.08); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
    .contact-item-icon svg { width: 16px; height: 16px; stroke: #9CDCFE; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .contact-item-label { font-size: 11px; font-weight: 600; color: #9CDCFE; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 2px; }
    .contact-item-value { font-size: 14.5px; color: #e8e8e8; font-weight: 500; }
    .contact-item-value a { color: #e8e8e8; text-decoration: none; }
    .contact-item-value a:hover { color: #9CDCFE; text-decoration: underline; }
    .contact-calendar-desc { color: #b0b8c8; font-size: 14px; margin-bottom: 20px; }

    /* ─── FAQ (white) ─── */
    .faq-section { background: #ffffff; overflow: hidden; }
    .faq-wrapper { display: grid; grid-template-columns: 1fr 1fr; min-height: 500px; }
    .faq-left {
      background: #f0f4ff;
      padding: 80px 48px;
      display: flex; flex-direction: column; justify-content: center;
    }
    .faq-accent-bar { width: 48px; height: 3px; background: #569CD6; margin-bottom: 20px; }
    .faq-title { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #1a1a2e; margin-bottom: 14px; line-height: 1.2; }
    .faq-subtitle { font-size: 15px; line-height: 1.8; color: #4a5568; }
    .faq-right { padding: 60px 48px; background: #ffffff; display: flex; align-items: center; }
    .faq-items { display: flex; flex-direction: column; width: 100%; }
    .faq-item { cursor: pointer; border-bottom: 1px solid #e8e8e8; }
    .faq-item:first-child { border-top: 1px solid #e8e8e8; }
    .faq-question { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 18px 0; user-select: none; }
    .faq-q-text { font-size: 15px; font-weight: 600; color: #1a1a2e; flex: 1; line-height: 1.4; display: flex; align-items: center; gap: 8px; }
    .faq-toggle { color: #569CD6; font-size: 22px; font-weight: 300; flex-shrink: 0; transition: transform 0.3s ease; }
    .faq-item.open .faq-toggle { transform: rotate(45deg); }
    .faq-answer { color: #4a5568; font-size: 14px; line-height: 1.7; padding: 0 0 18px; display: none; }
    .faq-item.open .faq-answer { display: block; }

    /* ─── TRUST SIGNALS ─── */
    .trust-signals { display: flex; flex-wrap: wrap; gap: 10px 0; align-items: center; }
    .trust-signal {
      display: flex; align-items: center; gap: 7px;
      font-size: 13px; font-weight: 500; color: #4a5568;
      padding: 0 16px 0 0;
    }
    .trust-signal::before {
      content: ''; display: inline-block; width: 6px; height: 6px;
      border-radius: 50%; background: #569CD6; flex-shrink: 0;
    }

    /* ─── RESPONSIVE ─── */
    @media (max-width: 1024px) {
      .hero-inner { grid-template-columns: 1fr 1px 1fr; }
      .hero-image-panel { display: none; }
      .individual-tax .svc-layout,
      .international-tax .svc-layout { grid-template-columns: 1fr; }
      .individual-tax .svc-image-panel,
      .international-tax .svc-image-panel { display: none; }
      .business-tax .svc-layout { grid-template-columns: 1fr; }
      .business-tax .svc-image-panel { display: none; }
      .full-office-grid { grid-template-columns: 1fr 1fr; }
      .industries-grid { grid-template-columns: 1fr; }
      .industries-header .section-subheading { max-width: none; }
      .contact-grid { grid-template-columns: 1fr; }
      .faq-wrapper { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .hero-inner { grid-template-columns: 1fr; gap: 32px; }
      .hero-divider { display: none; }
      .hero-brand-name { font-size: clamp(36px, 10vw, 60px); white-space: normal; }
      .hero-contact-box { grid-template-columns: 1fr 1fr; }
      .svc-content { padding: 48px 24px; }
      .process-bring-grid { grid-template-columns: 1fr; gap: 48px; }
      .contact-form-panel { padding: 24px 20px; }
      .faq-left, .faq-right { padding: 40px 24px; }
    }
    @media (max-width: 480px) {
      .full-office-grid { grid-template-columns: 1fr; }
      .full-office-item { border-right: none; border-bottom: 1px solid rgba(26,26,46,0.08); }
      .full-office-item:last-child { border-bottom: none; }
      .industry-card { grid-template-columns: 1fr; }
    }
  </style>
```

- [ ] **Step 2: Build and verify (no visual check needed yet — HTML sections still need updating)**

```bash
hugo
```
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add layouts/index.html
git commit -m "feat: homepage style block — VS Code palette, section layouts, glassmorphism contact"
```

---

### Task 6: Replace homepage Hero section HTML

**Files:**
- Modify: `layouts/index.html` (hero section only)

- [ ] **Step 1: Replace the entire hero section in `layouts/index.html`**

Find this section (from `<!-- ═══════════════════ HERO ═══════════════════ -->` through the closing `</section>`):

Replace with:
```html
<!-- ═══════════════════ HERO ═══════════════════ -->
<section class="hero" aria-label="Introduction">
  <div aria-hidden="true" class="hero-watermark">🧭</div>
  <div class="hero-body">
    <div class="container">
      <div class="hero-inner">

        <!-- Left: Brand name -->
        <div class="hero-left fade-up">
          <h1 class="hero-brand-name">Vantis CPA</h1>
          <p class="hero-tagline">Tax &amp; Accounting for Local &amp; Global Clients</p>
        </div>

        <!-- Divider -->
        <div class="hero-divider" aria-hidden="true"></div>

        <!-- Right: Intro + contact box -->
        <div class="hero-right fade-up fade-up-d1">
          <p class="hero-intro-label">About...</p>
          <p class="hero-sub">A tax and accounting company dedicated to local and global taxpayers. We provide a suite of services including proactive tax planning, seamless compliance and full-service accounting, delivered with depth and clear communication. The goal is straightforward: minimize your tax exposure and put the code to work for you. The clients we serve are the ones others look to for advice.</p>

          <div class="hero-contact-box">
            <div class="hero-contact-item">
              <span class="label">Email</span>
              <a href="mailto:info@vantiscpa.com" class="value">info@vantiscpa.com</a>
            </div>
            <div class="hero-contact-item">
              <span class="label">Phone</span>
              <a href="tel:+13055635551" class="value">(305) 563-5551</a>
            </div>
            <div class="hero-contact-item">
              <span class="label">Experience</span>
              <span class="value">10+ Years</span>
            </div>
            <div class="hero-contact-item">
              <span class="label">Languages</span>
              <span class="value">English &amp; Spanish</span>
            </div>
            <div class="hero-contact-item">
              <span class="label">License</span>
              <span class="value">Licensed CPA &middot; Florida</span>
            </div>
            <div class="hero-contact-item">
              <span class="label">Graduate Degree</span>
              <span class="value">Master of Taxation</span>
            </div>
          </div>

          <div class="hero-ctas fade-up fade-up-d2">
            <a href="https://cal.com/vantis-cpa/30min" class="btn-primary" target="_blank" rel="noopener noreferrer">Schedule a Consultation</a>
            <a href="#contact" class="btn-secondary">Send Us an Email</a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Right-side image panel -->
  <div class="hero-image-panel" aria-hidden="true">
    <img src="/images/globe-hero.jpg" alt="" loading="eager">
  </div>
</section>
```

- [ ] **Step 2: Build and preview hero**

```bash
hugo server
```
Navigate to `http://localhost:1313`. Confirm: lavender gradient hero, two-column layout, glassmorphism contact box, globe image on right (desktop), compass emoji watermark.

- [ ] **Step 3: Commit**

```bash
git add layouts/index.html
git commit -m "feat: homepage hero — lavender gradient, globe image panel, glassmorphism contact box"
```

---

### Task 7: Replace Services section with 4 separate service sections

**Files:**
- Modify: `layouts/index.html` (remove old services section, add 4 new sections)

- [ ] **Step 1: Remove the old combined services section**

In `layouts/index.html`, find and delete the entire block from:
```html
<!-- ═══════════════════ DIFFERENTIATORS ═══════════════════ -->
<!-- ═══════════════════ SERVICES ═══════════════════ -->
<section class="services" id="services" ...>
```
through the closing:
```html
</section>

<!-- ═══════════════════ INDUSTRIES ═══════════════════ -->
```

Replace that entire removed block with the four new service sections plus the industries comment:

```html
<!-- ═══════════════════ INDIVIDUAL TAX ═══════════════════ -->
<section class="svc-section individual-tax" id="individual-tax" aria-labelledby="individual-tax-heading">
  <div class="svc-layout">
    <div class="svc-content fade-up">
      <p class="section-label">👤 Individual Tax</p>
      <h2 class="section-heading" id="individual-tax-heading">Individual Tax</h2>
      <p class="section-subheading">Tax returns and year-round planning for individuals with income from W-2, 1099, K-1, investments, and rental properties.</p>
      <ul class="svc-list">
        <li><span>📋</span> 1040 Preparation</li>
        <li><span>📋</span> Quarterly Estimates</li>
        <li><span>📋</span> State Returns</li>
        <li><span>📋</span> IRS Notices and Amended Returns</li>
        <li><span>📋</span> Year-Round Tax Planning</li>
      </ul>
      <a href="/services/individual-tax/" class="svc-learn-more">Learn More →</a>
    </div>
    <div class="svc-image-panel" aria-hidden="true">
      <img src="/images/card-local.jpg" alt="" loading="lazy">
    </div>
  </div>
</section>

<!-- ═══════════════════ BUSINESS TAX ═══════════════════ -->
<section class="svc-section business-tax" id="business-tax" aria-labelledby="business-tax-heading">
  <div class="svc-layout">
    <div class="svc-image-panel" aria-hidden="true">
      <img src="/images/card-founders.jpg" alt="" loading="lazy">
    </div>
    <div class="svc-content fade-up">
      <p class="section-label">🏢 Business Tax</p>
      <h2 class="section-heading" id="business-tax-heading">Business Tax</h2>
      <p class="section-subheading">Business tax returns, entity structure, and year-round tax planning for sole proprietors, partnerships, S-corps, and C-corps.</p>
      <ul class="svc-list">
        <li><span>📊</span> S-Corp &amp; Partnership Returns</li>
        <li><span>📊</span> Entity Structure &amp; Elections</li>
        <li><span>📊</span> Owner Compensation Planning</li>
        <li><span>📊</span> Prior-Year &amp; Catch-Up Filing</li>
        <li><span>📊</span> Year-Round Tax Management</li>
      </ul>
      <a href="/services/business-tax/" class="svc-learn-more">Learn More →</a>
    </div>
  </div>
</section>

<!-- ═══════════════════ INTERNATIONAL TAX ═══════════════════ -->
<section class="svc-section international-tax" id="international-tax" aria-labelledby="international-tax-heading">
  <div class="intl-watermark" aria-hidden="true">🌐</div>
  <div class="svc-layout">
    <div class="svc-content fade-up">
      <p class="section-label">🌐 International Tax</p>
      <h2 class="section-heading" id="international-tax-heading">International Tax</h2>
      <p class="section-subheading">Cross-border tax is where the code gets technical and the penalties get serious. We structure it to minimize what you owe worldwide.</p>
      <ul class="svc-list">
        <li><span>✈️</span> U.S. Persons with Foreign Assets</li>
        <li><span>✈️</span> U.S. Expats Abroad</li>
        <li><span>✈️</span> Pre-Immigration</li>
        <li><span>✈️</span> Foreign Investors and Real Estate Owners</li>
        <li><span>✈️</span> U.S. Foreign-Owned Subsidiaries</li>
      </ul>
      <a href="/services/international-tax" class="svc-learn-more">Learn More →</a>
    </div>
    <div class="svc-image-panel" aria-hidden="true">
      <img src="/images/card-expats.jpg" alt="" loading="lazy">
    </div>
  </div>
</section>

<!-- ═══════════════════ FULL OFFICE ═══════════════════ -->
<section class="full-office" id="full-office" aria-labelledby="full-office-heading">
  <div class="full-office-bg" aria-hidden="true"></div>
  <div class="container">
    <div class="fade-up">
      <p class="section-label">🗂️ Full Office</p>
      <h2 class="section-heading" id="full-office-heading">Full Office</h2>
      <p class="section-subheading">Everything your business needs beyond tax — handled under one roof.</p>
    </div>
    <div class="full-office-grid">
      <div class="full-office-item fade-up fade-up-d1">
        <div class="full-office-item-title">📚 Bookkeeping</div>
        <p class="full-office-item-desc">Clean books, monthly reconciliations, and financial reporting. QuickBooks setup and management.</p>
        <p class="full-office-item-tools">QuickBooks · Monthly Reconcile · Cash Flow</p>
        <a href="/services/full-suite/bookkeeping" class="full-office-learn-more">Learn More →</a>
      </div>
      <div class="full-office-item fade-up fade-up-d2">
        <div class="full-office-item-title">💳 Payroll</div>
        <p class="full-office-item-desc">Complete payroll setup and ongoing management. We handle all filings, deposits, and compliance.</p>
        <p class="full-office-item-tools">Gusto · W-2 &amp; 1099 · State Filings</p>
        <a href="/services/full-suite/payroll" class="full-office-learn-more">Learn More →</a>
      </div>
      <div class="full-office-item fade-up fade-up-d3">
        <div class="full-office-item-title">🧾 Sales Tax</div>
        <p class="full-office-item-desc">Florida sales tax filings, nexus compliance, and timely remittances. Fully handled.</p>
        <p class="full-office-item-tools">Florida Sales Tax · Nexus · Filings</p>
        <a href="/services/full-suite/sales-tax" class="full-office-learn-more">Learn More →</a>
      </div>
      <div class="full-office-item fade-up fade-up-d4">
        <div class="full-office-item-title">🗃️ Back Office</div>
        <p class="full-office-item-desc">Business mailing, banking setup, LLC renewals, and registered agent service. We obtain EINs and ITINs.</p>
        <p class="full-office-item-tools">LLC Renewals · Registered Agent · EIN/ITIN</p>
        <a href="/services/full-suite/back-office" class="full-office-learn-more">Learn More →</a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ INDUSTRIES ═══════════════════ -->
```

- [ ] **Step 2: Build and preview all four service sections**

```bash
hugo server
```
Navigate to `http://localhost:1313`. Scroll through the four sections. Confirm:
- Individual Tax: white bg, blue accent, `card-local.jpg` right panel, 👤 emoji
- Business Tax: dark gray `#1a1a2e`, orange accent, `card-founders.jpg` left panel, 🏢 emoji
- International Tax: dark navy `#0d1117`, green accent, `card-expats.jpg` right panel, 🌐 watermark
- Full Office: white bg, 4-column grid with `card-realestate.jpg` background, item emojis

- [ ] **Step 3: Commit**

```bash
git add layouts/index.html
git commit -m "feat: homepage 4 service sections — individual/business/international/full-office with images and emojis"
```

---

### Task 8: Update Who We Serve section

**Files:**
- Modify: `layouts/index.html` (industries section)

The industries section JavaScript populates the grid dynamically. The key changes are: new dark gray background (handled by CSS in Task 5), new class names for the card layout to include thumbnails, and updated color classes.

- [ ] **Step 1: Replace the industries section in `layouts/index.html`**

Find:
```html
<!-- ═══════════════════ INDUSTRIES ═══════════════════ -->
<section class="industries" id="industries" aria-labelledby="industries-heading">
```
through the closing `</section>` of the industries section.

Replace with:
```html
<!-- ═══════════════════ WHO WE SERVE ═══════════════════ -->
<section class="industries" id="industries" aria-labelledby="industries-heading">
  <div class="container">
    <div class="industries-header">
      <p class="section-label fade-up">🤝 Who We Serve</p>
      <h2 class="section-heading fade-up fade-up-d1" id="industries-heading">Focused Expertise</h2>
      <p class="section-subheading fade-up fade-up-d2">Choose the tax lane that matches the complexity of your situation.</p>
    </div>
    <div class="industries-grid" id="industries-grid">
      <!-- Populated by JavaScript below -->
    </div>

    <script>
      const industryThumbnails = {
        'individuals': '/images/card-local.jpg',
        'business': '/images/card-founders.jpg',
        'international': '/images/card-expats.jpg',
        'real-estate': '/images/card-realestate.jpg',
        'expats': '/images/card-expats.jpg',
        'inbound': '/images/card-inbound.jpg',
      };

      const industriesGrid = document.getElementById('industries-grid');

      Object.values(practicesData).forEach((practice, index) => {
        const delayClass = `fade-up-d${index + 1}`;
        const wrapper = document.createElement('div');
        wrapper.className = 'industry-card-wrapper';

        const card = document.createElement('a');
        card.href = practice.href;
        card.className = `industry-card fade-up ${delayClass}`;
        card.setAttribute('aria-label', practice.name.replace(/&/g, 'and'));

        // Left side: thumbnail + title group
        const rowLeft = document.createElement('div');
        rowLeft.className = 'industry-row-left';

        // Thumbnail
        const thumbKey = Object.keys(industryThumbnails).find(k => practice.href && practice.href.includes(k));
        if (thumbKey) {
          const thumb = document.createElement('img');
          thumb.src = industryThumbnails[thumbKey];
          thumb.alt = '';
          thumb.className = 'industry-thumbnail';
          thumb.loading = 'lazy';
          rowLeft.appendChild(thumb);
        }

        const titleGroup = document.createElement('div');
        titleGroup.className = 'industry-title-group';

        if (practice.category) {
          const categoryLabel = document.createElement('span');
          categoryLabel.className = 'industry-category-label';
          categoryLabel.textContent = practice.category;
          titleGroup.appendChild(categoryLabel);
        }

        const title = document.createElement('h3');
        title.className = 'industry-title';
        title.textContent = practice.name.replace(/&/g, 'and');
        titleGroup.appendChild(title);

        const description = document.createElement('p');
        description.className = 'industry-description';
        description.textContent = practice.description;
        titleGroup.appendChild(description);

        rowLeft.appendChild(titleGroup);
        card.appendChild(rowLeft);

        const learnMore = document.createElement('span');
        learnMore.className = 'industry-learn-more';
        learnMore.textContent = 'Learn More →';
        card.appendChild(learnMore);

        wrapper.appendChild(card);
        industriesGrid.appendChild(wrapper);
      });
    </script>
  </div>
</section>
```

- [ ] **Step 2: Build and preview**

```bash
hugo server
```
Scroll to Who We Serve. Confirm: dark gray background, blue accents, small circle thumbnails beside each industry row, 🤝 label.

- [ ] **Step 3: Commit**

```bash
git add layouts/index.html
git commit -m "feat: who we serve — dark gray, blue accent, circle thumbnails"
```

---

### Task 9: Update Process + What to Bring section

**Files:**
- Modify: `layouts/index.html` (process-bring-section)

- [ ] **Step 1: Replace the Process + What to Bring section in `layouts/index.html`**

Find the section from `<!-- ═══════════════════ PROCESS + WHAT TO BRING ═══════════════════ -->` through its closing `</section>`.

Replace with:
```html
<!-- ═══════════════════ PROCESS + WHAT TO BRING ═══════════════════ -->
<section class="process-bring-section" aria-labelledby="process-heading">
  <div class="container">
    <div class="process-bring-grid">

      <!-- Our Process -->
      <div>
        <p class="section-label fade-up">🔄 How It Works</p>
        <h2 class="section-heading fade-up fade-up-d1" id="process-heading">Our Process</h2>
        <p class="section-subheading fade-up fade-up-d2">Three straightforward steps from your first message to a fully managed tax strategy.</p>

        <div class="process-steps">
          <div class="process-step fade-up fade-up-d1">
            <div class="process-step-left">
              <div class="process-step-badge">01</div>
              <div class="process-step-connector"></div>
            </div>
            <div class="process-step-content">
              <span class="process-step-pill">30 minutes · No charge</span>
              <div class="process-step-title">Discovery Call</div>
              <div class="process-step-desc">We learn about your situation, your entity structure, cross-border exposure, and goals. You learn how we work and what to expect.</div>
            </div>
          </div>

          <div class="process-step fade-up fade-up-d2">
            <div class="process-step-left">
              <div class="process-step-badge">02</div>
              <div class="process-step-connector"></div>
            </div>
            <div class="process-step-content">
              <span class="process-step-pill">Scoped engagement</span>
              <div class="process-step-title">Technical Analysis</div>
              <div class="process-step-desc">We review your documents, prior returns, and structure. We identify obligations, risks, and opportunities, then present a clear scope and fixed fee. Before anything starts, you'll receive a formal engagement letter outlining exactly what's covered.</div>
            </div>
          </div>

          <div class="process-step fade-up fade-up-d3">
            <div class="process-step-left">
              <div class="process-step-badge">03</div>
            </div>
            <div class="process-step-content">
              <span class="process-step-pill">Ongoing advisory</span>
              <div class="process-step-title">Proactive Strategy &amp; Filing</div>
              <div class="process-step-desc">We execute the plan, file accurately, and stay in your corner year-round, flagging opportunities before they pass.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- What to Bring -->
      <div class="fade-up fade-up-d2">
        <p class="section-label">📋 First Meeting Checklist</p>
        <h2 class="section-heading fade-up-d1">What to Bring</h2>
        <p class="bring-intro">The more context you arrive with, the more we can give you in 30 minutes.</p>

        <div class="bring-list">
          <div class="bring-item">
            <div class="bring-check">✓</div>
            <span class="bring-text">Prior Year Tax Returns</span>
          </div>
          <div class="bring-item">
            <div class="bring-check">✓</div>
            <span class="bring-text">Financial Statements</span>
          </div>
          <div class="bring-item">
            <div class="bring-check">✓</div>
            <span class="bring-text">IRS Notices or Open Correspondence</span>
          </div>
          <div class="bring-item">
            <div class="bring-check">✓</div>
            <span class="bring-text">Tax Documents: W-2s, 1099s, K-1s</span>
          </div>
          <div class="bring-item">
            <div class="bring-check">✓</div>
            <span class="bring-text">Entity Documents: Articles, Operating Agreement</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Build and preview**

```bash
hugo server
```
Confirm: dark navy `#0d1117` background, green `#4EC9B0` accents on badges and connectors, light text, 🔄 and 📋 emojis.

- [ ] **Step 3: Commit**

```bash
git add layouts/index.html
git commit -m "feat: process section — dark navy, green accents, process badges"
```

---

### Task 10: Update Contact section (glassmorphism)

**Files:**
- Modify: `layouts/index.html` (contact section)

- [ ] **Step 1: Replace the contact section in `layouts/index.html`**

Find the section from `<!-- ═══════════════════ CONTACT ═══════════════════ -->` through its closing `</section>`.

Replace with:
```html
<!-- ═══════════════════ CONTACT ═══════════════════ -->
<section class="contact" id="contact" aria-labelledby="contact-heading">
  <div class="container">
    <div class="contact-header">
      <p class="section-label fade-up">📬 Next Steps</p>
      <h2 class="section-heading fade-up fade-up-d1" id="contact-heading">Get in Touch</h2>
      <p class="section-subheading fade-up fade-up-d2">Tell us about your situation — we'll let you know how we can help</p>
    </div>
    <div class="contact-grid">

      <div class="fade-up fade-up-d1">
        <div class="contact-form-panel">
          <form id="contactForm" action="https://formspree.io/f/mkopvwja" method="POST" novalidate>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" autocomplete="name" required />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" autocomplete="email" required />
            </div>
            <div class="form-group">
              <label for="message">Provide a Brief Background</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div class="form-submit-row">
              <button type="submit" class="form-submit">Send Us an Email</button>
            </div>
          </form>
          <div class="form-success" id="formSuccess" role="alert">
            <strong>Application received.</strong> We'll review your information and be in touch. Thank you for considering us.
          </div>
        </div>
      </div>

      <div class="contact-right-column">
        <div class="contact-info fade-up fade-up-d2">
          <h3 class="contact-info-title">Reach us directly</h3>

          <div class="contact-item">
            <div class="contact-item-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.1 12.73 19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div>
              <p class="contact-item-label">Phone</p>
              <p class="contact-item-value"><a href="tel:+13055635551">(305) 563-5551</a></p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-item-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <p class="contact-item-label">Email</p>
              <p class="contact-item-value"><a href="mailto:info@vantiscpa.com">info@vantiscpa.com</a></p>
            </div>
          </div>
        </div>

        <div class="contact-calendar fade-up fade-up-d3">
          <h3 class="contact-calendar-title">Schedule a Meeting</h3>
          <p class="contact-calendar-desc">Book a 30-minute consultation</p>
          <a href="https://cal.com/vantis-cpa/30min" class="btn-primary" target="_blank" rel="noopener noreferrer">Open Calendar</a>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Build and preview**

```bash
hugo server
```
Confirm: dark gray `#1a1a2e` background, frosted glass form panel, silver accents, 📬 emoji.

- [ ] **Step 3: Commit**

```bash
git add layouts/index.html
git commit -m "feat: contact — glassmorphism form panel, dark gray bg, silver accent"
```

---

### Task 11: Update FAQ section

**Files:**
- Modify: `layouts/index.html` (FAQ section)

- [ ] **Step 1: Replace the FAQ section in `layouts/index.html`**

Find `<!-- ═══════════════════ FAQ ═══════════════════ -->` through the section's closing `</section>`.

Replace with:
```html
<!-- ═══════════════════ FAQ ═══════════════════ -->
<section class="faq-section" id="faq">
  <div class="faq-wrapper">
    <div class="faq-left">
      <div class="faq-accent-bar"></div>
      <h2 class="faq-title">💬 Your Questions Answered</h2>
      <p class="faq-subtitle">We believe in transparency. Everything you need to know about how we work, what we charge, and why we're different.</p>
    </div>

    <div class="faq-right">
      <div class="faq-items">
        <div class="faq-item open">
          <div class="faq-question">
            <span class="faq-q-text"><span aria-hidden="true">❓</span> What makes Vantis different from other CPAs?</span>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">We combine proactive tax strategy with responsive communication. Rather than waiting for tax season, we work year-round to optimize your situation and flag opportunities before they pass.</div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span class="faq-q-text"><span aria-hidden="true">❓</span> How do you avoid surprise billing?</span>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">We quote all engagements upfront and discuss scope before starting work. No hidden fees, no surprise invoices. What we quote is what you pay.</div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span class="faq-q-text"><span aria-hidden="true">❓</span> Why get proactive tax advice instead of just filing?</span>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">Reactive filing costs more over time. Proactive strategy finds deductions and structures you'd otherwise miss, turning tax planning into a profit center rather than an expense.</div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span class="faq-q-text"><span aria-hidden="true">❓</span> What services do you offer beyond tax filing?</span>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">We offer bookkeeping, back-office services, payroll processing, sales tax management, and full-service accounting. One firm for all your business needs.</div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span class="faq-q-text"><span aria-hidden="true">❓</span> What happens in our first consultation?</span>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">We'll discuss your business, current situation, and biggest challenges. You'll get a clear sense of how we work and whether we're a good fit. No pressure, no sales pitch.</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Build and preview FAQ**

```bash
hugo server
```
Confirm: white background, `#f0f4ff` lavender-blue left panel, blue accent bar, ❓ emojis on questions, 💬 heading, blue toggle icons.

- [ ] **Step 3: Commit**

```bash
git add layouts/index.html
git commit -m "feat: FAQ — white bg, lavender-blue left panel, blue accents, emojis"
```

---

### Task 12: Update inner pages (service-css.html)

**Files:**
- Modify: `layouts/partials/service-css.html`

- [ ] **Step 1: In `layouts/partials/service-css.html`, replace the `body` rule to remove gridlines**

Find:
```css
body {
  font-family: 'Inter', sans-serif;
  color: var(--text-dark);
  background-color: #ffffff;
  background-image:
    linear-gradient(rgba(180,180,180,0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(180,180,180,0.4) 1px, transparent 1px);
  background-size: 64px 20px;
  background-attachment: fixed;
  line-height: 1.6;
  padding-top: var(--nav-height);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
```

Replace with:
```css
body {
  font-family: 'Inter', sans-serif;
  color: var(--text-dark);
  background-color: #ffffff;
  line-height: 1.6;
  padding-top: var(--nav-height);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 2: Remove the `body::before` overlay block**

Find and delete:
```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(160deg, rgba(255,255,255,0.3) 0%, rgba(237,238,247,0.4) 100%);
  pointer-events: none;
  z-index: 0;
}
```

- [ ] **Step 3: Update `.hero` in service-css.html to remove floating card**

Find:
```css
.hero {
  background: radial-gradient(circle at center, #edeef7 0%, #fff 72%);
  padding: 80px 48px;
  text-align: center;
  position: relative;
  z-index: 1;
  margin: 31px 25px 22px 22px;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  opacity: 0.98;
}
```

Replace with:
```css
.hero {
  background: linear-gradient(135deg, #f8f7ff 0%, #edeef7 60%, #e8e6f5 100%);
  padding: 80px 48px;
  text-align: center;
  position: relative;
  z-index: 1;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;
}
```

- [ ] **Step 4: Update inner page section variables to use new palette**

Find the `:root` block at the top of service-css.html:
```css
:root {
  --primary-dark: #062215;
  --primary: #15482E;
  --primary-darkest: #041f12;
  --accent: #3a8b5f;
  --bg: #e8e8e8;
  --bg-alt: #e0e0e0;
  --text-dark: #0f2818;
  --text-mid: #3d6b52;
  --navy: #062215;
  --navy-dark: #041f12;
  --card-radius: 14px;
  --nav-height: 68px;
}
```

Replace with:
```css
:root {
  --primary-dark: #1a1a2e;
  --primary: #569CD6;
  --primary-darkest: #0d1117;
  --accent: #4EC9B0;
  --bg: #f8f7ff;
  --bg-alt: #edeef7;
  --text-dark: #1a1a2e;
  --text-mid: #4a5568;
  --navy: #1a1a2e;
  --navy-dark: #0d1117;
  --card-radius: 8px;
  --nav-height: 68px;
}
```

- [ ] **Step 5: Build and check an inner page**

```bash
hugo server
```
Navigate to `http://localhost:1313/services/individual-tax/`. Confirm: no gridlines, no floating card on hero, updated colors.

- [ ] **Step 6: Commit**

```bash
git add layouts/partials/service-css.html
git commit -m "feat: inner pages — remove gridlines, remove floating card hero, update palette"
```

---

### Task 13: Final build, verify, and cleanup

**Files:**
- No new changes — verification only

- [ ] **Step 1: Full production build**

```bash
hugo
```
Expected: 0 errors, 0 warnings about missing files.

- [ ] **Step 2: Start dev server and do a full page walkthrough**

```bash
hugo server
```

Check each of the following at `http://localhost:1313`:

| Page | What to verify |
|---|---|
| Home `/` | Nav glassmorphism, hero gradient + image, 4 service sections with correct colors + images + emojis, Who We Serve dark gray, Process dark navy, Contact glassmorphism form, FAQ white + lavender panel, footer dark gray |
| `/services/individual-tax/` | No gridlines, no floating card, blue accent, correct colors |
| `/services/business-tax/` | No gridlines, orange accent |
| `/services/international-tax/` | No gridlines, green accent |
| Any resource page `/resources/` | No gridlines, updated colors |

- [ ] **Step 3: Check mobile (resize browser to 375px width)**

Confirm:
- Nav collapses to hamburger, mobile menu opens with dark gray bg
- Hero goes single-column, brand name wraps cleanly
- All 4 service sections go full-width (image panels hidden)
- Full Office grid goes 2-column then 1-column at 480px
- FAQ stacks vertically

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete website redesign — VS Code palette, glassmorphism, 4 service sections, full-width layout"
```
