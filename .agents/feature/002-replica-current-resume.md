# Feature 002: Polish Resume Layout, Typography Rhythm & Keyword Emphasis

Status: Complete

Ticket: none

## Goal

Refine the styled resume document to achieve a balanced, full-page vertical rhythm on standard A4 and US Letter page boundaries while restoring high-impact ATS keyword bolding. By eliminating the awkward empty gap at the bottom of the page through proportional vertical rhythm adjustments (section gaps, item spacing, and relaxed line heights) and emphasizing critical technologies/metrics across all sections, the resume will maintain its modern visual appeal while remaining strictly bound to a single page.

## Background / Context

In Feature 001, we established the foundational Vite + React + TypeScript print engine, isolated stylesheets, real-time 1-page overflow monitoring, and structured data schemas. While the user prefers the modern styled layout over the original Google Docs appearance, two key refinements are required to finalize the baseline 1-page deliverable:
1. **Keyword Emphasis:** The original baseline markdown (`.agents/docs/Resume Aphiwish Aphisaksiri 20261017.md`) contained strategic bolding across technologies, architectural concepts, and QA tooling (e.g., `Go`, `Ruby on Rails`, `event-driven design`, `Next.js`, `Prisma 7 ORM`, `pgvector`, `Ollama`, `agentic tool-calling`, `payment-gateway flow`). The initial sample dataset lacked these bold markers.
2. **Bottom Whitespace & Vertical Rhythm:** Currently, on an A4 page, the content terminates ~180px above the bottom margin. Rather than adding arbitrary content, the user chose to adjust vertical rhythm and typography (relaxing section gaps, entry margins, bullet spacing, and line heights) so that the content distributes proportionally and elegantly across the full page height with zero overflow.

## Depends on (if any)

- Feature 001: Scaffold Vite Print Engine (Completed).

## Out of Scope

- Adding additional projects or career entries from `Master CV Aphiwish Aphisaksiri 20261017.md` (deferred to tailored variant features).
- Multi-route variant switching (e.g., `/omise`, `/nvidia`) (deferred to Feature 003: Structured Data & Tailored Views).
- Heavy external CSS frameworks or backend services.

## Affected Files

- `src/data/sampleResume.ts` — Inject markdown bold markers (`**...**`) into bullet points, role summaries, and professional summary following the baseline resume.
- `src/App.tsx` — Ensure `formatTextWithBold` parser is applied consistently to all narrative text (professional summary, role summaries, experience bullets, project bullets).
- `src/styles/resume.css` — Fine-tune typography variables, line heights, list spacing, entry margins, and section gaps for balanced single-page vertical distribution.
- `src/styles/index.css` — Calibrate printable padding/margin tokens (`--paper-margin`) if needed to complement the expanded vertical rhythm.

## Design Decisions

- **Typographic Distribution over Content Padding:** Instead of bloating the resume with extra bullet points or secondary projects, we will tune CSS vertical rhythm (`gap`, `line-height`, `margin`). This preserves the concise, high-signal nature of the resume while creating a balanced visual hierarchy.
- **Markdown-Based Inline Bolding (`**keyword**`):** Maintain the `formatTextWithBold` tokenization pattern in React, converting `**...**` into semantic `<strong>` elements. This keeps the data layer in pure TypeScript strings, easily editable, human-readable, and compatible with ATS plain-text parsing.
- **Strict 1-Page Constraint (Zero Overflow):** Any vertical expansion must be calibrated against both A4 (`210mm × 297mm`) and US Letter (`8.5in × 11in`). The real-time `ResizeObserver` indicator in `ResumePaper` must stay green ("1 Page Bound OK", 0px overflow).
- **Semantics & ATS Preservation:** All bold elements use `<strong>` with `font-weight: 600` or `700`, ensuring ATS text extractors and screen readers interpret semantic emphasis naturally.

---

## Implementation Steps

### Step 1: Update Resume Data with Markdown Keyword Bolding
- [x] Review all bullet points and summaries against `.agents/docs/Resume Aphiwish Aphisaksiri 20261017.md`.
- [x] Add `**...**` bolding syntax to Omise experience bullets (`**Go**`, `**Ruby on Rails**`, `**golden-file API response tests**`, `**event-driven design**`).
- [x] Add `**...**` bolding syntax to LINE MAN Wongnai experience bullets (`**QA and automated API testing**`, `**payment-gateway flow**`, `**Jira and Confluence**`).
- [x] Add `**...**` bolding syntax to ProjectHub project bullets (`**Next.js, React, TypeScript, Tailwind CSS**`, `**Prisma 7 ORM**`, `**PostgreSQL**`, `**AI/embedding pipeline**`, `**agentic tool-calling**`, `**tool executor**`, `**semantic searches**`, `**queries**`, `**CRUD**`, `**Ollama**`).
- [x] Add bolding to key terms in the Professional Summary and role summaries where impactful.

### Step 2: Ensure Universal Markdown Bolding in App Components
- [x] Verify that `formatTextWithBold` in `src/App.tsx` handles edge cases (e.g., multiple bold segments, punctuation adjacent to asterisks).
- [x] Apply `formatTextWithBold` to the `summary` paragraph in `Professional Summary`.
- [x] Apply `formatTextWithBold` to `exp.summary` and `proj.summary` blocks.
- [x] Verify that experience and project bullet items render bolded words cleanly without raw asterisks.

### Step 3: Calibrate Vertical Rhythm & Typography
- [x] Increase `.resume-content` flex gap from `4.5pt` to a calibrated value (~7pt to 8.5pt) to expand section separation.
- [x] Increase `.resume-section` gap from `2.5pt` to ~3.5pt - 4.5pt.
- [x] Increase `.experience-list`, `.project-list`, and `.education-list` gaps from `3.5pt` to ~5pt - 6.5pt.
- [x] Adjust `.entry-item` gap from `1pt` to ~1.5pt - 2pt.
- [x] Adjust `.entry-bullets` gap from `1pt` to ~2pt - 2.5pt.
- [x] Slightly relax body line-height from `1.32` to ~1.36 - 1.40 for enhanced readability and natural vertical expansion.
- [x] Verify that `--paper-margin` (currently `11mm`) provides comfortable white space around the document perimeter.

### Step 4: Validate Layout Boundaries & Print Determinism
- [x] Verify with real-time `ResizeObserver` that both A4 and US Letter maintain `0px` overflow.
- [x] Inspect browser preview to verify the bottom white space is balanced and proportional, removing the excessive blank void.
- [x] Run `npm run build` to confirm TypeScript validation and asset bundling pass cleanly.
- [x] Open browser print preview (`window.print()`) on both A4 and US Letter targets to verify 1-page containment with zero 2nd page spillover.

---

## Detailed Behavior

### Markdown Bold Parser (`src/App.tsx`)
- Parses incoming bullet text: `string.split(/(\*\*.*?\*\*)/g)`.
- Replaces matches starting and ending with `**` with `<strong className="highlight-term">{text}</strong>`.
- Renders non-matching segments as standard text nodes.
- Preserves full ATS accessibility and clean plain-text copy-paste.

### Vertical Rhythm Scaling (`src/styles/resume.css`)
- Replaces cramped vertical gaps with calibrated proportional spacing.
- Ensures the final section (Education) sits comfortably in the lower third of the paper with an aesthetically pleasing bottom margin matching the top margin, rather than cutting off prematurely.

---

## Open Questions (if any)

*(None — all preferences confirmed with the user)*

---

## Blockers (if any)

*(None)*

---

## Verification

- [x] All keywords from the baseline resume markdown are rendered with bold `<strong>` tags across Experience and Project bullets.
- [x] Professional summary and role descriptions render inline bolding if specified.
- [x] The bottom of the A4 page preview no longer exhibits a large ~180px empty void; content is evenly distributed with balanced vertical rhythm.
- [x] The toolbar status badge displays `1 Page Bound OK` (green) with 0px overflow on both A4 and US Letter sizes.
- [x] `npm run build` succeeds with zero errors or warnings.
- [x] Browser print preview (`window.print()`) generates an exact 1-page document with zero spillover onto page 2.
