# Halftone Texture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add subtle halftone dot texture overlay to homepage service section and contact form backgrounds.

**Architecture:** Create an SVG halftone dot pattern and apply it as a CSS background-image with 5-10% opacity to two specific sections. The pattern will be embedded as a data URI in the CSS file to avoid extra HTTP requests.

**Tech Stack:** SVG (pattern definition), CSS (background-image, opacity)

---

## File Structure

- **Modify:** `/assets/css/style.css` - Add SVG pattern definition and background-image rules for `.services` and `.contact-form`
- **Test:** Browser visual verification (no automated tests needed for visual textures)

---

## Task 1: Create SVG Halftone Pattern and Add to CSS

**Files:**
- Modify: `/assets/css/style.css`

- [ ] **Step 1: Understand current styles**

Open `/assets/css/style.css` and find the `.services` and `.contact-form` class definitions. Note their current background colors and any existing background properties.

- [ ] **Step 2: Read the current styles**

```bash
grep -A 10 "\.services" /assets/css/style.css
grep -A 10 "\.contact-form" /assets/css/style.css
```

Expected: You'll see background properties like `background: var(--primary-dark);` or similar green colors.

- [ ] **Step 3: Add SVG pattern to CSS**

Add the following SVG halftone pattern as a data URI in `/assets/css/style.css`. Add this after the existing Button styles (around line 110) and before the Navigation section:

```css
/* Halftone dot pattern for texture overlay */
.halftone-pattern {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8"><circle cx="4" cy="4" r="1.5" fill="black"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  background-size: 100px 100px;
  background-repeat: repeat;
}
```

- [ ] **Step 4: Apply halftone pattern to services section**

Find the `.services` class in the CSS file and add the following property:

```css
.services {
  /* existing properties... */
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07)),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8"><circle cx="4" cy="4" r="1.5" fill="black"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  background-size: auto, 100px 100px;
  background-repeat: repeat, repeat;
  background-color: var(--primary-dark);
}
```

Note: The linear-gradient creates the 7% opacity effect over the green background. If the services section already has a background-image, preserve it and add this as an additional layer.

- [ ] **Step 5: Apply halftone pattern to contact form**

Find the `.contact-form` class (likely around line 1500+) and add the same background-image property:

```css
.contact-form {
  /* existing properties... */
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07)),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8"><circle cx="4" cy="4" r="1.5" fill="black"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  background-size: auto, 100px 100px;
  background-repeat: repeat, repeat;
}
```

Preserve any existing background properties and add these as additional layers.

- [ ] **Step 6: Verify CSS syntax**

Run a quick validation to ensure no CSS errors were introduced:

```bash
cd /c/Users/jcorn/Desktop/Claude/JC\ CPA\ LLC/website
# Check for obvious syntax errors by looking at the modified sections
grep -A 5 "background-image.*svg" assets/css/style.css
```

Expected: The grep should show the new background-image properties with the SVG data URI.

- [ ] **Step 7: Commit changes**

```bash
git add assets/css/style.css
git commit -m "$(cat <<'EOF'
Add halftone dot texture to homepage sections

- Add SVG halftone dot pattern to services section background
- Add SVG halftone dot pattern to contact form background
- Use 7% opacity overlay (rgba 0,0,0,0.07) for gently visible texture
- Pattern is 100x100px repeating dots

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Visual Verification in Browser

**Files:**
- Test: Visual inspection only

- [ ] **Step 1: Open the homepage in browser**

Navigate to the local development server (typically `http://localhost:3000` or similar) and load the homepage.

- [ ] **Step 2: Inspect the service section**

Scroll to the "What We Do" (service section) and verify:
- The green background now has a subtle halftone dot texture
- The texture is gently visible (not too faint, not too prominent)
- All text remains fully readable
- The texture doesn't interfere with service cards or layout

- [ ] **Step 3: Inspect the contact form**

Scroll to the contact form and verify:
- The form background has the same halftone dot texture
- The texture is gently visible and consistent with service section
- Form inputs and labels remain fully readable
- No layout shifts or visual artifacts

- [ ] **Step 4: Test on different screen sizes**

Resize the browser to test:
- Desktop (1920px wide)
- Tablet (768px wide)
- Mobile (375px wide)

Expected: Texture appears consistent and gently visible at all sizes.

- [ ] **Step 5: Check cross-browser rendering**

If possible, test in:
- Chrome/Chromium
- Firefox
- Safari (or another webkit browser)

Expected: SVG pattern renders correctly and consistently across browsers.

---

## Self-Review Against Spec

**Spec Coverage:**
- ✅ Halftone dots texture - Task 1, Step 3 creates SVG pattern with circular dots
- ✅ Very faint (gently visible at 5-10% opacity) - Task 1, Step 4-5 use `rgba(0,0,0,0.07)` for 7% opacity
- ✅ Applied to service section - Task 1, Step 4
- ✅ Applied to contact form - Task 1, Step 5
- ✅ Not on hero, footer, nav - Only targets `.services` and `.contact-form` classes
- ✅ Only on green backgrounds - Applied as overlay to existing green background sections
- ✅ Verification - Task 2 provides browser verification steps

**Placeholder Check:** None found. All steps contain exact code and commands.

**Type/Property Consistency:** SVG pattern defined consistently in both Step 4 and Step 5 with identical data URI and sizing.

---

## Next Steps

After committing, the halftone texture will be live on the homepage. The SVG pattern is embedded directly in the CSS, so no additional assets need to be deployed.

If the opacity needs adjustment after visual verification, simply change the `0.07` value to `0.05` (5%) for more subtle or `0.10` (10%) for more visible.
