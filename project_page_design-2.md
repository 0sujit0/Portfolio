ß# project_page_design.md
> Design system for all portfolio project pages.
> Derived from the Claude / Anthropic design language.
> This file is the single source of truth — reference it for every project page build.

---

## 0. How to use this file

When building any project page:
1. Map the project's content to the 11 zones below
2. Mark each zone as Required or skip Conditional zones that don't apply
3. Use the Component Map to wire up the correct component
4. Follow the Master Rules at the end — they override any per-zone decision

When prompting the agent per page, use this opener:
> "Following project_page_design.md, build the project page for [Project Name].
> Zone 2 (North Star): [applies / skip]. Zone 4 (Pull Quote): [applies / skip].
> Zone 5 (Research): [applies / skip]. Zone 6 (Voice of Customer): [applies / skip].
> Zone 7 (Personas): [applies / skip]. Zone 9 (Strategic Decisions): [applies / skip].
> Zone 8 (Solution): [N solutions / before-after / tech stack].
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
--text-pullquote: 44px;  /* pull quote display, desktop */
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
| Pull quote | Georgia serif | 44px desktop / 28px mobile | 500 | 1.25 |
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

## 7. The 11 Zones

Every project page is built from these zones in this order.
Zones marked **REQUIRED** appear on every page.
Zones marked **CONDITIONAL** appear when the extracted content supports them — the Texture Bank either has the material or it doesn't. Skip the zone entirely if the source has no relevant content.

```
Zone 1  — Hero                       REQUIRED
Zone 2  — North Star Numbers         CONDITIONAL
Zone 3  — Problem & Core Insight     REQUIRED
Zone 4  — Pull Quote                 CONDITIONAL        [NEW]
Zone 5  — Research & Method          CONDITIONAL
Zone 6  — Voice of Customer          CONDITIONAL        [NEW]
Zone 7  — Personas                   CONDITIONAL        [NEW]
Zone 8  — Solution / Output          REQUIRED
Zone 9  — Strategic Decisions        CONDITIONAL        [NEW]
Zone 10 — Results & Impact           REQUIRED
Zone 11 — Navigation Footer          REQUIRED
```

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
**Status: CONDITIONAL — applies when Texture Bank has 3+ quantitative stats with context labels**
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
- **The statement must be the verbatim thesis line from the Texture Bank.** Do not rewrite into something safer. Declarative sentences only. No bullets. No "I believe" framing.

**Two-column cards** (ivory, below the dark block)
- Background: ivory (`#faf9f5`), border: 1px solid border-cream (`#f0eee6`), border-radius: 8px, padding: 16px
- Card title: Georgia serif 14px, near-black, weight 500
- Card body: Arial 12px, olive-gray, line-height 1.60 — bullet list allowed here
- Label pair: "What was working / What was broken" OR "Strengths / Gaps" OR "Before / After"
- **Variant — 4-card grid:** If the deck uses a 4-part frame (e.g. Discovery ✓ / Desire ✓ / Trust ✗ / Conversion ✗), render as a 2×2 grid using the same card styling. Cards with ✓ glyphs keep near-black text; cards with ✗ glyphs use terracotta for the glyph only.

---

### Zone 4 — Pull Quote   [NEW]
**Status: CONDITIONAL — applies when Texture Bank has a thesis candidate that works as a standalone typographic moment**
**Component: `<PullQuote />`**

The page's typographic peak. Breaks the scroll rhythm between Zones 3 and 5. A single deck line, rendered large, with no card, no border, no icon.

This exists because the rest of the page runs at one rhythm (small eyebrow, small title, short body). Pull Quote is the moment that makes the page feel edited rather than generated.

Renders on **parchment** background (`#f5f4ed`) — inherits page color, no surface.

#### Elements

**Quote text**
- Font: Georgia serif, 44px desktop / 32px tablet / 28px mobile, weight 500, line-height 1.25
- Color: near-black (`#141413`) for the main text
- One or two sentences maximum. No quotation marks unless the line originally contains them.
- Left-aligned. Max-width: 880px.
- **Signature word treatment:** one or two key words in the quote may be rendered in terracotta (`#c96442`) to create a visual anchor. Use sparingly — one terracotta span per pull quote, never more.

**Attribution** (optional)
- Only include if the line is attributed to someone other than the author of the project.
- Arial 12px, stone-gray (`#87867f`), letter-spacing 0.4px, positioned below the quote with 24px top margin.
- Format: `— Source name, context`

#### Rules

- **Maximum two Pull Quotes per page.** Never more. If the Texture Bank has three candidates, pick the two sharpest.
- If two Pull Quotes are used: place one between Zone 3 and Zone 5, the second between Zone 8 and Zone 10. Never place two consecutive Pull Quotes.
- No background surface, no border, no card, no bullet, no icon. The typography is the entire component.
- Mobile: reduces to 28px, retains left alignment.
- If the Texture Bank has no thesis line sharp enough to stand alone, skip this zone entirely. A weak pull quote is worse than no pull quote.

#### Content mapping

| Source | What to pull |
|---|---|
| PM / Strategy | Thesis candidate 1 from Texture Bank — the declarative line that names the paradox |
| Design / UX | A user insight phrased as a single line, or a design principle that shaped the work |
| Technical | A one-line rationale for the core architectural decision |
| Research | The central finding stated as a declarative claim, not a hedge |

---

### Zone 5 — Research & Method
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
- **Sentence 1:** method + sample size. **Sentence 2:** the concrete finding, not a description of the method.

#### Step label variants by project type

| Project type | Step labels |
|---|---|
| PM / research | Primary Research → Secondary Research → Competitive Analysis → Synthesis |
| UX / design | Discovery → Define → Ideate → Prototype → Test |
| Technical | Brief → Architecture → Build → Ship → Measure |
| Content / writing | Research → Outline → Draft → Review → Publish |

**Skip condition:** Omit Zone 5 entirely for quick tools, side experiments, or projects where process is not the story.

---

### Zone 6 — Voice of Customer   [NEW]
**Status: CONDITIONAL — applies when Texture Bank has 2+ named customer quotes with attribution**
**Component: `<VoiceOfCustomer />`**

The evidence layer. Named humans saying real things, in their own words. This zone is the single strongest form of proof-of-rigor on a PM or research project page — it shows the researcher actually went and looked at what users said, and didn't summarize the texture away.

Renders on **near-black** background (`#141413`).

#### Layout

- **2 quotes:** side-by-side, two columns
- **3 quotes:** three columns on desktop, stacked on tablet/mobile
- **4–5 quotes:** 2-column grid, desktop. Stacked on mobile.
- **6+ quotes:** do not render all. Pick the 4 most contextually diverse (different pain points, different platforms). A wall of quotes loses impact.

Grid gap: 24px. Max two rows on desktop.

#### Elements (per quote card)

**Card container**
```css
background: var(--color-dark-surface);  /* #30302e */
border: 1px solid var(--color-border-dark);
border-radius: var(--radius-md);  /* 8px */
padding: 24px;
```

**Eyebrow / pattern tag**
- Arial 10px uppercase, coral (`#d97757`), letter-spacing 0.8px
- Content: the pattern or theme this quote illustrates (from the `quote_N_context` field in the Texture Bank — e.g. "Broken return loop", "Price inflation", "Customer support breakdown")
- Margin-bottom: 16px

**Quote text**
- Font: Georgia serif, 16px desktop / 14px mobile, weight 500, line-height 1.50
- Color: ivory (`#faf9f5`)
- Wrap in actual curly quotation marks — `"` opening and `"` closing. Keep them. The quote mark is part of the typographic weight.
- Do not truncate. If a quote is long, let it run. Long quotes are evidence of depth.

**Attribution strip** (bottom of card)
- Separator: 1px top border in `#3d3d3a`, 16px padding-top above the attribution
- Speaker name: Arial 12px weight 500, warm-silver (`#b0aea5`)
- Role (if present): Arial 11px, stone-gray (`#87867f`), rendered after speaker name with a `·` separator
- Source (platform): Arial 10px uppercase, letter-spacing 0.8px, stone-gray, on a new line below

Format:
```
— Pooja Bhadja · Full Stack Developer
  LINKEDIN
```

#### Rules

- **Attribution is non-negotiable.** A quote without a named speaker is a review, not voice of customer. If the extraction produced an anonymous quote (e.g. Reddit handle only), use the handle as the speaker name. If even that is missing, drop the quote.
- **Do not paraphrase the quote.** Ever. Verbatim only. If the quote has typos or informal language, leave them. That is the point.
- **Do not add editorializing text around quotes.** No "This customer expressed frustration that…" framing. The quote carries itself.
- Role field is optional. If the Texture Bank has `MISSING` for role, omit the role line entirely — do not write "unknown role."
- Source platform field (LinkedIn, Reddit, App Store, etc.) is required. The credibility of the zone depends on readers being able to mentally locate the quote.

#### Anti-patterns

- ❌ Rendering 8+ quotes in a wall. Pick the sharpest 3–4.
- ❌ Stacking quotes of the same pattern. Vary the themes.
- ❌ Styling the quote card lighter than near-black surrounding — it must feel like entering a different register.
- ❌ Using pull-quote styling (no card, large serif) for Voice of Customer. Pull Quotes are the author's thesis; Voice of Customer is other people's evidence. Keep them visually distinct.

---

### Zone 7 — Personas   [NEW]
**Status: CONDITIONAL — applies when Texture Bank has 2+ named personas (not generic "users")**
**Component: `<PersonaStrip />`**

A horizontal strip of persona cards. Each card has an invented name (e.g. "The Burned Pragmatist") — the name does narrative work, which is why this zone only renders when the source work produced named personas rather than generic segments.

Renders on **parchment** background (`#f5f4ed`).

#### Layout

- **2 personas:** two columns, equal width
- **3 personas:** three columns on desktop, stacked below 900px
- **4 personas:** 2×2 grid on desktop, stacked on mobile
- **5+ personas:** horizontal scroll container on desktop with snap points; stacked on mobile

Grid gap: 16px.

#### Elements (per persona card)

**Card container**
```css
background: var(--color-ivory);  /* #faf9f5 */
border: 1px solid var(--color-border-warm);
border-radius: var(--radius-md);  /* 8px */
padding: 24px;
```

**Name tag** (eyebrow treatment)
- Arial 10px uppercase, terracotta (`#c96442`), letter-spacing 0.8px
- Content: the segment tier (e.g. "Highest RPU potential", "Highest churn risk", "Highest switch rate")
- Margin-bottom: 8px

**Persona name**
- Font: Georgia serif, 22px, weight 500, near-black, line-height 1.20
- Preserve "The" article if the Texture Bank includes it (e.g. "The Burned Pragmatist").
- Margin-bottom: 4px

**Size line**
- Arial 11px, stone-gray, line-height 1.40
- Content: size of the segment (`persona_N_size` from Texture Bank)
- Margin-bottom: 20px

**Profile**
- Arial 13px, olive-gray, line-height 1.60
- 1–2 sentences. Demographic + context.
- Margin-bottom: 20px

**Core belief block**
- Background: warm-sand (`#e8e6dc`), padding: 12px 16px, border-radius: 8px
- Font: Georgia serif 14px italic, charcoal-warm (`#4d4c48`), line-height 1.50
- Keep the quotation marks — this is a belief rendered as speech.
- Margin-bottom: 20px

**Unlock trigger**
- Label: Arial 10px uppercase, stone-gray, letter-spacing 0.8px, "UNLOCK"
- Value: Arial 12px, charcoal-warm, line-height 1.50

#### Rules

- **The persona name must be the invented name, not a demographic description.** "The Burned Pragmatist" renders; "Female, 24–34, Tier 1 urban" does not — that's the profile field.
- **Core belief is always a quoted sentence.** If the Texture Bank has no core belief quote for a persona, do not fabricate one. Omit the belief block and replace with a single-line summary in the same sand-surface container.
- **All persona cards in one row must be equal height.** Use flex with `align-items: stretch`. If profile text is uneven, let the shorter cards have white space at the bottom rather than cramming content.
- Do not include avatar images or illustrated portraits. The typographic treatment is the identity. Portraits make the page feel like a marketing site.

---

### Zone 8 — Solution / Output
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

**Dependency note** (optional)
- When two or more solutions only work in combination (e.g. F+G), render a single-line note below the solution cards.
- Background: transparent (inherits near-black)
- Border-top: 1px solid `#3d3d3a`, padding-top: 24px, max-width: 760px, centered
- Eyebrow: Arial 10px uppercase, coral, "WHY THEY SHIP TOGETHER"
- Body: Georgia serif 16px italic, ivory, line-height 1.50
- Use the `solutions_dependency_note` field from the Texture Bank verbatim.

#### Variants by project type

| Project type | Zone 8 treatment |
|---|---|
| PM / strategy | Solution cards with RICE score pills and reach numbers |
| UX / design | Before/after split: left = old state, right = new state |
| Technical / build | Architecture card: tech stack pills + one-sentence rationale per choice |
| Writing / content | Output card: format + word count + audience + link |

---

### Zone 9 — Strategic Decisions   [NEW]
**Status: CONDITIONAL — applies when Texture Bank has 2+ tradeoffs that explain why-this-and-not-X**
**Component: `<StrategicDecisions />`**

The "what you rejected and why" zone. Portfolios without this read like idea-dumps — everything gets built, nothing gets cut, no constraints are acknowledged. This zone is where strategic thinking becomes visible. It sits between Solutions and Results because it explains why *these* solutions, not others.

Renders on **parchment** background (`#f5f4ed`).

#### Layout

- **2 tradeoffs:** two columns
- **3 tradeoffs:** three columns desktop, stacked mobile
- **4 tradeoffs:** 2×2 grid desktop, stacked mobile
- **5+ tradeoffs:** pick the 3–4 most distinct. A wall of tradeoffs dilutes each one. If the Texture Bank has 6 tradeoffs (common on PM decks), curate down.

Grid gap: 16px.

#### Elements (per tradeoff card)

**Card container**
```css
background: var(--color-ivory);  /* #faf9f5 */
border: 1px solid var(--color-border-cream);
border-radius: var(--radius-md);  /* 8px */
padding: 20px 24px;
```

**Eyebrow**
- Arial 10px uppercase, terracotta (`#c96442`), letter-spacing 0.8px
- Content: "DECISION 1", "DECISION 2", etc. — or the specific framing if more apt ("WHAT WE REJECTED", "WHY PHASE 1 IS NARROW")
- Margin-bottom: 8px

**Tradeoff title**
- Font: Georgia serif, 18px, weight 500, near-black, line-height 1.30
- Content: the `tradeoff_N_what` field — the choice itself, phrased as a statement (e.g. "Why F and G must ship together", "15-day Promise window, not 30")
- Margin-bottom: 12px

**Reasoning**
- Arial 13px, olive-gray, line-height 1.60
- Content: the `tradeoff_N_reasoning` field — the argument, verbatim from the deck when possible. Preserve numbers.
- Max ~60 words per card.

#### Rules

- **Tradeoffs must be tradeoffs, not descriptions.** Every card must contain some form of "we chose X over Y because Z", "we deprioritized X because Y", or "X only works because of Y." If a card reads like a feature description, it belongs in Zone 8, not here.
- **Preserve numbers and commercial constraints.** A tradeoff that says "doubles the return financing period at -8.3% NSV EBITDA" is stronger than one that says "increases financial risk." The specificity is what makes strategy visible.
- **Do not add a "Pros / Cons" table format.** That's management-consulting framing and it flattens the reasoning. Prose paragraphs only.
- If the Texture Bank has fewer than 2 real tradeoffs, skip this zone entirely. One lonely decision card looks like a mistake.

---

### Zone 10 — Results & Impact
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

**CTA strip** (always ends Zone 10)
- Primary button (terracotta): main artifact link — "View Full Deck", "Live Demo", "View Prototype"
- Secondary buttons (warm-sand): supporting links — "Read Case Study", "View Code", "Download PDF"
- Maximum 3 buttons total

---

### Zone 11 — Navigation Footer
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

Every page must alternate between light and dark zones to create chapter-like reading rhythm. The full pattern with all conditional zones:

```
Zone 1  (Hero)                  → LIGHT  (parchment)
Zone 2  (North Star)            → DARK   (near-black)        [conditional]
Zone 3  (Problem)               → MIXED  (dark block + light cards)
Zone 4  (Pull Quote)            → LIGHT  (parchment)         [conditional]
Zone 5  (Research)              → LIGHT  (parchment)         [conditional]
Zone 6  (Voice of Customer)     → DARK   (near-black)        [conditional]
Zone 7  (Personas)              → LIGHT  (parchment)         [conditional]
Zone 8  (Solution)              → DARK   (near-black)
Zone 9  (Strategic Decisions)   → LIGHT  (parchment)         [conditional]
Zone 10 (Results)               → LIGHT  (ivory)
Zone 11 (Nav Footer)            → LIGHT  (parchment)
```

**Rules:**
- Never place two full dark zones back to back.
- When a conditional zone is skipped, check that the remaining zones still alternate. If skipping a zone would leave two dark zones adjacent (e.g. Zone 6 skipped would put Zone 3's dark block adjacent to Zone 8), insert a minimum 80px parchment spacer between them.
- When multiple consecutive light zones occur (e.g. Zones 4–5–7 with Zone 6 skipped), differentiate them using the internal card treatment of each zone so the reader still perceives section breaks.
- Dark zones create emphasis; use them for evidence (Zone 6, Voice of Customer) and for the solution (Zone 8). Light zones are for author voice and synthesis.

---

## 9. Component Map

| Zone | Component name | Props |
|---|---|---|
| Zone 1 | `<ProjectHero />` | `title`, `subtitle`, `eyebrow`, `category`, `tags[]`, `meta[]` |
| Zone 2 | `<NorthStarStrip />` | `stats[]` — each: `{ number, label }` |
| Zone 3 | `<ProblemInsight />` | `statement`, `eyebrow`, `cards[]` — each: `{ title, items[] }`, `variant: '2-card' \| '4-card'` |
| Zone 4 | `<PullQuote />` | `text`, `attribution?`, `accentSpan?` (optional word/phrase to render in terracotta) |
| Zone 5 | `<ResearchMethod />` | `steps[]` — each: `{ title, body }`, `variant` |
| Zone 6 | `<VoiceOfCustomer />` | `quotes[]` — each: `{ text, speaker, role?, source, patternTag }` |
| Zone 7 | `<PersonaStrip />` | `personas[]` — each: `{ tier, name, size, profile, coreBelief, unlock }` |
| Zone 8 | `<SolutionOutput />` | `solutions[]` — each: `{ eyebrow, title, description, pills[] }`, `layout`, `dependencyNote?` |
| Zone 9 | `<StrategicDecisions />` | `tradeoffs[]` — each: `{ title, reasoning, eyebrow? }` |
| Zone 10 | `<ResultsImpact />` | `tableData`, `ctaLinks[]`, `variant` |
| Zone 11 | `<ProjectNav />` | `prev: { title, href }`, `next: { title, href }` |

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
- ❌ Use terracotta for anything other than primary CTAs, key numbers, pull-quote accents, and zone eyebrows
- ❌ Place two full dark sections back to back
- ❌ Center-align body text or bullet lists — center only headings
- ❌ Use accent underlines under titles
- ❌ Add decorative header/footer bars or colored stripes
- ❌ Paraphrase a Voice of Customer quote — verbatim only
- ❌ Fabricate a persona "core belief" — omit the block if the Texture Bank has no quote
- ❌ Render more than 2 Pull Quotes per page
- ❌ Render more than 4 Voice of Customer quotes on desktop

### Always do

- ✅ Use parchment (`#f5f4ed`) as the primary page background
- ✅ Use Georgia serif at weight 500 for all headings
- ✅ Keep all neutrals warm-toned — every gray has a yellow-brown undertone
- ✅ Use ring shadows (`0px 0px 0px 1px var(--color-ring-warm)`) for interactive states
- ✅ Maintain serif/sans split — Georgia for content headings, Arial for UI
- ✅ Use generous body line-height (1.60) for a literary reading experience
- ✅ Apply generous border-radius (12–32px) for a soft, approachable feel
- ✅ Write zone eyebrows in terracotta, uppercase, 10px, letter-spacing 0.8px
- ✅ End Zone 10 with a CTA strip, primary button first
- ✅ Include Zone 11 navigation footer on every page
- ✅ Use verbatim Texture Bank material for Zones 3, 4, 6, 7, 9 — these are voice zones, not composition zones
- ✅ Skip conditional zones entirely when the Texture Bank lacks material — a half-filled zone is worse than no zone

---

## 11. Page-level Agent Prompt Template

Copy and fill in this prompt when starting each new project page:

```
Following project_page_design.md, build the project page for [PROJECT NAME].

Zone 1 (Hero): Title = "[TITLE]". Subtitle = "[SUBTITLE]". Category = "[CATEGORY]".
Tags = [TAG1, TAG2, TAG3].

Zone 2 (North Star): [APPLIES — stats: (1) [NUMBER]/[LABEL], (2) [NUMBER]/[LABEL], (3) [NUMBER]/[LABEL]]
                     OR [SKIP]

Zone 3 (Problem): Eyebrow = "[EYEBROW]". Statement = "[VERBATIM THESIS]".
                  Cards variant = [2-card / 4-card].
                  Card A title = "[LABEL]", items = [list].
                  Card B title = "[LABEL]", items = [list].
                  (If 4-card: add Card C, Card D.)

Zone 4 (Pull Quote): [APPLIES — text = "[VERBATIM LINE]", accentSpan = "[WORD]" (optional), attribution = "[SOURCE]" (if not author's own line)]
                     OR [SKIP]

Zone 5 (Research): [APPLIES — steps: (1) [METHOD + SAMPLE + FINDING], (2) ...]
                   OR [SKIP]

Zone 6 (Voice of Customer): [APPLIES — quotes: each with text (verbatim), speaker, role, source platform, patternTag]
                            OR [SKIP]

Zone 7 (Personas): [APPLIES — personas: each with tier, name, size, profile, coreBelief quote, unlock]
                   OR [SKIP]

Zone 8 (Solution): Layout = [single / two-col / stacked]. Variant = [PM / design / technical].
                   Solution 1: "[TITLE]" — "[DESCRIPTION]". Pills = [PILL1, PILL2].
                   Solution 2 (if applicable): "[TITLE]" — "[DESCRIPTION]". Pills = [PILL1, PILL2].
                   Dependency note (if applies): "[VERBATIM NOTE]".

Zone 9 (Strategic Decisions): [APPLIES — tradeoffs: each with title and reasoning]
                              OR [SKIP]

Zone 10 (Results): Variant = [phase-table / shipped / qualitative].
                   [TABLE DATA or OUTCOME STATEMENTS].
                   CTAs: Primary = "[LABEL]" → [URL]. Secondary = "[LABEL]" → [URL].

Zone 11 (Nav): Prev = "[PROJECT NAME]" → [URL]. Next = "[PROJECT NAME]" → [URL].

Follow all master rules in Section 10. Use the component map in Section 9.
```
