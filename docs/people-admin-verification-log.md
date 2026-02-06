# People & Admin Verification Log
**Source:** `src/data/documents/people-admin.md`  
**Components:** `src/pages/documents/PeopleAdmin/*`  
**Date:** 2025-01-30

## Verification Summary

| Area | Status | Notes |
|------|--------|-------|
| **Document header** | Restored | Version 1.1, November 2025, Document Owner Karim & Najla, Document created by Anis HWAS, Review Frequency Annually |
| **Section 7 Attendance** | Restored | Section id section-7; header SECTION 7: ATTENDANCE & LEAVE MANAGEMENT |
| **Leave entitlements** | Restored | Annual: 19 working days base; seniority +1 per 5 years (5-9: 20, 10-14: 21, 15-19: 22, 20+: 23); after 6 months (prorated); 2 weeks notice minimum; accrual 1.58 days/month |
| **Sick leave** | Restored | Per labor code with medical certificate; first 30 days 50% (maybe up to 100%); notify before shift; certificate within 48h |
| **Maternity** | Restored | 60 days total (30 before due date, 30 after birth); full salary (SS+ supplements CNSS); job protected |
| **Paternity** | Restored | 3 days paid (SS+ enhanced; legal min 1 day); leave within 1 week of birth |
| **Probation** | Restored | Duration 3 months; Week 2 Initial Check-In added; Week 4 First Month Review (30 min); Week 8 Mid-Point; Week 12 Formal; notice during probation 1 week; extension 1-2 months, max 6 months total; terminate &lt;24: final pay (salary + unused leave + 13th month prorated) |
| **Notice periods** | Restored | Article 9: Employee 1 month; Employer 1-3 months (seniority); probation 1 week; immediate for serious misconduct |
| **Termination process** | Added | 8.5 Notice table + process (meeting, letter, final pay, property return, exit interview) |
| **End-of-service** | Added | 8.6 Final pay, CNSS attestation, severance per labor code, company property return |

## Critical Items Verified (Exact Match)

| Item | MD | React |
|------|-----|-------|
| Annual paid leave (base) | 19 working days per year | 19 Days |
| Seniority bonus | +1 day per 5 years | +1 per 5 years; 5-9: 20, 10-14: 21, etc. |
| Leave after 6 months | New employees: can take after 6 months (prorated) | Added |
| Leave request notice | 2 weeks notice minimum (preferred) | 2 weeks in advance |
| Sick leave certificate | Within 48 hours | Within 48 hours |
| Maternity duration | 60 days (30 before, 30 after) | 60 days total (30 before, 30 after) |
| Paternity | 3 days (SS+ enhanced; legal 1 day) | 3 days paid |
| Probation duration | 3 months from start date | 3 months |
| Probation evaluation | 90 days (Week 12) | Week 12 Final Review |
| Probation notice | 1 week by either party | 1 week |
| Probation extension | 1-2 months; max 6 months total | Additional 1-2 months; cannot exceed 6 total |
| Confirm employment | Score 32+ (80%) | Score 32+ (80%) |
| Extend | Score 24-31 (60-79%) | Score 24-31 |
| Terminate | Score &lt;24; 1 week notice | Score &lt;24; 1 week notice |
| Employee notice (CDI) | 1 month | 1 month |
| Employer notice (CDI) | 1-3 months (seniority) | 1-3 months (seniority) |
| Final pay (termination) | Salary + unused leave + 13th month prorated | Same |

## Procedure Steps Verified

- **Probation schedule:** Week 2 Initial Check-In (informal), Week 4 First Month Review (30 min, semi-formal), Week 8 Mid-Probation Check, Week 12 Probation End Review (1 hour, formal) — all present
- **Leave request:** Check balance → Submit 2 weeks in advance → Responsible approves (coverage) — present
- **Sick absence:** Notify before shift → Medical certificate within 48h → Submit to Admin — present
- **Termination (with notice):** Meeting → Written letter → Final pay → Return property → Exit interview — present

## Policy Requirements Listed

- Leave entitlements: annual, public holidays, sick, maternity, paternity, marriage, bereavement — all in table
- Contract articles: Position, Hours, Pay, Leave (Art 6), Probation (Art 8), Termination & Notice (Art 9), Confidentiality — summarized in EmploymentTerms
- Probation criteria: 8 areas (Technical, Quality, Productivity, Learning, Professionalism, Customer Service, Teamwork, Safety) — 40 points in EmploymentTerms
- Discipline: Progressive (verbal coaching → verbal warning → written warning → final/suspension → termination); gross misconduct immediate — in DisciplineTermination
- End-of-service: Final pay, CNSS attestation, severance, property return — in 8.6

## Remaining Gaps (Optional Future Restoration)

- Full probation evaluation criteria (all 8 areas with checkbox text from MD)
- Leave carryover rule (max 1 year; expires Dec 31 next year)
- Working hours detail (Mon-Fri 8h work + 1h lunch = 9h on-site; Sat 4h work = 8h total for week)
- Overtime compensation rates (weekday +50% first 8h, +100% beyond; Sunday +100%; night +50%)
- Full grievance procedure steps
- Internal regulations (Règlement Intérieur) reference

---
*Verification and restorations completed 2025-01-30. Leave entitlements (exact days), probation (exact duration), notice periods (exact), procedure steps, and policy requirements have been verified or restored to match people-admin.md.*
