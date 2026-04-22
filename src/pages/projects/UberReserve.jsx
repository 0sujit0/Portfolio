import { ProjectLayout } from '../../components/ProjectLayout'

/* ── Primitives ──────────────────────────────────────────────────── */

function Eyebrow({ children, dark }) {
  return (
    <div className={`text-[10px] font-medium tracking-[1.2px] uppercase mb-5 ${dark ? 'text-stone-gray' : 'text-stone-gray'}`}>
      {children}
    </div>
  )
}

function SectionLight({ children, className = '' }) {
  return (
    <section className={`bg-parchment py-24 px-6 md:px-16 ${className}`}>
      <div className="max-w-[960px] mx-auto">{children}</div>
    </section>
  )
}

function SectionDark({ children, className = '' }) {
  return (
    <section className={`bg-near-black py-24 px-6 md:px-16 ${className}`}>
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
    <h3 className={`font-serif text-[clamp(22px,2.8vw,32px)] font-medium leading-[1.15] mb-4 ${dark ? 'text-ivory' : 'text-near-black'}`}>
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

function PullQuote({ children }) {
  return (
    <blockquote className="border-l-4 border-terracotta rounded-r-2xl p-8 my-8 bg-ivory">
      <p className="font-serif text-[25px] font-medium leading-[1.30] text-near-black italic">{children}</p>
    </blockquote>
  )
}

function DarkCallout({ label, children, labelColor = 'text-coral' }) {
  return (
    <div className="bg-dark-surface rounded-2xl p-8 border-l-4 border-coral my-8">
      <div className={`text-[12px] font-medium tracking-[0.12em] uppercase mb-3 ${labelColor}`}>{label}</div>
      <p className="font-serif text-[20px] font-medium leading-[1.60] text-ivory italic">{children}</p>
    </div>
  )
}

function LightCallout({ label, children }) {
  return (
    <div className="bg-ivory rounded-r-2xl border-l-4 border-terracotta p-7 my-8">
      <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-terracotta mb-3">{label}</div>
      <p className="font-serif text-[20px] font-medium leading-[1.60] text-near-black">{children}</p>
    </div>
  )
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

function StatCardLight({ value, label, sublabel }) {
  return (
    <IvoryCard>
      <div className="font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] text-terracotta mb-2">{value}</div>
      <div className="text-[14px] font-medium text-near-black mb-1">{label}</div>
      {sublabel && <div className="text-[12px] uppercase tracking-[0.12em] text-stone-gray">{sublabel}</div>}
    </IvoryCard>
  )
}

function StatCardDark({ value, label, sublabel }) {
  return (
    <DarkCard>
      <div className="font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] text-coral mb-2">{value}</div>
      <div className="text-[14px] font-medium text-ivory mb-1">{label}</div>
      {sublabel && <div className="text-[12px] uppercase tracking-[0.12em] text-stone-gray">{sublabel}</div>}
    </DarkCard>
  )
}

function NumberBadge({ n, dark }) {
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium mb-4 ${dark ? 'bg-coral text-ivory' : 'bg-terracotta text-ivory'}`}>
      {n}
    </div>
  )
}

function TableWrapper({ children }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory mt-6">
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
    <div className="overflow-x-auto rounded-2xl border border-dark-surface bg-dark-surface mt-6">
      <table className="w-full text-[14px] border-collapse">{children}</table>
    </div>
  )
}

function DarkTh({ children }) {
  return (
    <th className="text-left text-[11px] font-medium tracking-[0.12em] uppercase text-warm-silver px-5 py-4 border-b border-dark-surface">
      {children}
    </th>
  )
}

function DarkTd({ children, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b border-dark-surface text-[14px] leading-[1.55] text-warm-silver align-top ${className}`}>
      {children}
    </td>
  )
}

/* ── Sections ──────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="bg-parchment pt-[clamp(80px,12vw,160px)] pb-24 px-6 md:px-16">
      <div className="max-w-[960px] mx-auto">
        <Eyebrow>Product Case Study · Repositioning · 2026</Eyebrow>
        <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.10] text-near-black mb-6 max-w-[840px]">
          Uber Reserve — Closing the Adoption Gap in Tier 1 Cities
        </h1>
        <p className="text-[20px] leading-[1.60] text-olive-gray max-w-[640px] mb-8">
          Reserve is under-adopted not because users don't know about it, but because normal Uber already solves ~80% of the reliability job for free. The fix isn't more marketing or a better UI — it's repositioning Reserve from a premium booking tier into a guaranteed-arrival insurance product.
        </p>
        <div className="text-[14px] text-stone-gray mb-10 leading-[1.60]">
          Role: Product (Case Study)&nbsp;&nbsp;·&nbsp;&nbsp;Market: Tier 1 Indian Cities&nbsp;&nbsp;·&nbsp;&nbsp;Framework: First Principles, JTBD, Pricing, Supply Modeling&nbsp;&nbsp;·&nbsp;&nbsp;Year: 2026
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#solution" className="bg-terracotta text-ivory text-[14px] font-medium rounded-xl px-5 py-3 no-underline inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
            Read the repositioning →
          </a>
          <a href="#metrics" className="bg-warm-sand text-charcoal-warm text-[14px] font-medium rounded-lg px-5 py-3 no-underline inline-flex items-center gap-2 shadow-[0px_0px_0px_1px_#d1cfc5] transition-opacity duration-200 hover:opacity-80">
            Jump to the solution
          </a>
        </div>
      </div>
    </section>
  )
}

function TldrSection() {
  return (
    <SectionLight>
      <div className="max-w-[720px] mx-auto">
        <Eyebrow>TL;DR</Eyebrow>
        <H2Light>Reserve's premium is unearned — until it becomes insurance.</H2Light>
        <p className="font-serif text-[17px] leading-[1.60] text-near-black mb-6">
          Users in Tier 1 cities see Reserve as a priced version of something they already get for free: a reliable ride in 2–6 minutes. On the four primitives that matter — time, price, supply, effort — Reserve is at best equal to normal Uber and on two primitives (supply certainty, effort) is worse. Users aren't being irrational when they skip it.
        </p>
        <p className="font-serif text-[17px] leading-[1.60] text-near-black mb-6">
          The fix is not discoverability or UI. It's a reframing: Reserve should stop competing with normal Uber and start competing with the anxiety tax users pay before high-stakes trips. That means transparent two-part pricing (base + guarantee fee), a guarantee with real teeth backed by credits and auto-upgrade, and contextual surfacing inline in the normal flow — targeted initially at airport and 8–10am CBD commutes.
        </p>
        <PullQuote>
          "Users will pay ₹49–₹99 to make a different comparison — not 'Reserve vs. normal Uber,' but '₹69 vs. missing a flight.'"
        </PullQuote>
      </div>
    </SectionLight>
  )
}

function PrimitivesSection() {
  const primitives = [
    { n: '1', title: 'Time Certainty', body: 'Confidence that I will arrive by time T.' },
    { n: '2', title: 'Price Certainty', body: 'Confidence about what the ride will cost.' },
    { n: '3', title: 'Supply Certainty', body: 'Confidence that a driver will actually show up.' },
    { n: '4', title: 'Effort', body: 'The cognitive and physical cost of arranging the ride.' },
  ]

  return (
    <SectionLight>
      <Eyebrow>Part 1 · First Principles</Eyebrow>
      <H2Light>Stripping the Product Back to Its Primitives</H2Light>
      <BodyLight className="max-w-[720px] mb-4">
        Before diagnosing why adoption is low, it helps to ask what a user is actually buying when they book any ride on Uber. Stripped of branding and UI, a ride-hailing transaction delivers four primitives of value.
      </BodyLight>
      <BodyLight className="max-w-[720px] mb-10">
        Every ride-hailing feature, including Reserve, is ultimately a lever on one or more of these four variables. If a feature does not meaningfully move any primitive relative to what the user already has, it has no reason to exist at the price point it is offered.
      </BodyLight>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
        {primitives.map(({ n, title, body }) => (
          <IvoryCard key={n}>
            <NumberBadge n={n} />
            <div className="font-serif text-[20px] font-medium text-near-black mb-2">{title}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{body}</p>
          </IvoryCard>
        ))}
      </div>

      <H3>The Primitive-by-Primitive Audit</H3>
      <BodyLight className="max-w-[720px] mb-4">
        The exercise below compares Reserve against normal Uber on each primitive, as the user perceives them today in a Tier 1 city.
      </BodyLight>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Primitive</Th>
            <Th>Normal Uber (Tier 1, today)</Th>
            <Th>Uber Reserve (Tier 1, today)</Th>
            <Th>Delta the User Perceives</Th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Time certainty', 'High. ETAs in dense zones are 2–6 min. Booking 10 min early mimics scheduling.', 'High in theory, but driver is not confirmed until close to pickup.', 'Negligible. User already feels on-time.'],
            ['Price certainty', 'Medium. Fare shown at booking but can surge at peak.', 'Fare locked at booking.', 'Small positive, but invisible outside surge windows.'],
            ['Supply certainty', 'High in dense corridors; fails mainly at 4–6am or in low-supply pockets.', 'Not actually guaranteed; driver may cancel or not be assigned.', 'Negative in some cases — user pays more and still feels uncertain.'],
            ['Effort', 'Low. Two taps.', 'Slightly higher — extra screen, date/time picker.', 'Negative. Reserve costs more effort, not less.'],
          ].map(([prim, normal, reserve, delta], i) => (
            <tr key={i}>
              <Td className="font-medium text-near-black">{prim}</Td>
              <Td>{normal}</Td>
              <Td>{reserve}</Td>
              <Td>{delta}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <div className="mt-14">
        <H3>The Premium Is Unearned</H3>
        <p className="font-serif text-[17px] leading-[1.60] text-near-black max-w-[720px] mb-6">
          Reserve charges a premium for a product that, on the four primitives that matter, is at best equal to normal Uber and on two primitives (supply certainty, effort) is worse. Users are not being irrational when they skip it — they are correctly observing that nothing of value is being added.
        </p>
        <p className="font-serif text-[17px] leading-[1.60] text-near-black max-w-[720px] mb-6">
          The problem is therefore not discoverability, not marketing, not UI — it is that Reserve, as currently designed, does not move any value primitive enough to justify its price.
        </p>
        <LightCallout label="Root Cause">
          Reserve's unit of value — "your ride is scheduled" — has been commoditized by normal Uber's reliability. For Reserve to earn a price premium, it must move a primitive that normal Uber cannot. The only credible candidate is <strong>supply certainty with a real guarantee.</strong>
        </LightCallout>
      </div>
    </SectionLight>
  )
}

function JtbdSection() {
  return (
    <SectionDark>
      <Eyebrow dark>Part 2 · Jobs to Be Done</Eyebrow>
      <H2Dark>What Reserve Is Hired to Do — and by Whom</H2Dark>
      <p className="font-serif text-[clamp(22px,3vw,36px)] font-medium leading-[1.30] text-ivory mb-6 max-w-[720px]">
        Reserve isn't competing with normal Uber. It's competing with the anxiety tax.
      </p>
      <BodyDark className="max-w-[720px] mb-8">
        The generic functional job — "help me reach my destination on time" — is already done by normal Uber. A JTBD that narrow cannot explain why anyone would pay more. The meaningful job surfaces only when you add the stakes of the trip.
      </BodyDark>

      <DarkCallout label="The Refined Job">
        "When I have a trip where being late has a real cost — a missed flight, a lost deal, a judged first impression — help me eliminate the small residual uncertainty of on-demand booking so I can stop thinking about the ride and focus on the thing the ride is for."
      </DarkCallout>

      <BodyDark className="max-w-[720px] mb-14">
        Reframed this way, Reserve is not competing with normal Uber. It is competing with the anxiety tax users pay before high-stakes trips — refreshing the app, leaving 20 minutes early as a buffer, asking a colleague for a backup ride. This is the job Reserve can credibly charge for.
      </BodyDark>

      <H3 dark>Three Dimensions of the Job</H3>
      <DarkTableWrapper>
        <thead>
          <tr>
            <DarkTh>Dimension</DarkTh>
            <DarkTh>What the User Wants</DarkTh>
            <DarkTh>Why Normal Uber Doesn't Fully Deliver</DarkTh>
          </tr>
        </thead>
        <tbody>
          {[
            ['Functional', 'A driver I can be certain will arrive, at a time I pick, at a price I know.', 'Normal Uber only commits to supply at the moment of booking, not in advance.'],
            ['Emotional', 'Peace of mind the night before a 6am flight. Freedom to stop mentally rehearsing the worst case.', 'Normal Uber requires the user to carry the uncertainty themselves — they buffer by leaving early.'],
            ['Social', 'To be seen as organized — to arrive composed, not rushed. To not be the person who makes the team wait.', 'Normal Uber is neutral on social signaling; Reserve could signal "I planned this," but currently doesn\'t.'],
          ].map(([dim, want, gap], i) => (
            <tr key={i}>
              <DarkTd className="font-medium text-ivory">{dim}</DarkTd>
              <DarkTd>{want}</DarkTd>
              <DarkTd>{gap}</DarkTd>
            </tr>
          ))}
        </tbody>
      </DarkTableWrapper>

      <div className="mt-14">
        <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px]">
          Users will not pay a premium to <em>schedule a ride.</em> They will pay a premium to buy out uncertainty on a trip where the downside is real. Every product decision downstream — pricing, guarantee design, where to surface Reserve in the app — follows from treating Reserve as a <strong className="text-ivory">certainty purchase</strong>, not a scheduling feature.
        </p>
      </div>
    </SectionDark>
  )
}

function UserResearchSection() {
  const segments = [
    {
      label: 'Segment A · Frequent Flyer (2–4 trips/month)',
      title: 'Airport Traveler',
      stated: 'Guaranteed pickup for early flights.',
      behavior: 'Books normal Uber 15–20 min early. Keeps a backup number of a local cab driver. Occasionally uses Reserve only for 4–5am flights.',
      insight: 'Reserve is used only when normal Uber\'s supply is thin — i.e., when it solves a real supply-certainty gap, not for "scheduling" per se.',
    },
    {
      label: 'Segment B · 8–10am Fixed Route',
      title: 'Office Commuter',
      stated: 'Predictable morning pickup.',
      behavior: 'Books normal Uber 10 min before leaving. Accepts occasional delay as noise.',
      insight: 'The stakes per trip are too low to justify paying for certainty. Needs a different value prop — e.g., locked price across 20 commutes.',
    },
    {
      label: 'Segment C · Occasional, Unpredictable',
      title: 'High-Stakes Meeting Traveler',
      stated: 'On-time arrival to a meeting that matters.',
      behavior: 'Books normal Uber 30 min early and waits in the lobby. Doesn\'t think of Reserve at all.',
      insight: 'Highest willingness-to-pay for certainty, but lowest discoverability. Reserve needs to surface itself contextually — this segment is the entire opportunity.',
    },
    {
      label: 'Segment D · Weekend, Family',
      title: 'Leisure Traveler',
      stated: 'Convenient ride.',
      behavior: 'Books normal Uber. No scheduling need.',
      insight: 'Not a target segment. Don\'t optimize Reserve for them.',
    },
  ]

  const quotes = [
    { q: '"Uber is reliable enough — why pay more?"', meaning: 'Normal Uber solves the supply-certainty job 80% of the time. Reserve has to earn the last 20%.' },
    { q: '"I\'ll just book 10 minutes early."', meaning: 'A near-free behavioral substitute exists, and users have already internalized it.' },
    { q: '"Reserve is for airports."', meaning: 'The product is mentally filed under one use case, so it never surfaces for the high-stakes meeting traveler — the segment that would actually pay for it.' },
    { q: '"If I\'m paying extra, I expect a confirmed driver now."', meaning: 'Users want the certainty at the moment of purchase, not 30 minutes before pickup.' },
  ]

  const barriers = [
    { n: '1', title: 'Commoditized Value', body: 'Normal Uber already does the job well enough that Reserve has no primitive it clearly wins on.' },
    { n: '2', title: 'No Immediate Payoff', body: 'Reserve\'s "benefit" is invisible at the moment of booking. The user pays now and finds out later whether it worked — which feels like paying for a promise.' },
    { n: '3', title: 'Wrong Surface', body: 'Reserve lives in a tab users enter deliberately. The segment most willing to pay only thinks about it when the meeting is about to start — by which time they\'ve already opened normal Uber.' },
  ]

  const validations = [
    { label: 'Quant', title: 'Internal Data Cuts', body: 'Reserve attach rate in Tier 1 segmented by trip purpose (airport vs. other), time of day, and booking lead time (>2 hours vs. <2 hours before pickup). Cancellation rate on Reserve vs. matched normal Uber trips. Repeat-Reserve rate within 30 days.' },
    { label: 'Qual', title: '15–20 Targeted Interviews', body: 'Tier 1 professionals who made at least one high-stakes trip (flight, interview, pitch) in the last month. Two questions drive the interview: what did you do to reduce anxiety about the ride, and what would have made you pay to remove it entirely?' },
    { label: 'Painted Door', title: 'Tap-Through Test', body: 'Show a "Guaranteed arrival · ₹69" option in the normal flow for airport trips to 5% of Tier 1 users. Measure tap-through, not just conversion — tap-through measures the value proposition; conversion conflates value prop with price.' },
  ]

  return (
    <SectionLight>
      <Eyebrow>Part 3 · User Research</Eyebrow>
      <H2Light>Four Segments. One Common Thread.</H2Light>
      <BodyLight className="max-w-[720px] mb-4">
        The observations below are synthesized from three sources: public app-store reviews of Uber and Ola (scanned for "reserve," "scheduled," "pre-book," "cancelled"), Reddit threads on r/india and r/bangalore around airport rides, and inference from direct use as a Tier 1 professional.
      </BodyLight>
      <div className="inline-block bg-warm-sand text-charcoal-warm text-[14px] font-medium rounded-full px-4 py-2 mb-12">
        Caveat: This is not primary research. A production validation plan is included at the end of this section.
      </div>

      <H3>Four User Segments</H3>
      <div className="flex flex-col gap-5 mb-16">
        {segments.map(({ label, title, stated, behavior, insight }) => (
          <div key={title} className="bg-ivory border border-border-cream border-l-4 border-l-terracotta rounded-2xl p-7">
            <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-terracotta mb-3">{label}</div>
            <div className="font-serif text-[25px] font-medium text-near-black mb-3">{title}</div>
            <div className="text-[14px] text-stone-gray mb-2">Stated need: {stated}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray mb-4">{behavior}</p>
            <p className="font-serif text-[17px] leading-[1.60] text-near-black italic">{insight}</p>
          </div>
        ))}
      </div>

      <H3>Four Inferred Self-Statements</H3>
      <BodyLight className="max-w-[720px] mb-6">
        These aren't direct quotes — they're the self-talk inferred from review patterns and Reddit threads. Each one corresponds to a structural barrier in how Reserve is positioned today.
      </BodyLight>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
        {quotes.map(({ q, meaning }, i) => (
          <IvoryCard key={i}>
            <p className="font-serif text-[20px] font-medium leading-[1.30] text-near-black italic mb-4">{q}</p>
            <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-terracotta mb-2">What It Means</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{meaning}</p>
          </IvoryCard>
        ))}
      </div>

      <H3>Why Users Skip Reserve</H3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {barriers.map(({ n, title, body }) => (
          <IvoryCard key={n}>
            <NumberBadge n={n} />
            <div className="font-serif text-[20px] font-medium text-near-black mb-2">{title}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{body}</p>
          </IvoryCard>
        ))}
      </div>

      <H3>A Three-Pronged Validation Plan</H3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {validations.map(({ label, title, body }) => (
          <IvoryCard key={label}>
            <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-terracotta mb-3">{label}</div>
            <div className="font-serif text-[20px] font-medium text-near-black mb-3">{title}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{body}</p>
          </IvoryCard>
        ))}
      </div>
    </SectionLight>
  )
}

function SolutionSection() {
  const mechanics = [
    {
      label: 'Mechanic 1',
      stat: '₹49–₹99',
      sublabel: 'Guarantee fee · varies by corridor & lead time',
      title: 'Transparent Two-Part Pricing',
      body: 'Replace Reserve\'s opaque higher fare with a visible split: base fare (the normal Uber Go fare at the moment of booking) plus a "Guarantee Fee." The user sees exactly what they are paying for the guarantee, and the base fare comparison to normal Uber becomes neutral instead of unfavorable.',
    },
    {
      label: 'Mechanic 2',
      stat: '₹200',
      sublabel: 'Auto-refunded credit if driver >5 min late',
      title: 'A Guarantee With Teeth',
      body: 'If the driver arrives more than 5 minutes late, the Guarantee Fee is auto-refunded and ₹200 in Uber credits are issued — no support ticket required. If no driver is assigned 30 minutes before pickup, Uber auto-dispatches a Premier vehicle at Go pricing, absorbing the cost. The guarantee has to fail visibly and expensively to Uber, or users will not trust it.',
    },
    {
      label: 'Mechanic 3',
      stat: '1 tap',
      sublabel: 'Converts a normal booking into a Reserve booking',
      title: 'Contextual Surfacing, Not a Separate Tab',
      body: 'Surface Reserve inline in the normal booking flow when context warrants it — airport destinations within 4 hours of a red-eye window, pinned "Office" addresses at 8–10am weekdays, hotels during known event hours. The in-flow prompt reads: "Lock in this ride for 7:30am — ₹69 guarantees your driver or you ride free."',
    },
  ]

  return (
    <SectionDark id="solution">
      <Eyebrow dark>Part 4 · Proposed Improvement</Eyebrow>
      <H2Dark>Reposition Reserve as Guaranteed Arrival.</H2Dark>
      <p className="font-serif text-[clamp(22px,3vw,36px)] font-medium leading-[1.30] text-ivory mb-8 max-w-[720px]">
        Not a premium scheduled-ride tier. An insurance product against a bad outcome.
      </p>

      <DarkCallout label="Hypothesis">
        If users are forced to compare Reserve's price to the cost of the thing going wrong (missed flight, late to a pitch) rather than to a normal Uber's fare, willingness-to-pay increases meaningfully. The current framing forces the first comparison, which Reserve always loses. The new framing forces the second, which Reserve always wins.
      </DarkCallout>

      <H3 dark>The Mechanic, in Three Parts</H3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {mechanics.map(({ label, stat, sublabel, title, body }) => (
          <DarkCard key={label}>
            <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-coral mb-3">{label}</div>
            <div className="font-serif text-[clamp(32px,4vw,52px)] font-medium leading-[1.10] text-coral mb-1">{stat}</div>
            <div className="text-[12px] uppercase tracking-[0.12em] text-stone-gray mb-4">{sublabel}</div>
            <div className="font-serif text-[20px] font-medium text-ivory mb-3">{title}</div>
            <p className="text-[14px] leading-[1.60] text-warm-silver">{body}</p>
          </DarkCard>
        ))}
      </div>

      <H3 dark>Four Paths I Didn't Take</H3>
      <BodyDark className="max-w-[720px] mb-4">
        Each of these alternatives was tempting for a different reason. None of them solved the underlying diagnosis: Reserve's value proposition is weak, not its price or discoverability.
      </BodyDark>
      <DarkTableWrapper>
        <thead>
          <tr>
            <DarkTh>Alternative</DarkTh>
            <DarkTh>Why It Was Tempting</DarkTh>
            <DarkTh>Why It Was Rejected</DarkTh>
          </tr>
        </thead>
        <tbody>
          {[
            ['Bundle Reserve free into Uber One', 'Low friction; drives Uber One attach.', 'Conflates two jobs (savings vs. certainty). Subsidizes users who would never have paid. Breaks the price signal that makes Reserve feel valuable.'],
            ['Auto-enable Reserve for all airport trips', 'Solves discovery instantly.', 'Removes user choice and damages trust catastrophically when the guarantee fails on a trip the user didn\'t opt into.'],
            ['Cut Reserve price to match normal Uber', 'Removes the obvious price objection.', 'Misdiagnoses the problem. Users are not price-sensitive; they are value-skeptical. A free Reserve still doesn\'t solve a job they feel is already solved.'],
            ['Heavy marketing push for existing Reserve', 'Cheapest to execute.', 'Marketing amplifies a proposition users have already rejected. Scales the leak, not the bucket.'],
          ].map(([alt, tempting, rejected], i) => (
            <tr key={i}>
              <DarkTd className="font-medium text-ivory">{alt}</DarkTd>
              <DarkTd>{tempting}</DarkTd>
              <DarkTd>{rejected}</DarkTd>
            </tr>
          ))}
        </tbody>
      </DarkTableWrapper>
    </SectionDark>
  )
}

function MetricsSection() {
  const metrics = [
    {
      tier: 'Primary Metric',
      stat: '10–12%',
      sublabel: 'Reserve attach rate on eligible trips · 6-month target',
      title: 'Reserve Attach Rate on Eligible Trips',
      body: 'Airport + 8–10am CBD commutes among Tier 1 MAUs. Assumed baseline 2–4%. This is the metric that tells us the repositioning worked.',
      accent: 'text-terracotta',
      accentBorder: '',
    },
    {
      tier: 'Secondary Metric',
      stat: '30-day',
      sublabel: 'Repeat-reserve rate among first-time users',
      title: '30-Day Repeat-Reserve Rate',
      body: 'Tells us the guarantee actually landed emotionally — users only come back if they felt the peace of mind. Attach rate without repeat is noise.',
      accent: 'text-terracotta',
      accentBorder: '',
    },
    {
      tier: 'Guardrail 1 · Unit Economics',
      stat: '< 3%',
      sublabel: 'Driver assignment failure rate on Reserve trips',
      title: 'Driver Assignment Failure Rate',
      body: 'Above 3%, the guarantee payouts eat the premium. If this trends wrong, scope shrinks to higher-supply corridors.',
      accent: 'text-coral',
      accentBorder: '',
    },
    {
      tier: 'Guardrail 2 · Supply Side',
      stat: 'flat',
      sublabel: 'Driver cancellation rate · Reserve vs. matched normal trips',
      title: 'Driver Cancellation Rate',
      body: 'Reserve trips must not increase driver cancellation rate vs. matched normal trips. If they do, the advance-commit model is hurting supply and needs a driver-facing product investment before scaling.',
      accent: 'text-coral',
      accentBorder: '',
    },
  ]

  const phases = [
    { n: '1', title: 'Launch in Dense-Supply Corridors', body: 'Major airports and CBD commutes in Mumbai, Bangalore, Delhi, Hyderabad — where the guarantee is operationally cheap because driver density makes last-minute dispatch feasible.' },
    { n: '2', title: 'Build the "Reserve Shift" Driver Product', body: 'A driver-side product with guaranteed incentives for drivers who commit to advance slots. This is a separate piece of work and is the real gating factor for scaling Reserve into a broader product.' },
    { n: '3', title: 'Extend to Lower-Density Corridors', body: 'Contingent on phases 1 and 2 working. Expands into new use cases — evening event pickups, doctor appointments, locked-price commute subscriptions.' },
  ]

  const outcomes = [
    { tier: 'First-Order Effect', title: 'Durable Revenue Uncorrelated with Volume', body: 'Users pay the Guarantee Fee for certainty whether or not they\'d have taken Uber anyway. Revenue is decoupled from ride-hailing volatility.' },
    { tier: 'Second-Order Effect', title: 'A Wedge Against Ola and BluSmart', body: 'Neither has a credible advance-guarantee product today. Reserve becomes a category of one, not a feature of two.' },
    { tier: 'Third-Order Effect', title: 'Foundation for Certainty-Priced Products', body: 'Locked price across a commute subscription, guaranteed return rides from events, and other products where the unit of value is the removal of uncertainty.' },
  ]

  return (
    <SectionLight id="metrics">
      <Eyebrow>Measurement · Primary, Secondary, Guardrails</Eyebrow>
      <H2Light>How We'd Know It Worked</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        Each metric is deliberately paired with a specific claim the metric proves or disproves. Good metrics don't just measure — they force a decision if the number moves the wrong way.
      </BodyLight>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
        {metrics.map(({ tier, stat, sublabel, title, body, accent }) => (
          <IvoryCard key={title}>
            <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-3">{tier}</div>
            <div className={`font-serif text-[clamp(32px,4vw,52px)] font-medium leading-[1.10] mb-1 ${accent}`}>{stat}</div>
            <div className="text-[12px] uppercase tracking-[0.12em] text-stone-gray mb-4">{sublabel}</div>
            <div className="font-serif text-[20px] font-medium text-near-black mb-2">{title}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{body}</p>
          </IvoryCard>
        ))}
      </div>

      <H3>The Supply-Side Constraint Is the Real Gate</H3>
      <p className="font-serif text-[17px] leading-[1.60] text-near-black max-w-[720px] mb-10">
        The hardest constraint is supply-side, not demand-side. The guarantee is only affordable if Uber can reliably assign drivers 30+ minutes in advance in the target corridors. Indian driver behavior today is short-horizon — drivers optimize minute-to-minute, not shift-to-shift.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {phases.map(({ n, title, body }) => (
          <IvoryCard key={n}>
            <NumberBadge n={n} />
            <div className="font-serif text-[20px] font-medium text-near-black mb-2">{title}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{body}</p>
          </IvoryCard>
        ))}
      </div>

      <H3>Three Downstream Effects</H3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {outcomes.map(({ tier, title, body }) => (
          <IvoryCard key={title}>
            <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-terracotta mb-3">{tier}</div>
            <div className="font-serif text-[20px] font-medium text-near-black mb-2">{title}</div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{body}</p>
          </IvoryCard>
        ))}
      </div>
    </SectionLight>
  )
}

function ReflectionSection() {
  return (
    <SectionDark>
      <H2Dark>What This Case Study Revealed</H2Dark>
      <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-6">
        The most useful insight from this exercise was that adoption problems are often misdiagnosed as awareness problems. The instinct is to reach for a marketing lever or a UI fix, because those are the cheapest things to execute. But neither addresses the root question: <em>does the product move a value primitive the user cares about?</em>
      </p>
      <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-6">
        Reserve's case is a reminder that a premium product has to earn its premium — not through branding, not through placement in the UI, but by moving a primitive its free alternative cannot. And for Reserve, the only credible candidate is supply certainty with a real guarantee.
      </p>
      <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-14">
        The harder discipline was sitting with the supply-side constraint. It would have been more satisfying to propose a full product rollout. But a guarantee without the driver-side infrastructure to back it up isn't a product — it's a liability. Phasing the rollout to dense corridors first, with a clear gate before expansion, was the honest answer.
      </p>
      <p className="font-serif text-[clamp(24px,3.5vw,36px)] font-medium leading-[1.30] text-coral text-center max-w-[720px] mx-auto italic">
        "Users don't pay for features. They pay to stop worrying."
      </p>
    </SectionDark>
  )
}

/* ── Page ──────────────────────────────────────────────────────────── */

export function UberReserve() {
  return (
    <ProjectLayout nextProject={{ title: 'Nykaa Fashion', path: '/projects/nykaa-fashion-conversion' }}>
      <HeroSection />
      <TldrSection />
      <PrimitivesSection />
      <JtbdSection />
      <UserResearchSection />
      <SolutionSection />
      <MetricsSection />
      <ReflectionSection />
    </ProjectLayout>
  )
}
