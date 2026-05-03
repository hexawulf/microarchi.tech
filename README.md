# microarchi.tech

Public company website for **台灣行動微型建築有限公司** (Taiwan Mobile Micro-Architecture Co., Ltd.) — a Taipei-based studio building AI and intelligent hardware for the next generation of architecture.

**Live site:** [microarchi.tech](https://microarchi.tech)

---

## About

Microarchi.tech designs and manufactures mobile micro-architecture, intelligent building tools, and compact spatial systems. Our work bridges computational intelligence and physical modularity — software and hardware integrated to redefine how people relate to space.

Showcasing at **Computex 2026**, Taipei.

| | |
|---|---|
| **Legal Name** | 台灣行動微型建築有限公司 |
| **Tax ID (統一編號)** | 24761459 |
| **Director (代表人)** | 張懷文 / Chang Huai-Wen |
| **Established** | 2014.10.24 |
| **Registered Address** | 臺北市北投區大業路 631 之 5 號 |
| **Contact** | [dev@microarchi.tech](mailto:dev@microarchi.tech) |

---

## Repository

This repository contains the source for the public-facing one-page company website. The site is intentionally simple: three files, no build step, no framework, no dependencies beyond two Google Fonts requests.

### Stack

- **HTML / CSS / Vanilla JS** — no React, no Vue, no bundler
- **Hosting** — GitHub Pages with apex domain (`CNAME` apex, four `A` records to GitHub Pages)
- **DNS** — Cloudflare (DNS-only, no proxy, to permit Let's Encrypt provisioning)
- **TLS** — Let's Encrypt via GitHub Pages
- **Fonts** — Geist + Geist Mono (display, mono) and Noto Sans TC (Traditional Chinese)

### File layout

```
.
├── index.html      # markup, meta tags, inline floor-plan/die-layout SVG, JSON-LD
├── style.css       # design tokens, layout, animations
├── script.js       # IntersectionObserver section reveals
├── CNAME           # apex domain pin (microarchi.tech)
└── LICENSE         # MIT
```

---

## Design

The site is monochrome by deliberate constraint — white background, slate-grey type, ink for emphasis. No accent colors. The visual identity emerges from typography and proportion rather than color.

### Palette

```
--white     #FFFFFF
--slate-50  #F8FAFC   (registry background)
--slate-200 #E2E8F0   (hairline borders)
--slate-400 #94A3B8   (annotations, dimensions)
--slate-500 #64748B   (secondary type)
--slate-700 #334155   (primary body)
--ink       #0A0E14   (headings, display type)
```

### Typography

- **Display + body** — Geist (200, 300, 400, 500, 600)
- **Mono** — Geist Mono (labels, IDs, numerals, drawing annotations)
- **Traditional Chinese** — Noto Sans TC (300, 400, 500, 700)

### Hero illustration

The hero artwork is an inline SVG that reads simultaneously as an architectural floor plan and a microprocessor die layout. Each block carries dual labels:

```
ROOM A · CORE 0       ROOM B · CORE 1
ATRIUM · CACHE L2
FOYER · I/O    LIFT CORE · CLOCK    TERRACE · POWER
```

Architectural drawing conventions surround the diagram — orthographic dimensions, axis grid bubbles (1/2/3 + A/B/C), a north arrow, scale bar, and title block (`MMA-01 · FLOOR PLAN ÷ DIE LAYOUT · SCALE 1:50 · 7nm`). The illustration is the conceptual anchor of the site: traditional architecture and computer microarchitecture as parallel disciplines of modular spatial design.

---

## Local development

No build step. Edit the files, refresh the browser.

```bash
git clone git@github.com:hexawulf/microarchi.tech.git
cd microarchi.tech
python3 -m http.server 8080
# open http://localhost:8080
```

---

## Deployment

Pushing to `main` triggers a GitHub Pages rebuild. The live site updates within ~60 seconds.

```bash
git checkout -b feat/some-change
# edit, commit
git push -u origin feat/some-change
gh pr create --fill --web
# review, merge — site updates automatically
```

DNS, TLS, and CDN are handled upstream by Cloudflare DNS + GitHub Pages.

---

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- `aria-hidden="true"` on purely decorative SVG and background layers
- `lang="zh-Hant"` at document root for correct language indexing
- Color contrast tuned for WCAG AA on all body and secondary text
- IntersectionObserver-driven reveals respect default scroll order

---

## SEO

The site is structured for bilingual discoverability — Traditional Chinese and English.

- `<title>` and `<meta description>` lead with the registered Chinese company name
- Open Graph + Twitter Card meta tags for social previews
- JSON-LD `Organization` schema with full registry data (Tax ID, founding date, founder, address)
- Canonical URL, robots index/follow

---

## License

[MIT](./LICENSE) — code only. The Microarchi.tech name, the 台灣行動微型建築有限公司 trade name, the company logo mark, and the floor-plan/die-layout illustration are not covered by the MIT license.

---

© 2026 台灣行動微型建築有限公司 · Microarchi.tech · Taipei
