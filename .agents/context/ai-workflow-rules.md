# AI Workflow Rules

> This file contains project-specific rules that override default agent behavior.

---

## Project Mode

- **Development** — Full-stack feature development. Follow normal Plan → Refine → Implement flow.

---

## Development Order

1. **Scaffold & Print Foundation** — Vite + React + TypeScript setup with print stylesheet isolated from screen preview.
2. **Resume Replica** — Pixel-perfect 1-page replication of the baseline resume (`Resume Aphiwish Aphisaksiri 20261017.md` / `.docx`).
3. **Structured Data & Tailored Views** — Modularize resume data and support tailored routes/presets (e.g. `/omise`, `/nvidia`) as needed.

---

## Restrictions

- **No heavy backend or database** — Keep the project static, client-side, fast, and portable.
- **Strict page limits** — For standard 1-page resumes, content must strictly not overflow to a 2nd page on print/export.
- **No secrets in repository** — Never commit unvetted credentials or sensitive tokens.

---

## Workflow Overrides

- Standard 4-phase workflow applies (`Plan` → `Refine` → `Implement` → `Meta`).
- When writing resume bullet points or project details, agents are encouraged to inspect real project code in `D:\Homework\LifeCH1\Codes` to pull authentic metrics, technologies, and achievements.

---

## Output Hygiene

- `.agents/` is tracked and committed in git so version history includes agent planning context.
- Follow standard output hygiene from `AGENTS.md` for any external git commits or PR descriptions.

---

## Notes

- The primary deliverable is an ATS-friendly, clean vector PDF generated via browser print (`window.print()`).
