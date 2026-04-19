# Website Redesign — Design Spec
**Date:** 2026-04-18
**Scope:** Full visual overhaul of the Vantis CPA Hugo site (homepage + all pages)

---

## Goals

1. Remove all floating card effects (margins, border-radius, box-shadow on sections)
2. Remove body gridlines
3. Recolor with a dark premium gray/navy palette + VS Code terminal accent colors
4. Apply glassmorphism to nav and contact form
5. Break homepage services into 4 distinct full-width sections
6. Keep Playfair Display headings throughout

---

## Color Palette

| CSS Variable | Value | Purpose |
|---|---|---|
| `--nav-bg` | `rgba(26, 26, 46, 0.80)` | Glassmorphism nav backdrop (dark gray, same family as footer) |
| `--footer-bg` | `#1a1a2e` | Footer background (premium dark gray, matches nav) |
| `--dark-navy` | `#0d1117` | Dark navy sections |
| `--dark-gray` | `#1a1a2e` | Dark gray sections |
| `--section-white` | `#ffffff` | White sections |
| `--hero-gradient` | `linear-gradient(135deg, #f8f7ff 0%, #edeef7 60%, #e8e6f5 100%)` | Hero background |
| `--accent-blue` | `#569CD6` | Individual Tax, nav hover, primary CTA |
| `--accent-orange` | `#CE9178` | Business Tax accent |
| `--accent-green` | `#4EC9B0` | International Tax accent |
| `--accent-silver` | `#9CDCFE` | Full Office accent |
| `--text-light` | `#e8e8e8` | Body text on dark backgrounds |
| `--text-dark` | `#1a1a2e` | Body text on light backgrounds |
| `--text-mid-dark` | `#b0b8c8` | Secondary text on dark backgrounds |
| `--text-mid-light` | `#4a5568` | Secondary text on light backgrounds |

---

## Typography

- **Headings (h1–h3):** Playfair Display, serif — unchanged
- **Body / UI:** Inter, sans-serif — unchanged
- **Section labels:** Inter, uppercase, 0.12em letter-spacing, accent color

---

## Emojis & Imagery

### Emoji Assignments (per section)

Emojis appear as large decorative glyphs (48–64px, low opacity ~0.15–0.25) in the section background or as inline accent icons next to section labels and list items.

| Section | Decorative Emoji | Use |
|---|---|---|
| Hero | 🧭 | Subtle background watermark, top-right corner |
| Individual Tax | 👤 | Next to section label; list items prefixed with 📋 |
| Business Tax | 🏢 | Next to section label; list items prefixed with 📊 |
| International Tax | 🌐 | Large background watermark; list items prefixed with ✈️ |
| Full Office | 🗂️ | Next to section label; each sub-item gets its own emoji: 📚 Bookkeeping, 💳 Payroll, 🧾 Sales Tax, 🗃️ Back Office |
| Who We Serve | 🤝 | Next to section label |
| Our Process | 🔄 | Next to section label; step badges keep numbers but get a ✅ on completion |
| Contact | 📬 | Next to section label |
| FAQ | 💬 | Next to section label; each Q prefixed with ❓ |

### Image Assignments

Images are placed as **side panels or background accents** — not full-bleed, not floating cards. They sit flush in a two-column layout alongside the text content, or as a right-side accent column.

| Section | Image | Placement |
|---|---|---|
| Hero | `globe-hero.jpg` | Right side of hero, full-height column, `object-fit: cover`, subtle opacity overlay |
| Individual Tax | `card-local.jpg` | Right column (40% width), flush to section edge |
| Business Tax | `card-founders.jpg` | Left column (40% width), flush to section edge |
| International Tax | `card-expats.jpg` + `card-inbound.jpg` | Right column showing `card-expats.jpg`; `card-inbound.jpg` used as a small accent strip above it |
| Full Office | `card-realestate.jpg` | Subtle background image at low opacity (0.08) behind the 4-item grid — no side panel |
| Who We Serve | `card-local.jpg`, `card-founders.jpg`, `card-expats.jpg`, `card-realestate.jpg` | Small thumbnails (40×40px circle) beside each industry row title |

---

## Global Removals

- **Body background:** Remove `background-image` gridlines; body is plain white/transparent
- **Floating sections:** Remove all `margin: 25px`, `border-radius: 20px`, `box-shadow` on `.hero`, `.services`, `.differentiators`, `.industries`, `.about`, `.client-resources`, `.contact`, `.process-bring-section`, `.footer`
- All sections become **full-width edge-to-edge** with no card effect

---

## Navigation

- **Position:** Sticky, `top: 0`, `z-index: 100`
- **Background:** `rgba(26, 26, 46, 0.80)` with `backdrop-filter: blur(20px) saturate(180%)`
- **Border:** `border-bottom: 1px solid rgba(255,255,255,0.07)`
- **Logo/links:** White (`#ffffff`); hover state uses `--accent-blue`
- **CTA button:** `--accent-blue` background, white text
- **Effect:** Frosted glass over dark gray — same color family as footer for visual consistency

---

## Hero Section

- **Background:** `linear-gradient(135deg, #f8f7ff 0%, #edeef7 60%, #e8e6f5 100%)`
- **Layout:** Three columns — left: brand name + tagline, center: intro text + contact info box + CTAs, right: `globe-hero.jpg` image panel
- **Right image panel:** `globe-hero.jpg`, full section height, `object-fit: cover`, flush to right edge, ~35% width. Subtle dark gradient overlay on left edge to blend into content
- **Decorative emoji:** 🧭 placed top-right corner of the left/center area at ~0.12 opacity, large (~80px)
- **Brand name:** Playfair Display, large (clamp 72px–132px), color `#2a2a4a` (dark navy tone)
- **Contact info box (glassmorphism):**
  - `backdrop-filter: blur(10px)`
  - `background: rgba(255,255,255,0.45)`
  - `border: 1px solid rgba(255,255,255,0.6)`
  - `border-radius: 10px`
- **Primary CTA:** `--accent-blue` fill
- **Secondary CTA:** Outline style, dark navy border
- **No card shadow/margin** — section goes edge-to-edge

---

## Homepage Section Map

Sections flow top-to-bottom. No gaps between sections — backgrounds tile directly.

| Order | Section | Background | Accent | Text tone |
|---|---|---|---|---|
| 1 | Hero | Off-white lavender gradient | `--accent-blue` | Dark |
| 2 | Individual Tax | `#ffffff` | `--accent-blue` | Dark |
| 3 | Business Tax | `--dark-gray` `#1a1a2e` | `--accent-orange` | Light |
| 4 | International Tax | `--dark-navy` `#0d1117` | `--accent-green` | Light |
| 5 | Full Office | `#ffffff` | `--accent-silver` | Dark |
| 6 | Who We Serve | `--dark-gray` `#1a1a2e` | `--accent-blue` | Light |
| 7 | Our Process + What to Bring | `--dark-navy` `#0d1117` | `--accent-green` | Light |
| 8 | Contact | `--dark-gray` `#1a1a2e` | `--accent-silver` | Light |
| 9 | FAQ | `#ffffff` | `--accent-blue` | Dark |

---

## Service Sections (4 total)

### Section 2 — Individual Tax (White, `#ffffff`)

- **Layout:** Two columns — left: text content, right: `card-local.jpg` image panel (40% width, flush to right edge)
- **Emoji:** 👤 next to section label; 📋 prefixes each list item
- Section label in `--accent-blue`
- Heading: "Individual Tax" in Playfair Display, dark
- Description + service items list with a 2px `--accent-blue` left border per item (no card box)
- Learn More link in `--accent-blue`

### Section 3 — Business Tax (Dark Gray, `#1a1a2e`)

- **Layout:** Two columns — left: `card-founders.jpg` image panel (40% width, flush to left edge), right: text content
- **Emoji:** 🏢 next to section label; 📊 prefixes each list item
- Section label in `--accent-orange`
- Heading: "Business Tax" in Playfair Display, light text
- Service items: list with 2px `--accent-orange` left border, light text
- Learn More link in `--accent-orange`

### Section 4 — International Tax (Dark Navy, `#0d1117`)

- **Layout:** Two columns — left: text content, right: `card-expats.jpg` image panel (40% width, flush right), with `card-inbound.jpg` as a small accent strip below it
- **Emoji:** 🌐 large watermark behind text (~120px, 0.08 opacity); ✈️ prefixes each list item
- Section label in `--accent-green`
- Heading and subheading in light text
- Service items: list with 2px `--accent-green` left border, light text
- Learn More link in `--accent-green`

### Section 5 — Full Office (White, `#ffffff`)

- **Layout:** Section heading full-width, then 4-item horizontal row below. `card-realestate.jpg` used as a subtle background image at 0.06 opacity behind the grid
- **Emoji:** 🗂️ next to section label; each item has its own emoji inline with title: 📚 Bookkeeping, 💳 Payroll, 🧾 Sales Tax, 🗃️ Back Office
- Section label in a darker silver variant (`#4a90b8`) for legibility on white
- Each item: title + short description + tools line, with 2px `--accent-silver` top border
- No card boxes — items are flat with top accent border only

---

## Who We Serve Section

- **Background:** White
- **Accent:** `--accent-blue`
- **Layout:** Existing industry card-wrapper list — keep structure but remove hover card effect
- Section label and headings use `--accent-blue`
- Row dividers: `1px solid rgba(26,26,46,0.1)`

---

## Our Process + What to Bring

- **Background:** `--dark-navy` (`#0d1117`)
- **Accent:** `--accent-green`
- **Text:** Light (`--text-light`)
- Process step badges: `--accent-green` fill
- Bring checklist items: flat, no background box — accent checkmark in `--accent-green`
- Connector lines: `--accent-green` at reduced opacity

---

## Contact Section

- **Background:** `--dark-gray` (`#1a1a2e`)
- **Accent:** `--accent-silver`

### Form panel (glassmorphism)
- `backdrop-filter: blur(16px) saturate(150%)`
- `background: rgba(255,255,255,0.05)`
- `border: 1px solid rgba(255,255,255,0.10)`
- `border-radius: 14px`
- `padding: 32px`

### Input fields
- `background: rgba(255,255,255,0.07)`
- `border: 1.5px solid rgba(255,255,255,0.15)`
- Focus: `border-color: --accent-silver`
- Placeholder: `rgba(255,255,255,0.4)`

### Right column (contact info + calendar booking)
- Contact info box: same glassmorphism treatment as form panel
- Calendar CTA button: `--accent-silver` or `--accent-blue`

---

## FAQ Section

- **Background:** White
- **Accent:** `--accent-blue`
- **Layout:** Existing two-panel layout (left: messaging, right: Q&A list)
- Left panel background: `#f0f4ff` (very light blue-lavender, matching hero tone)
- Accent bar: `--accent-blue`
- Toggle icons: `--accent-blue`

---

## Footer

- **Background:** `#1a1a2e` (premium dark gray — same family as nav)
- **Text:** `--text-light` / `--text-mid-dark`
- **Links:** `--accent-silver` or `--accent-blue` on hover
- **Border top:** `1px solid rgba(255,255,255,0.08)`
- No border-radius, no box-shadow, no margin

---

## Inner Pages (Non-Homepage)

All inner pages (services, resources, expertise) use the same global changes:
- Nav and footer get the same glassmorphism/dark treatment
- Body gridlines removed
- Floating card sections removed — page content is full-width within a max-width container
- Section backgrounds on inner pages default to white with the relevant accent color per service type
- The `variables.css` is updated with the new palette tokens

---

## Files to Modify

Note: Each layout template defines its own inline `<style>` block — there is no single global body stylesheet. Body gridlines and floating card styles are embedded in each template's inline styles and must be removed per-file.

| File | Change |
|---|---|
| `assets/css/variables.css` | Replace color tokens with new palette |
| `assets/css/style.css` | Remove gridlines from body background; update base nav/footer colors; remove card box-shadows |
| `layouts/index.html` | Full section restructure — 4 service sections, alternating backgrounds, glassmorphism contact form, remove floating card styles from inline `<style>` |
| `layouts/partials/nav.html` | Glassmorphism nav markup (add `backdrop-filter`, update colors) |
| `layouts/partials/nav-css.html` | Nav CSS: glassmorphism, dark navy, white links, blue hover |
| `layouts/partials/footer.html` | Dark footer — remove border-radius/shadow/margin |
| `layouts/partials/footer-css.html` | Footer CSS: `#0a0e1a` background, light text |
| `layouts/partials/service-css.html` | Remove floating card styles; update section backgrounds for inner service pages |
| `layouts/_default/service.html` | Inner service page — remove floating card wrapper styles |
| `layouts/_default/single.html` | Inner single pages — remove floating card wrapper styles |
| `layouts/_default/list.html` | List pages — remove floating card wrapper styles |
| `layouts/_default/landing.html` | Landing pages — remove floating card wrapper styles |
