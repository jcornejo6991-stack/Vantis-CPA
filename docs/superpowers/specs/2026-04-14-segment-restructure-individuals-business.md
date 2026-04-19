# Spec: Segment Restructure — Individuals and Local/Online Business

**Date:** 2026-04-14
**Status:** Implemented

## Context

The expertise segment lineup was reorganized to serve audiences more cleanly. The previous "Individuals & Local Businesses" combined page was split, and "Startups and Online Business" was broadened to cover both local and online businesses.

## New Segment Structure

| Segment | Old Slug | New Slug | Old URL | New URL |
|---|---|---|---|---|
| Individuals | local | individuals | /expertise/local/ | /expertise/individuals/ |
| Local and Online Business | founders | business | /expertise/founders/ | /expertise/business/ |

Redirects (Hugo aliases) added to both pages for old URLs.

## Individuals Page (`/expertise/individuals/`)

**Audience:** Individuals and families with multi-source income and tax complexity.

**Sections:**
1. 1040 Tax Preparation for Individuals — intro and framing
2. What Individuals Usually Need — W-2, 1099, K-1, rentals, investment, quarterly estimates, sale of property, multi-state, year-end
3. Equity Compensation and Stock — RSUs, NSOs, ISOs, AMT, QSBS (Section 1202)
4. Active Traders and Investment Complexity — wash sale rule, Section 475 mark-to-market election, trader status
5. Complex Returns and Situations That Repeat — ongoing engagement framing

**Specializations (15 items, flat list):** 1040 Return Preparation, W-2 and Multi-Income Returns, 1099 / Self-Employment (Schedule C), K-1 and Partnership Income, Rental Property (Schedule E), Investment and Capital Gains Income, RSU and Equity Compensation Reporting, Stock Options (NSO and ISO), Qualified Small Business Stock (QSBS), Active Trader Returns and Mark-to-Market, Wash Sale Rule Analysis, Estimated Quarterly Tax Planning, IRS and State Notice Response, Multi-State Returns, Year-End Tax Planning

## Local and Online Business Page (`/expertise/business/`)

**Audience:** Owner-operated businesses, both local (stores, trades, professional practices) and online (e-commerce, SaaS, agencies, digital services).

**Sections:**
1. Tax and Accounting for Local and Online Businesses — intro covering both
2. Local Businesses — physical location businesses, trades, professional practices
3. Online Businesses — e-commerce, SaaS, agencies, multi-state complexity
4. What Businesses Usually Need — combined bullet list
5. From Formation Through Ongoing Operations — ongoing support framing

**Specializations (14 items, flat list):** Business Tax Return Preparation, Entity Setup and Elections, S-Corporation and LLC Support, Reasonable Compensation Support, Quarterly Estimated Tax Planning, Bookkeeping and Monthly Financials, Payroll and 1099 Support, Multi-State Filing Support, Sales Tax Support, Entity Selection and Restructuring, Business Formation and Renewals, Back-Office Administrative Support, Clean-Up and Catch-Up Work, Multi-Entity Business Support

## Files Changed

- `content/expertise/local/` renamed to `content/expertise/individuals/`
- `content/expertise/founders/` renamed to `content/expertise/business/`
- `content/expertise/individuals/_index.md` — full rewrite
- `content/expertise/business/_index.md` — full rewrite
- `data/expertise.json` — both entries updated (name, slug, url, description)
- `layouts/partials/head.html` — practicesData updated for both entries
- 8 resource files updated: `local` slug replaced with `individuals`, `founders` slug replaced with `business`

## Copy Rules

- No em dashes
- No geographic references
