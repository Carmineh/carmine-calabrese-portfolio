<div align="center">

# 👀

## Why are you watching the repo?

The interesting part is over there 👉 **[carmine-calabrese.it](https://carmine-calabrese.it)**

<sub>Projects, skills, CV and the stuff I learn while trying to break things (legally).</sub>

<br />

Built on top of **[sb-template-astro](https://github.com/stefanBid/sb-template-astro)** by [Stefano Biddau](https://github.com/stefanBid) ⭐

</div>

---

<details>
<summary>Still here? Fine, here's how it works 🛠️</summary>

<br />

## Developer Notes

> Known issues and non-obvious decisions. Update this section when something like this comes up.

- **Dark only.** The template ships a light/dark toggle; this site is dark by design (the lime accent doesn't read well on white), so the toggle was removed and `<html>` always has the `.dark` class.
- **Articles are hidden.** `features.articles` in `src/data/site.ts` is `false`: no nav link, no `/articles` pages, no RSS. Set it to `true` to publish the section again.
- **CV PDFs are redacted.** The files in `public/cv/` have phone number, date of birth and signature removed. Re-export a redacted version whenever the CV changes and keep the same file names.

## Table of Contents

1. [Overview](#1-overview)
2. [Getting Started](#2-getting-started)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Routing](#5-routing)
6. [Content](#6-content)
7. [Deployment](#7-deployment)

## 1. Overview

Bilingual (EN / IT) personal portfolio: projects, skills with a self-assessment, resume with downloadable CV, and an (optional) articles section for write-ups. Static site, no backend.

## 2. Getting Started

**Prerequisites:** Node.js ≥ 22.12.0, pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output in dist/
pnpm check        # types + content schema
pnpm lint         # ESLint
```

## 3. Project Structure

```
src/
  components/    UI pieces (Navbar, Footer, ProjectCard, TechIcon, CvDownload, ...)
  content/       articles (Markdown) + _template*.md models
  data/          projects, skills, article categories, feature switches
  i18n/          shared UI strings (EN / IT)
  layouts/       Layout.astro: <head>, SEO, fonts, navbar and footer
  pages/         routes; IT pages live under pages/it/
  styles/        theme.css, typography.css, prose.css
  views/         page content shared by EN and IT (prop `lang`)
public/          favicon, Open Graph image, robots.txt, cv/
```

Path aliases: `@components`, `@data`, `@i18n`, `@layouts`, `@styles`, `@views`.

## 4. Design System

Monochrome palette with a single lime accent, defined in `src/styles/theme.css` as `sb-*` tokens (`bg-sb-card`, `text-sb-muted-foreground`, `border-sb-border`, `text-sb-primary`...). Tailwind's default colours are disabled on purpose.

Reusable classes live in `src/styles/typography.css` as `@utility`:

| Class | Use |
| --- | --- |
| `sb-display` + `sb-dot` | Big headings ending with the lime full stop |
| `sb-section-title` | Section headings |
| `sb-eyebrow` | Small uppercase mono labels |
| `sb-chip` / `sb-chip-accent` | Neutral / lime labels |
| `sb-panel` + `sb-panel-hover` | Flat cards |
| `sb-link` | Lime-underlined links |

Fonts (Astro Fonts API, `astro.config.mjs`): Space Grotesk (display), Inter (text), JetBrains Mono (labels).

## 5. Routing

English pages at `/`, Italian ones under `/it/`. Each page in `src/pages` is a one-line wrapper around a view in `src/views`, so content is written once and translated through a `text = { en, it }` object.

## 6. Content

- **Projects:** `src/data/projects.ts` (array order = order on the site, academic first).
- **Skills:** `src/data/skills.ts`, `level` from 1 to 5, `icon` is a key of `TechIcon.astro` (brand logos come from simple-icons).
- **Articles:** copy `src/content/articles/_template.md` (or `_template-htb.md` for Hack The Box retired machines). Categories are in `src/data/articleCategories.ts`.

## 7. Deployment

Cloudflare Pages, connected to this repository: every push on `main` is built and published.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `pnpm run build` |
| Build output directory | `dist` |

Node is pinned by `.node-version`. The public URL is set in `astro.config.mjs` (`site`) and `public/robots.txt`.

</details>
