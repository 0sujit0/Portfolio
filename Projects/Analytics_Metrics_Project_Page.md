# Zomato Analytics & Metrics — OKRs, Funnels, and Cohorts

> **Portfolio Project Page — Build Brief for AI Agent**
> A product analytics assignment by Sujit, completed as an Airtribe submission.
> The page follows the **Claude (Anthropic)** design system — warm parchment canvas, editorial serif hierarchy, terracotta accent, ring-based depth. No cool grays, no sharp corners, no heavy drops.

---

## 0. Global Page Setup

**Canvas**
- Page background: `Parchment (#f5f4ed)` — the emotional foundation; never use pure white.
- Primary text: `Anthropic Near Black (#141413)`
- Secondary text: `Olive Gray (#5e5d59)`
- Tertiary/meta text: `Stone Gray (#87867f)`
- Max content width: ~880–960px centered; generous horizontal padding on smaller breakpoints.

**Typography**
- Headlines: `Anthropic Serif`, weight `500` (always — no bold, no light). Fallback: `Georgia`.
- Body / UI: `Anthropic Sans`. Fallback: `system-ui, Inter`.
- Code / data labels: `Anthropic Mono`. Fallback: `monospace`.
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

## 1. Hero Section

**Layout:** Full-bleed on Parchment. Left-aligned on desktop. Generous top padding (~160px).

**Eyebrow label** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PRODUCT ANALYTICS · AIRTRIBE ASSIGNMENT · 2025`

**Headline** (Anthropic Serif, 64px, weight 500, line-height 1.10, `Near Black #141413`):
Zomato — Analytics & Metrics

**Subhead** (Anthropic Sans, 20px, weight 400, line-height 1.60, `Olive Gray #5e5d59`, max-width ~640px):
Zomato's Tier-1 food delivery growth problem isn't a supply problem — it's a confidence problem. 72 minutes of monthly browsing with no order. 54% of users second-guessing at checkout. 7.5 support tickets per 1,000 orders. This is a product analytics exercise that names the leaks, sizes the prize, and defines the metrics that matter.

**Meta row** (Anthropic Sans, 14px, `Stone Gray #87867f`, separated by middle-dot `·`):
Role: Product Analyst · Scope: Tier-1 Cities · Framework: OKRs, KPIs, Funnel Analysis, Cohort Analysis · Submission: Airtribe

**Primary CTA button:** `Terracotta (#c96442)` · Ivory text · 12px radius · padding `12px 20px` · label `Explore the analysis →`
**Secondary CTA button:** `Warm Sand (#e8e6dc)` · `Charcoal Warm (#4d4c48)` · 8px radius · ring shadow · label `Jump to cohort setup`

---

## 2. Strategic Context

**Section treatment:** Parchment background. Two-column on desktop (narrative left, insight callouts right).

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20):
The Transition from Access to Experience

**Body** (Anthropic Serif, 17px, weight 400, line-height 1.60 — serif body for editorial passages):
Zomato won Tier-1 by solving access. The next phase will be won by reducing friction, not adding users. But the growth thesis has quietly shifted: as reliance on the platform deepens, user tolerance for friction collapses. What was once a delight is now a baseline expectation.

Quick Commerce has reset the bar. The "Blinkit Effect" has conditioned users to expect 10–15 minute delivery. Standard 30–45 minute food delivery no longer feels fast — it feels slow. The result: two structural "experience leaks" that compound into revenue loss.

**Two insight cards** (Ivory, 16px radius, 1px Border Cream, padding 28px, side-by-side on desktop):

**Card 1 — Decision Friction**
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Decision Friction
Body (Anthropic Sans, 15px, `Olive Gray #5e5d59`, line-height 1.60): Cognitive overload pre-order. Users spend 72 minutes per month browsing without transacting — "decision limbo," not engagement. Choice abundance creates paralysis, not conversion.

**Card 2 — Operational Variance**
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Operational Variance
Body (Anthropic Sans, 15px, `Olive Gray #5e5d59`, line-height 1.60): Unpredictability post-order. A 16–22 minute standard deviation on delivery times means the "average" masks a structurally probable long tail of severe delays. This variance generates 7.5 support tickets per 1,000 orders.

**Pull-quote block** (on Ivory, 24px radius, padding 32px, left-border `4px solid Terracotta #c96442`):
*"The next phase of growth will be won by reducing friction, not adding users."*
Quote text: Anthropic Serif 25px weight 500 line-height 1.30, `Near Black`.

---

## 3. Part 1 — OKRs

**Section treatment:** Switch to `Deep Dark (#141413)` for contrast. Headline in Ivory, body in Warm Silver. Creates chapter break.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PART 1 · OBJECTIVES & KEY RESULTS`

**H2** (Anthropic Serif, 52px, weight 500, `Ivory #faf9f5`):
Two Objectives. One Thesis.

**Lead line** (Anthropic Serif, 36px, weight 500, line-height 1.30, `Ivory`):
Eliminate the cognitive tax. Engineer boringly predictable delivery.

**Body** (Anthropic Sans, 17px, line-height 1.60, `Warm Silver #b0aea5`):
Both objectives connect to the same diagnostic: Zomato's funnel doesn't leak demand — it leaks confidence. Objective 1 targets the decision layer; Objective 2 targets the trust layer. Together, they address a conversion of 5.86% that should be 9%+.

---

### 3.1 Objective 1 — Eliminate the "Cognitive Tax"

**Sub-section label** (Anthropic Sans, 12px, uppercase, letter-spacing 0.12px, `Coral Accent #d97757`):
OBJECTIVE 1

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Ivory`):
Eliminate the "Cognitive Tax" — Stop the Funnel Leak

**Why block** (Anthropic Sans, 15px, `Warm Silver #b0aea5`, line-height 1.60, max-width 720px):
Users spend up to 72 minutes per month exploring options without transacting. Intent is high — Add-to-Cart rate reaches ~13.14% — but conversion collapses to ~5.86%. The root cause: "Choice Overload" and "Ego Depletion" during dinner peak lead to Cooking Paralysis or app abandonment. 54% of users second-guess their order before finalizing.

**Strategy tag** (Warm Sand `#e8e6dc` pill, Charcoal Warm text, 24px radius, 8px 16px padding, Anthropic Sans 14px weight 500):
Strategy: Shift from "Push" (Search) to "Pull" (Personalization) to reduce Evaluation Cost

**Three KR cards** (Dark Surface `#30302e` cards, 16px radius, ring shadow `0px 0px 0px 1px #30302e`, padding 28px, stacked column on mobile, row on desktop):

**KR 1.1**
Stat number: `< 5 min` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Label (Anthropic Sans, 12px uppercase, `Warm Silver`, letter-spacing 0.12px): TIME-TO-CART FOR REPEAT USERS
Body (Anthropic Sans, 14px, `Warm Silver #b0aea5`): Reduce from ~15 minutes. Reducing "decision limbo" prevents Cooking Paralysis and ego depletion during peak dinner times.

**KR 1.2**
Stat number: `15%` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Label (Anthropic Sans, 12px uppercase, `Warm Silver`, letter-spacing 0.12px): AI-DRIVEN CONVERSION RATE TARGET
Body (Anthropic Sans, 14px, `Warm Silver #b0aea5`): A higher AI conversion proves we are successfully shifting from a high-friction Search model to a low-friction Curated model.

**KR 1.3**
Stat number: `< 40%` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Label (Anthropic Sans, 12px uppercase, `Warm Silver`, letter-spacing 0.12px): CHECKOUT HESITATION (CART ABANDONMENT)
Body (Anthropic Sans, 14px, `Warm Silver #b0aea5`): Down from 54%. Reinforcing decision confidence at the payment screen directly targets users who second-guess their choices.

---

### 3.2 Objective 2 — Engineer "Boringly Predictable" Delivery

**Section treatment:** Continue Deep Dark, new sub-block.

**Sub-section label** (Anthropic Sans, 12px, uppercase, letter-spacing 0.12px, `Coral Accent #d97757`):
OBJECTIVE 2

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Ivory`):
Engineer "Boringly Predictable" Delivery — Build the Trust Moat

**Why block** (Anthropic Sans, 15px, `Warm Silver #b0aea5`, line-height 1.60, max-width 720px):
The average delivery time of 30–33 minutes is a lie. The Standard Deviation of 16–22 minutes means delivery times follow a Gamma Distribution — the probability of severe delays is structurally high. This unpredictability generates 7.5 support tickets per 1,000 orders. The removal of "On-Time Guarantees" confirms subsidizing this variance is financially unsustainable.

**Strategy tag** (Warm Sand pill, same styling as 3.1):
Strategy: Prioritize Variance Reduction over absolute speed

**Three KR cards** (same Dark Surface styling as above):

**KR 2.1**
Stat number: `< 12 min` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Label (Anthropic Sans, 12px uppercase, `Warm Silver`, letter-spacing 0.12px): DELIVERY TIME STANDARD DEVIATION TARGET
Body (Anthropic Sans, 14px, `Warm Silver #b0aea5`): Compressing the SD eliminates the severe delays (outliers) in the Gamma Distribution's long tail that disproportionately destroy trust.

**KR 2.2**
Stat number: `95%` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Label (Anthropic Sans, 12px uppercase, `Warm Silver`, letter-spacing 0.12px): PERFECT ORDER RATE (ON-TIME + ERROR-FREE)
Body (Anthropic Sans, 14px, `Warm Silver #b0aea5`): Bridges the gap with Quick Commerce's ~96% benchmark — essential to prevent churn in a market conditioned for 15-minute certainty.

**KR 2.3**
Stat number: `< 5` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Label (Anthropic Sans, 12px uppercase, `Warm Silver`, letter-spacing 0.12px): SUPPORT TICKETS PER 1,000 ORDERS
Body (Anthropic Sans, 14px, `Warm Silver #b0aea5`): Down from 7.5. Validates we are delivering on a "Peace of Mind" promise and directly improves unit economics.

---

## 4. Part 2 — Supporting KPIs

**Section treatment:** Back to Parchment. Full-width on desktop.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PART 2 · SUPPORTING KPIS`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20, `Near Black`):
Five Metrics Behind the OKRs

**Body** (Anthropic Sans, 17px, `Olive Gray`, line-height 1.60, max-width 720px):
OKRs tell you where you're going. KPIs explain why you're not there yet — and which levers to pull first. Each metric below is a leading indicator to one or more of the OKR Key Results.

**Five KPI cards** (Ivory, 16px radius, 1px Border Cream, padding 28px — 2-column grid on desktop, stacked on mobile. Each card has a number badge in `Terracotta #c96442` circle, 32px, Ivory text, Anthropic Sans 14px weight 500):

**KPI 1 — Delivery Partner Attrition Rate**
Badge: `1`
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Delivery Partner Attrition Rate
Target (Anthropic Sans, 14px, `Terracotta #c96442`, weight 500): Target: Reduce from 44.3% to <35%
Body (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Stability = Predictability. High attrition forces constant rookie onboarding, directly fueling variance. Swiggy's lower attrition (33.37%) gives them a structural advantage — experienced riders navigate last-mile complexities faster.
Links to KR: (Anthropic Sans, 12px, `Stone Gray`, uppercase, letter-spacing 0.12px): SUPPORTS KR 2.1 · KR 2.2

**KPI 2 — Priority Fee Attach Rate**
Badge: `2`
Title: Priority Fee Attach Rate
Target (Terracotta): Metric: Adoption of ₹19–29 "Priority Delivery" fees
Body: Monetizing Trust. High adoption validates that users will pay for the certainty of speed — justifying a shift away from free delivery subsidies.
Links to KR: SUPPORTS KR 2.2 · KR 2.3

**KPI 3 — Monthly "Idle" Browse Time**
Badge: `3`
Title: Monthly "Idle" Browse Time
Target (Terracotta): Metric: Reduction in the 72-minute/month non-transacting average
Body: Efficiency > Engagement. 72 minutes of browsing represents "decision limbo" and friction, not enjoyment. Decreasing this proves AI recommendations are solving the Evaluation Cost problem — not just rearranging the menu.
Links to KR: SUPPORTS KR 1.1 · KR 1.2

**KPI 4 — Day-30 Retention Rate**
Badge: `4`
Title: Day-30 Retention Rate
Target (Terracotta): Baseline: Improve beyond the ~3.7% category average
Body: The Loyalty Truth. With sector retention shockingly low due to "multi-homing," this is the only metric that proves habit formation — confirming we are building an experience moat that prevents switching for a cheaper discount.
Links to KR: SUPPORTS KR 1.2 · KR 1.3

**KPI 5 — Frequency of "Tail Events" (>60 Mins)**
Badge: `5`
Title: Frequency of "Tail Events" (>60 Min Deliveries)
Target (Terracotta): Metric: % of orders in the Gamma Distribution "Long Tail"
Body: Killing the Trust-Destroyers. Average speed is a vanity metric; the "long tail" of severe delays is what destroys trust. Reducing these outliers is critical because the Gamma distribution makes these failures structurally probable without intervention.
Links to KR: SUPPORTS KR 2.1 · KR 2.3

---

## 5. Part 3 — Funnel Analysis

**Section treatment:** Switch to `Deep Dark (#141413)`.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PART 3 · FUNNEL ANALYSIS`

**H2** (Anthropic Serif, 52px, weight 500, `Ivory`):
The Funnel Doesn't Leak Demand. It Leaks Confidence.

**Lead line** (Anthropic Serif, 36px, weight 500, line-height 1.30, `Ivory`):
Early stages bleed cognitive confidence. Late stages bleed operational trust.

**Body** (Anthropic Sans, 17px, line-height 1.60, `Warm Silver #b0aea5`, max-width 720px):
The six-stage funnel — App Open → Discovery → Restaurant Selection → Cart/Checkout → Delivery → Re-order — appears healthy by aggregate metrics. But each transition hides a different failure mode. Diagnosing the nature of each drop-off (cognitive, operational, or emotional) determines the correct intervention.

---

### 5.1 Funnel Stages — Stage-by-Stage Analysis

**Five stage blocks** (Dark Surface `#30302e` cards, 16px radius, padding 28px, full-width stacked column. Left edge accent: `4px solid Coral Accent #d97757`):

**Stage 1 — App Open → Discovery**
Stage label (Anthropic Sans, 12px, uppercase, `Coral Accent #d97757`, letter-spacing 0.12px): STAGE 1
Title (Anthropic Serif, 25px, weight 500, `Ivory`): App Open → Discovery
Drop-off (Anthropic Sans, 14px, `Warm Silver`): Drop-off: Multiple app opens without engagement; 72 mins/month browsing without conversion
Root Cause (Anthropic Sans, 14px, `Warm Silver`): Root Cause: Intent is high ("I'm hungry"), but users face a catalogue when they want a suggestion. Choice abundance creates paralysis.
Intuition (Anthropic Serif, 17px, weight 400, `Ivory`, line-height 1.60, italic): Tier-1 users during peak hours are cognitively depleted — they value speed over exploration. Leverage order history and time-of-day to present one confident recommendation.
Hypothesis pill (Warm Sand `#e8e6dc`, Charcoal Warm text, 8px radius, 14px Anthropic Sans): "If we surface a 'Smart Default' hero card on app open, time-to-engagement will reduce by 40%."

**Stage 2 — Discovery → Restaurant Selection**
Stage label: STAGE 2
Title: Discovery → Restaurant Selection
Drop-off: High impressions, low click-through; users compare ratings/ETA then bounce
Root Cause: Evaluation cost is punitive. Every data point increases regret anticipation: "What if there's something better?"
Intuition: Users minimize regret risk, not optimize for "best food." Highlight "Ordered by 500+ nearby users" over star ratings alone.
Hypothesis pill: "If we reduce visible options from 15–20 to 6–8 curated choices with social proof, CTR will increase by 30%."

**Stage 3 — Restaurant → Checkout**
Stage label: STAGE 3
Title: Restaurant Selection → Checkout
Drop-off: 13% add to cart; only 6% complete checkout — 54% abandonment rate
Root Cause: Checkout triggers re-evaluation. Users encounter sticker shock (fees) and second-guess their choice.
Intuition: Social proof acts as permission to complete the decision. Surface total cost earlier to prevent sticker shock.
Hypothesis pill: "If we add 'Confidence Anchors' at checkout ('421 people ordered this today' + upfront total cost), abandonment will drop to 40%."

**Stage 4 — Checkout → Delivery**
Stage label: STAGE 4
Title: Checkout → Delivery
Drop-off: 7.5 support tickets per 1,000 orders; post-order anxiety spikes immediately
Root Cause: Variance (16–22 min SD), not speed, destroys trust. Users don't know if their order will take 20 or 60 minutes.
Intuition: Users forgive slow delivery more than broken promises. Progress visibility reduces perceived wait time by 35%.
Hypothesis pill: "If we provide milestone notifications ('Order packed,' '2 mins away'), support tickets will reduce by 30%."

**Stage 5 — Delivery → Re-order**
Stage label: STAGE 5
Title: Delivery → Re-order
Drop-off: Single negative experience suppresses order frequency; Day-30 retention stuck at 3.7%
Root Cause: Experience residue lingers. Poor issue resolution amplifies damage.
Intuition: Users judge brands on recovery, not perfection. Proactive fixes transform negatives into trust signals.
Hypothesis pill: "If we auto-credit for delays >15 mins past ETA (no ticket required), repeat orders within 7 days will increase by 18%."

---

### 5.2 Funnel Friction Summary Table

**Section treatment:** Continue Deep Dark. Table below the stage cards.

**Table** (Dark Surface `#30302e` background, Border Dark `#30302e` horizontal dividers, no zebra stripes, row padding 16–18px vertical. Header row: Anthropic Sans 12px uppercase letter-spacing 0.12px `Stone Gray`. Body rows: Anthropic Sans 15px `Warm Silver`):

| Funnel Stage | Primary Friction | Nature of Problem | Strategic Lever |
|---|---|---|---|
| App Open → Discovery | Choice overload | Cognitive | Default curation |
| Discovery → Restaurant | Decision paralysis | Cognitive | Confidence signals |
| Menu → Checkout | Second-guessing | Cognitive + Price | Reassurance |
| Checkout → Delivery | ETA uncertainty | Operational | Predictability |
| Delivery → Re-order | Emotional residue | Experience | Resolution quality |

**Closing quote** (Anthropic Serif, 36px, weight 500, line-height 1.30, `Coral Accent #d97757`, centered, max-width 720px):
*"This funnel doesn't leak demand — it leaks confidence."*

**Supporting text** (Anthropic Sans, 17px, `Warm Silver`, line-height 1.60, centered, max-width 640px):
Early friction is cognitive (too many choices). Late friction is operational (unpredictability). Combined fixes can move conversion from 6% to 9%+ and unlock ₹600 Cr+ in annual GMV.

---

## 6. Part 4 — Cohort Analysis Setup

**Section treatment:** Back to Parchment.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PART 4 · COHORT ANALYSIS`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20, `Near Black`):
Cohort-Based Retention Analysis

**Body** (Anthropic Sans, 17px, `Olive Gray`, line-height 1.60, max-width 720px):
The objective: track first-order users to identify levers that drive repeat behavior and inform both product and lifecycle interventions. The analysis is structured to answer a single question — which first-order characteristics predict long-term retention?

---

### 6.1 Cohort Definition

**Two-column layout on desktop** (definition left, segmentation right):

**Left column:**
H3 (Anthropic Serif, 25px, weight 500, `Near Black`): Cohort Trigger
Body (Anthropic Sans, 16px, `Olive Gray`, line-height 1.60): Users who placed their first successful order — payment completed, delivery attempted.

H3 (Anthropic Serif, 25px, weight 500, `Near Black`): Temporal Cadence
Body (Anthropic Sans, 16px, `Olive Gray`, line-height 1.60): Weekly cohorts (rolling 7-day windows). Monthly cohorts delay insights; daily creates noise. Weekly balances statistical significance with actionability.

**Right column** — Segmentation card (Ivory, 16px radius, 1px Border Cream, padding 28px):
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Behavioural Segmentation Dimensions
Four rows (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60, with thin Border Cream dividers between rows):
- **Order Value:** <₹300 · ₹300–600 · >₹600
- **Delivery Experience:** On-time (<35 mins) · Delayed (>45 mins)
- **Discovery Method:** Search · AI Recommendation · Direct Restaurant
- **Time of Day:** Lunch (11am–3pm) · Dinner (7pm–11pm) · Other

---

### 6.2 Cohort Comparison Table

**Table** (Ivory surface, 16px radius, 1px Border Cream, row padding 16–18px vertical. No zebra stripes. Header row: Anthropic Sans 12px uppercase `Stone Gray` letter-spacing 0.12px. Body rows: Anthropic Sans 15px `Near Black`/`Olive Gray`):

| Cohort Week | Total Users | D7 Repeat | D14 Repeat | D30 Repeat | TT2O (Median) | Avg LTV (D30) |
|---|---|---|---|---|---|---|
| Week 1 | 12,500 | 8.20% | 11.50% | 18.30% | 9 days | ₹485 |
| Week 2 | 13,200 | 9.10% | 13.20% | 20.10% | 7 days | ₹520 |
| Week 3 | 11,800 | 7.80% | 10.90% | 17.60% | 11 days | ₹450 |

**Three key questions** (Ivory callout block, 24px radius, padding 28px, left-border `4px solid Terracotta #c96442`):
- Which cohort characteristics correlate with higher D7/D30 retention?
- Does first-order discount depth impact repeat rate?
- How does delivery experience variance affect retention curves?

Block label (Anthropic Sans, 12px, uppercase, `Terracotta #c96442`, letter-spacing 0.12px): KEY QUESTIONS

---

### 6.3 Strategic Segmentation

**Section treatment:** Continue Parchment.

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Near Black`):
Four User Segments to Act On

**Body** (Anthropic Sans, 16px, `Olive Gray`, line-height 1.60, max-width 720px):
Cohort data reveals four behaviorally distinct groups — each requiring a different product or lifecycle intervention.

**Four segment cards** (Ivory, 16px radius, 1px Border Cream, padding 28px, 2×2 grid on desktop, stacked on mobile):

**Segment A — Fast Adopters**
Badge (Terracotta circle 32px, Ivory text): A
Title (Anthropic Serif, 20px, weight 500, `Near Black`): "Fast Adopters"
Definition (Anthropic Sans, 14px, `Stone Gray`): Users who place 2nd order within 3 days (top quartile TT2O)
Body (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Hypothesis: High intent + positive first experience = rapid habit formation.
Action (Anthropic Sans, 14px, weight 500, `Terracotta #c96442`): Action: Prioritize for loyalty program early enrolment.

**Segment B — Perfect Start**
Badge: B
Title: "Perfect Start"
Definition: First order delivered on-time with no issues
Body: Expected lift: 40–60% higher D30 retention vs. delayed deliveries.
Action: Action: Benchmark for operational excellence; use as control group.

**Segment C — High AOV Launchers**
Badge: C
Title: "High AOV Launchers"
Definition: First order >₹600
Body: Hypothesis: Higher willingness to pay = better retention economics.
Action: Action: Test premium tier messaging (Gold subscription) at Day 3.

**Segment D — Rescue Needed**
Badge: D
Title: "Rescue Needed"
Definition: First order had service failure but user didn't churn immediately
Body: Aggressive recovery required — these users are giving the platform a second chance.
Action: Action: Personalized apology + ₹100 credit within 24 hours.

---

### 6.4 Product Decision Matrix

**Table** (Ivory, 16px radius, Border Cream dividers, no zebra. Header: Anthropic Sans 12px uppercase `Stone Gray`. Body: Anthropic Sans 15px `Olive Gray`):

| Finding | Product Intervention |
|---|---|
| Users who discover via AI recommendations have 25% higher D7 retention | Double down on ML personalization; increase hero card prominence |
| D7 retention drops 40% for users with first-order delays >45 mins | Prioritize operational consistency OKRs; flag high-variance delivery zones |
| Users ordering at dinner (7–11pm) have 2× repeat rate vs. lunch | Optimize dinner experience; test dinner-specific campaigns |
| TT2O >10 days = 70% never return | Trigger re-engagement at Day 5–7 window (peak churn risk) |

---

## 7. Summary & Reflection

**Section treatment:** Switch to `Deep Dark (#141413)`. Closing bookend.

**H2** (Anthropic Serif, 52px, weight 500, `Ivory`):
What the Exercise Revealed

**Body** (Anthropic Serif, 20px, weight 400, line-height 1.60, `Warm Silver #b0aea5`, max-width 720px):
One of the most surprising insights from the analysis was the amount of time users spend inside the app without placing an order. What initially appears as high engagement is, in reality, a signal of decision fatigue and hesitation.

This behavior strongly mirrors patterns seen on Netflix, where users often browse for extended periods, struggle to decide what to watch, and eventually exit without consuming content. Netflix's "Continue Watching" feature addresses this by reducing cognitive effort and offering a confident default — an insight that directly influenced my thinking on simplifying food discovery and reducing choice overload.

A key challenge during the exercise was defining the right Key Results. I debated whether to prioritize growth-oriented metrics or experience-led ones. Ultimately, I anchored the OKRs around experience — with the belief that removing friction and building trust creates a stronger foundation on which sustainable growth can be achieved in subsequent phases.

**Closing quote** (Anthropic Serif, 36px, weight 500, line-height 1.30, `Coral Accent #d97757`, centered):
*"The funnel doesn't lose users. It loses their confidence — and confidence is rebuilt one predictable interaction at a time."*

---

## 8. Page Footer

**Section treatment:** Thin Parchment strip, Border Cream top, Stone Gray text.

Left side (Anthropic Sans, 14px, `Stone Gray`): *Zomato Analytics & Metrics · Airtribe Assignment · 2025*
Right side (Anthropic Sans, 14px, `Stone Gray`): *Built by Sujit · <link to LinkedIn> · <link to other projects>*

---

## Agent Build Notes

### Critical reminders for the AI builder
1. **Never introduce cool grays.** Every neutral must carry a yellow-brown undertone. Use `#5e5d59`, `#87867f`, `#4d4c48` — never `#666666` or `#94a3b8`.
2. **All serif headings at weight 500.** No 600, no 700, no 400.
3. **Page background is always `Parchment #f5f4ed`** on light sections. Cards are `Ivory #faf9f5`.
4. **Use ring shadows for interactive depth.** Pattern: `0px 0px 0px 1px #e8e6dc` or `0px 0px 0px 1px #d1cfc5`. No heavy drop shadows.
5. **Terracotta `#c96442` is reserved for primary CTAs and brand-accent moments.** Not for decorative use across body text.
6. **Tables need breathing room.** 14–18px vertical padding per row, Border Cream horizontal dividers only, no zebra stripes.
7. **Alternate sections follow this dark-section map:** Sections 3 (OKRs), 5 (Funnel Analysis), 7 (Reflection) are `Deep Dark #141413`. All others are Parchment.
8. **Body line-height ≥ 1.60** on all prose. This is a reading experience.
9. **Coral Accent `#d97757`** is used for stat numbers on dark sections (not Terracotta — it reads better against near-black). Terracotta `#c96442` is for CTAs and left-border accents on light sections.
10. **The Gamma Distribution and SD callouts in Objective 2** are analytical anchors — give them visual weight. The `< 12 min` SD target is the single most important number in the OKR section.
11. **Stage hypothesis pills** in Section 5.1 should feel like inline callouts — Warm Sand background, Charcoal Warm text, not full-width. They are secondary to the intuition copy above them.
12. **Cohort table (Section 6.2)** must scroll horizontally on mobile inside a Warm Sand `#e8e6dc` container. Do not collapse or hide columns.

### Responsive behavior
- Desktop (992px+): multi-column grids, full tables, 64px hero headline.
- Tablet (768–991px): 2-column grids, condensed tables, 52px hero.
- Mobile (<768px): single-column stack, 36px hero, hamburger nav. Tables scroll horizontally.

### Section map at a glance
| # | Title | Background |
|---|---|---|
| 1 | Hero | Parchment |
| 2 | Strategic Context | Parchment |
| 3 | OKRs (Part 1) | Deep Dark |
| 4 | Supporting KPIs (Part 2) | Parchment |
| 5 | Funnel Analysis (Part 3) | Deep Dark |
| 6 | Cohort Analysis (Part 4) | Parchment |
| 7 | Reflection | Deep Dark |
| Footer | — | Parchment |
