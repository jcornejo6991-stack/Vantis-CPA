# Social Card Redesign

**Date:** 2026-04-16  
**Status:** Approved

## Goal

Replace the existing `static/images/social-card.png` OG image with a cleaner design: remove the grid background, remove the "CPA FIRM · SOUTH FLORIDA" label, and replace the old subtext with just the domain.

## Design

Layout: Option A (left-aligned, accent line above wordmark)

| Property | Value |
|---|---|
| Dimensions | 1200 × 630 px |
| Background | `#0e2b1d` (dark green, solid — no grid) |
| Accent bar | `#4caf82`, 32 × 2 px, top-left |
| Wordmark | **Vantis CPA**, Georgia serif, bold, `#f5f0e8`, ~52px |
| Domain | `vantiscpa.com`, sans-serif, `#6aad8a`, ~14px, below wordmark |
| Padding | ~10% vertical, ~11% horizontal (left-aligned) |

No top label. No gridlines. No subtext other than the domain.

## Files

- **Source:** `static/images/social-card.html` — editable HTML source, committed to repo for future updates
- **Output:** `static/images/social-card.png` — overwritten with screenshot of the above at 1200×630

## Implementation Steps

1. Create `static/images/social-card.html` with the design spec above
2. Use Chrome (via MCP) to open the file and screenshot it at 1200×630
3. Save the screenshot to `static/images/social-card.png`
4. Verify `layouts/partials/head.html` still references `images/social-card.png` (no change needed)
