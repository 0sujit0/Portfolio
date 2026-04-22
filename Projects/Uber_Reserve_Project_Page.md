# Uber Reserve — Closing the Adoption Gap in Tier 1 Cities

> **Portfolio Project Page — Build Brief for AI Agent**
> A product case study by Sujit, 2026.
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
`PRODUCT CASE STUDY · REPOSITIONING · 2026`

**Headline** (Anthropic Serif, 64px, weight 500, line-height 1.10, `Near Black #141413`):
Uber Reserve — Closing the Adoption Gap in Tier 1 Cities

**Subhead** (Anthropic Sans, 20px, weight 400, line-height 1.60, `Olive Gray #5e5d59`, max-width ~640px):
Reserve is under-adopted not because users don't know about it, but because normal Uber already solves ~80% of the reliability job for free. The fix isn't more marketing or a better UI — it's repositioning Reserve from a premium booking tier into a guaranteed-arrival insurance product, with teeth-in guarantees and contextual surfacing on trips where being late has a real cost.

**Meta row** (Anthropic Sans, 14px, `Stone Gray #87867f`, separated by middle-dot `·`):
Role: Product (Case Study) · Market: Tier 1 Indian Cities · Framework: First Principles, JTBD, Pricing, Supply Modeling · Year: 2026

**Primary CTA button:** `Terracotta (#c96442)` · Ivory text · 12px radius · padding `12px 20px` · label `Read the repositioning →`
**Secondary CTA button:** `Warm Sand (#e8e6dc)` · `Charcoal Warm (#4d4c48)` · 8px radius · ring shadow · label `Jump to the solution`

---

## 2. The TL;DR

**Section treatment:** Parchment. Single-column, centered, max-width 720px. Creates an editorial "summary" block before the deep dive.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`TL;DR`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20, `Near Black`):
Reserve's premium is unearned — until it becomes insurance.

**Body** (Anthropic Serif, 17px, weight 400, line-height 1.60 — serif body for editorial passages):
Users in Tier 1 cities see Reserve as a priced version of something they already get for free: a reliable ride in 2–6 minutes. On the four primitives that matter — time, price, supply, effort — Reserve is at best equal to normal Uber and on two primitives (supply certainty, effort) is worse. Users aren't being irrational when they skip it.

The fix is not discoverability or UI. It's a reframing: Reserve should stop competing with normal Uber and start competing with the anxiety tax users pay before high-stakes trips. That means transparent two-part pricing (base + guarantee fee), a guarantee with real teeth backed by credits and auto-upgrade, and contextual surfacing inline in the normal flow — targeted initially at airport and 8–10am CBD commutes where supply density makes the guarantee operationally affordable.

**Pull-quote block** (on Ivory, 24px radius, padding 32px, left-border `4px solid Terracotta #c96442`):
*"Users will pay ₹49–₹99 to make a different comparison — not 'Reserve vs. normal Uber,' but '₹69 vs. missing a flight.'"*
Quote text: Anthropic Serif 25px weight 500 line-height 1.30, `Near Black`.

---

## 3. Part 1 — The Problem, From First Principles

**Section treatment:** Parchment. Two-column on desktop (narrative left, insight callouts right).

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PART 1 · FIRST PRINCIPLES`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20, `Near Black`):
Stripping the Product Back to Its Primitives

**Body** (Anthropic Serif, 17px, weight 400, line-height 1.60, `Near Black`):
Before diagnosing why adoption is low, it helps to ask what a user is actually buying when they book any ride on Uber. Stripped of branding and UI, a ride-hailing transaction delivers four primitives of value.

Every ride-hailing feature, including Reserve, is ultimately a lever on one or more of these four variables. If a feature does not meaningfully move any primitive relative to what the user already has, it has no reason to exist at the price point it is offered.

**Four primitive cards** (Ivory, 16px radius, 1px Border Cream, padding 24px, 2×2 grid on desktop, stacked on mobile):

**Card 1 — Time Certainty**
Number badge (Terracotta circle 32px, Ivory text): `1`
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Time Certainty
Body (Anthropic Sans, 15px, `Olive Gray #5e5d59`, line-height 1.60): Confidence that I will arrive by time T.

**Card 2 — Price Certainty**
Number badge: `2`
Title: Price Certainty
Body: Confidence about what the ride will cost.

**Card 3 — Supply Certainty**
Number badge: `3`
Title: Supply Certainty
Body: Confidence that a driver will actually show up.

**Card 4 — Effort**
Number badge: `4`
Title: Effort
Body: The cognitive and physical cost of arranging the ride.

---

### 3.1 How Reserve Moves Each Primitive vs. Normal Uber

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Near Black`):
The Primitive-by-Primitive Audit

**Body** (Anthropic Sans, 16px, `Olive Gray`, line-height 1.60, max-width 720px):
The exercise below compares Reserve against normal Uber on each primitive, as the user perceives them today in a Tier 1 city.

**Table** (Ivory surface, 16px radius, 1px Border Cream, row padding 16–18px vertical. No zebra stripes. Header row: Anthropic Sans 12px uppercase `Stone Gray` letter-spacing 0.12px. Body rows: Anthropic Sans 15px `Near Black` for primitive, `Olive Gray` for body):

| Primitive | Normal Uber (Tier 1, today) | Uber Reserve (Tier 1, today) | Delta the User Perceives |
|---|---|---|---|
| Time certainty | High. ETAs in dense zones are 2–6 min. Booking 10 min early mimics scheduling. | High in theory, but driver is not confirmed until close to pickup. | Negligible. User already feels on-time. |
| Price certainty | Medium. Fare shown at booking but can surge at peak. | Fare locked at booking. | Small positive, but invisible outside surge windows. |
| Supply certainty | High in dense corridors; fails mainly at 4–6am or in low-supply pockets. | Not actually guaranteed; driver may cancel or not be assigned. | Negative in some cases — user pays more and still feels uncertain. |
| Effort | Low. Two taps. | Slightly higher — extra screen, date/time picker. | Negative. Reserve costs more effort, not less. |

---

### 3.2 The First-Principles Conclusion

**Section treatment:** Parchment. Full-width, centered narrative.

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Near Black`):
The Premium Is Unearned

**Body** (Anthropic Serif, 17px, weight 400, line-height 1.60, `Near Black`, max-width 720px):
Reserve charges a premium for a product that, on the four primitives that matter, is at best equal to normal Uber and on two primitives (supply certainty, effort) is worse. Users are not being irrational when they skip it — they are correctly observing that nothing of value is being added.

The problem is therefore not discoverability, not marketing, not UI — it is that Reserve, as currently designed, does not move any value primitive enough to justify its price.

**Root cause callout** (Ivory, 24px radius, padding 28px, left-border `4px solid Terracotta #c96442`):
Block label (Anthropic Sans, 12px, uppercase, `Terracotta #c96442`, letter-spacing 0.12px): ROOT CAUSE
Body (Anthropic Serif, 20px, weight 400, line-height 1.60, `Near Black`):
Reserve's unit of value — *"your ride is scheduled"* — has been commoditized by normal Uber's reliability. For Reserve to earn a price premium, it must move a primitive that normal Uber cannot. The only credible candidate is **supply certainty with a real guarantee.**

---

## 4. Part 2 — Jobs to Be Done

**Section treatment:** Switch to `Deep Dark (#141413)` for contrast. Headline in Ivory, body in Warm Silver. Creates chapter break.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PART 2 · JOBS TO BE DONE`

**H2** (Anthropic Serif, 52px, weight 500, `Ivory #faf9f5`):
What Reserve Is Hired to Do — and by Whom

**Lead line** (Anthropic Serif, 36px, weight 500, line-height 1.30, `Ivory`):
Reserve isn't competing with normal Uber. It's competing with the anxiety tax.

**Body** (Anthropic Sans, 17px, line-height 1.60, `Warm Silver #b0aea5`, max-width 720px):
The generic functional job — *"help me reach my destination on time"* — is already done by normal Uber. A JTBD that narrow cannot explain why anyone would pay more. The meaningful job surfaces only when you add the stakes of the trip.

**Refined-job callout** (Dark Surface `#30302e`, 16px radius, padding 32px, left-border `4px solid Coral Accent #d97757`):
Block label (Anthropic Sans, 12px, uppercase, `Coral Accent #d97757`, letter-spacing 0.12px): THE REFINED JOB
Body (Anthropic Serif, 25px, weight 500, line-height 1.30, `Ivory`, italic):
*"When I have a trip where being late has a real cost — a missed flight, a lost deal, a judged first impression — help me eliminate the small residual uncertainty of on-demand booking so I can stop thinking about the ride and focus on the thing the ride is for."*

**Body continuation** (Anthropic Sans, 17px, `Warm Silver`, line-height 1.60, max-width 720px):
Reframed this way, Reserve is not competing with normal Uber. It is competing with the anxiety tax users pay before high-stakes trips — refreshing the app, leaving 20 minutes early as a buffer, asking a colleague for a backup ride. This is the job Reserve can credibly charge for.

---

### 4.1 Functional, Emotional, and Social Dimensions

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Ivory`):
Three Dimensions of the Job

**Table** (Dark Surface `#30302e` background, Border Dark `#30302e` horizontal dividers, no zebra stripes, row padding 16–18px vertical. Header row: Anthropic Sans 12px uppercase letter-spacing 0.12px `Stone Gray`. Body rows: Anthropic Sans 15px, dimension label in `Ivory`, body in `Warm Silver`):

| Dimension | What the User Wants | Why Normal Uber Doesn't Fully Deliver |
|---|---|---|
| Functional | A driver I can be certain will arrive, at a time I pick, at a price I know. | Normal Uber only commits to supply at the moment of booking, not in advance. |
| Emotional | Peace of mind the night before a 6am flight. Freedom to stop mentally rehearsing the worst case. | Normal Uber requires the user to carry the uncertainty themselves — they buffer by leaving early. |
| Social | To be seen as organized — to arrive composed, not rushed. To not be the person who makes the team wait. | Normal Uber is neutral on social signaling; Reserve could signal "I planned this," but currently doesn't. |

---

### 4.2 Why This Reframing Matters

**Section treatment:** Continue Deep Dark.

**Body** (Anthropic Serif, 20px, weight 400, line-height 1.60, `Warm Silver`, max-width 720px):
Users will not pay a premium to *schedule a ride.* They will pay a premium to buy out uncertainty on a trip where the downside is real. Every product decision downstream — pricing, guarantee design, where to surface Reserve in the app — follows from treating Reserve as a **certainty purchase**, not a scheduling feature.

---

## 5. Part 3 — User Behavior and Research

**Section treatment:** Back to Parchment.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PART 3 · USER RESEARCH`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20, `Near Black`):
Four Segments. One Common Thread.

**Body** (Anthropic Sans, 17px, `Olive Gray`, line-height 1.60, max-width 720px):
The observations below are synthesized from three sources: public app-store reviews of Uber and Ola (scanned for "reserve," "scheduled," "pre-book," "cancelled"), Reddit threads on r/india and r/bangalore around airport rides, and inference from my own use as a Tier 1 professional.

**Honest caveat pill** (Warm Sand `#e8e6dc` pill, Charcoal Warm text, 24px radius, 8px 16px padding, Anthropic Sans 14px weight 500):
Caveat: This is not primary research. A production validation plan is included at the end of this section.

---

### 5.1 Four User Segments — Stage-by-Stage Analysis

**Four segment blocks** (Ivory cards, 16px radius, 1px Border Cream, padding 28px, full-width stacked column. Left edge accent: `4px solid Terracotta #c96442`):

**Segment A — Airport Traveler**
Segment label (Anthropic Sans, 12px, uppercase, `Terracotta #c96442`, letter-spacing 0.12px): SEGMENT A · FREQUENT FLYER (2–4 TRIPS/MONTH)
Title (Anthropic Serif, 25px, weight 500, `Near Black`): Airport Traveler
Stated need (Anthropic Sans, 14px, `Stone Gray`): Stated need: Guaranteed pickup for early flights.
Actual behavior (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Books normal Uber 15–20 min early. Keeps a backup number of a local cab driver. Occasionally uses Reserve only for 4–5am flights.
Insight (Anthropic Serif, 17px, weight 400, `Near Black`, line-height 1.60, italic): *Reserve is used only when normal Uber's supply is thin — i.e., when it solves a real supply-certainty gap, not for "scheduling" per se.*

**Segment B — Office Commuter**
Segment label: SEGMENT B · 8–10AM FIXED ROUTE
Title: Office Commuter
Stated need: Predictable morning pickup.
Actual behavior: Books normal Uber 10 min before leaving. Accepts occasional delay as noise.
Insight: *The stakes per trip are too low to justify paying for certainty. Needs a different value prop — e.g., locked price across 20 commutes.*

**Segment C — High-Stakes Meeting Traveler**
Segment label: SEGMENT C · OCCASIONAL, UNPREDICTABLE
Title: High-Stakes Meeting Traveler
Stated need: On-time arrival to a meeting that matters.
Actual behavior: Books normal Uber 30 min early and waits in the lobby. Doesn't think of Reserve at all.
Insight: *Highest willingness-to-pay for certainty, but lowest discoverability. Reserve needs to surface itself contextually — this segment is the entire opportunity.*

**Segment D — Leisure Traveler**
Segment label: SEGMENT D · WEEKEND, FAMILY
Title: Leisure Traveler
Stated need: Convenient ride.
Actual behavior: Books normal Uber. No scheduling need.
Insight: *Not a target segment. Don't optimize Reserve for them.*

---

### 5.2 Voice of the User — What Users Say to Themselves

**Section treatment:** Continue Parchment.

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Near Black`):
Four Inferred Self-Statements

**Body** (Anthropic Sans, 16px, `Olive Gray`, line-height 1.60, max-width 720px):
These aren't direct quotes — they're the self-talk inferred from review patterns and Reddit threads. Each one corresponds to a structural barrier in how Reserve is positioned today.

**Four quote cards** (Ivory, 16px radius, 1px Border Cream, padding 28px, 2×2 grid on desktop, stacked on mobile):

**Quote 1**
Quote (Anthropic Serif, 20px, weight 500, line-height 1.30, `Near Black`, italic): *"Uber is reliable enough — why pay more?"*
Translation label (Anthropic Sans, 12px, uppercase, `Terracotta #c96442`, letter-spacing 0.12px): WHAT IT MEANS
Body (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Normal Uber solves the supply-certainty job 80% of the time. Reserve has to earn the last 20%.

**Quote 2**
Quote: *"I'll just book 10 minutes early."*
Translation label: WHAT IT MEANS
Body: A near-free behavioral substitute exists, and users have already internalized it.

**Quote 3**
Quote: *"Reserve is for airports."*
Translation label: WHAT IT MEANS
Body: The product is mentally filed under one use case, so it never surfaces for the high-stakes meeting traveler — the segment that would actually pay for it.

**Quote 4**
Quote: *"If I'm paying extra, I expect a confirmed driver now."*
Translation label: WHAT IT MEANS
Body: Users want the certainty at the moment of purchase, not 30 minutes before pickup.

---

### 5.3 The Three Real Behavioral Barriers

**Section treatment:** Continue Parchment.

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Near Black`):
Why Users Skip Reserve

**Three barrier cards** (Ivory, 16px radius, 1px Border Cream, padding 28px, 3-column grid on desktop, stacked on mobile. Each card has a number badge in `Terracotta #c96442` circle, 32px, Ivory text, Anthropic Sans 14px weight 500):

**Barrier 1 — Commoditized Value**
Badge: `1`
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Commoditized Value
Body (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Normal Uber already does the job well enough that Reserve has no primitive it clearly wins on.

**Barrier 2 — No Immediate Payoff**
Badge: `2`
Title: No Immediate Payoff
Body: Reserve's "benefit" is invisible at the moment of booking. The user pays now and finds out later whether it worked — which feels like paying for a promise.

**Barrier 3 — Wrong Surface**
Badge: `3`
Title: Wrong Surface
Body: Reserve lives in a tab users enter deliberately. The segment most willing to pay only thinks about it when the meeting is about to start — by which time they've already opened normal Uber.

---

### 5.4 How I Would Validate in Production

**Section treatment:** Continue Parchment.

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Near Black`):
A Three-Pronged Validation Plan

**Three validation cards** (Ivory, 16px radius, 1px Border Cream, padding 28px, 3-column grid on desktop, stacked on mobile):

**Card 1 — Quantitative**
Method label (Anthropic Sans, 12px, uppercase, `Terracotta #c96442`, letter-spacing 0.12px): QUANT
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Internal Data Cuts
Body (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Reserve attach rate in Tier 1 segmented by trip purpose (airport vs. other), time of day, and booking lead time (>2 hours vs. <2 hours before pickup). Cancellation rate on Reserve vs. matched normal Uber trips. Repeat-Reserve rate within 30 days.

**Card 2 — Qualitative**
Method label: QUAL
Title: 15–20 Targeted Interviews
Body: Tier 1 professionals who made at least one high-stakes trip (flight, interview, pitch) in the last month. Two questions drive the interview: *what did you do to reduce anxiety about the ride*, and *what would have made you pay to remove it entirely?*

**Card 3 — Behavioral Proxy**
Method label: PAINTED DOOR
Title: Tap-Through Test
Body: Show a *"Guaranteed arrival · ₹69"* option in the normal flow for airport trips to 5% of Tier 1 users. Measure tap-through, not just conversion — tap-through measures the value proposition; conversion conflates value prop with price.

---

## 6. Part 4 — The Proposed Improvement

**Section treatment:** Switch to `Deep Dark (#141413)`. This is the anchor section of the case study.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`PART 4 · PROPOSED IMPROVEMENT`

**H2** (Anthropic Serif, 52px, weight 500, `Ivory`):
Reposition Reserve as Guaranteed Arrival.

**Lead line** (Anthropic Serif, 36px, weight 500, line-height 1.30, `Ivory`):
Not a premium scheduled-ride tier. An insurance product against a bad outcome.

**Hypothesis callout** (Dark Surface `#30302e`, 16px radius, padding 32px, left-border `4px solid Coral Accent #d97757`):
Block label (Anthropic Sans, 12px, uppercase, `Coral Accent #d97757`, letter-spacing 0.12px): HYPOTHESIS
Body (Anthropic Serif, 20px, weight 400, line-height 1.60, `Ivory`):
If users are forced to compare Reserve's price to the cost of the thing going wrong (missed flight, late to a pitch) rather than to a normal Uber's fare, willingness-to-pay increases meaningfully. The current framing forces the first comparison, which Reserve always loses. The new framing forces the second, which Reserve always wins.

---

### 6.1 The Mechanic, in Three Parts

**Three mechanic cards** (Dark Surface `#30302e` cards, 16px radius, ring shadow `0px 0px 0px 1px #30302e`, padding 28px, stacked column on mobile, 3-column row on desktop):

**Mechanic 1 — Transparent Two-Part Pricing**
Number label (Anthropic Sans, 12px, uppercase, `Coral Accent #d97757`, letter-spacing 0.12px): MECHANIC 1
Stat number: `₹49–₹99` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Stat label (Anthropic Sans, 12px uppercase, `Warm Silver`, letter-spacing 0.12px): GUARANTEE FEE · VARIES BY CORRIDOR & LEAD TIME
Title (Anthropic Serif, 25px, weight 500, line-height 1.10, `Ivory`): Transparent Two-Part Pricing
Body (Anthropic Sans, 14px, `Warm Silver #b0aea5`, line-height 1.60): Replace Reserve's opaque higher fare with a visible split: base fare (the normal Uber Go fare at the moment of booking) plus a "Guarantee Fee." The user sees exactly what they are paying for the guarantee, and the base fare comparison to normal Uber becomes neutral instead of unfavorable.

**Mechanic 2 — A Guarantee With Teeth**
Number label: MECHANIC 2
Stat number: `₹200` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Stat label: AUTO-REFUNDED CREDIT IF DRIVER >5 MIN LATE
Title: A Guarantee With Teeth
Body: If the driver arrives more than 5 minutes late, the Guarantee Fee is auto-refunded and ₹200 in Uber credits are issued — no support ticket required. If no driver is assigned 30 minutes before pickup, Uber auto-dispatches a Premier vehicle at Go pricing, absorbing the cost. This is a contract enforced in code — the guarantee has to fail visibly and expensively to Uber, or users will not trust it.

**Mechanic 3 — Contextual Surfacing**
Number label: MECHANIC 3
Stat number: `1 tap` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Stat label: CONVERTS A NORMAL BOOKING INTO A RESERVE BOOKING
Title: Contextual Surfacing, Not a Separate Tab
Body: Surface Reserve inline in the normal booking flow when context warrants it — airport destinations within 4 hours of a red-eye window, pinned "Office" addresses at 8–10am weekdays, hotels during known event hours. The in-flow prompt reads: *"Lock in this ride for 7:30am — ₹69 guarantees your driver or you ride free."*

---

### 6.2 Alternatives Considered and Rejected

**Section treatment:** Continue Deep Dark. Table below the mechanic cards.

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Ivory`):
Four Paths I Didn't Take

**Body** (Anthropic Sans, 16px, `Warm Silver`, line-height 1.60, max-width 720px):
Each of these alternatives was tempting for a different reason. None of them solved the underlying diagnosis: Reserve's value proposition is weak, not its price or discoverability.

**Table** (Dark Surface `#30302e` background, Border Dark `#30302e` horizontal dividers, no zebra stripes, row padding 16–18px vertical. Header row: Anthropic Sans 12px uppercase letter-spacing 0.12px `Stone Gray`. Body rows: Anthropic Sans 15px, alternative label in `Ivory`, body in `Warm Silver`):

| Alternative | Why It Was Tempting | Why It Was Rejected |
|---|---|---|
| Bundle Reserve free into Uber One | Low friction; drives Uber One attach. | Conflates two jobs (savings vs. certainty). Subsidizes users who would never have paid. Breaks the price signal that makes Reserve feel valuable. |
| Auto-enable Reserve for all airport trips | Solves discovery instantly. | Removes user choice and damages trust catastrophically when the guarantee fails on a trip the user didn't opt into. |
| Cut Reserve price to match normal Uber | Removes the obvious price objection. | Misdiagnoses the problem. Users are not price-sensitive; they are value-skeptical. A free Reserve still doesn't solve a job they feel is already solved. |
| Heavy marketing push for existing Reserve | Cheapest to execute. | Marketing amplifies a proposition users have already rejected. Scales the leak, not the bucket. |

---

### 6.3 Success Metrics

**Section treatment:** Back to Parchment for contrast with the dark solution section.

**Eyebrow** (Anthropic Sans, 10px, uppercase, letter-spacing 0.5px, `Stone Gray #87867f`):
`MEASUREMENT · PRIMARY, SECONDARY, GUARDRAILS`

**H2** (Anthropic Serif, 52px, weight 500, line-height 1.20, `Near Black`):
How We'd Know It Worked

**Body** (Anthropic Sans, 17px, `Olive Gray`, line-height 1.60, max-width 720px):
Each metric is deliberately paired with a specific claim the metric proves or disproves. Good metrics don't just measure — they force a decision if the number moves the wrong way.

**Four metric cards** (Ivory, 16px radius, 1px Border Cream, padding 28px — 2-column grid on desktop, stacked on mobile):

**Metric 1 — Primary**
Tier label (Anthropic Sans, 12px, uppercase, `Terracotta #c96442`, letter-spacing 0.12px): PRIMARY METRIC
Stat number: `10–12%` (Anthropic Serif, 52px, weight 500, `Terracotta #c96442`)
Label (Anthropic Sans, 12px uppercase, `Stone Gray`, letter-spacing 0.12px): RESERVE ATTACH RATE ON ELIGIBLE TRIPS · 6-MONTH TARGET
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Reserve Attach Rate on Eligible Trips
Body (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Airport + 8–10am CBD commutes among Tier 1 MAUs. Assumed baseline 2–4%. This is the metric that tells us the repositioning worked.

**Metric 2 — Secondary**
Tier label: SECONDARY METRIC
Stat number: `30-day` (Anthropic Serif, 52px, weight 500, `Terracotta #c96442`)
Label: REPEAT-RESERVE RATE AMONG FIRST-TIME USERS
Title: 30-Day Repeat-Reserve Rate
Body: Tells us the guarantee actually landed emotionally — users only come back if they felt the peace of mind. Attach rate without repeat is noise.

**Metric 3 — Guardrail**
Tier label (Anthropic Sans, 12px, uppercase, `Coral Accent #d97757`, letter-spacing 0.12px): GUARDRAIL 1 · UNIT ECONOMICS
Stat number: `< 3%` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Label: DRIVER ASSIGNMENT FAILURE RATE ON RESERVE TRIPS
Title: Driver Assignment Failure Rate
Body: Above 3%, the guarantee payouts eat the premium. If this trends wrong, scope shrinks to higher-supply corridors.

**Metric 4 — Guardrail**
Tier label: GUARDRAIL 2 · SUPPLY SIDE
Stat number: `flat` (Anthropic Serif, 52px, weight 500, `Coral Accent #d97757`)
Label: DRIVER CANCELLATION RATE · RESERVE VS. MATCHED NORMAL TRIPS
Title: Driver Cancellation Rate
Body: Reserve trips must not increase driver cancellation rate vs. matched normal trips. If they do, the advance-commit model is hurting supply and needs a driver-facing product investment before scaling.

---

### 6.4 What Has to Be True for This to Work

**Section treatment:** Parchment. Full-width narrative.

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Near Black`):
The Supply-Side Constraint Is the Real Gate

**Body** (Anthropic Serif, 17px, weight 400, line-height 1.60, `Near Black`, max-width 720px):
The hardest constraint is supply-side, not demand-side. The guarantee is only affordable if Uber can reliably assign drivers 30+ minutes in advance in the target corridors. Indian driver behavior today is short-horizon — drivers optimize minute-to-minute, not shift-to-shift.

**Three phase cards** (Ivory, 16px radius, 1px Border Cream, padding 28px, 3-column grid on desktop, stacked on mobile. Each card has a phase badge in `Terracotta #c96442` circle, 32px, Ivory text, Anthropic Sans 14px weight 500):

**Phase 1 — Dense Corridors Only**
Badge: `1`
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Launch in Dense-Supply Corridors
Body (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Major airports and CBD commutes in Mumbai, Bangalore, Delhi, Hyderabad — where the guarantee is operationally cheap because driver density makes last-minute dispatch feasible.

**Phase 2 — Driver Product**
Badge: `2`
Title: Build the "Reserve Shift" Driver Product
Body: A driver-side product with guaranteed incentives for drivers who commit to advance slots. This is a separate piece of work and is the real gating factor for scaling Reserve into a broader product.

**Phase 3 — Expand**
Badge: `3`
Title: Extend to Lower-Density Corridors
Body: Contingent on phases 1 and 2 working. Expands into new use cases — evening event pickups, doctor appointments, locked-price commute subscriptions.

---

### 6.5 Expected Outcome

**Section treatment:** Continue Parchment.

**H3** (Anthropic Serif, 32px, weight 500, line-height 1.10, `Near Black`):
Three Downstream Effects

**Three outcome cards** (Ivory, 16px radius, 1px Border Cream, padding 28px, 3-column grid on desktop, stacked on mobile):

**Outcome 1 — Revenue**
Tier label (Anthropic Sans, 12px, uppercase, `Terracotta #c96442`, letter-spacing 0.12px): FIRST-ORDER EFFECT
Title (Anthropic Serif, 20px, weight 500, `Near Black`): Durable Revenue Uncorrelated with Volume
Body (Anthropic Sans, 15px, `Olive Gray`, line-height 1.60): Users pay the Guarantee Fee for certainty whether or not they'd have taken Uber anyway. Revenue is decoupled from ride-hailing volatility.

**Outcome 2 — Competitive**
Tier label: SECOND-ORDER EFFECT
Title: A Wedge Against Ola and BluSmart
Body: Neither has a credible advance-guarantee product today. Reserve becomes a category of one, not a feature of two.

**Outcome 3 — Platform**
Tier label: THIRD-ORDER EFFECT
Title: Foundation for Certainty-Priced Products
Body: Locked price across a commute subscription, guaranteed return rides from events, and other products where the unit of value is the removal of uncertainty.

---

## 7. Summary & Reflection

**Section treatment:** Switch to `Deep Dark (#141413)`. Closing bookend.

**H2** (Anthropic Serif, 52px, weight 500, `Ivory`):
What This Case Study Revealed

**Body** (Anthropic Serif, 20px, weight 400, line-height 1.60, `Warm Silver #b0aea5`, max-width 720px):
The most useful insight from this exercise was that adoption problems are often misdiagnosed as awareness problems. The instinct is to reach for a marketing lever or a UI fix, because those are the cheapest things to execute. But neither addresses the root question: *does the product move a value primitive the user cares about?*

Reserve's case is a reminder that a premium product has to earn its premium — not through branding, not through placement in the UI, but by moving a primitive its free alternative cannot. And for Reserve, the only credible candidate is supply certainty with a real guarantee.

The harder discipline was sitting with the supply-side constraint. It would have been more satisfying to propose a full product rollout. But a guarantee without the driver-side infrastructure to back it up isn't a product — it's a liability. Phasing the rollout to dense corridors first, with a clear gate before expansion, was the honest answer.

**Closing quote** (Anthropic Serif, 36px, weight 500, line-height 1.30, `Coral Accent #d97757`, centered, max-width 720px):
*"Users don't pay for features. They pay to stop worrying."*

---

## 8. Page Footer

**Section treatment:** Thin Parchment strip, Border Cream top, Stone Gray text.

Left side (Anthropic Sans, 14px, `Stone Gray`): *Uber Reserve · Product Case Study · 2026*
Right side (Anthropic Sans, 14px, `Stone Gray`): *Built by Sujit · <link to LinkedIn> · <link to other projects>*

---

## Agent Build Notes

### Critical reminders for the AI builder
1. **Never introduce cool grays.** Every neutral must carry a yellow-brown undertone. Use `#5e5d59`, `#87867f`, `#4d4c48` — never `#666666` or `#94a3b8`.
2. **All serif headings at weight 500.** No 600, no 700, no 400.
3. **Page background is always `Parchment #f5f4ed`** on light sections. Cards are `Ivory #faf9f5`.
4. **Use ring shadows for interactive depth.** Pattern: `0px 0px 0px 1px #e8e6dc` or `0px 0px 0px 1px #d1cfc5`. No heavy drop shadows.
5. **Terracotta `#c96442` is reserved for primary CTAs, left-border accents on light sections, and brand moments.** Not for decorative use across body text.
6. **Tables need breathing room.** 14–18px vertical padding per row, Border Cream (light) or Border Dark (dark) horizontal dividers only, no zebra stripes.
7. **Alternate sections follow this dark-section map:** Sections 4 (JTBD), 6 intro + 6.1 + 6.2 (Proposed Improvement), and 7 (Reflection) are `Deep Dark #141413`. All others are Parchment.
8. **Body line-height ≥ 1.60** on all prose. This is a reading experience.
9. **Coral Accent `#d97757`** is used for stat numbers and section labels on dark sections (reads better against near-black than Terracotta). Terracotta `#c96442` is for CTAs, left-border accents, and stat numbers on light sections.
10. **The "Refined Job" callout in Section 4** is the emotional centerpiece of the case study — give it visual weight with the Coral left-border, larger serif type, and extra padding (32px+).
11. **Stage/segment cards (Sections 5.1, 6.1)** use a `4px solid` left-border accent (Terracotta on light, Coral on dark) to create a visual rhythm distinct from the standard bordered cards.
12. **The Primitive Audit table (3.1)** and the Alternatives table (6.2) are structurally identical but live on different backgrounds (Parchment / Deep Dark). Do not use Border Cream on dark or Border Dark on light — match border token to section theme.
13. **The pull-quote in Section 2** and the closing quote in Section 7 anchor the page emotionally. Both use italic serif at larger sizes — don't demote them to body text.
14. **Hypothesis and Root Cause callouts** (Sections 3.2, 4, 6) all share the same pattern: serif body at 20–25px, left-border 4px, uppercase 12px label in brand color. Keep this consistent — these are the analytical anchors of the case.

### Responsive behavior
- Desktop (992px+): multi-column grids, full tables, 64px hero headline.
- Tablet (768–991px): 2-column grids, condensed tables, 52px hero.
- Mobile (<768px): single-column stack, 36px hero, hamburger nav. Tables scroll horizontally inside a Warm Sand `#e8e6dc` container on Parchment sections or Dark Surface `#30302e` container on Deep Dark sections.

### Section map at a glance
| # | Title | Background |
|---|---|---|
| 1 | Hero | Parchment |
| 2 | TL;DR | Parchment |
| 3 | Part 1 — First Principles | Parchment |
| 4 | Part 2 — Jobs to Be Done | Deep Dark |
| 5 | Part 3 — User Research | Parchment |
| 6 | Part 4 — Proposed Improvement (intro + 6.1 + 6.2) | Deep Dark |
| 6.3 | Success Metrics | Parchment |
| 6.4 | What Has to Be True | Parchment |
| 6.5 | Expected Outcome | Parchment |
| 7 | Reflection | Deep Dark |
| Footer | — | Parchment |
