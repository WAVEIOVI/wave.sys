# SS PLUS Management System (v02)

A comprehensive documentation and management platform built for SS PLUS by WAVE IO. This system serves as a centralized hub for company policies, operational procedures, records management, and audit tracking.

## 🚀 Features

### 📄 Document Viewer
- **7 Documents**: Company Manual, Money & Finance, People & Admin, Products & Inventory, Sales & Customer, Service Delivery, Employee Handbook.
- **React + MD**: Custom React document pages; PDF export uses full MD from `src/data/documents/` when available.
- **Smart Navigation**: Auto-generated Table of Contents with scroll spying and sticky positioning.
- **PDF Export**: Generate A4 PDFs with cover page, sections, headers/footers, and page numbers.
- **Deep Linking**: Direct links to specific sections within documents.

### 🔍 Search Intelligence
- **Global Search**: Accessible via `Cmd+K` or header search bar.
- **Fuzzy Matching**: Powered by Fuse.js to find content even with typos.
- **Granular Results**: Indexes both document titles and individual content sections.

### 🗂 Records Repository
- **Centralized Library**: 50+ management templates, forms, and policies.
- **Organization**: Categorized by 7 departments (Finance, HR, Sales, Operations, Inventory, Administrative, Quality).
- **Filtering**: Instant filtering by department and search.
- **PDF Export**: Export any record as PDF (form structure, instructions, signatures).

### 📊 Audit Dashboard
- **KPI Tracking**: Real-time view of audit statuses (Completed, In Progress, Draft).
- **Report Management**: Searchable audit history with category breakdowns.
- **PDF Export**: Download full audit reports as PDF (executive summary, departments, risks, findings, recommendations).
- **Action Items**: Visual tracking of compliance action items.

### 🌐 Internationalization (i18n)
- **Languages**: English, Français, العربية.
- **RTL**: Full RTL layout support for Arabic (`dir="rtl"`, `src/styles/rtl.css`).
- **Locale files**: `src/i18n/locales/en.json`, `fr.json`, `ar.json`.

## 🛠 Tech Stack

- **Framework**: React 18 + Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **State/Routing**: React Router v6
- **Utils**: 
  - `fuse.js` (Search)
  - `@react-pdf/renderer` (PDF: documents, records, audits)
  - `file-saver` (PDF download)
  - `react-markdown` (Content Rendering)
  - `framer-motion` (Animations)
  - `i18next` / `react-i18next` (i18n)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wave.sys
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:4000`.

## 🏗 Build & Deployment

To create a production build:

```bash
npm run build
```

This runs `tsc` then `vite build` and outputs to `dist/`, ready for static hosting (Netlify, Vercel, AWS S3, etc.).

### Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server (Vite) |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run type-check` | `tsc --noEmit` |
| `npm run audit:content` | Compare MD sources (`src/data/documents/`) vs React document pages; writes `audit-report.md` |

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── common/       # Button, Card, Modal, etc.
│   ├── document/     # Doc viewer (MarkdownRenderer, DocSidebar, etc.)
│   ├── document-elements/ # DocumentLayout, Section, Table, PDFDocument, etc.
│   ├── layout/       # Header, Footer, Container
│   ├── modals/       # AuditReportModal, RecordPreviewModal, etc.
│   ├── pdf/          # DocumentPDF, RecordPDF, AuditPDF (@react-pdf)
│   └── search/       # GlobalSearch
├── data/             # Navigation, documents MD, records, audits
├── i18n/             # i18n config + locales (en, fr, ar)
├── hooks/            # useSearch, useScrollSpy
├── pages/            # Home, DocumentViewer, RecordsRepository, AuditReports, documents/* (React doc pages)
├── types/            # TypeScript types (records, audit, document)
├── utils/            # documentLoader, search, pdf/generatePDF, pdf/pdfStyles
└── App.tsx           # Entry, routing, theme, i18n
```

## 📚 Documentation

- **User guide**: [docs/USER_GUIDE.md](docs/USER_GUIDE.md) — Navigation, documents, records, audits, PDF export, language, search.
- **Developer guide**: [docs/DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md) — Setup, architecture, adding documents/records, i18n.
- **Testing**: [docs/TESTING_CHECKLIST.md](docs/TESTING_CHECKLIST.md) — PDF, print, i18n, functional, a11y, cross-browser.
- **Translation**: [docs/TRANSLATION_GUIDE.md](docs/TRANSLATION_GUIDE.md) — EN/FR/AR keys, RTL, document/record translation.
- **Troubleshooting**: [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) — Build, PDF, i18n, audit script, common fixes.
- **Content audit**: Run `npm run audit:content`; see `audit-report.md` for MD vs React match.

## 🎨 Design System

The project uses a custom design system based on WAVE IO branding:
- **Primary Color**: Ocean Blue (`colors.primary`)
- **Secondary Color**: Teal (`colors.secondary`)
- **Fonts**: Inter (UI) and Poppins (Headings)
- **Dark Mode**: Fully supported with system preference detection.

## 📝 License

Proprietary software developed for SS PLUS. All rights reserved.
