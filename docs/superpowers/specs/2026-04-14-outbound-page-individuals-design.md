# Design: Expand Outbound Page — Add Individuals & Families Sections

**Date:** 2026-04-14  
**File:** `content/expertise/outbound/_index.md`  
**Approach:** Content-only update (no template changes)

---

## Context

The `/expertise/outbound/` page currently serves only U.S. businesses with foreign operations. The firm also handles international tax needs for U.S.-based individuals and families who aren't full-time expats — people with foreign accounts, foreign inheritance, or dual citizenship complexity. These people have no dedicated page.

Rather than create a separate page (which fragments the URL space), we expand the outbound page to serve both audiences with clearly labeled sections.

---

## Page Rename

| Field | Current | Updated |
|---|---|---|
| `title` | "Outbound U.S. Businesses" | "International Tax for U.S. Businesses and Individuals" |
| `description` | business-only | Updated to mention both businesses and individuals |
| `subtitle` | business-only | "International tax compliance and planning for U.S. businesses and individuals with foreign exposure." |

---

## Section Structure

### Intro (updated to cover both audiences)
- Briefly introduce the page covers two types of clients: U.S. businesses going abroad AND U.S. individuals/families with international financial ties

### Business Sections (existing, lightly edited for clarity)
1. **"For U.S. Businesses Operating Abroad"** — intro for business audience (edit of current first section)
2. **"What U.S. Businesses With Foreign Activity Usually Need"** — existing bullet list, kept as-is

### Individual/Family Sections (new)
3. **"For U.S. Individuals and Families with Foreign Ties"** — covers U.S. residents with foreign accounts, investments, inheritance, or dual citizenship obligations
4. **"What Individuals and Families Usually Need"** — new bullet list covering:
   - FBAR for foreign financial accounts over $10,000
   - FATCA / Form 8938 for foreign financial assets
   - Form 3520 for foreign gifts or inheritances
   - Dual citizenship filing considerations
   - Green card holder filing obligations
   - Streamlined filing for missed prior years

### Closing Sections (existing, kept)
5. **"Compliance and Planning Together"** — kept as-is (applies to both audiences)
6. **"Who This Is For"** — update to explicitly mention individuals and families alongside businesses

---

## Specializations (updated)

Add individual-focused specializations to the existing list:
- Form 3520 — Foreign Gifts & Inheritance *(new)*
- Dual Citizen Tax Compliance *(new)*
- Green Card Holder Obligations *(new)*
- Foreign Account Reporting (FBAR) — already present under business section, recontextualized
- Streamlined Filing Procedures *(new)*

---

## Verification

1. Run `hugo serve` and visit `/expertise/outbound/`
2. Confirm page title renders as the updated name
3. Confirm both audience sections appear — businesses first, then individuals/families
4. Confirm specializations grid shows the new individual-focused pills
5. Confirm no layout or template changes were needed
