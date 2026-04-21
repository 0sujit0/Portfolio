# project_page_design.md
> Design system for all portfolio project pages.
> Derived from the Claude / Anthropic design language.
> This file is the single source of truth — reference it for every project page build.

---

## 0. How to use this file

When building any project page:
1. Map the project's content to the 7 zones below
2. Mark each zone as Required or skip Conditional zones that don't apply
3. Use the Component Map to wire up the correct component
4. Follow the Master Rules at the end — they override any per-zone decision

When prompting the agent per page, use this opener:
> "Following project_page_design.md, build the project page for [Project Name].
> Zone 2: [quantitative / qualitative]. Zone 4: [applies / skip]. Zone 5: [N solutions / before-after / tech stack].
> Use the zone rules exactly."

---

## 1. CSS Tokens

Paste this `:root` block into your global stylesheet. Every color reference in this file maps to one of these tokens.

```css
:root {
  /* Backgrounds */
  --color-parchment: #f5f4ed;       /* page background — always */
  --color-ivory: #faf9f5;           /* card surfaces on light sections */
  --color-near-black: #141413;      /* dark section backgrounds */
  --color-dark-surface: #30302e;    /* dark cards, nav borders, pill backgrounds */
  --color-warm-sand: #e8e6dc;       /* secondary button bg, subtle surfaces */
  --color-pure-white: #ffffff;      /* reserved for specific button surfaces only */

  /* Brand */
  --color-terracotta: #c96442;      /* primary CTA, key numbers, eyebrows — use sparingly */
  --color-coral: #d97757;           /* numbers on dark bg, secondary accents */

  /* Text */
  --color-text-primary: #141413;    /* all headings and primary body on light */
  --color-text-olive: #5e5d59;      /* secondary body text on light */
  --color-text-stone: #87867f;      /* labels, metadata, tertiary text */
  --color-text-charcoal: #4d4c48;   /* button text on warm surfaces */
  --color-text-ivory: #faf9f5;      /* headings on dark sections */
  --color-text-silver: #b0aea5;     /* body text on dark sections */
  --color-text-dark-warm: #3d3d3a;  /* dark text links, emphasized secondary */

  /* Borders */
  --color-border-cream: #f0eee6;    /* standard light card border */
  --color-border-warm: #e8e6dc;     /* prominent borders, section dividers */
  --color-border-dark: #30302e;     /* borders on dark surfaces */

  /* Interactive */
  --color-ring-warm: #d1cfc5;       /* ring shadow for hover/focus on light */
  --color-focus-blue: #3898ec;      /* input focus ring — only cool color allowed */

  /* Semantic */
  --color-error: #b53333;           /* error states only */
}
```

---

## 2. Typography Tokens

```css
/* Font families */
--font-serif: Georgia, serif;          /* all headings */
--font-sans: Arial, system-ui, sans-serif; /* all UI, labels, body */
--font-mono: 'Courier New', monospace; /* code only */

/* Scale */
--text-display: 52px;    /* hero title on desktop */
--text-h1: 36px;         /* section headings */
--text-h2: 25px;         /* sub-section headings */
--text-h3: 20px;         /* card titles */
--text-body-lg: 20px;    /* intro paragraphs */
--text-body: 17px;       /* standard body */
--text-body-sm: 15px;    /* compact body, card descriptions */
--text-caption: 14px;    /* metadata, table cells */
--text-label: 12px;      /* pills, badges, small labels */
--text-overline: 10px;   /* uppercase section labels */
--text-micro: 9px;       /* breadcrumbs, tab labels */
```

### Typography rules (non-negotiable)

| Role | Font | Size | Weight | Line-height |
|---|---|---|---|---|
| Hero title | Georgia serif | 52px desktop / 25px mobile | 500 | 1.15 |
| Section heading | Georgia serif | 36px | 500 | 1.20 |
| Card title | Georgia serif | 20px | 500 | 1.30 |
| Eyebrow / overline | Arial sans | 10px, uppercase, letter-spacing 0.8px | 500 | 1.60 |
| Body large | Arial sans | 20px | 400 | 1.60 |
| Body standard | Arial sans | 17px | 400 | 1.60 |
| Body small | Arial sans | 15px | 400 | 1.60 |
| Caption / table | Arial sans | 14px | 400 | 1.43 |
| Label / pill | Arial sans | 12px, letter-spacing 0.12px | 400–500 | 1.25 |
| Overline | Arial sans | 10px, uppercase, letter-spacing 0.8px | 500 | 1.60 |

**Rules that cannot be broken:**
- Serif for headings only. Sans for everything else.
- Maximum font weight is **500** — never 600, never 700, never bold.
- Minimum body line-height is **1.60** — this creates the literary reading experience.
- Never use Arial (sans) for headings. Never use Georgia (serif) for UI labels or body.

---

## 3. Spacing System

Base unit: **8px**

| Token | Value | Use |
|---|---|---|
| `--space-xs` | 4px | Internal icon gaps |
| `--space-sm` | 8px | Pill padding, tight gaps |
| `--space-md` | 16px | Standard internal card padding |
| `--space-lg` | 24px | Card padding, between elements |
| `--space-xl` | 32px | Between sections within a zone |
| `--space-2xl` | 48px | Between zones on mobile |
| `--space-3xl` | 80px | Between zones on desktop |

Max container width: **1200px**, centered.

---

## 4. Shadow & Depth System

| Level | CSS | Use |
|---|---|---|
| Flat | none | Page background, inline text |
| Card border | `1px solid var(--color-border-cream)` | Standard cards on light |
| Ring (interactive) | `box-shadow: 0px 0px 0px 1px var(--color-ring-warm)` | Button hover, interactive cards |
| Whisper | `box-shadow: rgba(0,0,0,0.05) 0px 4px 24px` | Elevated feature cards |
| Inset (pressed) | `box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,0.15)` | Active button states |

No drop shadows. No colored shadows. Depth comes from ring shadows and light/dark section alternation only.

---

## 5. Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Minimal inline elements |
| `--radius-md` | 8px | Standard cards, buttons |
| `--radius-lg` | 12px | Primary buttons, inputs |
| `--radius-xl` | 16px | Featured containers |
| `--radius-2xl` | 24px | Tag-like elements |
| `--radius-full` | 9999px | Pills |

---

## 6. Button Styles

### Primary (Terracotta)
```css
background: var(--color-terracotta);
color: var(--color-ivory);
border-radius: var(--radius-lg);  /* 12px */
padding: 8px 16px;
font-family: var(--font-sans);
font-size: 15px;
font-weight: 500;
border: none;
box-shadow: 0px 0px 0px 1px var(--color-terracotta);
```
Use for: primary CTAs only — "View Deck", "View Prototype", "Live Demo".

### Secondary (Warm Sand)
```css
background: var(--color-warm-sand);
color: var(--color-text-charcoal);
border-radius: var(--radius-md);  /* 8px */
padding: 8px 14px;
font-family: var(--font-sans);
font-size: 14px;
font-weight: 500;
border: none;
box-shadow: 0px 0px 0px 1px var(--color-ring-warm);
```
Use for: secondary actions — "Read Case Study", "View Code", "Download PDF".

---

## 7. The 7 Zones

Every project page is built from these zones in this order.
Zones marked **REQUIRED** appear on every page.
Zones marked **CONDITIONAL** appear based on the project type.

---

### Zone 1 — Hero
**Status: REQUIRED on every page**
**Component: `<ProjectHero />`**

Renders on the **parchment** background (`#f5f4ed`).

#### Elements

**Breadcrumb** (top of section)
- Format: `Portfolio › [Category] › [Project Name]`
- Font: Arial, 11px, stone-gray (`#87867f`)
- Separators: terracotta (`#c96442`)

**Eyebrow**
- Content: project type + year (e.g. "PM Capstone · 2025", "Side Project · 2024", "Freelance · 2025")
- Font: Arial, 10px, uppercase, letter-spacing 0.8px, terracotta

**Title**
- Font: Georgia serif, 52px desktop / 36px tablet / 25px mobile, weight 500, line-height 1.15
- Color: near-black (`#141413`)
- Max length: 12 words
- Must be a sharp declarative statement, not a description

**Subtitle**
- Font: Arial, 20px desktop / 17px mobile, olive-gray (`#5e5d59`), line-height 1.60
- Max length: 50 words
- Structure: one sharp insight sentence + the "so what" consequence

**Meta row** (3 items max)
- Label: Arial 9px uppercase, stone-gray, letter-spacing 0.8px
- Value: Arial 12px weight 500, charcoal-warm (`#4d4c48`)
- Standard items: Domain · Timeline · Methods

**Tag pills**
- Background: ivory (`#faf9f5`), border: 1px solid border-warm (`#e8e6dc`)
- Font: Arial 11px, olive-gray
- Border-radius: 9999px (full pill)
- One terracotta-filled "Featured" tag per featured project only

#### Content mapping by project type

| Project Type | Eyebrow | Title pattern | Subtitle pattern |
|---|---|---|---|
| PM / Strategy | "PM Capstone · [Year]" | "[Company] — [One-line thesis]" | Problem scale + solution direction |
| Design / UX | "UX Design · [Year]" | "[Product] — [Design thesis]" | User pain + design outcome |
| Technical / Build | "Side Project · [Year]" | "[Product name] — [What it does]" | Who it's for + key capability |
| Research / Analysis | "Research · [Year]" | "[Topic] — [Finding]" | Method summary + key insight |

---

### Zone 2 — North Star Numbers
**Status: CONDITIONAL — quantitative and PM projects**
**Component: `<NorthStarStrip />`**

Renders on **near-black** background (`#141413`). Three cards in a row.

#### Elements

**Stat card**
```css
background: var(--color-near-black);  /* or dark-surface for subtle contrast */
border-radius: var(--radius-md);
padding: 14px 16px;
```

**Number**
- Font: Georgia serif, 22–28px, coral (`#d97757`), weight 500

**Label**
- Font: Arial 10px, warm-silver (`#b0aea5`), line-height 1.4
- Must be a **context sentence**, not a raw metric name
- ✅ "Non-purchasing active users — the problem at scale"
- ❌ "Monthly Active Users"

#### Variants

| Project type | Zone 2 treatment |
|---|---|
| PM / strategy | 3–5 dark stat cards with coral numbers |
| Design | 3 cards with outcome statements in coral Georgia serif (no raw numbers) |
| Technical | 3 cards: users / performance metric / time-to-build |
| No data | Skip Zone 2 entirely |

---

### Zone 3 — Problem & Core Insight
**Status: REQUIRED on every page**
**Component: `<ProblemInsight />`**

Opens with a **near-black** statement block, followed by a **two-column ivory card** pair.

#### Elements

**Problem statement block** (near-black background)
- Background: `#141413`, border-radius: 8px, padding: 24px
- Eyebrow: Arial 10px uppercase, coral
- Title: Georgia serif 16–20px, ivory (`#faf9f5`), weight 500, line-height 1.30
- Body: Arial 13px, warm-silver (`#b0aea5`), line-height 1.60
- Write in **declarative sentences**. No bullet lists in this block. No "I believe" framing — state what the research showed.

**Two-column cards** (ivory, below the dark block)
- Background: ivory (`#faf9f5`), border: 1px solid border-cream (`#f0eee6`), border-radius: 8px, padding: 16px
- Card title: Georgia serif 14px, near-black, weight 500
- Card body: Arial 12px, olive-gray, line-height 1.60 — bullet list allowed here
- Label pair: "What was working / What was broken" OR "Strengths / Gaps" OR "Before / After"

---

### Zone 4 — Research & Method
**Status: CONDITIONAL — research, PM, and UX projects**
**Component: `<ResearchMethod />`**

Renders on **parchment** background. Numbered step list.

#### Elements

**Step bubble**
- Width/height: 24px circle
- Background: terracotta (`#c96442`)
- Text: Arial 11px weight 500, ivory

**Step title**
- Arial 12px weight 500, near-black

**Step body**
- Arial 11px, olive-gray, line-height 1.60
- Must include: participant count or data volume, any filter criteria, focus area

#### Step label variants by project type

| Project type | Step labels |
|---|---|
| PM / research | Primary Research → Secondary Research → Competitive Analysis → Synthesis |
| UX / design | Discovery → Define → Ideate → Prototype → Test |
| Technical | Brief → Architecture → Build → Ship → Measure |
| Content / writing | Research → Outline → Draft → Review → Publish |

**Skip condition:** Omit Zone 4 entirely for quick tools, side experiments, or projects where process is not the story.

---

### Zone 5 — Solution / Output
**Status: REQUIRED on every page**
**Component: `<SolutionOutput />`**

Renders on **near-black** background (`#141413`).

#### Layout rules by solution count

| Solutions | Layout |
|---|---|
| 1 solution | Full-width dark card |
| 2 solutions | Two-column dark cards |
| 3+ solutions | Stacked cards, alternating parchment/dark |

#### Elements (per card)

**Eyebrow**
- Arial 10px uppercase, coral (`#d97757`), letter-spacing 0.8px
- "Solution 1", "Solution 2", etc. — or "Before", "After" for design projects

**Card title**
- Georgia serif 14–18px, ivory, weight 500, line-height 1.30

**Card description**
- Arial 11px, warm-silver, line-height 1.50
- One paragraph max. What it is + why it works.

**Metric pills**
- Background: dark-surface (`#30302e`)
- Text: warm-silver or coral for key figures
- Border-radius: 9999px
- Use for: RICE score, reach, effort, status, tech stack item

#### Variants by project type

| Project type | Zone 5 treatment |
|---|---|
| PM / strategy | Solution cards with RICE score pills and reach numbers |
| UX / design | Before/after split: left = old state, right = new state |
| Technical / build | Architecture card: tech stack pills + one-sentence rationale per choice |
| Writing / content | Output card: format + word count + audience + link |

---

### Zone 6 — Results & Impact
**Status: REQUIRED for all completed projects**
**Component: `<ResultsImpact />`**

Renders on **ivory** background (`#faf9f5`).

#### Elements

**Phase-gated results table** (for PM / strategy projects)

```
Table header row: warm-sand (#e8e6dc) background, stone-gray 10px uppercase labels
Table body rows: ivory background, border-bottom: 1px solid border-cream
Metric column: Arial 12px weight 500, near-black
Baseline column: Arial 12px, stone-gray (de-emphasized)
Intermediate column: Arial 12px, olive-gray
Target / Final column: Arial 12px weight 500, TERRACOTTA — this is the north star
```

**For shipped projects** — replace phase columns with:
- Before / After / Delta % (three columns)
- Delta column in terracotta

**For qualitative projects** (design, writing) — replace table with:
- 2–3 outcome statement cards on near-black background
- Quote format if stakeholder feedback exists
- Coral serif for the key outcome phrase

**CTA strip** (always ends Zone 6)
- Primary button (terracotta): main artifact link — "View Full Deck", "Live Demo", "View Prototype"
- Secondary buttons (warm-sand): supporting links — "Read Case Study", "View Code", "Download PDF"
- Maximum 3 buttons total

---

### Zone 7 — Navigation Footer
**Status: REQUIRED on every page**
**Component: `<ProjectNav />`**

Renders on **parchment** background with border-cream border.

#### Elements

**Previous / Next strip**
- Layout: space-between flex row
- Direction label: Arial 9px uppercase, stone-gray — "← Previous" and "Next →"
- Project title: Georgia serif 13px weight 500, near-black

**Rules**
- If only one adjacent project exists, show only that side
- No descriptions — project name only
- Border-radius: 8px, border: 1px solid border-cream

---

## 8. Light/Dark Section Alternation Rule

Every page must alternate between light and dark zones. The pattern:

```
Zone 1 (Hero)           → LIGHT  (parchment)
Zone 2 (North Star)     → DARK   (near-black)
Zone 3 (Problem)        → MIXED  (dark block + light cards)
Zone 4 (Research)       → LIGHT  (parchment)
Zone 5 (Solution)       → DARK   (near-black)
Zone 6 (Results)        → LIGHT  (ivory)
Zone 7 (Nav Footer)     → LIGHT  (parchment)
```

**Rule: Never place two full dark zones back to back.**
The dark/light alternation creates the chapter-like reading rhythm. If Zone 2 is skipped, Zone 3's dark block still satisfies the alternation.

---

## 9. Component Map

| Zone | Component name | Props |
|---|---|---|
| Zone 1 | `<ProjectHero />` | `title`, `subtitle`, `eyebrow`, `category`, `tags[]`, `meta[]` |
| Zone 2 | `<NorthStarStrip />` | `stats[]` — each: `{ number, label }` |
| Zone 3 | `<ProblemInsight />` | `statement`, `eyebrow`, `cards[]` — each: `{ title, items[] }` |
| Zone 4 | `<ResearchMethod />` | `steps[]` — each: `{ title, body }`, `variant` |
| Zone 5 | `<SolutionOutput />` | `solutions[]` — each: `{ eyebrow, title, description, pills[] }`, `layout` |
| Zone 6 | `<ResultsImpact />` | `tableData`, `ctaLinks[]`, `variant` |
| Zone 7 | `<ProjectNav />` | `prev: { title, href }`, `next: { title, href }` |

All components live under `/src/components/project/`.

---

## 10. Master Rules (override everything)

These rules apply to every zone on every page. If a per-zone rule conflicts with a master rule, the master rule wins.

### Never do

- ❌ Use cool blue-grays anywhere — every gray must have a yellow-brown undertone
- ❌ Use font-weight above 500 — no bold, no 600, no 700
- ❌ Use pure white (`#ffffff`) as a page or card background — use parchment or ivory
- ❌ Use drop shadows — depth comes from ring shadows and background color shifts only
- ❌ Use geometric or tech-style decorative elements — the aesthetic is warm, editorial, literary
- ❌ Reduce body line-height below 1.40
- ❌ Use serif font for UI labels, buttons, or metadata
- ❌ Use sans font for headings
- ❌ Use terracotta for anything other than primary CTAs and key numbers
- ❌ Place two full dark sections back to back
- ❌ Center-align body text or bullet lists — center only headings
- ❌ Use accent underlines under titles
- ❌ Add decorative header/footer bars or colored stripes

### Always do

- ✅ Use parchment (`#f5f4ed`) as the primary page background
- ✅ Use Georgia serif at weight 500 for all headings
- ✅ Keep all neutrals warm-toned — every gray has a yellow-brown undertone
- ✅ Use ring shadows (`0px 0px 0px 1px var(--color-ring-warm)`) for interactive states
- ✅ Maintain serif/sans split — Georgia for content headings, Arial for UI
- ✅ Use generous body line-height (1.60) for a literary reading experience
- ✅ Apply generous border-radius (12–32px) for a soft, approachable feel
- ✅ Write zone eyebrows in terracotta, uppercase, 10px, letter-spacing 0.8px
- ✅ End Zone 6 with a CTA strip, primary button first
- ✅ Include Zone 7 navigation footer on every page

---

## 11. Page-level Agent Prompt Template

Copy and fill in this prompt when starting each new project page:

```
Following project_page_design.md, build the project page for [PROJECT NAME].

Zone 1: Title = "[TITLE]". Subtitle = "[SUBTITLE]". Category = "[CATEGORY]".
Tags = [TAG1, TAG2, TAG3].

Zone 2: [QUANTITATIVE — stats: (1) [NUMBER] / [LABEL], (2) [NUMBER] / [LABEL], (3) [NUMBER] / [LABEL)]
         OR [SKIP — no quantitative data]

Zone 3: Problem statement = "[ONE SHARP SENTENCE]".
         Card A title = "[WHAT WORKED / STRENGTHS]", items = [list].
         Card B title = "[WHAT BROKE / GAPS]", items = [list].

Zone 4: [APPLIES — steps: (1) [METHOD], (2) [METHOD], (3) [METHOD]]
         OR [SKIP]

Zone 5: Layout = [single / two-col / stacked]. Variant = [PM / design / technical].
         Solution 1: "[TITLE]" — "[DESCRIPTION]". Pills = [PILL1, PILL2].
         Solution 2 (if applicable): "[TITLE]" — "[DESCRIPTION]". Pills = [PILL1, PILL2].

Zone 6: Variant = [phase-table / shipped / qualitative].
         [TABLE DATA or OUTCOME STATEMENTS].
         CTAs: Primary = "[LABEL]" → [URL]. Secondary = "[LABEL]" → [URL].

Zone 7: Prev = "[PROJECT NAME]" → [URL]. Next = "[PROJECT NAME]" → [URL].

Follow all master rules in Section 10. Use the component map in Section 9.
```
