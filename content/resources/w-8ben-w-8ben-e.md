---
title: "W-8BEN and W-8BEN-E: What Foreign Individuals and Companies Are Certifying"
description: "U.S. banks, brokers, and clients ask foreign payees for Form W-8BEN (individuals) or W-8BEN-E (entities) before paying them. Here's what the forms certify, how treaty rates are claimed, and the mistakes that trigger 30% withholding."
date: 2026-07-14
practices: ["inbound", "business"]
services: ["international-tax", "business-tax"]
featured: false
subtopic: "Compliance & Reporting"
primary_cluster: "foreign-investors"
clusters: ["foreign-investors", "international-tax"]
strategy_snapshot:
  summary: "The W-8 series is not filed with the IRS. It is given to the U.S. bank, broker, platform, or client paying you, certifying foreign status and claiming treaty rates so the payer withholds correctly. W-8BEN is for individuals, W-8BEN-E for entities, and giving the wrong form (or none) usually means a flat 30% comes off the top."
  bullets:
    - label: What it does
      text: "Certifies you are not a U.S. person, establishes who the beneficial owner is, and claims a reduced treaty withholding rate where one exists."
    - label: Which form
      text: "W-8BEN for foreign individuals, W-8BEN-E for foreign companies. A foreign-owned single-member U.S. LLC is disregarded: the foreign owner's W-8 governs, not a W-9."
    - label: Biggest trap
      text: "U.S. persons abroad signing a W-8BEN. Citizens and green card holders are U.S. persons wherever they live, and certifying otherwise on a withholding form creates a real problem."
faqs:
  - q: "Is Form W-8BEN filed with the IRS?"
    a: "No. It is given to the withholding agent: the U.S. bank, broker, marketplace, or client paying you. They keep it on file, apply the withholding rate it supports, and report the payments to the IRS on Form 1042-S."
  - q: "How long is a W-8BEN valid?"
    a: "Generally through the end of the third calendar year after signing, so a form signed in 2026 works through December 31, 2029. It dies earlier if any certification becomes incorrect, such as a move, a change in treaty country, or becoming a U.S. resident, and a new form is required then."
  - q: "Does a foreign freelancer working for a U.S. client need to pay U.S. tax?"
    a: "Usually not, if the work is performed outside the United States. Compensation for services is sourced where the work is done, so a freelancer working from their home country and invoicing a U.S. company earns foreign-source income with no U.S. withholding. The W-8BEN is how the U.S. client documents that no withholding was required."
  - q: "My U.S. LLC is foreign-owned. Do I give clients a W-9 or a W-8?"
    a: "If the LLC is a single-member entity that has not elected corporate treatment, it is disregarded, and the owner's status controls: a W-8BEN or W-8BEN-E for the foreign owner, not a W-9. Signing a W-9 certifies U.S. status the entity's owner does not have. LLCs that elected corporate taxation are U.S. corporations and do provide a W-9."
---

Nobody goes looking for Form W-8BEN; it arrives. A U.S. brokerage freezes an account until it is signed, a marketplace withholds 30% of payouts pending "tax documentation," a U.S. client's accounting department refuses to release an invoice. The form itself is one page, but it sits on top of the entire U.S. withholding system, and what you certify on it determines whether money arrives whole, arrives minus 30%, or creates a compliance problem that surfaces years later.

{{< pullquote attribution="What the form actually is" >}}
A W-8 is not a tax return and never goes to the IRS. It is your certification to the person paying you, telling them who you are, that you are not a U.S. person, and what rate of tax they must hold back before the money leaves.
{{< /pullquote >}}

## Why the System Works This Way

The U.S. taxes nonresidents on passive U.S.-source income (dividends, interest, royalties, certain rents) at a flat **30% of the gross amount**, and it collects that tax by making the **payer** withhold it. The payer is personally liable for tax it fails to withhold, so payers default to the worst case: **no valid form on file, 30% comes off the top**, even on payments that should have carried a treaty rate or no withholding at all. The W-8 is what moves you off the default. Everything reported flows to the IRS on Form 1042-S, which is also the document a nonresident later uses to claim a refund on a [Form 1040-NR](form-1040-nr.md) if too much was taken.

## Which Form Is Yours

The W-8 family assigns one form per situation, and mismatches cause most of the trouble:

| Form | Who uses it |
|---|---|
| **W-8BEN** | Foreign individuals: freelancers, investors, property owners |
| **W-8BEN-E** | Foreign entities: corporations, partnerships abroad, foreign funds |
| **W-8ECI** | Foreign persons whose U.S. income is effectively connected with a U.S. business, such as rental owners under the net election |
| **W-8IMY** | Intermediaries and flow-throughs collecting for others |
| **W-9** | U.S. persons only, including citizens and green card holders abroad |

Two rows carry most of the traps. First, the **W-9 line**: U.S. citizens and green card holders are U.S. persons no matter where they live, and a U.S. person who signs a W-8BEN to avoid reporting has certified something false to a withholding agent, which is a much worse position than the withholding itself. Second, the **W-8ECI line**: a foreign owner of U.S. rental property who has made the [net election](foreign-owned-us-rental-property.md) gives the property manager a W-8ECI so rent flows without 30% gross withholding, in exchange for the annual 1040-NR that the election requires.

## The Foreign-Owned LLC Question

The single most common documentation error we see: a foreign founder forms a U.S. single-member LLC, a client or platform asks for tax forms, and someone signs a **W-9** because the LLC is "a U.S. company."

A single-member LLC that has not elected corporate treatment is **disregarded**: for withholding purposes the payee is the foreign owner, and the correct document is the owner's **W-8BEN or W-8BEN-E** (with the LLC's name noted on it), not a W-9. The distinction is not academic. A W-9 tells the payer to skip withholding and issue a 1099 as if the payee were a U.S. person, which misstates the owner's status and unravels precisely when the [Form 5472 filing](smllc-5472.md) or an [EIN application](ein-without-ssn-foreign-owners.md) tells the IRS the opposite story. LLCs that elected corporate taxation on [Form 8832](form-8832-entity-classification-elections.md), by contrast, really are U.S. taxpayers and provide a W-9. Our guide for [foreign-owned U.S. LLCs](foreign-owned-us-llc-ecommerce-sellers.md) walks through how this plays out with marketplaces and payment processors.

## Claiming Treaty Rates

Part II of the W-8BEN is where a tax treaty turns into cash flow. Without it, U.S.-source dividends carry 30% withholding; with a valid treaty claim, the rate drops to whatever the treaty provides (typically 5% to 15% on dividends, often 0% to 10% on interest and royalties, varying by country and ownership level). The claim requires a **foreign taxpayer identification number** from your home country (or an [ITIN](itin-application-form-w-7.md) in some cases), your country of residence matching the treaty, and the correct article and rate cited.

Treaty coverage is far from universal: the U.S. has income tax treaties with roughly seventy countries, and large parts of the world, including most of Latin America, much of Africa, and several major economies, are not on the list. No treaty means the statutory 30% stands on FDAP income, which makes the sourcing analysis below matter even more.

## When No Withholding Is Due at All

The happiest and most misunderstood case: **compensation for services is sourced where the work is performed**. A freelancer, developer, or agency anywhere in the world invoicing a U.S. client for work done entirely outside the U.S. earns **foreign-source income**, which is simply outside the U.S. withholding system. No 30%, no treaty needed, no U.S. return. The W-8BEN's role in that scenario is documentary: it is how the U.S. payer's file shows the payee was foreign and the income foreign-source, which is why clients insist on it even when nothing will be withheld. Days worked physically inside the U.S. break the analysis, pro rata, and platforms increasingly ask exactly that question.

## Validity, Expiration, and Housekeeping

A W-8BEN generally remains valid through the **end of the third calendar year after signature**, then must be refreshed, and it dies immediately if a certification becomes wrong: a move to a new country, loss of treaty residence, or becoming a U.S. resident under the [substantial presence test](form-8840-8843.md). Expired forms are treated as no form, meaning the 30% default quietly resumes, and recovering over-withheld tax means a 1042-S, an ITIN, and a 1040-NR refund claim: far more work than re-signing a form on time.

## When to Seek Help

Signing a W-8BEN for a personal brokerage account is routine. Get help when an **entity is in the chain** (the W-8BEN-E's FATCA classification section defeats most non-specialists), when a **foreign-owned U.S. LLC** needs its documentation aligned with its filings, when **treaty eligibility is uncertain**, or when a payer has already over-withheld and the money needs to come back. Withholding documentation is the front door of our [foreign business and investors practice](/services/international-tax/foreign-business-and-investors/): cheap to get right at onboarding, tedious and slow to fix after the 30% has left.
