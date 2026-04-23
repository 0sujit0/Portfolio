# Bon Appétit Bytes — Turn Your Chaos Into Dinner

> **Portfolio Project Page — Build Brief for AI Agent**
> A product case study by Sujit, built as a rapid prototype PM project.
> The page follows the **Claude (Anthropic)** design system — warm parchment canvas, editorial serif hierarchy, terracotta accent, ring-based depth. No cool grays, no sharp corners, no heavy drops.

---

## 0. Global Page Setup

**Canvas**
- Page background: `Parchment (#f5f4ed)` — this is the emotional foundation; never use pure white.
- Primary text: `Anthropic Near Black (#141413)`
- Secondary text: `Olive Gray (#5e5d59)`
- Tertiary/meta text: `Stone Gray (#87867f)`
- Max content width: ~880–960px centered; generous horizontal padding on smaller breakpoints.

**Typography**
- Headlines: `Anthropic Serif`, weight `500` (always — no bold, no light)
- Body / UI: `Anthropic Sans`
- Code / data labels: `Anthropic Mono`
- Body line-height: `1.60` (literary pacing)
- Headline line-height: `1.10–1.30`

**Section rhythm**
- Alternate between Parchment (`#f5f4ed`) and `Deep Dark (#141413)` sections for chapter-like cadence.
- On dark sections: headline in `Ivory (#faf9f5)`, body in `Warm Silver (#b0aea5)`, borders in `Dark Surface (#30302e)`.
- Section vertical padding: `96–128px` on desktop, `64–80px` on mobile.

**Component defaults**
- Cards: `Ivory (#faf9f5)` surface with `1px solid Border Cream (#f0eee6)` OR ring shadow `0px 0px 0px 1px #e8e6dc`.
- Primary CTA: `Terracotta Brand (#c96442)` background, Ivory text, `12px` radius.
- Secondary CTA: `Warm Sand (#e8e6dc)` background, `Charcoal Warm (#4d4c48)` text, `8px` radius, ring shadow `0px 0px 0px 1px #d1cfc5`.
- Tables: no zebra stripes; use `Border Cream (#f0eee6)` horizontal dividers; row padding `14–18px` vertical.
- Callouts/stats: serif number at 52px weight 500, sans label below in Stone Gray 12px with `0.12px` letter-spacing, uppercase.

---

## 1. Hero Section — Zone 1

**Layout:** Full-bleed on Parchment. Left-aligned on desktop. Generous top padding (~160px).

**Eyebrow label** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PRODUCT CASE STUDY · RAPID PROTOTYPE · 2025`

**Headline** (Anthropic Serif, 64px, weight 500, line-height 1.10, `Near Black #141413`):
**Turn your chaos into dinner.**

**Subhead** (Anthropic Sans, 20px, weight 400, line-height 1.60, `Olive Gray #5e5d59`, max-width ~640px):
An on-demand meal decision app for time-starved Indian urban professionals — because the Sunday meal plan breaks by Wednesday, every time.

**One-sentence pitch block** (Anthropic Serif 20.8px weight 500, line-height 1.30, `Near Black`, max-width 720px, with a `4px solid Terracotta #c96442` left-border, padding 24px, on Ivory card, 16px radius):
*A dynamic meal planning tool that adjusts to your schedule in real-time, using what you already have — so you can get dinner sorted in 60 seconds instead of scrolling through 50 recipes and ordering Zomato anyway.*

**Meta row** (Anthropic Sans, 14px, `Stone Gray #87867f`, separated by middle-dot `·`):
Role: Solo PM + Designer · Timeline: 2 weeks, 2 prototype iterations · Tools: Lovable, Figma, Google Forms, Reddit scrape · Type: PM portfolio case study

**Primary CTA button:** `Terracotta (#c96442)` · Ivory text · 12px radius · padding `12px 20px` · label `View live prototype →` · links to `https://bon-appetit-bytes.lovable.app`
**Secondary CTA button:** `Warm Sand (#e8e6dc)` · `Charcoal Warm (#4d4c48)` · 8px radius · ring shadow · label `Jump to the decision →`

---

## 2. North Star Numbers — Zone 2

**Section treatment:** Parchment background. Headline left, anchor numbers beneath in a compact grid.

**Eyebrow:** `THE NUMBERS THAT ANCHOR THIS PROJECT`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20):
The numbers that anchor this project

**Honesty note** (Anthropic Sans, 17px, line-height 1.60, `Olive Gray #5e5d59`, max-width 720px):
This was a rapid prototype, not a launched product. The numbers below are a mix of research inputs and the targets I would hold the MVP to post-launch.

**North Star table** (Ivory, 16px radius, 1px Border Cream, full-width. Label column: Anthropic Sans 12px uppercase letter-spacing 0.12px `Stone Gray`. Value column: Anthropic Serif 20.8px weight 500 `Near Black`. Row padding 18px vertical. Horizontal dividers in `Border Cream #f0eee6`):

| Metric | Value |
|---|---|
| Research sample | 12 survey responses (ages 25–45, employed, Indian tier 1–3 cities) + Reddit scrape of r/MealPrepSunday and r/EatCheapAndHealthy |
| Primary persona | The Firefighter — working professional / parent whose schedule is chaotic |
| Core promise | Zero decision friction at 7 PM. *"Tell me what to do in 15 minutes."* |
| North Star metric (proposed) | % of HUNGRY? sessions that reach Cook Now tap within 30 seconds |
| Secondary metric | % of started recipes that reach completion screen |
| Match threshold | ≥50% pantry overlap returns a recipe (launch default, tunable post-data) |
| Prototype iterations | v1 (flow validation, 5 screens) → v2 (full product, 18 screens, cooking mode + retention loop) |

**Stat callout grid** (3-up on desktop, stacked on mobile — Ivory cards, 16px radius, 1px Border Cream, padding 24px. Number in Anthropic Serif 52px weight 500 `Near Black`. Label in Anthropic Sans 14px `Olive Gray` line-height 1.43.):

| Stat | Label |
|---|---|
| **60s** | Target time from HUNGRY? tap to a decided meal |
| **≥50%** | Pantry-match threshold to return a recipe |
| **18** | Screens in v2 (from 5 in v1) |

---

## 3. The Problem & Core Insight — Zone 3

**Section treatment:** Switch to `Deep Dark (#141413)` for gravity — this is where the thesis lives. Headline in Ivory, body in Warm Silver. Creates chapter break.

**Eyebrow** (Sans 10px uppercase `Coral Accent #d97757` letter-spacing 0.5px):
`THE PROBLEM, AND THE FRAME THAT CRACKED IT`

**H2** (Anthropic Serif, 52px, weight 500, `Ivory #faf9f5`):
The problem, and the frame that cracked it

### 3.1 The Brief

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
The brief

**Body** (Anthropic Serif 17px line-height 1.60, `Warm Silver #b0aea5`, max-width 720px):
Design a meal planning tool for busy users that helps them organize their week's meals based on time available, dietary preferences, and ingredients they already have. Make it less stressful, more personalized, and easy to adjust.

### 3.2 The T/I/P Diagnostic

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
The T/I/P diagnostic

**Body** (Anthropic Serif 17px line-height 1.60, `Warm Silver`):
Every meal decision is a search for X — one meal — under three strict constraints:

**Three-up constraint grid** (Dark Surface `#30302e` cards, 16px radius, 1px `#30302e` border — ring halo against near-black background. Padding 28px.):

- **T — Time** · The available cooking window
- **I — Inventory** · What's in the kitchen right now
- **P — Preferences** · Dietary rules, taste, quality expectations

Letter badge: Anthropic Serif 52px weight 500 `Coral Accent #d97757`. Label: Anthropic Serif 20.8px weight 500 `Ivory`. Body: Anthropic Sans 15px `Warm Silver`.

**Frame closer** (Anthropic Serif 25px weight 500 line-height 1.30, `Ivory`, max-width 720px):
Most apps try to solve all three at once and end up being mediocre at each. The sharper move is to identify which constraint is the bleeding-neck pain for a specific user, and optimize for that dominant axis first.

### 3.3 Three Archetypes, Three Different Dominant Constraints

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
Three archetypes, three different dominant constraints

**Archetype table** (on Dark Surface `#30302e`, 16px radius, 1px `#30302e`. Header row: Anthropic Sans 12px uppercase letter-spacing 0.12px `Warm Silver`. Cell text: Anthropic Sans 15px `Ivory`. Horizontal dividers in `#30302e` — slightly brighter than surface for definition. Row padding 18px.):

| Archetype | Dominant axis | Problem | Success metric |
|---|---|---|---|
| **The Firefighter** — corporate professional / working parent with a chaotic schedule | **Time** | Rigidity leads to abandonment. Sunday's plan is broken by Wednesday. Guilt, takeout, wasted groceries. | Zero decision friction at 7 PM |
| **The Supply Chain Manager** — pragmatic user who hates wasting food | **Inventory** | Inventory blindness. They have the components but lack the assembly instructions. | Empty fridge at week's end; zero waste |
| **The Health Optimizer** — gym-goer or restrictive dieter (keto, vegan, allergen-free) | **Preferences** | Cognitive load. More time searching for the right recipe than cooking. | Hitting nutritional goals with minimal admin |

Archetype name in Anthropic Serif 17px weight 500 `Ivory`. Dominant axis in `Coral Accent #d97757`.

### 3.4 The Core Insight — the Tuesday Problem

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
The core insight — the Tuesday Problem

**Lead line** (Anthropic Serif, 36px, weight 500, line-height 1.30, `Ivory`, max-width 720px):
From the Reddit scrape, one theme dominated the *"why I quit meal-planner apps"* thread. Users quit not because the recipes were bad, but because the planning model assumed a week that never happens.

**Pull-quote block 1** (on Dark Surface `#30302e`, 24px radius, padding 32px, left-border `4px solid Coral Accent #d97757`. Quote text: Anthropic Serif 20px weight 500 italic `Ivory`, line-height 1.30. Quote marks `"` in `Coral Accent #d97757`. Attribution: Anthropic Sans 14px `Warm Silver`):
*"The automation shouldn't dictate what we eat… our daily routines hardly stayed the same for more than a few months."*
— r/MealPrepSunday user

**Pull-quote block 2** (same treatment):
*"I'm good with leftovers… but the app makes me plan 4 meals every single day."*
— r/EatCheapAndHealthy user

**Insight closer** (Anthropic Serif 25px weight 500 line-height 1.30, `Ivory`, max-width 720px):
People quit because the app made them feel like a failure when they skipped a meal. The insight that reframed the whole product: the answer isn't a better weekly calendar. **The answer is removing the calendar entirely for the emergency use case.**

### 3.5 The Decision — Firefighter First, Supply Chain Manager as Enabler

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
The decision — Firefighter first, Supply Chain Manager as enabler

**Body** (Anthropic Sans 17px line-height 1.60, `Warm Silver`, max-width 720px):
I picked the Firefighter over the other two for three reasons:

**Three-up reason grid** (Dark Surface `#30302e` cards, 16px radius, 1px `#30302e`, padding 24px):

- **1. Highest abandonment risk.** Time-starved users churn fastest. Face them with 50 recipes at 7 PM and they close the app and order takeout. If we can't solve the 15-minute emergency, we lose them forever.
- **2. Universality.** Everyone experiences time pressure. Not everyone obsesses over food waste. Time is the universal entry point into the category.
- **3. Immediate value perception.** *"Get dinner sorted in 60 seconds"* is tangible. Waste reduction is delayed gratification — the win comes days later.

Number badge in Anthropic Serif 32px weight 500 `Coral Accent #d97757`. Heading in Anthropic Serif 20.8px weight 500 `Ivory`. Body in Anthropic Sans 15px `Warm Silver`.

**Decision summary** (Anthropic Serif 20px line-height 1.60, `Warm Silver`, max-width 720px):
The Supply Chain Manager isn't ignored — she's the critical enabler. The 15-minute guarantee only works if the app knows your pantry. Otherwise it's just another recipe recommendation engine that sends you to the grocery store. Inventory isn't a competing feature; it's the engine that powers Speed.

The Health Optimizer gets deferred. Lowest user overlap with the Firefighter, requires a separate data model (nutrition DB), and would dilute the core promise.

---

## 4. Research & Method — Zone 4

**Section treatment:** Back to Parchment. Compact research section.

**Eyebrow:** `RESEARCH · PRIMARY + SECONDARY`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20):
How I listened

### 4.1 Method — Triangulated, Not Definitive

**H3** (Anthropic Serif, 32px weight 500):
Method — triangulated, not definitive

**Body** (Anthropic Serif 17px line-height 1.60, `Olive Gray #5e5d59`):
I deliberately combined three weak-but-independent sources rather than over-trusting any one. Each has a known limit; convergence across them is what gave me confidence to make the archetype call.

**Research sources table** (Ivory, 16px radius, 1px Border Cream. Header: Sans 12px uppercase letter-spacing 0.12px `Stone Gray`. Cell text: Sans 15px):

| Source | What I got | Known limit |
|---|---|---|
| **Google Form survey (n=12)** | Ages 25–45, employed, Indian tier 1–3 cities — directional signal on frustration and churn frequency | Sample too small for statistical claims — explicitly called out |
| **Individual conversations** | Texture on why people abandon plans mid-week — the emotional logic of *"I'll cook Tuesday"* | Selection bias — friends and peers in my network |
| **Reddit scrape** (r/MealPrepSunday, r/EatCheapAndHealthy) | Churn language from people who actually quit meal-planning apps | Self-selected vocal minority |

### 4.2 What I Heard — The Convergent Signal

**H3** (Anthropic Serif, 32px weight 500):
What I heard — the convergent signal

**Body** (Anthropic Serif 17px line-height 1.60, `Olive Gray`):
Across all three sources, one theme recurred: the rigidity of weekly meal plans breaks on contact with real life.

**Finding group 1 — From the survey** (on Ivory card, 16px radius, 1px Border Cream, padding 24px):

**Sub-label** (Anthropic Sans 12px uppercase letter-spacing 0.12px `Stone Gray`):
`FROM THE SURVEY · DIRECTIONAL · N=12`

- The most frequently cited frustration was *"not deciding what to cook in time"* and *"not knowing how to turn what I already have into a meal."*
- Ordering takeout despite having groceries at home was reported 1–5 times per week by the majority of respondents.
- The most energy-draining part of cooking, per respondents, was lack of clarity on what to make with existing ingredients — not the cooking itself.

**Finding group 2 — From Reddit** (on Ivory card, 16px radius, 1px Border Cream, padding 24px):

**Sub-label** (Anthropic Sans 12px uppercase letter-spacing 0.12px `Stone Gray`):
`FROM REDDIT · THE SHARPEST QUOTES`

**Pull-quote** (Anthropic Serif 20px weight 500 italic `Near Black`, quote marks in `Terracotta #c96442`):
*"The automation shouldn't dictate what we eat… our daily routines hardly stayed the same for more than a few months."*

*"I'm good with leftovers… but the app makes me plan 4 meals every single day."*

**Synthesis callout** (Ivory, 16px radius, `4px solid Terracotta #c96442` left-border, padding 24px. Body: Anthropic Serif 17px line-height 1.60 `Near Black`):
**Synthesis.** People don't quit meal planners because the recipes are bad. They quit because the planning model — a Sunday-decided schedule — assumes a week that never happens. By Wednesday, the plan is broken and they feel like they failed the app.

### 4.3 Why This Was Enough to Act

**H3** (Anthropic Serif, 32px weight 500):
Why this was enough to act

**Body** (Anthropic Serif 17px line-height 1.60, `Olive Gray`, max-width 720px):
I'm not claiming statistical validity. I'm claiming directional coherence — three independent signals pointing at the same failure mode. For an MVP scoping decision, that's the right altitude. The wrong response to limited data is either pretending it's bigger than it is, or refusing to decide.

### 4.4 Competitive Landscape — The Category Has a Split Personality

**H3** (Anthropic Serif, 32px weight 500):
Competitive landscape — the category has a split personality

**Body** (Anthropic Sans 17px line-height 1.60, `Olive Gray`):
The meal-planning app market splits cleanly into two camps, and almost nobody bridges them:

**Competitor matrix** (full-width table on Ivory, 16px radius, 1px Border Cream. Header: Sans 12px uppercase letter-spacing 0.12px `Stone Gray`. Cell text: Sans 15px. `Camp` column in Anthropic Serif 17px weight 500):

| Camp | Examples | Strength | Gap |
|---|---|---|---|
| **Pantry trackers** | Pantry Check, NoWaste, Out of Milk | Knows what you have | Doesn't tell you what to cook |
| **Recipe / meal planners** | Mealime, Paprika, Eat This Much, Plan to Eat | Generates plans & lists | Assumes you'll shop; no pantry awareness |
| **Ingredient-to-recipe** | SuperCook, DishGen | Maps pantry → recipes | No time filter; no structure; long setup |

**Category admission callout** (Ivory, 16px radius, `4px solid Terracotta #c96442` left-border, padding 24px):
**The category-wide admission that validates the frame.** Plan to Eat — a category leader — removed their pantry feature entirely. Their stated reason: a digital pantry and a real kitchen cannot stay synchronized. That's not a product failure; it's a category-wide admission that pantry-as-ongoing-database is the wrong frame. The right frame is: **ask at session time, don't track forever.**

Body: Anthropic Serif 17px line-height 1.60 `Near Black`. Bolded phrases in `Terracotta #c96442`.

### 4.5 My Wedge

**H3** (Anthropic Serif, 32px weight 500):
My wedge — four things no one combines

**Body** (Anthropic Sans 17px line-height 1.60, `Olive Gray`):
I'm not trying to be a better pantry tracker or a better weekly planner. My product is the only entry that combines four things:

**Four-up wedge grid** (2×2 on desktop, Ivory cards, 16px radius, 1px Border Cream, padding 24px):

- **On-demand, not weekly.** The HUNGRY? button replaces the Sunday ritual with a 7 PM decision.
- **Time-constrained query.** 15 / 30 / 45 min as a hard filter. Mealime and SuperCook don't filter by time.
- **Pantry-as-lightweight-input.** Not an inventory database; I ask *"what's in there right now"* and match against it.
- **India-first.** Indian recipe library, Blinkit integration for missing ingredients, tier 1–2 pricing and habits.

Heading in Anthropic Serif 20.8px weight 500 `Near Black`. Body in Anthropic Sans 15px `Olive Gray`.

### 4.6 Positioning, Explicit

**H3** (Anthropic Serif, 32px weight 500):
Positioning, explicit

**Three stacked callouts** (Ivory, 8px radius, 1px Border Cream, padding 18px. Versus label in `Terracotta #c96442` Anthropic Sans 12px uppercase letter-spacing 0.12px. Body in Anthropic Serif 17px weight 500 `Near Black`):

- **Against Mealime:** *We don't plan your week; we solve your night.*
- **Against SuperCook:** *We don't assume you have 30 minutes to set up a pantry; we assume you have 30 minutes total.*
- **Against Blinkit itself:** *We don't compete — we complete. When the pantry match fails, Blinkit is the fulfillment layer.*

---

## 5. Solution / Output — Zone 5

**Section treatment:** Parchment. Hero intro block, then the four building blocks as expanded feature cards.

**Eyebrow:** `WHAT I BUILT`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20):
What I built

### 5.1 Final Value Proposition

**H3** (Anthropic Serif, 32px weight 500):
Final value proposition

**Value-prop pull block** (on Ivory, 24px radius, padding 32px, left-border `4px solid Terracotta #c96442`. Text: Anthropic Serif 25px weight 500 line-height 1.30 `Near Black`):
*A dynamic meal planning tool that adjusts to your schedule in real-time, using what you already have — to save you time and money.*

### 5.2 The Four Building Blocks

**H3** (Anthropic Serif, 32px weight 500):
The four building blocks

**Four expanded feature cards** (Ivory, 24px radius, 1px Border Cream, whisper shadow `rgba(0,0,0,0.05) 0px 4px 24px`, padding 32px. Stack vertically with 24px gap on desktop. Each card has a large serif number in `Terracotta #c96442` top-left.):

---

**Card 1 — Number `1` in Terracotta serif 52px weight 500**

**H3** (Anthropic Serif 32px weight 500 `Near Black`):
User Calibration

**Tagline** (Anthropic Serif 20px `Olive Gray`):
Capture permanent constraints once, apply forever.

**What it includes** (Anthropic Sans 15px `Near Black`, bullet rows with `8px` left-padding):
- Authentication (login / signup)
- Kitchen Profile (diet type, household size, skill level)
- Digital Pantry (what's currently in stock — a visual grid, not a checklist)

**Why** (Anthropic Serif 17px line-height 1.60 `Olive Gray`):
Without knowing who you are and what you have, we're just another recipe app.

---

**Card 2 — Number `2`**

**H3:** The Decision Engine

**Tagline:** Eliminate decision fatigue, return ONE answer.

**What it includes:**
- User taps **HUNGRY?**
- Selects time available (15 / 30 / 45 min)
- System filters recipes by time × pantry overlap (≥50% match threshold)
- Returns the top match. No scrolling, no grid of options.

**Why:** Speed > choice. Remove cognitive load entirely. The Firefighter needs one answer, not ten.

---

**Card 3 — Number `3`**

**H3:** Cooking Execution

**Tagline:** Guide the user from decision to finished meal.

**What it includes:**
- Pre-Cook Checklist (Mise en Place): confirm all ingredients present before committing
- Cooking Mode: one step per screen, large text, integrated timers with sound + vibration alerts, hands-free navigation

**Why:** Getting them to start isn't enough. We need completion. A half-cooked abandoned meal is worse than takeout.

---

**Card 4 — Number `4`**

**H3:** The Retention Loop

**Tagline:** Keep the app useful beyond single emergency meals.

**What it includes:**
- Chef's Table: 7-day meal planner, recipe assignment per day
- Smart Shopping List: auto-generated from planned meals
- Fulfillment Integration: *"Order on Blinkit"* button for missing ingredients
- Auto Pantry Update: tracks ingredient usage after each cook

**Why:** Single-use apps die. The planner + shopping list + Blinkit loop is where the Supply Chain Manager persona re-enters — as enabler, not headline.

---

### 5.3 The Match Threshold — A Product Decision in a Feature Bullet

**H3** (Anthropic Serif, 32px weight 500):
The match threshold — a product decision in a feature bullet

**Body** (Anthropic Serif 17px line-height 1.60, `Olive Gray`, max-width 720px):
The Decision Engine returns a recipe if the user's pantry matches ≥50% of the recipe's ingredients. **This number is load-bearing and deserves to be called out.**

**Threshold comparison table** (Ivory, 16px radius, 1px Border Cream. The `50% match (chosen)` row gets `Warm Sand #e8e6dc` background + `4px solid Terracotta` left-border. Header: Sans 12px uppercase letter-spacing 0.12px `Stone Gray`. Cells: Sans 15px):

| Threshold | Result set | UX | Failure mode |
|---|---|---|---|
| 80% match | Narrow | *"This is almost exactly what I have"* | Empty results when pantry is partial; user abandons |
| **50% match (chosen)** | **Balanced** | ***"I have the base; I might need 2 things"*** | **Occasional mid-cook discovery of missing item** |
| 30% match | Wide | *"Here are 20 options to scroll through"* | Defeats the no-scrolling promise |

**Why 50%** (three stacked sub-cards on Ivory, 8px radius, 1px Border Cream, padding 18px):
- The Firefighter's core promise is one answer in 60 seconds. **That requires a non-empty result set more than it requires perfection.**
- Missing ingredients aren't fatal if surfaced before cooking. The Mise en Place screen exists specifically for this — it shows missing items in red with a one-tap Blinkit order or substitute path, before the user commits time.
- 50% is a launch default, not a law. Once we have data on recipe-completion rate by match bucket, we retune. If 80%-match recipes complete 90% of the time and 50%-match complete only 40%, we raise the floor.

### 5.4 Current-State Flow

**H3** (Anthropic Serif, 32px weight 500):
Current-state flow

**Flow diagram block** (Ivory, 16px radius, 1px Border Cream, padding 28px. Flow rendered as horizontal step pills connected by `Coral Accent #d97757` arrows — wrap to 2 rows on tablet, vertical stack on mobile. Step pills: `Warm Sand #e8e6dc` background, 24px radius, padding `8px 14px`, Anthropic Sans 14px `Charcoal Warm #4d4c48`):

`HOME` → `Tap HUNGRY?` → `Select time (15 / 30 / 45 min)` → `RECIPES (browse matched dishes)` → `Cook This` → `PREFLIGHT (check ingredients)` → `Start Cooking` → `COOKING (follow timed steps)` → `COMPLETION` → `Back to Home`

### 5.5 Data Model

**H3** (Anthropic Serif, 32px weight 500):
Data model

**Data model grid** (4-column on desktop, 2×2 on tablet, stacked on mobile. Ivory cards, 8px radius, 1px Border Cream, padding 18px. Table name in Anthropic Mono 15px `Terracotta #c96442`. Description in Anthropic Sans 14px `Olive Gray`):

- `profiles` — user preferences, diet type
- `inventory_items` — current pantry stock
- `recipes` — dish data with ingredients & steps
- `meal_plans` — weekly cooking schedule

### 5.6 The Edges and the Cuts

**H3** (Anthropic Serif, 32px weight 500):
The edges and the cuts

**Body** (Anthropic Serif 17px line-height 1.60, `Olive Gray`, max-width 720px):
A Firefighter-optimized product has to degrade well, because the Firefighter is the edge case. Here's how it handles the moments that would break a less-considered app:

**Edge-case table** (Ivory, 16px radius, 1px Border Cream. Three columns: Edge · Current behavior · Should behavior. Header: Sans 12px uppercase letter-spacing 0.12px `Stone Gray`. "Should" column: Sans 15px `Near Black`. "Current" column: Sans 15px `Olive Gray`):

| Edge | What happens today | What it should do |
|---|---|---|
| **Empty pantry** | *"No matches"* — worst possible experience | Route to a *"Stock my kitchen"* Blinkit cart of 5 staples under ₹300, with 3 recipes pre-selected for when it arrives |
| **11 PM, Blinkit closed** | Missing-ingredient prompts lead to a dead end | Show only 100%-match recipes; hide order flow; surface no-cook options (sandwich, khichdi variants) |
| **15-min recipe needs a missing spice** | User commits, then hits the wall during prep | Pre-Cook Checklist catches this, but we need substitute suggestions (*"no garam masala? cumin + coriander + pepper works"*) — not just a red X |
| **Pantry state drifts from reality** | Plan to Eat's exact failure mode | Accept it. We don't track pantry over time. We re-ask at each session. Deliberate design choice, not a limitation. |

### 5.7 What I Explicitly Did Not Build in v1 (and Why)

**H3** (Anthropic Serif, 32px weight 500):
What I explicitly did not build in v1 (and why)

**Body** (Anthropic Serif 17px line-height 1.60, `Olive Gray`, max-width 720px):
Every one of these is a defensible product to build. None of them is the product I was building this quarter. The shape of a good roadmap isn't *"what could we build"* — it's *"what are we willing to say no to, and why."*

**Cuts table** (Ivory, 16px radius, 1px Border Cream. "Cut" column in Anthropic Serif 17px weight 500):

| Cut | Why deferred |
|---|---|
| **Health Optimizer persona** (macros, nutrition tracking, calorie goals) | Lowest user overlap with Firefighter. Requires a separate data model (nutrition DB) and different home screen. Build after PMF on Firefighter. |
| **Family meal accounts / shared pantry** | SCM persona doubles down on this, but shared-state is a hard data problem. Solo use first. |
| **Voice input for pantry and cooking mode** | Big lift, not on critical path. Revisit once we have Cooking Mode usage data — if users are one-hand tapping through, voice is worth it. |
| **Photo-based pantry scan** | Computer-vision investment that doesn't pay back in v1. Visual-grid onboarding is good enough. |
| **Nutritional tracking** | Health Optimizer's territory. Would cannibalize MyFitnessPal users without serving them well. |
| **Recipe import from URLs** | Paprika's moat. Not my fight. |

---

## 6. Results & Impact — Zone 6

**Section treatment:** Switch to `Deep Dark (#141413)` — this is where iteration is documented and honest limits are named. The dark section matches the introspective tone.

**Eyebrow** (Sans 10px uppercase `Coral Accent #d97757` letter-spacing 0.5px):
`ITERATION, IMPACT, AND THE HONEST LIMITS`

**H2** (Anthropic Serif, 52px, weight 500, `Ivory #faf9f5`):
Iteration, impact, and the honest limits

### 6.1 v1 — The Flow Check

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
v1 — the flow check

**Body** (Anthropic Serif 17px line-height 1.60, `Warm Silver #b0aea5`, max-width 720px):
Built purely to validate the five-screen sequence: onboard → pantry → fridge → meal match → cook. No design polish, no retention loop, no home screen. Just: does the core decision-to-recipe loop make sense end to end?

**Two sub-blocks on Dark Surface cards (16px radius, 1px `#30302e`, padding 24px):**

**What v1 got right** — heading in `Coral Accent #d97757` Anthropic Serif 20.8px weight 500:
- Recipe card with *"Kadai Chicken — Perfect Match, you have everything for this"* — landed the emotional win I wanted.
- Two-stage pantry input (staples first, then fresh) reduced friction vs. a single long list.

**What v1 got wrong — the four findings that drove v2** — heading in `Error Crimson #b53333` Anthropic Serif 20.8px weight 500:

**v1 findings table** (Dark Surface `#30302e`, 16px radius. Header: Sans 12px uppercase letter-spacing 0.12px `Warm Silver`. Cell text: Sans 15px `Ivory`. Horizontal dividers in `Dark Surface` with slight lift):

| Finding | v1 behavior | Why it broke the Firefighter promise |
|---|---|---|
| **Onboarding was too wordy** | Pantry Jumpstart was a text checklist of 7+ staples; Fridge Rescue was a search field | A time-starved user will not read a list of 7 staples at 7 PM. Onboarding itself became the barrier. |
| **No home screen = no habit** | v1 dropped the user straight into a flow with no return anchor | The Firefighter opens the app panicked. She needs a single visual anchor — one button — not a screen with options. |
| **Flow ended at "Cook Now"** | Tapping Cook Now showed the recipe page. User was on their own from there. | Getting the user to start isn't success. Finishing is success. The retention loop was broken. |
| **No second-visit reason** | After one meal, the app had nothing to offer | Single-use apps die. Without a planner and shopping list, Monday's meal doesn't help Tuesday. |

### 6.2 v2 — The Four Moves

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
v2 — the four moves

**Four-up move grid** (Dark Surface `#30302e` cards, 16px radius, 1px `#30302e`, padding 28px. Stack vertically with 24px gap. Each card has a large serif move number in `Coral Accent #d97757` at top-left — Anthropic Serif 52px weight 500.):

- **1. Onboarding collapsed into a visual grid.** 7 text rows → 12 tappable ingredient tiles. Same information, one-third the cognitive load. The goal of onboarding changed from *"capture everything"* to *"capture enough to unblock the first HUNGRY? tap."*
- **2. HUNGRY? became the home screen.** The single pulsing button is the entire product's promise in one object. No nav to learn, no choice architecture to parse. Tap = answer coming. **This is the Tuesday Problem made physical.**
- **3. Cooking Mode was added** — one step, one screen, one timer. Large text. Vibrates when the timer ends. Navigates with a single tap. Because the Firefighter is cooking with one hand while answering a work Slack with the other.
- **4. Chef's Table + Shopping List + Blinkit added as the retention surface.** This is where the Supply Chain Manager persona re-enters as enabler: remaining pantry items become next-meal suggestions, and missing ingredients become a one-tap Blinkit order.

Move heading in Anthropic Serif 20.8px weight 500 `Ivory`. Body in Anthropic Sans 15px `Warm Silver`.

### 6.3 Impact — Hypothesized, Not Measured

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
Impact — hypothesized, not measured

**Body** (Anthropic Serif 17px line-height 1.60, `Warm Silver`, max-width 720px):
This was a rapid prototype, not a launched product. I'm not going to pretend otherwise. Here's the impact framework I'd hold the MVP to post-launch:

**Impact framework table** (Dark Surface `#30302e`, 16px radius. Header: Sans 12px uppercase letter-spacing 0.12px `Warm Silver`. Metric column in Anthropic Serif 17px weight 500 `Ivory`. Target column in `Coral Accent #d97757` Anthropic Serif 20.8px weight 500. Why column in Anthropic Sans 15px `Warm Silver`):

| Metric | Target | Why this number |
|---|---|---|
| **HUNGRY? → Cook Now tap** | < 30 seconds (median) | The core promise. If this breaks, nothing else matters. |
| **Recipe completion rate** | > 60% of started recipes | The retention loop depends on users trusting the 15-min guarantee. |
| **Weekly active sessions** | > 2.5 per active user | Proves the app is more than emergency-only use. |
| **Blinkit tap-through on missing ingredients** | > 20% of miss events | Turns a failure mode into a fulfillment funnel; unlocks partner revenue. |
| **Match-threshold quality** | < 10% of 50% matches cause mid-cook abandonment | Tells us whether the 50% floor is right or needs raising. |

### 6.4 Honest Limits

**H3** (Anthropic Serif, 32px weight 500, `Ivory`):
Honest limits

**Body** (Anthropic Serif 17px line-height 1.60, `Warm Silver`, max-width 720px):
Three things I'd call out to any recruiter reading this:

**Three stacked cards** (Dark Surface `#30302e`, 16px radius, 1px `#30302e`, padding 24px, `4px solid Coral Accent #d97757` left-border. Heading in Anthropic Serif 20.8px weight 500 `Ivory`. Body in Anthropic Sans 15px `Warm Silver`):

- **No usability testing on v2.** The v1→v2 changes are driven by principles extracted from research, not by watching users fail. A proper next step is a 5-person moderated test with the task *"It's 7:30 PM, you're hungry, get to dinner."*
- **Survey n=12 is directional, not statistical.** I named this limit explicitly in the research section rather than hiding it. The Reddit corroboration is what moves this from *"hunch"* to *"defensible call."*
- **Recipe database is a scale problem I haven't solved.** A 15-minute guarantee requires thousands of Indian recipes tagged by time, difficulty, and ingredient profile. The prototype works with a seed set; the real product needs either a partnership (India Food Network, Archana's Kitchen) or an LLM-powered recipe generation layer with human review.

---

## 7. Navigation Footer — Zone 7

**Section treatment:** Back to Parchment. Forward-looking block, then the standard project navigation.

**Eyebrow:** `WHAT I'D DO NEXT`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20):
What I'd do next

### 7.1 If I Had Another Two Weeks

**H3** (Anthropic Serif, 32px weight 500):
If I had another two weeks

**Numbered next-steps list** (each row: large serif number `01–04` in `Terracotta #c96442` Anthropic Serif 32px weight 500 on the left, description in Anthropic Serif 20.8px weight 500 `Near Black` on the right. Horizontal divider between rows in Border Cream `#f0eee6`. Padding 18px vertical per row):

- **01** — Run the moderated 5-person test. Fix whatever breaks. Document.
- **02** — Build the substitute-suggestion engine — the biggest gap in the Pre-Cook Checklist.
- **03** — Instrument the prototype for the five metrics above. Even if "launch" is a friends-and-family beta, the data loop is what turns a case study into a product.
- **04** — Reach out to one Indian recipe content partner to validate the database-scale path.

---

## 8. Live Prototype Access

**Section treatment:** Parchment. Simple block with a large CTA.

**H3** (Anthropic Serif, 32px weight 500):
See it for yourself

**Body** (Anthropic Sans 17px line-height 1.60, `Olive Gray`, max-width 720px):
The full v2 clickable prototype is live. Tap HUNGRY?, pick a time window, watch the Decision Engine return one answer.

**Primary CTA button:** `Terracotta (#c96442)` · Ivory text · 12px radius · padding `12px 20px` · label `Open live prototype →` · links to `https://bon-appetit-bytes.lovable.app`

---

## 9. Next Project Navigation

**Section treatment:** Parchment. Two-column block — left: *Back to all projects*, right: *Next project*.

**Left block** (Anthropic Sans 14px `Stone Gray`, label above; Anthropic Serif 20.8px weight 500 `Near Black`, link below):
`BACK`
← All projects

**Right block** (right-aligned):
`NEXT PROJECT`
Nykaa Fashion — Monetizing Browsing Intent →

Horizontal divider above the block in `Border Cream #f0eee6`. Link hover: underline in `Terracotta #c96442`, 1px offset 2px.

---

## 10. Page Footer

**Section treatment:** Thin Parchment strip, Border Cream top, Stone Gray text.

Left side (Sans 14px): *Bon Appétit Bytes — Turn Your Chaos Into Dinner · Rapid Prototype · 2025*
Right side (Sans 14px): *Built by Sujit · <link to LinkedIn> · <link to other projects>*

---

## Agent Build Notes

### Critical reminders for the AI builder

1. **Never introduce cool grays.** If a color feels neutral, it must have a yellow-brown undertone. `#5e5d59`, `#87867f`, `#4d4c48` — not `#666666`, not `#94a3b8`.
2. **All serif headings at weight 500.** No 600, no 700, no 400.
3. **Page background is always `Parchment #f5f4ed`** on light sections. Never pure white. Cards are `Ivory #faf9f5`.
4. **Use ring shadows for interaction depth, not drop shadows.** Pattern: `0px 0px 0px 1px #e8e6dc` or `0px 0px 0px 1px #d1cfc5`.
5. **Terracotta `#c96442` is reserved for primary CTAs, numbered markers, and brand-accent moments.** Don't spray it across body text or every pill.
6. **Tables need breathing room.** 14–18px vertical padding, Border Cream horizontal dividers, no zebra stripes.
7. **Alternate sections.** Dark sections are marked at Section 3 (Problem & Core Insight) and Section 6 (Results & Impact). Keep the chapter cadence.
8. **The HUNGRY? button is a design-referenced artifact.** Whenever it's mentioned in copy, render the word in a small `Terracotta` pill or in Anthropic Mono for typographic emphasis — never plain caps in serif body.
9. **Body line-height ≥ 1.60** on all prose. This is a reading experience, not a dashboard.
10. **No emoji decoration anywhere.** This page is serif-first editorial — no flags, no sparkles, no checkmarks outside of specifically-called-out spots.

### Responsive behavior

- **Desktop (992px+):** multi-column grids (2×2 for wedge and edge-case blocks, 4-up for data model), full tables, 64px hero headline.
- **Tablet (768–991px):** 2-column grids, condensed tables, 52px hero.
- **Mobile (<768px):** single-column stack, 36px hero, hamburger nav. Tables scroll horizontally inside a `Warm Sand` container if needed. The horizontal flow diagram in §5.4 collapses to a vertical stack with down-arrows between steps.

### Images / embeds to source from Sujit

- Optional: v1 vs. v2 screen comparison visual — Section 6.1/6.2
- Optional: Visual of the HUNGRY? home screen (v2) — Section 5.2 Card 2
- Optional: Pre-Cook Checklist / Cooking Mode screenshot — Section 5.2 Card 3
- Required (live): Embed or iframe of `https://bon-appetit-bytes.lovable.app` at Section 8, inside an Ivory bezel with 32px radius and whisper shadow.
- Optional: Organic, hand-drawn-feeling illustration for the Hero (Section 1) — kitchen / pantry / clock motif in terracotta + muted green + near-black, per Claude design language.
