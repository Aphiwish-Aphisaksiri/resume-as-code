# Tools & External Services

How agents should interact with external tools and services in this repo.
**For any operation against an external tool or service — source control host,
CI, code quality, issue tracker, or cross-repo search — consult this file first.**

---

**This repo's identifiers at a glance** *(verified 2026-10-17)*:

| | value |
|---|---|
| Repository | [Aphiwish-Aphisaksiri/resume-as-code](https://github.com/Aphiwish-Aphisaksiri/resume-as-code) |
| CI pipeline / project | Local build (`npm run build`) |
| Code-quality project key | TypeScript (`tsc`) + ESLint |
| Primary branch | `main` |
| PR base branch | `main` |

---

## Source control host (GitHub)

- **Purpose:** Version control, diff tracking, tagging releases and company-specific variants.
- **Access:** Git CLI via local shell.
- **Rules:** The `.agents/` workflow directory is committed and version-controlled by default.

---

## CI & Code Quality

- **Purpose:** Ensure code compiles cleanly without TypeScript errors.
- **Command:** `npm run build` (runs static typecheck and production build).

---

## Issue tracker / Knowledge base

- **Purpose:** Planning, feature documentation, and career context.
- **Access:** Local `.agents/` files:
  - `.agents/feature/` for upcoming features and fix plans.
  - `.agents/docs/` for master CV, baseline resume, and reference documentation.

---

## Secrets & credentials

- **Policy:** Never commit secrets, private tokens, or sensitive credentials to this repository.
- **Active Secrets:** None required for this project.

---

## Command reference

| Command | Purpose |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Launch local Vite development server with HMR |
| `npm run build` | Run TypeScript typecheck and compile static bundle |
| `npm run preview` | Locally preview the compiled production build |

---

## Cross-Repo & Workspace References

### Sibling Projects Directory: `D:\Homework\LifeCH1\Codes`
- **Purpose:** Contains all of Aphiwish's engineering projects, repositories, and historical work.
- **Notable Projects:**
  - `portfolio` (`D:\Homework\LifeCH1\Codes\portfolio`) — Next.js web portfolio with agent-workflow configured.
  - `ProjectHub-Offline` — Full-stack agentic RAG platform (FastAPI, Ollama, pgvector, Next.js).
  - `Local-LLM-with-Vector-database-integration` — LLM embeddings and vector search integrations.
  - Security tooling repositories (`exfil-aphiwish`, `ssrf-aphiwish`, `PasswordCracker`).
- **Agent Usage:** When editing the resume or refining bullet points, agents should inspect the relevant project directories in `D:\Homework\LifeCH1\Codes` to pull verified architectures, benchmarks, commit details, and quantified metrics.
