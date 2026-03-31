# Aspirational Imagery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add three aspirational lifestyle photography images to the Vantis CPA website at strategic conversion moments (after hero, after clients, before footer) with proper HTML/CSS integration, accessibility, and responsive behavior.

**Architecture:** Three image sections inserted into index.html at key narrative moments. Each section uses CSS Grid or Flexbox for responsive sizing, lazy loading for performance, and semantic HTML with alt text for accessibility. Images stored in `/images/` directory with optimized file sizes.

**Tech Stack:** HTML5, CSS3 (Grid/Flexbox), semantic markup, native lazy loading, image optimization tools

---

## File Structure

**Files to create:**
- `/images/aspiration-1-potential.jpg` (after hero image)
- `/images/aspiration-2-peer-group.jpg` (after clients image)
- `/images/aspiration-3-opportunity.jpg` (before footer image)

**Files to modify:**
- `index.html` — Add three image sections with HTML and CSS

---

## Task 1: Source and Prepare Image Assets

**Files:**
- Create: `/images/` directory
- Add: `/images/aspiration-1-potential.jpg`, `/images/aspiration-2-peer-group.jpg`, `/images/aspiration-3-opportunity.jpg`

- [ ] **Step 1: Create images directory**

Run:
```bash
mkdir -p images
```

- [ ] **Step 2: Source Image 1 — "The Potential"**

Find a high-end lifestyle photo (from Unsplash, Pexels, Shutterstock, or commission) showing:
- A successful executive or founder in a moment of power/decision
- Boardroom, high-level meeting, or strategic moment context
- Professional, composed, in-control demeanor
- Wealth signals without being ostentatious
- Suggested terms to search: "executive boardroom decision", "founder strategy moment", "business leader", "power moment"

Save as: `images/aspiration-1-potential.jpg`

Expected dimensions: Minimum 1200px wide (will be full-width on larger screens, responsive on mobile)

- [ ] **Step 3: Source Image 2 — "The Peer Group"**

Find a high-end lifestyle photo showing:
- Multiple successful business people or a group setting
- Collaborative, peer-level atmosphere (not hierarchical)
- High-end office, luxury setting, or sophisticated context
- Global/international feel optional but beneficial
- Emphasizes caliber and sophistication
- Suggested terms to search: "business executives meeting", "entrepreneurial team", "high-end office", "professional collaboration", "business leaders"

Save as: `images/aspiration-2-peer-group.jpg`

Expected dimensions: Minimum 1200px wide

- [ ] **Step 4: Source Image 3 — "The Opportunity"**

Find a high-end lifestyle photo showing:
- A moment of clarity, decision, or seizing opportunity
- Could be handshake, signing documents, breakthrough moment
- Positive emotion (triumph, relief, clarity)
- Feels inevitable and consequential
- High authenticity preferred for this image
- Suggested terms to search: "business deal closing", "handshake agreement", "contract signing", "breakthrough moment", "decision moment"

Save as: `images/aspiration-3-opportunity.jpg`

Expected dimensions: Minimum 1200px wide

- [ ] **Step 5: Optimize images for web**

For each image, optimize using ImageOptim, TinyPNG, or similar:
- Target file size: 200-400KB per image (for web)
- Format: JPG for photography (better compression than PNG)
- Resolution: 2x density for Retina displays (e.g., 2400px wide × appropriate height)
- Quality: 80-85 JPEG quality (balance between quality and file size)

Verify file sizes:
```bash
ls -lh images/aspiration-*.jpg
```

Expected: Each file should be under 500KB

---

## Task 2: Add Image 1 Section (After Hero) — "The Potential"

**Files:**
- Modify: `index.html` (add HTML section and CSS)

- [ ] **Step 1: Locate hero section in index.html**

Search for the closing `</section>` tag of the hero section. The hero section is around line 400-500 and looks like:

```html
<section class="hero">
  <div class="hero-inner">
    <!-- hero content -->
  </div>
</section>
```

Note the line number of the closing `</section>` tag. This is where Image 1 will be inserted after.

- [ ] **Step 2: Add Image 1 HTML section after hero**

After the hero closing `</section>` tag, insert:

```html
    <!-- ─── IMAGE 1: THE POTENTIAL ─── -->
    <section class="aspiration-image aspiration-image-1">
      <div class="container">
        <img
          src="images/aspiration-1-potential.jpg"
          alt="Executive reviewing strategic expansion plans in a high-level boardroom setting, representing the potential and success possible with Vantis CPA."
          loading="lazy"
          class="aspiration-img"
        />
      </div>
    </section>
```

Verify it's placed immediately after the hero section closing tag.

- [ ] **Step 3: Add CSS for Image 1 section**

Find the CSS section in `index.html` (around line 67-1200). Add this CSS after the hero styling:

```css
    /* ─── ASPIRATION IMAGES ─── */
    .aspiration-image {
      padding: 60px 0;
      background: #ffffff;
      margin: 22px 22px;
      border-radius: 20px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .aspiration-image .container {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0;
    }

    .aspiration-img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      border-radius: 12px;
    }

    .aspiration-image-1 {
      padding: 80px 0;
    }
```

- [ ] **Step 4: Test Image 1 locally**

Open `index.html` in browser and scroll to the hero section. Verify:
- Image appears immediately after hero
- Image is responsive (scales with browser width)
- No layout shifts or distortion
- Aspect ratio is maintained (16:9)
- Image loads with proper rounded corners

- [ ] **Step 5: Commit**

```bash
git add index.html images/aspiration-1-potential.jpg
git commit -m "feat: add aspirational image 1 (the potential) after hero section"
```

---

## Task 3: Add Image 2 Section (After Clients/About) — "The Peer Group"

**Files:**
- Modify: `index.html` (add HTML section and update CSS)

- [ ] **Step 1: Locate about/client-resources section in index.html**

Search for the closing `</section>` tag of the `.client-resources` section. This section starts with `class="client-resources"` and contains existing client logos and testimonials. Note the line number of its closing tag.

- [ ] **Step 2: Add Image 2 HTML section after client-resources**

After the client-resources closing `</section>` tag, insert:

```html
    <!-- ─── IMAGE 2: THE PEER GROUP ─── -->
    <section class="aspiration-image aspiration-image-2">
      <div class="container">
        <img
          src="images/aspiration-2-peer-group.jpg"
          alt="Group of successful business executives and entrepreneurs in a high-end collaborative setting, representing the caliber of peers you'll work alongside with Vantis CPA."
          loading="lazy"
          class="aspiration-img"
        />
      </div>
    </section>
```

Verify placement is immediately after the client-resources closing tag.

- [ ] **Step 3: Add CSS styling for Image 2**

Add this CSS after the Image 1 CSS (around line where you added aspiration-image-1):

```css
    .aspiration-image-2 {
      padding: 60px 0;
      background: linear-gradient(135deg, rgba(248, 248, 248, 0.8) 0%, rgba(240, 240, 240, 0.8) 100%);
    }
```

- [ ] **Step 4: Test Image 2 locally**

Open `index.html` and scroll to the client-resources section. Verify:
- Image appears immediately after client-resources
- Background gradient is subtle and non-intrusive
- Image is properly responsive
- Aspect ratio (16:9) is maintained
- No layout shifting

- [ ] **Step 5: Commit**

```bash
git add index.html images/aspiration-2-peer-group.jpg
git commit -m "feat: add aspirational image 2 (the peer group) after client section"
```

---

## Task 4: Add Image 3 Section (Before Footer) — "The Opportunity"

**Files:**
- Modify: `index.html` (add HTML section and update CSS)

- [ ] **Step 1: Locate contact section in index.html**

Search for `class="contact"` section. This section contains the intake form and contact details. Note the line number of its closing `</section>` tag.

- [ ] **Step 2: Add Image 3 HTML section between contact and footer**

After the contact section closing `</section>` tag, but BEFORE the footer `<footer>` tag, insert:

```html
    <!-- ─── IMAGE 3: THE OPPORTUNITY ─── -->
    <section class="aspiration-image aspiration-image-3">
      <div class="container">
        <img
          src="images/aspiration-3-opportunity.jpg"
          alt="Two professionals sealing a significant business agreement, representing the opportunity and exclusive partnership available with Vantis CPA."
          loading="lazy"
          class="aspiration-img"
        />
      </div>
    </section>
```

Verify this is placed between contact section and footer, not inside the footer.

- [ ] **Step 3: Add CSS styling for Image 3**

Add this CSS after Image 2 styling:

```css
    .aspiration-image-3 {
      padding: 80px 0;
      background: #ffffff;
      margin: 22px 22px;
      border-radius: 20px;
    }
```

- [ ] **Step 4: Test Image 3 locally**

Open `index.html` and scroll to the contact form. Verify:
- Image appears immediately after form submission button
- Image has impact and creates moment before footer
- Responsive and properly scaled
- 16:9 aspect ratio maintained
- Footer is not affected or pushed down awkwardly

- [ ] **Step 5: Commit**

```bash
git add index.html images/aspiration-3-opportunity.jpg
git commit -m "feat: add aspirational image 3 (the opportunity) before footer"
```

---

## Task 5: Responsive Testing and Optimization

**Files:**
- Modify: `index.html` (if responsive adjustments needed)

- [ ] **Step 1: Test on mobile (375px width)**

Open browser DevTools and set viewport to mobile (375px × 812px). Scroll through entire page and verify:
- All three images display properly
- No horizontal overflow or scrolling issues
- Images scale appropriately for small screen
- Aspect ratio is maintained (images don't stretch or distort)
- Rounded corners are visible
- Text readability is not affected

- [ ] **Step 2: Test on tablet (768px width)**

Set viewport to tablet (768px × 1024px). Verify:
- Images display at appropriate size (not too large, not squeezed)
- Spacing and padding look balanced
- All three images render correctly
- No layout issues

- [ ] **Step 3: Test on desktop (1280px+ width)**

Set viewport to desktop (1280px+). Verify:
- Images display at full quality
- Aspect ratio is perfect (16:9)
- Max-width constraint (1600px container) is respected
- Image doesn't overflow edges
- Margin/padding spacing looks intentional (22px on sides)

- [ ] **Step 4: Test image lazy loading**

Open DevTools Network tab. Scroll page slowly:
- Verify that images with `loading="lazy"` are NOT loaded until they come into viewport
- Image 1 (after hero) loads immediately or very soon
- Image 2 (after clients) loads when scrolling past clients section
- Image 3 (before footer) loads when scrolling near form
- File sizes are under 500KB each

- [ ] **Step 5: Verify accessibility**

Open DevTools Accessibility tab or use screen reader simulation:
- All images have alt text
- Alt text is descriptive (at least 50+ characters)
- Alt text describes the aspirational moment, not just "image"

Verify alt text for each:
- Image 1: "Executive reviewing strategic expansion plans..." ✓
- Image 2: "Group of successful business executives..." ✓
- Image 3: "Two professionals sealing a significant business agreement..." ✓

- [ ] **Step 6: Commit final optimizations**

```bash
git add index.html
git commit -m "test: verify responsive behavior and accessibility for aspirational images"
```

---

## Task 6: Final Verification and Performance Check

**Files:**
- No modifications (verification only)

- [ ] **Step 1: Check page load performance**

Open DevTools Lighthouse tab. Run audit with throttling off:
- Verify First Contentful Paint (FCP) is under 2.5s
- Verify Largest Contentful Paint (LCP) is under 4s
- If images are causing slow load, reduce file size or use WebP format with JPG fallback

- [ ] **Step 2: Verify visual hierarchy**

Look at full page scrolled. Check:
- No image overwhelms the content
- Each image enhances the narrative arc (potential → peer group → opportunity)
- Spacing around images feels intentional and balanced
- Images don't obscure critical CTA buttons or forms

- [ ] **Step 3: Cross-browser testing**

Test in Chrome, Firefox, Safari (if available):
- Images render correctly in all browsers
- Lazy loading works consistently
- Aspect ratio maintained
- Alt text accessible

- [ ] **Step 4: Review against spec requirements**

Check spec at `docs/superpowers/specs/2026-03-29-aspirational-imagery-design.md`:

- [ ] Image 1 positioned after hero ✓
- [ ] Image 2 positioned after clients ✓
- [ ] Image 3 positioned before footer ✓
- [ ] Images trigger appropriate aspirations ✓
- [ ] Responsive behavior verified ✓
- [ ] Alt text complete and descriptive ✓
- [ ] Load times acceptable ✓
- [ ] No placeholder images (actual images sourced) ✓

- [ ] **Step 5: Final commit**

```bash
git log --oneline -6
# Verify commits show:
# 1. aspiration image 3 (before footer)
# 2. aspiration image 2 (after clients)
# 3. aspiration image 1 (after hero)
# 4. responsive testing and optimization
```

---

## Success Criteria Verification

After all tasks complete, verify against spec success criteria:

✓ Images trigger appropriate aspirations at each stage
✓ Photography feels exclusive and premium (high-end sourced)
✓ Images align with mimetic theory (show what clients want to become)
✓ Images positioned strategically before key conversion moments
✓ Images don't overshadow copy or clutter page
✓ Load times acceptable with optimization
✓ Responsive behavior verified across all breakpoints
✓ Accessibility complete with descriptive alt text

---

## Notes for Implementation

- **Image sourcing:** Recommend spending time finding the right images. Quality > quantity. One premium image beats three generic ones.
- **Aspect ratio:** All images use 16:9 (common for web). If source images differ, use `object-fit: cover` to maintain ratio without distortion.
- **Performance:** JPG format recommended for photography. Target 200-400KB per image after optimization.
- **Future enhancement:** Consider WebP format with JPG fallback for better compression (browser support is now good).
- **User feedback:** After launch, monitor if images resonate. Are visitors spending more time on page? Do they convert more? Adjust if needed.
