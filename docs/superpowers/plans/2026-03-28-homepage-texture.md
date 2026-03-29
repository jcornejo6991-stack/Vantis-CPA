# Homepage Visual Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a crosshatch grid page background with floating card sections, dark navy nav, and per-section color/texture treatments to `index.html` — making the page visually richer while staying predominantly white/light.

**Architecture:** All CSS lives in the `<style>` block inside `index.html`. Changes are additive — new rules override existing section backgrounds and add new structural styles (floating cards). No JS changes. No new files.

**Tech Stack:** Plain HTML/CSS. Browser verification only (open file in browser).

---

## Files

- **Modify:** `C:\Users\jcorn\Desktop\Claude\JC CPA LLC\website\index.html`
  - `:root` — add new CSS variables for card shadow and gap
  - `body` — crosshatch grid background, fixed attachment
  - `nav` — dark navy background, white text/links
  - All section elements — floating card treatment (margin, radius, shadow)
  - Per-section bg overrides (hero, differentiators, services, industries, portal, footer)

---

## Task 1: Add crosshatch background to page body

**Files:**
- Modify: `index.html` — `:root` and `body` CSS rules in the `<style>` block

- [ ] **Step 1: Add CSS variables for card system**

In the `:root` block (after the existing variables), add:

```css
--card-shadow: 0 2px 16px rgba(30,37,86,0.09), 0 1px 4px rgba(30,37,86,0.05);
--card-gap: 8px;
--page-bg: #eff0f7;
```

- [ ] **Step 2: Apply crosshatch background to body**

Find the existing `body` rule and add/update these properties:

```css
body {
  background-color: var(--page-bg);
  background-image:
    linear-gradient(rgba(114,116,158,0.13) 1px, transparent 1px),
    linear-gradient(90deg, rgba(114,116,158,0.13) 1px, transparent 1px);
  background-size: 22px 22px;
  background-attachment: fixed;
}
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in browser. The page background (visible in any margin areas or between sections) should show a faint lavender grid. Scroll — the grid should stay fixed while content moves.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "style: add fixed crosshatch grid background to homepage body"
```

---

## Task 2: Convert nav to dark navy

**Files:**
- Modify: `index.html` — `nav` and related rules

- [ ] **Step 1: Update nav background and border**

Find the `nav` CSS rule (look for `background: #fff` or `background: white`) and update:

```css
nav {
  background: var(--navy);
  border-bottom: none;
}
```

- [ ] **Step 2: Update nav logo color**

Find `.nav-brand`, `.nav-wordmark`, or equivalent logo text selector and update to white:

```css
.nav-brand, .nav-wordmark, .nav-gv-mark {
  color: #fff;
}
```

- [ ] **Step 3: Update nav link colors**

Find `.nav-links a` or `.nav-links span` and update:

```css
.nav-links a, .nav-links li a {
  color: #a0a5cc;
}
.nav-links a:hover {
  color: #fff;
}
```

- [ ] **Step 4: Update nav pill (Client Portal button)**

Find `.nav-pill` and update for dark background:

```css
.nav-pill {
  background: rgba(255,255,255,0.13);
  color: #fff !important;
  border: 1px solid rgba(255,255,255,0.22);
}
.nav-pill:hover {
  background: rgba(255,255,255,0.22);
}
```

- [ ] **Step 5: Update hamburger menu icon color (mobile)**

Find `.hamburger span` and update:

```css
.hamburger span {
  background: #fff;
}
```

- [ ] **Step 6: Verify in browser**

Nav should be dark navy with white logo, muted lavender links that brighten on hover, and a white-outlined pill button. Mobile hamburger icon should be white.

- [ ] **Step 7: Commit**

```bash
git add index.html
git commit -m "style: invert homepage nav to dark navy"
```

---

## Task 3: Make sections float as cards over the background

**Files:**
- Modify: `index.html` — section-level CSS rules

- [ ] **Step 1: Add floating card base rule**

Add this new rule after the existing section rules:

```css
.hero,
.differentiators,
.services,
.industries,
.about,
.client-resources,
.contact {
  margin: 0 var(--card-gap) var(--card-gap);
  border-radius: 14px;
  box-shadow: var(--card-shadow);
  overflow: hidden;
}
```

> Note: Check the actual class names used on each `<section>` in `index.html` — they may differ slightly (e.g. `section.hero`, `#services`, etc.). Match exactly.

- [ ] **Step 2: Remove bottom margin from nav (flush to top)**

Ensure the `nav` element has no bottom gap with the first section:

```css
nav {
  /* existing rules... */
  margin-bottom: 0;
  border-radius: 0; /* nav is flush, not a card */
}
```

- [ ] **Step 3: Handle footer separately**

The footer should also float but flush to the bottom:

```css
footer {
  margin: 0 var(--card-gap) var(--card-gap);
  border-radius: 14px;
  box-shadow: var(--card-shadow);
  overflow: hidden;
}
```

- [ ] **Step 4: Verify in browser**

Scroll through the page. Each section should appear as a card with slightly rounded corners and a soft shadow. The crosshatch bg should peek through the 8px gaps between cards.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "style: sections styled as floating cards over textured background"
```

---

## Task 4: Hero — semi-transparent so grid shows through

**Files:**
- Modify: `index.html` — `.hero` or `section.hero` CSS

- [ ] **Step 1: Update hero background**

Find the hero section background CSS and replace with:

```css
.hero {
  background-color: rgba(255,255,255,0.88);
  background-image: linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.97) 100%);
  position: relative;
}
```

This makes the top of the hero slightly transparent (grid bleeds through faintly) and fades to solid white at the bottom so text is always readable.

- [ ] **Step 2: Verify in browser**

At the top of the hero, the grid should be just barely visible through the white. It should fade out before reaching the headline text. Should feel like frosted glass, not distracting.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "style: hero gets semi-transparent bg so grid shows through"
```

---

## Task 5: Per-section accent treatments

**Files:**
- Modify: `index.html` — section-specific CSS rules

- [ ] **Step 1: Differentiators section — accent-tinted cards**

Find the card/item elements inside the differentiators section (likely `.diff-card`, `.differentiator-card`, or similar) and add:

```css
.diff-card {
  background: #edeef7;
  border-top: 2px solid var(--accent);
}
```

- [ ] **Step 2: Services section — left accent stripe + gradient**

Find the services section background rule and update:

```css
.services {
  background: linear-gradient(to right, #f0f1f8, #fff);
  border-left: 4px solid var(--accent);
}
```

- [ ] **Step 3: Industries section — soft tinted gradient**

```css
.industries {
  background: linear-gradient(160deg, #fff 0%, #edeef7 100%);
}
```

- [ ] **Step 4: About section — keep light, add subtle gradient**

```css
.about {
  background: linear-gradient(to bottom, var(--bg) 0%, #fff 100%);
}
```

- [ ] **Step 5: Contact section — soft gradient**

```css
.contact {
  background: linear-gradient(160deg, var(--bg-alt) 0%, #edeef7 100%);
}
```

- [ ] **Step 6: Verify in browser**

- Differentiator cards should have a lavender tint and a colored top border
- Services section should have a visible left purple stripe and fade from light lavender to white
- Industries should have a soft lavender wash in the bottom-right
- About and Contact should look subtly warmer/more colorful than pure gray

- [ ] **Step 7: Commit**

```bash
git add index.html
git commit -m "style: per-section accent color and gradient treatments"
```

---

## Task 6: Enrich dark sections (portal + footer) with grain + gradient

**Files:**
- Modify: `index.html` — `.client-resources` and `footer` CSS

- [ ] **Step 1: Add noise grain mixin as a utility**

Add this CSS utility class after the existing dark section rules:

```css
.grain-overlay {
  position: relative;
  overflow: hidden;
}
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  z-index: 0;
}
.grain-overlay > * {
  position: relative;
  z-index: 1;
}
```

- [ ] **Step 2: Add `grain-overlay` class to dark sections in HTML**

In the HTML, find the client-resources section and footer element and add the class:

```html
<section class="client-resources grain-overlay"> ... </section>
<footer class="grain-overlay"> ... </footer>
```

- [ ] **Step 3: Update dark section gradients**

```css
.client-resources {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
}

footer {
  background: linear-gradient(160deg, var(--navy) 0%, #0e1230 100%);
}
```

- [ ] **Step 4: Verify in browser**

Dark sections should feel deeper and richer — not flat navy. There should be a very faint texture (grain) visible if you look closely. Nothing jarring.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "style: dark sections get richer gradient and grain texture"
```

---

## Final Verification

- [ ] Open `index.html` in browser and scroll through the full page
- [ ] Crosshatch grid visible in gaps between cards and faintly in hero
- [ ] Nav is dark navy with white text
- [ ] Each section has clearly rounded corners and floats with a shadow
- [ ] Differentiator cards have lavender tint + colored top border
- [ ] Services section has left accent stripe
- [ ] Industries section has soft lavender gradient
- [ ] Dark sections feel rich and textured
- [ ] Nothing looks "over the top" — it should feel premium, not busy
- [ ] Mobile: check hamburger nav works and looks right on narrow viewport
