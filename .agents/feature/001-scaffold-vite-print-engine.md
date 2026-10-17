# Feature 001: Scaffold Vite Print Engine

Status: Complete

Ticket: none

> **Refinement round 1 Completed 2026-10-17** Resolution applied:
> - Concern #1: Dynamic `@page` sizing vs Browser Print Dialog — Inject dynamic `<style id="print-page-style">` tag in `ResumePaper` to set `@page { size: A4 portrait; margin: 0; }` or `@page { size: letter portrait; margin: 0; }` matching active toolbar selection, automatically commanding browser print preview to match target format.
> - Concern #2: Font Loading & Print Reliability — Bundle `@fontsource/inter` via npm rather than Google Fonts CDN link, preventing FOUT and ensuring 100% offline, deterministic vector PDF rendering.
> - Concern #3: Missing Real-Time Page Overflow Detection — Added `ResizeObserver` / layout measurement in `ResumePaper` to compare content height against physical page boundaries and display a warning badge in `Toolbar` with visual indicators.
> - Concern #4: Background Graphics & Color Preservation — Explicitly added `-webkit-print-color-adjust: exact` and `print-color-adjust: exact` in `src/styles/print.css`.
> - Concern #5: Schema Alignment with Baseline Resume — Pre-aligned `src/data/types.ts` with all fields needed for `Resume Aphiwish Aphisaksiri 20261017.md` (role summaries, tech stack badges, categorized skills, education honors/awards).
> - Concern #6: Screen Canvas Zoom / Scale Control — Added zoom controls (`Fit`, `100%`, `90%`, `80%`) to `Toolbar.tsx` with CSS `transform: scale()` for comfortable editing on laptop screens.
> - Concern #7: ATS Accessibility for Vector Icons — Mandate `aria-hidden="true"` and `focusable="false"` on `lucide-react` icons so ATS and screen readers only parse clean semantic text.

## Goal

Scaffold the foundational project structure using Vite, React, and TypeScript with strict typing, bundled Inter typography, vanilla CSS print engine with dynamic `@page` sizing, real-time 1-page overflow monitoring, screen preview workbench with zoom controls, and print-to-PDF controls. This establishes the rock-solid base onto which the baseline resume (Feature 002) and modular tailored views will be built.

## Background / Context

The goal of `resume-as-code` is to eliminate fragile Word/DOCX formatting by establishing a Git-versioned, web-based single source of truth. The application must render a clean screen preview with exact paper boundaries and export a crisp, ATS-friendly vector PDF via native browser print (`window.print()`). 

Prior decisions recorded in `.agents/context/project-context.md`, `architecture.md`, `code-standards.md`, and `ui-context.md`:
- Tech stack: Vite + React + TypeScript + Vanilla CSS.
- Paper format: Default to A4 (`210mm × 297mm`) with a toolbar switch for US Letter (`8.5in × 11in`).
- Typography: `@fontsource/inter` locally bundled to ensure zero network latency, no FOUT, and 100% deterministic print output.
- Icons: `lucide-react` with `aria-hidden="true"` for ATS-safe, tree-shakable vector SVGs that render sharply in print and screen.
- Media separation: Strict isolation between screen canvas styles (`index.css`) and print output (`print.css`).
- 1-Page constraint: Real-time overflow detection warning if content exceeds physical page bounds.

## Depends on (if any)

- Node.js (v18+ LTS) and npm installed.
- Feature 000: Populate Agent Workflow Files (Complete).

## Out of Scope

- Full baseline resume content migration (deferred to Feature 002: `002-replica-current-resume`).
- Dynamic routing and company-tailored preset variants (e.g. `/omise`, `/nvidia`) (deferred to Feature 003).
- Server-side / headless Chromium PDF generation scripts (app relies purely on client-side native print engine).

## Affected Files

- `package.json` — Project metadata, scripts, and runtime/dev dependencies (including `@fontsource/inter` and `lucide-react`).
- `tsconfig.json` — TypeScript root configuration (strict mode).
- `tsconfig.node.json` — TypeScript configuration for Vite config.
- `vite.config.ts` — Vite bundler configuration with React plugin.
- `index.html` — HTML shell with viewport meta and `#root` mounting node.
- `src/main.tsx` — React entry point mounting `<App />`.
- `src/App.tsx` — Main application root: manages active paper size, zoom scale, overflow state, renders toolbar workbench and resume paper container.
- `src/data/types.ts` — Comprehensive TypeScript interfaces pre-aligned to baseline resume sections (summaries, tech tags, categorized skills, education honors).
- `src/data/sampleResume.ts` — Representative placeholder resume data validating the type schema.
- `src/components/Toolbar.tsx` — Screen-only top action bar with print button, paper size selector (A4 / Letter), zoom selector (`Fit`, `100%`, `90%`, `80%`), margin guide toggle, and real-time overflow indicator.
- `src/components/ResumePaper.tsx` — Paper container enforcing physical print dimensions, margin padding, dynamic `@page` style injection, and `ResizeObserver` overflow detection.
- `src/components/Header.tsx` — Semantic resume header displaying name, title, and contact links with accessible `lucide-react` icons.
- `src/components/Section.tsx` — Reusable semantic resume section with standard heading, divider, and content slot.
- `src/styles/index.css` — Global screen styles (dark canvas backdrop `#0f172a`, toolbar styling, paper shadow, typography variables, zoom scaling).
- `src/styles/resume.css` — Semantic resume document layout and typography styles.
- `src/styles/print.css` — Isolated print stylesheet (`@page`, `@media print`, `print-color-adjust: exact`, margin zeroing, hiding screen chrome).

## Design Decisions

- **A4 Default with US Letter Toggle & Dynamic `@page`:** A4 is the default international standard; US Letter is selectable via the preview toolbar. Dynamic injection of `@page { size: <format> portrait; margin: 0; }` commands the browser print dialog to automatically select the matching physical paper format.
- **Offline Typography via `@fontsource/inter`:** Eliminates external CDN dependencies, preventing font loading delays or FOUT during `window.print()`.
- **Strict Print Isolation (`print.css`):** Screen preview styling lives in `index.css` and print formatting in `print.css`. Screen toolbar and canvas decorations are marked `.no-print` and stripped in `@media print`. Force `-webkit-print-color-adjust: exact` and `print-color-adjust: exact` to preserve borders and fills.
- **Real-Time 1-Page Overflow Monitoring:** `ResumePaper` uses a `ResizeObserver` / layout effect comparing `scrollHeight` and `clientHeight`. If content spills beyond the physical page boundary, the toolbar displays a warning badge and the bottom boundary highlights in red.
- **Screen Canvas Zoom Controls:** Adds zoom controls (`Fit`, `100%`, `90%`, `80%`) via CSS `transform: scale()` centered on the screen canvas to facilitate comfortable editing on 1080p laptop displays. Zoom is strictly screen-only and stripped during print.
- **ATS-Friendly Semantic Markup & Accessible SVGs:** Resume components use `<header>`, `<section>`, `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, and `<a>`. Lucide icons carry `aria-hidden="true"` and `focusable="false"` to prevent polluting ATS OCR and screen reader outputs.
- **Ticket Identifier:** `none` (Tracked locally within `.agents/`).

---

## Implementation Steps

### Step 1: Project Scaffolding & Configuration
- [x] Initialize `package.json` with React, React-DOM, `lucide-react`, `@fontsource/inter`, Vite, `@vitejs/plugin-react`, TypeScript, and type definitions.
- [x] Create `tsconfig.json` and `tsconfig.node.json` configured for strict type checking and React JSX transform.
- [x] Create `vite.config.ts` with React plugin.
- [x] Create `index.html` with clean title, viewport meta, and `#root` mounting node.
- [x] Run `npm install` and verify clean dependency installation.

### Step 2: TypeScript Data Schemas & Sample Data
- [x] Create `src/data/types.ts` defining `ContactInfo`, `WorkExperience`, `Education`, `SkillCategory`, `ProjectItem`, and `ResumeData` with support for bullet arrays, optional summaries, tech tags, and honors.
- [x] Create `src/data/sampleResume.ts` conforming strictly to `ResumeData` to exercise all schema types and sections.

### Step 3: Print Engine & Styling System
- [x] Create `src/styles/index.css` importing `@fontsource/inter`, defining color tokens, canvas background (`#0f172a`), paper surface (`#ffffff`), typography scale, zoom scaling classes, and paper dimension classes (`.size-a4`, `.size-letter`, `.show-guides`, `.has-overflow`).
- [x] Create `src/styles/print.css` defining `@page { margin: 0; }`, `@media print` rules, margin normalization, `print-color-adjust: exact`, `.no-print` hiding, link styling, and page-break prevention.

### Step 4: Semantic Resume Components & Preview Workbench
- [x] Create `src/components/Toolbar.tsx` with:
  - "Print to PDF" trigger (`window.print()`).
  - Paper size selector (A4 / US Letter).
  - Zoom selector (`Fit`, `100%`, `90%`, `80%`).
  - Margin guide visibility toggle.
  - Real-time 1-page overflow warning badge.
- [x] Create `src/components/ResumePaper.tsx` wrapping resume content in the active paper format, managing dynamic `@page` style tag injection, printable margin boundaries, and `ResizeObserver` height overflow measurement.
- [x] Create `src/components/Header.tsx` rendering name, title, and contact links with accessible `lucide-react` icons (`aria-hidden="true"`).
- [x] Create `src/components/Section.tsx` providing a semantic section container with heading and divider.
- [x] Implement `src/App.tsx` wiring together toolbar controls, zoom state, paper size state, overflow state, and paper container.
- [x] Implement `src/main.tsx` mounting `App` to `#root`.

### Step 5: Verification & Build Validation
- [x] Run `npm run build` (`tsc && vite build`) and confirm clean compilation with zero warnings or errors.
- [x] Run `npm run dev` and visually verify the screen preview workbench.
- [x] Test paper size switching (A4 <-> US Letter) and verify dynamic `@page` style tag injection.
- [x] Test screen zoom controls (`Fit`, `100%`, `90%`, `80%`) and verify crisp scaling.
- [x] Test margin guideline toggle.
- [x] Test overflow detection by temporarily injecting extra content into sample data and verifying the warning badge triggers.
- [x] Trigger print dialog (`window.print()`) and verify print preview shows pure vector resume without screen toolbar or dark canvas, with exact 1-page containment.

---

## Detailed Behavior

### Component: Toolbar (`src/components/Toolbar.tsx`)
- Fixed at the top of the viewport on screen.
- Has class `.no-print` so it is completely excluded during printing.
- Contains:
  - Branding: "Resume as Code — Print Engine".
  - Paper size selector: segmented control for `A4` (default) and `US Letter`.
  - Zoom selector: buttons/dropdown for `Fit`, `100%`, `90%`, `80%`.
  - Margin Guides toggle button: toggles visual dashed margin lines on the paper preview.
  - Overflow indicator: green pill ("1 Page Bound OK") or red warning badge ("⚠️ Content Overflows Page by Xpx").
  - "Print to PDF" primary action button: executes `window.print()`.

### Component: ResumePaper (`src/components/ResumePaper.tsx`)
- Renders a centered document container simulating physical paper.
- Dynamic classes: `size-a4` (`210mm × 297mm`) or `size-letter` (`8.5in × 11in`).
- Dynamically manages a `<style id="print-page-style">` element in `document.head` declaring `@page { size: A4 portrait; margin: 0; }` or `@page { size: letter portrait; margin: 0; }`.
- Inner container has standard printable margins (`12.7mm` / `0.5in`).
- Contains a `ResizeObserver` measuring content element height against paper printable inner height, passing overflow delta to the parent application.
- When guides are active, applies subtle dashed outline indicating printable boundaries.
- When overflow is detected, highlights bottom boundary with a red indicator.
- On print, outer box shadows and margins collapse so the document maps 1:1 to physical page output with zero headers/footers.

---

## Open Questions (if any)

*(None)*

---

## Blockers (if any)

*(None)*

---

## Verification

- [x] `npm run build` succeeds with exit code 0.
- [x] Local dev server launches and loads without runtime errors.
- [x] Canvas renders paper centered on dark background with realistic drop shadow.
- [x] Toggling between A4 and US Letter adjusts paper aspect ratio on screen and updates dynamic `@page` print declaration.
- [x] Zoom controls scale paper preview smoothly without affecting print dimensions.
- [x] Margin guide toggle toggles visible guidelines.
- [x] Overflow detector correctly identifies when content exceeds physical page bounds.
- [x] "Print to PDF" button opens native print dialog cleanly.
- [x] Print preview displays white paper without toolbar or background artifacts, formatted to exact 1-page boundary.


