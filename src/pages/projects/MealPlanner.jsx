import { ProjectLayout } from '../../components/ProjectLayout'

/* ── Primitives ──────────────────────────────────────────────────── */

function Eyebrow({ children, dark }) {
  return (
    <div className={`text-[10px] font-medium tracking-[1.2px] uppercase mb-5 ${dark ? 'text-coral' : 'text-stone-gray'}`}>
      {children}
    </div>
  )
}

function SectionLight({ children, className = '', id }) {
  return (
    <section id={id} className={`bg-parchment py-24 px-6 md:px-16 ${className}`}>
      <div className="max-w-[960px] mx-auto">{children}</div>
    </section>
  )
}

function SectionDark({ children, className = '', id }) {
  return (
    <section id={id} className={`bg-near-black py-24 px-6 md:px-16 ${className}`}>
      <div className="max-w-[960px] mx-auto">{children}</div>
    </section>
  )
}

function H2Light({ children }) {
  return <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] font-medium leading-[1.20] text-near-black mb-6">{children}</h2>
}

function H2Dark({ children }) {
  return <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] font-medium leading-[1.20] text-ivory mb-6">{children}</h2>
}

function H3({ children, dark }) {
  return (
    <h3 className={`font-serif text-[clamp(20px,2.8vw,32px)] font-medium leading-[1.15] mb-4 ${dark ? 'text-ivory' : 'text-near-black'}`}>
      {children}
    </h3>
  )
}

function BodyLight({ children, className = '' }) {
  return <p className={`text-[17px] leading-[1.60] text-olive-gray ${className}`}>{children}</p>
}

function BodyDark({ children, className = '' }) {
  return <p className={`text-[17px] leading-[1.60] text-warm-silver ${className}`}>{children}</p>
}

function IvoryCard({ children, className = '' }) {
  return (
    <div className={`bg-ivory border border-border-cream rounded-2xl p-7 ${className}`}>{children}</div>
  )
}

function DarkCard({ children, className = '' }) {
  return (
    <div className={`bg-dark-surface rounded-2xl p-7 ${className}`}>{children}</div>
  )
}

function PullQuote({ children, dark, attribution }) {
  return (
    <blockquote className={`border-l-4 border-terracotta rounded-r-2xl p-8 my-8 ${dark ? 'bg-dark-surface' : 'bg-ivory'}`}>
      <p className={`font-serif text-[20px] font-medium leading-[1.30] italic mb-3 ${dark ? 'text-ivory' : 'text-near-black'}`}>{children}</p>
      {attribution && <div className={`text-[14px] ${dark ? 'text-warm-silver' : 'text-stone-gray'}`}>{attribution}</div>}
    </blockquote>
  )
}

function LightCallout({ label, children }) {
  return (
    <div className="bg-ivory rounded-r-2xl border-l-4 border-terracotta p-7 my-8">
      {label && <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-terracotta mb-3">{label}</div>}
      <p className="font-serif text-[17px] font-medium leading-[1.60] text-near-black">{children}</p>
    </div>
  )
}

function DarkCallout({ label, children }) {
  return (
    <div className="bg-dark-surface rounded-r-2xl border-l-4 border-coral p-7 my-8">
      {label && <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-coral mb-3">{label}</div>}
      <p className="font-serif text-[17px] font-medium leading-[1.60] text-ivory">{children}</p>
    </div>
  )
}

function StatCard({ value, label, dark }) {
  return (
    <div className={`rounded-2xl border p-6 ${dark ? 'bg-dark-surface border-dark-surface' : 'bg-ivory border-border-cream'}`}>
      <div className={`font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] mb-2 ${dark ? 'text-coral' : 'text-near-black'}`}>{value}</div>
      <div className={`text-[14px] leading-[1.43] ${dark ? 'text-warm-silver' : 'text-olive-gray'}`}>{label}</div>
    </div>
  )
}

function TableWrapper({ children }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory mt-6 mb-8">
      <table className="w-full text-[14px] text-near-black border-collapse">{children}</table>
    </div>
  )
}

function Th({ children }) {
  return (
    <th className="text-left text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray px-5 py-4 border-b border-border-cream bg-ivory">
      {children}
    </th>
  )
}

function Td({ children, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b border-border-cream text-[14px] leading-[1.55] align-top ${className}`}>
      {children}
    </td>
  )
}

function DarkTableWrapper({ children }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-dark-surface bg-dark-surface mt-6 mb-8">
      <table className="w-full text-[14px] border-collapse">{children}</table>
    </div>
  )
}

function DarkTh({ children }) {
  return (
    <th className="text-left text-[11px] font-medium tracking-[0.12em] uppercase text-warm-silver px-5 py-4 border-b border-[#30302e]">
      {children}
    </th>
  )
}

function DarkTd({ children, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b border-[#30302e] text-[14px] leading-[1.55] text-warm-silver align-top ${className}`}>
      {children}
    </td>
  )
}

function HungryPill() {
  return (
    <span className="font-mono text-[13px] bg-terracotta text-ivory rounded px-2 py-0.5 mx-0.5">HUNGRY?</span>
  )
}

/* ── Sections ──────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="bg-parchment pt-[clamp(80px,12vw,160px)] pb-24 px-6 md:px-16">
      <div className="max-w-[960px] mx-auto">
        <Eyebrow>Product Case Study · Rapid Prototype · 2025</Eyebrow>
        <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.10] text-near-black mb-6 max-w-[840px]">
          Turn your chaos into dinner.
        </h1>
        <p className="text-[20px] leading-[1.60] text-olive-gray max-w-[640px] mb-8">
          An on-demand meal decision app for time-starved Indian urban professionals — because the Sunday meal plan breaks by Wednesday, every time.
        </p>

        <IvoryCard className="border-l-4 border-terracotta rounded-l-none mb-10 max-w-[720px]">
          <p className="font-serif text-[20px] font-medium leading-[1.30] text-near-black italic">
            A dynamic meal planning tool that adjusts to your schedule in real-time, using what you already have — so you can get dinner sorted in 60 seconds instead of scrolling through 50 recipes and ordering Zomato anyway.
          </p>
        </IvoryCard>

        <div className="text-[14px] text-stone-gray mb-10">
          Role: Solo PM + Designer · Timeline: 2 weeks, 2 prototype iterations · Tools: Lovable, Figma, Google Forms, Reddit scrape · Type: PM portfolio case study
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://bon-appetit-bytes.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta text-ivory text-[15px] font-medium rounded-xl px-5 py-3 no-underline transition-opacity duration-200 hover:opacity-90"
          >
            View live prototype →
          </a>
          <a
            href="#solution"
            className="bg-warm-sand text-charcoal-warm text-[15px] font-medium rounded-lg px-5 py-3 no-underline border border-ring-warm transition-colors duration-200 hover:bg-border-cream"
          >
            Jump to the decision →
          </a>
        </div>
      </div>
    </section>
  )
}

function NorthStarSection() {
  return (
    <SectionLight>
      <Eyebrow>The Numbers That Anchor This Project</Eyebrow>
      <H2Light>The numbers that anchor this project</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        This was a rapid prototype, not a launched product. The numbers below are a mix of research inputs and the targets I would hold the MVP to post-launch.
      </BodyLight>

      <TableWrapper>
        <thead>
          <tr>
            <Th>Metric</Th>
            <Th>Value</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td className="font-medium text-near-black w-[220px]">Research sample</Td>
            <Td>12 survey responses (ages 25–45, employed, Indian tier 1–3 cities) + Reddit scrape of r/MealPrepSunday and r/EatCheapAndHealthy</Td>
          </tr>
          <tr>
            <Td className="font-medium text-near-black">Primary persona</Td>
            <Td>The Firefighter — working professional / parent whose schedule is chaotic</Td>
          </tr>
          <tr>
            <Td className="font-medium text-near-black">Core promise</Td>
            <Td>Zero decision friction at 7 PM. <span className="italic">"Tell me what to do in 15 minutes."</span></Td>
          </tr>
          <tr>
            <Td className="font-medium text-near-black">North Star metric (proposed)</Td>
            <Td>% of <HungryPill /> sessions that reach Cook Now tap within 30 seconds</Td>
          </tr>
          <tr>
            <Td className="font-medium text-near-black">Match threshold</Td>
            <Td>≥50% pantry overlap returns a recipe (launch default, tunable post-data)</Td>
          </tr>
          <tr>
            <Td className="font-medium text-near-black border-b-0">Prototype iterations</Td>
            <Td className="border-b-0">v1 (flow validation, 5 screens) → v2 (full product, 18 screens, cooking mode + retention loop)</Td>
          </tr>
        </tbody>
      </TableWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
        <StatCard value="60s" label="Target time from HUNGRY? tap to a decided meal" />
        <StatCard value="≥50%" label="Pantry-match threshold to return a recipe" />
        <StatCard value="18" label="Screens in v2 (from 5 in v1)" />
      </div>
    </SectionLight>
  )
}

function ProblemSection() {
  return (
    <SectionDark id="problem">
      <Eyebrow dark>The Problem, and the Frame That Cracked It</Eyebrow>
      <H2Dark>The problem, and the frame that cracked it</H2Dark>

      <div className="mb-14">
        <H3 dark>The brief</H3>
        <BodyDark className="max-w-[720px]">
          Design a meal planning tool for busy users that helps them organize their week's meals based on time available, dietary preferences, and ingredients they already have. Make it less stressful, more personalized, and easy to adjust.
        </BodyDark>
      </div>

      <div className="mb-14">
        <H3 dark>The T/I/P diagnostic</H3>
        <BodyDark className="max-w-[720px] mb-8">
          Every meal decision is a search for X — one meal — under three strict constraints:
        </BodyDark>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { letter: 'T', label: 'Time', body: 'The available cooking window' },
            { letter: 'I', label: 'Inventory', body: "What's in the kitchen right now" },
            { letter: 'P', label: 'Preferences', body: 'Dietary rules, taste, quality expectations' },
          ].map(({ letter, label, body }) => (
            <DarkCard key={letter} className="flex flex-col gap-2">
              <div className="font-serif text-[52px] font-medium leading-[1.0] text-coral">{letter}</div>
              <div className="font-serif text-[20px] font-medium text-ivory">{label}</div>
              <div className="text-[15px] text-warm-silver">{body}</div>
            </DarkCard>
          ))}
        </div>

        <div className="mt-8 max-w-[720px]">
          <p className="font-serif text-[25px] font-medium leading-[1.30] text-ivory">
            Most apps try to solve all three at once and end up being mediocre at each. The sharper move is to identify which constraint is the bleeding-neck pain for a specific user, and optimize for that dominant axis first.
          </p>
        </div>
      </div>

      <div className="mb-14">
        <H3 dark>Three archetypes, three different dominant constraints</H3>

        <DarkTableWrapper>
          <thead>
            <tr>
              <DarkTh>Archetype</DarkTh>
              <DarkTh>Dominant axis</DarkTh>
              <DarkTh>Problem</DarkTh>
              <DarkTh>Success metric</DarkTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <DarkTd className="font-medium text-ivory w-[200px]">The Firefighter — corporate professional / working parent</DarkTd>
              <DarkTd className="text-coral font-medium">Time</DarkTd>
              <DarkTd>Rigidity leads to abandonment. Sunday's plan is broken by Wednesday. Guilt, takeout, wasted groceries.</DarkTd>
              <DarkTd>Zero decision friction at 7 PM</DarkTd>
            </tr>
            <tr>
              <DarkTd className="font-medium text-ivory">The Supply Chain Manager — pragmatic user who hates wasting food</DarkTd>
              <DarkTd className="text-coral font-medium">Inventory</DarkTd>
              <DarkTd>Inventory blindness. They have the components but lack the assembly instructions.</DarkTd>
              <DarkTd>Empty fridge at week's end; zero waste</DarkTd>
            </tr>
            <tr>
              <DarkTd className="font-medium text-ivory border-b-0">The Health Optimizer — gym-goer or restrictive dieter</DarkTd>
              <DarkTd className="text-coral font-medium border-b-0">Preferences</DarkTd>
              <DarkTd className="border-b-0">Cognitive load. More time searching for the right recipe than cooking.</DarkTd>
              <DarkTd className="border-b-0">Hitting nutritional goals with minimal admin</DarkTd>
            </tr>
          </tbody>
        </DarkTableWrapper>
      </div>

      <div className="mb-14">
        <H3 dark>The core insight — the Tuesday Problem</H3>
        <p className="font-serif text-[clamp(20px,2.5vw,36px)] font-medium leading-[1.30] text-ivory max-w-[720px] mb-8">
          From the Reddit scrape, one theme dominated the "why I quit meal-planner apps" thread. Users quit not because the recipes were bad, but because the planning model assumed a week that never happens.
        </p>

        <PullQuote dark attribution="— r/MealPrepSunday user">
          "The automation shouldn't dictate what we eat… our daily routines hardly stayed the same for more than a few months."
        </PullQuote>

        <PullQuote dark attribution="— r/EatCheapAndHealthy user">
          "I'm good with leftovers… but the app makes me plan 4 meals every single day."
        </PullQuote>

        <DarkCallout>
          People quit because the app made them feel like a failure when they skipped a meal. The insight that reframed the whole product: the answer isn't a better weekly calendar. <strong className="text-coral">The answer is removing the calendar entirely for the emergency use case.</strong>
        </DarkCallout>
      </div>

      <div>
        <H3 dark>The decision — Firefighter first, Supply Chain Manager as enabler</H3>
        <BodyDark className="max-w-[720px] mb-8">
          I picked the Firefighter over the other two for three reasons:
        </BodyDark>

        <div className="flex flex-col gap-5 mb-8">
          {[
            { n: '1', heading: 'Highest abandonment risk', body: 'Time-starved users churn fastest. Face them with 50 recipes at 7 PM and they close the app and order takeout. If we can\'t solve the 15-minute emergency, we lose them forever.' },
            { n: '2', heading: 'Universality', body: "Everyone experiences time pressure. Not everyone obsesses over food waste. Time is the universal entry point into the category." },
            { n: '3', heading: 'Immediate value perception', body: '"Get dinner sorted in 60 seconds" is tangible. Waste reduction is delayed gratification — the win comes days later.' },
          ].map(({ n, heading, body }) => (
            <DarkCard key={n} className="flex gap-6">
              <div className="font-serif text-[32px] font-medium leading-[1.0] text-coral flex-shrink-0">{n}</div>
              <div>
                <div className="font-serif text-[20px] font-medium text-ivory mb-2">{heading}</div>
                <div className="text-[15px] text-warm-silver">{body}</div>
              </div>
            </DarkCard>
          ))}
        </div>

        <BodyDark className="max-w-[720px]">
          The Supply Chain Manager isn't ignored — she's the critical enabler. The 15-minute guarantee only works if the app knows your pantry. Inventory isn't a competing feature; it's the engine that powers Speed. The Health Optimizer gets deferred — lowest user overlap with the Firefighter, requires a separate data model (nutrition DB), and would dilute the core promise.
        </BodyDark>
      </div>
    </SectionDark>
  )
}

function ResearchSection() {
  return (
    <SectionLight id="research">
      <Eyebrow>Research · Primary + Secondary</Eyebrow>
      <H2Light>How I listened</H2Light>

      <div className="mb-14">
        <H3>Method — triangulated, not definitive</H3>
        <BodyLight className="max-w-[720px] mb-8">
          I deliberately combined three weak-but-independent sources rather than over-trusting any one. Each has a known limit; convergence across them is what gave me confidence to make the archetype call.
        </BodyLight>

        <TableWrapper>
          <thead>
            <tr>
              <Th>Source</Th>
              <Th>What I got</Th>
              <Th>Known limit</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td className="font-medium text-near-black w-[180px]">Google Form survey (n=12)</Td>
              <Td>Ages 25–45, employed, Indian tier 1–3 cities — directional signal on frustration and churn frequency</Td>
              <Td>Sample too small for statistical claims — explicitly called out</Td>
            </tr>
            <tr>
              <Td className="font-medium text-near-black">Individual conversations</Td>
              <Td>Texture on why people abandon plans mid-week — the emotional logic of "I'll cook Tuesday"</Td>
              <Td>Selection bias — friends and peers in my network</Td>
            </tr>
            <tr>
              <Td className="font-medium text-near-black border-b-0">Reddit scrape</Td>
              <Td className="border-b-0">Churn language from people who actually quit meal-planning apps</Td>
              <Td className="border-b-0">Self-selected vocal minority</Td>
            </tr>
          </tbody>
        </TableWrapper>
      </div>

      <div className="mb-14">
        <H3>What I heard — the convergent signal</H3>
        <BodyLight className="max-w-[720px] mb-8">
          Across all three sources, one theme recurred: the rigidity of weekly meal plans breaks on contact with real life.
        </BodyLight>

        <IvoryCard className="mb-5">
          <div className="text-[11px] font-medium tracking-[0.5px] uppercase text-stone-gray mb-4">From the Survey · Directional · N=12</div>
          <ul className="flex flex-col gap-3">
            <li className="text-[15px] leading-[1.60] text-olive-gray">The most frequently cited frustration was <span className="italic">"not deciding what to cook in time"</span> and <span className="italic">"not knowing how to turn what I already have into a meal."</span></li>
            <li className="text-[15px] leading-[1.60] text-olive-gray">Ordering takeout despite having groceries at home was reported 1–5 times per week by the majority of respondents.</li>
            <li className="text-[15px] leading-[1.60] text-olive-gray">The most energy-draining part of cooking was lack of clarity on what to make with existing ingredients — not the cooking itself.</li>
          </ul>
        </IvoryCard>

        <IvoryCard className="mb-5">
          <div className="text-[11px] font-medium tracking-[0.5px] uppercase text-stone-gray mb-4">From Reddit · The Sharpest Quotes</div>
          <PullQuote>
            "The automation shouldn't dictate what we eat… our daily routines hardly stayed the same for more than a few months."
          </PullQuote>
          <PullQuote>
            "I'm good with leftovers… but the app makes me plan 4 meals every single day."
          </PullQuote>
        </IvoryCard>

        <LightCallout label="Synthesis">
          People don't quit meal planners because the recipes are bad. They quit because the planning model — a Sunday-decided schedule — assumes a week that never happens. By Wednesday, the plan is broken and they feel like they failed the app.
        </LightCallout>
      </div>

      <div className="mb-14">
        <H3>Competitive landscape — the category has a split personality</H3>
        <BodyLight className="max-w-[720px] mb-8">
          The meal-planning app market splits cleanly into two camps, and almost nobody bridges them:
        </BodyLight>

        <TableWrapper>
          <thead>
            <tr>
              <Th>Camp</Th>
              <Th>Examples</Th>
              <Th>Strength</Th>
              <Th>Gap</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td className="font-serif font-medium text-near-black w-[160px]">Pantry trackers</Td>
              <Td>Pantry Check, NoWaste, Out of Milk</Td>
              <Td>Knows what you have</Td>
              <Td>Doesn't tell you what to cook</Td>
            </tr>
            <tr>
              <Td className="font-serif font-medium text-near-black">Recipe / meal planners</Td>
              <Td>Mealime, Paprika, Eat This Much, Plan to Eat</Td>
              <Td>Generates plans & lists</Td>
              <Td>Assumes you'll shop; no pantry awareness</Td>
            </tr>
            <tr>
              <Td className="font-serif font-medium text-near-black border-b-0">Ingredient-to-recipe</Td>
              <Td className="border-b-0">SuperCook, DishGen</Td>
              <Td className="border-b-0">Maps pantry → recipes</Td>
              <Td className="border-b-0">No time filter; no structure; long setup</Td>
            </tr>
          </tbody>
        </TableWrapper>

        <LightCallout label="The category-wide admission">
          Plan to Eat — a category leader — removed their pantry feature entirely. That's not a product failure; it's a category-wide admission that pantry-as-ongoing-database is the wrong frame. The right frame is: <strong>ask at session time, don't track forever.</strong>
        </LightCallout>
      </div>

      <div>
        <H3>My wedge — four things no one combines</H3>
        <BodyLight className="max-w-[720px] mb-8">
          I'm not trying to be a better pantry tracker or a better weekly planner. My product is the only entry that combines four things:
        </BodyLight>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { heading: 'On-demand, not weekly', body: `The ${<HungryPill />} button replaces the Sunday ritual with a 7 PM decision.` },
            { heading: 'Time-constrained query', body: '15 / 30 / 45 min as a hard filter. Mealime and SuperCook don\'t filter by time.' },
            { heading: 'Pantry-as-lightweight-input', body: 'Not an inventory database; I ask "what\'s in there right now" and match against it.' },
            { heading: 'India-first', body: 'Indian recipe library, Blinkit integration for missing ingredients, tier 1–2 pricing and habits.' },
          ].map(({ heading, body }) => (
            <IvoryCard key={heading}>
              <div className="font-serif text-[20px] font-medium text-near-black mb-2">{heading}</div>
              <div className="text-[15px] leading-[1.60] text-olive-gray">{body}</div>
            </IvoryCard>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-8">
          {[
            { versus: 'Against Mealime', line: 'We don\'t plan your week; we solve your night.' },
            { versus: 'Against SuperCook', line: 'We don\'t assume you have 30 minutes to set up a pantry; we assume you have 30 minutes total.' },
            { versus: 'Against Blinkit itself', line: 'We don\'t compete — we complete. When the pantry match fails, Blinkit is the fulfillment layer.' },
          ].map(({ versus, line }) => (
            <IvoryCard key={versus} className="py-4">
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta mb-2">{versus}</div>
              <p className="font-serif text-[17px] font-medium text-near-black">{line}</p>
            </IvoryCard>
          ))}
        </div>
      </div>
    </SectionLight>
  )
}

function SolutionSection() {
  return (
    <SectionLight id="solution">
      <Eyebrow>What I Built</Eyebrow>
      <H2Light>What I built</H2Light>

      <IvoryCard className="border-l-4 border-terracotta rounded-l-none mb-14 max-w-[720px]">
        <p className="font-serif text-[25px] font-medium leading-[1.30] text-near-black">
          A dynamic meal planning tool that adjusts to your schedule in real-time, using what you already have — to save you time and money.
        </p>
      </IvoryCard>

      <div className="mb-14">
        <H3>The four building blocks</H3>

        <div className="flex flex-col gap-6">
          {[
            {
              n: '1',
              heading: 'User Calibration',
              tagline: 'Capture permanent constraints once, apply forever.',
              items: ['Authentication (login / signup)', 'Kitchen Profile (diet type, household size, skill level)', 'Digital Pantry (what\'s currently in stock — a visual grid, not a checklist)'],
              why: 'Without knowing who you are and what you have, we\'re just another recipe app.',
            },
            {
              n: '2',
              heading: 'The Decision Engine',
              tagline: 'Eliminate decision fatigue, return ONE answer.',
              items: ['User taps HUNGRY?', 'Selects time available (15 / 30 / 45 min)', 'System filters recipes by time × pantry overlap (≥50% match threshold)', 'Returns the top match. No scrolling, no grid of options.'],
              why: 'Speed > choice. Remove cognitive load entirely. The Firefighter needs one answer, not ten.',
            },
            {
              n: '3',
              heading: 'Cooking Execution',
              tagline: 'Guide the user from decision to finished meal.',
              items: ['Pre-Cook Checklist (Mise en Place): confirm all ingredients present before committing', 'Cooking Mode: one step per screen, large text, integrated timers with sound + vibration alerts, hands-free navigation'],
              why: 'Getting them to start isn\'t enough. We need completion. A half-cooked abandoned meal is worse than takeout.',
            },
            {
              n: '4',
              heading: 'The Retention Loop',
              tagline: 'Keep the app useful beyond single emergency meals.',
              items: ["Chef's Table: 7-day meal planner, recipe assignment per day", 'Smart Shopping List: auto-generated from planned meals', '"Order on Blinkit" button for missing ingredients', 'Auto Pantry Update: tracks ingredient usage after each cook'],
              why: 'Single-use apps die. The planner + shopping list + Blinkit loop is where the Supply Chain Manager persona re-enters — as enabler, not headline.',
            },
          ].map(({ n, heading, tagline, items, why }) => (
            <IvoryCard key={n} className="shadow-[rgba(0,0,0,0.05)_0px_4px_24px]">
              <div className="font-serif text-[52px] font-medium leading-[1.0] text-terracotta mb-3">{n}</div>
              <h3 className="font-serif text-[clamp(20px,2.5vw,28px)] font-medium text-near-black mb-1">{heading}</h3>
              <p className="font-serif text-[17px] text-olive-gray italic mb-5">{tagline}</p>
              <ul className="flex flex-col gap-2 mb-5 pl-4">
                {items.map(item => (
                  <li key={item} className="text-[15px] leading-[1.60] text-near-black list-disc">{item}</li>
                ))}
              </ul>
              <div className="border-t border-border-cream pt-4">
                <span className="text-[11px] font-medium tracking-[0.5px] uppercase text-stone-gray mr-2">Why</span>
                <span className="text-[15px] text-olive-gray">{why}</span>
              </div>
            </IvoryCard>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <H3>The match threshold — a product decision in a feature bullet</H3>
        <BodyLight className="max-w-[720px] mb-8">
          The Decision Engine returns a recipe if the user's pantry matches ≥50% of the recipe's ingredients. This number is load-bearing and deserves to be called out.
        </BodyLight>

        <TableWrapper>
          <thead>
            <tr>
              <Th>Threshold</Th>
              <Th>Result set</Th>
              <Th>UX</Th>
              <Th>Failure mode</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td className="text-olive-gray">80% match</Td>
              <Td className="text-olive-gray">Narrow</Td>
              <Td className="text-olive-gray italic">"This is almost exactly what I have"</Td>
              <Td className="text-olive-gray">Empty results when pantry is partial; user abandons</Td>
            </tr>
            <tr className="bg-warm-sand">
              <Td className="font-medium text-near-black border-l-4 border-terracotta">50% match (chosen)</Td>
              <Td className="font-medium text-near-black">Balanced</Td>
              <Td className="font-medium text-near-black italic">"I have the base; I might need 2 things"</Td>
              <Td className="font-medium text-near-black">Occasional mid-cook discovery of missing item</Td>
            </tr>
            <tr>
              <Td className="text-olive-gray border-b-0">30% match</Td>
              <Td className="text-olive-gray border-b-0">Wide</Td>
              <Td className="text-olive-gray border-b-0 italic">"Here are 20 options to scroll through"</Td>
              <Td className="text-olive-gray border-b-0">Defeats the no-scrolling promise</Td>
            </tr>
          </tbody>
        </TableWrapper>
      </div>

      <div className="mb-14">
        <H3>Current-state flow</H3>
        <IvoryCard>
          <div className="flex flex-wrap gap-2 items-center text-[14px]">
            {[
              'HOME', 'Tap HUNGRY?', 'Select time', 'RECIPES', 'Cook This',
              'PREFLIGHT', 'Start Cooking', 'COOKING', 'COMPLETION', 'Back to Home'
            ].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="bg-warm-sand text-charcoal-warm rounded-full px-3 py-1 text-[13px] font-medium">{step}</span>
                {i < arr.length - 1 && <span className="text-coral font-medium">→</span>}
              </span>
            ))}
          </div>
        </IvoryCard>
      </div>

      <div>
        <H3>The edges and the cuts</H3>
        <BodyLight className="max-w-[720px] mb-8">
          A Firefighter-optimized product has to degrade well. Here's how it handles the moments that would break a less-considered app:
        </BodyLight>

        <TableWrapper>
          <thead>
            <tr>
              <Th>Edge</Th>
              <Th>What happens today</Th>
              <Th>What it should do</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td className="font-medium text-near-black w-[160px]">Empty pantry</Td>
              <Td className="text-olive-gray italic">"No matches" — worst possible experience</Td>
              <Td>Route to a "Stock my kitchen" Blinkit cart of 5 staples under ₹300, with 3 recipes pre-selected for when it arrives</Td>
            </tr>
            <tr>
              <Td className="font-medium text-near-black">11 PM, Blinkit closed</Td>
              <Td className="text-olive-gray">Missing-ingredient prompts lead to a dead end</Td>
              <Td>Show only 100%-match recipes; hide order flow; surface no-cook options</Td>
            </tr>
            <tr>
              <Td className="font-medium text-near-black">Missing spice at prep time</Td>
              <Td className="text-olive-gray">User commits, then hits the wall during prep</Td>
              <Td>Pre-Cook Checklist catches this, but we need substitute suggestions — not just a red X</Td>
            </tr>
            <tr>
              <Td className="font-medium text-near-black border-b-0">Pantry state drifts from reality</Td>
              <Td className="text-olive-gray border-b-0">Plan to Eat's exact failure mode</Td>
              <Td className="border-b-0">Accept it. We don't track pantry over time. We re-ask at each session. Deliberate design choice, not a limitation.</Td>
            </tr>
          </tbody>
        </TableWrapper>
      </div>
    </SectionLight>
  )
}

function ResultsSection() {
  return (
    <SectionDark id="results">
      <Eyebrow dark>Iteration, Impact, and the Honest Limits</Eyebrow>
      <H2Dark>Iteration, impact, and the honest limits</H2Dark>

      <div className="mb-14">
        <H3 dark>v1 — the flow check</H3>
        <BodyDark className="max-w-[720px] mb-8">
          Built purely to validate the five-screen sequence: onboard → pantry → fridge → meal match → cook. No design polish, no retention loop, no home screen. Just: does the core decision-to-recipe loop make sense end to end?
        </BodyDark>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <DarkCard>
            <div className="font-serif text-[20px] font-medium text-coral mb-4">What v1 got right</div>
            <ul className="flex flex-col gap-3">
              <li className="text-[15px] text-warm-silver leading-[1.60]">Recipe card with <span className="italic">"Kadai Chicken — Perfect Match, you have everything for this"</span> — landed the emotional win I wanted.</li>
              <li className="text-[15px] text-warm-silver leading-[1.60]">Two-stage pantry input (staples first, then fresh) reduced friction vs. a single long list.</li>
            </ul>
          </DarkCard>
          <DarkCard>
            <div className="font-serif text-[20px] font-medium text-[#b53333] mb-4">What v1 got wrong</div>
            <ul className="flex flex-col gap-3">
              <li className="text-[15px] text-warm-silver leading-[1.60]">Onboarding was too wordy — a time-starved user will not read a list of 7 staples at 7 PM.</li>
              <li className="text-[15px] text-warm-silver leading-[1.60]">No home screen = no habit. The Firefighter needs one button, not a screen with options.</li>
              <li className="text-[15px] text-warm-silver leading-[1.60]">Flow ended at "Cook Now" — getting the user to start isn't success. Finishing is.</li>
              <li className="text-[15px] text-warm-silver leading-[1.60]">No second-visit reason. Without a planner and shopping list, Monday's meal doesn't help Tuesday.</li>
            </ul>
          </DarkCard>
        </div>
      </div>

      <div className="mb-14">
        <H3 dark>v2 — the four moves</H3>

        <div className="flex flex-col gap-5">
          {[
            { n: '1', heading: 'Onboarding collapsed into a visual grid', body: '7 text rows → 12 tappable ingredient tiles. Same information, one-third the cognitive load. The goal changed from "capture everything" to "capture enough to unblock the first HUNGRY? tap."' },
            { n: '2', heading: 'HUNGRY? became the home screen', body: 'The single pulsing button is the entire product\'s promise in one object. No nav to learn, no choice architecture to parse. Tap = answer coming. This is the Tuesday Problem made physical.' },
            { n: '3', heading: 'Cooking Mode was added', body: 'One step, one screen, one timer. Large text. Vibrates when the timer ends. Navigates with a single tap. Because the Firefighter is cooking with one hand while answering a work Slack with the other.' },
            { n: '4', heading: "Chef's Table + Shopping List + Blinkit added as the retention surface", body: 'This is where the Supply Chain Manager persona re-enters as enabler: remaining pantry items become next-meal suggestions, and missing ingredients become a one-tap Blinkit order.' },
          ].map(({ n, heading, body }) => (
            <DarkCard key={n} className="flex gap-6">
              <div className="font-serif text-[52px] font-medium leading-[1.0] text-coral flex-shrink-0">{n}</div>
              <div>
                <div className="font-serif text-[20px] font-medium text-ivory mb-2">{heading}</div>
                <div className="text-[15px] text-warm-silver leading-[1.60]">{body}</div>
              </div>
            </DarkCard>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <H3 dark>Impact — hypothesized, not measured</H3>
        <BodyDark className="max-w-[720px] mb-8">
          This was a rapid prototype, not a launched product. Here's the impact framework I'd hold the MVP to post-launch:
        </BodyDark>

        <DarkTableWrapper>
          <thead>
            <tr>
              <DarkTh>Metric</DarkTh>
              <DarkTh>Target</DarkTh>
              <DarkTh>Why this number</DarkTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <DarkTd className="font-medium text-ivory w-[200px]">HUNGRY? → Cook Now tap</DarkTd>
              <DarkTd className="text-coral font-serif text-[18px] font-medium">&lt; 30s</DarkTd>
              <DarkTd>The core promise. If this breaks, nothing else matters.</DarkTd>
            </tr>
            <tr>
              <DarkTd className="font-medium text-ivory">Recipe completion rate</DarkTd>
              <DarkTd className="text-coral font-serif text-[18px] font-medium">&gt; 60%</DarkTd>
              <DarkTd>The retention loop depends on users trusting the 15-min guarantee.</DarkTd>
            </tr>
            <tr>
              <DarkTd className="font-medium text-ivory">Weekly active sessions</DarkTd>
              <DarkTd className="text-coral font-serif text-[18px] font-medium">&gt; 2.5×</DarkTd>
              <DarkTd>Proves the app is more than emergency-only use.</DarkTd>
            </tr>
            <tr>
              <DarkTd className="font-medium text-ivory">Blinkit tap-through on misses</DarkTd>
              <DarkTd className="text-coral font-serif text-[18px] font-medium">&gt; 20%</DarkTd>
              <DarkTd>Turns a failure mode into a fulfillment funnel; unlocks partner revenue.</DarkTd>
            </tr>
            <tr>
              <DarkTd className="font-medium text-ivory border-b-0">Match-threshold quality</DarkTd>
              <DarkTd className="text-coral font-serif text-[18px] font-medium border-b-0">&lt; 10%</DarkTd>
              <DarkTd className="border-b-0">% of 50% matches causing mid-cook abandonment — tells us whether to raise the floor.</DarkTd>
            </tr>
          </tbody>
        </DarkTableWrapper>
      </div>

      <div>
        <H3 dark>Honest limits</H3>
        <BodyDark className="max-w-[720px] mb-8">
          Three things I'd call out to any recruiter reading this:
        </BodyDark>

        <div className="flex flex-col gap-5">
          {[
            { heading: 'No usability testing on v2', body: 'The v1→v2 changes are driven by principles extracted from research, not by watching users fail. A proper next step is a 5-person moderated test with the task "It\'s 7:30 PM, you\'re hungry, get to dinner."' },
            { heading: 'Survey n=12 is directional, not statistical', body: 'I named this limit explicitly in the research section rather than hiding it. The Reddit corroboration is what moves this from "hunch" to "defensible call."' },
            { heading: 'Recipe database is a scale problem I haven\'t solved', body: 'A 15-minute guarantee requires thousands of Indian recipes tagged by time, difficulty, and ingredient profile. The prototype works with a seed set; the real product needs either a partnership (Archana\'s Kitchen, India Food Network) or an LLM-powered generation layer with human review.' },
          ].map(({ heading, body }) => (
            <DarkCard key={heading} className="border-l-4 border-coral">
              <div className="font-serif text-[20px] font-medium text-ivory mb-2">{heading}</div>
              <div className="text-[15px] text-warm-silver leading-[1.60]">{body}</div>
            </DarkCard>
          ))}
        </div>
      </div>
    </SectionDark>
  )
}

function NextStepsSection() {
  return (
    <SectionLight>
      <Eyebrow>What I'd Do Next</Eyebrow>
      <H2Light>What I'd do next</H2Light>

      <H3>If I had another two weeks</H3>

      <div className="flex flex-col divide-y divide-border-cream mb-14">
        {[
          { n: '01', body: 'Run the moderated 5-person test. Fix whatever breaks. Document.' },
          { n: '02', body: 'Build the substitute-suggestion engine — the biggest gap in the Pre-Cook Checklist.' },
          { n: '03', body: 'Instrument the prototype for the five metrics above. Even if "launch" is a friends-and-family beta, the data loop is what turns a case study into a product.' },
          { n: '04', body: 'Reach out to one Indian recipe content partner to validate the database-scale path.' },
        ].map(({ n, body }) => (
          <div key={n} className="flex gap-6 py-5 items-start">
            <div className="font-serif text-[32px] font-medium text-terracotta flex-shrink-0">{n}</div>
            <p className="font-serif text-[20px] font-medium text-near-black leading-[1.30] self-center">{body}</p>
          </div>
        ))}
      </div>

      <div className="bg-ivory rounded-2xl border border-border-cream p-8 max-w-[720px]">
        <H3>See it for yourself</H3>
        <BodyLight className="mb-6">
          The full v2 clickable prototype is live. Tap <HungryPill />, pick a time window, watch the Decision Engine return one answer.
        </BodyLight>
        <a
          href="https://bon-appetit-bytes.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-terracotta text-ivory text-[15px] font-medium rounded-xl px-5 py-3 no-underline transition-opacity duration-200 hover:opacity-90"
        >
          Open live prototype →
        </a>
      </div>
    </SectionLight>
  )
}

/* ── Page ──────────────────────────────────────────────────────────── */

export function MealPlanner() {
  return (
    <ProjectLayout nextProject={{ title: 'Nykaa Fashion — Monetizing Browsing Intent', path: '/projects/nykaa-fashion-conversion' }}>
      <HeroSection />
      <NorthStarSection />
      <ProblemSection />
      <ResearchSection />
      <SolutionSection />
      <ResultsSection />
      <NextStepsSection />
    </ProjectLayout>
  )
}
