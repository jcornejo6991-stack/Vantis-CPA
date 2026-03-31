# Redesign "What Sets Us Apart" & "About the Firm" Sections

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely redesign the "What Sets Us Apart" and "About the Firm" sections to break away from the repetitive card/block pattern and create typography-driven, visually distinct layouts.

**Architecture:** Replace grid-based card layouts with centered, narrative-driven designs. "What Sets Us Apart" becomes a 4-stage numbered journey (text-only). "About the Firm" becomes values statement + narrative + culture statements (no cards). Both sections use bold typography, generous whitespace, and center alignment to stand out from the rest of the page.

**Tech Stack:** HTML5, CSS3 (Flexbox), semantic markup

---

## Task 1: Replace "What Sets Us Apart" HTML with 4-Stage Journey

**Files:**
- Modify: `index.html` (lines ~1734-1768)

- [ ] **Step 1: Locate the differentiators section**

Search for `<section class="differentiators"` in index.html. Find the complete section from opening tag to closing `</section>` (approximately lines 1734-1768).

- [ ] **Step 2: Replace entire differentiators HTML**

Delete the entire section and replace with:

```html
<section class="differentiators" aria-labelledby="diff-heading">
  <div class="container">
    <div class="diff-header">
      <p class="section-label fade-up">What sets us apart</p>
      <h2 class="section-heading fade-up fade-up-d1" id="diff-heading">Why clients choose Vantis CPA</h2>
    </div>

    <div class="diff-journey">
      <div class="diff-stage fade-up fade-up-d1">
        <div class="diff-stage-number">1</div>
        <h3 class="diff-stage-title">We respond immediately</h3>
        <p class="diff-stage-text">Email back within hours. Phone answered. First consultation booked without friction. We're accessible.</p>
      </div>

      <div class="diff-stage fade-up fade-up-d2">
        <div class="diff-stage-number">2</div>
        <h3 class="diff-stage-title">We understand deeply</h3>
        <p class="diff-stage-text">We read your file. Ask hard questions. Build a complete picture of your situation, not just this year's numbers.</p>
      </div>

      <div class="diff-stage fade-up fade-up-d3">
        <div class="diff-stage-number">3</div>
        <h3 class="diff-stage-title">We optimize aggressively</h3>
        <p class="diff-stage-text">We find every loophole, every strategy, every dollar saved within the law. Tax planning happens <em>before</em> year-end, not after.</p>
      </div>

      <div class="diff-stage fade-up fade-up-d4">
        <div class="diff-stage-number">4</div>
        <h3 class="diff-stage-title">We handle the scary stuff</h3>
        <p class="diff-stage-text">IRS notice? We deal with it. Foreign filing requirements? We manage it. Government compliance? That's our job, not yours.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Commit changes**

```bash
git add index.html
git commit -m "feat: redesign 'What Sets Us Apart' section as 4-stage numbered journey"
```

---

## Task 2: Add CSS for "What Sets Us Apart" Journey Styling

**Files:**
- Modify: `index.html` (CSS section, lines ~653-700)

- [ ] **Step 1: Locate CSS for .differentiators**

Find the `.differentiators` CSS rule in the style section (approximately line 653).

- [ ] **Step 2: Update .differentiators base styling**

Find and replace the existing `.differentiators` rule:

```css
.differentiators { padding: 80px 0; background: #fff; margin: 22px 22px; border-radius: 20px; box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1); }
```

With:

```css
.differentiators { padding: 80px 0; background: #fff; margin: 22px 22px; border-radius: 20px; box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1); }

.diff-journey { display: flex; flex-direction: column; gap: 60px; max-width: 800px; margin: 60px auto 0; }

.diff-stage { text-align: center; }

.diff-stage-number { font-size: 48px; font-weight: 700; color: var(--primary); margin-bottom: 16px; }

.diff-stage-title { font-size: 24px; font-weight: 600; color: var(--text-dark); margin-bottom: 12px; }

.diff-stage-text { font-size: 16px; color: var(--text-mid); line-height: 1.6; }
```

- [ ] **Step 3: Commit changes**

```bash
git add index.html
git commit -m "feat: add CSS styling for 4-stage journey layout (centered, numbered, generous spacing)"
```

---

## Task 3: Replace "About the Firm" HTML with Values + Narrative + Culture

**Files:**
- Modify: `index.html` (lines ~1771-1820 approximately)

- [ ] **Step 1: Locate the about section**

Search for `<section class="about"` in index.html. Find complete section from opening tag through the closing `</section>`.

- [ ] **Step 2: Replace entire about HTML**

Delete and replace with:

```html
<section class="about" id="about" aria-labelledby="about-heading">
  <div class="container">
    <div class="about-header">
      <p class="section-label fade-up">The firm</p>
      <h2 class="section-heading fade-up fade-up-d1" id="about-heading">About the Firm</h2>
    </div>

    <div class="about-values fade-up fade-up-d2">
      <div class="about-value">
        <p class="about-value-label"><strong>Aggressive.</strong></p>
        <p class="about-value-desc">We optimize every dollar legally.</p>
      </div>
      <div class="about-value">
        <p class="about-value-label"><strong>Protective.</strong></p>
        <p class="about-value-desc">Your information is secured, confidential, safe.</p>
      </div>
      <div class="about-value">
        <p class="about-value-label"><strong>Modern.</strong></p>
        <p class="about-value-desc">We use tech, know the tax code, think forward.</p>
      </div>
    </div>

    <div class="about-narrative fade-up fade-up-d3">
      <p>Vantis CPA is a boutique CPA firm licensed in Florida, built around a simple premise: <strong>clients deserve a real advisor who knows their file.</strong> Not a call center, not a seasonal preparer, not a firm where you're handed off to a junior the moment you ask a question. When you work with us, you have a direct relationship with your CPA — someone who has read your returns, knows your structure, and can answer your questions the same day.</p>

      <p>Our practice spans individual and business clients in over 20 countries. We work with US expats navigating foreign income exclusions and treaty positions, Latin American families with US investments, founders and investors building entities and managing equity, and South Florida businesses who need a complete back-office without the overhead of a large firm. We are fully bilingual in English and Spanish, and our team is built for international complexity.</p>

      <p>Our philosophy is proactive advisory — not just compliance. Anyone can file a return. <strong>We're here to call you before the problem happens, not after.</strong> That means quarterly check-ins, year-end planning sessions, and the kind of institutional knowledge about your situation that only comes from a long-term relationship. If you've ever been surprised by a tax bill or ignored by your accountant, we were built for exactly that situation.</p>
    </div>

    <div class="about-culture fade-up fade-up-d4">
      <div class="culture-statement">Quick to respond. Fast to solve.</div>
      <div class="culture-statement">Strategic. Technical. No surprises.</div>
      <div class="culture-statement">Your taxes, handled.</div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Commit changes**

```bash
git add index.html
git commit -m "feat: redesign 'About the Firm' section with values trio, narrative, and culture statements"
```

---

## Task 4: Add CSS for "About the Firm" New Layout

**Files:**
- Modify: `index.html` (CSS section, find existing .about rules around line 945)

- [ ] **Step 1: Find existing .about CSS**

Locate the `.about` rule in the CSS section.

- [ ] **Step 2: Keep base .about styling, add new classes**

Keep the existing `.about` rule as-is, then add these new rules after it:

```css
.about-values { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; margin-bottom: 60px; max-width: 900px; margin-left: auto; margin-right: auto; }

.about-value { text-align: center; }

.about-value-label { font-size: 20px; font-weight: 700; color: var(--primary); margin-bottom: 8px; }

.about-value-desc { font-size: 16px; color: var(--text-mid); line-height: 1.6; }

.about-narrative { max-width: 800px; margin: 0 auto 60px; }

.about-narrative p { font-size: 16px; color: var(--text-mid); line-height: 1.75; margin-bottom: 20px; }

.about-narrative p:last-child { margin-bottom: 0; }

.about-narrative strong { color: var(--text-dark); font-weight: 600; }

.about-culture { display: flex; flex-direction: column; gap: 24px; max-width: 700px; margin: 0 auto; text-align: center; padding-top: 40px; border-top: 1px solid #e8e8e8; }

.culture-statement { font-size: 18px; font-weight: 600; color: var(--text-dark); }
```

- [ ] **Step 3: Update media queries for about-values**

Find the tablet media query (approximately line 1230) and add:

```css
.about-values { grid-template-columns: 1fr; }
```

- [ ] **Step 4: Commit changes**

```bash
git add index.html
git commit -m "feat: add CSS for about section layout (values grid, narrative, culture statements)"
```

---

## Task 5: Remove Old CSS Rules (Cleanup)

**Files:**
- Modify: `index.html` (CSS section)

- [ ] **Step 1: Find and remove old .diff-card, .diff-grid, .diff-icon rules**

Search for `.diff-card`, `.diff-grid`, `.diff-icon`, `.diff-title`, `.diff-text` in the CSS section. Delete these entire rules since they're no longer used.

- [ ] **Step 2: Find and remove old .trust-cards, .trust-card rules**

Search for `.trust-cards`, `.trust-card`, `.trust-card-icon`, `.trust-card-title`, `.trust-card-text` in CSS section. Delete these entire rules since they're no longer used.

- [ ] **Step 3: Find and remove old .about-grid, .about-text rules**

Search for `.about-grid`, `.about-text` in CSS section. Delete these entire rules since the about layout structure has changed.

- [ ] **Step 4: Commit cleanup**

```bash
git add index.html
git commit -m "chore: remove unused CSS rules for old card layouts"
```

---

## Task 6: Test and Verify Visual Changes

**Files:**
- No modifications (testing only)

- [ ] **Step 1: Open index.html in browser**

Open the website in a browser and navigate to the "What Sets Us Apart" section.

Verify:
- Four numbered stages (1, 2, 3, 4) display vertically with large numbers
- Text is centered
- Generous spacing between each stage (~60px)
- Headlines and body text are clear and readable
- No card borders or backgrounds

- [ ] **Step 2: Scroll to "About the Firm" section**

Verify:
- "Aggressive. Protective. Modern." appears at top in large, bold type (3-column grid)
- Each value has a short description below it
- Narrative text displays below values section
- Three culture statements appear at bottom (centered, stacked vertically)
- Bottom statements have a subtle line separator above them

- [ ] **Step 3: Check responsive behavior**

Resize browser to mobile (375px width):
- Verify "What Sets Us Apart" stages still stack vertically
- Verify "About the Firm" values grid becomes single column (1fr)
- Verify text remains readable and properly spaced

- [ ] **Step 4: Compare to rest of page**

Visually confirm both sections look distinctly different from:
- Services section (which has cards with icons)
- Industries section (which has cards)
- Other sections with block layouts

Sections should feel typography-driven and minimalist compared to other parts of page.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "test: verify redesigned sections display correctly and match design vision"
```

---

## Success Criteria

✓ "What Sets Us Apart" displays as 4-stage numbered journey (no cards, no icons, text-only)
✓ "About the Firm" opens with 3-value statement, includes narrative, closes with 3 culture statements
✓ Both sections are center-aligned, typography-driven, with generous whitespace
✓ Both sections look visually distinct from rest of page (no card patterns, no blocks)
✓ Responsive behavior works on mobile, tablet, desktop
✓ No unused CSS rules remain
✓ All changes committed with clear commit messages
