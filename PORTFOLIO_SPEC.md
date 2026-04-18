# Portfolio — Build Spec

**Owner:** Sujit Kumar Sahu
**Reader:** Designer or AI build agent executing the site
**Scope:** Content, information architecture, user flow, and layout intent. All visual decisions (color, typography, motion, spacing tokens, photography treatment) are handled by a separate design system and are out of scope for this document.

---

## 1. Positioning summary

**Audience.** Recruiters and hiring managers evaluating the owner for Product Manager roles. He is open to any PM role; the strongest fit is fintech and payments companies, where his domain proof is most concentrated.

**Positioning.** A product-oriented operator at a payments bank, moving into PM. He currently runs a distribution territory at Airtel Payments Bank and has done banking product rotation work (MSME lending, OCEN/ONDC feasibility, corporate alliances). Alongside the day job he ships independent products and produces rigorous PM case work. The fintech knowledge is grounded, not theoretical.

**What the recruiter should believe after 60 seconds,** in order of priority: (1) this person thinks like a PM, (2) ships real things, (3) has real fintech domain depth, (4) is AI-fluent. The site's hierarchy must reinforce this ordering.

**Primary CTA.** Direct email to `0sujit0@gmail.com`. One action, one conversion point. LinkedIn is a secondary social-proof link, not the conversion target. No contact form, no calendar embed.

**Positioning note on copy.** The word "aspiring" is intentionally avoided. The site frames the PM transition as in-motion, not hypothetical, and lets the work do the claiming.

---

## 2. Sitemap / information architecture

Single-page site with smooth-scroll anchor navigation. Five main sections. Project cards link out to standardized detail pages hosted at separate routes on the same domain.

```
/                             # Main page, single scroll
  #hero
  #about
  #experience
  #projects
  #contact

/projects/{slug}              # Individual project detail pages
  e.g. /projects/badcode
       /projects/nykaa-fashion-conversion
       /projects/momentum
       /projects/uber-reserve
       ...

/resume.pdf                   # Static PDF, linked from Hero + Contact + nav
```

The Writing/Content section was considered and cut — the owner's published content does not warrant a dedicated site section at this stage and would dilute focus.

---

## 3. User flow

The recruiter's journey is linear and designed for a ~60–120 second first pass with optional deep dives.

They land on the Hero and within three seconds know the name, the positioning, and that the primary action is to email. If they're convinced early, they email and exit — the sticky nav's "Email me" button makes that possible from anywhere on the page. If they want more, they scroll into About and read two paragraphs that reconcile the non-linear career path into a coherent narrative. By the time they reach Work Experience they're looking for verification, and they find it — Airtel titles, specific outcomes with numbers, the PwC × World Bank internship as a credibility anchor.

Projects is where the recruiter spends the most time. The Featured tier surfaces the two strongest assets (Badcode, Nykaa) at larger size so that even a pure skimmer walks away with those two impressions. Readers who want more drop into the Independent builds tier, and specialist readers — a fintech recruiter, an AI-first recruiter — use the tag filters on the PM case studies tier to narrow. Most recruiters click into one or two detail pages. At the bottom of each detail page, a "Next project →" link captures the attention of anyone who would otherwise bounce back.

The journey ends at Contact, which repeats the primary CTA. Anyone who scrolled the whole page has two conversion opportunities — the Hero CTA and the Contact CTA — plus the always-visible nav button.

---

## 4. Section-by-section breakdown

### 4.1 Navigation (sticky, always visible)

**Purpose.** Keep the primary CTA one click away at any scroll depth, and let the recruiter jump between sections without scrolling linearly.

**Content.** Left: owner's name or a simple mark (final treatment deferred to design). Center or right: anchor links to About, Experience, Projects, Contact. Right: a small "Email me" button that triggers `mailto:0sujit0@gmail.com`.

**Mobile behavior.** Collapses to a hamburger menu. The "Email me" button remains visible in the collapsed bar — it should not hide behind the hamburger.

**Rationale.** A portfolio where the conversion action requires scrolling back to the top or all the way down costs conversions. The nav button is the single most important IA decision for capturing fast-moving recruiters.

---

### 4.2 Hero

**Purpose.** In three seconds, communicate who the owner is, what he does, and what action to take. Nothing else.

**Content blocks.**
- Owner's name, prominent.
- Main positioning line. Direction: claim-first, punchy, avoids "aspiring." Working example for the builder to tune: *"Product-oriented operator at a payments bank. Moving into PM."* Final wording to be refined by the owner.
- Supporting subline, one sentence of context. Direction: names the day job and the side-build motion, concretely. Working example: *"Zonal Manager at Airtel Payments Bank, shipping AI products and PM case work on the side."*
- Primary CTA button: **Email me** → `mailto:0sujit0@gmail.com`
- Secondary links (smaller, less visual weight than the primary CTA): LinkedIn, Resume (PDF download).

**Layout intent.** Hero should resolve within a single viewport on desktop and mobile — the recruiter should not have to scroll to see the CTA. Generous whitespace around the positioning line; the line is the thing they're reading.

**Rationale.** Every Hero element earns its place by doing one specific job. Name: identity. Main line: claim. Subline: context that prevents misinterpretation of the claim. CTA: the action. Secondary links: escape hatches for recruiters who want to verify on LinkedIn or save the resume before reading further.

---

### 4.3 About

**Purpose.** Close the "why is this person in sales applying for PM roles?" question before the recruiter has to wonder. The non-linear career path becomes an asset, not a liability, through deliberate framing.

**Content blocks.** Two paragraphs and a photo.

**Paragraph 1 — What he does and what he's been building, in one breath.** Collapses the Airtel role and the builder side into a single coherent operator picture. Names the specifics — distribution, field ops, financial services, BBPS/AePS/DMT product mechanics — so the claim of fintech depth is grounded in vocabulary, not vibe. Then pivots inside the same paragraph to the work built alongside the job: shipped products (Badcode), independent specs (Momentum, workflows), and structured PM case work.

**Paragraph 2 — Why PM, why now.** One paragraph that connects paragraph 1 to the transition. The operator sees problems from the distribution ground; the builder wants to solve them structurally, not territory by territory. That's the PM instinct being named.

**Photo.** Included. Placement and treatment deferred to design system.

**Copy direction.** Direct, specific, confident. Not effusive. No resume-like bullet lists — this is prose, and it reads like someone who thinks clearly. Company names stay out of About; they live in Experience. About should feel like a thesis, not a CV.

**Rationale.** Recruiters reading a non-standard profile (sales → PM) form assumptions in the absence of a story. A two-paragraph About supplies that story without bloat. Two paragraphs is long enough to do the work, short enough that the recruiter actually reads it.

---

### 4.4 Work Experience

**Purpose.** Ground the claims made in Hero and About with verifiable titles, companies, dates, and outcomes. This section is what makes the Projects section believable.

**Content blocks.**

A short opening summary (2–3 lines) orienting the reader to the arc of experience. Direction: *"Three years across fintech operations, banking product strategy, and government-backed strategy consulting."* Tuned by owner.

**Entry 1 — Zonal Manager, Sales & Distribution | Airtel Payments Bank | Jan 2025 – Present.** Two to three outcome-led bullets, pulled from the resume and condensed:
- Owned a ~1,000-retailer network; optimized activation and engagement across the distribution funnel.
- Drove 35% QoQ growth in AEPS transactions (Q2 FY25) via targeted incentive and support models for low-activation retailers.
- Redesigned channel engagement cadence; drove 43% growth in Suraksha sales. Launched 5 new outlets in 3 months for full pincode coverage.

**Entry 2 — Management Trainee | Airtel Payments Bank | Jul 2024 – Dec 2024.** Title stays as-is. Bullets foreground the product-rotation nature of the work:
- Benchmarked MSME lending market and mapped competitor platforms; contributed to product expansion direction.
- Analyzed alternative underwriting models (cash-flow based, GST-linked) to improve credit access for underserved MSMEs.
- Assessed OCEN and ONDC participation feasibility, contributing to early-stage roadmap exploration.
- Identified inefficiencies in corporate alliance workflows and proposed process improvements.

**Entry 3 — Strategy Intern | MSME Dept, Government of Odisha (with PwC) | Apr 2023 – Jun 2023.** Lead with the credibility anchor in the first line.
- Worked on the ₹6,000 Cr RAMP initiative (World Bank × Government of India); conducted field research across 100+ MSMEs in 14 sectors.
- Designed a migration tracking system projected to lift female workforce participation by 20%.
- Conceptualized a digital credit access platform projected to improve loan approval rates by 40% for micro-enterprises.

**Footer block — Education & Certifications.** Small, below the three entries. Education: MBA from XIMB (2024), B.Tech CSE from BPUT (2021). Certifications on the site are a curated subset — the two that matter most to a PM audience: Certified Product Manager (Markacademy / Phoenix Global, 2022) and Lean Six Sigma Green Belt (KPMG, 2022). The full list stays on the resume.

**Layout intent.** Three stacked entries, vertical-timeline feel. Each entry: title on top, company + dates on one line beneath, 2–3 tight outcome bullets. No paragraph prose inside entries. The Education & Certifications footer is visually de-emphasized — smaller type weight, below a subtle divider.

**Rationale.** The resume is substantive and has been undersold by the owner in self-description. This section gives it the space it earns. Outcome-led bullets (35%, 43%, ₹6,000 Cr) are what recruiters read; activity descriptions are what they skip.

---

### 4.5 Projects

**Purpose.** Deliver the evidence. This is what the recruiter came for. Everything before it earns the right to be believed; this is where the proof lives.

**Section intro.** One orienting line above the tiers. Direction: *"Selected projects across shipped products, independent builds, and PM case work."* Tuned by owner.

**Tier 1 — Featured.** Two large cards, side-by-side on desktop, stacked on mobile.

- **Badcode — SQL Learning Platform.** Lead hook direction: *"Shipped browser-based SQL tutor. WebAssembly execution, Supabase auth, GPT-guided hints."* Content on card: title, one-line hook, a headline detail (shipped; architecture decisions named), screenshot thumbnail of the SQL editor. Primary card action: opens `/projects/badcode`. If a deployed URL exists, a secondary "Live demo ↗" link sits on the card alongside the primary action. **Open question for owner:** is there a deployed URL to surface?
- **Nykaa Fashion — Conversion Optimization.** Lead hook direction: *"₹225 Cr GMV leakage diagnosed across 19M non-converting users. 55% RPU lift designed."* Content on card: title, one-line hook, headline metric, screenshot thumbnail (one of the 16 mobile prototype screens). Primary card action: opens `/projects/nykaa-fashion-conversion`.

**Tier 2 — Independent builds.** Labeled sub-band. Medium-sized cards in a grid, text-focused (no required thumbnails — may include if owner has them).

- **Momentum** — human accountability and goal-tracking platform. One-line tagline to be written by owner.
- **Notion study-notes workflow** — reusable AI-assisted system for converting lecture transcripts into structured study notes. One-line tagline to be written by owner.
- **[Placeholder: additional indie builds]** — owner to add any other real builds here. Each follows the same card structure: title, one-line tagline, tags, click-through to detail page.

**Tier 3 — PM case studies.** Labeled sub-band. Tag-filter chips across the top (placeholders until owner finalizes — suggested starter set: *Fintech / AI / Growth / Consumer*, to be refined). Below the chips, a denser grid of smaller cards.

- Uber Reserve — adoption diagnosis for pre-booked rides among urban professionals.
- Blinkit Premium HNI — entry strategy for imported international food brands.
- Blinkit Subscriptions — subscription model for essentials (daily/weekly/monthly).
- Meal Planning Tool — time-and-pantry-aware meal planner, prototyped in Lovable.
- VitaFit — engagement and retention features for an online fitness platform.
- Zomato — OKRs, KPI funnel, and cohort analysis setup for Tier-1 food delivery.
- Twitter (X) — AARRR funnel mapping and growth opportunity prioritization.
- Online Education Recommendations — personalized learning recommendation system across three personas.

**Critical copy direction for Tier 3 cards.** Each card must lead with *the owner's insight or output*, not the assignment framing. A card that says "Imagine you're a PM at Uber..." reads like a coursework prompt and weakens the section. A card that says "Diagnosed the JTBD gap blocking Uber Reserve adoption among urban professionals" reads like the owner's work. The difference is load-bearing.

**Layout intent.**
- Tier 1 cards get the most visual real estate. Screenshots are not decorative — they let a recruiter understand the product in half a second without reading.
- Tier 2 cards are medium. Text-led. Grouped visually so the sub-band reads as its own coherent band.
- Tier 3 cards are smallest. Tag filters only apply to Tier 3. When a tag is active, Tier 3 reflows to show matches only; Tiers 1 and 2 are unaffected.
- All cards across all tiers click through to `/projects/{slug}`.

**Rationale.** The owner has volume across three different *kinds* of work — shipped, self-directed, and rigorous case analysis. Flattening them into one grid would waste the signal. Tiering the section lets the strongest two pieces carry visual weight while preserving the full body of work below for recruiters who want depth.

**Open question.** Standardized structure for the `/projects/{slug}` detail pages is deferred. The owner will define this separately. The main-page card design does not depend on it.

---

### 4.6 Contact

**Purpose.** Convert interest into an email. The final conversion point on the page, designed for zero friction.

**Content blocks.**
- One short line. Direction: *"If something here fits what you're hiring for, I'd like to hear from you."* Tuned by owner.
- Primary CTA button: **Email me** → `mailto:0sujit0@gmail.com?subject=Saw%20your%20portfolio`. The prefilled subject is intentional — it reduces the cognitive cost of starting the email.
- Email address displayed as plain text next to the button, for recruiters who prefer to copy.
- Secondary inline links: LinkedIn, Resume (PDF download — same file referenced elsewhere).

**No location. No form. No calendar.**

**Layout intent.** Centered, generous vertical space, single column. The CTA is the focal point; nothing competes with it.

**Rationale.** Contact is not a place for creativity. A recruiter who has scrolled this far is either going to email or leave. Every element other than "click to email" is friction. No form because forms fail silently and look generic. No calendar because recruiter-first contact should let the recruiter write the framing. Location is omitted because geographic filtering happens upstream (in the recruiter's ATS, not on the portfolio).

---

## 5. Project detail pages

All project cards click through to routes of the form `/projects/{slug}`. Each detail page includes:

- Back-link to the main portfolio: **← Back to portfolio**, top of page.
- The project's content (structure TBD — open question).
- A **Next project →** link at the bottom, cycling through projects in the order they appear on the main page (Featured → Independent builds → PM case studies).

**Rationale for "Next project →".** Once a recruiter reads one case study, the highest-probability next action is reading another. Making that one click captures attention that would otherwise bounce. "Back to portfolio" stays for the recruiter who wants to pick their own next project.

**Open question.** The standardized internal structure of the detail page (what sections, in what order, what content blocks) is deferred. The owner will define this before detail pages are built.

---

## 6. Edge cases & secondary flows

**Mobile IA.** Single-column stack across the page. Hamburger nav on scroll, with the "Email me" button remaining visible in the collapsed nav bar. Tier 1 featured cards go full-width and stack vertically instead of sitting side-by-side. Tier 3 tag-filter chips become horizontally scrollable. No mobile-specific content is cut — everything desktop shows, mobile shows.

**Deep-linking.** Each main-page section has a URL hash: `/#about`, `/#experience`, `/#projects`, `/#contact`. A link shared directly to `/#projects` lands at Projects with the full page still scrollable above and below. Detail pages are stable routes the owner can share directly — `/projects/badcode` should not require a visitor to first load the main page.

**Empty / missing states.**
- Project cards without a live deployment: do not show a "Live demo" button. Show only "Case study →".
- Featured cards without a screenshot yet: fall back to a text-only treatment surfacing the hook and headline metric. Do not render a broken-image placeholder.
- Tag filters on Tier 3 with zero matches: show a small empty-state line ("No case studies match this filter yet") rather than collapsing the band silently.

**Resume file.** One canonical PDF, hosted at `/resume.pdf`. Referenced from Hero, Contact, and nav. Filename for download should be clean — `Sujit-Kumar-Sahu-Resume.pdf` — not the internal naming from the source file.

**Performance, loading, motion.** Out of IA scope. Defer to design system and build.

---

## 7. Out of scope

All items deferred to the design system repository:

- Color palette and theme
- Typography (families, scales, weights)
- Animation, motion, and micro-interactions
- Specific spacing tokens and grid dimensions
- Photography treatment (how the About photo is framed, cropped, or styled)
- Iconography
- Illustrative or decorative elements
- Loading states and performance optimization

This spec defines *what* exists and *why*. It does not define how it looks or feels beyond layout intent.

---

## 8. Open questions

Genuinely unresolved items the owner needs to close before or during build.

1. **Project detail page structure.** What sections each `/projects/{slug}` page contains, in what order. Parked for the owner to define.
2. **Tier 3 tag set.** Final tag chips for the PM case studies filter. Starter suggestion: *Fintech / AI / Growth / Consumer.* Owner to finalize based on which cuts of his work he wants recruiters to be able to isolate.
3. **Additional Tier 2 entries.** Any independent builds beyond Momentum and the Notion study-notes workflow that should appear alongside them.
4. **Hero copy.** Final wording of the main positioning line and the subline. Direction is locked; exact words are owner's call.
5. **Badcode deployed URL.** Whether a live link exists to surface on the Tier 1 card as a secondary action.
6. **About copy.** Final prose for the two paragraphs. Direction and content-arc are locked; exact words are owner's call.

---

## 9. Build order recommendation

For an AI build agent or designer executing this: build the shell first (nav, Hero, Contact) to lock the conversion path, then About and Experience (the credibility spine), then Projects Tier 1 (the two strongest proofs), then Tier 2 and Tier 3 in that order. Project detail pages come after the main page is stable and the detail-page structure (open question #1) is defined.
