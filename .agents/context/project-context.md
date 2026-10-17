# Project Context

> Technical README for AI agents. Read before starting work.

---

## Project Name

resume-as-code

## Description

A web-based single source of truth for Aphiwish Aphisaksiri's resume and master CV. Renders ATS-friendly, pixel-perfect 1-page resumes and company-tailored variants with instant live preview, exact page boundary visualization, and vector PDF export.

## Problem Being Solved

Eliminates brittle Word/DOCX formatting, unversioned binary files, and tedious manual tailoring by using Git-versioned code, structured data, and AI agent pairing.

## Target Users

- **Aphiwish Aphisaksiri (Author)** — editing, maintaining, and tailoring with AI assistance.
- **Recruiters and Hiring Managers** — receiving clean, high-contrast, ATS-parseable vector PDFs and web links.

---

## Key User Workflows

> These flows must never break.

1. **Live Previewing** — Viewing the resume in the browser with realistic A4 / Letter paper boundaries and real-time HMR.
2. **PDF Export** — Exporting clean, vector-sharp PDFs via browser print (`window.print()`) with clickable links and zero layout shifts.
3. **Master Experience Tracking** — Maintaining comprehensive career history and metrics in `.agents/docs/Master CV Aphiwish Aphisaksiri 20261017.md`.
4. **Tailored Variations** — Easily creating or toggling role/company-specific views (e.g. `/omise`, `/nvidia`) from the master dataset.

---

## Environment & Setup

### Prerequisites
- Node.js (v18+ LTS recommended)
- npm (comes with Node)

### Install & Run
```bash
npm install
npm run dev          # Start local Vite development server
npm run build        # Validate TypeScript and production build
```

### Environment Variables
None required (static client-side application).

---

## Important Paths / Entry Points

- `src/App.tsx` — Main application root and preview shell.
- `src/data/resume.ts` — Structured resume data backing the active view.
- `src/styles/print.css` — Strict print media styles (`@page`, `@media print`).
- `.agents/docs/Master CV Aphiwish Aphisaksiri 20261017.md` — Full career experience and metrics catalog.
- `.agents/docs/Resume Aphiwish Aphisaksiri 20261017.md` — Baseline 1-page resume reference.
- `D:\Homework\LifeCH1\Codes` — External reference directory containing author's projects (e.g., `portfolio`, `ProjectHub`, etc.).

---

## Hard Constraints

- **Strict 1-Page Bound:** The baseline resume must strictly fit on a single page without accidental spillover into page 2.
- **ATS Compatibility:** Standard semantic HTML headings (`h1`, `h2`, `p`, `ul`, `li`), clean selectable text, and parseable contact links.
