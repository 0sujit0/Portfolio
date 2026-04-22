import { ProjectLayout } from '../../components/ProjectLayout'

/* ─── Primitives ──────────────────────────────────────────────────── */

function Eyebrow({ children, dark }) {
  return (
    <div className={`text-[10px] font-medium tracking-[1.2px] uppercase mb-5 ${dark ? 'text-warm-silver' : 'text-stone-gray'}`}>
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

function StatCard({ value, label, dark }) {
  return (
    <div className={`rounded-2xl border p-6 ${dark ? 'bg-dark-surface border-dark-surface' : 'bg-ivory border-border-cream'}`}>
      <div className={`font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] mb-2 ${dark ? 'text-coral' : 'text-near-black'}`}>{value}</div>
      <div className={`text-[14px] leading-[1.43] ${dark ? 'text-warm-silver' : 'text-olive-gray'}`}>{label}</div>
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

function TierPill({ tier }) {
  const styles = {
    1: 'bg-terracotta text-ivory',
    2: 'bg-[#d97757] text-ivory',
    3: 'bg-warm-sand text-charcoal-warm',
  }
  const labels = { 1: 'TIER 1 · FOUNDATION', 2: 'TIER 2 · DIFFERENTIATION', 3: 'TIER 3 · GROWTH' }
  return (
    <span className={`text-[11px] font-medium tracking-[0.12em] uppercase rounded-full px-3 py-1 inline-block ${styles[tier]}`}>
      {labels[tier]}
    </span>
  )
}

function PhasePill({ phase }) {
  const styles = {
    1: 'bg-terracotta text-ivory',
    2: 'bg-[#d97757] text-ivory',
    3: 'bg-warm-sand text-charcoal-warm',
  }
  return (
    <span className={`text-[11px] font-medium tracking-[0.12em] rounded-full px-3 py-1 inline-block ${styles[phase]}`}>
      Phase {phase}
    </span>
  )
}

function ThreatPill({ level }) {
  const styles = {
    HIGH: 'bg-terracotta text-ivory',
    IMMINENT: 'bg-terracotta text-ivory',
    MEDIUM: 'bg-[#d97757] text-ivory',
    LOW: 'bg-warm-sand text-charcoal-warm',
  }
  return (
    <span className={`text-[11px] font-medium tracking-[0.12em] uppercase rounded-full px-3 py-1 inline-block ${styles[level] || 'bg-warm-sand text-charcoal-warm'}`}>
      THREAT: {level}
    </span>
  )
}

function TableWrapper({ children, dark }) {
  return (
    <div className={`overflow-x-auto rounded-2xl border ${dark ? 'border-dark-surface bg-dark-surface' : 'border-border-cream bg-ivory'}`}>
      <table className="w-full text-[14px] border-collapse">{children}</table>
    </div>
  )
}

function Th({ children, dark }) {
  return (
    <th className={`text-left text-[11px] font-medium tracking-[0.12em] uppercase px-5 py-4 border-b ${dark ? 'text-stone-gray border-near-black bg-dark-surface' : 'text-stone-gray border-border-cream bg-ivory'}`}>
      {children}
    </th>
  )
}

function Td({ children, highlight, dark, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b align-top leading-[1.55] ${dark ? 'border-near-black text-warm-silver' : 'border-border-cream text-near-black'} ${highlight ? (dark ? 'bg-near-black' : 'bg-warm-sand') : ''} ${className}`}>
      {children}
    </td>
  )
}

/* ─── Section Components ─────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="bg-parchment pt-[clamp(80px,12vw,160px)] pb-24 px-6 md:px-16">
      <div className="max-w-[960px] mx-auto">
        <Eyebrow>Product Case Study · Airtribe Capstone · April 2026 · V2</Eyebrow>
        <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.10] text-near-black mb-6 max-w-[840px]">
          Blinkit Subscription — From Manual Reorder to Automated Essentials
        </h1>
        <p className="text-[20px] leading-[1.60] text-olive-gray max-w-[640px] mb-8">
          Indian q-commerce has won the 10-minute delivery war — a feature every player now matches. The next war is retention, and subscription is the weapon. This is the story of how Blinkit can build the first credible q-commerce subscription product without breaking its unit economics.
        </p>
        <div className="text-[14px] text-stone-gray mb-10 leading-[1.60]">
          Role: Product&nbsp;&nbsp;·&nbsp;&nbsp;Research: 42-person survey, 10 depth interviews, 4 secondary sources&nbsp;&nbsp;·&nbsp;&nbsp;Scope: Essentials subscription (milk-first)&nbsp;&nbsp;·&nbsp;&nbsp;Team: Divyam Verma · Ankita Mitra · Sujit Kumar Sahu&nbsp;&nbsp;·&nbsp;&nbsp;Timeframe: 6-week capstone
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#solution" className="bg-terracotta text-ivory text-[14px] font-medium rounded-xl px-5 py-3 no-underline inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
            Jump to solution framework →
          </a>
          <a href="#methodology" className="bg-warm-sand text-charcoal-warm text-[14px] font-medium rounded-lg px-5 py-3 no-underline inline-flex items-center gap-2 shadow-[0px_0px_0px_1px_#d1cfc5] transition-opacity duration-200 hover:opacity-80">
            View appendices
          </a>
        </div>
      </div>
    </section>
  )
}

function OpportunitySection() {
  return (
    <SectionLight>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <H2Light>The Opportunity</H2Light>
          <p className="font-serif text-[17px] leading-[1.60] text-near-black mb-6">
            Zepto and Instamart compete with Blinkit on 10-minute delivery — a parity feature in a category that's run out of differentiation. Meanwhile, 67% of Indian urban users shop essentials 2–3× weekly, forced into a repetitive reorder loop with a ₹199 minimum-order-value that kills single-SKU intent. Subscription locks wallet share before the next player does — and shifts the metric from order count to retained basket share.
          </p>
          <PullQuote>"Subscriptions don't fail on demand. They fail on trust."</PullQuote>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatCard value="67%" label="Users shop essentials 2–3× weekly" />
          <StatCard value="₹199" label="MOV that kills single-SKU daily orders" />
          <StatCard value="3.2×" label="Monthly order lift for subscribed users (industry benchmark)" />
          <StatCard value="1st" label="Indian q-commerce with a real subscription product" />
        </div>
      </div>
    </SectionLight>
  )
}

function CoreBetSection() {
  return (
    <SectionDark>
      <H2Dark>The Core Bet</H2Dark>
      <p className="font-serif text-[clamp(24px,3vw,36px)] font-medium leading-[1.30] text-ivory mb-8 max-w-[720px]">
        Users don't reject subscriptions because they don't want them. They reject them because every model they've tried locked them in.
      </p>
      <BodyDark className="max-w-[700px] mb-12">
        Dairy apps demand prepaid wallets. Amazon Subscribe & Save defaults to auto-shipments users can't easily skip. BigBasket's bbdaily has rigid midnight cutoffs. Every incumbent has made commitment the price of convenience. Our bet reverses that sequence — make it easier to exit than to enter, and the commitment becomes psychologically free.
      </BodyDark>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        <DarkCard>
          <div className="font-serif text-[clamp(28px,3vw,36px)] font-medium leading-[1.10] mb-3" style={{ color: '#d97757' }}>Defensive moat</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">Zepto and Instamart compete on delivery speed, a parity feature. Subscription locks wallet share before the next player does.</p>
        </DarkCard>
        <DarkCard>
          <div className="font-serif text-[clamp(28px,3vw,36px)] font-medium leading-[1.10] mb-3" style={{ color: '#d97757' }}>Demand predictability</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">Subscribed SKUs give dark-stores 7-day forward visibility. Better inventory planning → lower wastage, tighter SLAs, improved margins.</p>
        </DarkCard>
        <DarkCard>
          <div className="font-serif text-[clamp(28px,3vw,36px)] font-medium leading-[1.10] mb-3" style={{ color: '#d97757' }}>LTV, not GMV</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">A subscribed user orders 3.2× more per month (industry benchmark). Shift the metric from order count to retained basket share.</p>
        </DarkCard>
      </div>
      <p className="font-serif text-[25px] font-medium leading-[1.30] text-ivory max-w-[720px]">
        A user must be able to exit the subscription faster than they entered it.
      </p>
    </SectionDark>
  )
}

function V1V2Section() {
  const rows = [
    { before: '8 overlapping problems', after: '4 consolidated pain clusters' },
    { before: '3 personas including senior low-tech', after: '2 sharpened personas fitting Blinkit ICP' },
    { before: 'Reminders ranked #1', after: 'Trust (Pause / Skip / Cancel) ranked #1' },
    { before: 'No unit economics', after: 'CM-2 model + MOV-per-week fix' },
    { before: 'No go-to-market', after: 'Milk-only MVP · 1 catchment · 6-week pilot' },
  ]
  return (
    <SectionLight>
      <Eyebrow>Version History</Eyebrow>
      <H2Light>What changed from v1</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        The first draft sprayed ideas. v2 concentrates them. Five deliberate consolidations turned a broad ideation deck into a defensible build brief.
      </BodyLight>
      <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr>
              <Th>Before (v1)</Th>
              <Th></Th>
              <Th>After (v2)</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <Td className="text-stone-gray line-through">{row.before}</Td>
                <Td className="text-center font-serif text-[25px] font-medium text-terracotta">→</Td>
                <Td className="font-medium text-near-black">{row.after}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionLight>
  )
}

function MethodologySection() {
  return (
    <SectionLight id="methodology" className="!pt-0">
      <H3Light>Methodology</H3Light>
      <p className="font-serif text-[17px] leading-[1.60] text-olive-gray max-w-[720px] mb-8">
        A mixed-method design balancing breadth (survey for directional signal) and depth (interviews for mental models). Paired with secondary source triangulation across industry analysts and company filings. Because the sample size is modest, every percentage is treated as directional — not statistical.
      </p>
      <div className="flex flex-wrap gap-3 mb-8">
        {['Online survey · 42 responses · 15 questions', 'Depth interviews · 10 participants · 7–15 min · phone + Zoom', 'Secondary · Redseer · Entrackr · Tracxn · Company Annual Report'].map(chip => (
          <span key={chip} className="bg-warm-sand text-charcoal-warm text-[14px] rounded-full px-4 py-2">{chip}</span>
        ))}
      </div>
      <IvoryCard className="border-l-4 border-terracotta rounded-l-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-serif text-[18px] font-medium text-near-black mb-3">What our data CAN tell us</h4>
            <ul className="space-y-2">
              {[
                'Directional signals on pain clusters (n=52 total touchpoints)',
                'Qualitative depth on commitment anxiety, freshness fear, and MOV friction',
                'Persona hypotheses grounded in 10 named interviews',
              ].map(item => (
                <li key={item} className="text-[15px] leading-[1.60] text-olive-gray flex gap-2">
                  <span className="text-terracotta mt-0.5">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-[18px] font-medium text-near-black mb-3">What our data CANNOT tell us</h4>
            <ul className="space-y-2">
              {[
                '"40% order every 2–3 days" is directional, not definitive',
                'No access to Blinkit\'s internal repeat-SKU data — TAM remains a hypothesis',
                'Sample skew: urban metros, English-first, app-native',
              ].map(item => (
                <li key={item} className="text-[15px] leading-[1.60] text-olive-gray flex gap-2">
                  <span className="text-stone-gray mt-0.5">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-serif text-[20px] font-medium text-near-black italic mt-8">
          Next: request Blinkit-internal cohort analysis on repeat-SKU frequency within 7 days — the single number that sizes this opportunity.
        </p>
      </IvoryCard>
    </SectionLight>
  )
}

function CompetitiveLandscapeSection() {
  const competitors = [
    {
      name: 'Country Delight / Milk Basket',
      threat: 'MEDIUM',
      body: 'Dedicated dairy subscription. Trusted for freshness, fixed 6–7 AM delivery, dedicated cold-chain.',
      gap: 'Single-category, no impulse basket, no 10-minute option.',
      topBorder: false,
    },
    {
      name: 'BigBasket (bbdaily)',
      threat: 'HIGH',
      body: 'Weekly / monthly planner. Broad SKU catalog, pre-order by midnight cutoff.',
      gap: 'Next-day only, rigid skip window, no q-commerce speed.',
      topBorder: false,
    },
    {
      name: 'Amazon Subscribe & Save',
      threat: 'LOW',
      body: 'Packaged goods, scheduled. Discount incentive, FMCG depth, wallet integration.',
      gap: 'No perishables, 2–3 day delivery, urban metros only.',
      topBorder: false,
    },
    {
      name: 'Zepto / Instamart',
      threat: 'IMMINENT',
      body: 'No subscription product yet. Same 10-min delivery, overlapping user base.',
      gap: 'Pure transactional model — no recurring product. The window is open until it isn\'t.',
      topBorder: true,
    },
  ]
  return (
    <SectionLight>
      <Eyebrow>Market</Eyebrow>
      <H2Light>Subscription Grocery — The 10-Year Category Blinkit Hasn't Entered</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        Subscription grocery is not new — Country Delight, bbdaily, and Amazon Subscribe & Save have each held ground for years. Blinkit is late, but differentiated. Nobody today combines q-commerce speed with a multi-category subscription basket.
      </BodyLight>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {competitors.map(c => (
          <IvoryCard key={c.name} className={c.topBorder ? 'border-t-4 border-t-terracotta' : ''}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black">{c.name}</h3>
              <ThreatPill level={c.threat} />
            </div>
            <p className="text-[15px] leading-[1.60] text-olive-gray mb-2">{c.body}</p>
            <p className="text-[14px] leading-[1.55] text-stone-gray italic">Gap: {c.gap}</p>
          </IvoryCard>
        ))}
      </div>
      <PullQuote>The winning combination: 10-min q-commerce + multi-category basket + subscription. Nobody has it today.</PullQuote>
    </SectionLight>
  )
}

function FiveFindingsSection() {
  const findings = [
    {
      num: '01',
      title: 'High frequency, low loyalty.',
      body: '~70% buy essentials 2+ times a week but switch freely between Blinkit, Zepto, Instamart, and the kirana next door. Price and mood drive each order.',
    },
    {
      num: '02',
      title: 'Flexibility > discount.',
      body: 'The top hesitation isn\'t price — it\'s commitment. Users said "I want to order only when needed" more often than "it\'s too expensive."',
    },
    {
      num: '03',
      title: 'Trust collapses on perishables.',
      body: 'Wilted greens, broken eggs, and near-expiry milk are category-killers for recurring orders. One bad delivery kills a month of subscription.',
    },
    {
      num: '04',
      title: 'MOV kills single-SKU intent.',
      body: 'The ₹199 MOV forces users to add fillers for a ₹30 milk run. They abandon the cart or go to the kirana. Subscription must solve this structurally.',
    },
    {
      num: '05',
      title: 'Known awareness, near-zero adoption.',
      body: 'Users have heard of milk baskets and Amazon Subscribe & Save. They haven\'t adopted because current models feel rigid, prepaid, or both.',
    },
  ]
  return (
    <SectionLight>
      <Eyebrow>User Research · Primary</Eyebrow>
      <H2Light>What we heard</H2Light>
      <BodyLight className="max-w-[720px] mb-12">
        Five patterns surfaced consistently across the 42-response survey and 10 depth interviews. Each mapped directly to a pain cluster in the problem framing below.
      </BodyLight>
      <div className="flex flex-col divide-y divide-border-cream">
        {findings.map(f => (
          <div key={f.num} className="flex gap-8 py-8 first:pt-0 last:pb-0">
            <div className="font-serif text-[32px] font-medium leading-[1.10] text-terracotta shrink-0 w-12">{f.num}</div>
            <div>
              <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black mb-2">{f.title}</h3>
              <p className="text-[16px] leading-[1.60] text-olive-gray">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLight>
  )
}

function VoiceOfUserSection() {
  const patterns = [
    {
      title: 'Reorder Fatigue Is a Real Cognitive Tax',
      quote: '"I keep meaning to reorder milk. By the time I remember, I\'m already out."',
      attribution: 'Interview R4 · Urban Routine Juggler · 26 · Gurgaon',
    },
    {
      title: 'Early Adopters Are Waiting for a Credible Trigger',
      quote: '"Bro, if I could just tell the app \'daily milk, skip weekends,\' I\'d never buy from anywhere else."',
      attribution: 'Interview R4 · Bachelor / PG Resident · 24 · Hyderabad',
    },
    {
      title: 'Prepaid Models Are a Hard \'No\'',
      quote: '"I refuse prepaid. If I pay upfront, I\'ll forget to use it and lose the money. I want to pay when I eat."',
      attribution: 'Synthesized from 6 of 10 interviews',
    },
    {
      title: 'MOV Forces Waste or Kirana Defection',
      quote: '"A ₹30 milk order with ₹199 MOV means I\'m buying snacks I didn\'t want, or just walking downstairs. Usually I walk."',
      attribution: 'Synthesized from 7 of 10 interviews',
    },
  ]
  return (
    <SectionDark>
      <H2Dark>Voice of the User</H2Dark>
      <p className="text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-12">
        Ten depth interviews, 7–15 minutes each, phone and Zoom. Two quotes from each of the two ICP personas bring the research to life.
      </p>
      <div className="flex flex-col gap-6 mb-12">
        {patterns.map(p => (
          <DarkCard key={p.title}>
            <h3 className="font-serif text-[25px] font-medium leading-[1.30] text-ivory mb-4">{p.title}</h3>
            <p className="font-serif text-[20px] leading-[1.40] text-ivory italic mb-3">
              <span style={{ color: '#d97757' }}>"</span>
              {p.quote.replace(/^"|"$/g, '')}
              <span style={{ color: '#d97757' }}>"</span>
            </p>
            <p className="text-[14px] text-warm-silver">— {p.attribution}</p>
          </DarkCard>
        ))}
      </div>
      <div>
        <p className="font-serif text-[32px] font-medium leading-[1.30] text-ivory max-w-[720px] mb-3">
          The pattern isn't disinterest. It's a market trained to distrust the contract.
        </p>
        <p className="font-serif text-[20px] font-medium leading-[1.30] max-w-[720px]" style={{ color: '#d97757' }}>
          Every incumbent has made commitment the price of convenience. The opportunity is to reverse that sequence.
        </p>
      </div>
    </SectionDark>
  )
}

function ProblemFramingSection() {
  const clusters = [
    {
      code: 'P1',
      title: 'Commitment Anxiety',
      subtitle: 'Flexibility + refund + trust in pause',
      body: 'Users will not subscribe if they fear being charged for something they don\'t want or can\'t stop. This is the dominant blocker across the sample.',
    },
    {
      code: 'P2',
      title: 'Wastage Risk',
      subtitle: 'Fixed cadence vs. variable consumption',
      body: 'Household usage flexes with guests, travel, and leftovers. Rigid weekly delivery creates spoilage and guilt.',
    },
    {
      code: 'P3',
      title: 'Economic Friction',
      subtitle: 'MOV, delivery fee, kirana parity',
      body: 'A ₹30 milk order + ₹199 MOV + ₹25 delivery fee makes Blinkit 2× kirana. Subscription must remove this structurally, not paper over it with discounts.',
    },
    {
      code: 'P4',
      title: 'Cognitive Load',
      subtitle: 'Forgetting + manual reorder drudgery',
      body: 'Keeping staples stocked is a background tax. Users want the app to carry this load — but not silently, not without their explicit consent each cycle.',
    },
  ]
  return (
    <SectionLight>
      <H2Light>From eight overlapping problems to four core pain clusters</H2Light>
      <p className="font-serif text-[20px] font-medium leading-[1.30] text-near-black max-w-[720px] mb-10">
        v1 diagnosed eight problems. v2 consolidates them into four clusters — each a root cause with a clear solution pairing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {clusters.map(c => (
          <IvoryCard key={c.code}>
            <div className="font-serif text-[32px] font-medium leading-[1.10] text-terracotta mb-2">{c.code}</div>
            <h3 className="font-serif text-[22px] font-medium leading-[1.25] text-near-black mb-1">{c.title}</h3>
            <p className="text-[13px] font-medium text-stone-gray italic mb-3">{c.subtitle}</p>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{c.body}</p>
          </IvoryCard>
        ))}
      </div>
      <div className="bg-warm-sand rounded-lg px-5 py-4 font-mono text-[13px] text-charcoal-warm">
        P1 ← &#123;Commitment, Subscription Anxiety&#125; · P2 ← &#123;Fixed Delivery, Timing Misalignment&#125; · P3 ← &#123;Price, MOV&#125; · P4 ← &#123;Reorder Load, Onboarding&#125;
      </div>
    </SectionLight>
  )
}

function PersonasSection() {
  return (
    <SectionLight className="!pt-0">
      <H2Light>Two personas, one ICP</H2Light>
      <p className="font-serif text-[20px] leading-[1.60] text-olive-gray max-w-[720px] mb-10">
        v1 included a senior low-tech persona that didn't fit Blinkit's app-native ICP. v2 sharpens to the two cohorts that actually live on the platform — both urban, both app-native, both already ordering 3+ times a week.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Persona 1 */}
        <IvoryCard className="shadow-[rgba(0,0,0,0.05)_0px_4px_24px]">
          <div className="font-serif text-[32px] font-medium leading-[1.10] text-near-black mb-1">Urban Routine Juggler</div>
          <p className="text-[14px] text-olive-gray mb-3">Working professional · 26 · Shared apartment · Gurgaon / Bengaluru</p>
          <span className="inline-block bg-terracotta text-ivory text-[11px] font-medium tracking-[0.3px] rounded-full px-3 py-1 mb-6">PRIMARY ICP — LARGEST REACH</span>
          <div className="space-y-4 text-[15px] leading-[1.60]">
            <div><span className="font-medium text-near-black">Profile:</span> <span className="text-olive-gray">Early-career working professional. Lives in a shared apartment. Uses q-commerce apps as a utility rather than a luxury.</span></div>
            <div><span className="font-medium text-near-black">Shopping behaviour:</span> <span className="text-olive-gray">Orders 3–4× a week on q-commerce apps. Buys milk, bread, eggs, coffee, snacks. Switches between Blinkit and Zepto on whim.</span></div>
            <div><span className="font-medium text-near-black">Needs:</span> <span className="text-olive-gray">Set-and-forget automation · one-tap pause for travel weeks · no fixed delivery slot anxiety.</span></div>
            <div><span className="font-medium text-near-black">Pains:</span> <span className="text-olive-gray">Repetitive reorder fatigue · misses delivery when schedule changes · refuses prepaid lock-in models.</span></div>
          </div>
          <div className="mt-6 border-l-4 border-terracotta pl-4">
            <p className="font-serif text-[17px] italic text-near-black">"I keep meaning to reorder milk. By the time I remember, I'm already out."</p>
          </div>
        </IvoryCard>
        {/* Persona 2 */}
        <IvoryCard className="shadow-[rgba(0,0,0,0.05)_0px_4px_24px]">
          <div className="font-serif text-[32px] font-medium leading-[1.10] text-near-black mb-1">Bachelor / PG Resident</div>
          <p className="text-[14px] text-olive-gray mb-3">Male skew · 22–28 · PG or 2BHK with flatmates · Hyderabad / Pune / Delhi NCR</p>
          <span className="inline-block text-ivory text-[11px] font-medium tracking-[0.3px] rounded-full px-3 py-1 mb-6" style={{ backgroundColor: '#d97757' }}>HIGHEST CONVERSION RATE</span>
          <div className="space-y-4 text-[15px] leading-[1.60]">
            <div><span className="font-medium text-near-black">Profile:</span> <span className="text-olive-gray">Bachelor or PG resident in Tier-1 metros. Highest-frequency cohort in the dataset.</span></div>
            <div><span className="font-medium text-near-black">Shopping behaviour:</span> <span className="text-olive-gray">5–8 Blinkit orders per week. Narrow basket — milk, eggs, bread, Maggi, curd. Splits orders with flatmates via UPI.</span></div>
            <div><span className="font-medium text-near-black">Needs:</span> <span className="text-olive-gray">Auto-delivery to fixed address window · shared subscription with flatmate · zero-effort refund when hostel shuts.</span></div>
            <div><span className="font-medium text-near-black">Pains:</span> <span className="text-olive-gray">Running out of milk at 7 AM is a recurring disaster · MOV forces adding junk items · no one wants to be the household "reorder person."</span></div>
          </div>
          <div className="mt-6 border-l-4 pl-4" style={{ borderColor: '#d97757' }}>
            <p className="font-serif text-[17px] italic text-near-black">"If I could just tell the app 'daily milk, skip weekends,' I'd never buy from anywhere else."</p>
          </div>
        </IvoryCard>
      </div>
    </SectionLight>
  )
}

function SolutionFrameworkSection() {
  const tiers = [
    {
      tier: 1,
      solutions: [
        { num: '01', title: 'Pause / Skip / Cancel in one tap', body: 'The foundational trust move. A user must be able to stop the subscription with a single gesture, no dialog, no retention modal.', solves: 'P1' },
        { num: '02', title: 'Pay-per-delivery (no prepaid lock-in)', body: 'Reverses the default industry contract. Users pay only for what lands at the door.', solves: 'P1' },
        { num: '03', title: 'Instant refund on any failure', body: 'If an item is missing, spoiled, or damaged, the refund is credited to the user wallet before the rider leaves.', solves: 'P1' },
      ],
    },
    {
      tier: 2,
      solutions: [
        { num: '01', title: 'Freshness & damage guarantee', body: 'Explicit guarantee on perishables — no fine print. Every eligible SKU carries the promise.', solves: 'P2' },
        { num: '02', title: 'Price-lock on subscribed SKUs (30 days)', body: 'Subscribers see the same price for 30 days on subscribed SKUs. Removes pricing anxiety.', solves: 'P3' },
        { num: '03', title: 'Weekly MOV (not per-order MOV)', body: 'Users meet a ₹450/week basket threshold instead of ₹199 per order. A ₹30 milk run now works economically.', solves: 'P3' },
      ],
    },
    {
      tier: 3,
      solutions: [
        { num: '01', title: 'Smart reminder → confirm to subscribe', body: 'A user reorders milk 6 times in 3 weeks → app suggests subscription with one tap. Gateway feature.', solves: 'P4' },
        { num: '02', title: 'Flatmate / household shared subscriptions', body: 'Multi-user billing, single delivery. Specifically for the PG Resident persona.', solves: 'P4' },
        { num: '03', title: 'Predictive quantity nudges', body: '"You usually buy 2 loaves — want to switch to 3 before the weekend?" Gentle automation without silent overreach.', solves: 'P2 + P4' },
      ],
    },
  ]
  return (
    <SectionLight id="solution">
      <Eyebrow>Solutions</Eyebrow>
      <H2Light>Three tiers. Build in order. Trust first, growth last.</H2Light>
      <BodyLight className="max-w-[720px] mb-12">
        Nine solutions, tiered by what they unlock. Tier 1 unblocks adoption. Tier 2 unlocks perishables and trust. Tier 3 lifts LTV and adoption depth. The tiering is the build order — not a menu to be re-sequenced.
      </BodyLight>
      <div className="space-y-10">
        {tiers.map(t => (
          <div key={t.tier}>
            <div className="mb-4"><TierPill tier={t.tier} /></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {t.solutions.map(s => (
                <IvoryCard key={s.num}>
                  <div className="font-serif text-[32px] font-medium leading-[1.10] text-terracotta mb-2">{s.num}</div>
                  <h4 className="font-serif text-[18px] font-medium leading-[1.30] text-near-black mb-2">{s.title}</h4>
                  <p className="text-[14px] leading-[1.60] text-olive-gray mb-3">{s.body}</p>
                  <span className="text-[12px] font-mono text-stone-gray bg-warm-sand rounded px-2 py-0.5">Solves {s.solves}</span>
                </IvoryCard>
              ))}
            </div>
          </div>
        ))}
      </div>
      <PullQuote className="mt-10">A user must be able to exit the subscription faster than they entered it.</PullQuote>
    </SectionLight>
  )
}

function RICESection() {
  const rows = [
    { tier: 'T1', solution: 'Pause / Skip + Instant Refund', reach: 95, impact: 5, confidence: '95%', effort: 3, rice: '150.4', phase: 1 },
    { tier: 'T1', solution: 'Pay-per-delivery model', reach: 90, impact: 4.5, confidence: '90%', effort: 4, rice: '91.1', phase: 1 },
    { tier: 'T3', solution: 'Smart reminder → confirm', reach: 95, impact: 2.5, confidence: '90%', effort: 2, rice: '106.9', phase: 2 },
    { tier: 'T2', solution: 'Weekly MOV (not per-order)', reach: 80, impact: 4, confidence: '80%', effort: 4, rice: '64.0', phase: 2 },
    { tier: 'T2', solution: 'Freshness & damage guarantee', reach: 85, impact: 4, confidence: '85%', effort: 5, rice: '57.8', phase: 2 },
    { tier: 'T2', solution: 'Price-lock on subscribed SKUs (30d)', reach: 70, impact: 3.5, confidence: '75%', effort: 6, rice: '30.6', phase: 3 },
  ]
  const buildOrder = [
    { step: 1, label: 'Pause / Skip + Refund', tag: 'Foundation' },
    { step: 2, label: 'Pay-per-delivery', tag: 'Foundation' },
    { step: 3, label: 'Freshness Guarantee', tag: 'Differentiation' },
    { step: 4, label: 'Weekly MOV', tag: 'Differentiation' },
    { step: 5, label: 'Smart Reminders', tag: 'Growth' },
    { step: 6, label: 'Price Lock', tag: 'Growth' },
  ]
  return (
    <SectionLight>
      <Eyebrow>Prioritization</Eyebrow>
      <H2Light>Six candidates scored, six ranked, two reframed</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        Re-scored with defensible impact and justifications. The top two by RICE (Pause/Skip + Refund, Pay-per-delivery) map cleanly to P1 — the commitment-anxiety blocker.
      </BodyLight>
      <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory mb-10">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr>
              {['Tier', 'Solution', 'Reach', 'Impact', 'Confidence', 'Effort', 'RICE', 'Status'].map(h => <Th key={h}>{h}</Th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <Td highlight={row.phase === 1} className="font-mono text-stone-gray">{row.tier}</Td>
                <Td highlight={row.phase === 1} className={row.phase === 1 ? 'font-medium text-near-black' : 'text-near-black'}>{row.solution}</Td>
                <Td highlight={row.phase === 1}>{row.reach}</Td>
                <Td highlight={row.phase === 1}>{row.impact}</Td>
                <Td highlight={row.phase === 1}>{row.confidence}</Td>
                <Td highlight={row.phase === 1}>{row.effort}</Td>
                <Td highlight={row.phase === 1} className="font-medium text-terracotta">{row.rice}</Td>
                <Td highlight={row.phase === 1}><PhasePill phase={row.phase} /></Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        <IvoryCard>
          <h4 className="font-serif text-[18px] font-medium text-near-black mb-3">Why the T1 pair leads</h4>
          <p className="text-[15px] leading-[1.60] text-olive-gray mb-2"><strong className="text-near-black">Pause / Skip + Refund (150.4):</strong> Foundation. Unblocks every persona. Cheap to build — UI + ledger, no new ops. The feature every incumbent got wrong.</p>
          <p className="text-[15px] leading-[1.60] text-olive-gray"><strong className="text-near-black">Pay-per-delivery (91.1):</strong> Removes prepaid fear. Aligns with the "pay when you eat" instinct from interviews. Without it, the refund promise is hollow.</p>
        </IvoryCard>
        <IvoryCard>
          <h4 className="font-serif text-[18px] font-medium text-near-black mb-3">Why Smart Reminder ranks high but isn't #1</h4>
          <p className="text-[15px] leading-[1.60] text-olive-gray">RICE of 106.9 puts it above Weekly MOV numerically, but it's technically not a subscription feature — it's a notification gateway. Shipping it before the trust layer risks users adopting reminders while still distrusting the subscription contract.</p>
        </IvoryCard>
      </div>
      <H3Light>Build Order</H3Light>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {buildOrder.map(b => (
          <div key={b.step} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 font-serif text-[20px] font-medium text-ivory" style={{ backgroundColor: '#c96442' }}>
              {b.step}
            </div>
            <div className="font-serif text-[14px] font-medium text-near-black leading-[1.30] mb-1">{b.label}</div>
            <div className="text-[12px] text-stone-gray">{b.tag}</div>
          </div>
        ))}
      </div>
    </SectionLight>
  )
}

function UnitEconomicsSection() {
  const tableRows = [
    { item: 'Selling price (1L milk)', amount: '+₹62.00', highlight: false },
    { item: 'COGS (supplier)', amount: '−₹54.00', highlight: false },
    { item: 'Gross margin', amount: '+₹8.00', highlight: false },
    { item: 'Rider cost (batched × 5 orders)', amount: '−₹7.00', highlight: false },
    { item: 'Dark-store fulfillment cost', amount: '−₹2.50', highlight: false },
    { item: 'Payment + platform cost', amount: '−₹1.00', highlight: false },
    { item: 'Contribution margin (per order)', amount: '−₹2.50', highlight: true },
    { item: 'LTV lift from retention (12 months)', amount: '+₹380.00', highlight: false, accent: true },
  ]
  return (
    <SectionDark>
      <H2Dark>The Unit-Economics Truth</H2Dark>
      <BodyDark className="max-w-[720px] mb-12">
        Subscription has to pay for itself — or it becomes a VC-subsidised growth hack that dies in a funding winter. The per-order economics of a single milk delivery are brutal. The case for building this feature lives entirely in what happens across twelve months of retention.
      </BodyDark>
      <H3Light>Per-Delivery Economics — 1L Milk Subscribed</H3Light>
      <p className="text-[13px] text-stone-gray italic mb-6">Indicative model · partner-margin and rider cost from published q-commerce disclosures</p>
      <div className="overflow-x-auto rounded-2xl border border-dark-surface bg-dark-surface mb-10">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr>
              <Th dark>Line item</Th>
              <Th dark>Amount</Th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr key={i}>
                <Td dark className={row.highlight ? 'font-medium text-ivory border-l-4 border-terracotta' : ''}>{row.item}</Td>
                <Td dark className={`font-mono text-right ${row.highlight ? 'text-terracotta font-medium' : row.accent ? 'text-[#d97757] font-medium' : ''}`}>{row.amount}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {[
          { title: 'Per-order CM is negative.', body: 'Single-SKU daily orders lose money unless rider trips are batched across 4+ subscriptions per route. Batching is the core ops bet, not a footnote.' },
          { title: 'Retention is where this pays back.', body: 'A subscribed user retained 12 months generates ~₹380 of incremental GMV contribution. Payback: month 3–4. This isn\'t GMV arithmetic — it\'s LTV arithmetic.' },
          { title: 'Weekly MOV is the guardrail.', body: 'Remove the ₹199-per-order friction, but cap subscribed baskets at ₹450/week minimum. Protects CM while solving single-SKU pain.' },
        ].map(card => (
          <DarkCard key={card.title}>
            <h4 className="font-serif text-[20px] font-medium leading-[1.30] mb-3" style={{ color: '#d97757' }}>{card.title}</h4>
            <p className="text-[15px] leading-[1.60] text-warm-silver">{card.body}</p>
          </DarkCard>
        ))}
      </div>
      <p className="font-serif text-[32px] font-medium leading-[1.30] text-ivory max-w-[720px]">
        This feature doesn't get built because it's profitable on day one. It gets built because it's the only defensible shape of profitability in month twelve.
      </p>
    </SectionDark>
  )
}

function GTMSection() {
  const phases = [
    { phase: 'Phase 1 · Pilot', timeline: 'Weeks 1–6', scope: '1 SKU · 1 catchment · 500 users', gate: '25% D30 retention · <5% refund rate', highlight: true },
    { phase: 'Phase 2 · Category Expand', timeline: 'Weeks 7–12', scope: '+ bread, eggs, curd · same catchment', gate: '40% of users add a second SKU · CM neutral', highlight: false },
    { phase: 'Phase 3 · Geo Expand', timeline: 'Weeks 13–20', scope: '10 catchments across Delhi NCR + Bengaluru', gate: 'Batching ≥4 orders per rider trip achieved', highlight: false },
    { phase: 'Phase 4 · National', timeline: 'Week 21+', scope: 'All Tier-1 metros · full essentials basket', gate: '8% of Blinkit GMV subscribed', highlight: false },
  ]
  return (
    <SectionLight>
      <Eyebrow>GTM</Eyebrow>
      <H2Light>Milk-only. One catchment. Six weeks. Then scale.</H2Light>
      <p className="font-serif text-[20px] font-medium leading-[1.30] text-near-black max-w-[720px] mb-10">
        Every previous subscription product we studied launched too broad. Country Delight started with one SKU and one city and took eight years to scale nationally. We borrow their lesson and compress the sequence — but we do not skip the sequencing.
      </p>
      <IvoryCard className="mb-10">
        <h3 className="font-serif text-[32px] font-medium leading-[1.15] text-near-black mb-6">Phase 1 · Pilot MVP</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'SKU', value: 'Amul Taaza 1L' },
            { label: 'Catchment', value: 'Gurgaon DLF' },
            { label: 'Users', value: '500' },
            { label: 'Duration', value: '6 weeks' },
          ].map(item => (
            <div key={item.label} className="bg-parchment border border-border-cream rounded-xl p-4">
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-2">{item.label}</div>
              <div className="font-serif text-[22px] font-medium text-near-black">{item.value}</div>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-[1.60] text-olive-gray italic">One-tap pause / skip / cancel available from day one. No retention modal. No prepaid wallet. No minimum lock-in.</p>
      </IvoryCard>
      <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory mb-8">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr>
              {['Phase', 'Timeline', 'Scope', 'Success Gate'].map(h => <Th key={h}>{h}</Th>)}
            </tr>
          </thead>
          <tbody>
            {phases.map(row => (
              <tr key={row.phase}>
                <Td highlight={row.highlight} className={row.highlight ? 'font-medium text-near-black border-l-4 border-terracotta' : 'font-medium text-near-black'}>{row.phase}</Td>
                <Td highlight={row.highlight}>{row.timeline}</Td>
                <Td highlight={row.highlight}>{row.scope}</Td>
                <Td highlight={row.highlight}>{row.gate}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <IvoryCard className="border-l-4 border-terracotta rounded-l-none">
        <p className="font-serif text-[20px] font-medium leading-[1.30] text-near-black">Each gate is a kill-switch, not a target. Missing a gate triggers a one-week diagnostic sprint — not an automatic advance to the next phase.</p>
      </IvoryCard>
    </SectionLight>
  )
}

function MetricsSection() {
  const leadingMetrics = [
    { value: '≥ 40%', label: 'D30 retention', role: 'Users still subscribed after 30 days — adoption signal' },
    { value: '+2.5×', label: 'Order frequency lift', role: 'Vs. same user\'s pre-sub baseline — engagement signal' },
    { value: '< 4%', label: 'Refund rate', role: 'Guardrail — breach means quality failure' },
    { value: '≥ 4.0', label: 'Batching efficiency', role: 'Orders per rider trip — CM guardrail' },
  ]
  const gateRows = [
    { metric: '% Monthly GMV from subs', category: 'NORTH STAR', p1: '—', p2: '≥ 0.5%', p3: '≥ 2%', nat: '≥ 8%' },
    { metric: 'D30 retention', category: 'ADOPTION', p1: '≥ 25%', p2: '≥ 32%', p3: '≥ 38%', nat: '≥ 40%' },
    { metric: 'Second-SKU adoption', category: 'ADOPTION', p1: '—', p2: '≥ 40%', p3: '≥ 55%', nat: '≥ 70%' },
    { metric: 'Refund rate', category: 'OPS HEALTH', p1: '≤ 5%', p2: '≤ 4.5%', p3: '≤ 4%', nat: '≤ 4%' },
    { metric: 'Batching efficiency (orders/trip)', category: 'OPS HEALTH', p1: '≥ 3.0', p2: '≥ 3.5', p3: '≥ 4.0', nat: '≥ 4.0' },
    { metric: 'Pickup SLA compliance', category: 'OPS HEALTH', p1: '≥ 95%', p2: '≥ 96%', p3: '≥ 97%', nat: '≥ 98%' },
  ]
  const categories = [...new Set(gateRows.map(r => r.category))]
  return (
    <SectionLight>
      <H2Light>Metrics & Success Measurement</H2Light>
      <IvoryCard className="border-l-4 border-terracotta rounded-l-none mb-10">
        <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta mb-2">North Star</div>
        <div className="flex items-baseline gap-4 flex-wrap">
          <span className="font-serif text-[clamp(36px,4vw,52px)] font-medium text-near-black">8%</span>
          <span className="font-serif text-[20px] font-medium text-near-black">of Monthly GMV from Subscribed Baskets</span>
        </div>
        <p className="text-[13px] text-stone-gray mt-2">Baseline: 0% · Target: 8% · Horizon: 12 months</p>
        <div className="bg-warm-sand rounded-lg px-4 py-3 mt-4 font-mono text-[13px] text-charcoal-warm">
          Subscribed GMV ÷ Total Monthly GMV — optimising for subscription share, not just GMV, is the structural difference between a feature and a business unit.
        </div>
      </IvoryCard>
      <H3Light>Leading Metrics</H3Light>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {leadingMetrics.map(m => (
          <IvoryCard key={m.value} className="text-center">
            <div className="font-serif text-[clamp(28px,3.5vw,48px)] font-medium text-near-black mb-1">{m.value}</div>
            <div className="text-[14px] font-medium text-olive-gray mb-1">{m.label}</div>
            <div className="text-[12px] text-stone-gray leading-[1.43]">{m.role}</div>
          </IvoryCard>
        ))}
      </div>
      <H3Light>Phase-Gated Success Criteria</H3Light>
      <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr>
              {['Metric', 'Phase 1 (Wk 6)', 'Phase 2 (Wk 12)', 'Phase 3 (Wk 20)', 'National (Wk 21+)'].map(h => <Th key={h}>{h}</Th>)}
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <>
                <tr key={`cat-${cat}`}>
                  <td colSpan={5} className="px-5 py-2 border-b border-border-cream bg-warm-sand text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta">{cat}</td>
                </tr>
                {gateRows.filter(r => r.category === cat).map(row => (
                  <tr key={row.metric}>
                    <Td className="font-medium text-near-black">{row.metric}</Td>
                    <Td>{row.p1}</Td>
                    <Td>{row.p2}</Td>
                    <Td>{row.p3}</Td>
                    <Td>{row.nat}</Td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </SectionLight>
  )
}

function RisksSection() {
  const risks = [
    { risk: 'Cannibalization of impulse orders', likelihood: 'HIGH', mitigation: 'Track subscribed-user impulse GMV as a guardrail metric. Price-lock limited to subscribed SKUs only — does not spill into broader catalog pricing.' },
    { risk: 'Stockout on guaranteed deliveries', likelihood: 'HIGH', mitigation: 'Reserve 110% of subscribed inventory at dark-store level. Auto-substitute with refund if fulfillment fails.' },
    { risk: 'Refund abuse at scale', likelihood: 'MEDIUM', mitigation: 'Cap refunds at 3 per user per month. Require a photo for damage claims above ₹100. Introduce trust-score at user level after M3.' },
    { risk: 'Rider batching math breaks in low-density pincodes', likelihood: 'MEDIUM', mitigation: 'Only launch subscription in pincodes with ≥50 active users. Re-gate batching efficiency on each geo expansion.' },
  ]
  return (
    <SectionLight>
      <H2Light>Risks and what can break this</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        Four risks surfaced in the commercial model. Two are high-likelihood. Each has an explicit mitigation and a kill-switch threshold.
      </BodyLight>
      <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr>
              {['Risk', 'Likelihood', 'Mitigation'].map(h => <Th key={h}>{h}</Th>)}
            </tr>
          </thead>
          <tbody>
            {risks.map((row, i) => (
              <tr key={i}>
                <Td className="font-medium text-near-black">{row.risk}</Td>
                <Td><ThreatPill level={row.likelihood} /></Td>
                <Td className="text-olive-gray">{row.mitigation}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionLight>
  )
}

function ConstraintsSection() {
  const constraints = [
    {
      icon: '⚙',
      title: 'Technology',
      items: [
        'Subscription ledger: The pause/skip/refund UI is cheap; the ledger underneath is not. Must be transactional, auditable, and user-visible in real time.',
        'MOV model re-architecture: Weekly MOV requires a new basket-accumulation primitive. The existing per-order MOV logic cannot be reused.',
        'Event instrumentation: New events for subscription state changes don\'t exist yet.',
      ],
    },
    {
      icon: '🏭',
      title: 'Operations',
      items: [
        'Rider batching dependency: Per-order CM is −₹2.50. Break-even requires ≥4 subscriptions per rider trip. Low-density pincodes must be gated.',
        'Dark-store inventory reservation: 110% of subscribed inventory must be reserved. Stockout on a subscribed delivery is a trust-killer, not a product glitch.',
        'Cold-chain for perishables: Phase 2 introduces dairy, eggs, curd — existing dark-store cold infrastructure must be audited before launch.',
      ],
    },
    {
      icon: '🧠',
      title: 'User Behaviour',
      items: [
        'Prepaid aversion: 6 of 10 interviews surfaced this unprompted. Any pilot that introduces prepaid — even as an upsell — will contaminate learning.',
        'Hostel / PG churn: Persona 2 has seasonal address changes. One-tap cancel + full refund is not a feature; it\'s the entry condition for this cohort.',
        'Flatmate friction: Nobody wants to be the "reorder person." Shared subscriptions are a growth bet — ship after trust is proven.',
      ],
    },
    {
      icon: '💰',
      title: 'Financial',
      items: [
        'Per-order CM is negative: Every single-SKU daily delivery loses ₹2.50. Profitability lives in batching + 12-month LTV.',
        'Weekly MOV ceiling: Cap subscribed baskets at ₹450/week minimum. Below this, batching math breaks.',
        'No marketing spend in Pilot: Pilot must be opt-in from the existing user base. Paid acquisition introduces novelty bias.',
      ],
    },
  ]
  const assumptions = [
    { num: 'A1 ★', assumption: 'Batching ≥4 orders per rider trip achievable in high-density pincodes (most consequential)', ifTrue: 'Unit economics close by Phase 3; national rollout viable', ifWrong: 'Per-order losses compound; product must be restructured or killed', test: 'Daily rider-trip audit from Day 1. Phase 3 gate is 4.0 orders/trip' },
    { num: 'A2', assumption: 'Pay-per-delivery removes prepaid fear without cannibalising wallet balance', ifTrue: 'Adoption curve cleaner than incumbent subscription apps', ifWrong: 'Users adopt but churn fast; D30 retention below 25%', test: 'Phase 1 D30 retention gate — <25% triggers qualitative interview cohort' },
    { num: 'A3', assumption: 'Early-adopter Persona 2 converts at 3–4× family cohort rate', ifTrue: 'Phase 1 cohort validates the persona hypothesis', ifWrong: 'Persona thesis wrong; re-segment based on Phase 1 data', test: '500-user Pilot cohort segmented 70/30 Persona 2/1' },
    { num: 'A4', assumption: 'Refund rate stays below 5% with instant-credit policy', ifTrue: 'Refund abuse is not a material cost; trust signal is strong', ifWrong: 'Refund abuse scales with adoption; photo-proof + caps required earlier', test: 'Weekly refund rate monitoring; alert at 4.5%' },
    { num: 'A5', assumption: '110% inventory reservation at dark-store absorbs stockout risk', ifTrue: 'Guaranteed delivery is credible; subscription contract holds', ifWrong: 'Stockouts recur; trust signal collapses; Phase 2 expansion blocked', test: 'Daily stockout audit on subscribed SKUs; 98%+ fulfillment required' },
  ]
  return (
    <SectionLight className="!pt-0">
      <H2Light>Constraints & Assumptions</H2Light>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {constraints.map(c => (
          <IvoryCard key={c.title}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[24px]">{c.icon}</span>
              <h3 className="font-serif text-[20px] font-medium text-near-black">{c.title}</h3>
            </div>
            <ul className="space-y-3">
              {c.items.map((item, i) => (
                <li key={i} className="text-[14px] leading-[1.60] text-olive-gray flex gap-2">
                  <span className="text-terracotta mt-0.5 shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </IvoryCard>
        ))}
      </div>
      <H3Light>Key Assumptions</H3Light>
      <div className="overflow-x-auto rounded-2xl border border-border-cream bg-ivory">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr>
              {['#', 'Assumption', 'If True', 'If Wrong', 'How It\'s Tested'].map(h => <Th key={h}>{h}</Th>)}
            </tr>
          </thead>
          <tbody>
            {assumptions.map((row, i) => (
              <tr key={i}>
                <Td highlight={i === 0} className={`font-medium whitespace-nowrap ${i === 0 ? 'text-terracotta' : 'text-near-black'}`}>{row.num}</Td>
                <Td highlight={i === 0} className={i === 0 ? 'font-medium text-near-black' : 'text-near-black'}>{row.assumption}</Td>
                <Td highlight={i === 0} className="text-olive-gray">{row.ifTrue}</Td>
                <Td highlight={i === 0} className="text-olive-gray">{row.ifWrong}</Td>
                <Td highlight={i === 0} className="text-olive-gray">{row.test}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionLight>
  )
}

function TheOneThingSection() {
  return (
    <SectionDark>
      <H2Dark>Where this leaves the problem</H2Dark>
      <BodyDark className="max-w-[720px] mb-8">
        Indian q-commerce has spent three years convincing users that 10-minute delivery is a right. That war is won. The next war is whether these same users will let any of these apps become infrastructure — a default, a background utility, something they don't think about. Subscription is the only product shape that buys that status.
      </BodyDark>
      <BodyDark className="max-w-[720px] mb-8">
        Every competitor in the landscape tried to sell lock-in. Country Delight sells prepaid wallets. Amazon sells auto-renewal. BigBasket sells the midnight cutoff. Each one made commitment the price of admission, and each one capped at single-digit penetration. The opportunity is not to sell lock-in better. It's to sell the opposite — and mean it.
      </BodyDark>
      <p className="text-[17px] leading-[1.60] text-warm-silver max-w-[720px] mb-14 opacity-80">
        This case study is a 6-week Airtribe capstone. The work documented here is a build brief more than a finished plan. But the argument is clear: at current Blinkit economics, subscription is not a growth feature. It's the only way a 10-minute q-commerce business survives the next funding cycle intact.
      </p>
      <p className="font-serif text-[clamp(24px,3vw,36px)] font-medium leading-[1.30] max-w-[720px]" style={{ color: '#d97757' }}>
        Win subscription by making it feel reversible. Every other Indian q-commerce has tried to sell lock-in. We'll win by selling the opposite.
      </p>
    </SectionDark>
  )
}

function AppendicesSection() {
  return (
    <SectionLight>
      <h3 className="font-serif text-[32px] font-medium text-near-black mb-4">Appendices</h3>
      <BodyLight className="mb-6">Supporting artifacts available on request:</BodyLight>
      <ul className="space-y-3">
        {[
          'Raw survey response sheet (42 responses, 15 questions)',
          'Interview transcripts + Zoom recordings (10 users)',
          'Competitive teardown: Country Delight, bbdaily, Amazon Subscribe & Save',
          'Wireflow: subscribe → manage → pause → skip → refund',
          'Dark-store inventory reservation model (Python notebook)',
        ].map(item => (
          <li key={item} className="flex items-center gap-3 text-[16px] leading-[1.60] text-olive-gray">
            <span className="font-serif font-medium text-terracotta">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <a href="mailto:0sujit0@gmail.com" className="bg-terracotta text-ivory text-[14px] font-medium rounded-xl px-5 py-3 no-underline inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
          Request supporting documents →
        </a>
      </div>
    </SectionLight>
  )
}

function PageFooter() {
  return (
    <footer className="bg-parchment border-t border-border-cream px-6 md:px-16 py-8">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between gap-4 text-[14px] text-stone-gray">
        <span>Blinkit Subscription — From Manual Reorder to Automated Essentials · Airtribe PM Capstone · April 2026</span>
        <span>
          Built by Sujit Kumar Sahu · with Divyam Verma &amp; Ankita Mitra&nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/sujit-kumar-sahu-620983155/" target="_blank" rel="noopener noreferrer" className="underline text-stone-gray hover:text-olive-gray transition-colors">LinkedIn</a>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="/" className="underline text-stone-gray hover:text-olive-gray transition-colors">Other Projects</a>
        </span>
      </div>
    </footer>
  )
}

/* ─── Page export ────────────────────────────────────────────────── */

export function BlinkitSubscription() {
  return (
    <ProjectLayout nextProject={{ title: 'Zomato Analytics', path: '/projects/zomato-analytics' }}>
      <HeroSection />
      <OpportunitySection />
      <CoreBetSection />
      <V1V2Section />
      <MethodologySection />
      <CompetitiveLandscapeSection />
      <FiveFindingsSection />
      <VoiceOfUserSection />
      <ProblemFramingSection />
      <PersonasSection />
      <SolutionFrameworkSection />
      <RICESection />
      <UnitEconomicsSection />
      <GTMSection />
      <MetricsSection />
      <RisksSection />
      <ConstraintsSection />
      <TheOneThingSection />
      <AppendicesSection />
      <PageFooter />
    </ProjectLayout>
  )
}
