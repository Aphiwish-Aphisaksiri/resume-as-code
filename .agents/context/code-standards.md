# Code Standards

> Coding conventions for AI agents on this project.

---

## File Organization

- **Components:** Place in `src/components/` using PascalCase (e.g., `Header.tsx`, `ExperienceSection.tsx`).
- **Data & Types:** Types live in `src/data/types.ts`; data instances live in `src/data/` (e.g., `resume.ts`).
- **Styles:** Put stylesheets in `src/styles/` (e.g., `index.css`, `resume.css`, `print.css`).
- **Assets:** Static assets (if any, e.g. favicon or icons) in `public/`.

---

## Naming Conventions

### Files & Folders
- Components: `PascalCase.tsx`
- Utilities & Types: `camelCase.ts`
- Styles: `kebab-case.css`

### Variables & Functions
- camelCase for functions and variables (`formatDate`, `activeVariant`).
- UPPER_SNAKE_CASE for immutable constants or configuration values.
- PascalCase for TypeScript interfaces and types (`ResumeData`, `WorkExperience`).

### Components
- Named exports preferred (`export const Header: React.FC<HeaderProps> = ...`).

---

## Coding Patterns

### Preferred Patterns
- **Semantic HTML:** Use standard HTML tags (`<header>`, `<section>`, `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`). This ensures modern Applicant Tracking Systems (ATS) can parse sections seamlessly.
- **Strict Typing:** All data structures must adhere to typed interfaces with no `any`.
- **Pure Functional Components:** Components should be deterministic renderers of their props.
- **CSS Separation:** Keep print styles isolated in `print.css` so print adjustments do not corrupt screen preview styles.

### Anti-Patterns
- **No `any`** in TypeScript definitions.
- **No unsemantic HTML** (e.g. nested `<div>` soups where `<p>` or `<ul>` belongs).
- **No hardcoded print hacks in JSX** — maintain print layout via CSS `@media print` rules.
- **No heavy runtime UI frameworks** that compromise exact millimeter/point print positioning.

---

## Testing & Verification

- **Type & Build Check:** `npm run build` must pass cleanly without TypeScript or bundler errors.
- **Visual Smoke Test:** Use the browser preview to verify visual layout, font hierarchy, and 1-page paper boundary containment.
- **Print Verification:** Verify print preview (`Ctrl+P` / `window.print()`) renders cleanly with zero second-page spillover.

---

## Import Conventions

Group imports in the following order with blank lines between groups:
1. React and third-party libraries
2. Internal components (`../components/...`)
3. Data models and types (`../data/...`)
4. Stylesheets (`../styles/...`)
