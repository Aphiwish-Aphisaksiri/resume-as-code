# Architecture

> This file describes the tech stack and system architecture for AI agents.

---

## Tech Stack

### Languages
- **TypeScript** (strict mode)
- **HTML5** (semantic document structure)
- **CSS3** (vanilla CSS / print media queries)

### Frameworks & Libraries
- **Vite** — Fast frontend dev server and bundler
- **React** — Component rendering engine

### Tooling
- **npm** — Package manager
- **TypeScript (`tsc`)** — Static type checking
- **ESLint** — Code linting

### Infrastructure & Services
- Client-side static application running locally (no database or server-side runtime required).

---

## Project Structure

```
src/
  components/     → Semantic resume components (Header, Section, ExperienceItem, etc.)
  data/           → Structured data models and presets (resume.ts, types.ts)
  styles/         → CSS tokens, preview canvas, and print stylesheets (print.css)
  App.tsx         → Root preview container with print trigger
  main.tsx        → Application entry point
.agents/
  context/        → Living project and agent context files
  docs/           → Master CV and reference markdown documents
  feature/        → Feature plans and blueprints
```

---

## Page Architecture

| Route | Purpose | Key Components |
|---|---|---|
| `/` | Baseline 1-page software engineer resume | ResumePaper, Header, Summary, Skills, Experience, Projects |
| `/[variant]` *(future)* | Tailored company/role views (e.g., `/omise`, `/nvidia`) | Variant selector, tailored data loader |

---

## Module Boundaries

- **Data Layer (`src/data/`):** Pure TypeScript data objects adhering to strict interfaces (`ResumeData`, `Experience`, `Project`, etc.).
- **Presentation Layer (`src/components/`):** Stateless React components that render semantic HTML based on props.
- **Styling Layer (`src/styles/`):** Clear boundary between **screen preview styles** (canvas background, paper border, zoom/controls) and **print styles** (`@media print`, `@page { margin: 0; size: letter; }`, hiding UI controls).

---

## Data Flow

1. **Cataloging:** Complete work history is recorded in `.agents/docs/Master CV Aphiwish Aphisaksiri 20261017.md`.
2. **Structuring:** Curated experiences and metrics are modeled into typed TypeScript objects in `src/data/resume.ts`.
3. **Rendering:** React mounts and renders the semantic resume tree inside a simulated paper card.
4. **Exporting:** User or agent triggers `window.print()` (or browser print dialog) which activates `print.css`, producing a clean, high-resolution vector PDF with clickable links.

---

## Key Design Decisions

- **Vite + React:** Chosen for near-instant HMR (<50ms feedback cycle while adjusting copy and spacing) without the heavy server runtime of Next.js.
- **Native Print CSS over Canvas:** Uses standard HTML/CSS print media queries instead of HTML canvas or PDF libraries. This ensures text remains 100% selectable, ATS-parsable, and hyperlinked.
- **Single Source of Truth:** Master CV lives in `.agents/docs/`, while active resume variants are cleanly isolated in structured code.
