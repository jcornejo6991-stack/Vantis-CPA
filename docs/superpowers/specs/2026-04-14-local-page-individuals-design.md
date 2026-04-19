# Spec: Individuals & Local Businesses Page Redesign

**Date:** 2026-04-14
**URL:** `/expertise/local/`
**Status:** Approved

## Problem

The `/expertise/local/` page served only local businesses. Individuals with complex 1040 returns (W-2, 1099-NEC, K-1, rental, investment income) had no dedicated landing point on the site. The page also contained geographic references ("South Florida") to be removed.

## Solution

Expand the page into two clear sections on one URL: individuals first, local businesses second. No geographic references anywhere on the page.

## Page Metadata

- **Title:** Individuals & Local Businesses
- **Subtitle:** Tax preparation and full-service accounting for individuals with complex returns and locally-owned businesses.
- **Description:** Tax preparation and accounting for individuals with complex returns and locally-owned businesses including stores, trades, and professional practices.

## Section 1: Individuals

**Heading:** 1040 Tax Preparation for Individuals

**Copy:** Most individuals with W-2 income assume their return is straightforward until they add a rental property, sell stock, receive a K-1 from a partnership or trust, or pick up contract work on the side. At that point, the return has moving parts that interact. We prepare 1040 returns for individuals and families whose income comes from multiple sources. The goal is an accurate, complete return and a clearer picture of what to expect next year.

**Needs bullets:**
- W-2 income (single or multiple employers)
- 1099-NEC and self-employment income (Schedule C)
- K-1 income from partnerships, S-corporations, or trusts
- Rental property income and expenses (Schedule E)
- Investment income, dividends, and capital gains
- Estimated quarterly tax planning
- Sale of a primary residence or investment property
- IRS and state notice response
- Multi-state returns where applicable
- Year-end tax planning

## Section 2: Local Businesses

**Heading:** Full-Service Accounting for Local Businesses

**Copy:** Local businesses need more than annual tax prep. They need bookkeeping that stays current, payroll that runs cleanly, and tax filings that reflect how the business actually operates. We work with owner-operated businesses to build an accounting system that supports both compliance and planning throughout the year.

**Who this is for:** Retail stores, trade contractors (electricians, plumbers, landscapers, builders), professional practices (medical, legal, dental, consulting), and other locally-owned businesses that want a CPA who stays involved year-round, not just one they hear from in April.

**Needs bullets:**
- Business tax return preparation (1120S, 1065, Schedule C)
- S-corp setup and reasonable compensation analysis
- Quarterly estimated tax planning
- Bookkeeping and monthly financial reporting
- Payroll and 1099 support
- Entity selection and restructuring
- IRS and state notice response
- Sales tax support
- Business formation and renewals

## Specializations Grid

Two labeled groups rendered via optional `group` field in frontmatter. Template detects presence of `group` and renders subheadings. Pages without `group` fields are unaffected.

**Individuals group (10 items):** 1040 Return Preparation, W-2 and Multi-Income Returns, 1099 / Self-Employment (Schedule C), K-1 and Partnership Income, Rental Property (Schedule E), Investment and Capital Gains Income, Estimated Quarterly Tax Planning, IRS and State Notice Response, Multi-State Returns, Year-End Tax Planning

**Local Businesses group (10 items):** Business Tax Return Preparation, S-Corporation and LLC Support, Bookkeeping and Monthly Financials, Payroll and 1099 Support, Quarterly Estimated Tax Planning, Entity Selection and Restructuring, Reasonable Compensation Support, Sales Tax Support, Business Formation and Renewals, Multi-Entity Business Support

## Template Change

`layouts/_default/service.html`: Add group-aware rendering in specializations block. Backwards compatible — flat-list behavior unchanged for all other pages.

`layouts/partials/service-css.html`: Add `.spec-group-title` styles (Playfair Display, 15px, border-bottom separator).

## Copy Rules

- No em dashes anywhere
- No geographic references (no "South Florida" or any city/state)
