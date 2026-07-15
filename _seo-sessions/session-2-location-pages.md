# Session 2 — Location Pages

## Context
This is vantiscpa.com, a CPA firm specializing in international tax with a focus on Latin American clients, foreign-owned US businesses, and expats. We also serve local Florida clients.

Location pages use two templates controlled by the `serviceGrid` frontmatter field:
- `serviceGrid: standard` + `heroImage: "/images/locations/florida.jpg"` = local CPA angle
- `serviceGrid: international` + `heroImage: "/images/globe-hero.jpg"` = international tax angle

The rule for this session:
- **SWFL cities** = keep on `serviceGrid: standard` (local angle)
- **All other FL cities + out-of-state** = switch to `serviceGrid: international` (international angle)

---

## Do NOT Touch — Already Correct

These pages are already on the right template and ranking well:

**SWFL local (serviceGrid: standard) — keep:**
- /locations/fort-myers/
- /locations/cape-coral/
- /locations/naples/
- /locations/sarasota/
- /locations/south-florida/ (hub)

**International angle (serviceGrid: international) — already done:**
- /locations/houston/
- /locations/san-francisco/
- /locations/los-angeles/
- /locations/chicago/
- /locations/new-york/
- /locations/washington-dc/

---

## Task 1 — New SWFL Page: Bonita Springs

Create `/locations/bonita-springs/` using the exact same frontmatter structure as the Fort Myers and Naples pages (`serviceGrid: standard`, Florida hero image).

Bonita Springs sits between Naples (Collier County) and Fort Myers (Lee County) and is already mentioned in both pages. This page should feel distinct — don't repeat what Fort Myers and Naples already say about the area.

**Angle:** Bonita Springs is a high-growth residential and resort community with active real estate investment, vacation rental activity, and affluent retirees and second-home owners. It straddles Lee and Collier counties.

**Frontmatter to use:**
```yaml
title: "Bonita Springs CPA"
description: "A Bonita Springs CPA firm offering proactive tax strategy, individual and business tax, international tax, and full-service accounting across Lee and Collier County."
layout: city
serviceGrid: standard
slug: bonita-springs
cityName: "Bonita Springs"
heroImage: "/images/locations/florida.jpg"
heroEyebrow: "Florida Service Areas · Lee & Collier County"
subtitle: "Proactive tax strategy and full-service accounting for Bonita Springs's investors, families, and business owners, all from one firm."
```

**clients section should include:**
- Real Estate Investors
- Vacation Rental Operators
- High-Net-Worth Families & Retirees
- Small Business Owners
- Individuals & Families

**FAQs:**
- Do I need a local CPA in Bonita Springs?
- Can you handle both my business and personal taxes?
- Do you work with vacation rental owners and real estate investors?

---

## Task 2 — Switch to International Template

For each page below, rewrite the content using the `serviceGrid: international` template. Use the Houston and San Francisco pages as the reference — read both before writing anything.

Key frontmatter changes for every page:
- `serviceGrid: standard` → `serviceGrid: international`
- `heroImage: "/images/locations/florida.jpg"` → `heroImage: "/images/globe-hero.jpg"`
- `heroEyebrow: "Florida Service Areas · [County]"` → `"International & Cross-Border Tax"`
- Title pattern: `"[City] International Tax CPA"` (match Houston/SF title pattern)

### SE Florida Pages
These are cities where Vantis physically operates. The international angle is the core differentiator — Latin American clients, foreign investors, cross-border businesses. Keep the Florida geographic context but lead with international expertise.

- **Miami** — Financial bridge between US and Latin America. Foreign investors in Miami-Dade real estate. Latin American business owners. Foreign-owned US LLCs. Mention: Brickell, Coral Gables, Doral, Aventura, Miami Beach, Key Biscayne. Bilingual English/Spanish.

- **Coral Gables** — Multinational regional HQs, international banks, Latin American professional services firms. Mention: Miracle Mile, Coconut Grove, South Miami, Pinecrest. Bilingual English/Spanish.

- **Doral** — Latin American business hub. Logistics, import/export, manufacturing, trade. Venezuelan and Colombian business owners. Foreign-owned US LLCs. Airport proximity. Bilingual English/Spanish.

- **Fort Lauderdale** — Growing international business market, foreign real estate investors, Latin American clients, marine and boating industry with international ownership. Mention: Broward County, Las Olas, Port Everglades.

- **Boca Raton** — Affluent international families, foreign investors, Latin American professionals. Mention: Palm Beach County, Mizner Park.

- **West Palm Beach** — Wealthy international families, foreign real estate investors, Palm Beach County Latin American business owners. Mention: Palm Beach, Worth Avenue.

### Other Florida Pages
These serve remote clients. Lead with international tax specialty, not local presence.

- **Tampa** — International businesses, Latin American community, tech and healthcare professionals with cross-border ties, foreign real estate investors in Hillsborough County.

- **St. Petersburg** — Latin American community, foreign real estate investors, creative and arts industry clients with international ties.

- **Orlando** — Foreign nationals owning Florida vacation homes and short-term rentals, Latin American families, international tourism industry clients.

- **Clearwater** — Foreign real estate investors, Latin American community, Tampa Bay area international clients.

- **Lakeland** — Logistics and distribution hub with international company presence, Latin American business owners in Central Florida.

- **Jacksonville** — Military families with foreign income and accounts, Latin American community, international business presence on the First Coast.

- **Port St. Lucie** — Foreign real estate investors on the Treasure Coast, Latin American families, international clients in St. Lucie County.

---

## Rules for This Session

- Read the Houston and San Francisco pages fully before writing anything — match their structure, tone, and frontmatter exactly
- Read Bonita Springs's neighboring pages (Fort Myers, Naples) before writing that page
- Show the frontmatter + outline for each page before writing — one at a time, confirm before moving on
- The `clients` section items should use `category: "International Tax"` for the primary entries on all international pages
- Every page needs a unique meta title and meta description
- All pages link to /services/international-tax/ and back to /locations/
