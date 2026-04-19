---
title: "S-Corp Basis, Ownership Rules, and Shareholder Loans"
description: "Who can own S-corp stock, how stock and loan basis work, what limits loss deductions, and why shareholder loans need to be structured correctly to create basis."
date: 2026-04-19
practices: ["business"]
services: ["business-tax"]
featured: false
primary_cluster: "business-tax"
clusters: ["business-tax"]
strategy_snapshot:
  summary: "S-corp basis determines how much of a loss you can actually deduct. Stock basis tracks contributions and income; loan basis requires a direct loan from the shareholder to the corporation. Third-party debt and guarantees do not create basis the way they do in a partnership."
  bullets:
    - label: Stock basis
      text: "Starts with your investment and adjusts each year for income allocations, distributions, and losses. Losses can only be deducted to the extent of basis."
    - label: Loan basis
      text: "Only a direct loan from the shareholder to the S-corp creates loan basis. Guaranteed third-party debt does not."
    - label: Suspended losses
      text: "Losses that exceed your basis are not gone — they carry forward and become deductible when basis is restored."
faqs:
  - q: "What happens if I exceed my S-corp basis with a loss?"
    a: "The loss is suspended and carries forward. It does not disappear. You can use it in a later year when your basis is restored — through additional contributions, income allocations, or direct loans to the corporation."
  - q: "Does guaranteeing a bank loan for my S-corp create basis?"
    a: "No. Unlike partnerships, an S-corp shareholder does not get basis from personally guaranteeing corporate debt. Only a direct loan from the shareholder to the corporation creates loan basis."
  - q: "What triggers loss of S-corp status?"
    a: "Violating any eligibility requirement — admitting a nonresident alien shareholder, exceeding 100 shareholders, having a corporation or partnership as a shareholder, or creating a second class of stock — automatically terminates S-corp status, usually converting the entity to a C-corp."
---

## Who Can Own S-Corp Stock

S-corps are narrow by design. The eligibility rules exist in the tax code and are not flexible. If any rule is violated, the S-election terminates automatically — often without the owners realizing it — and the corporation becomes a C-corp.

**Shareholder restrictions:**

- Shareholders must be U.S. citizens or resident aliens. Nonresident alien shareholders are not permitted.
- Shareholders must be individuals, certain qualifying trusts, or estates. Corporations, partnerships, and most LLCs cannot hold S-corp stock.
- The corporation cannot have more than 100 shareholders. Certain family members can elect to be treated as a single shareholder.

**One class of stock:**

S-corps can only have one class of stock. Differences in voting rights are permitted, but economic rights — liquidation preferences, dividend priorities, distribution rights — must be identical for all shares. A second class of stock terminates the election.

This is one reason S-corps are a poor fit for businesses that need preferred equity, investor-style returns, or flexible allocation of profits between owners.

## Stock Basis

Stock basis is a shareholder's running balance of their investment in the S-corp for tax purposes. It starts with the amount paid for the stock and adjusts each year.

**Stock basis increases with:**

- Additional cash contributions to the corporation
- Income and separately stated income items allocated to the shareholder
- Tax-exempt income allocated to the shareholder

**Stock basis decreases with:**

- Cash and property distributions received
- Losses and deductions allocated to the shareholder
- Non-deductible expenses

Stock basis cannot go below zero. If allocated losses would push basis below zero, the excess is suspended and carried forward.

{{< callout title="The ordering rule" tone="note" >}}
Basis is reduced in a specific order: first by distributions, then by losses and deductions. Getting the order wrong affects how much of a loss is currently deductible versus suspended.
{{< /callout >}}

## Loan Basis

If a shareholder makes a direct loan to the S-corporation, that loan creates additional basis — called loan basis — that can support loss deductions once stock basis has been exhausted.

**Requirements for loan basis:**

- The debt must run directly from the shareholder to the corporation
- The loan must be a real debt with documented terms (promissory note, interest, repayment schedule)
- The shareholder must actually transfer cash or property — open-account debt has specific rules

**What does not create loan basis:**

- A personal guarantee of a bank loan made to the corporation
- A loan from a related entity (even if the shareholder owns both)
- Back-to-back arrangements where money runs through an intermediary

This is one of the most common misconceptions in S-corp planning. Shareholders who guarantee corporate bank debt often assume they have loan basis. They generally do not.

**Repayment and restoration:**

When a shareholder repays a loan that was used to support loss deductions (i.e., the loan basis was reduced by losses), any repayment that restores the basis may be taxable as gain — not a tax-free return of capital. The mechanics depend on whether basis was reduced below the face amount of the note.

## How Losses and Basis Interact

Losses allocated to a shareholder reduce basis in a specific sequence:

1. Stock basis is reduced first
2. Once stock basis reaches zero, loan basis is reduced
3. Losses in excess of both stock and loan basis are suspended

Suspended losses carry forward indefinitely. They become deductible when basis is restored — through new contributions, income allocations, or new direct loans. They are also released (and become deductible) when the shareholder disposes of the stock.

{{< pullquote attribution="Why this catches owners off guard" >}}
A business loss year feels like it should produce a tax deduction. But if the shareholder has no remaining basis, the loss is simply parked until basis comes back — which may be years later, or never.
{{< /pullquote >}}

## 2% Shareholder Rules and Fringe Benefits

Shareholders who own more than 2% of an S-corporation's stock are treated differently than employees for certain employer-provided fringe benefits. The IRS treats these shareholders more like partners than employees.

**Health insurance:**

If an S-corp pays health insurance premiums for a more-than-2% shareholder (or their family), the premiums must be:

- Included in the shareholder's W-2 as wages
- Not treated as a tax-free fringe benefit the way they would be for a non-owner employee

The shareholder may then deduct those premiums as self-employed health insurance on Form 1040 — but only if the plan is established under the business, not the individual. If handled incorrectly, the deduction is lost.

**Other affected benefits:**

Group-term life insurance, dependent care assistance, transportation fringe benefits, and several other employer-provided benefits that are excluded from income for regular employees are **taxable** to more-than-2% S-corp shareholders.

Planning note: This makes the fringe benefit picture for owner-employees more complex than for C-corp employees, where many benefits can be provided tax-free.

## Common Problems We See

- **Shareholder assumes debt guarantees create basis** — they do not, which means the loss they expected to take is suspended
- **No promissory note for a shareholder loan** — the IRS may not recognize it as real debt
- **New shareholder is a nonresident alien** — S-corp status terminates from the date the ineligible shareholder was admitted
- **Distributions paid when basis is zero** — creates capital gain even if the shareholder did not intend to recognize income
- **2% shareholder health insurance not run through payroll** — deduction may be lost at the individual level
