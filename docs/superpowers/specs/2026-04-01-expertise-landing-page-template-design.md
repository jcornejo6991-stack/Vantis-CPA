# Expertise Landing Page Template Design

**Date:** April 1, 2026
**Project:** Vantis CPA Website
**Scope:** Template design for expertise landing pages (/local/, /founders/, /realestate/, /outbound/, /inbound/, /expats/)
**First Implementation:** Foreign Business and Investors (/inbound/)

---

## Overview

Create a unified landing page template for all expertise pages that is simple, link-rich, and follows the layout pattern of Berkowitz CPA's services pages. The template will serve both expertise pages and service pages in the future.

**Design Principle:** Clean, minimal design with heavy emphasis on internal linking to guide visitors to related content.

---

## Page Structure

### 1. Navigation Bar
- **Same as home page** — no changes
- Standard header with logo, nav links (Services, Expertise, Client Portal, Bill Pay, Resources, Referrals)
- Maintains visual consistency across the entire site

### 2. Hero Section
- **Background:** Solid color or subtle gradient (using existing color scheme — greens and navy)
- **Content:** Centered page title (e.g., "Foreign Business and Investors")
- **Style:** Minimal, no decorative elements, no background images for now
- **Height:** Appropriate for title display (approximately 200-300px)

### 3. Main Body — Two Column Layout

#### Left Column (Contact Form — ~30% width)
- **Form Fields:**
  - Name (text input)
  - Email (email input)
  - Brief Background (textarea — label: "Tell us about your situation")
  - Submit button

- **Contact Information Block Below Form:**
  - Phone number (linked to tel:)
  - Email address (linked to mailto:)
  - Office hours or location info (if applicable)
  - Keep same contact info as displayed on home page

- **Styling:** Clean, simple — no cards, shadows, or floating effects. Match the minimalist form style from home page but without decorative flourishes.

#### Right Column (Main Content — ~70% width)
- **Introduction Paragraph:**
  - The expertise description text (pulled from practicesData)
  - Example: "We offer comprehensive services to help foreign businesses and investors enter the U.S. smoothly."

- **Three Bulleted Link Sections:**

  **1. Specializations**
  - Bulleted list of specialized service areas for this expertise
  - Each item should be a clickable link to a detail page (when detail pages exist)
  - Items for Foreign Business and Investors:
    - U.S. Subsidiaries
    - Foreign Corporations
    - Form 5472
    - Transfer Pricing
    - FIRPTA Compliance
    - E-1/E-2 Visa Compliance
    - Inbound Investment Planning

  **2. Services We Provide**
  - Bulleted list linking to all 6 service pages:
    - Tax Strategy & Consulting → /services/tax-strategy-consulting
    - Tax Compliance → /services/tax-compliance
    - International Tax → /services/international-tax
    - Back Office → /services/back-office
    - Bookkeeping & Reporting → /services/bookkeeping-reporting
    - Payroll & Sales Tax → /services/payroll-sales-tax

  **3. Other Audiences We Serve**
  - Bulleted list linking to the other 5 expertise pages:
    - Individuals and Local Business → /local/
    - Startups and Online Business → /founders/
    - Real Estate Owners → /realestate/
    - International U.S. Citizens → /outbound/
    - U.S. Expats Abroad → /expats/

- **Typography & Spacing:** Clean, readable hierarchy. Sufficient whitespace between sections.

### 4. Footer
- **Same as home page** — no changes
- Maintains visual and informational consistency

---

## Color Scheme & Visual Design

- **Colors:** Use existing Vantis CPA color palette (greens, navy, whites, accents)
- **Background:** Light, neutral background (matching home page aesthetic)
- **No Floating Elements:** No cards, badges, gradients, or decorative flourishes
- **Typography:** Same fonts and hierarchy as home page (Playfair Display for headings, Inter for body)
- **Links:** Use standard link styling with hover states

---

## Content Data Source

- **Expertise Description:** Pulled from practicesData object (e.g., `practicesData[4].description` for Foreign Business and Investors)
- **Specializations List:** To be defined for each expertise area (initially manual, could be data-driven later)
- **Service Links:** Static links to all 6 service pages
- **Other Audiences Links:** Static links to other 5 expertise pages

---

## HTML & File Structure

- **File Location:** `/inbound/index.html` (for Foreign Business and Investors template)
- **Navigation & Footer:** Reuse from home page (copy/paste or include from shared component)
- **Responsive Design:** Follow existing responsive breakpoints from home page
- **No External Dependencies:** Use same fonts, styles, and assets as home page

---

## Future Considerations

1. **Image Addition:** Hero section can be enhanced with background images per page in the future
2. **Page Differentiation:** Service pages and expertise pages can be differentiated with different layouts if needed
3. **Dynamic Content:** Specializations list could be pulled from a data structure instead of hardcoded
4. **Related Content:** Could add testimonials, case studies, or other sections in future iterations
5. **SEO:** Meta tags, schema markup, and canonical URLs to be configured per page

---

## Success Criteria

- ✓ Page loads with clean, minimal design
- ✓ Two-column layout renders correctly on desktop and tablet
- ✓ Contact form captures Name, Email, and Background
- ✓ All bulleted links navigate to correct pages
- ✓ Navigation and footer match home page exactly
- ✓ No floating decorative elements or card styles
- ✓ Color scheme consistent with home page
- ✓ Mobile responsive following existing breakpoints
