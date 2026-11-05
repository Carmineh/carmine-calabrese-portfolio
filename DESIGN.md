---
name: Carmine Calabrese Portfolio
description: Personal portfolio of a software engineer; monochrome dark with a single Signal Lime mark.
colors:
  signal-lime: "#C6F432"
  signal-lime-bright: "#D6FF5C"
  lime-ink: "#141A00"
  signal-lime-wash: "rgba(198, 244, 50, 0.08)"
  carbon: "#111111"
  graphite: "#181818"
  graphite-raised: "#1F1F1F"
  graphite-deep: "#141414"
  chalk: "#F2F2EE"
  bone: "#CFCFCA"
  ash: "#8A8A85"
  hairline: "#2A2A2A"
  hairline-strong: "#4A4A47"
  alert-red: "#EF4444"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "8rem"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "10px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.lime-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-primary-hover:
    backgroundColor: "{colors.signal-lime-bright}"
    textColor: "{colors.lime-ink}"
  button-secondary:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-secondary-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.chalk}"
  button-ghost:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ash}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  button-ghost-hover:
    textColor: "{colors.chalk}"
  card:
    backgroundColor: "{colors.graphite}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.graphite-raised}"
  chip:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  chip-accent:
    backgroundColor: "{colors.signal-lime-wash}"
    textColor: "{colors.signal-lime}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  nav-link:
    textColor: "{colors.ash}"
    padding: "6px 10px"
  nav-link-active:
    textColor: "{colors.chalk}"
  language-switch-active:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

# Design System: Carmine Calabrese Portfolio

## Overview

**Creative North Star: "The Signal Mark"**

A near-empty black sheet and one lime mark: the full stop after the name. Everything else stays quiet so that one signal reads. The page is built from type, hairlines and space; colour is spent once per idea, never as decoration. Restraint is the point, but it is not timid: headlines are set very large and very tight, and the few things on screen are stated with confidence.

The mood is sober, self-assured and personal. Sober because surfaces are flat and the palette is grey on near-black. Self-assured because the display type carries the hierarchy on its own, without boxes, icons or effects propping it up. Personal because it reads as one person's page, in his own voice: his name is the hero, his projects are the content, and the small mono labels feel like notes he wrote in the margin.

The system explicitly rejects four looks: gradients and glows, glass (translucent blurred panels), a light theme, and the "hacker" cliché (green-on-black, glitch, scrolling text). They read as AI-generated or as costume, and this site must read as neither.

**Key Characteristics:**
- Monochrome dark ground with a single accent, Signal Lime.
- Display headlines in Space Grotesk, oversized and tightly tracked, ending in a lime full stop.
- Flat surfaces separated by 1px hairlines; no shadows anywhere.
- Small uppercase JetBrains Mono labels for metadata and section numbers.
- Motion limited to colour and border changes on hover.

## Colors

A grey-scale built on warm near-black and warm off-white, punctuated by one acid accent.

### Primary
- **Signal Lime** (#C6F432): the only colour on the site. The full stop after headings, the CV download button, the underline of the active nav link and of text links, section numbers, project badges and the filled segments of the skill level bars. Focus rings use it too.
- **Signal Lime Bright** (#D6FF5C): hover state of lime-filled buttons only.
- **Lime Ink** (#141A00): text set on a lime fill.

### Neutral
- **Carbon** (#111111): the page ground.
- **Graphite** (#181818): cards and dropdown panels, one step above the ground.
- **Graphite Raised** (#1F1F1F): hovered cards and surfaces.
- **Graphite Deep** (#141414): the small icon wells inside cards and skill tiles.
- **Chalk** (#F2F2EE): headings, strong text, active states.
- **Bone** (#CFCFCA): running text.
- **Ash** (#8A8A85): supporting text, labels, metadata, inactive nav items. Always at full strength: a faded Ash drops below 4.5:1.
- **Hairline** (#2A2A2A): every border and divider.
- **Hairline Strong** (#4A4A47): borders on hover.
- **Alert Red** (#EF4444): reserved for errors; not used on any current page.

### Named Rules
**The One Signal Rule.** Signal Lime is the only hue on the site and covers a small fraction of any screen. If a second element starts competing with the full stop, one of them loses the lime.

**The Full-Strength Grey Rule.** Neutral text is never faded with opacity. Contrast stays at WCAG AA (4.5:1) or better on Carbon and Graphite.

## Typography

**Display Font:** Space Grotesk (with Inter, sans-serif)
**Body Font:** Inter (with sans-serif)
**Label/Mono Font:** JetBrains Mono (with monospace)

**Character:** Space Grotesk's slightly quirky geometric forms give the large headlines a personal voice. Inter keeps the reading text neutral, and JetBrains Mono adds a quiet engineer's accent in the small labels.

### Hierarchy
- **Display** (500, 3.4rem on phones up to 8rem on wide screens, line-height 0.92, tracking -0.04em): the name on Home and the page titles (Projects, Skills, Resume, the closing "Let's work together"), always ending with a Signal Lime full stop.
- **Headline** (500, 1.5rem to 1.875rem, tracking tight): section titles such as "Core Technologies" and "Featured Projects", preceded by a two-digit lime section number in mono.
- **Title** (600, 1rem to 1.125rem): card titles, project and skill names.
- **Body** (400, 0.875rem to 1rem, line-height 1.625): descriptions and bios, kept to about 42rem wide (max-w-2xl) on intros.
- **Label** (400, 11px, tracking 0.14em, uppercase): eyebrows above heroes and legends; the same face without uppercase sets chips, tags, dates and the language switch.

### Named Rules
**The Full Stop Rule.** Every display headline ends with a lime full stop. It is the system's signature; nothing else gets the treatment.

**The Three Voices Rule.** Space Grotesk speaks, Inter explains, JetBrains Mono annotates. No fourth face, and mono never sets running text.

## Layout

One centred column, 1024px wide at most (max-w-5xl), with 16px side margins on phones and 24px from 640px up. Content stacks vertically in sections separated by 48px of space (py-12), with a hairline before the closing section.

Grids use 12–16px gaps: skill tiles in 2 columns, 4 from 768px; project cards in 1 column, 2 from 768px, 3 from 1024px on the Projects page. The hero is left-aligned and generous: eyebrow, oversized name, role line, bio, then the button row. Breakpoints follow Tailwind's defaults (640, 768, 1024px). On phones the navigation becomes a horizontally scrolling row under the logo, with its scrollbar hidden.

**The Single Column Rule.** Everything aligns to the same left and right edges of one container; nothing breaks out to one side.

## Elevation & Depth

The system is flat. There are no shadows, no blur and no glass. Depth is tonal: Carbon is the ground, Graphite lifts a card one step, Graphite Raised marks hover, and 1px hairlines draw every edge. The sticky navigation sits on a 95% opaque Carbon bar with a hairline under it, with no blur behind.

**The Flat-By-Default Rule.** Nothing casts a shadow. If an element needs to stand out, it gets a lighter surface or a stronger hairline, never a drop shadow or a glow.

## Shapes

Gently softened corners on a tight scale: 4px for chips, tags and the language switch; 6px for buttons and icon wells; 8px for cards and panels. Every container has a full 1px hairline border, and corners are never larger than 10px. The only round shapes are the small timeline dots on the Resume page.

## Components

Precise and restrained: thin lines, no shadows, and hover changes only a border or a colour.

### Buttons
- **Shape:** gently softened (6px).
- **Primary:** Signal Lime fill with Lime Ink text, 10px × 16px padding, medium weight. Used once per area for the main action, "Download CV", which opens a small menu to pick the English or Italian PDF.
- **Hover / Focus:** the fill brightens to Signal Lime Bright; focus shows a 2px Signal Lime outline 2px off the edge.
- **Secondary:** Carbon ground, 1px Hairline border, Chalk text; on hover the border goes to Hairline Strong and the ground to Graphite.
- **Ghost:** Ash text with no border, turning Chalk on hover; for GitHub, LinkedIn and contact links next to the main buttons.

### Chips
- **Neutral chip:** transparent with a Hairline border, Ash mono text at 11px. Used for technologies and secondary facts ("Team of 7").
- **Accent chip:** Signal Lime text on an 8% lime wash with a 40% lime border. Reserved for what a project *is* (IEEE SANER 2026, Master's Thesis, Open Source Mod), one per card.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** Graphite, Graphite Raised on hover when the card is interactive.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px Hairline, Hairline Strong on hover.
- **Internal Padding:** 12–16px for skill tiles, 20–24px for project and resume cards.

### Navigation
- **Style:** the "CC." monogram on the left (Space Grotesk, lime full stop), links on the right in Inter at 12–14px.
- **States:** inactive links in Ash; hover and active in Chalk, the active one underlined in Signal Lime (2px, 6px offset).
- **Language switch:** an EN / IT segmented control in mono; the active language is a Chalk block with Carbon text.
- **Mobile:** links drop to a second row that scrolls sideways.

### Skill Level Bar
Five short segments (16px × 4px, 2px gaps) under each skill: filled segments in Signal Lime, empty ones in Hairline, followed by a mono label (Learning, Familiar, Comfortable, Proficient, Strong). The legend at the top of the Skills page repeats the same scale at a smaller size.

### Project Timeline (Resume)
Projects on the Resume page hang from a 1px Hairline vertical line, each marked by a 10px Signal Lime dot, with the title, an accent chip and the description beside it.

## Do's and Don'ts

### Do:
- **Do** end every display headline with a Signal Lime full stop.
- **Do** keep Signal Lime to the full stop, the main button, active and link underlines, section numbers, accent chips and level bars.
- **Do** separate surfaces with tone (Carbon → Graphite → Graphite Raised) and 1px hairlines.
- **Do** set metadata, tags, dates and section numbers in JetBrains Mono at 11px.
- **Do** keep neutral text at full strength so contrast stays at 4.5:1 or better.
- **Do** limit hover feedback to colour, border and background changes (about 150ms).

### Don't:
- **Don't** use gradients, glows or coloured light effects.
- **Don't** use glass: no translucent panels with background blur.
- **Don't** add a light theme or a theme toggle.
- **Don't** drift into the "hacker" look: no green-on-black terminal styling, glitch effects or scrolling text.
- **Don't** add drop shadows to cards, buttons or menus.
- **Don't** introduce a second accent colour or a fourth typeface.
- **Don't** fade grey text with opacity.
