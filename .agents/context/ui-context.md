# UI Context

> UI conventions, print layout, and design system for AI agents.

---

## Component Library

- **Custom Vanilla CSS:** Built entirely with lean, standard CSS for maximum layout control, zero bundle overhead, and pixel-precise print output.

---

## Theme & Color Scheme

### Print Palette (ATS & Hardcopy Output)
- **Primary Text:** `#111827` (Dark Charcoal / Slate 900) — high-contrast, easily readable by both humans and OCR/ATS parsers.
- **Secondary / Metadata:** `#374151` (Gray 700) / `#4b5563` (Gray 600) — company names, dates, locations.
- **Dividers & Rules:** `#d1d5db` (Gray 300) — subtle section separators.
- **Links:** `#1d4ed8` (Blue 700) or `#111827` with clean underline.

### Screen Preview Canvas
- **Workspace Background:** `#0f172a` (Dark Slate) — creates a high-contrast backdrop that frames the document.
- **Paper Surface:** `#ffffff` (Pure White) with crisp drop shadow (`0 10px 25px -5px rgba(0, 0, 0, 0.3)`).
- **Page Edge / Margin Guides:** Subtle dashed guidelines showing printable margins in dev mode.

### Typography
- **Font Stack:** Modern clean sans-serif (`Inter`, `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`, `sans-serif`).
- **Scale:**
  - Name: `20pt` (Bold)
  - Section Headings: `11pt` (Bold, uppercase or small-caps with bottom border)
  - Subheadings / Role Titles: `10.5pt` (Semi-bold)
  - Body / Bullets: `9.5pt` – `10pt` (Regular, line-height 1.35 – 1.4)
  - Contact / Meta details: `9pt` – `9.5pt`

---

## Layout Patterns

- **Paper Size:** US Letter (`8.5in` × `11in` / `215.9mm` × `279.4mm`) or A4 (`210mm` × `297mm`).
- **Margins:** `0.5in` (36pt) to `0.6in` (43pt) symmetric padding.
- **Header:** Centered name, contact info bar with clickable links (Portfolio, Email, GitHub, LinkedIn, Phone, Location).
- **Row Alignment:** Flex container with Job Title & Organization on the left, Date and Location right-aligned.
- **Bullet Spacing:** Compact margin (`margin-bottom: 2pt - 4pt`) to prevent accidental page overflow.

---

## Behavior Patterns

- **Toolbar:** Floating or top navigation bar on screen containing:
  - "Print to PDF" button triggering `window.print()`.
  - Route / Variant switcher (e.g. standard vs company-tailored).
  - Page overflow indicator (alerts if content height exceeds 1 physical page).
- **Print Mode:**
  - `@media print` automatically strips toolbar, canvas backgrounds, shadows, and margins, rendering pure printable vector text.
