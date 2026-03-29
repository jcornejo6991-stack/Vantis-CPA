# Homepage Visual Enrichment — Design Spec
**Date:** 2026-03-28
**Scope:** `index.html` only
**Status:** Approved

## Problem
The home page feels visually flat — alternating solid white and light-gray sections with no texture, pattern, or depth. The user described it as "very white."

## Approved Design: Option B — Crosshatch Grid + Floating Sections

### Core concept
The page body gets a subtle crosshatch grid pattern as a fixed background. Content sections are restyled as floating cards with rounded corners, box shadows, and horizontal margins — leaving small gaps between them so the background pattern peeks through. This creates a layered, floating effect as the user scrolls.

### Global changes
- **`body` / page background:** Fine crosshatch grid (`repeating-linear-gradient` at ~10–12% opacity) over a very light lavender base (`#f0f1f8`). Fixed (`background-attachment: fixed`) so it stays still while sections scroll over it.
- **Section layout:** All major sections get `margin: 0 8px`, `border-radius: 12px`, `box-shadow`, and a `6px` gap between them — so the pattern background shows through the gaps as you scroll.

### Per-section treatments

| Section | Change |
|---|---|
| **Nav** | Dark navy (`#1e2556`) background, white logo + links. Flush to top, no card margin. |
| **Hero** | Semi-transparent white (`rgba(255,255,255,0.88)`) so the crosshatch grid bleeds through slightly at the top, fading to solid white toward the bottom via `linear-gradient` overlay. |
| **Differentiators** ("Why clients choose") | White card bg. Diff cards get lavender tint (`#edeef7`) + `border-top: 2px solid #72749e`. |
| **Services** | Left accent border (`border-left: 3px solid #72749e`). Background: soft left-to-right gradient (`#f4f5fb → #fff`). |
| **Industries** | White card with `linear-gradient(160deg, #fff → #edeef7)` background tint. Segment color badges restored. |
| **Client Resources (portal)** | Already dark navy. Add noise grain texture via SVG `feTurbulence` overlay at 4% opacity. Richer gradient (`#1e2556 → #141840`). |
| **Contact** | Keep light bg. Add subtle gradient (`#eef0f4 → #edeef7`). |
| **Footer** | Dark navy, richer gradient (`#1e2556 → #0e1230`), noise grain at 4%. |

### What is NOT changing
- Typography, font sizes, font families
- All copy and content
- Section order or structure
- Segment pages (founders, expats, latam, local)
- Any functionality (forms, nav links, animations)

## Verification
- Open `index.html` in browser
- Scroll slowly — gaps between cards should show the grid pattern peeking through
- Nav should be dark navy with white text
- Hero should show the grid faintly at the top, fading to clean white
- Services section should have a visible left accent stripe
- Dark sections (portal, footer) should feel richer/deeper than before
- Page should not feel "over the top" — color is present but professional
