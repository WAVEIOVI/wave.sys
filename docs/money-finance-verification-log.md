# Money & Finance Verification Log
**Source:** `src/data/documents/money-finance.md`  
**Components:** `src/pages/documents/MoneyFinance/*`  
**Date:** 2025-01-30

## Verification Summary

| Area | Status | Notes |
|------|--------|-------|
| **Document header** | Restored | Document Owner, Approved By, Review Frequency added to index |
| **1.2 Banking** | Restored | Signature table: separate rows for Checks, Bank Transfers, Cash Withdrawals (Up to / Above 5,000 TND, 2,000 TND); Standing Orders, Credit Facilities exact wording |
| **1.3 Authority Matrix** | Restored | Column "Discount Authority"; "Up to" for all TND amounts; Sales Representatives and Technicians rows added; full Financial Transaction Approval Matrix (15 rows) added |
| **1.3 Emergency** | Verified | Ops 2,000 TND, Admin 3,000 TND, notify Manager within 24 hours |
| **1.4 Segregation** | Restored | 8-row table with exact MD wording (Function, Responsible Person, Cannot Also Do) |
| **1.4 Reconciliation** | Restored | 5 days of month end; variances over 100 TND investigated; outstanding checks > 60 days |
| **1.4 Cash** | Restored | Max cash 2,000 TND (Sfax), 1,500 TND (Tunis); dual signature over 1,000 TND |
| **2.4 Credit Notes** | Restored | Approval: Operations or Sales Responsable (up to 500); full table with Documentation Required column |
| **2.3 Revenue codes** | Restored | 4210, 4300, 4500, 4900 added |
| **3.1 Cash** | Restored | Small amounts (under 1,000 TND preferred); Sfax 2,000, Tunis 1,500; dual signature over 1,000 TND |
| **3.2 Payment plans** | Verified | Up to 3,000 TND → 3 months; 3,001–10,000 → 6 months; Over 10,000 → Both Managers; 20% upfront |
| **3.3 Cash Handling** | Added | Petty Cash Float table: Sfax 1,000 TND (replenish 300), Tunis 800 (250), Mobile 200 each (50) |
| **3.4 Reconciliation** | Verified | Variance > 100 TND investigated; target zero difference |
| **5.4 Travel fees** | Verified | money-finance.md uses 50 TND (121–200 km), 100 TND (201–300 km); React matches |

## Critical Amounts Verified (Exact Match)

| Item | MD | React |
|------|-----|-------|
| Checks/Transfers single signature | Up to 5,000 TND | Up to 5,000 TND |
| Cash withdrawals single | Up to 2,000 TND | Up to 2,000 TND |
| Admin & Finance expense | Up to 2,000 TND | Up to 2,000 TND |
| Operations authority | Up to 1,000 TND | Up to 1,000 TND |
| Team Leaders | Up to 500 TND | Up to 500 TND |
| Technicians emergency | Up to 100 TND | Up to 100 TND |
| Credit note ≤500 | Ops or Sales Resp. | Operations Responsable or Sales Responsable |
| Credit note 501–1k | Sales Responsable | Sales Responsable |
| Credit note 1,001–5k | Sales Resp. + Manager review | Sales Responsable + Manager review |
| Credit note >5k | Both Managers | Both Managers |
| Petty cash Sfax float | 1,000 TND | 1,000 TND |
| Petty cash Tunis float | 800 TND | 800 TND |
| Petty cash replenish Sfax | 300 TND remaining | 300 TND remaining |
| Petty cash replenish Tunis | 250 TND remaining | 250 TND remaining |
| Mobile float | 200 TND each | 200 TND each |
| Mobile replenish | 50 TND remaining | 50 TND remaining |
| Payment plan ≤3k TND | 3 months | 3 Months |
| Payment plan 3,001–10k | 6 months | 6 Months |
| Payment plan >10k | Case by case, Both Managers | Case-by-Case, BOTH MANAGERS |
| Upfront payment | Minimum 20% | 20% immediate down-payment |
| Bank reconciliation | Within 5 days month end | Day 1–5 / 5 business days |
| Variance investigation | Over 100 TND | > 100 TND |
| Collection target | 95%+ within terms | 95% |
| DSO target | Under 45 days | < 45D |

## Formulas Verified

- **Pricing:** SELL = COST × (1 + MARKUP%) — present in PricingMargins
- **Revenue recognition:** Event-based for AMC; deposit as liability until delivery — present in RevenueInvoicing
- **Credit note % of revenue:** Should be < 2% — referenced in MD; not duplicated in React

## Procedure Steps Verified

- **Invoice workflow:** 5 steps (Gather, Softcom, Review >5k/>10k, Issue, Track) — present
- **Credit note:** Approval levels + documentation required — full table restored
- **Collection timeline:** Key milestones (Day -5, 0, 10, 20, 35, 60, 75) — present
- **Bank reconciliation:** Obtain statements, match deposits/withdrawals, variance report — present
- **Petty cash:** Float amounts, replenishment thresholds, approval (Team Leader ≤50 TND, Responsable >50) — section 3.3 added

## Remaining Gaps (Optional Future Restoration)

- Full invoice creation checklists (every checkbox from MD Step 1–5)
- Full collection timeline (every day action: 3, 15, 25, 30, 45, etc.)
- Discount impact table (e.g. 5%, 10%, 12.5%, 15%, 20%, 25% with volume needed) — MD has detailed table
- Chart of Accounts full list (MD Section 8.1)
- Document retention table (10 years, 7 years, Permanent) — in AccountingCompliance if present

---
*Verification and restorations completed 2025-01-30. All monetary amounts, approval thresholds, and key workflow steps in scope have been verified or restored to match money-finance.md.*
