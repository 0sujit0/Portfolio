# Design Audit — Portfolio (Claude Theme)
**Auditor:** Claude Sonnet 4.6  
**Date:** 2026-05-04  
**Scope:** All user-facing screens, components, and flows  
**Stack:** React 18 + Vite, Tailwind CSS 3.4, anime.js v4, Lora + DM Sans, lucide-react

---

## Executive Summary

The portfolio has a clear, well-considered aesthetic — warm parchment tones, strong serif/sans pairing, restrained terracotta accent. The design system intent is coherent. However, several issues undermine it in practice: the same ~10 UI primitives are copy-pasted (with drift) across 6 case study files with no shared source; 4 project cards link to non-existent pages; the Resume.pdf download is broken; all project card images are visible placeholders; and the primary CTA button uses two different corner radii across three components. These are not theoretical concerns — they are the first things a hiring manager or recruiter will encounter.

**Priority ranking:** Critical → High → Medium → Low

---

## Screen Inventory

| Screen | File | Status |
|---|---|---|
| Homepage | `src/App.jsx` + 7 section components | Live |
| Nav | `src/components/Nav.jsx` | Live |
| Hero | `src/components/Hero.jsx` | Live |
| About | `src/components/About.jsx` | Live |
| Experience | `src/components/Experience.jsx` | Live |
| Projects | `src/components/Projects.jsx` | Live, 4 dead card links |
| Contact | `src/components/Contact.jsx` | Live, broken Resume link |
| Footer | `src/components/Footer.jsx` | Live |
| Case Study — Nykaa | `src/pages/projects/Nykaa.jsx` | Live (1,597 lines) |
| Case Study — UberReserve | `src/pages/projects/UberReserve.jsx` | Live |
| Case Study — Blinkit | `src/pages/projects/Blinkit.jsx` | Live |
| Case Study — BlinkitSubscription | `src/pages/projects/BlinkitSubscription.jsx` | Live |
| Case Study — Zomato | `src/pages/projects/Zomato.jsx` | Live |
| Case Study — MealPlanner | `src/pages/projects/MealPlanner.jsx` | Live |
| Case Study — Badcode | `src/pages/projects/Badcode.jsx` | Minimal stub |
| Case Study — Momentum | `src/pages/projects/Momentum.jsx` | Stub — placeholder content |
| Dead routes (×4) | vitafit, twitter-x, notion-study-notes, online-education | Fallback placeholder only |

---

## 1. Visual Design & Hierarchy

### 1.1 Typography Scale — No Formal Ramp

The codebase has **14 distinct font sizes** with no documented type scale:

| Size | Usage | Location |
|---|---|---|
| 10px | Eyebrow labels (case studies) | Nykaa.jsx:7 |
| 11px | Tier section labels, table headers | Projects.jsx:91, Nykaa.jsx:110 |
| 12px | Callout labels, education block label | UberReserve.jsx:62, Experience.jsx:102 |
| 13px | Filter pills, date/meta text | Projects.jsx:223, Experience.jsx:27 |
| 14px | Card hooks, table body text | Projects.jsx:247, Nykaa.jsx:116 |
| 15px | Nav links, CTA buttons, builds card body | Nav.jsx:65, Projects.jsx:105 |
| 17px | Body text (workhorse) | About.jsx:13, Hero.jsx:45 |
| 18px | Contact body (`text-lg`) | Contact.jsx:10 |
| 20px | Experience role titles | Experience.jsx:24 |
| 22px | Featured card titles | Projects.jsx:103 |
| 25px | Pull quote text | Nykaa.jsx:52 |
| 26px | Hero subhead (max) | Hero.jsx:41 |
| 28px | Section headings (min), Next Project nav | ProjectLayout.jsx:35 |
| 42–72px | Section h2 max / Hero h1 max | Projects.jsx:82, Hero.jsx:37 |

**Issue:** 14 sizes implies no deliberate scale. The jump from 17px (body) to 20px (experience role) to 22px (card title) to 25px (pull quote) has no harmonic ratio. A 4-step modular scale (e.g. 14 / 17 / 22 / 36 / 52) would reduce this to ~6 intentional sizes.

**Issue:** Contact.jsx:10 uses `text-lg` (Tailwind default: 18px) — the only component using the Tailwind default scale token instead of the explicit `text-[17px]` convention used everywhere else. Inconsistency will grow over time if not locked.

### 1.2 Token Naming Collision

In `tailwind.config.js`:
```js
'warm-sand': '#e8e6dc',   // line 13
'border-warm': '#e8e6dc', // line 15
```

Both tokens map to the **identical hex value** `#e8e6dc`. The semantic intent differs — `warm-sand` is a fill, `border-warm` is a border — but they are interchangeable values. Any future decision to shift one will require a search-and-decide pass across the entire codebase to avoid unintended changes to the other. Consider splitting these to meaningfully different values (e.g. warm-sand could shift to `#e2e0d6` for slightly more saturation) or merging them into one token used for both contexts.

### 1.3 Hardcoded Colors Bypassing the Token System

`Nykaa.jsx:88–90` — The `Pill` component contains inline `style` objects with raw hex values:
```js
const inlineStyles = {
  crimson: { backgroundColor: '#b53333' },
  coral: { backgroundColor: '#d97757' },
}
```

`#d97757` is the `coral` token value — this is a token that already exists but is bypassed. `#b53333` is an undocumented color that exists nowhere else in the design system. Both should be moved to `tailwind.config.js`.

### 1.4 Contrast Ratios — Likely WCAG AA Failures

**`stone-gray` (#87867f) on `parchment` (#f5f4ed):**  
Estimated contrast ratio: ~3.1:1. WCAG AA requires 4.5:1 for normal text. `stone-gray` is used for body text in Hero.jsx:45 (`text-stone-gray`), card meta text, and dates throughout. This likely fails for all body-size usage.

**`olive-gray` (#5e5d59) on `parchment` (#f5f4ed):**  
Estimated contrast ratio: ~5.5:1. Passes AA for body text. This is the workhorse body color and is fine.

**`warm-silver` (#b0aea5) on `near-black` (#141413):**  
Estimated contrast ratio: ~5.8:1. Passes AA. Used for dark section body text. Fine.

**Action:** Test `stone-gray` on `parchment` with a contrast checker. If it fails (likely), darken `stone-gray` to ~`#7a7972` which should pass 4.5:1 while preserving the warm-neutral character.

### 1.5 Visual Hierarchy on Project Cards

Each featured card has: image zone → serif title → body copy → terracotta CTA button. The CTA is appropriately terracotta but styled as a bordered ghost button, not a filled button. This makes it visually lighter than the filled "Email me" button elsewhere on the page. The CTA that matters most (Case study →) has less visual weight than the CTA for contact. If these are true conversion actions, the case study button should command more attention.

---

## 2. Layout & Composition

### 2.1 Three Competing Max-Widths

| Context | Max-width | Source |
|---|---|---|
| Homepage section content | `max-w-[1120px]` | `index.css:16` via `.section-padding` |
| ProjectLayout back-button zone | `max-w-[800px]` | `ProjectLayout.jsx:17` |
| Case study section content | `max-w-[960px]` | `Nykaa.jsx:16`, all 6 case studies |

A visitor reading a case study sees: a narrow back-button at 800px width, then case study content at 960px, with the nav and contact section spanning full width behind a 1120px container. Three unrelated width constraints create subtle misalignments at large viewports. The back button in particular (800px) is noticeably narrower than the case study body content (960px) on the same screen, creating optical left-indent inconsistency.

**Recommendation:** Standardize to two intentional widths — a reading column (800px) for back-button and prose-heavy sections, and a showcase column (1040px or 1120px) for stat grids, tables, and comparison layouts within case studies. Document the rationale.

### 2.2 Five Cards in a Three-Column Grid

`Projects.jsx:94` — Featured grid is `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. With exactly 5 cards, the large viewport renders 3 in row 1 and 2 orphaned in row 2 (columns 1 and 2, column 3 empty). This creates an optically unbalanced layout — the visual center of the grid is to the left.

**Options:**
- Add a 6th card to fill the grid (or remove one to make it 4 in `grid-cols-2`)
- Switch to `lg:grid-cols-[repeat(3,1fr)]` with the last row using `col-span` to center the two remaining cards (CSS subgrid or manual span-2 on a centered wrapper)
- Change to `lg:grid-cols-2 xl:grid-cols-3` to push the 3-col layout to larger viewports where the imbalance is less obvious

### 2.3 Profile Photo Hidden on Mobile

`About.jsx:30` — `className="hidden md:flex ..."`. The profile image disappears entirely on mobile. For a personal portfolio where the photo humanizes the "About" section, this is a notable gap. On mobile, the About section becomes a wall of text with no visual anchor.

**Recommendation:** Show the photo on mobile — full width `aspect-[4/3]` with `object-top` crop, placed above the text. Reserve the 2-column layout for `md:` and above.

### 2.4 Section Spacing Inconsistency

In `Projects.jsx`, the tier label separators use:
- Featured → `mb-5` on label, then grid
- After Featured grid → `mt-16` (line 189) before "Independent Builds" label
- After Builds grid → `mt-16` (line 215) before "PM Case Studies" label

But the section heading block above Featured uses `mb-14`. The result is 14px of bottom margin from the heading into the tier label, but 16px of top margin before the second and third tiers — slightly mismatched rhythm that compounds at narrow viewports.

---

## 3. Interaction & Affordance

### 3.1 CRITICAL — Featured Cards Are Non-Interactive Divs

`Projects.jsx:96, 114, 132, 150, 168` — All 5 featured project cards are `<div>` elements with `onClick` handlers:
```jsx
<div ... onClick={() => window.location.href = '/projects/badcode'}>
```

Each div also contains an `<a href>` for the CTA button — creating two overlapping click paths to the same destination. The outer div is **not reachable by keyboard Tab**; a keyboard user must Tab to the inner anchor, ignoring that the full card is meant to be clickable. Screen readers also won't announce the card as a navigation target.

**Fix:** Wrap the entire card in `<a href="...">` and remove the `onClick`. Or promote the inner anchor to cover the full card with `after:absolute after:inset-0` and make the title/body non-interactive siblings of the absolute anchor.

### 3.2 CRITICAL — Hamburger Button Missing Focus Indicator

`Nav.jsx:81`:
```jsx
className="... focus:outline-none"
```
`focus:outline-none` removes the browser default focus ring with no replacement. The mobile menu toggle is inaccessible to keyboard users — there is no visible indicator that the button has focus. This is a WCAG 2.4.7 violation.

**Fix:** Replace `focus:outline-none` with `focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-1` (or equivalent).

### 3.3 Filter Buttons — Hover Direction Is Backwards

`Projects.jsx:227`:
```jsx
'bg-ivory text-olive-gray border-border-warm hover:border-border-cream hover:opacity-80'
```

On hover, inactive filter buttons transition from `border-warm` (#e8e6dc) to `border-cream` (#f0eee6) — a lighter, more receding border — combined with reduced opacity. The hover state reads as *de-selected* or *disabled*, not as an affordance for interaction. The visual feedback sends the wrong signal.

**Fix:** On hover, the border should become slightly darker/more prominent: change to `hover:border-ring-warm hover:opacity-100`. This uses the already-defined `ring-warm` (#d1cfc5) which is darker than both current border tokens.

### 3.4 Mobile Menu — No Animation

The `Nav` component slides in with an anime.js entrance. The mobile menu overlay at `Nav.jsx:92` appears and disappears with no transition — a jarring cut that is out of character with the rest of the page. The body scroll lock (applied correctly) amplifies this abruptness because the content jumps.

**Fix:** Add a CSS transition to the overlay: `transition-all duration-200 ease-out` with conditional classes for `opacity-0 translate-y-2` (closed) and `opacity-100 translate-y-0` (open). Since the open/close is state-driven, pair with `AnimatePresence`-style conditional rendering or a pure CSS approach.

### 3.5 No Active State for In-View Sections in Nav

As the user scrolls, the nav links (About / Experience / Projects / Contact) do not update to reflect the current section. For a single-page scroll portfolio, this is expected behavior and its absence makes the site feel less polished. An `IntersectionObserver` watching section IDs and toggling an active class on the corresponding nav link would significantly improve wayfinding. The `useScrollReveal` hook is already using IntersectionObserver — this is a small extension.

---

## 4. Consistency

### 4.1 HIGH — Primitive Components Copied Six Times with Drift

Every rich case study page re-defines the same 10–12 primitive components locally. This leads to silent divergence:

**`Eyebrow` component — dark variant broken in UberReserve:**
```jsx
// UberReserve.jsx:7
className={`... ${dark ? 'text-stone-gray' : 'text-stone-gray'}`}
```
Both branches of the ternary are identical — the `dark` prop has no effect. `Nykaa.jsx:7` correctly uses `text-warm-silver` for dark eyebrows. Any case study section using `<Eyebrow dark>` in UberReserve renders with the wrong contrast.

**`H3` size differs across pages:**
```jsx
// Nykaa.jsx:38 — clamp(24px,3vw,32px)
// UberReserve.jsx:38 — clamp(22px,2.8vw,32px)
```
Same element, different minimum and scaling. At 1440px, these produce different rendered sizes.

**`PullQuote` — italic applied inconsistently:**
- `UberReserve.jsx:55` — `italic` class applied
- `Nykaa.jsx:52` — no `italic` class on either light or dark variant

**Resolution:** Extract all shared primitives into a single `src/components/case-study/primitives.jsx` file. All 6 case study pages import from the same source. Drift becomes impossible.

### 4.2 "Email me" CTA — Two Corner Radii

The primary CTA button appears in three places:

| Location | Corner radius | Source |
|---|---|---|
| Nav | `rounded-lg` (8px) | Nav.jsx:76 |
| Hero | `rounded-xl` (12px) | Hero.jsx:52 |
| Contact | `rounded-xl` (12px) | Contact.jsx:17 |

Same text, same color, same font — two different radii. The Nav is the only outlier. Likely a copy-paste timing difference. Fix: update `Nav.jsx:76` to `rounded-xl`.

### 4.3 `.section-dark` Utility Defined but Never Used

`index.css:19–23` defines:
```css
.section-dark { @apply bg-near-black py-24 px-8; }
.section-dark-inner { @apply max-w-[1120px] mx-auto; }
```

But every case study page rolls its own inline dark section:
```jsx
// Nykaa.jsx:21
<section className={`bg-near-black py-24 px-6 md:px-16 ${className}`}>
```

The utility is dead code. Worse, the case study inline version uses `px-6 md:px-16` while the utility hardcodes `px-8` — meaning the utility and the actual implementation have different mobile padding. Delete the dead utilities or fix them and adopt them everywhere.

### 4.4 `section-padding` Uses `px-8` — Overwrites Responsive Padding

`index.css:16`:
```css
.section-padding { @apply py-24 px-8 max-w-[1120px] mx-auto; }
```

`px-8` (32px) is applied at all breakpoints. On mobile (375px) this leaves only 311px of content width — very tight for the About section's multi-paragraph prose. Case study pages take the better approach: `px-6 md:px-16`. The homepage section utility should adopt the same pattern: `px-5 md:px-8`.

---

## 5. Accessibility

### 5.1 No Skip-to-Content Link

There is no skip-to-main-content link in `index.html` or `App.jsx`. Keyboard users must Tab through all 5 nav items + the CTA button before reaching any page content. This is a WCAG 2.4.1 failure.

**Fix:** Add as the first element in the DOM:
```html
<a href="#hero" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-terracotta focus:text-ivory focus:rounded-lg">
  Skip to content
</a>
```

### 5.2 Featured Project Cards — Not Keyboard Accessible

Covered in §3.1. Keyboard users cannot reach featured project pages because the card wrapper is a `<div>` with `onClick`. Tab navigation will jump to the inner "Case study →" anchor, bypassing the intended whole-card interaction model.

### 5.3 Mobile Menu — No Focus Trap

When the mobile menu opens, Tab navigation will continue through the content behind the overlay rather than cycling through the 4 nav links + close button. A user who opens the menu and begins Tabbing may exit the menu accidentally without realizing they're navigating content below it. Implement a focus trap using `inert` attribute on the background content, or a small manual trap.

### 5.4 No ARIA on Mobile Menu State

`Nav.jsx:80–86`:
```jsx
<button className="..." onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
```

`aria-label="Toggle menu"` is present (good) but there is no `aria-expanded` attribute. Screen readers cannot announce whether the menu is open or closed.

**Fix:** Add `aria-expanded={isOpen}` to the button.

### 5.5 About Section — Profile Image Not Visible on Mobile

`About.jsx:30` — `hidden md:flex` hides the photo completely on mobile. This isn't directly an accessibility issue, but the image has `alt="Sujit Sahu"` and providing contextual imagery for sighted users on all device sizes is part of inclusive design.

### 5.6 Landmark Regions — Wrapped Sections

`About.jsx` and `Projects.jsx` both wrap their `<section>` in an outer `<div>` that applies the background and border:
```jsx
<div className="bg-ivory border-y border-border-cream">
  <section id="about" ...>
```

The outer `<div>` carries only visual styling; the `<section>` inside has the correct landmark role and ID. This is semantically fine, but the heading elements inside (`<h2>` in About, Experience, Projects) are not associated with a `role="region"` label. Adding `aria-labelledby` referencing the heading ID would improve screen reader navigation.

---

## 6. User Flow & Information Architecture

### 6.1 CRITICAL — Four Dead Project Cards

`Projects.jsx` PM Case Studies section links to:
- `/projects/vitafit` → fallback placeholder
- `/projects/twitter-x` → fallback placeholder
- `/projects/notion-study-notes` → fallback placeholder
- `/projects/online-education` → fallback placeholder

A recruiter clicking any of these hits a dead end with no content. These cards are visible to every portfolio visitor. **Either remove these cards or add a clear "Coming soon" treatment** so the intent is explicit rather than appearing as a broken page.

### 6.2 CRITICAL — Resume.pdf Missing

Both `Hero.jsx:68` and `Contact.jsx:36` link to `/Resume.pdf` with `download` attributes. The file does not exist in `/public`. Every click downloads a 404 response instead of the resume. This is a direct hiring-flow failure.

**Fix:** Add the resume file to `/public/Resume.pdf`.

### 6.3 HIGH — All Featured Project Card Images Are Visible Placeholders

All 5 featured cards show:
```
[Warm sand box with: "Badcode — Screenshot placeholder"]
```

For a portfolio presenting PM work, the absence of any visual for the products is a missed opportunity — but the explicit placeholder text communicates incompleteness rather than intentional restraint. Options in order of preference:
1. Replace with actual screenshots, mockup frames, or designed key metric illustrations
2. Replace the placeholder text with a project-color background or abstract pattern
3. Remove the image zone entirely and use a taller text card layout

### 6.4 Momentum Case Study Is Incomplete

`/projects/momentum` exists in the route table and as a featured card in the "Independent Builds" section, but the page has stub/placeholder content. A visitor who clicks it sees an incomplete page. Either complete the content or unlink the card.

### 6.5 No Navigation State for In-View Section

As covered in §3.5, there is no active/current section indicator in the nav. At 1440px with the full-page layout, a user who scrolls to Experience has no visual confirmation that the nav represents their current position. The "About / Experience / Projects / Contact" links appear identical regardless of scroll position.

### 6.6 "Back to Portfolio" Navigation Placement

`ProjectLayout.jsx:18` — The "← Back to portfolio" link sits above the case study content in a `max-w-[800px]` container. This is the correct placement for a left-aligned back control. However, the link navigates to `/#projects` (which scrolls to the projects section on the homepage) rather than simply navigating back. If a user landed on the case study from Google or a direct link, `/#projects` will load the homepage and scroll — which is reasonable. If they hit the browser back button, they'll return to their actual scroll position. The design choice is acceptable but worth documenting.

---

## 7. Performance-Adjacent Design Choices

### 7.1 Google Fonts — No `preconnect`

`index.html` links Google Fonts without resource hints. The browser must wait until the HTML is parsed to discover the external font origin, then open a new connection.

**Fix:** Add before the font `<link>` tags:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```
This reduces first-font-byte latency by one round-trip.

### 7.2 Profile Image — No Dimensions, No srcset, No Format Optimization

`About.jsx:31`:
```jsx
<img src="/profile.png" alt="Sujit Sahu" className="w-full h-full object-cover" />
```

- No `width` / `height` attributes → browser cannot reserve layout space → causes Cumulative Layout Shift (CLS) as the image loads
- PNG format for a portrait photo → WebP would typically be 40–60% smaller at equal quality
- No `srcset` → mobile devices download the same full-size image as desktop
- No `loading="lazy"` → but this is above the fold so eager loading is correct

**Fix:** Convert to WebP, add explicit dimensions matching the aspect-[3/4] container, add `decoding="async"`.

### 7.3 anime.js v4 for Simple Fade Animations

The Hero entry animation is a staggered translateY + scale + opacity — achievable with CSS `@keyframes` and `animation-delay`. anime.js v4 adds a dependency (~15kb min+gzipped) for effects that CSS can handle natively. The scroll-reveal effects (which require IntersectionObserver timing) are more justified. Consider replacing the Hero-local anime.js usage with CSS keyframes to cut one dependency from the critical path.

---

## Prioritized Fix List

### Critical (fix before sharing with recruiters)

| # | Issue | File | Fix |
|---|---|---|---|
| C1 | Resume.pdf missing | `/public/` | Add the file |
| C2 | 4 dead project card links | Projects.jsx | Remove cards or build pages |
| C3 | Featured cards not keyboard-accessible | Projects.jsx:96–184 | Replace `div+onClick` with `<a href>` |
| C4 | Missing focus indicator on hamburger | Nav.jsx:81 | Replace `focus:outline-none` with `focus-visible:ring-2` |

### High

| # | Issue | File | Fix |
|---|---|---|---|
| H1 | Primitive drift across 6 case study pages | All `pages/projects/*.jsx` | Extract to `src/components/case-study/primitives.jsx` |
| H2 | Eyebrow dark variant broken in UberReserve | UberReserve.jsx:7 | Change `text-stone-gray` to `text-warm-silver` in dark branch |
| H3 | All featured card images are visible placeholders | Projects.jsx | Replace with real assets or remove image zone |
| H4 | stone-gray contrast on parchment likely fails WCAG AA | tailwind.config.js | Darken to ~`#6e6d66` or swap uses to olive-gray |
| H5 | Momentum page is stub | Momentum.jsx | Complete or unlink |
| H6 | Mobile menu has no focus trap | Nav.jsx | Add `inert` or manual focus trap |

### Medium

| # | Issue | File | Fix |
|---|---|---|---|
| M1 | Three competing max-widths | index.css, ProjectLayout.jsx, case study files | Normalize to two intentional widths |
| M2 | Email me CTA: two corner radii | Nav.jsx:76 | Change to `rounded-xl` |
| M3 | `.section-dark` utility dead code | index.css:19–23 | Delete or adopt consistently |
| M4 | Filter button hover direction backwards | Projects.jsx:227 | Change `hover:border-border-cream` to `hover:border-ring-warm` |
| M5 | `warm-sand` and `border-warm` identical tokens | tailwind.config.js:13–15 | Separate values or merge |
| M6 | PullQuote italic inconsistent | Nykaa.jsx:52, UberReserve.jsx:55 | Standardize in shared primitives |
| M7 | No skip-to-content link | index.html | Add sr-only skip link |
| M8 | `aria-expanded` missing on mobile menu button | Nav.jsx:80 | Add `aria-expanded={isOpen}` |
| M9 | Profile photo hidden on mobile | About.jsx:30 | Show photo on mobile with full-width layout |
| M10 | 5 cards in 3-column grid — orphaned last row | Projects.jsx:94 | Add 6th card, or change to 2-column featured |
| M11 | No active nav state on scroll | Nav.jsx | Add IntersectionObserver-driven active class |

### Low

| # | Issue | File | Fix |
|---|---|---|---|
| L1 | Hardcoded colors in Pill component | Nykaa.jsx:88–90 | Move to tailwind.config.js tokens |
| L2 | `px-8` in `.section-padding` not responsive | index.css:16 | Change to `px-5 md:px-8` |
| L3 | Mobile menu overlay — no animation | Nav.jsx:92 | Add transition classes |
| L4 | `text-lg` in Contact instead of `text-[17px]` | Contact.jsx:10 | Change to `text-[17px]` |
| L5 | H3 min size differs across pages (24 vs 22px) | Nykaa.jsx:38, UberReserve.jsx:38 | Standardize in shared primitives |
| L6 | Google Fonts missing preconnect | index.html | Add `<link rel="preconnect">` hints |
| L7 | Profile image: no dimensions, PNG format | About.jsx:31, public/ | Convert to WebP, add width/height |
| L8 | 14 font sizes — no formal type ramp | All files | Reduce to 6-step modular scale |
| L9 | Tier label spacing inconsistency | Projects.jsx:189, 215 | Normalize `mt-` values |

---

## Token Quick Reference (Current State)

```
Backgrounds:  parchment #f5f4ed  ivory #faf9f5  near-black #141413  dark-surface #30302e
Text:         near-black #141413  charcoal-warm #4d4c48  olive-gray #5e5d59  stone-gray #87867f  warm-silver #b0aea5
Borders:      border-cream #f0eee6  border-warm #e8e6dc [= warm-sand]  ring-warm #d1cfc5
Accent:       terracotta #c96442  coral #d97757
```

**Tokens that need attention:**
- `warm-sand` = `border-warm` (same hex, different semantic name)
- `coral` (#d97757) bypassed via inline style in Nykaa.jsx
- `#b53333` (crimson pill in Nykaa) has no token
