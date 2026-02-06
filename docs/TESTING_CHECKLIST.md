# WAVE SS+ Testing Checklist

Use this checklist to verify PDF, print, i18n, appearance, functional, performance, accessibility, and cross-browser behavior.

---

## A. PDF & Print Testing

- [ ] **PDF generation – Documents**
  - [ ] Export PDF from Company Manual, Money & Finance, People & Admin, Products & Inventory, Sales & Customer, Service Delivery, Handbook (all 7).
  - [ ] Each PDF includes cover page, sections from MD (when `docId` provided), headers/footers, page numbers.
- [ ] **PDF generation – Records**
  - [ ] Export PDF from Records Repository (open any record, click Download PDF). Test at least one per category: Finance, HR, Sales, Operations, Inventory, Administrative, Quality.
  - [ ] PDF shows form structure, instructions, signatures, related documents.
- [ ] **PDF generation – Audits**
  - [ ] Export PDF from Audit Reports (open any audit, click Download Full PDF Report).
  - [ ] PDF shows executive summary, department assessments, risk analysis, findings, recommendations.
- [ ] **Print**
  - [ ] Print from document pages (Export > Print Document). Verify layout, no clipped content.
  - [ ] Print from Record modal (Print). Verify form layout.
- [ ] **Format & quality**
  - [ ] PDFs are A4.
  - [ ] Headers/footers on all content pages.
  - [ ] File sizes reasonable (e.g. &lt; 5 MB for typical docs).
  - [ ] PDFs open in Adobe Reader / system viewer.
  - [ ] Text is selectable/searchable.

---

## B. Translation Testing

### English (default)

- [ ] All navigation, documents, records, and messages in English.
- [ ] No stray placeholders or missing keys.

### French

- [ ] Switch to French. All UI strings translated.
- [ ] Grammar and terminology correct; no English remainder.
- [ ] Dates/numbers in DD/MM/YYYY where applicable.

### Arabic (RTL)

- [ ] Switch to Arabic. Layout is RTL (sidebar, nav, tables, forms).
- [ ] Icons and navigation mirrored appropriately.
- [ ] Arabic script renders correctly; numbers/dates in correct direction.
- [ ] PDF export works for Arabic; RTL preserved in PDF when applicable.

---

## C. Document Appearance

- [ ] Typography consistent across all 7 documents.
- [ ] Spacing and alignment uniform.
- [ ] Colors and component styling consistent.
- [ ] Responsive on desktop, tablet, mobile.
- [ ] Dark mode: no contrast or visibility issues.

---

## D. Functional Testing

- [ ] All navigation links and routes work (Home, Documents, Records, Audits, Settings).
- [ ] Document sidebar and “On this page” TOC work; scroll spy highlights current section.
- [ ] Search (Global Search) returns relevant results.
- [ ] Records Repository: search, department filter (including Administrative, Quality).
- [ ] Modals: open/close, PDF export, print.
- [ ] Language switch (EN/FR/AR) updates UI and direction (RTL for AR).
- [ ] Theme toggle (light/dark) works across pages.
- [ ] Cross-references and in-app links work.

---

## E. Performance

- [ ] Initial page load &lt; 3 s (target) on typical connection.
- [ ] PDF generation completes within a few seconds for standard docs/records/audits.
- [ ] Search responds quickly.
- [ ] No obvious memory growth during repeated PDF exports or navigation.

---

## F. Accessibility

- [ ] Full navigation via keyboard (Tab, Enter, Escape).
- [ ] Tab order logical.
- [ ] Focus indicators visible.
- [ ] ARIA labels where needed (buttons, links, modals).
- [ ] Color contrast meets WCAG AA.
- [ ] Text resizable to 200% without breaking layout.
- [ ] Touch targets at least 44×44 px where applicable.

---

## G. Cross-Browser

- [ ] **Chrome**: All features above pass.
- [ ] **Firefox**: All features above pass.
- [ ] **Edge**: All features above pass.
- [ ] **Safari** (if available): All features above pass.

Document any browser-specific issues in a compatibility matrix or notes.

---

## How to Run

1. Start dev server: `npm run dev`.
2. Work through each section, checking boxes as you verify.
3. Run content audit: `npm run audit:content`. Review `audit-report.md`.
4. Production build: `npm run build`. Fix any build errors.
5. Run `npm run preview` and re-test critical paths.

---

*Last updated: 2026-01-29*
