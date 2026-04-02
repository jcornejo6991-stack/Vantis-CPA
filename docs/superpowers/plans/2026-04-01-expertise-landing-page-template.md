# Expertise Landing Page Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a reusable landing page template for Foreign Business and Investors expertise page (/inbound/index.html) with navigation, hero section, two-column layout (contact form + content), and footer.

**Architecture:** Single HTML file that mirrors the Berkowitz-style layout with navigation and footer matching the home page, a minimal hero section, and a two-column body with contact form on the left and link-rich content on the right. No floating elements, no card styles—clean and minimal design using existing color scheme.

**Tech Stack:** HTML5, CSS (inline styles matching home page), vanilla JavaScript for form handling (minimal)

---

## File Structure

**Files to Create:**
- `/inbound/index.html` — Foreign Business and Investors landing page (complete standalone file)

**Files to Reference (read-only):**
- `index.html` — Home page (copy nav/footer structure and color scheme)

---

## Tasks

### Task 1: Create HTML skeleton with nav and footer

**Files:**
- Create: `/inbound/index.html`

- [ ] **Step 1: Create the basic HTML file structure**

Create `/inbound/index.html` with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Foreign Business and Investors | Vantis CPA</title>
  <meta name="description" content="Vantis CPA provides comprehensive tax and accounting services for foreign businesses and investors entering or operating in the U.S." />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

  <style>
    :root {
      --primary-dark: #062215;
      --primary: #15482E;
      --primary-darkest: #052818;
      --accent: #3a8b5f;
      --accent-light: #e8e8e8;
      --bg: #e8e8e8;
      --bg-alt: #e0e0e0;
      --text-dark: #0f2818;
      --text-mid: #3d6b52;
      --navy: #052818;
      --navy-dark: #031810;
      --card-radius: 14px;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      color: var(--text-dark);
      background: #fff;
      line-height: 1.6;
    }

    a {
      color: var(--primary);
      text-decoration: none;
    }

    a:hover {
      color: var(--accent);
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <!-- Navigation will be inserted here -->
  <!-- Hero section will be inserted here -->
  <!-- Main content will be inserted here -->
  <!-- Footer will be inserted here -->
</body>
</html>
```

- [ ] **Step 2: Copy navigation HTML from home page**

From the home page (`index.html`), find the `<nav>` element and copy it exactly into the placeholder `<!-- Navigation will be inserted here -->` in the new file. This should include the full nav structure with logo, links, hamburger menu, and all associated HTML.

Expected: Navigation appears at top of page matching home page exactly.

- [ ] **Step 3: Copy footer HTML from home page**

From the home page (`index.html`), find the `<footer>` element and copy it exactly into the placeholder `<!-- Footer will be inserted here -->` in the new file. This should include the full footer structure with links, contact info, and all associated HTML.

Expected: Footer appears at bottom of page matching home page exactly.

- [ ] **Step 4: Commit**

```bash
git add /inbound/index.html
git commit -m "feat: create Foreign Business and Investors landing page skeleton with nav and footer"
```

---

### Task 2: Add hero section

**Files:**
- Modify: `/inbound/index.html`

- [ ] **Step 1: Add hero section styles to the stylesheet**

In the `<style>` block, add after the `a:hover` rule:

```css
/* Hero Section */
.hero {
  background: linear-gradient(90deg, #fff 0%, #edeef7 100%);
  padding: 120px 20px;
  text-align: center;
  margin-bottom: 60px;
}

.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  color: var(--navy);
  margin: 0;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 20px;
    margin-bottom: 40px;
  }

  .hero h1 {
    font-size: 32px;
  }
}
```

- [ ] **Step 2: Add hero HTML to the page**

Replace the `<!-- Hero section will be inserted here -->` placeholder with:

```html
<section class="hero">
  <h1>Foreign Business and Investors</h1>
</section>
```

- [ ] **Step 3: Verify hero section displays correctly**

Open the page in a browser and confirm:
- Hero section has a light gradient background
- Title "Foreign Business and Investors" is centered and large
- Section has appropriate padding

Expected: Hero section displays with centered title and gradient background.

- [ ] **Step 4: Commit**

```bash
git add /inbound/index.html
git commit -m "feat: add hero section with title"
```

---

### Task 3: Add two-column body layout structure

**Files:**
- Modify: `/inbound/index.html`

- [ ] **Step 1: Add styles for main content container and two-column layout**

In the `<style>` block, add before the media query:

```css
/* Main Content Container */
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px 20px;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 40px;
}

.left-column {
  display: flex;
  flex-direction: column;
}

.right-column {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .main-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px 60px 20px;
  }
}
```

- [ ] **Step 2: Add main container HTML**

Replace the `<!-- Main content will be inserted here -->` placeholder with:

```html
<div class="main-container">
  <div class="left-column">
    <!-- Contact form will be added here -->
  </div>
  <div class="right-column">
    <!-- Main content will be added here -->
  </div>
</div>
```

- [ ] **Step 3: Verify layout structure**

Open the page in a browser and confirm:
- Page shows two columns on desktop (30% left, 70% right)
- On mobile (resize to 768px or less), columns stack vertically
- Spacing/gaps look appropriate

Expected: Two-column layout displays correctly on desktop and mobile.

- [ ] **Step 4: Commit**

```bash
git add /inbound/index.html
git commit -m "feat: add two-column layout structure"
```

---

### Task 4: Create and style contact form (left column)

**Files:**
- Modify: `/inbound/index.html`

- [ ] **Step 1: Add form styles to stylesheet**

In the `<style>` block, add before the media query:

```css
/* Contact Form */
.contact-form {
  background: #fff;
  padding: 30px;
  border-radius: var(--card-radius);
  border: 1px solid #e8e8e8;
}

.contact-form h3 {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 6px;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: var(--text-dark);
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(58, 139, 95, 0.1);
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.form-submit {
  padding: 12px 24px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.form-submit:hover {
  background: var(--accent);
}

/* Contact Info Block */
.contact-info {
  margin-top: 30px;
  padding: 20px 0;
  border-top: 1px solid #e8e8e8;
  font-size: 14px;
}

.contact-info-item {
  margin-bottom: 12px;
  color: var(--text-mid);
}

.contact-info-item strong {
  display: block;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.contact-info-item a {
  color: var(--primary);
}

.contact-info-item a:hover {
  color: var(--accent);
}
```

- [ ] **Step 2: Add contact form HTML**

Replace the `<!-- Contact form will be added here -->` placeholder in the left column with:

```html
<form class="contact-form" action="#" method="POST">
  <h3>Get Started</h3>

  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" required />
  </div>

  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required />
  </div>

  <div class="form-group">
    <label for="background">Tell us about your situation *</label>
    <textarea id="background" name="background" required></textarea>
  </div>

  <button type="submit" class="form-submit">Send Inquiry</button>

  <div class="contact-info">
    <div class="contact-info-item">
      <strong>Phone</strong>
      <a href="tel:+13055635551">(305) 563-5551</a>
    </div>
    <div class="contact-info-item">
      <strong>Email</strong>
      <a href="mailto:info@vantiscpa.com">info@vantiscpa.com</a>
    </div>
    <div class="contact-info-item">
      <strong>Hours</strong>
      <span>Monday – Friday, 9am – 5pm EST</span>
    </div>
  </div>
</form>
```

- [ ] **Step 3: Verify form displays correctly**

Open the page in a browser and confirm:
- Form has three input fields (Name, Email, Background)
- Submit button is visible and styled
- Contact info block appears below form
- Form inputs have focus states (blue outline when clicked)

Expected: Form displays with all fields, submit button, and contact info.

- [ ] **Step 4: Commit**

```bash
git add /inbound/index.html
git commit -m "feat: add contact form with styling"
```

---

### Task 5: Add main content introduction (right column)

**Files:**
- Modify: `/inbound/index.html`

- [ ] **Step 1: Add styles for intro section**

In the `<style>` block, add before the media query:

```css
/* Main Content */
.intro-text {
  font-size: 15px;
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e8e8e8;
}

.intro-text strong {
  color: var(--text-dark);
  font-weight: 600;
}
```

- [ ] **Step 2: Add intro HTML to right column**

Replace the `<!-- Main content will be added here -->` placeholder in the right column with:

```html
<div class="intro-text">
  <p>We offer comprehensive services to help foreign businesses and investors enter the U.S. smoothly, protecting your assets, minimizing risk, and managing a lower effective tax rate.</p>
</div>
```

- [ ] **Step 3: Verify intro displays correctly**

Open the page in a browser and confirm:
- Text appears in the right column
- Text has appropriate padding and styling
- Border-bottom separates intro from content below

Expected: Intro paragraph displays with proper formatting and spacing.

- [ ] **Step 4: Commit**

```bash
git add /inbound/index.html
git commit -m "feat: add intro text to main content area"
```

---

### Task 6: Add specializations section with links

**Files:**
- Modify: `/inbound/index.html`

- [ ] **Step 1: Add styles for content sections and lists**

In the `<style>` block, add before the media query:

```css
/* Content Sections */
.content-section {
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 16px;
}

.section-list {
  list-style: none;
  padding-left: 0;
}

.section-list li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-mid);
}

.section-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

.section-list a {
  color: var(--primary);
  font-weight: 500;
  transition: color 0.2s;
}

.section-list a:hover {
  color: var(--accent);
  text-decoration: underline;
}
```

- [ ] **Step 2: Add specializations section HTML**

After the closing `</div>` of the intro-text, add:

```html
<div class="content-section">
  <h3 class="section-title">Specializations</h3>
  <ul class="section-list">
    <li><a href="/inbound/us-subsidiaries">U.S. Subsidiaries</a></li>
    <li><a href="/inbound/foreign-corporations">Foreign Corporations</a></li>
    <li><a href="/inbound/form-5472">Form 5472</a></li>
    <li><a href="/inbound/transfer-pricing">Transfer Pricing</a></li>
    <li><a href="/inbound/firpta-compliance">FIRPTA Compliance</a></li>
    <li><a href="/inbound/e-visa-compliance">E-1/E-2 Visa Compliance</a></li>
    <li><a href="/inbound/inbound-investment">Inbound Investment Planning</a></li>
  </ul>
</div>
```

- [ ] **Step 3: Verify specializations section displays**

Open the page in a browser and confirm:
- "Specializations" heading appears
- Bulleted list shows all 7 items
- Each item is a blue, clickable link
- Bullets are green dots

Expected: Specializations section displays with bullet-pointed links.

- [ ] **Step 4: Commit**

```bash
git add /inbound/index.html
git commit -m "feat: add specializations section with links"
```

---

### Task 7: Add services section with links

**Files:**
- Modify: `/inbound/index.html`

- [ ] **Step 1: Add services section HTML**

After the closing `</div>` of the specializations content-section, add:

```html
<div class="content-section">
  <h3 class="section-title">Services We Provide</h3>
  <ul class="section-list">
    <li><a href="/services/tax-strategy-consulting">Tax Strategy & Consulting</a></li>
    <li><a href="/services/tax-compliance">Tax Compliance</a></li>
    <li><a href="/services/international-tax">International Tax</a></li>
    <li><a href="/services/back-office">Back Office</a></li>
    <li><a href="/services/bookkeeping-reporting">Bookkeeping & Reporting</a></li>
    <li><a href="/services/payroll-sales-tax">Payroll & Sales Tax</a></li>
  </ul>
</div>
```

- [ ] **Step 2: Verify services section displays**

Open the page in a browser and confirm:
- "Services We Provide" heading appears below specializations
- Bulleted list shows all 6 services
- Each item is a blue, clickable link
- Spacing between sections is consistent

Expected: Services section displays with bullet-pointed links.

- [ ] **Step 3: Commit**

```bash
git add /inbound/index.html
git commit -m "feat: add services section with links to all service pages"
```

---

### Task 8: Add other audiences section with links

**Files:**
- Modify: `/inbound/index.html`

- [ ] **Step 1: Add other audiences section HTML**

After the closing `</div>` of the services content-section, add:

```html
<div class="content-section">
  <h3 class="section-title">Other Audiences We Serve</h3>
  <ul class="section-list">
    <li><a href="/local/">Individuals and Local Business</a></li>
    <li><a href="/founders/">Startups and Online Business</a></li>
    <li><a href="/realestate/">Real Estate Owners</a></li>
    <li><a href="/outbound/">International U.S. Citizens</a></li>
    <li><a href="/expats/">U.S. Expats Abroad</a></li>
  </ul>
</div>
```

- [ ] **Step 2: Verify other audiences section displays**

Open the page in a browser and confirm:
- "Other Audiences We Serve" heading appears below services
- Bulleted list shows all 5 other expertise areas
- Each item is a blue, clickable link
- All three sections (Specializations, Services, Other Audiences) have consistent styling and spacing

Expected: Other audiences section displays with bullet-pointed links.

- [ ] **Step 3: Commit**

```bash
git add /inbound/index.html
git commit -m "feat: add other audiences section with links to expertise pages"
```

---

### Task 9: Test responsive design and fix any issues

**Files:**
- Modify: `/inbound/index.html` (if needed)

- [ ] **Step 1: Test on desktop (1200px+)**

Using browser developer tools:
- Resize window to 1400px wide
- Verify:
  - Left column (form) is ~30% width, right column (content) is ~70%
  - All text is readable with no overflow
  - Form fields have appropriate spacing
  - All links are clickable and visible
  - Navigation matches home page

Expected: Desktop layout displays correctly with proper two-column spacing.

- [ ] **Step 2: Test on tablet (768px - 1024px)**

Using browser developer tools:
- Resize window to 900px wide
- Verify:
  - Still shows two columns
  - Content is readable without horizontal scrolling
  - Form fields are accessible

Expected: Tablet layout displays correctly.

- [ ] **Step 3: Test on mobile (< 768px)**

Using browser developer tools:
- Resize window to 375px wide
- Verify:
  - Columns stack vertically (left column above right)
  - Form takes full width
  - Content takes full width
  - All text and form fields are readable
  - Navigation collapses to hamburger menu (inherited from home page)
  - Touch targets are adequate (form fields, buttons)

Expected: Mobile layout stacks properly with full-width sections.

- [ ] **Step 4: Test form interaction**

- Click on each form field to verify focus state (blue outline appears)
- Type text in Name, Email, and Background fields
- Verify submit button shows hover state (color change) when hovering
- Check that form doesn't submit (action="#" is placeholder)

Expected: Form fields are interactive and show proper focus/hover states.

- [ ] **Step 5: Test all links**

Open browser console and verify no 404 errors when page loads. Click on sample links:
- One specialization link (should attempt to navigate to /inbound/...)
- One service link (should attempt to navigate to /services/...)
- One audience link (should attempt to navigate to another expertise page)
- Contact links (phone, email)

Expected: All links are properly formatted and attempt correct navigation.

- [ ] **Step 6: Commit (if changes needed)**

If any responsive styling fixes were made:

```bash
git add /inbound/index.html
git commit -m "fix: adjust responsive styling for tablet and mobile"
```

If no changes were needed:

```bash
git commit --allow-empty -m "test: verified responsive design on all screen sizes"
```

---

### Task 10: Final verification and cleanup

**Files:**
- Verify: `/inbound/index.html`

- [ ] **Step 1: Verify all requirements from spec are met**

Check the spec (`docs/superpowers/specs/2026-04-01-expertise-landing-page-template-design.md`) against the page:

- [ ] Navigation matches home page exactly ✓
- [ ] Hero section has solid color/gradient background ✓
- [ ] Hero has centered "Foreign Business and Investors" title ✓
- [ ] Left column has contact form with Name, Email, Background ✓
- [ ] Left column has contact info (phone, email, hours) ✓
- [ ] Right column has intro paragraph ✓
- [ ] Right column has Specializations section with 7 items/links ✓
- [ ] Right column has Services section with 6 items/links ✓
- [ ] Right column has Other Audiences section with 5 items/links ✓
- [ ] Footer matches home page exactly ✓
- [ ] No floating elements or card styles ✓
- [ ] Color scheme matches home page ✓
- [ ] Responsive design works on mobile/tablet/desktop ✓

Expected: All spec requirements are implemented.

- [ ] **Step 2: Verify code quality**

Review `/inbound/index.html`:
- All HTML tags are properly closed ✓
- No console errors when page loads ✓
- Indentation is consistent ✓
- Meta tags and title are appropriate ✓
- CSS is organized logically ✓
- No inline JavaScript (form handling is placeholder) ✓

Expected: Code is clean and follows standards.

- [ ] **Step 3: Take a final screenshot**

Open the page in a browser at normal desktop size and take a screenshot showing:
- Full page layout with all sections visible
- Good to save as reference for other expertise page templates

Expected: Visual confirmation that template is complete.

- [ ] **Step 4: Final commit**

```bash
git add /inbound/index.html
git commit -m "feat: complete Foreign Business and Investors landing page template"
```

---

## Summary

This plan creates a complete, reusable expertise landing page template with:
- Navigation and footer matching the home page
- Minimal hero section with centered title
- Two-column responsive layout
- Contact form on left with name, email, background, and contact info
- Content-rich right column with intro, specializations, services, and other audiences
- All internal linking to create a connected site structure
- Responsive design for mobile, tablet, and desktop

The template is ready to be duplicated and modified for the other 5 expertise pages and can eventually be adapted for service pages.
