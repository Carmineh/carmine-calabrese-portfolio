<div align="center">
  <div style="background: white; padding: 20px; border-radius: 12px;  display: inline-block;">
    <img src="https://i.ibb.co/7NWkfrDL/sb-template-astro.jpg" alt="SB-Template Astro Logo" width="300" style="border-radius: 12px;">
  </div>


  # SB-Template Astro

  ![Version](https://img.shields.io/badge/version-0.0.1-blue)
  [![Node.js](https://img.shields.io/badge/node-%3E%3D22.12.0-brightgreen)](https://nodejs.org)
  [![Astro](https://img.shields.io/badge/astro-7.3.1-BC52EE?logo=astro)](https://astro.build)
  [![TypeScript](https://img.shields.io/badge/typescript-strict-3178C6?logo=typescript)](https://www.typescriptlang.org)
  ![License](https://img.shields.io/badge/license-MIT-green)

  **Stop wasting time on boilerplate. Start building features.**

  An Astro starter template, initialised from the official `minimal` template. Design system, reusable components, i18n and the rest of the opinionated setup are added incrementally — see the empty sections below for what's still to come.

</div>

---

## Developer Notes

> Internal knowledge base for contributors: known issues, gotchas and version decisions that aren't obvious from the code alone. Not part of the numbered docs below — update this section whenever something like this is discovered or resolved.

_Nothing logged yet._

---

## Table of Contents

1. [Overview](#1-overview)
2. [Getting Started](#2-getting-started)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Routing](#5-routing)
6. [Layouts](#6-layouts)
7. [Pages](#7-pages)
8. [Components](#8-components)
9. [Composables & Utils](#9-composables--utils)
10. [AI Tooling — Prompts & Instructions](#10-ai-tooling--prompts--instructions)
11. [Deployment](#11-deployment)
12. [Versioning](#12-versioning)
13. [Dependencies](#13-dependencies)

---

## 1. Overview

SB-Template Astro is meant to become an opinionated starting point for building new Astro sites — a pre-configured design system, reusable UI components, i18n and layouts, so future projects can skip scaffolding and go straight to features.

Right now the repo is at its `minimal` starting point (`pnpm create astro@latest -- --template minimal`): a single homepage, no components, no design system, no i18n. This README follows the target structure the template will grow into; sections with nothing built yet are marked as such rather than filled with placeholder content.

**Target audience:** Astro developers who want a clean, consistent foundation without bikeshedding on folder structure, naming conventions, or design tokens — once the template is actually built out.

---

## 2. Getting Started

### Prerequisites

- **Node.js** ≥ 22.12.0
- **pnpm**

### Installation

```bash
git clone <this-repo-url> my-project
cd my-project
pnpm install
```

### Development

```bash
pnpm dev
```

Visit **http://localhost:4321**.

> Per [AGENTS.md](./AGENTS.md), AI assistants should start the dev server in background mode (`astro dev --background`) and manage it with `astro dev stop` / `astro dev status` / `astro dev logs`.

### Available Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start development server at `http://localhost:4321` |
| `pnpm build` | Build for production (outputs to `dist/`) |
| `pnpm preview` | Preview production build locally |
| `pnpm astro ...` | Run Astro CLI commands (e.g. `astro add`, `astro check`) |

---

## 3. Project Structure

```
├── astro.config.mjs        — Astro configuration
├── package.json            — dependencies and scripts
├── tsconfig.json           — TypeScript config, extends astro/tsconfigs/strict
├── pnpm-workspace.yaml      — pnpm settings (allowBuilds: esbuild, sharp)
├── public/
│    favicon.ico
│    favicon.svg
└── src/
     pages/
       index.astro          — homepage
```

No `src/components/`, `src/layouts/`, `src/content/` or `src/assets/` yet — added as the template grows.

---

## 4. Design System

_Not set up yet._ No design tokens, colour palette, typography scale or utility classes exist in this template yet.

---

## 5. Routing

Routing is handled by Astro's file-based routing. The file path inside `src/pages/` maps directly to the URL.

### File → URL mapping

| File path | URL | Notes |
|---|---|---|
| `src/pages/index.astro` | `/` | Homepage |
| `src/pages/about.astro` | `/about` | Static page |
| `src/pages/blog/[slug].astro` | `/blog/:slug` | Dynamic route |
| `src/pages/[...slug].astro` | `/anything/deep` | Catch-all route |

No dynamic routes, middleware or i18n routing exist yet — see [Astro routing guide](https://docs.astro.build/en/guides/routing/) before adding any.

---

## 6. Layouts

_Not set up yet._ No `src/layouts/` directory exists yet.

---

## 7. Pages

Pages live in `src/pages/`. Currently only `index.astro`, containing static placeholder markup from the `minimal` template — no `<head>` metadata conventions, SEO helpers or i18n wiring have been established yet.

### Available pages

| Page | URL | Description |
|---|---|---|
| `index.astro` | `/` | Placeholder homepage from the Astro `minimal` template |

---

## 8. Components

_Not set up yet._ No `src/components/` directory exists yet.

---

## 9. Composables & Utils

_Not set up yet._ No shared utilities or composables exist yet.

---

## 10. AI Tooling — Prompts & Instructions

This repository ships with a single [`AGENTS.md`](./AGENTS.md) file at the project root (symlinked as `CLAUDE.md`) that gives any AI coding assistant context on the project. It currently covers only dev-server usage and links to Astro's own documentation.

| File | Purpose |
|---|---|
| `AGENTS.md` (symlinked as `CLAUDE.md`) | Dev workflow (background dev server) and links to Astro docs |

No project-specific conventions, design system tokens, component catalogue or documented workflows exist yet — this section will grow alongside the rest of the template.

---

## 11. Deployment

_Not set up yet._ No adapter, hosting preset or CI/CD pipeline is configured. `astro build` currently produces a static build in `dist/`.

---

## 12. Versioning

_Not set up yet._ No changelog automation or release pipeline is configured. Current version is `0.0.1` in `package.json`.

---

## 13. Dependencies

| Package | Version | Purpose |
|---|---|---|
| `astro` | ^7.3.1 | Core framework |

---

<div align="center">

Built with ❤️ by **Stefano Biddau**

[stefanobiddau.com](https://stefanobiddau.com) · [@stefanoBid](https://github.com/stefanoBid)

</div>