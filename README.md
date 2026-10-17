# resume-as-code

> Web-based single source of truth for my resume and master CV with live preview and vector PDF export.

## Overview

`resume-as-code` is a modern, code-driven resume and career profile system for **Aphiwish Aphisaksiri**. It eliminates brittle Word/DOCX formatting, unversioned binary files, and manual tailoring by treating resumes as version-controlled code with structured data and pixel-perfect print layout.

## Key Features

- **Pixel-Perfect 1-Page Layout**: Strictly calibrated for standard A4 / Letter paper with zero overflow.
- **ATS-Friendly**: Clean semantic HTML structure (`h1`, `h2`, `p`, `ul`, `li`), parseable text, and high contrast.
- **Vector PDF Export**: One-click, pixel-perfect PDF export via browser print (`window.print()`) preserving exact typography and clickable links.
- **Tailored Views**: Support for role- and company-specific variants powered by modular structured data.
- **Master Experience Catalog**: Centralized, comprehensive career history and technical achievements.

## Tech Stack & Architecture

- **Core**: React, TypeScript, Vite
- **Styling**: Vanilla CSS with isolated print stylesheet (`@media print`, `@page`)
- **Rendering**: Fast, client-side, static build with no backend requirements

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ LTS recommended)
- npm (bundled with Node)

### Installation & Local Preview

```bash
# Install dependencies
npm install

# Start local development server with HMR
npm run dev

# Run TypeScript type checking and production build
npm run build

# Preview production build locally
npm run preview
```

## License

All Rights Reserved © 2026 Aphiwish Aphisaksiri. Personal career history and resume content are proprietary. Code structure and tooling concepts may be referenced for personal use.
