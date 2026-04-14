# Homepage Mobile Responsiveness Fix — Design Spec

**Date:** 2026-04-14
**Scope:** Surgical CSS-only fixes to two homepage sections that break on mobile

---

## Problem

Two homepage sections have missing or incorrect mobile breakpoint rules:

1. **Our Process** — `.process-bring-grid` has `padding: 0 180px` (desktop two-column layout). When the grid collapses to a single column at `≤860px`, that padding is never reduced. On mobile it consumes most of the usable screen width.

2. **Resources** — resource cards use `calc(100vw - 100px)` at `≤768px`. This is relative to the viewport, not the container, making it brittle across device widths. Carousel nav buttons also have no explicit touch-target size.

---

## Approach

Option A: Targeted CSS breakpoint fixes. No HTML or structural changes. All edits are within the existing `<style>` block in `layouts/index.html`.

---

## Changes

### 1. Our Process — `layouts/index.html`

**Target rule:** The `@media (max-width: 860px)` block.

Add to `.process-bring-grid` inside that breakpoint:
```css
padding: 0 24px;
```

This replaces the inherited desktop `padding: 0 180px` and matches the mobile padding used elsewhere on the page.

### 2. Resources — `layouts/index.html`

**Target rule:** The `@media (max-width: 768px)` block.

Change `.resources .resource-card` width from:
```css
flex: 0 0 calc(100vw - 100px);
```
to:
```css
flex: 0 0 calc(100% - 32px);
```

This makes the card width relative to its container rather than the full viewport, which is more reliable across all phone sizes.

Also add minimum tap target to `.carousel-nav` inside `@media (max-width: 768px)`:
```css
min-width: 44px;
min-height: 44px;
```

---

## Files Modified

- `layouts/index.html` — CSS only, within existing `<style>` block

---

## Verification

1. Run Hugo dev server: `hugo server`
2. Open browser DevTools → toggle device toolbar
3. Test at 375px (iPhone SE), 390px (iPhone 14), 414px (older Android)
4. **Our Process:** Steps should be full-width with consistent side padding (~24px), no excessive whitespace
5. **Resources:** Cards should be nearly full-width, scrollable horizontally, nav buttons tappable
