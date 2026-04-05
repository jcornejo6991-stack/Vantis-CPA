# Design: Halftone Dot Texture on Homepage Green Sections

**Date:** April 2, 2026
**Feature:** Add subtle halftone dot texture overlay to homepage service and contact form sections

## Context

The homepage currently has solid green backgrounds for the service section ("What We Do") and the contact form. Adding a subtle, gently-visible halftone dot texture will add visual interest and depth while maintaining the professional CPA aesthetic. The texture will be very faint (5-10% opacity) to ensure it enhances rather than distracts.

## Design Overview

**Texture Type:** Halftone dots (circular dots in a regular pattern)
**Opacity:** 5-10% (gently visible)
**Application:** SVG pattern overlay
**Sections:** Homepage service section + contact form only

## Elements to Texture

1. **Service Section** (`.services` or relevant class)
   - The "What We Do" section with green background
   - Apply texture to background only, not content

2. **Contact Form Container**
   - The contact form with green background
   - Apply texture to form background only

## Not Included

- Hero section
- Footer
- Navigation bar
- Any other sections

## Technical Implementation

### SVG Pattern Approach (Recommended)

**Pattern Creation:**
- Create SVG with halftone dot pattern (small circles, evenly distributed)
- Dots sized appropriately for web viewing (~2-4px diameter recommended)
- Use regular/grid spacing for consistent pattern
- Export as data URI or embed as external SVG file

**CSS Application:**
- Add `background-image` with SVG pattern to target elements
- Use `background-size: auto` or `background-size: 100px` for control
- Set opacity via:
  - Direct rgba color overlay, OR
  - CSS `opacity` property on pseudo-element, OR
  - SVG fill opacity
- Ensure pattern doesn't interfere with form inputs or text readability

**Files:**
- `/assets/css/style.css` - Add background-image rules and opacity styling
- `/assets/images/halftone-pattern.svg` (optional) - If using external file vs data URI

## Styling Details

**Target Classes/Selectors:**
- `.services` background (or `.services-header` if more specific)
- `.contact-form` background (or parent container)

**CSS Properties:**
```
background-image: url('data:image/svg+xml,...') or url('/assets/images/halftone-pattern.svg');
background-attachment: scroll or fixed;
background-repeat: repeat;
opacity: 0.05 to 0.10 (5-10%);
```

**Opacity Levels:**
- 5-7%: Very subtle, barely noticeable
- 7-10%: Gently visible, clear there's a texture
- User preference: ~7% target

## Verification

1. **Visual Check:**
   - Open homepage in browser
   - Verify halftone dots visible on green backgrounds
   - Check service section and contact form both have texture
   - Confirm opacity is "gently visible" (not too faint, not too prominent)

2. **Content Check:**
   - Text and form elements remain fully readable
   - Texture doesn't interfere with form functionality
   - No layout shifts or spacing issues

3. **Browser Testing:**
   - Test on Chrome, Firefox, Safari, Edge
   - Test on mobile and desktop
   - Verify SVG renders correctly across browsers

4. **Performance:**
   - No noticeable page load impact
   - SVG pattern is lightweight

## Success Criteria

- ✅ Halftone dot texture visible on service section background
- ✅ Halftone dot texture visible on contact form background
- ✅ Texture is gently visible (not too subtle, not too prominent)
- ✅ All text and form inputs remain readable
- ✅ No visual artifacts or rendering issues
- ✅ No impact to page performance
