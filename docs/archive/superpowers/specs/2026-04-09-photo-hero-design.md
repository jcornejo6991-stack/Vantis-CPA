# Photo Hero Design — Service Pages

**Date:** 2026-04-09
**Status:** Approved — test on Real Estate page, may roll out to others

## Context

The current service/expertise/referral page hero is a white floating card with dark text. The goal is to support a photo-background hero variant that is richer visually — full-bleed photo, dark overlay, white text, and a frosted glass trust bar — while keeping the existing white-card hero for pages that don't opt in.

## Approach

Frontmatter-driven conditional using an existing `heroImage` param. When `heroImage` is set, the template adds a `hero--photo` class and inline background-image. All styling lives in the `.hero--photo` CSS modifier. No structural HTML changes.

## Files Changed

### `content/expertise/realestate/_index.md`
- Fix `heroImage` from wrong image (`globe-hero.jpg`) to correct one (`card-realestate.jpg`)

### `layouts/_default/service.html`
- Line 34: Add conditional class `hero--photo` and inline `style` attribute when `heroImage` param is set

### `layouts/partials/service-css.html`
- Add `.hero--photo` CSS modifier block:
  - `background-size: cover; background-position: center`
  - `::before` dark overlay: `linear-gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.58))`, `position: absolute; inset: 0; z-index: 0`
  - Hero `position: relative; overflow: hidden`
  - `h1`: `color: #fff` + `text-shadow: 0 2px 8px rgba(0,0,0,0.3)`
  - `.hero-subtitle`: `color: rgba(255,255,255,0.88)`
  - `.trust-bar`: `background: rgba(255,255,255,0.12); backdrop-filter: blur(14px) saturate(1.5); border-top: 1px solid rgba(255,255,255,0.2); position: relative; z-index: 1`
  - `.trust-bar-icon`: `background: rgba(255,255,255,0.15)`; SVG strokes → white
  - `.trust-bar-title`: `color: #fff`
  - `.trust-bar-sub`: `color: rgba(255,255,255,0.7)`
  - `.trust-bar-cell` borders: `rgba(255,255,255,0.15)`

## Extensibility

To add the photo hero to any other service/expertise/referral page, add one line to its frontmatter:
```yaml
heroImage: "/images/card-founders.jpg"
```

## Revert

Remove `heroImage` from the page frontmatter to fall back to the white-card hero. No template changes needed.
