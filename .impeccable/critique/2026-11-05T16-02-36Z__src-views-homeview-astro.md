---
target: Home page
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\Carmi\\Desktop\\Personal\\carmine-calabrese-portfolio\\src\\views\\HomeView.astro"
target_fingerprint: "sha256:2b682b7967fbc0238642f36eed3646518f353815dc1b2ec9e5ddec78a8344c3b"
target_path: "C:\\Users\\Carmi\\Desktop\\Personal\\carmine-calabrese-portfolio\\src\\views\\HomeView.astro"
timestamp: 2026-11-05T16-02-36Z
slug: src-views-homeview-astro
---
Method: dual-agent (A: design review · B: detector + browser)

# Critique: Home (src/views/HomeView.astro, EN + IT)

Mode: Persuade. Heuristics 7 and 10 scored n/a (single reading path; no help system needed).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active nav and EN/IT clear; no feedback after CV download (browser covers it) |
| 2 | Match System / Real World | 3 | Plain copy; "Binary CTF", "VulnHub Lab", "M.Sc. Thesis Project" are jargon for HR |
| 3 | User Control and Freedom | 3 | CV menu closes with Esc / click outside; nothing traps |
| 4 | Consistency and Standards | 2 | stats chip off-system and English-only on /it/; GitHub three times |
| 5 | Error Prevention | 3 | Low risk; language choice prevents wrong CV |
| 6 | Recognition Rather Than Recall | 3 | Text labels; 01/02 numbers decorative only |
| 7 | Flexibility and Efficiency | n/a | Persuade page, one path |
| 8 | Aesthetic and Minimalist Design | 3 | Clean and confident, but the 128px name owns the fold and pushes proof down |
| 9 | Error Recovery | 3 | mailto with no client: the address is not shown on Home |
| 10 | Help and Documentation | n/a | A portfolio needs none |
| **Total** | | **23/32 (72%)** | **Good, low end** |

## Design Specificity Verdict

LLM assessment: execution follows "The Signal Mark" faithfully (lime only where allowed; no shadows, gradients or glass), but the structure is the standard developer-portfolio skeleton (giant name, bio, logo grid, card grid, closing CTA). Voice and data are authored; composition is not.

Deterministic scan: CLI 2 advisory findings. design-system-font-size 3.4rem at HomeView.astro:98 is a false positive (DESIGN.md documents 3.4rem on phones; detector reads only the 8rem token). design-system-font-size 10px at ArticleCard.astro:42 is a real minor deviation (system says 11px; articles hidden). Browser overlay on /, /projects/, /it/: hero-eyebrow-chip, kicker-above-heading, tiny-text (11px mono chips): all conflict with rules DESIGN.md documents on purpose. Point of agreement: the eyebrow's content repeats the role line underneath, wasting the most valuable spot.

## Overall Impression

Disciplined and confident; the CV button is the strongest element in the first screen. Biggest opportunity: bring the proof (IEEE paper, GPA, graduation date, 4,000+ downloads) into the first screen.

## What's Working

1. Disciplined colour: lime only on the full stop, primary CTA, section numbers and accent chips, so Download CV is the loudest element.
2. CV one click away at the top and at the close; menu orders the page language first; accessible details/summary with Esc.
3. Honest voice: "Master's Degree candidate" plus concrete facts, no inflated experience.

## Priority Issues

- [P1] Proof buried under the name. At 1440x900 the fold holds eyebrow, 128px name, role, 5-line grey bio, buttons; first project card at ~1310px. Fix in HomeView.astro: md:text-9xl to md:text-8xl; replace part of the bio with a mono fact strip (M.Sc. CS · Salerno · Dec 2026 / IEEE SANER 2026 co-author / 4,000+ downloads / Backend · DevOps · DevSecOps); eyebrow stops repeating the role. Command: /impeccable layout, then /impeccable clarify.
- [P1] Security edge has no featured project on Home: featured are MuSe, DAPA, Go Fishin!, Create: Mob Grinding; Deathnote 1 and Nebula 14 are featured: false. Fix in projects.ts: feature Deathnote 1 instead of Go Fishin!. Command: /impeccable clarify.
- [P2] Core Technologies tiles carry no information (logo + name; level and description already in skills.ts). Fix: show the 5-segment level bar, or reduce to one stack line and move projects to section 01. Command: /impeccable distill.
- [P2] Invisible keyboard focus on project titles (focus:outline-hidden at ProjectCard.astro:76, also ArticleCard.astro:49); small touch targets on mobile (nav 28px tall, EN/IT 30x24, card icons 28x28); no skip link. Fix: remove focus:outline-hidden, pad targets to 40-44px, add a "Skip to content" link and id="main" in Layout.astro. Command: /impeccable harden.
- [P2] stats chip English-only on /it/ ("Conference Paper", "M.Sc. Thesis Project", "Playable Demo on itch.io"), duplicates the accent chip, styled off-system (text-xs on bg-sb-secondary). Fix: statsEn/statsIt, drop duplicates, use sb-chip. Command: /impeccable polish.

## Persona Red Flags

- Recruiter with the PDF open (Giulia): fold shows name, role and an unread grey paragraph; no graduation date, availability or GPA; 4,000+ downloads two screens down. Finds Download CV instantly.
- Jordan (first-timer): Get in Touch silently opens a mail client with no visible address; Download CV opens a menu; "Binary CTF", "ZKP" unexplained.
- Casey (mobile): nav and EN/IT small and at the top; IT hero runs past one screen (8-line bio); card text drops to 12px; "Conference Paper" chip wraps.
- Sam (keyboard/screen reader): no focus ring on project titles; no skip link; duplicate tab stops per card; "01Core Technologies" read as one word. Contrast fine.

## Minor Observations

- "Home" nav item redundant with the CC. monogram; GitHub three times on desktop.
- DAPA card has no link.
- Arrow turns lime on hover: a lime use DESIGN.md does not list.
- Footer credit uses a faded lime (/60) the system does not name.
- Article language badge 10px instead of 11px.
- Articles empty state ("$ ls ./articles" in lime) close to the excluded hacker look; revisit before enabling articles.
- "I usually reply within a day" is a promise to keep.

## Questions to Consider

- If a recruiter could read one line beyond your name, which one, and why is it grey text mid-paragraph today?
- The role says Security Enthusiast and you target DevSecOps: why does Home feature a fishing game and a Minecraft mod but not your end-to-end pentest?
- Does a 128px name earn the whole first screen for an unknown junior, or would "IEEE SANER 2026 co-author, graduating Dec 2026" open more doors at that size?
