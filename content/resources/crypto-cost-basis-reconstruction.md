---
title: "Crypto Cost Basis: How to Reconstruct It Across Wallets and Exchanges"
description: "If your basis records are a mess of CSV exports, dead exchanges, and self-custody transfers, you are not alone, and the new per-wallet rules make it urgent. Reconstructing basis correctly is what keeps the IRS from treating your entire proceeds as gain."
date: 2026-06-21
practices: ["individuals"]
services: ["individual-tax"]
featured: false
subtopic: "Compliance & Reporting"
primary_cluster: "individual-tax"
clusters: ["individual-tax"]
strategy_snapshot:
  summary: "Crypto is taxed as property, so every disposal needs a cost basis. After thousands of transactions across exchanges, wallets, and DeFi, that basis is often scattered or missing. New per-wallet tracking rules and broker 1099-DA reporting make clean reconstruction essential, because unsupported basis can be treated as zero, taxing your full proceeds as gain."
  bullets:
    - label: Why it matters
      text: "Without provable basis, the IRS can treat it as $0, meaning your entire sale proceeds become taxable gain. Reconstruction is how you reclaim the basis you actually have."
    - label: The 2025 change
      text: "Basis must now be tracked per wallet or account, not pooled universally. A one-time safe harbor let taxpayers allocate existing basis across accounts as of the start of 2025."
    - label: The hidden complication
      text: "Transfers between your own wallets are not taxable, but they break automated basis tracking. Most reconstruction errors trace back to untracked self-transfers."
faqs:
  - q: "What happens if I cannot prove my crypto cost basis?"
    a: "If you cannot substantiate basis, the IRS can treat it as zero, which means your entire sale proceeds are taxed as gain. Reconstructing basis from exchange records, blockchain history, and transfer logs is how you avoid overpaying, sometimes dramatically."
  - q: "What are the new per-wallet basis rules?"
    a: "Beginning in 2025, you must track cost basis on a per-wallet or per-account basis rather than pooling all holdings together. A one-time safe harbor allowed taxpayers to reasonably allocate their existing unused basis across their wallets and accounts as of January 1, 2025."
  - q: "Are transfers between my own wallets taxable?"
    a: "No. Moving crypto between wallets you own is not a taxable event. But these transfers frequently break cost-basis tracking in software, because the basis must follow the coins to the new wallet. Untracked self-transfers are the most common source of reconstruction errors."
  - q: "Can I choose which coins I sold to lower my taxes?"
    a: "Yes, if you use specific identification and can document it. By identifying which specific units (lots) you sold, often the highest-basis ones, you can reduce your gain compared to the FIFO default. This requires adequate records tying the sale to the chosen lot."
---

Crypto investors rarely get into trouble because they tried to cheat. They get into trouble because, after a few years and a few thousand transactions across Coinbase, a hardware wallet, two DeFi protocols, and an exchange that no longer exists, **nobody can say what they paid for any of it**. That missing history, cost basis, is the single biggest driver of crypto tax pain, and the rules just got stricter about it.

{{< pullquote attribution="Why this is the whole ballgame" >}}
If you cannot prove what you paid, the IRS can assume you paid nothing, and tax your entire proceeds as gain. Reconstruction is how you get back the basis you genuinely have.
{{< /pullquote >}}

## Why Basis Is So Hard in Crypto

Because crypto is treated as **property**, every disposal (a sale, a swap, a purchase) needs a cost basis to measure gain or loss, as covered in the [crypto tax guide](crypto-tax-guide.md). In practice, that basis gets scattered:

- Activity spread across **multiple exchanges and self-custody wallets**
- **Defunct or hacked exchanges** whose records you can no longer download
- **Staking, airdrops, and rewards**, whose basis is their value when received as income
- **Transfers between your own wallets**, which break automated tracking
- **DeFi** interactions that software struggles to interpret

The result is a 1099-DA from one exchange that knows only part of the story, and gaps everywhere else.

## The Zero-Basis Risk

Here is the stakes-setter. If you report a sale but cannot substantiate the basis, the default outcome is **`$0` basis**, your **entire proceeds** become taxable gain.

{{< callout title="What zero basis actually costs" tone="warning" >}}
Sell $80,000 of crypto that you actually bought for $65,000, and your real gain is $15,000. With no provable basis, the IRS can tax the full $80,000. At a 24% rate, that is the difference between roughly $3,600 and $19,200 of tax. Reconstruction is not paperwork for its own sake; it is reclaiming tens of thousands of dollars of basis you are entitled to.
{{< /callout >}}

## The New Per-Wallet Rules

Two changes make 2025 a turning point for basis tracking.

- **Per-wallet (per-account) tracking.** You can no longer treat all your crypto as one universal pool. Basis must be tracked **wallet by wallet, account by account**. A one-time **safe harbor** let taxpayers reasonably allocate their existing unused basis across wallets as of **January 1, 2025**, a step that, done correctly, sets a clean starting line.
- **Form 1099-DA.** Brokers now report your transactions to the IRS. But broker reporting covers only custodial activity, it does not see your self-custody wallets or most DeFi, and it often lacks historical basis. The mismatch between what brokers report and what you report is exactly what triggers notices.

## The Self-Transfer Problem

The most common reconstruction error has a simple cause: **moving coins between your own wallets is not taxable, but the basis has to move with them.** Tax software that does not see both sides of a transfer will often record the outbound move as a sale (overstating gain) or the inbound coins as zero-basis (overstating future gain). Identifying and correctly labeling every self-transfer is usually the most painstaking, and most valuable, part of a reconstruction.

## How Reconstruction Actually Works

A clean reconstruction follows a repeatable process:

1. **Inventory every venue:** list all exchanges, wallets, and protocols you have ever used.
2. **Pull all records:** API connections and CSV exports from each exchange; on-chain history for self-custody addresses.
3. **Load into a sub-ledger:** a tool like Koinly or CoinTracker aggregates everything into one timeline.
4. **Reconcile transfers:** match outbound and inbound self-transfers so basis follows the coins.
5. **Classify income events:** assign correct basis to staking, airdrops, and rewards (their value when received).
6. **Choose a method:** apply FIFO, or **specific identification** if you can document it, to manage the gain.
7. **Produce the forms:** generate Form 8949 and Schedule D, and reconcile against any 1099-DA.

{{< callout title="Specific identification can lower the bill" tone="opportunity" >}}
The default method is FIFO, which often sells your oldest, lowest-basis coins first and maximizes gain. With adequate records, specific identification lets you choose which lots you sold, typically the highest-basis ones, to reduce the taxable gain. The ability to do this is only as good as your records, which is one more reason reconstruction pays off.
{{< /callout >}}

## Don't Forget the International Layer

If any of your activity ran through **foreign exchanges**, reconstruction may surface a reporting obligation beyond income tax. Foreign-held crypto can intersect with [FBAR](fbar-fincen-114-who-must-file.md) and other foreign-account rules, an area FinCEN continues to develop. Cleaning up basis is often the moment these obligations come to light.

## When to Seek Help

A modest history on one or two custodial exchanges is usually manageable with consumer software and patience. The case for professional help is strong when you have **high transaction volume across many wallets**, **DeFi or staking activity**, **records from defunct exchanges**, **prior years filed with wrong or missing basis**, or **foreign-exchange exposure**. Reconstruction is detailed, one-time-painful work, and getting it right protects every future return you file. Doing it before an IRS notice arrives, rather than after, is the difference between a clean project and a defensive scramble.
