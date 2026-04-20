import { ProjectLayout } from '../../components/ProjectLayout'

/* ─── Reusable primitives ──────────────────────────────────────────── */

function Eyebrow({ children, dark }) {
  return (
    <div className={`text-[10px] font-medium tracking-[1.2px] uppercase mb-5 ${dark ? 'text-warm-silver' : 'text-stone-gray'}`}>
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
  return <h3 className={`font-serif text-[clamp(24px,3vw,32px)] font-medium leading-[1.15] mb-4 ${dark ? 'text-ivory' : 'text-near-black'}`}>{children}</h3>
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
      <p className={`font-serif text-[25px] font-medium leading-[1.30] ${dark ? 'text-ivory' : 'text-near-black'}`}>{children}</p>
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

function Pill({ children, variant = 'default' }) {
  const styles = {
    terracotta: 'bg-terracotta text-ivory',
    crimson: 'text-ivory',
    sand: 'bg-warm-sand text-charcoal-warm',
    stone: 'bg-warm-sand text-stone-gray',
    coral: 'text-ivory',
    olive: 'bg-warm-sand text-olive-gray',
  }
  const inlineStyles = {
    crimson: { backgroundColor: '#b53333' },
    coral: { backgroundColor: '#d97757' },
  }
  return (
    <span
      className={`text-[12px] font-medium tracking-[0.3px] rounded-full px-4 py-1.5 inline-block ${styles[variant] || 'bg-warm-sand text-charcoal-warm'}`}
      style={inlineStyles[variant] || {}}
    >
      {children}
    </span>
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

function Td({ children, highlight, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b border-border-cream text-[14px] leading-[1.55] align-top ${highlight ? 'bg-warm-sand' : ''} ${className}`}>{children}</td>
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
    <th className="text-left text-[11px] font-medium tracking-[0.12em] uppercase text-warm-silver px-5 py-4 border-b border-dark-surface">{children}</th>
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
        <Eyebrow>Product Case Study · Airtribe Capstone · 2025</Eyebrow>
        <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.10] text-near-black mb-6 max-w-[840px]">
          Nykaa Fashion — Monetizing Browsing Intent
        </h1>
        <p className="text-[20px] leading-[1.60] text-olive-gray max-w-[640px] mb-8">
          Nykaa has a monetization problem, not a traffic problem. 22.2M users browse every month. Only 3.2M buy. This is the story of the 19 million who don't — and the two interlocking solutions that could unlock ₹113–225 Cr in GMV without acquiring a single new user.
        </p>
        <div className="text-[14px] text-stone-gray mb-10 leading-[1.60]">
          Role: Product&nbsp;&nbsp;·&nbsp;&nbsp;Research: 70+ user voices, 29-person survey, 5 IDIs&nbsp;&nbsp;·&nbsp;&nbsp;Scope: Apparel segment&nbsp;&nbsp;·&nbsp;&nbsp;Timeframe: 6-week capstone
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#solutions" className="bg-terracotta text-ivory text-[14px] font-medium rounded-xl px-5 py-3 no-underline inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
            Jump to solutions →
          </a>
          <a href="#annexures" className="bg-warm-sand text-charcoal-warm text-[14px] font-medium rounded-lg px-5 py-3 no-underline inline-flex items-center gap-2 shadow-[0px_0px_0px_1px_#d1cfc5] transition-opacity duration-200 hover:opacity-80">
            View annexures
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
          <p className="font-serif text-[17px] leading-[1.60] text-near-black">
            Nykaa Fashion has a monetization problem, not a traffic problem. With 22.2 million monthly active browsing users but only 3.2 million annual transacting customers (14.4%), 19 million users browse but never buy. The platform's 0.9% conversion rate lags industry benchmarks (1.5–2.0%), leaving significant revenue on the table.
          </p>
          <PullQuote>
            "The prize: improving conversion from 0.9% to 1.4% unlocks ₹113–225 Cr in additional annual GMV — without acquiring a single new user."
          </PullQuote>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatCard value="₹143" label="Revenue per browsing user / month" />
          <StatCard value="49–51%" label="Bounce rate vs. Myntra's 44–45%" />
          <StatCard value="₹3,804 Cr" label="Annual GMV" />
          <StatCard value="₹113–225 Cr" label="Unlocked by lifting conversion 0.9% → 1.4%" />
        </div>
      </div>
    </SectionLight>
  )
}

function CoreInsightSection() {
  return (
    <SectionDark>
      <H2Dark>The Core Insight</H2Dark>
      <p className="font-serif text-[clamp(24px,3vw,36px)] font-medium leading-[1.30] text-ivory mb-6 max-w-[720px]">
        Users trust Nykaa for inspiration. Not for transaction.
      </p>
      <BodyDark className="max-w-[700px] mb-12">
        Research across 70+ user voices, competitive benchmarking, and App Store reviews reveals a critical pattern. The platform excels at discovery — 100,000+ influencers, 2M+ content pieces, 1B+ annual impressions — but fails at the decision layer.
      </BodyDark>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        <DarkCard>
          <div className="font-serif text-[52px] font-medium leading-[1.10] text-coral mb-3">62%</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">cite "Will it fit?" as their top purchase barrier. No size-specific social proof on product pages.</p>
        </DarkCard>
        <DarkCard>
          <div className="font-serif text-[52px] font-medium leading-[1.10] text-coral mb-3">58%</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">cite return anxiety. Documented operational failures — delayed pickups, stuck refunds, phantom tracking — create pre-purchase fear.</p>
        </DarkCard>
        <DarkCard>
          <div className="font-serif text-[52px] font-medium leading-[1.10] text-coral mb-3">82%</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">report post-purchase frustration; 18% pre-purchase fear. Both suppress conversion.</p>
        </DarkCard>
      </div>
      <p className="font-serif text-[25px] font-medium leading-[1.30] text-ivory max-w-[720px]">
        The gap is not awareness. It's confidence at the moment of purchase decision.
      </p>
    </SectionDark>
  )
}

function MethodologySection() {
  const methods = [
    'Online survey · 29 participants',
    'In-depth interviews · 5 (1 in person, 4 remote)',
    'VoC scrape · 100+ interactions across Reddit, LinkedIn, Instagram, App Store, Trustpilot',
    'Secondary · Nykaa Investor Reports, SimilarWeb, Actowiz 2025',
  ]
  return (
    <SectionLight>
      <H3>Methodology</H3>
      <BodyLight className="max-w-[680px] mb-8">
        To address the problem, I focused on the apparel segment of Nykaa Fashion — the platform's dominant category and the primary source of user pain points, a finding supported by both user and market research.
      </BodyLight>
      <div className="flex flex-wrap gap-3">
        {methods.map((m, i) => (
          <span key={i} className="bg-warm-sand text-charcoal-warm text-[14px] rounded-full px-4 py-2">{m}</span>
        ))}
      </div>
    </SectionLight>
  )
}

function MarketSection() {
  return (
    <SectionLight>
      <Eyebrow>Market</Eyebrow>
      <H2Light>Indian Fashion E-Commerce — 2025 Landscape</H2Light>
      <BodyLight className="max-w-[680px] mb-12">
        The market has structurally shifted from Discount-First to Trust-First. The primary driver of loyalty and RPU is now service reliability, not price alone.
      </BodyLight>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        <IvoryCard>
          <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-3">The Service Hegemon</div>
          <div className="font-serif text-[25px] font-medium text-near-black mb-3">Myntra</div>
          <p className="text-[14px] leading-[1.60] text-olive-gray">60–70% premium market share. Try & Buy removes purchase risk entirely. AI Virtual Try-On drives 2× conversion uplift. Sets the service baseline the market expects.</p>
        </IvoryCard>
        <IvoryCard>
          <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-3">The Value Aggregator</div>
          <div className="font-serif text-[25px] font-medium text-near-black mb-3">AJIO</div>
          <p className="text-[14px] leading-[1.60] text-olive-gray">Reliance logistics backbone. Average 23% discount posture. Captures Gen Z and Tier 2/3. Competes on price velocity and trend discovery.</p>
        </IvoryCard>
        <div className="bg-ivory border-2 border-terracotta rounded-2xl p-7">
          <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta mb-3">The Curator</div>
          <div className="font-serif text-[25px] font-medium text-near-black mb-3">Nykaa Fashion</div>
          <p className="text-[14px] leading-[1.60] text-olive-gray">Superior editorial curation. AOV ₹5,349 — highest in segment. <strong>Content War winner. Service War loser.</strong> 0.9% conversion rate.</p>
        </div>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Feature</Th>
            <Th>Nykaa Fashion</Th>
            <Th>Myntra</Th>
            <Th>Ajio</Th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Return window', '7 days — strict QC ✗', '14–30 days — doorstep QC ✓', '15–30 days — Reliance network ✓'],
            ['Try & Buy', 'Not available ✗', 'Yes — flagship differentiator ✓', 'Not available ✗'],
            ['AI Virtual Try-On', 'Not available ✗', 'Yes — 2× conversion uplift ✓', 'Limited'],
            ['Fit assurance', 'Static size charts only ✗', 'AR + AI sizing engine ✓', 'Standard charts'],
            ['Avg. discount (2025)', '20% — conservative ✗', '25% — dynamic ✓', '23% — competitive'],
            ['Loyalty program', 'Prive (beauty-centric)', 'Insider (fashion-native) ✓', 'Reliance One (ecosystem)'],
            ['Conversion rate', '0.9% ✗', 'Est. 2–3%+ ✓', 'Est. 1.5–2%'],
          ].map(([feature, nykaa, myntra, ajio], i) => (
            <tr key={i}>
              <Td className="font-medium text-near-black">{feature}</Td>
              <Td>{nykaa}</Td>
              <Td>{myntra}</Td>
              <Td>{ajio}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function ResearchQuestionsSection() {
  const rqs = [
    ['RQ1', 'Where exactly does the user session end?'],
    ['RQ2', 'What does the user do after leaving — buy elsewhere or abandon?'],
    ['RQ3', 'What would have triggered a purchase in that session?'],
    ['RQ4', 'How many sessions before a purchase? (Multi-session journey)'],
    ['RQ5', 'What role do creators / social media play?'],
  ]
  return (
    <SectionLight>
      <H3>Core Research Questions</H3>
      <BodyLight className="mb-10">Five questions anchored the research. Each maps directly to a leakage pool in the conversion funnel.</BodyLight>
      <IvoryCard className="p-0">
        {rqs.map(([rq, q], i) => (
          <div key={i} className={`flex items-start gap-6 px-7 py-5 ${i < rqs.length - 1 ? 'border-b border-border-cream' : ''}`}>
            <span className="font-serif text-[32px] font-medium leading-[1.10] text-terracotta shrink-0 w-16">{rq}</span>
            <p className="font-serif text-[clamp(16px,2vw,20px)] font-medium leading-[1.30] text-near-black mt-1">{q}</p>
          </div>
        ))}
      </IvoryCard>
    </SectionLight>
  )
}

function SurveySection() {
  return (
    <SectionLight>
      <Eyebrow>User Research · Primary</Eyebrow>
      <H2Light>Survey — 29 responses</H2Light>
      <BodyLight className="mb-12">All 29 responses collected from people aged 24–45, Tier 2+ cities, annual earnings ₹12L+.</BodyLight>
      <H3>What frustrates you more?</H3>
      <IvoryCard className="mb-6">
        <div className="space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[14px] text-olive-gray">Fighting a bad return after buying something that didn't fit</span>
              <span className="font-serif text-[36px] font-medium text-near-black">75%</span>
            </div>
            <div className="h-3 rounded-full bg-border-cream overflow-hidden">
              <div className="h-full rounded-full bg-terracotta" style={{ width: '75%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[14px] text-olive-gray">Loving something but being too scared to buy it in the first place</span>
              <span className="font-serif text-[36px] font-medium text-near-black">25%</span>
            </div>
            <div className="h-3 rounded-full bg-border-cream overflow-hidden">
              <div className="h-full rounded-full bg-warm-sand" style={{ width: '25%' }} />
            </div>
          </div>
        </div>
      </IvoryCard>
      <div className="border-l-4 border-terracotta bg-ivory rounded-r-2xl p-6">
        <p className="font-serif text-[17px] leading-[1.60] text-near-black">
          The dominant frustration is <strong>post-purchase</strong>, not pre-purchase. Users are buying, getting burned on returns, and becoming permanently risk-averse. The bad return experience manufactures the future confidence gap. This shifts solution priority decisively: trust must be rebuilt at the operational layer before product features can move RPU.
        </p>
      </div>
    </SectionLight>
  )
}

function InterviewsSection() {
  const interviews = [
    {
      label: 'Telephonic · 2 Friends (F) · Remote location',
      quote: 'Strong liking for Nykaa Fashion\'s collection, but poor last-mile support and no reliable grievance channel pushes them to default to Myntra and offline shopping.',
    },
    {
      label: 'Recorded · Colleague (M)',
      quote: 'Fit is the biggest deal-breaker when shopping for luxury clothing online.',
    },
    {
      label: 'Chat · Friend (F) · Avid shopper',
      quote: 'High shopping frequency but loyal to premium brands like Zara — doesn\'t engage with Nykaa or Myntra, neither feels aspirational or elevated enough.',
    },
  ]
  return (
    <SectionLight>
      <H3>Interview experience</H3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {interviews.map((iv, i) => (
          <IvoryCard key={i} className="flex flex-col gap-3">
            <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray">{iv.label}</div>
            <p className="font-serif text-[17px] leading-[1.60] text-near-black flex-1">"{iv.quote}"</p>
          </IvoryCard>
        ))}
      </div>
    </SectionLight>
  )
}

function VoCSection() {
  const patterns = [
    {
      title: 'Pattern 1 — The Return Loop Is a Documented Operational Failure',
      quote: '"The courier partner came 4–5 times and rejected pickup every time — just because there was no tag, which was never attached in the first place. I contacted Nykaa support 7–8 times. Every time they promised a resolution. Nothing was updated."',
      attribution: '— Pooja Bhadja, Full Stack Developer · LinkedIn',
    },
    {
      title: 'Pattern 2 — Price Inflation Is Systematic, Not Anecdotal',
      quote: '"I always just surf on Nykaa Fashion and buy from the OG brand or Myntra. Redtape shoes — ₹1,200 on the brand site, ₹2,000 on Nykaa."',
      attribution: '— Reddit r/IndianFashionAddicts',
    },
    {
      title: 'Pattern 3 — Curation Is Loved But Trust Is Broken',
      quote: '"I find Twenty Dresses\' collection to be really classy compared to most Myntra/Ajio brands. But most of it is overpriced. I\'ve found the same pieces on other websites — maybe reverse-search the pieces you like."',
      attribution: '— imabutterflybitch · Reddit',
    },
    {
      title: 'Pattern 4 — Occasion Purchases Are the Highest-Stakes Failure',
      quote: '"Ordered my anniversary dress from Nykaa Fashion — not only did it never arrive on time, but I\'ve been stuck in a return loop since 14th May. 8+ calls to customer service. You have great products but zero customer support. You have surely lost a customer in me."',
      attribution: '— Damini Batham, Head of Marketing · LinkedIn',
    },
    {
      title: 'Pattern 5 — Customer Support Broken at System Level',
      quote: '"Despite 3–5 calls, every conversation felt like talking to a bad AI chatbot. They kept repeating the same lines. The system falsely marked the pickup as \'customer not available\' when that was never the case."',
      attribution: '— Harshdeep Saxena · LinkedIn',
    },
  ]
  return (
    <SectionDark>
      <H2Dark>Voice of the Customer — Reddit, LinkedIn &amp; Instagram</H2Dark>
      <BodyDark className="max-w-[640px] mb-12 text-[20px]">100+ user interactions analyzed across Reddit, LinkedIn, Instagram, App Store, and Trustpilot.</BodyDark>
      <div className="flex flex-col gap-6">
        {patterns.map((p, i) => (
          <DarkCard key={i}>
            <div className="font-serif text-[25px] font-medium text-ivory mb-4">{p.title}</div>
            <p className="font-serif text-[20px] leading-[1.50] text-ivory italic mb-3">
              <span className="text-coral">"</span>{p.quote.replace(/^"/, '').replace(/"$/, '')}<span className="text-coral">"</span>
            </p>
            <div className="text-[14px] text-warm-silver">{p.attribution}</div>
          </DarkCard>
        ))}
      </div>
    </SectionDark>
  )
}

function UserProblemSection() {
  return (
    <SectionLight>
      <H2Light>The 19 Million User Problem</H2Light>
      <BodyLight className="max-w-[680px] mb-12">
        Derived from Nykaa's FY25 Investor Presentation, industry benchmarks, and competitive web traffic data. The quantitative backbone for the conversion-gap hypothesis.
      </BodyLight>

      <H3>Browsing vs. Purchasing Paradigm</H3>
      <TableWrapper>
        <thead>
          <tr>
            <Th>User Segment</Th>
            <Th>Volume (FY25)</Th>
            <Th>% of Active Base</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Total active user base (MAUV)</Td>
            <Td className="font-medium text-near-black">22.2 Million</Td>
            <Td>100.0%</Td>
          </tr>
          <tr>
            <Td>Transacting user base (AUTC)</Td>
            <Td className="font-medium text-near-black">3.2 Million</Td>
            <Td>14.4%</Td>
          </tr>
          <tr className="border-l-4 border-terracotta">
            <Td highlight className="font-medium text-near-black">Browsing-only / non-purchasing users</Td>
            <Td highlight className="font-serif text-[20px] font-medium text-near-black">~19 Million</Td>
            <Td highlight className="font-medium text-terracotta">85.6%</Td>
          </tr>
        </tbody>
      </TableWrapper>

      <div className="mt-12 mb-4">
        <H3>Conversion Rate Benchmarking — The 0.9% Problem</H3>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Market / Platform</Th>
            <Th>Conversion Rate</Th>
            <Th>Variance vs. Nykaa Fashion</Th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Nykaa Fashion FY24/FY25 — Baseline', '0.90%', 'Baseline'],
            ['Indian D2C Fashion Average', '1.50% – 2.00%', '+66% to +122% higher'],
            ['Optimised Indian Fashion Retailers', '~2.15%', '+138% higher'],
            ['Global Fashion & Apparel Average', '3.41% – 4.07%', '+278% to +352% higher'],
          ].map(([market, rate, variance], i) => (
            <tr key={i}>
              <Td className={i === 0 ? 'font-medium text-near-black' : ''}>{market}</Td>
              <Td className={i === 0 ? 'font-medium text-near-black' : 'text-terracotta font-medium'}>{rate}</Td>
              <Td>{variance}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <div className="mt-12 mb-4">
        <H3>Monetisation Per Transacting User — The Opportunity Math</H3>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Metric</Th>
            <Th>Value</Th>
            <Th>Implication</Th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Fashion GMV FY25', '₹3,804 Crore', 'Total revenue pool available'],
            ['Annual Unique Transacting Customers (AUTC)', '3.2 Million', 'Only 14.4% of active base'],
            ['Annual Revenue per Transacting User', '~₹11,887', 'GMV ÷ AUTC — premium cohort'],
            ['Average Order Value (AOV)', '₹5,349', '~2.2 orders/year per buyer'],
            ['Avg. Purchase Frequency', '2.2×/year', "vs. Beauty vertical's recurring rate"],
          ].map(([metric, value, impl], i) => (
            <tr key={i}>
              <Td>{metric}</Td>
              <Td className="font-medium text-near-black">{value}</Td>
              <Td>{impl}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function PersonasSection() {
  const personas = [
    {
      name: 'The Burned Pragmatist',
      size: '~10–12M of 19M leakage pool',
      badge: 'HIGHEST RPU POTENTIAL',
      badgeVariant: 'terracotta',
      profile: 'Female, 24–34, Tier 1 urban, working professional, ₹8–18L income. Previously tried Nykaa.',
      behaviour: 'Browses Nykaa regularly but never commits. Had a bad return or delivery experience. Uses Nykaa as a catalogue, executes on Myntra.',
      belief: '"The curation is better but the risk isn\'t worth it. I\'ve been burned before."',
      rpu: 'If converted, spends ~₹11,887/year. Converting 10% of this segment = ~₹1,200 Cr+ in GMV recovery.',
      unlock: 'Operational trust rebuilt through return-experience redesign — not just policy on paper.',
      evidence: '73% survey cite returns as dealbreaker · Reddit dominant thread sentiment · App Store review aggregation 2024–26',
    },
    {
      name: 'The Occasion Buyer',
      size: '~3–4M of 19M leakage pool',
      badge: 'HIGHEST CHURN RISK',
      badgeVariant: 'crimson',
      profile: 'Female, 25–38, shopping for a specific event — wedding, anniversary, party, function. High purchase urgency.',
      behaviour: 'High willingness to spend (₹3,000–8,000 basket). Needs certainty above everything. Currently Nykaa\'s worst-served user.',
      belief: '"If this goes wrong and I can\'t return it, I have nothing to wear to my event."',
      rpu: 'Highest AOV potential (₹5,000–8,000 per transaction). One win = high-value loyal customer. One loss = permanent churn.',
      unlock: 'Guaranteed delivery timelines + frictionless returns as a category-level promise for occasion purchases.',
      evidence: '3 LinkedIn posts from senior professionals — anniversary dress, function outfit, formal order all trapped in return loops.',
    },
    {
      name: 'The Savvy Browser',
      size: '~5–6M of 19M leakage pool',
      badge: 'HIGHEST SWITCH RATE',
      badgeVariant: 'sand',
      profile: 'Female, 22–32, Instagram-native, highly price-aware, shops across multiple platforms simultaneously.',
      behaviour: 'Genuinely loves Nykaa\'s discovery experience. Technically sophisticated — reverse-searches products, compares prices.',
      belief: '"Why pay more on Nykaa when the same thing is 5–10% cheaper on Myntra with better returns?"',
      rpu: 'Price-driven. Would convert with parity OR exclusive availability not found on other platforms.',
      unlock: 'Price parity + exclusive brands / early access that cannot be replicated on Myntra or Ajio.',
      evidence: '81% survey platform-switching · Price cited 5/9 times as switch reason · 500 bps discount gap vs Myntra (Actowiz 2025)',
    },
  ]
  return (
    <SectionLight>
      <H2Light>Three personas, one 19-million-user leakage pool</H2Light>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {personas.map((p, i) => (
          <IvoryCard key={i} className="flex flex-col gap-4 hover:shadow-[rgba(0,0,0,0.05)_0px_4px_24px] transition-shadow duration-200">
            <div>
              <Pill variant={p.badgeVariant}>{p.badge}</Pill>
            </div>
            <div>
              <div className="font-serif text-[clamp(22px,2.5vw,32px)] font-medium text-near-black leading-[1.15] mb-1">{p.name}</div>
              <div className="text-[13px] text-olive-gray">{p.size}</div>
            </div>
            <div className="space-y-3 text-[14px] leading-[1.55]">
              <div><span className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta block mb-0.5">Profile</span><span className="text-near-black">{p.profile}</span></div>
              <div><span className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta block mb-0.5">Behaviour</span><span className="text-near-black">{p.behaviour}</span></div>
              <div><span className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta block mb-0.5">Core belief</span><span className="font-serif text-[15px] italic text-near-black">{p.belief}</span></div>
              <div><span className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta block mb-0.5">Unlock trigger</span><span className="text-near-black">{p.unlock}</span></div>
              <div><span className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta block mb-0.5">Evidence</span><span className="text-olive-gray">{p.evidence}</span></div>
            </div>
          </IvoryCard>
        ))}
      </div>
    </SectionLight>
  )
}

function FindingsSection() {
  return (
    <SectionLight>
      <H2Light>Research Findings &amp; Pain Points</H2Light>
      <H3>Top Pain Points — Ranked by Conversion Impact</H3>
      <TableWrapper>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Pain Point</Th>
            <Th>Severity</Th>
            <Th>Evidence Base</Th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              n: '1',
              pain: 'Broken return operations — courier rejection, app status mismatch, looping support',
              severity: 'CRITICAL',
              sev: 'terracotta',
              evidence: '73% survey · Reddit VoC · LinkedIn posts · App Store 2024–26',
            },
            {
              n: '2',
              pain: 'Systematic price gap vs Myntra/Ajio (500 bps deficit)',
              severity: 'HIGH',
              sev: 'coral',
              evidence: '81% switch rate · Actowiz pricing analysis 2025 · Reddit threads',
            },
            {
              n: '3',
              pain: 'No fit assurance — static size charts, no UGC photos, no AI sizing',
              severity: 'HIGH',
              sev: 'coral',
              evidence: 'Survey Q5 · Myntra 2× uplift via VTO · SimilarWeb depth data',
            },
            {
              n: '4',
              pain: 'Customer support broken at system level — robotic, scripted, looping',
              severity: 'HIGH',
              sev: 'coral',
              evidence: 'Every LinkedIn post · 3–8 support contacts per complaint · Zero resolution pattern',
            },
            {
              n: '5',
              pain: 'Decision deferral — no re-engagement for wishlist/cart abandoners',
              severity: 'MEDIUM',
              sev: 'sand',
              evidence: 'Survey Q4 · SimilarWeb 2 min avg session · Multi-session journey map',
            },
          ].map((row, i) => (
            <tr key={i}>
              <Td className="font-serif text-[20px] font-medium text-terracotta">{row.n}</Td>
              <Td className="text-near-black">{row.pain}</Td>
              <Td><Pill variant={row.sev}>{row.severity}</Pill></Td>
              <Td className="text-olive-gray text-[13px]">{row.evidence}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <div className="mt-14 mb-4">
        <H3>Research Questions — Answered</H3>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Question</Th>
            <Th>Finding</Th>
          </tr>
        </thead>
        <tbody>
          {[
            ['RQ1', 'Where does the session end?', '85.6% of MAUV (19M users) never transact. Funnel data shows drop-off is heaviest at PDP and checkout — not at discovery.'],
            ['RQ2', 'What happens after leaving?', '81% of survey respondents switched platforms after discovering on one. Price cited in 5/9 switches — trust is the underlying driver.'],
            ['RQ3', 'What would have triggered purchase?', '73% cite return policy as dealbreaker. 82% frustrated by post-purchase return fight. Easier returns = #1 improvement (8/11 Priority 1 votes).'],
            ['RQ4', 'How many sessions before purchase?', 'SimilarWeb: avg Nykaa Fashion session = 2–2:49 min, 4.68–5.16 pages. Users require multiple inspiration sessions — Instagram → Nykaa browse → competitor checkout.'],
            ['RQ5', 'Role of creators / social media?', '100K+ influencer network drives 22.2M MAUV but social traffic converts at ~1% due to discovery mindset vs. purchase intent. 70% of Gen Z spend influenced by creators.'],
          ].map(([rq, q, finding], i) => (
            <tr key={i}>
              <Td className="font-serif text-[20px] font-medium text-terracotta shrink-0">{rq}</Td>
              <Td className="font-medium text-near-black">{q}</Td>
              <Td className="text-olive-gray">{finding}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function ProblemDefinitionSection() {
  return (
    <SectionDark>
      <H2Dark>Defining the Problem</H2Dark>
      <p className="font-serif text-[25px] font-medium leading-[1.30] text-ivory max-w-[720px] mb-6">
        Fashion-forward Indian shoppers are experiencing paralysing purchase anxiety while trying to buy apparel they've already fallen in love with on Nykaa Fashion — because the platform forces them to absorb 100% of the return risk through a hostile post-purchase ecosystem: broken QC checks, misaligned logistics partners, and circular customer service that traps money rather than resolving issues.
      </p>
      <p className="font-serif text-[25px] font-medium leading-[1.30] text-ivory max-w-[720px] mb-12">
        This results in <strong>19 million monthly visitors walking away at the moment of payment</strong> — not because discovery failed, but because trust did. The platform's reputation for punishing returns now precedes every purchase decision, suppressing conversion to 0.9% against an industry norm of 1.5–2.0%, and leaving <strong>₹225 Crore in GMV uncaptured annually</strong>.
      </p>

      <p className="font-serif text-[clamp(24px,3.5vw,36px)] font-medium leading-[1.30] text-coral text-center max-w-[720px] mx-auto py-12">
        Nykaa Fashion has solved the hardest problem in Indian e-commerce — making people want to buy. It then systematically stops them from doing so.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { stage: 'Discovery', status: '✓ Solved', note: '22.2M monthly visitors, superior creator network, editorial curation', solved: true },
          { stage: 'Desire', status: '✓ Solved', note: 'Users browse, save, and return — engagement is healthy', solved: true },
          { stage: 'Trust', status: '✗ Broken', note: 'Reputation for return friction arrives before the wallet opens', solved: false },
          { stage: 'Conversion', status: '✗ Consequence', note: '85.6% of active users browse without buying', solved: false },
        ].map((item, i) => (
          <DarkCard key={i} className="flex flex-col gap-2">
            <div className={`text-[11px] font-medium tracking-[0.12em] uppercase ${item.solved ? 'text-terracotta' : 'text-coral'}`}>{item.stage}</div>
            <div className={`font-serif text-[20px] font-medium ${item.solved ? 'text-terracotta' : 'text-coral'}`}>{item.status}</div>
            <p className="text-[13px] text-warm-silver leading-[1.55]">{item.note}</p>
          </DarkCard>
        ))}
      </div>

      <div className="bg-dark-surface rounded-2xl p-6 mb-10">
        <code className="font-mono text-[15px] text-coral block mb-2">OUTPUT: 0.9% CONVERSION · 85.6% NON-PURCHASING · NYKAA GENERATES INTENT FOR ITS COMPETITORS</code>
        <code className="font-mono text-[13px] text-warm-silver">Fashion EBITDA: −8.3% NSV · Marketing Spend: 29.4% NSV · Purchase Frequency: 2.2×/year · GMV Growth: 12% vs. Beauty's 30%</code>
      </div>

      <p className="font-serif text-[clamp(22px,3vw,32px)] font-medium leading-[1.30] text-ivory mb-3">
        Nykaa is not failing at Discovery. It is failing at Trust.
      </p>
      <p className="font-serif text-[clamp(22px,3vw,32px)] font-medium leading-[1.30] text-coral mb-8">
        And trust is lost not at the moment of purchase — but weeks earlier, in someone else's bad return story.
      </p>
      <BodyDark className="text-[20px]">So we should build trust signals and risk-reducing features on top of a repaired operational foundation.</BodyDark>
    </SectionDark>
  )
}

/* ─── Part 2: Solutions onward ─────────────────────────────────────── */

function RICESection() {
  const rows = [
    { lp: 'L1', id: 'A', name: 'AI-Powered Fit Predictor', reach: '8M', impact: '2', conf: '80%', effort: '6', rice: '213', status: 'Phase 2', statusV: 'olive' },
    { lp: 'L1', id: 'B', name: 'UGC Photo Layer on PDP', reach: '8M', impact: '2', conf: '80%', effort: '2', rice: '640', status: 'Shortlisted', statusV: 'terracotta', highlight: true },
    { lp: 'L1', id: 'C', name: 'Fit Guarantee Badge', reach: '8M', impact: '1', conf: '80%', effort: '1', rice: '640', status: 'Deprioritized', statusV: 'stone' },
    { lp: 'L1', id: 'D', name: 'Virtual Try-On AR', reach: '8M', impact: '3', conf: '50%', effort: '9', rice: '133', status: 'Deprioritized', statusV: 'stone' },
    { lp: 'L1', id: 'E', name: 'Confidence Score at Checkout', reach: '5M', impact: '1', conf: '80%', effort: '1', rice: '400', status: 'Deprioritized', statusV: 'stone' },
    { lp: 'L3', id: 'F', name: 'Return Experience Redesign', reach: '7M', impact: '3', conf: '100%', effort: '5', rice: '420', status: 'Shortlisted', statusV: 'terracotta', highlight: true },
    { lp: 'L3', id: 'G', name: 'Nykaa Promise — Owned Brands', reach: '7M', impact: '2', conf: '80%', effort: '2', rice: '560', status: 'Shortlisted', statusV: 'terracotta', highlight: true },
    { lp: 'L3', id: 'H', name: 'Post-Purchase Reassurance Flow', reach: '7M', impact: '1', conf: '100%', effort: '1', rice: '700', status: 'Phase 1.5', statusV: 'olive' },
    { lp: 'L3', id: 'I', name: 'Try & Buy Pilot', reach: '7M', impact: '3', conf: '80%', effort: '8', rice: '210', status: 'Deprioritized', statusV: 'stone' },
    { lp: 'L2', id: 'J', name: 'Price Confidence Badge', reach: '19M', impact: '0.5', conf: '80%', effort: '2', rice: '380', status: 'Deprioritized', statusV: 'stone' },
    { lp: 'L2', id: 'K', name: 'Return Policy Visibility at PDP', reach: '19M', impact: '0.5', conf: '100%', effort: '1', rice: '950', status: 'Deprioritized', statusV: 'stone' },
  ]
  return (
    <SectionLight id="solutions">
      <Eyebrow>Solutions</Eyebrow>
      <H2Light>Eleven candidates, two winners</H2Light>
      <BodyLight className="max-w-[680px] mb-10">
        Solutions are proposed for LP1 (~42%) and LP3 (~37%), covering ~79% of the estimated leakage pool. LP2 (~21%) is in the long list but deliberately deprioritized — rationale below.
      </BodyLight>
      <TableWrapper>
        <thead>
          <tr>
            <Th>LP</Th>
            <Th>ID</Th>
            <Th>Candidate</Th>
            <Th>Reach</Th>
            <Th>Impact</Th>
            <Th>Conf.</Th>
            <Th>Effort</Th>
            <Th>RICE</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <Td highlight={r.highlight} className="font-medium text-stone-gray">{r.lp}</Td>
              <Td highlight={r.highlight} className="font-serif font-medium text-near-black">{r.id}</Td>
              <Td highlight={r.highlight} className={r.highlight ? 'font-medium text-near-black' : ''}>{r.name}</Td>
              <Td highlight={r.highlight}>{r.reach}</Td>
              <Td highlight={r.highlight}>{r.impact}</Td>
              <Td highlight={r.highlight}>{r.conf}</Td>
              <Td highlight={r.highlight}>{r.effort}</Td>
              <Td highlight={r.highlight} className={r.highlight ? 'font-serif font-medium text-[18px] text-terracotta' : ''}>{r.rice}</Td>
              <Td highlight={r.highlight}><Pill variant={r.statusV}>{r.status}</Pill></Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function TwoSolutionsSection() {
  return (
    <SectionLight>
      <H2Light>Two solutions, one hesitation sequence</H2Light>
      <p className="font-serif text-[20px] font-medium leading-[1.30] text-olive-gray max-w-[720px] mb-14">
        Together they dismantle the two-sided anxiety suppressing conversion: <em>"I don't know if it will fit"</em> (LP1) <strong>and</strong> <em>"I don't trust I can return it if it doesn't"</em> (LP3). Combined, they cover ~79% of the 19M non-purchasing user base.
      </p>

      {/* Solution 1 */}
      <div className="bg-ivory rounded-3xl border border-border-cream shadow-[rgba(0,0,0,0.05)_0px_4px_24px] p-10 mb-8">
        <div className="mb-5"><Pill variant="terracotta">Addresses Leakage Point 1</Pill></div>
        <h3 className="font-serif text-[clamp(24px,3vw,36px)] font-medium text-near-black mb-2">UGC-Powered Fit Intelligence Layer</h3>
        <p className="font-serif text-[20px] text-olive-gray mb-8">Real customer photos + fit ratings surfaced on every PDP · RICE Score 640</p>

        <p className="font-serif text-[17px] leading-[1.60] text-near-black mb-4">
          Post-purchase, customers upload a photo wearing the item and answer three questions: height, size purchased, and fit rating. Future shoppers filter these photos by body type, height, and size — seeing what the item actually looks like on someone their size.
        </p>
        <p className="font-serif text-[17px] leading-[1.60] text-near-black mb-8">
          Trust, not information, is the root blocker. Real customer photos directly address this — and the data backs it up: customer photos were the #2 most requested improvement (22 respondents), and 45% of users already rely on reviews for sizing decisions.
        </p>

        <div className="grid grid-cols-5 gap-3 mb-8">
          {[
            { label: 'Reach', value: '8M', sub: 'LP1 leakage pool' },
            { label: 'Impact', value: '2', sub: 'High — social proof' },
            { label: 'Confidence', value: '80%', sub: 'UGC uplift evidenced' },
            { label: 'Effort', value: '2mo', sub: 'No ops dependency' },
            { label: 'RICE', value: '640', sub: 'Highest LP1' },
          ].map((item, i) => (
            <div key={i} className="bg-warm-sand rounded-lg p-4 text-center">
              <div className="font-serif text-[32px] font-medium text-near-black leading-[1.10] mb-1">{item.value}</div>
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-0.5">{item.label}</div>
              <div className="text-[11px] text-olive-gray">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Target persona', content: 'The Burned Pragmatist. Est. 10–12M users. Browses but never commits. Needs social proof from real users to override the information gap that stalls purchase decisions.' },
            { label: 'Expected RPU impact', content: '₹113–225 Crore. Converting 1% of the 8M LP1 leakage pool at 50–100% of existing buyer spend rate (₹11,887/year). Directional estimate.' },
            { label: 'Strategic moat', content: 'Data flywheel. Every UGC submission seeds the AI Fit Predictor in Phase 2. More purchases → more data → better predictions → higher confidence → more purchases.' },
          ].map((item, i) => (
            <div key={i} className="bg-parchment rounded-xl p-5">
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta mb-2">{item.label}</div>
              <p className="text-[14px] leading-[1.60] text-near-black">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution 2 */}
      <div className="bg-ivory rounded-3xl border border-border-cream shadow-[rgba(0,0,0,0.05)_0px_4px_24px] p-10">
        <div className="mb-5"><Pill variant="terracotta">Addresses Leakage Point 3</Pill></div>
        <h3 className="font-serif text-[clamp(24px,3vw,36px)] font-medium text-near-black mb-2">Return Experience Redesign + Nykaa Promise</h3>
        <p className="font-serif text-[20px] text-olive-gray mb-8">Fix the operational failure AND make the fix visible · RICE 420 (F) + 560 (G) — combined intervention</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-parchment rounded-2xl p-6">
            <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta mb-2">Part F — Return Experience Redesign</div>
            <p className="text-[15px] leading-[1.60] text-near-black">One-tap return initiation, real-time status tracking in-app, and Nykaa-managed courier pickup — removing the user from the logistics loop entirely.</p>
          </div>
          <div className="bg-parchment rounded-2xl p-6">
            <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta mb-2">Part G — Nykaa Promise (Owned Brands)</div>
            <p className="text-[15px] leading-[1.60] text-near-black">A named 15-day no-questions return guarantee scoped to House of Nykaa brands (Twenty Dresses, Nykd, RSVP, Pipa Bella). Displayed as a trust badge on PDP and at checkout.</p>
          </div>
        </div>

        <div className="border-l-4 border-terracotta bg-warm-sand rounded-r-xl p-5 mb-8">
          <p className="font-serif text-[17px] leading-[1.60] text-near-black">
            F fixes the experience. G signals that it's been fixed. But G without F is an empty promise that makes the trust problem worse — and F without G changes the reality silently, leaving market reputation intact. Together they close the loop: <strong>fix it, then say you fixed it.</strong>
          </p>
        </div>

        <div className="grid grid-cols-5 gap-3 mb-8">
          {[
            { label: 'Reach', value: '7M', sub: 'LP3 leakage pool' },
            { label: 'Impact', value: '3+2', sub: 'Massive + High' },
            { label: 'Confidence', value: '100%/80%', sub: 'F + G' },
            { label: 'Effort', value: '5+2mo', sub: 'Sequenced' },
            { label: 'RICE', value: 'F:420 G:560', sub: 'Combined' },
          ].map((item, i) => (
            <div key={i} className="bg-warm-sand rounded-lg p-4 text-center">
              <div className="font-serif text-[clamp(18px,2vw,28px)] font-medium text-near-black leading-[1.20] mb-1">{item.value}</div>
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray mb-0.5">{item.label}</div>
              <div className="text-[11px] text-olive-gray">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Target personas', content: 'Burned Pragmatist + Occasion Buyer. Both share the same root blocker — trust that money won\'t be trapped. Occasion Buyer has highest AOV potential (₹5,000–8,000).' },
            { label: 'Expected RPU impact', content: '₹83–166 Crore. Converting 1% of the 7M LP3 leakage pool at 50–100% of existing buyer spend rate. Directional estimate.' },
            { label: 'EBITDA compatibility', content: 'Margin-safe design. Scoped to owned brands where Nykaa controls margin. Extended window absorbs higher return cost offset by conversion uplift.' },
          ].map((item, i) => (
            <div key={i} className="bg-parchment rounded-xl p-5">
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta mb-2">{item.label}</div>
              <p className="text-[14px] leading-[1.60] text-near-black">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionLight>
  )
}

function UXSection() {
  return (
    <SectionLight>
      <H2Light>Designing the intervention</H2Light>
      <BodyLight className="max-w-[640px] mb-8">Low-fidelity mockups showing the UGC fit layer on PDP, the Nykaa Promise badge, and the redesigned return flow.</BodyLight>
      <div className="bg-ivory rounded-3xl border border-border-cream shadow-[rgba(0,0,0,0.05)_0px_4px_24px] p-8">
        <div className="aspect-[16/9] bg-warm-sand rounded-2xl flex items-center justify-center font-serif text-stone-gray italic text-[15px]">
          UX Mockups — ux-mockups-grid.png
        </div>
        <p className="text-[14px] text-stone-gray mt-4 text-center">
          PDP fit-intelligence layer · Post-purchase UGC prompt · Nykaa Promise badge · One-tap return flow
        </p>
      </div>
    </SectionLight>
  )
}

function GTMSection() {
  return (
    <SectionLight>
      <Eyebrow>GTM &amp; Growth Loop</Eyebrow>
      <H2Light>A three-phase rollout, gated by evidence</H2Light>
      <p className="font-serif text-[20px] leading-[1.30] text-olive-gray max-w-[720px] mb-12">
        Solutions 1 and 2 launch together, starting with owned House of Nykaa brands where margin is controlled and the return promise is deliverable end-to-end.
      </p>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Phase</Th>
            <Th>Catalog Scope</Th>
            <Th>UGC Seeding</Th>
            <Th>Promise Scope</Th>
            <Th>Success Gate</Th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              phase: 'Phase 1 · Wk 1–8',
              catalog: 'House of Nykaa: Twenty Dresses, Nykd, RSVP, Pipa Bella. ~800 active SKUs (~15% of catalog)',
              ugc: 'Email last-90-day purchasers. Target: 500 SKUs past 5-photo threshold by Wk 4. Loyalty points for uploads.',
              promise: 'Full Nykaa Promise on all 4 owned brands. 15-day, one-tap, Nykaa-managed pickup.',
              gate: '≥500 SKUs with live UGC · Conv ≥1.2% on owned brands · Return NPS ≥+20 · UGC submission rate ≥15%',
            },
            {
              phase: 'Phase 2 · Wk 8–16',
              catalog: 'High-volume 3P brands: Likha, FableStreet, NA-KD, Global Desi. ~6,000 SKUs eligible.',
              ugc: 'Organic velocity supplements seeding. Brand co-marketing for top partners. Double points campaign.',
              promise: 'Promise negotiated with select 3P on pilot. Standard return policy elsewhere.',
              gate: '≥3,000 SKUs with live UGC · Blended conv ≥1.1% · Pickup SLA ≤48h on Promise items',
            },
            {
              phase: 'Phase 3 · Wk 16–24',
              catalog: 'Full catalog: all brands eligible. UGC auto-activates at 5-photo threshold. 10K+ SKUs with live UGC by M12.',
              ugc: 'Organic flywheel self-sustaining. Paid seeding only for strategic new launches.',
              promise: 'Platform-wide opt-in model for 3P. Margin monitoring per brand/category.',
              gate: '1.3–1.5% platform conversion · ₹200–215 RPU · 500K+ cumulative UGC submissions · Return NPS ≥+35',
            },
          ].map((row, i) => (
            <tr key={i}>
              <Td className="font-serif text-[18px] font-medium text-terracotta whitespace-nowrap">{row.phase}</Td>
              <Td>{row.catalog}</Td>
              <Td>{row.ugc}</Td>
              <Td>{row.promise}</Td>
              <Td className="text-[13px] text-olive-gray">{row.gate}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <div className="mt-12">
        <H3>Phase Targets</H3>
        <TableWrapper>
          <thead>
            <tr>
              <Th>Metric</Th>
              <Th>Phase 1</Th>
              <Th>Phase 2</Th>
              <Th>Phase 3</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Conversion Rate', '0.9% → 1.2% (+0.3pp)', '0.9% → 1.3% (+0.4pp)', '0.9% → 1.4% (+0.5pp)'],
              ['RPU (₹/month)', '₹143 → ₹175 (+22%)', '₹143 → ₹195 (+36%)', '₹143 → ₹215 (+50%)'],
              ['SKUs with Live UGC', '~500', '~3,500', '10,000+'],
              ['UGC Submissions/mo', '~12K', '~45K', '~120K'],
            ].map((row, i) => (
              <tr key={i}>
                <Td className="font-medium text-near-black">{row[0]}</Td>
                <Td>{row[1]}</Td>
                <Td>{row[2]}</Td>
                <Td className="font-medium text-terracotta">{row[3]}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>
    </SectionLight>
  )
}

function GrowthLoopSection() {
  const steps1 = [
    { n: '1', title: 'Browse', desc: 'User arrives at PDP, sees UGC fit photos + confidence message ("8 buyers your size say True to Size ✓")' },
    { n: '2', title: 'Convert', desc: 'Fit uncertainty reduced → user adds to bag and purchases with confidence.' },
    { n: '3', title: 'Contribute', desc: 'Post-purchase prompt triggers 1–2 days after delivery. User submits fit rating (2 taps minimum) + optional photo.' },
    { n: '4', title: 'Enrich', desc: 'UGC pool grows. More SKUs cross the 5-photo threshold. Existing SKUs get richer data.' },
    { n: '5', title: 'Amplify', desc: 'Next user browses the same PDP → sees richer UGC data → higher confidence → higher conversion → more contributions → cycle accelerates.' },
  ]
  const steps2 = [
    { n: '1', title: 'Encounter', desc: 'User sees Nykaa Promise badge on PDP → reduced return anxiety → converts.' },
    { n: '2', title: 'Experience', desc: 'If return needed: one-tap initiation, real-time tracking, Nykaa-managed pickup → return resolved smoothly.' },
    { n: '3', title: 'Reframe', desc: 'User\'s mental model shifts from "they trap your money" to "they made it easy."' },
    { n: '4', title: 'Amplify', desc: 'User tells friends / posts positively → reverses the negative word-of-mouth documented in research.' },
    { n: '5', title: 'Recruit', desc: 'Friends in the Burned Pragmatist segment hear the new story → return anxiety decreases → they try purchasing → cycle repeats.' },
  ]
  return (
    <SectionDark>
      <H2Dark>Two interlocking flywheels</H2Dark>
      <BodyDark className="max-w-[720px] mb-12 text-[20px]">
        Two interlocking flywheels create a compounding system. Loop 1 drives first-purchase conversion; Loop 2 drives repeat-purchase conversion and reputation repair.
      </BodyDark>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <DarkCard>
          <div className="font-serif text-[25px] font-medium text-ivory mb-2">Loop 1 — UGC Confidence Flywheel</div>
          <BodyDark className="mb-6 text-[14px]">Every purchase generates data that makes the next purchase more likely. The loop gets stronger with volume, not weaker — a classic content network effect.</BodyDark>
          <div className="space-y-4">
            {steps1.map((s) => (
              <div key={s.n} className="flex gap-4 items-start">
                <div className="shrink-0 w-9 h-9 rounded-full bg-near-black flex items-center justify-center font-serif text-[20px] font-medium text-coral">{s.n}</div>
                <div>
                  <span className="font-medium text-ivory text-[15px]">{s.title}. </span>
                  <span className="text-[14px] text-warm-silver leading-[1.55]">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-near-black rounded-xl p-4">
            <code className="font-mono text-[13px] text-coral">Critical metric: UGC submission rate per purchase.</code>
            <p className="text-[13px] text-warm-silver mt-2 leading-[1.55]">If 20% of buyers submit a fit rating and 5% upload a photo, every 100 purchases generate 20 ratings and 5 photos. A SKU needs 5 photos to cross the cold-start threshold.</p>
          </div>
        </DarkCard>
        <DarkCard>
          <div className="font-serif text-[25px] font-medium text-ivory mb-2">Loop 2 — Trust Reputation Loop</div>
          <BodyDark className="mb-6 text-[14px]">Operates on word-of-mouth timescales, not purchase timescales. Addresses the deeper structural problem: market reputation.</BodyDark>
          <div className="space-y-4">
            {steps2.map((s) => (
              <div key={s.n} className="flex gap-4 items-start">
                <div className="shrink-0 w-9 h-9 rounded-full bg-near-black flex items-center justify-center font-serif text-[20px] font-medium text-coral">{s.n}</div>
                <div>
                  <span className="font-medium text-ivory text-[15px]">{s.title}. </span>
                  <span className="text-[14px] text-warm-silver leading-[1.55]">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-near-black rounded-xl p-4">
            <p className="text-[13px] text-warm-silver leading-[1.55]"><span className="text-coral font-medium">Critical metric:</span> Return NPS + repeat purchase rate among users who completed a return under Nykaa Promise.</p>
          </div>
        </DarkCard>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          { title: 'Loop 1 → Loop 2', body: 'UGC confidence drives first purchase. If item doesn\'t fit, user enters return flow.' },
          { title: 'Interlocking Point', body: 'User who bought via UGC + returned via Promise → both solutions experienced in one journey.' },
          { title: 'Loop 2 → Loop 1', body: 'Smooth return experience builds trust. User buys again. Submits UGC on next purchase → feeds Loop 1.' },
        ].map((item, i) => (
          <DarkCard key={i} className="text-center">
            <div className={`font-serif text-[17px] font-medium mb-3 ${i === 1 ? 'text-coral' : 'text-ivory'}`}>{item.title}</div>
            <p className="text-[14px] leading-[1.55] text-warm-silver">{item.body}</p>
          </DarkCard>
        ))}
      </div>
    </SectionDark>
  )
}

function FunnelSection() {
  const rows = [
    { stage: 'MAUV (Baseline)', current: '22.2M', projected: '22.2M', dropoff: '—', intervention: 'No intervention at traffic level. This is not a traffic problem.' },
    { stage: 'PDP Viewers', current: '~11.1M', projected: '~14.4M', dropoff: '50% drop', intervention: 'Sol 1: UGC strip on home/listing cards increases PDP click-through by ~12–30% across phases.' },
    { stage: 'Size Selector Interaction', current: '~5.6M', projected: '~10.4M', dropoff: '50% drop', intervention: 'Sol 1: LP1 fit void. "8 buyers your size say True to Size" confidence message triggers on size selection.' },
    { stage: 'Add to Bag', current: '~3.1M', projected: '~7.1M', dropoff: '45% drop', intervention: 'Sol 1 + Sol 2: UGC proof + Nykaa Promise badge work together at this decision point.' },
    { stage: 'Checkout Initiated', current: '~2.4M', projected: '~5.8M', dropoff: '22% drop', intervention: 'Sol 2: LP3 return anxiety. Nykaa Promise card in bag reduces checkout abandonment.' },
    { stage: 'Purchase Completed', current: '~200K (0.9%)', projected: '~312K (1.4%)', dropoff: '+56% lift', intervention: 'Blended platform target: +44–56% conversion lift. RPU +50% by Month 12.', highlight: true },
  ]
  return (
    <SectionLight>
      <H2Light>Where the 22.2M become 200K — and how to turn them into 312K</H2Light>
      <BodyLight className="max-w-[720px] mb-10">22.2M monthly active browsing users, of whom only 0.9% convert. The funnel below shows current drop-off at each stage, projected numbers after Solutions 1+2 at Phase 3 steady state.</BodyLight>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Funnel Stage</Th>
            <Th>Current</Th>
            <Th>Projected</Th>
            <Th>Drop-off</Th>
            <Th>Intervention</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={r.highlight ? 'border-l-4 border-terracotta' : ''}>
              <Td highlight={r.highlight} className={r.highlight ? 'font-medium text-near-black' : ''}>{r.stage}</Td>
              <Td highlight={r.highlight}>{r.current}</Td>
              <Td highlight={r.highlight} className={r.highlight ? 'font-serif text-[18px] font-medium text-terracotta' : 'text-terracotta font-medium'}>{r.projected}</Td>
              <Td highlight={r.highlight} className={r.highlight ? 'font-medium text-terracotta' : 'text-olive-gray'}>{r.dropoff}</Td>
              <Td highlight={r.highlight} className="text-[13px] text-olive-gray">{r.intervention}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function CohortSection() {
  return (
    <SectionLight>
      <H2Light>Three cohorts, one compounding flywheel</H2Light>
      <BodyLight className="max-w-[720px] mb-10">Three cohorts defined by when users first encounter the UGC + Promise layer. Each benefits from richer data than the last — Cohort 3 outperforms Cohort 1 not because the product changed, but because the flywheel compounded.</BodyLight>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          { label: 'Cohort 1 — Phase 1 · Wk 1–8', body: 'Smallest but most measurable cohort. UGC on owned brands only. Represents floor of what\'s possible. Limited catalog but full Promise coverage.' },
          { label: 'Cohort 2 — Phase 2 · Wk 8–16', body: 'Larger UGC pool, more SKUs covered. Promise may not be on all purchases. Shows effect of UGC alone vs. UGC + Promise.' },
          { label: 'Cohort 3 — Phase 3 · Wk 16–24', body: 'Full catalog coverage. Richest UGC data. Broadest Promise coverage. Steady-state conversion potential.' },
        ].map((c, i) => (
          <IvoryCard key={i}>
            <div className="font-serif text-[17px] font-medium text-near-black mb-3">{c.label}</div>
            <p className="text-[14px] leading-[1.60] text-olive-gray">{c.body}</p>
          </IvoryCard>
        ))}
      </div>

      <H3>Conversion Rate — 6-Month Cohort Tracking</H3>
      <TableWrapper>
        <thead><tr><Th>Cohort</Th><Th>M1</Th><Th>M2</Th><Th>M3</Th><Th>M4</Th><Th>M6</Th><Th>vs Baseline</Th></tr></thead>
        <tbody>
          {[
            ['Baseline', '0.9%', '0.9%', '0.9%', '0.9%', '0.9%', '—'],
            ['Cohort 1', '0.95%', '1.05%', '1.15%', '1.20%', '1.22%', '+36%'],
            ['Cohort 2', '0.98%', '1.10%', '1.22%', '1.28%', '1.31%', '+46%'],
            ['Cohort 3', '1.05%', '1.18%', '1.30%', '1.37%', '1.42%', '+58%'],
          ].map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <Td key={j} className={j === 5 && i > 0 ? 'font-medium text-terracotta' : j === 6 && i > 0 ? 'font-medium text-terracotta' : i === 0 ? 'text-stone-gray' : ''}>{cell}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <div className="mt-10">
        <H3>RPU (₹/month) — 6-Month Cohort Tracking</H3>
        <TableWrapper>
          <thead><tr><Th>Cohort</Th><Th>M1</Th><Th>M2</Th><Th>M3</Th><Th>M4</Th><Th>M6</Th><Th>vs Baseline</Th></tr></thead>
          <tbody>
            {[
              ['Baseline', '₹143', '₹143', '₹143', '₹143', '₹143', '—'],
              ['Cohort 1', '₹148', '₹158', '₹168', '₹175', '₹178', '+24%'],
              ['Cohort 2', '₹151', '₹165', '₹180', '₹192', '₹198', '+38%'],
              ['Cohort 3', '₹158', '₹175', '₹195', '₹208', '₹216', '+51%'],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <Td key={j} className={j === 5 && i > 0 ? 'font-medium text-terracotta' : j === 6 && i > 0 ? 'font-medium text-terracotta' : i === 0 ? 'text-stone-gray' : ''}>{cell}</Td>
                ))}
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>
    </SectionLight>
  )
}

function PrototypeSection() {
  return (
    <SectionLight>
      <H2Light>Working loop prototype</H2Light>
      <BodyLight className="max-w-[640px] mb-8">End-to-end clickable flow demonstrating the UGC fit layer, confidence messaging, Promise badge, and one-tap return experience.</BodyLight>
      <div className="bg-ivory rounded-3xl border border-border-cream shadow-[rgba(0,0,0,0.05)_0px_4px_24px] p-8">
        <div className="aspect-[16/9] bg-warm-sand rounded-2xl flex items-center justify-center font-serif text-stone-gray italic text-[15px]">
          Working Prototype — working-prototype.png or Figma embed
        </div>
      </div>
    </SectionLight>
  )
}

function MetricsSection() {
  return (
    <SectionLight>
      <H2Light>Metrics &amp; Success Measurement</H2Light>

      <div className="mb-10">
        <H3>North Star — Revenue per Browsing User (RPU)</H3>
        <div className="border-l-4 border-terracotta bg-ivory rounded-r-2xl p-6 mb-6">
          <TableWrapper>
            <thead><tr><Th>North Star</Th><Th>Baseline RPU</Th><Th>Target RPU</Th><Th>Horizon</Th></tr></thead>
            <tbody>
              <tr>
                <Td className="font-medium text-near-black">Revenue per Browsing User</Td>
                <Td className="font-serif text-[20px] font-medium text-near-black">₹143/month</Td>
                <Td className="font-serif text-[20px] font-medium text-terracotta">₹222/month (+55%)</Td>
                <Td>6–12 months</Td>
              </tr>
            </tbody>
          </TableWrapper>
        </div>
        <div className="bg-warm-sand rounded-xl p-4 mb-4">
          <code className="font-mono text-[14px] text-near-black">RPU = Monthly GMV ÷ Monthly Active Browsing Users (MAUV)</code>
          <p className="text-[13px] text-olive-gray mt-2 leading-[1.55]">The denominator includes all 22.2M MAUV — not just transacting customers — making the 19M non-purchasing users structurally visible.</p>
        </div>
      </div>

      <div className="mb-10">
        <H3>Solution 1 Metrics — UGC Fit Intelligence Layer</H3>
        <TableWrapper>
          <thead><tr><Th>Metric</Th><Th>M3 Target</Th><Th>M12 Target</Th><Th>Cadence</Th></tr></thead>
          <tbody>
            {[
              ['UGC Submission Rate', '≥ 15%', '≥ 22%', 'Weekly'],
              ['Photo Upload Rate', '≥ 5%', '≥ 10%', 'Weekly'],
              ['SKUs with Live UGC Gallery', '≥ 500', '≥ 10,000', 'Weekly'],
              ['UGC Gallery Engagement Rate', '≥ 18%', '≥ 30%', 'Daily'],
              ['Size Filter Usage Rate', '≥ 30%', '≥ 45%', 'Daily'],
              ['Confidence-to-Cart Rate', '≥ 12%', '≥ 22%', 'Daily'],
              ['PDP-to-Cart Rate (UGC SKUs)', '≥ 6.5% (vs 4.5% baseline)', '≥ 9.5%', 'Daily'],
            ].map((row, i) => (
              <tr key={i}>
                <Td className="font-medium text-near-black">{row[0]}</Td>
                <Td>{row[1]}</Td>
                <Td className="font-medium text-terracotta">{row[2]}</Td>
                <Td className="text-stone-gray">{row[3]}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>

      <div className="mb-10">
        <H3>Solution 2 Metrics — Nykaa Promise + Return Redesign</H3>
        <TableWrapper>
          <thead><tr><Th>Metric</Th><Th>M3 Target</Th><Th>M12 Target</Th><Th>Cadence</Th></tr></thead>
          <tbody>
            {[
              ['★ Return-to-Repurchase Rate', '≥ 25%', '≥ 35%', 'Monthly'],
              ['Return NPS', '≥ +25 (from −15 baseline)', '≥ +50', 'Monthly'],
              ['Promise-Influenced CVR Lift', '≥ +15% lift', '≥ +22% lift', '8-week A/B test'],
              ['Return Pickup TAT', '≤ 48h', '≤ 24h', 'Daily'],
              ['Refund Crediting TAT', '≤ 72h', '≤ 36h', 'Daily'],
              ['Promise Return Rate (ceiling)', '≤ 16%', '≤ 18%', 'Weekly'],
              ['Support Ticket Volume (Return)', '≤ 15%', '≤ 8%', 'Weekly'],
            ].map((row, i) => (
              <tr key={i}>
                <Td className={`${i === 0 ? 'font-medium text-terracotta' : 'font-medium text-near-black'}`}>{row[0]}</Td>
                <Td>{row[1]}</Td>
                <Td className="font-medium text-terracotta">{row[2]}</Td>
                <Td className="text-stone-gray">{row[3]}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>

      <H3>Success Criteria — Phase-Gated Targets</H3>
      <TableWrapper>
        <thead><tr><Th>Metric</Th><Th>Phase 1 (M3)</Th><Th>Phase 2 (M6)</Th><Th>Phase 3 (M12)</Th></tr></thead>
        <tbody>
          {[
            { cat: 'NORTH STAR', isHeader: true },
            { metric: 'Revenue per Browsing User (RPU)', p1: '≥ ₹165/mo (+15%)', p2: '≥ ₹187/mo (+31%)', p3: '★ ≥ ₹222/mo (+55%)' },
            { cat: 'CONVERSION', isHeader: true },
            { metric: 'Site-wide Conversion Rate', p1: '≥ 1.05%', p2: '≥ 1.2%', p3: '≥ 1.4%' },
            { metric: 'PDP-to-Cart (UGC-enabled SKUs)', p1: '≥ 6.5%', p2: '≥ 8.0%', p3: '≥ 9.5%' },
            { cat: 'UGC FLYWHEEL', isHeader: true },
            { metric: 'UGC Submission Rate', p1: '≥ 15%', p2: '≥ 20%', p3: '≥ 22%' },
            { metric: 'SKUs with Live UGC Gallery', p1: '≥ 500', p2: '≥ 3,000', p3: '≥ 10,000' },
            { cat: 'TRUST & RETURN', isHeader: true },
            { metric: 'Return NPS', p1: '≥ +25', p2: '≥ +40', p3: '≥ +50' },
            { metric: 'Return-to-Repurchase Rate', p1: '≥ 25%', p2: '≥ 30%', p3: '★ ≥ 35%' },
            { cat: 'RETENTION', isHeader: true },
            { metric: '30-Day Repeat Purchase Rate', p1: '≥ 8%', p2: '≥ 11%', p3: '≥ 14%' },
          ].map((row, i) =>
            row.isHeader ? (
              <tr key={i} className="bg-warm-sand">
                <td colSpan={4} className="px-5 py-3 text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta">{row.cat}</td>
              </tr>
            ) : (
              <tr key={i}>
                <Td className="font-medium text-near-black">{row.metric}</Td>
                <Td>{row.p1}</Td>
                <Td>{row.p2}</Td>
                <Td className="font-medium text-terracotta">{row.p3}</Td>
              </tr>
            )
          )}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function RisksSection() {
  const riskGroups = [
    {
      title: 'Conversion Risks',
      risks: [
        { id: 'R1', risk: 'UGC cold-start stalls on long-tail SKUs', likelihood: 'MED-HIGH', lv: 'terracotta', impact: 'HIGH', iv: 'terracotta' },
        { id: 'R2', risk: 'UGC submission rate stays below flywheel threshold', likelihood: 'MEDIUM', lv: 'coral', impact: 'HIGH', iv: 'terracotta' },
        { id: 'R3', risk: 'UGC quality degrades; gallery becomes noise', likelihood: 'MEDIUM', lv: 'coral', impact: 'MED-HIGH', iv: 'coral' },
        { id: 'R4', risk: 'Confidence message seen as generic; doesn\'t move LP1 users', likelihood: 'MEDIUM', lv: 'coral', impact: 'MED-HIGH', iv: 'coral' },
      ],
    },
    {
      title: 'Trust & User Experience Risks',
      risks: [
        { id: 'R5', risk: 'Promise over-promises; courier SLA fails and trust worsens', likelihood: 'MED-HIGH', lv: 'terracotta', impact: 'HIGH', iv: 'terracotta' },
        { id: 'R6', risk: 'Promise badge treated as fine print; no pre-purchase trust signal', likelihood: 'MEDIUM', lv: 'coral', impact: 'MED-HIGH', iv: 'coral' },
        { id: 'R7', risk: 'Return fraud increases under no-questions-asked Promise', likelihood: 'LOW', lv: 'sand', impact: 'MED-HIGH', iv: 'coral' },
        { id: 'R8', risk: 'LP3 users don\'t convert even after return redesign', likelihood: 'MEDIUM', lv: 'coral', impact: 'HIGH', iv: 'terracotta' },
      ],
    },
    {
      title: 'Business & Commercial Risks',
      risks: [
        { id: 'R9', risk: 'Reverse logistics cost widens EBITDA gap beyond tolerance', likelihood: 'MED-HIGH', lv: 'terracotta', impact: 'HIGH', iv: 'terracotta' },
        { id: 'R10', risk: 'Myntra closes the 500 bps discount gap; price becomes dominant lever', likelihood: 'LOW', lv: 'sand', impact: 'MED-HIGH', iv: 'coral' },
        { id: 'R11', risk: 'Marketplace brand partners resist Phase 2 expansion', likelihood: 'MEDIUM', lv: 'coral', impact: 'MEDIUM', iv: 'coral' },
        { id: 'R12', risk: 'Occasion Buyer churns before Phase 1 UGC reaches critical mass', likelihood: 'MEDIUM', lv: 'coral', impact: 'MED-HIGH', iv: 'coral' },
      ],
    },
  ]
  const tradeoffs = [
    {
      title: 'T1 — Owned brands first in Phase 1',
      chosen: 'House of Nykaa brands: Twenty Dresses, Nykd, RSVP, Pipa Bella.',
      givenUp: 'Broader initial catalog coverage; majority of LP1 users encounter no UGC in Phase 1.',
      why: 'Margin safety. Promise only credible where Nykaa manages logistics end-to-end. Phase 1 results become the commercial case for Phase 2.',
    },
    {
      title: 'T2 — UGC flywheel as Phase 1 fit solution',
      chosen: 'UGC Photo Layer on PDP (RICE 640, 2 person-months).',
      givenUp: 'AI Fit Predictor — higher accuracy but requires ~50,000 labelled fit outcomes.',
      why: 'AI Fit Predictor cold-starts badly. UGC is Phase 1 because it creates the dataset; AI is Phase 2 because it consumes it. Correct causal order.',
    },
    {
      title: 'T3 — LP1 + LP3 as primary targets',
      chosen: '~79% of leakage pool covered. RICE 420–640 on shortlisted solutions.',
      givenUp: 'LP2 (cart friction, 4M users) — price shock and policy discovery at checkout.',
      why: 'LP2 candidates scored RICE 280–320 vs Sol 1 (640) and Sol 2 (420–560). LP2 is a symptom of upstream problems LP1 and LP3 already address.',
    },
    {
      title: 'T4 — 15-day Promise window',
      chosen: '15-day no-questions return guarantee on owned brands.',
      givenUp: 'Direct parity with Myntra\'s 30-day return policy.',
      why: 'Primary failure was operational execution, not window length. A 30-day window that fails operationally is worse than 15 days that succeed. Commercial constraint: 30 days doubles the return financing period at −8.3% EBITDA.',
    },
    {
      title: 'T5 — Trust-first investment to close Myntra gap',
      chosen: 'Sol 1 + Sol 2 addressing uncertainty and trust blockers.',
      givenUp: 'Closing the 500 bps discount gap through incremental promotional spend.',
      why: 'Matching Myntra\'s discount depth would require ~₹190–250 Cr incremental spend annually — commercially unsustainable at −8.3% EBITDA. Discounting attracts churners; trust-first builds structural loyalty.',
    },
  ]
  return (
    <SectionLight>
      <H2Light>Risks &amp; Trade-offs</H2Light>
      {riskGroups.map((group, gi) => (
        <div key={gi} className="mb-10">
          <H3>{group.title}</H3>
          <TableWrapper>
            <thead><tr><Th>ID</Th><Th>Risk</Th><Th>Likelihood</Th><Th>Impact</Th></tr></thead>
            <tbody>
              {group.risks.map((r, i) => (
                <tr key={i}>
                  <Td className="font-medium text-stone-gray">{r.id}</Td>
                  <Td className="text-near-black">{r.risk}</Td>
                  <Td><Pill variant={r.lv}>{r.likelihood}</Pill></Td>
                  <Td><Pill variant={r.iv}>{r.impact}</Pill></Td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
        </div>
      ))}

      <H3>Major Trade-offs</H3>
      <div className="space-y-4 mt-6">
        {tradeoffs.map((t, i) => (
          <IvoryCard key={i}>
            <div className="font-serif text-[20px] font-medium text-near-black mb-4">{t.title}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[14px] leading-[1.60]">
              <div><span className="text-[11px] font-medium tracking-[0.12em] uppercase text-terracotta block mb-1">What was chosen</span><span className="text-near-black">{t.chosen}</span></div>
              <div><span className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray block mb-1">What was given up</span><span className="text-olive-gray">{t.givenUp}</span></div>
              <div><span className="text-[11px] font-medium tracking-[0.12em] uppercase text-stone-gray block mb-1">Why</span><span className="text-olive-gray">{t.why}</span></div>
            </div>
          </IvoryCard>
        ))}
      </div>
    </SectionLight>
  )
}

function ConstraintsSection() {
  const constraints = [
    {
      icon: '⚙',
      title: 'Technology',
      points: [
        'AI cold-start: AI Fit Predictor needs ~50K labelled fit outcomes — not available in Phase 1. UGC builds the dataset first.',
        'New event instrumentation: 6 analytics events don\'t exist yet — must be scoped into Week 1.',
        'A/B test infrastructure: SKU-level split testing requires verification before launch.',
      ],
    },
    {
      icon: '🏭',
      title: 'Operations',
      points: [
        '48-hour pickup SLA only feasible where Nykaa\'s managed courier network operates. Marketplace returns cannot be promised.',
        'Warehouse processing pipeline must be reviewed before launch — gap between pickup and refund credit is the critical failure.',
        'Phase 2 partner onboarding requires logistics pre-qualification — cannot be skipped.',
      ],
    },
    {
      icon: '🧠',
      title: 'User Behaviour',
      points: [
        'Indian fashion e-commerce UGC rates are lower than Western benchmarks. 15% target is conservative. Cold-start cliff is real.',
        'Burned Pragmatist avoidance: trust repair operates on word-of-mouth timescales, not feature-release timescales.',
        'UGC submission prompts must be suppressed for users who have initiated a return on that order.',
      ],
    },
    {
      icon: '💰',
      title: 'Financial',
      points: [
        '−8.3% NSV EBITDA: the dominant constraint. High-cost features are Phase 3 items conditional on EBITDA improvement.',
        'Marketing spend at 29.4% NSV: the RPU thesis is a conversion-improvement thesis — no incremental marketing budget required.',
        '12% GMV growth outpacing EBITDA improvement. Sol 1 drives owned-brand discovery (higher margin); Sol 2 reduces return-related cost drag.',
      ],
    },
  ]
  return (
    <SectionLight>
      <H2Light>Constraints &amp; Assumptions</H2Light>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {constraints.map((c, i) => (
          <IvoryCard key={i}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-warm-sand rounded-full flex items-center justify-center text-[18px]">{c.icon}</div>
              <span className="font-serif text-[20px] font-medium text-near-black">{c.title}</span>
            </div>
            <ul className="space-y-3">
              {c.points.map((p, j) => (
                <li key={j} className="text-[14px] leading-[1.60] text-olive-gray flex gap-2">
                  <span className="text-terracotta mt-0.5 shrink-0">·</span>{p}
                </li>
              ))}
            </ul>
          </IvoryCard>
        ))}
      </div>

      <H3>Key Assumptions</H3>
      <TableWrapper>
        <thead><tr><Th>#</Th><Th>Assumption</Th><Th>If True</Th><Th>If Wrong</Th><Th>How It's Tested</Th></tr></thead>
        <tbody>
          {[
            {
              id: 'A1',
              assumption: 'UGC ≥15% submission rate achievable in Indian fashion',
              ifTrue: 'Flywheel crosses cold-start threshold on 500+ SKUs by M3; Sol 1 drives LP1 conversion',
              ifWrong: 'Flywheel stalls; RPU lift skews entirely to Sol 2; M12 target at risk',
              tested: 'Measured weekly from Day 1. <12% for 2 weeks → A/B test prompt strategy',
            },
            {
              id: 'A2 ★',
              assumption: 'LP3 return trauma is operational, not price-driven (most consequential)',
              ifTrue: 'Sol 2 addresses the root cause; Burned Pragmatists return to active purchasing',
              ifWrong: 'Sol 2 has no conversion effect; LP2 candidates become the correct intervention',
              tested: 'Return-to-repurchase rate at M3. <15% triggers qualitative interviews',
              highlight: true,
            },
            {
              id: 'A3',
              assumption: 'Owned-brand COGS absorbs Promise reverse logistics within 0.8% NSV',
              ifTrue: 'Promise is commercially sustainable; EBITDA constraint respected',
              ifWrong: 'Promise must be narrowed or repriced; Phase 2 expansion deferred',
              tested: 'EBITDA impact modelled monthly from Week 1. Guardrail at 1.2% NSV',
            },
            {
              id: 'A4',
              assumption: 'UGC from real buyers drives higher conversion than studio photography',
              ifTrue: 'Confidence message trusted more than product images; Sol 1 drives PDP-to-cart lift',
              ifWrong: 'Gallery engagement high but conversion flat; Sol 1 RICE score is wrong',
              tested: 'Promise badge A/B test isolates Sol 2. Residual CVR lift on UGC vs. control tests A4',
            },
            {
              id: 'A5',
              assumption: 'Courier network delivers 48-hour pickup SLA at owned-brand return volumes',
              ifTrue: 'Promise SLA is operationally credible; Return NPS improves; Loop 2 activates',
              ifWrong: 'Pickup delays recreate the failure documented in VoC; trust worsens',
              tested: 'Daily TAT monitoring from Day 1. 95%+ SLA compliance required before Phase 2',
            },
          ].map((row, i) => (
            <tr key={i} className={row.highlight ? 'bg-warm-sand' : ''}>
              <Td className={`font-serif font-medium text-[18px] ${row.highlight ? 'text-terracotta' : 'text-stone-gray'}`}>{row.id}</Td>
              <Td className={row.highlight ? 'font-medium text-near-black' : ''}>{row.assumption}</Td>
              <Td className="text-[13px] text-olive-gray">{row.ifTrue}</Td>
              <Td className="text-[13px] text-olive-gray">{row.ifWrong}</Td>
              <Td className="text-[13px] text-olive-gray">{row.tested}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function ClosingSection() {
  return (
    <SectionDark>
      <H2Dark>Where this leaves the problem</H2Dark>
      <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-8">
        Nykaa's hardest problem was never making people want to buy — it was already winning that war. The ₹225 Cr sitting uncaptured every year is the cost of solving the wrong problem beautifully. The question the research kept returning to wasn't <em>"what feature is missing?"</em> but <em>"what does 'trust' cost to rebuild, and in what order?"</em>
      </p>
      <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-8">
        The answer, as the data showed, is that you rebuild it operationally before you advertise it — fix the return, then say the return is fixed. You let the first flywheel (UGC) seed the data the second flywheel (AI Fit) will eventually need. And you accept that reputation, the slowest-moving variable in the system, will lag the product by months.
      </p>
      <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-14">
        This case study is a 6-week Airtribe capstone. The work documented here is a build brief more than a finished plan — and an argument for why, at Nykaa's current EBITDA position, conservative scope is the most ambitious strategy available.
      </p>
      <p className="font-serif text-[clamp(24px,3.5vw,36px)] font-medium leading-[1.30] text-coral text-center max-w-[720px] mx-auto">
        Trust is not lost at the moment of purchase. It is lost weeks earlier, in someone else's bad return story.
      </p>
    </SectionDark>
  )
}

function AnnexuresSection() {
  return (
    <SectionLight id="annexures">
      <H3>Annexures</H3>
      <BodyLight className="max-w-[560px] mb-8">
        Individual reports for each step, survey results, screenshots, and other artifacts are available in the supporting documents folder.
      </BodyLight>
      <a href="#" className="bg-terracotta text-ivory text-[14px] font-medium rounded-xl px-5 py-3 no-underline inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
        View supporting documents →
      </a>
    </SectionLight>
  )
}

/* ─── Main export ───────────────────────────────────────────────────── */

export function Nykaa() {
  return (
    <ProjectLayout nextProject={{ title: 'Badcode', path: '/projects/badcode' }}>
      <HeroSection />
      <OpportunitySection />
      <CoreInsightSection />
      <MethodologySection />
      <MarketSection />
      <ResearchQuestionsSection />
      <SurveySection />
      <InterviewsSection />
      <VoCSection />
      <UserProblemSection />
      <PersonasSection />
      <FindingsSection />
      <ProblemDefinitionSection />
      <RICESection />
      <TwoSolutionsSection />
      <UXSection />
      <GTMSection />
      <GrowthLoopSection />
      <FunnelSection />
      <CohortSection />
      <PrototypeSection />
      <MetricsSection />
      <RisksSection />
      <ConstraintsSection />
      <ClosingSection />
      <AnnexuresSection />
    </ProjectLayout>
  )
}
