# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, served equally:

- **Recruiters and HR** screening junior candidates quickly. In under a minute they need the role, the degree, the strongest proof points and the CV download.
- **Tech leads and engineers** preparing or running a technical interview. They go deeper: project details, repositories, the tools actually used and how well.

Both arrive from LinkedIn, the CV or a direct link, in English or Italian.

## Product Purpose

The personal portfolio of Carmine Calabrese, a Master's candidate in Computer Science (University of Salerno, Software Engineering & IT Management, graduating December 2026). It exists to get him interviews for junior roles in **Backend, DevOps and DevSecOps**, with no priority among the three. Success means a visitor understands who he is and what he can do, then downloads the CV or gets in touch.

Secondary, not live yet: an Articles section documenting what he learns along the way (penetration testing, DevSecOps, software engineering).

## Positioning

A software engineer with a published research record and a hands-on security track:

- co-author of a paper at **IEEE SANER 2026** (MuSe, mutation testing of Solidity smart contracts);
- a Master's thesis on privacy-preserving authentication with blockchain and Zero-Knowledge Proofs (DAPA);
- offensive-security coursework done end to end (Deathnote 1 pentest, Nebula level 14 reverse engineering);
- side projects with real users: a Minecraft mod with 4,000+ downloads and an indie game demo on itch.io.

## Operating Context

- Visitors usually come from the CV or LinkedIn and often have the PDF open next to the site.
- The CV downloads in English or Italian from a menu (`public/cv/`).
- Contact is by email or LinkedIn; there is no form and no backend.

## Capabilities and Constraints

- Static Astro 7 site, built on [sb-template-astro](https://github.com/stefanBid/sb-template-astro) by Stefano Biddau; the credit stays in the footer and README.
- Bilingual: English at `/`, Italian under `/it/`. Every page and string exists in both languages.
- Pages: Home, Projects (academic first, then personal), Skills (with a 1–5 self-assessment), Resume, 404.
- Articles are built but hidden (`features.articles = false` in `src/data/site.ts`). Hack The Box write-ups may only cover retired machines (templates in `src/content/articles/`).
- Personal data limits: no phone number, date of birth or signature anywhere on the site or in the published CVs. Email, LinkedIn, GitHub and town are public.
- Deployed on Cloudflare Pages from `main`.

## Brand Commitments

- Name: Carmine Calabrese. Role line: "Software Engineer & Security Enthusiast" (IT: "Software Engineer & Appassionato di Cybersecurity").
- Voice on the site: professional and direct. Short sentences, concrete facts, no jokes. (The repository README's playful header is a deliberate exception outside the site.)
- Binding constraint stated by the owner: the site is dark only, with no light theme.

## Evidence on Hand

- IEEE SANER 2026 paper (MuSe), repo `github.com/Carmineh/MuSe-Remix-Plugin`. No paper URL recorded yet.
- M.Sc. thesis DAPA; weighted GPA 28.2/30.
- EcoHouses: project manager of a 7-student team.
- Deathnote 1 pentest (`github.com/Carmineh/Deathnote1_PenTest`) and Nebula 14 (`github.com/Carmineh/Nebula_14`).
- Create: Mob Grinding, 4,000+ downloads (`github.com/Carmineh/CreateMobGrinding`); Go Fishin! demo on itch.io.
- Redacted CVs: `public/cv/Carmine-Calabrese-CV-EN.pdf`, `public/cv/Carmine-Calabrese-CV-IT.pdf`.
- Project data: `src/data/projects.ts`; skills and self-assessed levels: `src/data/skills.ts`.

Absent, and must not be fabricated: professional work experience or employers, testimonials or references, project screenshots or photos, published articles, certifications.

## Product Principles

1. **Two depths on every page.** A 30-second scan for recruiters (role, degree, top proof, CV) and the details on demand for engineers (repos, tools, methods).
2. **Proof over adjectives.** Every claim points to a paper, a repository, a download count or a course project.
3. **Honest about level.** He is a junior candidate: self-assessments stay realistic, and nothing is presented as industry experience.
4. **Engineering first, security as the edge.** Software engineering is the foundation; security shows as the direction he is growing in.
5. **Bilingual parity.** The Italian and English versions carry the same content and quality.

## Accessibility & Inclusion

WCAG 2.1 AA as the baseline: text contrast at least 4.5:1, everything usable by keyboard, nothing hidden that only hover reveals, and reduced-motion preferences respected.
