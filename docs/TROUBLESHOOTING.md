# WAVE SS+ Troubleshooting

Common issues and fixes.

---

## Build & Run

### `npm run build` fails with `spawn EPERM` (esbuild)

- **Cause**: Often antivirus, permissions, or environment blocking esbuild spawn.
- **Try**: Run terminal as Administrator; temporarily exclude project folder from antivirus; run from a different directory (e.g. shorter path, no symlinks).
- **Verify**: `npm run type-check` (tsc only) succeeding means TypeScript is fine; the failure is usually in Vite/esbuild.

### `npm run audit:content` fails with `spawn EPERM` or similar

- **Cause**: Script uses `tsx`, which uses esbuild. Same environment issues as above.
- **Try**: Same as for build. Alternatively run `node` with a precompiled script or use `ts-node` if configured.

### Dev server won’t start or port in use

- **Check**: Another process using the dev port (e.g. 5173). Change port in `vite.config.ts` or stop the other process.

---

## PDF Export

### “Download PDF” does nothing or errors

- **Check**: Browser console for errors. Ensure `@react-pdf/renderer` and `file-saver` are installed.
- **Documents**: Export uses `loadDocumentContent(docId)`. Ensure `docId` is passed to `DocumentLayout` and matches `navigation` ids. MD must exist under `src/data/documents/<id>.md`.
- **Records / Audits**: Ensure `RecordPDF` / `AuditPDF` receive the correct `record` / `audit` prop.

### PDF content missing or wrong

- **Documents**: PDF is built from MD when `docId` is set. If MD is missing or empty, PDF falls back to a short overview. Verify MD path and content.
- **Records**: PDF reflects `formStructure`, `instructions`, `relatedDocuments`. Check record data shape.
- **Audits**: PDF uses `content.executiveSummary`, `departmentAssessments`, `riskAnalysis`, `findings`, etc. Check audit data.

---

## i18n & RTL

### Translations not updating

- **Check**: Keys exist in all locale files (`en`, `fr`, `ar`). Hard refresh or clear cache. Ensure `useTranslation` and `t('...')` use the correct keys.

### RTL layout broken (Arabic)

- **Check**: `document.documentElement` has `dir="rtl"` when language is `ar` (see `src/i18n/config.ts`). `src/styles/rtl.css` is imported. Overrides use `[dir="rtl"]`. Fix any conflicting LTR-only rules.

### Dates/numbers format wrong

- Use locale-aware formatting (e.g. `Intl.DateTimeFormat`, `Intl.NumberFormat`) when displaying dates or numbers per language.

---

## Content Audit

### Audit report shows 0% or low match

- **Script**: Compares `src/data/documents/*.md` vs React document pages under `src/pages/documents/`. It extracts text from MD and from TSX and compares paragraphs.
- **Low match**: React pages may omit or restructure content vs MD. Add missing content to React components (Option B) or switch to MD-as-source (DocumentViewer) for those docs to improve match.

### Audit script can’t find MD files

- **Check**: Script uses `src/data/documents/` (see `scripts/content-audit.ts`). Ensure MD files live there and filenames match the config (e.g. `company-manual.md`).

---

## Records & Filters

### New department (e.g. Administrative, Quality) not in filter

- **Check**: `RecordsRepository` includes the department in its `departments` array. `ManagementRecord.department` in `src/types/records.ts` must include that value.

### Record PDF or modal broken for a specific record

- **Check**: Record shape matches `ManagementRecord` (`formStructure.sections`, `fields`, etc.). Invalid or missing fields can break `RecordPDF` or form rendering.

---

## Other

### Search returns no results

- **Check**: Search index and logic (e.g. `useSearch`, `GlobalSearch`). Ensure documents/content are loaded and indexed correctly.

### Dark mode or theme toggle not working

- **Check**: `ThemeContext` and theme toggle component. Ensure theme class or attribute is applied to a top-level element and that Tailwind dark variants are used correctly.

---

*Last updated: 2026-01-29*
