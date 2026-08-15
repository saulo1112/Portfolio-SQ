# Portfolio

To do's:

- Create the thumbnails for project section
- Start drafting the content for each section 

Personal portfolio for Saulo Quiñones, Software Engineer & GIS Specialist.  
Built with Astro 7 — static output, zero CSS/JS frameworks, vanilla everything.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | [Astro 7](https://astro.build) — static site generation |
| Styling | Vanilla CSS with custom properties (no Tailwind, no CSS-in-JS) |
| Scripting | Vanilla TypeScript inside Astro `<script>` blocks |
| Image processing | [sharp](https://sharp.pixelplumbing.com) (Astro build dep) |
| 3D element | Spline iframe embed |
| Fonts | Inter (400, 500) via Google Fonts `@import` |
| Node | ≥ 22.12.0 |

---

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── cv.pdf              ← TODO: add real CV file
│
├── src/
│   ├── layouts/
│   │   └── Base.astro      ← shared <head>, anti-flash theme script, <slot>
│   │
│   ├── components/
│   │   ├── Nav.astro       ← sticky header, theme toggle, mobile hamburger
│   │   ├── Hero.astro      ← canvas particle bg + Spline iframe
│   │   ├── Projects.astro  ← featured cards + mini project grid
│   │   ├── Stack.astro     ← plain-text 3-column stack list
│   │   ├── Experience.astro← minimal role list (TODO: fill with real data)
│   │   └── Contact.astro   ← mailto, GitHub/LinkedIn icons, location
│   │
│   ├── pages/
│   │   ├── index.astro     ← assembles all components into one page
│   │   └── projects/
│   │       ├── eudr-risk-assessment.astro
│   │       └── site-selection-engine.astro
│   │
│   └── styles/
│       ├── tokens.css      ← ALL color/type/radius tokens as CSS custom props
│       └── global.css      ← reset, base element styles, Inter @import
│
├── astro.config.mjs
└── package.json
```

---

## Design system

All tokens live in `src/styles/tokens.css`. **No hardcoded hex values anywhere else.**

```
:root          → light theme
html.dark      → dark theme (default on load)
```

| Token | Light | Dark |
|---|---|---|
| `--color-bg` | `#FAFAF8` | `#0F0F0F` |
| `--color-surface` | `#F0EFEB` | `#161616` |
| `--color-accent` | `#0F6E56` | `#1D9E75` |
| `--color-accent-hover` | `#0C5A47` | `#24B384` |
| `--color-text-primary` | `#0F0F0F` | `#FAFAF8` |
| `--color-text-secondary` | `#3D3C39` | `#B5B4AD` |
| `--color-text-muted` | `#5F5E5A` | `#888780` |
| `--color-border` | `#D3D1C7` | `#2C2C2A` |
| `--radius-control` | `8px` | same |
| `--radius-card` | `12px` | same |
| `--font-sans` | `"Inter", system-ui, …` | same |
| `--font-mono` | system mono stack | same |

Theme toggle: `Nav.astro` flips `html.dark` and writes to `localStorage["theme"]`.  
Anti-flash: `Base.astro` has a blocking inline script in `<head>` that reads the key before paint — default is dark.

---

## Components

### `Base.astro`
Layout shell. Props: `title: string`, `description: string`.  
Handles: charset, viewport, canonical URL, meta description, favicon, font/CSS imports, theme-init script, `<slot>`.

### `Nav.astro`
Sticky header. Transparent at scroll 0 → solid `--color-surface` + border once scrolled (passive scroll listener on `data-scrolled` attribute).  
Left: `saulo.dev` (mono) → `#top`.  
Right: Work · Stack · Experience · Contact anchor links.  
Far right: theme toggle (inline sun/moon SVG). Mobile (≤ 768px): hamburger dropdown.

### `Hero.astro`
Two-column layout (55 / 45). Left: eyebrow, H1, subtext, two CTAs. Right: Spline 3D robot iframe.

**Canvas background** — 120 white particles across the full hero:
- Each has random position, velocity (±0.4 px/frame), radius (1.5–3 px), opacity (0.4–0.8).
- Pairs within 130 px are connected with white lines at distance-based opacity.
- Mouse interaction: two zones around the cursor.
  - **Kill zone (< 50 px):** particle bursts away (velocity spike × 8), fades out, respawns after 1–2 s from a random canvas edge with a fade-in.
  - **Shield edge (50–90 px):** gentle outward nudge (soft repulsion).
- Mouse lines drawn to live particles within 100 px.
- On resize: canvas resizes to DPR, particles redistribute proportionally.

**Spline iframe** — `https://my.spline.design/genkubgreetingrobot-…/` loaded lazy.  
`mix-blend-mode: lighten` on the container blends the robot into the dark bg.  
Hidden (`display: none`) on mobile (≤ 768px).

### `Projects.astro`
Section `#work`. Two featured full-width cards (EUDR Forest Risk Assessment, Retail Site Selection Engine): tags, problem statement, mono stack row, "Case study →" + "GitHub ↗" links, 16:9 screenshot placeholder.  
Below: 2×2 grid of four mini cards (title + 2 tags + GitHub link only).

### `Stack.astro`
Section `#stack`. Three plain-text columns: Geospatial / Backend & data / Frontend & tooling.  
Each row: tech name (13px/500, primary) + one-line description (12px, muted). Thin border between rows. No icons, no skill bars.

### `Experience.astro`
Section `#experience`. Minimal bordered list. Structure: `[Role] at [Company] · [Dates]` + 2 bullet points.  
**Currently all TODO placeholders — fill before launch.**

### `Contact.astro`
Section `#contact`. Heading, mailto link, GitHub + LinkedIn inline-SVG icon links, location line. No form.  
**Placeholder email and LinkedIn URL — fill before launch.**

---

## Commands

Run from `portfolio/`:

```bash
npm run dev       # dev server → http://localhost:4321
npm run build     # production build → ./dist/
npm run preview   # serve the dist/ build locally
```

---

## Before launch — TODOs

- [ ] `public/cv.pdf` — add real CV (linked from "Download CV" button)
- [ ] `src/components/Contact.astro` — replace `saulo@email.com` and LinkedIn placeholder URL
- [ ] `src/components/Projects.astro` — replace profile GitHub URL with per-repo URLs
- [ ] `src/pages/projects/*.astro` — same GitHub URL swap + fill in Results sections
- [ ] `src/components/Experience.astro` — fill in real roles, companies, dates, bullets
- [ ] Per-repo GitHub URLs in the four mini project cards

---

Deploy to Github pages.
