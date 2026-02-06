# WAVE SS+ Developer Guide

Setup, architecture, and how to extend the system.

## Setup

```bash
npm install
npm run dev
```

- **Type-check**: `npm run type-check`
- **Build**: `npm run build`
- **Content audit**: `npm run audit:content` (writes `audit-report.md`)

## Architecture

- **Documents**: React pages under `src/pages/documents/` use `DocumentLayout`; PDF export fetches MD from `src/data/documents/` via `loadDocumentContent(docId)` and uses `DocumentPDF`.
- **Records**: Data in `src/data/records/`. Rendered in `RecordsRepository` and `RecordViewModal`. PDF via `RecordPDF`.
- **Audits**: Data in `src/data/audits.ts` and `src/data/audit/`. PDF via `AuditPDF`.
- **PDF**: `@react-pdf/renderer`. Components: `DocumentPDF`, `RecordPDF`, `AuditPDF`. Utils: `src/utils/pdf/generatePDF.ts`, `pdfStyles.ts`.
- **i18n**: `react-i18next`, locales in `src/i18n/locales/`, RTL in `src/styles/rtl.css`.

## Key Paths

- Document MD: `src/data/documents/*.md`
- Document loader: `src/utils/documentLoader.ts`
- Navigation: `src/data/navigation.ts`
- Records: `src/data/records/index.ts`, `*-records.ts`
- PDF components: `src/components/pdf/`
- i18n: `src/i18n/config.ts`, `src/i18n/locales/*.json`

## Adding a Document

1. Add MD under `src/data/documents/<id>.md`.
2. Add entry in `src/data/navigation.ts`.
3. Add React page and route, or use DocumentViewer with `/document/<id>`.

## Adding a Record

1. Define record per `ManagementRecord` in `src/types/records.ts`.
2. Add to `src/data/records/` and `allManagementRecords`.

## i18n

Add keys to `en.json`, `fr.json`, `ar.json`. Use `t('key')` in components. See [TRANSLATION_GUIDE.md](TRANSLATION_GUIDE.md).

## Testing

See [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md).

*Last updated: 2026-01-29*
