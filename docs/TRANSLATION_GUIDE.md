# WAVE SS+ Translation Guide

How to add or update translations (EN/FR/AR) and work with RTL.

---

## Setup

- **i18n**: `react-i18next` + `i18next` + `i18next-browser-languagedetector`
- **Locale files**: `src/i18n/locales/en.json`, `fr.json`, `ar.json`
- **Config**: `src/i18n/config.ts` (init, detection, RTL toggle for `ar`)

---

## Translation Format

- **Structure**: Nested keys, e.g. `app.title`, `records.finance`, `pdf.download`
- **Interpolation**: `{{count}}` for numbers, e.g. `forms.minLength`
- **Usage**: `const { t } = useTranslation(); t('pdf.download')`

---

## Adding or Updating Keys

1. Add the key to **all three** locale files: `en.json`, `fr.json`, `ar.json`
2. Use the same structure in each (nesting, `{{count}}`, etc.)
3. Keep EN as source of truth; translate FR/AR accordingly
4. Re-run the app and switch languages to verify

---

## Document & Record Content

- **UI strings** (nav, buttons, labels, messages): Use i18n keys in locale files as above.
- **Document body** (Company Manual, Money & Finance, etc.): Currently in React components (Option B). To translate:
  - **Option A**: Extract section text into i18n keys (e.g. `documents.companyManual.intro`) and add FR/AR entries. Use `t(...)` in components.
  - **Option B**: Add translated MD files (e.g. `company-manual.fr.md`, `company-manual.ar.md`) and load by locale in `documentLoader` when exporting PDF or rendering MD-based views.
- **Records** (form labels, instructions): Defined in `src/data/records/*.ts`. To translate, either move labels to i18n keys keyed by `recordId.fieldName` or maintain separate record metadata per locale.

---

## RTL (Arabic)

- **Automatic**: When language is `ar`, `document.documentElement` gets `dir="rtl"` and `lang="ar"` (see `src/i18n/config.ts`).
- **Styles**: `src/styles/rtl.css` provides RTL overrides (layout, spacing, tables, forms, etc.). Use `[dir="rtl"]` selectors for RTL-specific rules.
- **PDF**: DocumentPDF, RecordPDF, and AuditPDF use LTR by default. For RTL PDFs (e.g. Arabic export), extend PDF styles to support `direction: 'rtl'` and Arabic-friendly fonts when generating for `ar`.

---

## Date & Number Formats

- Use DD/MM/YYYY for EN/FR/AR where appropriate.
- Format numbers (e.g. currency) per locale if needed (e.g. `Intl.NumberFormat`).

---

## Checklist for New Features

- [ ] Add all user-facing strings to `en.json`, `fr.json`, `ar.json`
- [ ] Use `t('...')` in components; avoid hardcoded UI text
- [ ] Verify FR grammar and terminology; no leftover EN
- [ ] Verify AR layout (RTL), script, and mixed content (numbers, dates)
- [ ] Test language switch and RTL toggle
- [ ] If adding PDF or print: consider RTL/locale-specific output when applicable

---

*Last updated: 2026-01-29*
