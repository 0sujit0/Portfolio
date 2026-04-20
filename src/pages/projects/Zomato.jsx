import { ProjectLayout } from '../../components/ProjectLayout'

/* ─── Reusable primitives ──────────────────────────────────────────── */

function Eyebrow({ children, dark }) {
  return (
    <div className={`text-[10px] font-medium tracking-[1.2px] uppercase mb-5 ${dark ? 'text-stone-gray' : 'text-stone-gray'}`}>
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

function H3Light({ children }) {
  return <h3 className="font-serif text-[clamp(22px,2.8vw,32px)] font-medium leading-[1.15] text-near-black mb-4">{children}</h3>
}

function H3Dark({ children }) {
  return <h3 className="font-serif text-[clamp(22px,2.8vw,32px)] font-medium leading-[1.15] text-ivory mb-4">{children}</h3>
}

function BodyLight({ children, className = '' }) {
  return <p className={`text-[17px] leading-[1.60] text-olive-gray ${className}`}>{children}</p>
}

function BodyDark({ children, className = '' }) {
  return <p className={`text-[17px] leading-[1.60] text-warm-silver ${className}`}>{children}</p>
}

function PullQuote({ children, dark }) {
  return (
    <blockquote className={`border-l-4 border-terracotta rounded-r-2xl p-8 my-8 ${dark ? 'bg-dark-surface' : 'bg-ivory'}`}>
      <p className={`font-serif text-[25px] font-medium leading-[1.30] italic ${dark ? 'text-ivory' : 'text-near-black'}`}>{children}</p>
    </blockquote>
  )
}

function IvoryCard({ children, className = '' }) {
  return (
    <div className={`bg-ivory border border-border-cream rounded-2xl p-7 ${className}`}>{children}</div>
  )
}

function DarkCard({ children, className = '' }) {
  return (
    <div className={`bg-dark-surface rounded-2xl p-7 shadow-[0px_0px_0px_1px_#30302e] ${className}`}>{children}</div>
  )
}

function StrategyPill({ children }) {
  return (
    <div className="inline-block bg-warm-sand text-charcoal-warm text-[14px] font-medium rounded-full px-4 py-2 shadow-[0px_0px_0px_1px_#d1cfc5] mb-6">
      {children}
    </div>
  )
}

function KRCard({ value, label, body }) {
  return (
    <DarkCard>
      <div className="font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] mb-2" style={{ color: '#d97757' }}>{value}</div>
      <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-warm-silver mb-3">{label}</div>
      <p className="text-[14px] leading-[1.60] text-warm-silver">{body}</p>
    </DarkCard>
  )
}

function BadgeCircle({ label }) {
  return (
    <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-ivory text-[14px] font-medium font-sans flex-shrink-0">
      {label}
    </div>
  )
}

function TableWrapper({ children }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory">
      <table className="w-full text-[14px] text-near-black border-collapse">{children}</table>
    </div>
  )
}

function Th({ children }) {
  return (
    <th className="text-left text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray px-5 py-4 border-b border-border-cream bg-ivory">{children}</th>
  )
}

function Td({ children, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b border-border-cream text-[14px] leading-[1.55] align-top ${className}`}>{children}</td>
  )
}

function DarkTableWrapper({ children }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-dark-surface bg-dark-surface">
      <table className="w-full text-[14px] border-collapse">{children}</table>
    </div>
  )
}

function DarkTh({ children }) {
  return (
    <th className="text-left text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray px-5 py-4 border-b border-dark-surface">{children}</th>
  )
}

function DarkTd({ children, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b border-dark-surface text-[14px] leading-[1.55] text-warm-silver align-top ${className}`}>{children}</td>
  )
}

/* ─── Sections ──────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="bg-parchment pt-[clamp(80px,12vw,160px)] pb-24 px-6 md:px-16">
      <div className="max-w-[960px] mx-auto">
        <Eyebrow>Product Analytics · Airtribe Assignment · 2025</Eyebrow>
        <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.10] text-near-black mb-6 max-w-[840px]">
          Zomato — Analytics &amp; Metrics
        </h1>
        <p className="text-[20px] leading-[1.60] text-olive-gray max-w-[640px] mb-8">
          Zomato's Tier-1 food delivery growth problem isn't a supply problem — it's a confidence problem. 72 minutes of monthly browsing with no order. 54% of users second-guessing at checkout. 7.5 support tickets per 1,000 orders. This is a product analytics exercise that names the leaks, sizes the prize, and defines the metrics that matter.
        </p>
        <div className="text-[14px] text-stone-gray mb-10 leading-[1.60]">
          Role: Product Analyst&nbsp;&nbsp;·&nbsp;&nbsp;Scope: Tier-1 Cities&nbsp;&nbsp;·&nbsp;&nbsp;Framework: OKRs, KPIs, Funnel Analysis, Cohort Analysis&nbsp;&nbsp;·&nbsp;&nbsp;Submission: Airtribe
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#okrs" className="bg-terracotta text-ivory text-[14px] font-medium rounded-xl px-5 py-3 no-underline inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
            Explore the analysis →
          </a>
          <a href="#cohort" className="bg-warm-sand text-charcoal-warm text-[14px] font-medium rounded-lg px-5 py-3 no-underline inline-flex items-center gap-2 shadow-[0px_0px_0px_1px_#d1cfc5] transition-opacity duration-200 hover:opacity-80">
            Jump to cohort setup
          </a>
        </div>
      </div>
    </section>
  )
}

function StrategicContextSection() {
  return (
    <SectionLight>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — narrative */}
        <div>
          <H2Light>The Transition from Access to Experience</H2Light>
          <p className="font-serif text-[17px] leading-[1.60] text-near-black mb-6">
            Zomato won Tier-1 by solving access. The next phase will be won by reducing friction, not adding users. But the growth thesis has quietly shifted: as reliance on the platform deepens, user tolerance for friction collapses. What was once a delight is now a baseline expectation.
          </p>
          <p className="font-serif text-[17px] leading-[1.60] text-near-black mb-8">
            Quick Commerce has reset the bar. The "Blinkit Effect" has conditioned users to expect 10–15 minute delivery. Standard 30–45 minute food delivery no longer feels fast — it feels slow. The result: two structural "experience leaks" that compound into revenue loss.
          </p>
          <PullQuote>
            "The next phase of growth will be won by reducing friction, not adding users."
          </PullQuote>
        </div>

        {/* Right — insight cards */}
        <div className="flex flex-col gap-5">
          <IvoryCard>
            <div className="font-serif text-[20px] font-medium text-near-black mb-3">Decision Friction</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">
              Cognitive overload pre-order. Users spend 72 minutes per month browsing without transacting — "decision limbo," not engagement. Choice abundance creates paralysis, not conversion.
            </p>
          </IvoryCard>
          <IvoryCard>
            <div className="font-serif text-[20px] font-medium text-near-black mb-3">Operational Variance</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">
              Unpredictability post-order. A 16–22 minute standard deviation on delivery times means the "average" masks a structurally probable long tail of severe delays. This variance generates 7.5 support tickets per 1,000 orders.
            </p>
          </IvoryCard>
        </div>
      </div>
    </SectionLight>
  )
}

function OKRsSection() {
  return (
    <SectionDark id="okrs">
      <Eyebrow dark>Part 1 · Objectives &amp; Key Results</Eyebrow>
      <H2Dark>Two Objectives. One Thesis.</H2Dark>
      <p className="font-serif text-[clamp(24px,3vw,36px)] font-medium leading-[1.30] text-ivory mb-6 max-w-[720px]">
        Eliminate the cognitive tax. Engineer boringly predictable delivery.
      </p>
      <BodyDark className="max-w-[720px] mb-20">
        Both objectives connect to the same diagnostic: Zomato's funnel doesn't leak demand — it leaks confidence. Objective 1 targets the decision layer; Objective 2 targets the trust layer. Together, they address a conversion of 5.86% that should be 9%+.
      </BodyDark>

      {/* Objective 1 */}
      <div className="mb-20">
        <div className="text-[12px] font-medium tracking-[0.12em] uppercase mb-3" style={{ color: '#d97757' }}>Objective 1</div>
        <H3Dark>Eliminate the "Cognitive Tax" — Stop the Funnel Leak</H3Dark>
        <BodyDark className="max-w-[720px] mb-5">
          Users spend up to 72 minutes per month exploring options without transacting. Intent is high — Add-to-Cart rate reaches ~13.14% — but conversion collapses to ~5.86%. The root cause: "Choice Overload" and "Ego Depletion" during dinner peak lead to Cooking Paralysis or app abandonment. 54% of users second-guess their order before finalizing.
        </BodyDark>
        <StrategyPill>Strategy: Shift from "Push" (Search) to "Pull" (Personalization) to reduce Evaluation Cost</StrategyPill>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <KRCard
            value="< 5 min"
            label="Time-to-Cart for Repeat Users"
            body='Reduce from ~15 minutes. Reducing "decision limbo" prevents Cooking Paralysis and ego depletion during peak dinner times.'
          />
          <KRCard
            value="15%"
            label="AI-Driven Conversion Rate Target"
            body="A higher AI conversion proves we are successfully shifting from a high-friction Search model to a low-friction Curated model."
          />
          <KRCard
            value="< 40%"
            label="Checkout Hesitation (Cart Abandonment)"
            body="Down from 54%. Reinforcing decision confidence at the payment screen directly targets users who second-guess their choices."
          />
        </div>
      </div>

      {/* Objective 2 */}
      <div>
        <div className="text-[12px] font-medium tracking-[0.12em] uppercase mb-3" style={{ color: '#d97757' }}>Objective 2</div>
        <H3Dark>Engineer "Boringly Predictable" Delivery — Build the Trust Moat</H3Dark>
        <BodyDark className="max-w-[720px] mb-5">
          The average delivery time of 30–33 minutes is a lie. The Standard Deviation of 16–22 minutes means delivery times follow a Gamma Distribution — the probability of severe delays is structurally high. This unpredictability generates 7.5 support tickets per 1,000 orders. The removal of "On-Time Guarantees" confirms subsidizing this variance is financially unsustainable.
        </BodyDark>
        <StrategyPill>Strategy: Prioritize Variance Reduction over absolute speed</StrategyPill>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <KRCard
            value="< 12 min"
            label="Delivery Time Standard Deviation Target"
            body="Compressing the SD eliminates the severe delays (outliers) in the Gamma Distribution's long tail that disproportionately destroy trust."
          />
          <KRCard
            value="95%"
            label="Perfect Order Rate (On-Time + Error-Free)"
            body="Bridges the gap with Quick Commerce's ~96% benchmark — essential to prevent churn in a market conditioned for 15-minute certainty."
          />
          <KRCard
            value="< 5"
            label="Support Tickets per 1,000 Orders"
            body='Down from 7.5. Validates we are delivering on a "Peace of Mind" promise and directly improves unit economics.'
          />
        </div>
      </div>
    </SectionDark>
  )
}

function SupportingKPIsSection() {
  const kpis = [
    {
      badge: '1',
      title: 'Delivery Partner Attrition Rate',
      target: 'Target: Reduce from 44.3% to <35%',
      body: "Stability = Predictability. High attrition forces constant rookie onboarding, directly fueling variance. Swiggy's lower attrition (33.37%) gives them a structural advantage — experienced riders navigate last-mile complexities faster.",
      krs: 'Supports KR 2.1 · KR 2.2',
    },
    {
      badge: '2',
      title: 'Priority Fee Attach Rate',
      target: 'Metric: Adoption of ₹19–29 "Priority Delivery" fees',
      body: 'Monetizing Trust. High adoption validates that users will pay for the certainty of speed — justifying a shift away from free delivery subsidies.',
      krs: 'Supports KR 2.2 · KR 2.3',
    },
    {
      badge: '3',
      title: 'Monthly "Idle" Browse Time',
      target: 'Metric: Reduction in the 72-minute/month non-transacting average',
      body: 'Efficiency > Engagement. 72 minutes of browsing represents "decision limbo" and friction, not enjoyment. Decreasing this proves AI recommendations are solving the Evaluation Cost problem — not just rearranging the menu.',
      krs: 'Supports KR 1.1 · KR 1.2',
    },
    {
      badge: '4',
      title: 'Day-30 Retention Rate',
      target: 'Baseline: Improve beyond the ~3.7% category average',
      body: 'The Loyalty Truth. With sector retention shockingly low due to "multi-homing," this is the only metric that proves habit formation — confirming we are building an experience moat that prevents switching for a cheaper discount.',
      krs: 'Supports KR 1.2 · KR 1.3',
    },
    {
      badge: '5',
      title: 'Frequency of "Tail Events" (>60 Min Deliveries)',
      target: 'Metric: % of orders in the Gamma Distribution "Long Tail"',
      body: 'Killing the Trust-Destroyers. Average speed is a vanity metric; the "long tail" of severe delays is what destroys trust. Reducing these outliers is critical because the Gamma distribution makes these failures structurally probable without intervention.',
      krs: 'Supports KR 2.1 · KR 2.3',
    },
  ]

  return (
    <SectionLight>
      <Eyebrow>Part 2 · Supporting KPIs</Eyebrow>
      <H2Light>Five Metrics Behind the OKRs</H2Light>
      <BodyLight className="max-w-[720px] mb-12">
        OKRs tell you where you're going. KPIs explain why you're not there yet — and which levers to pull first. Each metric below is a leading indicator to one or more of the OKR Key Results.
      </BodyLight>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {kpis.map((kpi) => (
          <IvoryCard key={kpi.badge} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BadgeCircle label={kpi.badge} />
              <div className="font-serif text-[20px] font-medium text-near-black">{kpi.title}</div>
            </div>
            <div className="text-[14px] font-medium text-terracotta">{kpi.target}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{kpi.body}</p>
            <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-stone-gray pt-1 border-t border-border-cream">{kpi.krs}</div>
          </IvoryCard>
        ))}
      </div>
    </SectionLight>
  )
}

function FunnelAnalysisSection() {
  const stages = [
    {
      label: 'Stage 1',
      title: 'App Open → Discovery',
      dropoff: 'Multiple app opens without engagement; 72 mins/month browsing without conversion.',
      rootCause: 'Intent is high ("I\'m hungry"), but users face a catalogue when they want a suggestion. Choice abundance creates paralysis.',
      intuition: 'Tier-1 users during peak hours are cognitively depleted — they value speed over exploration. Leverage order history and time-of-day to present one confident recommendation.',
      hypothesis: '"If we surface a \'Smart Default\' hero card on app open, time-to-engagement will reduce by 40%."',
    },
    {
      label: 'Stage 2',
      title: 'Discovery → Restaurant Selection',
      dropoff: 'High impressions, low click-through; users compare ratings/ETA then bounce.',
      rootCause: 'Evaluation cost is punitive. Every data point increases regret anticipation: "What if there\'s something better?"',
      intuition: 'Users minimize regret risk, not optimize for "best food." Highlight "Ordered by 500+ nearby users" over star ratings alone.',
      hypothesis: '"If we reduce visible options from 15–20 to 6–8 curated choices with social proof, CTR will increase by 30%."',
    },
    {
      label: 'Stage 3',
      title: 'Restaurant Selection → Checkout',
      dropoff: '13% add to cart; only 6% complete checkout — 54% abandonment rate.',
      rootCause: 'Checkout triggers re-evaluation. Users encounter sticker shock (fees) and second-guess their choice.',
      intuition: 'Social proof acts as permission to complete the decision. Surface total cost earlier to prevent sticker shock.',
      hypothesis: '"If we add \'Confidence Anchors\' at checkout (\'421 people ordered this today\' + upfront total cost), abandonment will drop to 40%."',
    },
    {
      label: 'Stage 4',
      title: 'Checkout → Delivery',
      dropoff: '7.5 support tickets per 1,000 orders; post-order anxiety spikes immediately.',
      rootCause: 'Variance (16–22 min SD), not speed, destroys trust. Users don\'t know if their order will take 20 or 60 minutes.',
      intuition: 'Users forgive slow delivery more than broken promises. Progress visibility reduces perceived wait time by 35%.',
      hypothesis: '"If we provide milestone notifications (\'Order packed,\' \'2 mins away\'), support tickets will reduce by 30%."',
    },
    {
      label: 'Stage 5',
      title: 'Delivery → Re-order',
      dropoff: 'Single negative experience suppresses order frequency; Day-30 retention stuck at 3.7%.',
      rootCause: 'Experience residue lingers. Poor issue resolution amplifies damage.',
      intuition: 'Users judge brands on recovery, not perfection. Proactive fixes transform negatives into trust signals.',
      hypothesis: '"If we auto-credit for delays >15 mins past ETA (no ticket required), repeat orders within 7 days will increase by 18%."',
    },
  ]

  return (
    <SectionDark>
      <Eyebrow dark>Part 3 · Funnel Analysis</Eyebrow>
      <H2Dark>The Funnel Doesn't Leak Demand. It Leaks Confidence.</H2Dark>
      <p className="font-serif text-[clamp(22px,3vw,36px)] font-medium leading-[1.30] text-ivory mb-6 max-w-[720px]">
        Early stages bleed cognitive confidence. Late stages bleed operational trust.
      </p>
      <BodyDark className="max-w-[720px] mb-16">
        The six-stage funnel — App Open → Discovery → Restaurant Selection → Cart/Checkout → Delivery → Re-order — appears healthy by aggregate metrics. But each transition hides a different failure mode. Diagnosing the nature of each drop-off (cognitive, operational, or emotional) determines the correct intervention.
      </BodyDark>

      {/* Stage cards */}
      <div className="flex flex-col gap-5 mb-16">
        {stages.map((stage) => (
          <div key={stage.label} className="bg-dark-surface rounded-2xl p-7 border-l-4" style={{ borderColor: '#d97757' }}>
            <div className="text-[12px] font-medium tracking-[0.12em] uppercase mb-2" style={{ color: '#d97757' }}>{stage.label}</div>
            <div className="font-serif text-[25px] font-medium text-ivory mb-4">{stage.title}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              <div>
                <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-1">Drop-off</div>
                <p className="text-[14px] leading-[1.60] text-warm-silver">{stage.dropoff}</p>
              </div>
              <div>
                <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-1">Root Cause</div>
                <p className="text-[14px] leading-[1.60] text-warm-silver">{stage.rootCause}</p>
              </div>
              <div>
                <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-1">Intuition</div>
                <p className="font-serif text-[15px] leading-[1.60] text-ivory italic">{stage.intuition}</p>
              </div>
            </div>
            <div className="inline-block bg-warm-sand text-charcoal-warm text-[14px] font-medium rounded-lg px-4 py-2">
              {stage.hypothesis}
            </div>
          </div>
        ))}
      </div>

      {/* Friction summary table */}
      <H3Dark>Funnel Friction Summary</H3Dark>
      <DarkTableWrapper>
        <thead>
          <tr>
            <DarkTh>Funnel Stage</DarkTh>
            <DarkTh>Primary Friction</DarkTh>
            <DarkTh>Nature of Problem</DarkTh>
            <DarkTh>Strategic Lever</DarkTh>
          </tr>
        </thead>
        <tbody>
          {[
            ['App Open → Discovery', 'Choice overload', 'Cognitive', 'Default curation'],
            ['Discovery → Restaurant', 'Decision paralysis', 'Cognitive', 'Confidence signals'],
            ['Menu → Checkout', 'Second-guessing', 'Cognitive + Price', 'Reassurance'],
            ['Checkout → Delivery', 'ETA uncertainty', 'Operational', 'Predictability'],
            ['Delivery → Re-order', 'Emotional residue', 'Experience', 'Resolution quality'],
          ].map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <DarkTd key={j}>{cell}</DarkTd>)}
            </tr>
          ))}
        </tbody>
      </DarkTableWrapper>

      {/* Closing quote */}
      <div className="text-center mt-16 max-w-[720px] mx-auto">
        <p className="font-serif text-[clamp(24px,3.5vw,36px)] font-medium leading-[1.30] italic mb-6" style={{ color: '#d97757' }}>
          "This funnel doesn't leak demand — it leaks confidence."
        </p>
        <p className="text-[17px] leading-[1.60] text-warm-silver">
          Early friction is cognitive (too many choices). Late friction is operational (unpredictability). Combined fixes can move conversion from 6% to 9%+ and unlock ₹600 Cr+ in annual GMV.
        </p>
      </div>
    </SectionDark>
  )
}

function CohortAnalysisSection() {
  const segments = [
    {
      badge: 'A',
      title: '"Fast Adopters"',
      definition: 'Users who place 2nd order within 3 days (top quartile TT2O)',
      body: 'Hypothesis: High intent + positive first experience = rapid habit formation.',
      action: 'Action: Prioritize for loyalty program early enrolment.',
    },
    {
      badge: 'B',
      title: '"Perfect Start"',
      definition: 'First order delivered on-time with no issues',
      body: 'Expected lift: 40–60% higher D30 retention vs. delayed deliveries.',
      action: 'Action: Benchmark for operational excellence; use as control group.',
    },
    {
      badge: 'C',
      title: '"High AOV Launchers"',
      definition: 'First order >₹600',
      body: 'Hypothesis: Higher willingness to pay = better retention economics.',
      action: 'Action: Test premium tier messaging (Gold subscription) at Day 3.',
    },
    {
      badge: 'D',
      title: '"Rescue Needed"',
      definition: 'First order had service failure but user didn\'t churn immediately',
      body: 'Aggressive recovery required — these users are giving the platform a second chance.',
      action: 'Action: Personalized apology + ₹100 credit within 24 hours.',
    },
  ]

  return (
    <SectionLight id="cohort">
      <Eyebrow>Part 4 · Cohort Analysis</Eyebrow>
      <H2Light>Cohort-Based Retention Analysis</H2Light>
      <BodyLight className="max-w-[720px] mb-14">
        The objective: track first-order users to identify levers that drive repeat behavior and inform both product and lifecycle interventions. The analysis is structured to answer a single question — which first-order characteristics predict long-term retention?
      </BodyLight>

      {/* 6.1 Cohort Definition */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div>
          <H3Light>Cohort Trigger</H3Light>
          <BodyLight className="mb-8">
            Users who placed their first successful order — payment completed, delivery attempted.
          </BodyLight>
          <H3Light>Temporal Cadence</H3Light>
          <BodyLight>
            Weekly cohorts (rolling 7-day windows). Monthly cohorts delay insights; daily creates noise. Weekly balances statistical significance with actionability.
          </BodyLight>
        </div>
        <IvoryCard>
          <div className="font-serif text-[20px] font-medium text-near-black mb-5">Behavioural Segmentation Dimensions</div>
          <div className="space-y-4">
            {[
              { label: 'Order Value', value: '<₹300 · ₹300–600 · >₹600' },
              { label: 'Delivery Experience', value: 'On-time (<35 mins) · Delayed (>45 mins)' },
              { label: 'Discovery Method', value: 'Search · AI Recommendation · Direct Restaurant' },
              { label: 'Time of Day', value: 'Lunch (11am–3pm) · Dinner (7pm–11pm) · Other' },
            ].map((row, i, arr) => (
              <div key={i} className={`pb-4 text-[15px] leading-[1.60] ${i < arr.length - 1 ? 'border-b border-border-cream' : ''}`}>
                <span className="font-medium text-near-black">{row.label}: </span>
                <span className="text-olive-gray">{row.value}</span>
              </div>
            ))}
          </div>
        </IvoryCard>
      </div>

      {/* 6.2 Cohort Comparison Table */}
      <H3Light>Cohort Comparison Table</H3Light>
      <div className="overflow-x-auto bg-warm-sand rounded-2xl p-1 mb-6">
        <TableWrapper>
          <thead>
            <tr>
              <Th>Cohort Week</Th>
              <Th>Total Users</Th>
              <Th>D7 Repeat</Th>
              <Th>D14 Repeat</Th>
              <Th>D30 Repeat</Th>
              <Th>TT2O (Median)</Th>
              <Th>Avg LTV (D30)</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Week 1', '12,500', '8.20%', '11.50%', '18.30%', '9 days', '₹485'],
              ['Week 2', '13,200', '9.10%', '13.20%', '20.10%', '7 days', '₹520'],
              ['Week 3', '11,800', '7.80%', '10.90%', '17.60%', '11 days', '₹450'],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <Td key={j} className={j === 0 ? 'font-medium text-near-black' : j === 6 ? 'font-medium text-terracotta' : ''}>{cell}</Td>
                ))}
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>

      {/* Key questions callout */}
      <div className="border-l-4 border-terracotta bg-ivory rounded-r-2xl p-7 mb-16">
        <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-terracotta mb-4">Key Questions</div>
        <ul className="space-y-2">
          {[
            'Which cohort characteristics correlate with higher D7/D30 retention?',
            'Does first-order discount depth impact repeat rate?',
            'How does delivery experience variance affect retention curves?',
          ].map((q, i) => (
            <li key={i} className="text-[15px] leading-[1.60] text-olive-gray flex items-start gap-2">
              <span className="text-terracotta mt-0.5">—</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 6.3 Strategic Segmentation */}
      <H3Light>Four User Segments to Act On</H3Light>
      <BodyLight className="max-w-[720px] mb-8">
        Cohort data reveals four behaviorally distinct groups — each requiring a different product or lifecycle intervention.
      </BodyLight>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {segments.map((seg) => (
          <IvoryCard key={seg.badge} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <BadgeCircle label={seg.badge} />
              <div className="font-serif text-[20px] font-medium text-near-black">{seg.title}</div>
            </div>
            <div className="text-[14px] text-stone-gray">{seg.definition}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{seg.body}</p>
            <div className="text-[14px] font-medium text-terracotta">{seg.action}</div>
          </IvoryCard>
        ))}
      </div>

      {/* 6.4 Product Decision Matrix */}
      <H3Light>Product Decision Matrix</H3Light>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Finding</Th>
            <Th>Product Intervention</Th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Users who discover via AI recommendations have 25% higher D7 retention', 'Double down on ML personalization; increase hero card prominence'],
            ['D7 retention drops 40% for users with first-order delays >45 mins', 'Prioritize operational consistency OKRs; flag high-variance delivery zones'],
            ['Users ordering at dinner (7–11pm) have 2× repeat rate vs. lunch', 'Optimize dinner experience; test dinner-specific campaigns'],
            ['TT2O >10 days = 70% never return', 'Trigger re-engagement at Day 5–7 window (peak churn risk)'],
          ].map(([finding, intervention], i) => (
            <tr key={i}>
              <Td className="font-medium text-near-black max-w-[360px]">{finding}</Td>
              <Td className="text-olive-gray">{intervention}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function ReflectionSection() {
  return (
    <SectionDark>
      <H2Dark>What the Exercise Revealed</H2Dark>
      <p className="font-serif text-[20px] font-medium leading-[1.60] text-warm-silver max-w-[720px] mb-8">
        One of the most surprising insights from the analysis was the amount of time users spend inside the app without placing an order. What initially appears as high engagement is, in reality, a signal of decision fatigue and hesitation.
      </p>
      <p className="font-serif text-[20px] font-medium leading-[1.60] text-warm-silver max-w-[720px] mb-8">
        This behavior strongly mirrors patterns seen on Netflix, where users often browse for extended periods, struggle to decide what to watch, and eventually exit without consuming content. Netflix's "Continue Watching" feature addresses this by reducing cognitive effort and offering a confident default — an insight that directly influenced my thinking on simplifying food discovery and reducing choice overload.
      </p>
      <p className="font-serif text-[20px] font-medium leading-[1.60] text-warm-silver max-w-[720px] mb-16">
        A key challenge during the exercise was defining the right Key Results. I debated whether to prioritize growth-oriented metrics or experience-led ones. Ultimately, I anchored the OKRs around experience — with the belief that removing friction and building trust creates a stronger foundation on which sustainable growth can be achieved in subsequent phases.
      </p>
      <p className="font-serif text-[clamp(24px,3.5vw,36px)] font-medium leading-[1.30] text-center max-w-[720px] mx-auto italic" style={{ color: '#d97757' }}>
        "The funnel doesn't lose users. It loses their confidence — and confidence is rebuilt one predictable interaction at a time."
      </p>
    </SectionDark>
  )
}

function FooterSection() {
  return (
    <section className="bg-parchment border-t border-border-cream px-6 md:px-16 py-8">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row md:justify-between gap-3 text-[14px] text-stone-gray">
        <span>Zomato Analytics &amp; Metrics · Airtribe Assignment · 2025</span>
        <span>Built by Sujit</span>
      </div>
    </section>
  )
}

/* ─── Main export ───────────────────────────────────────────────────── */

export function Zomato() {
  return (
    <ProjectLayout nextProject={{ title: 'Nykaa', path: '/projects/nykaa' }}>
      <HeroSection />
      <StrategicContextSection />
      <OKRsSection />
      <SupportingKPIsSection />
      <FunnelAnalysisSection />
      <CohortAnalysisSection />
      <ReflectionSection />
      <FooterSection />
    </ProjectLayout>
  )
}
