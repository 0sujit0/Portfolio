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
    <div className={`bg-ivory border border-border-cream rounded-2xl p-7 shadow-[rgba(0,0,0,0.05)_0px_4px_24px] ${className}`}>{children}</div>
  )
}

function DarkCard({ children, className = '' }) {
  return (
    <div className={`bg-dark-surface rounded-2xl p-7 ${className}`}>{children}</div>
  )
}

function Pill({ children, variant = 'sand' }) {
  const styles = {
    sand: 'bg-warm-sand text-charcoal-warm',
    terracotta: 'bg-terracotta text-ivory',
    stone: 'bg-warm-sand text-stone-gray',
  }
  const ratings = {
    HIGH: 'bg-warm-sand text-charcoal-warm',
    MEDIUM: 'bg-warm-sand text-charcoal-warm',
    'MEDIUM–HIGH': 'bg-warm-sand text-charcoal-warm',
  }
  return (
    <span className={`text-[12px] font-medium tracking-[0.3px] rounded-full px-3 py-1 inline-block ${styles[variant] || 'bg-warm-sand text-charcoal-warm'}`}>
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

/* ─── Sections ──────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="bg-parchment pt-[clamp(80px,12vw,160px)] pb-24 px-6 md:px-16">
      <div className="max-w-[960px] mx-auto">
        <Eyebrow>Product Case Study · Airtribe Capstone · 2025</Eyebrow>
        <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.10] text-near-black mb-6 max-w-[840px]">
          Blinkit — Imported Foods: Instant Global Access
        </h1>
        <p className="text-[20px] leading-[1.60] text-olive-gray max-w-[640px] mb-8">
          India's premium urban households spend $19 billion annually on imported foods — but the current ecosystem is fragmented, slow, and untrustworthy. Blinkit's 10-minute delivery promise is perfectly positioned to turn a planned specialty-store trip into an impulse purchase. This is the case for why Blinkit must pivot from catalog to curation.
        </p>
        <div className="text-[14px] text-stone-gray mb-10 leading-[1.60]">
          Role: Product&nbsp;&nbsp;·&nbsp;&nbsp;Research: 14 respondents, 2 qualitative interviews, Reddit analysis&nbsp;&nbsp;·&nbsp;&nbsp;Market: Premium Urban India&nbsp;&nbsp;·&nbsp;&nbsp;TAM: $19B
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#recommendation" className="bg-terracotta text-ivory text-[14px] font-medium rounded-xl px-5 py-3 no-underline inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
            Jump to recommendation →
          </a>
          <a href="#research" className="bg-warm-sand text-charcoal-warm text-[14px] font-medium rounded-lg px-5 py-3 no-underline inline-flex items-center gap-2 shadow-[0px_0px_0px_1px_#d1cfc5] transition-opacity duration-200 hover:opacity-80">
            View methodology
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
            Premium urban India is a market that already spends, already wants, and already suffers. The imported foods category commands $19 billion in annual spending from households in the top 15% income bracket — yet buying a jar of authentic Kewpie mayo or a Meiji chocolate bar requires a trip to a gourmet store, or waiting 1–3 days for e-commerce delivery. The gap between the desire and the experience is the opportunity.
          </p>
          <PullQuote>
            "The prize: 2% market capture in Year 1 unlocks $263M in obtainable revenue — by serving customers who are already spending, just not on Blinkit."
          </PullQuote>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatCard value="$19B" label="Total imported foods TAM — premium urban Indian households" />
          <StatCard value="$12B" label="Serviceable Addressable Market — top 8 metros, online shoppers" />
          <StatCard value="$263M" label="Serviceable Obtainable Market — 2% capture target, Year 1" />
          <StatCard value="18M" label="Premium households (top 15% of 120M urban households)" />
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
        The market isn't missing demand. It's missing a trustworthy, fast channel.
      </p>
      <BodyDark className="max-w-[700px] mb-12">
        Research across personal interviews, an online survey of 14 respondents, and Reddit community analysis surfaced a clear pattern: premium buyers already want imported foods. They regularly buy at offline gourmet stores (Nature's Basket, Foodhall, Spencer's) and accept high prices. What they don't have is speed, convenience, and the confidence that what they're buying is genuinely imported. Blinkit has the delivery network. What it lacks is the curation, the trust architecture, and the premium positioning to capture this segment.
      </BodyDark>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        <DarkCard>
          <div className="font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] mb-3" style={{ color: '#d97757' }}>85%</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">of survey respondents are willing to pay up to a 10% premium for guaranteed authenticity and fast delivery.</p>
        </DarkCard>
        <DarkCard>
          <div className="font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] mb-3" style={{ color: '#d97757' }}>2–3/5</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">average satisfaction rating with current imported food availability in their city. The unmet need is validated.</p>
        </DarkCard>
        <DarkCard>
          <div className="font-serif text-[clamp(28px,3vw,40px)] font-medium leading-[1.10] mb-3" style={{ color: '#d97757' }}>#1 pain</div>
          <p className="text-[15px] leading-[1.60] text-warm-silver">Limited availability and out-of-stock items. Not price. The gap is access, not willingness to pay.</p>
        </DarkCard>
      </div>
      <p className="font-serif text-[25px] font-medium leading-[1.30] text-ivory max-w-[720px]">
        The current ecosystem is fragmented by design. Blinkit can consolidate it through speed, curation, and trust.
      </p>
    </SectionDark>
  )
}

function ProblemSection() {
  return (
    <SectionLight>
      <H2Light>Problem Definition</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        The problem is not that Indian consumers don't want imported foods. The problem is that every channel that sells imported foods fails at least one critical dimension: speed, trust, variety, or convenience. Blinkit can win by being the first to satisfy all four simultaneously.
      </BodyLight>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <IvoryCard>
          <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black mb-3">Market Gap</h3>
          <p className="text-[15px] leading-[1.60] text-olive-gray">The imported foods market is dominated by offline gourmet stores (Nature's Basket, Foodhall) and slow e-commerce platforms with 1–3 day delivery. The market is large, fragmented, and entirely unserved by quick-commerce.</p>
        </IvoryCard>
        <IvoryCard>
          <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black mb-3">Customer Pain Points</h3>
          <p className="text-[15px] leading-[1.60] text-olive-gray">Four blockers surface consistently: authenticity concerns, lack of variety (niche Japanese, Korean, European items unavailable), high effort across multiple platforms, and zero instant gratification for a segment that expects premium convenience.</p>
        </IvoryCard>
        <IvoryCard>
          <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black mb-3">Business Problem</h3>
          <p className="text-[15px] leading-[1.60] text-olive-gray">Blinkit currently captures everyday essentials. AOV growth is plateauing. Imported foods represent a high-margin, high-ticket adjacency — and competitors are beginning to explore premium SKUs. The cost of inaction is losing affluent customers to the first mover.</p>
        </IvoryCard>
      </div>
    </SectionLight>
  )
}

function MarketSizingSection() {
  return (
    <SectionDark>
      <H2Dark>Market Sizing</H2Dark>
      <div className="text-[12px] font-medium tracking-[0.5px] uppercase text-stone-gray mb-4">TAM → SAM → SOM</div>
      <BodyDark className="max-w-[720px] mb-12">
        The sizing is built bottom-up from verified household data, with conservative assumptions at every stage. The TAM captures total annual imported food spending by premium urban India across all channels. The SAM narrows to the e-commerce-reachable segment in the top 8 metros. The SOM applies a 2% Year-1 capture rate — conservative given that Blinkit's quick-commerce infrastructure is already in place.
      </BodyDark>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {/* TAM Card */}
        <div className="bg-dark-surface rounded-2xl p-7 border-t-[3px] border-terracotta">
          <div className="text-[10px] font-medium tracking-[0.5px] uppercase text-stone-gray mb-3">Total Addressable Market</div>
          <div className="font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] text-ivory mb-3">$19B</div>
          <p className="text-[14px] leading-[1.50] text-warm-silver">18M premium households × ₹93,600 avg imported food spend = ₹1.68 lakh crore (~$19–20B at ₹83/USD)</p>
        </div>
        {/* SAM Card */}
        <div className="bg-dark-surface rounded-2xl p-7 border-t-[3px] border-terracotta">
          <div className="text-[10px] font-medium tracking-[0.5px] uppercase text-stone-gray mb-3">Serviceable Addressable Market</div>
          <div className="font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] text-ivory mb-3">$12B</div>
          <p className="text-[14px] leading-[1.50] text-warm-silver">2.57M online, metro, imported-food-buying households × ₹4.24L e-commerce grocery spend = ₹1.09 lakh crore (~$12B)</p>
        </div>
        {/* SOM Card */}
        <div className="bg-dark-surface rounded-2xl p-7 border-t-[3px] border-terracotta">
          <div className="text-[10px] font-medium tracking-[0.5px] uppercase text-stone-gray mb-3">Serviceable Obtainable Market</div>
          <div className="font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] mb-3" style={{ color: '#d97757' }}>$263M</div>
          <p className="text-[14px] leading-[1.50] text-warm-silver">2% Year-1 market share target. Justified by early trust-building constraints, supply-chain depth limits, and customer adoption curve for premium SKUs.</p>
        </div>
      </div>
      <BodyDark className="max-w-[720px]">
        The 2% SOM is not timidity — it reflects that quick-commerce is still building trust for premium imported SKUs. Supply chain and assortment constraints for imported lines limit early SKU depth. Only a subset of online shoppers will switch premium grocery purchasing to a new offering in Year 1.
      </BodyDark>
    </SectionDark>
  )
}

function CompetitivenessSection() {
  const forces = [
    {
      title: 'Threat of New Entrants',
      rating: 'MEDIUM',
      body: 'High demand growth attracts entrants, but meaningful barriers exist — supply chain capital, inventory risk, and exclusive sourcing relationships. Enablers include the 31% CAGR in organised premium food imports, D2C international brands entering India, and venture-funded dark-store startups targeting affluent pockets. Low switching costs reduce loyalty for all players.',
    },
    {
      title: 'Threat of Substitutes',
      rating: 'MEDIUM–HIGH',
      body: 'High-quality substitutes exist — offline gourmet chains, modern trade, specialty e-commerce — but none combine speed + curation + convenience simultaneously. That combination is the defensible position.',
    },
    {
      title: 'Bargaining Power of Buyers',
      rating: 'HIGH',
      body: 'Premium consumers are well-travelled, price-aware, and deeply convenience-driven. One-tap switching between Blinkit, Zepto, Instamart, and specialty apps. Global pricing transparency via Google. High expectations: HNIs demand quality, speed, authenticity, and reliability simultaneously.',
    },
    {
      title: 'Bargaining Power of Suppliers',
      rating: 'HIGH',
      body: 'Top 100 importers control 60% of high-demand SKUs. Japanese, Korean, and Italian brands prefer single-country exclusive distributors. Brand-specific demand (Meiji, Hershey\'s International, Kewpie) concentrates supplier leverage. MOQ pressures create high working capital dependency for any platform entering the category.',
    },
  ]

  return (
    <SectionLight>
      <H2Light>Market Competitiveness</H2Light>
      <p className="font-serif text-[17px] leading-[1.60] text-near-black max-w-[720px] mb-10">
        A Porter's Five Forces analysis reveals that the structural forces in this market are neither uniformly threatening nor uniformly favorable. The critical asymmetry: suppliers (importers, global brand owners) hold real structural power — but the customer-facing opportunity remains wide open for the player who can combine speed with trust.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {forces.map((force) => (
          <IvoryCard key={force.title} className="relative">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black">{force.title}</h3>
              <span className="text-[12px] font-medium rounded-full px-3 py-1 bg-warm-sand text-charcoal-warm whitespace-nowrap shrink-0">{force.rating}</span>
            </div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{force.body}</p>
          </IvoryCard>
        ))}
      </div>
      {/* Competitive Rivalry — full width */}
      <IvoryCard>
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black">Competitive Rivalry</h3>
          <span className="text-[12px] font-medium rounded-full px-3 py-1 bg-warm-sand text-charcoal-warm whitespace-nowrap shrink-0">HIGH</span>
        </div>
        <p className="text-[15px] leading-[1.60] text-olive-gray">Direct QC competitors (Swiggy Instamart, Zepto, Bigbasket) have funding and supply chain muscle but lower focus on imported SKUs. Indirect competitors include specialty chains (Modern Bazaar, Nature's Basket, Foodhall) and import-specialized e-commerce. The battlefield is already high-intensity — premium imported foods will amplify it.</p>
      </IvoryCard>
    </SectionLight>
  )
}

function CompetitorMatrixSection() {
  return (
    <SectionLight className="!pt-0">
      <H2Light>Competitor Benchmarking</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        The competitive landscape reveals a fundamental gap: players with delivery speed lack deep imported assortments; players with deep imported assortments lack instant delivery. No competitor currently occupies the high-speed + high-imported-depth quadrant. That is Blinkit's space to capture.
      </BodyLight>

      {/* 2×2 Positioning Matrix */}
      <div className="bg-ivory border border-border-cream rounded-[32px] p-8 mb-8 overflow-hidden">
        <div className="relative" style={{ aspectRatio: '4/3', maxHeight: '480px' }}>
          {/* Axes */}
          {/* X axis label */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <span className="text-[11px] font-medium tracking-[0.12px] uppercase text-stone-gray">Delivery Speed (Slow → Fast)</span>
          </div>
          {/* Y axis label */}
          <div className="absolute top-0 bottom-8 left-0 flex items-center">
            <span className="text-[11px] font-medium tracking-[0.12px] uppercase text-stone-gray" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Imported SKU Depth (Low → High)</span>
          </div>

          {/* Matrix area */}
          <div className="absolute top-4 bottom-10 left-10 right-4">
            {/* Grid lines */}
            <div className="absolute inset-0 border border-border-cream rounded-2xl overflow-hidden">
              {/* Quadrant dividers */}
              <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-border-cream" />
              <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-border-cream" />

              {/* Top-right quadrant highlight — Blinkit's space */}
              <div
                className="absolute top-0 right-0"
                style={{
                  width: '50%',
                  height: '50%',
                  background: 'rgba(201,100,66,0.06)',
                  border: '1.5px dashed #e8e6dc',
                  borderRadius: '0 16px 0 0',
                }}
              />
              <div className="absolute top-4 right-4">
                <span className="font-serif text-[15px] font-medium leading-[1.30] text-terracotta">Blinkit's space<br />to capture</span>
              </div>
            </div>

            {/* Competitor dots */}
            {/* Bottom-left: Offline gourmet chains */}
            <div className="absolute" style={{ bottom: '18%', left: '12%' }}>
              <div className="w-3 h-3 rounded-full bg-stone-gray mb-1 mx-auto" />
              <div className="text-[11px] text-olive-gray text-center whitespace-nowrap">Offline gourmet chains</div>
            </div>

            {/* Top-left: Specialty importers */}
            <div className="absolute" style={{ top: '10%', left: '8%' }}>
              <div className="w-3 h-3 rounded-full bg-stone-gray mb-1 mx-auto" />
              <div className="text-[11px] text-olive-gray text-center whitespace-nowrap">Specialty importers</div>
            </div>

            {/* Bottom-right: Current QC players */}
            <div className="absolute" style={{ bottom: '12%', right: '14%' }}>
              <div className="w-3 h-3 rounded-full bg-stone-gray mb-1 mx-auto" />
              <div className="text-[11px] text-olive-gray text-center whitespace-nowrap">Zepto / Instamart /<br />Blinkit (current)</div>
            </div>

            {/* Blinkit target — top-right */}
            <div className="absolute" style={{ top: '18%', right: '18%' }}>
              <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: '#c96442' }} />
              <div className="text-[11px] font-medium text-center whitespace-nowrap" style={{ color: '#c96442' }}>Blinkit (target)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <IvoryCard className="border-l-4 border-terracotta rounded-l-none">
        <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black mb-3">Key Takeaways</h3>
        <p className="text-[15px] leading-[1.60] text-olive-gray">Speed alone is not sufficient — premium customers demand authentic sourcing, curated assortments, and premium packaging. Major players can replicate SKUs at scale, so Blinkit must build brand-exclusive partnerships and shorter supply chains as a structural moat. Execution priorities: sourcing partnerships, premium fulfillment, and trust-building.</p>
      </IvoryCard>
    </SectionLight>
  )
}

function UserResearchSection() {
  return (
    <SectionLight id="research" className="!pt-0">
      <H2Light>User Research</H2Light>
      <div className="flex flex-wrap gap-3 mb-8">
        {['2 qualitative interviews', '12-person online survey', 'Reddit community analysis'].map((tag) => (
          <span key={tag} className="bg-warm-sand text-charcoal-warm text-[14px] rounded-full px-4 py-2">{tag}</span>
        ))}
      </div>
      <BodyLight className="max-w-[720px] mb-12">
        Research was deliberately multi-modal — qualitative depth to surface unspoken friction, quantitative breadth to validate frequency and willingness-to-pay, and community analysis to capture unsolicited opinions from the exact demographic (urban, 25–35, 15–20LPA, metro-dwelling) the product targets.
      </BodyLight>

      {/* 8.1 Qualitative Interviews */}
      <H3>Personal Conversations</H3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        <IvoryCard>
          <div className="text-[11px] font-medium tracking-[0.12px] uppercase text-stone-gray mb-2">Interview · Recreated from chat</div>
          <h4 className="font-serif text-[20px] font-medium text-near-black mb-3">Rishi — 32, Male</h4>
          <p className="text-[15px] leading-[1.60] text-olive-gray mb-4">Rishi buys imported confectionery occasionally — primarily from Spencer's in Kolkata and specialty stores in Gurgaon malls. He doesn't purchase imported food online. His primary frustration: pricing opacity. <em>"I don't understand the pricing. It's too high — I don't know if it's the mall margin or import duty."</em> He hasn't found a compelling reason to search for imported foods online, and hasn't been shown one.</p>
          <span className="bg-warm-sand text-charcoal-warm text-[12px] rounded-full px-3 py-1">Pricing transparency + channel trust are the blockers — not lack of desire</span>
        </IvoryCard>
        <IvoryCard>
          <div className="text-[11px] font-medium tracking-[0.12px] uppercase text-stone-gray mb-2">Interview · Recreated from chat</div>
          <h4 className="font-serif text-[20px] font-medium text-near-black mb-3">Vanshi — 25, Female</h4>
          <p className="text-[15px] leading-[1.60] text-olive-gray mb-4">Vanshi relies almost entirely on relatives travelling abroad to source imported food items — chocolates from Paris, London snacks, brands unavailable in India. She buys imported food herself only when she "randomly sees something interesting in a supermarket." No active online search behaviour for this category.</p>
          <span className="bg-warm-sand text-charcoal-warm text-[12px] rounded-full px-3 py-1">Imported foods are serendipitous, not intentional — Blinkit can convert this into curated discovery</span>
        </IvoryCard>
      </div>

      {/* 8.2 Online Survey */}
      <H3>Online Survey — Key Findings</H3>
      <p className="text-[14px] text-stone-gray leading-[1.43] italic mb-8">14 respondents. Colleagues and friends — 25–35 age range, ₹15–20LPA income, metro-city profile. Demographic questions excluded as the sample was already homogeneous.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            label: 'Frequency',
            finding: '20% high-frequency · 50% regular · 30% occasional',
            body: 'Core categories: snacks, cheese/dairy, breakfast items, condiments. Strong baseline demand across the survey cohort.',
          },
          {
            label: 'Where they buy today',
            finding: 'Nature\'s Basket, Foodhall, supermarkets, specialty stores',
            body: 'Heavy reliance on offline channels. This is not preference — it\'s the absence of a better online option.',
          },
          {
            label: 'Top barriers',
            finding: '#1 Limited availability / out-of-stock',
            body: 'Ranked order: Limited availability, lack of variety, high prices, authenticity doubts. Price is not #1. Access and variety dominate.',
          },
          {
            label: 'Pricing signal',
            finding: '85% will pay up to 10% premium',
            findingHighlight: true,
            body: 'For guaranteed authenticity and fast delivery. Current city availability satisfaction: 2–3/5. Strong unmet need validated.',
          },
          {
            label: 'What would convert them',
            finding: 'Wider range → authenticity → exclusive brands → 10–30 min delivery',
            body: 'Range and trust outrank pure speed as switching motivators. Curation is the product; speed is the enabler.',
          },
          {
            label: 'Most wanted',
            finding: 'Japanese/Korean snacks · European cheeses · Italian pastas/sauces · Vegan/organic imports',
            body: 'Specific, niche, and consistently unavailable in mainstream e-commerce. These represent the highest-value curation opportunity.',
          },
        ].map((item) => (
          <IvoryCard key={item.label}>
            <div className="text-[11px] font-medium tracking-[0.12px] uppercase text-stone-gray mb-2">{item.label}</div>
            <div
              className={`font-serif text-[18px] font-medium leading-[1.30] mb-3 ${item.findingHighlight ? 'text-terracotta' : 'text-near-black'}`}
            >
              {item.finding}
            </div>
            <p className="text-[15px] leading-[1.60] text-olive-gray">{item.body}</p>
          </IvoryCard>
        ))}
      </div>
    </SectionLight>
  )
}

function RecommendationSection() {
  return (
    <SectionDark id="recommendation">
      <H2Dark>Analysis & Recommendation</H2Dark>
      <p className="font-serif text-[clamp(24px,3vw,36px)] font-medium leading-[1.30] text-ivory mb-6 max-w-[720px]">
        Don't build a bigger catalog. Build a trusted destination.
      </p>
      <BodyDark className="max-w-[720px] mb-12">
        The market and research data point to the same conclusion: Blinkit's advantage is not the ability to list more SKUs. It is the ability to deliver verified, curated, high-demand imported items in under 10 minutes. The strategic pivot is from quantity to trust — and from catalog to curation.
      </BodyDark>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[
          {
            num: '1',
            title: 'Instant Global Access',
            body: 'Deliver international brands in under 10 minutes. This is Blinkit\'s existing infrastructure advantage applied to a new category. The 10-minute promise turns a high-consideration specialty purchase into an impulse buy — unlocking AOV and purchase frequency simultaneously.',
          },
          {
            num: '2',
            title: 'Authenticity & Trust',
            body: 'Guarantee genuine imported items through verified supply chains and QC standards. Authenticity doubts are the #4 pain point in research — and the differentiator that commodity platforms cannot easily replicate. Display import verification, country-of-origin markings, and authorized distributor badges on every SKU.',
          },
          {
            num: '3',
            title: 'Curation, Not Catalog',
            body: 'Prioritize the highest-demand items — Japanese/Korean snacks, European cheeses, Italian pastas/sauces, vegan/organic imports — over a mass listing approach. Introduce chef-inspired bundles and global theme collections to drive discovery and increase basket size.',
          },
        ].map((pillar) => (
          <DarkCard key={pillar.num}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5 font-serif text-[20px] font-medium text-ivory" style={{ backgroundColor: '#c96442' }}>
              {pillar.num}
            </div>
            <h3 className="font-serif text-[22px] font-medium leading-[1.25] text-ivory mb-3">{pillar.title}</h3>
            <p className="text-[15px] leading-[1.60] text-warm-silver">{pillar.body}</p>
          </DarkCard>
        ))}
      </div>

      {/* Strategic synthesis */}
      <div className="bg-dark-surface rounded-2xl p-8 border border-dark-surface">
        <h3 className="font-serif text-[25px] font-medium leading-[1.30] text-ivory mb-4">The Pivot in One Line</h3>
        <p className="text-[17px] leading-[1.60] text-warm-silver max-w-[720px]">
          Blinkit must pivot from merely offering a large catalog to providing a Premium Experience focused on Curation and Trust. The current quick-commerce model delivers speed. Layering curation and trust onto that foundation solves a clear unmet need, drives substantial AOV growth, and cements Blinkit's premium positioning in the quick-commerce market — before a competitor occupies that position.
        </p>
      </div>
    </SectionDark>
  )
}

function ExecutionSection() {
  const priorities = [
    {
      p: 'P1',
      initiative: 'Verified supply chain partnerships',
      detail: 'with authorized importers for top-demand categories (Japanese/Korean, European, Italian)',
      rationale: 'Without authentic sourcing, every other initiative fails. Trust is built in the warehouse, not the app.',
    },
    {
      p: 'P2',
      initiative: 'Curated assortment launch',
      detail: '— top 200 SKUs across the 4 high-demand categories, not a mass listing',
      rationale: 'Depth in the right categories outperforms breadth across all. Avoids SKU dilution and inventory risk.',
    },
    {
      p: 'P3',
      initiative: 'Authenticity trust layer on product pages',
      detail: '— import verification badge, country-of-origin, authorized distributor mark',
      rationale: '85% of users will pay a 10% premium for authenticity. Surfacing this at the PDP layer converts intent to purchase.',
    },
    {
      p: 'P4',
      initiative: 'Curated collections & bundles',
      detail: '— "Japanese Kitchen," "European Cheese Board," chef-inspired kits',
      rationale: 'Drives discovery and increases basket size. Differentiates from a plain search-and-add-to-cart experience.',
    },
    {
      p: 'P5',
      initiative: 'Premium pricing strategy',
      detail: '— price at a 10% premium to standard Blinkit pricing, with transparent import-cost communication',
      rationale: 'Validated by research. Avoids the price-compression trap of competing with commodity platforms.',
    },
  ]

  return (
    <SectionLight>
      <H2Light>Execution Priorities</H2Light>
      <BodyLight className="max-w-[720px] mb-10">
        Translating the strategic recommendation into product and operational action requires sequencing. The following priorities are ordered by foundational dependency — supply chain and sourcing before product surface, trust architecture before marketing.
      </BodyLight>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Priority</Th>
            <Th>Initiative</Th>
            <Th>Rationale</Th>
          </tr>
        </thead>
        <tbody>
          {priorities.map((row) => (
            <tr key={row.p}>
              <Td highlight className="font-medium text-near-black whitespace-nowrap">{row.p}</Td>
              <Td>
                <span className="font-medium text-near-black">{row.initiative}</span>
                <span className="text-olive-gray"> {row.detail}</span>
              </Td>
              <Td className="text-olive-gray">{row.rationale}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SectionLight>
  )
}

function WhyItWorksSection() {
  return (
    <SectionLight className="!pt-0">
      <H2Light>Why This Works for Blinkit</H2Light>
      <p className="font-serif text-[17px] leading-[1.60] text-olive-gray max-w-[720px] mb-6">
        Blinkit's structural advantage in this category is not its app or its catalog — it's its fulfillment network. The dark store infrastructure that delivers groceries in 10 minutes is the same infrastructure that can deliver a wheel of authentic Gouda or a bottle of Kewpie mayo. The infrastructure cost is already sunk. The marginal cost of adding imported SKUs to that network is significantly lower than building the delivery capability from scratch.
      </p>
      <p className="font-serif text-[17px] leading-[1.60] text-olive-gray max-w-[720px] mb-10">
        The demand is already validated. The willingness to pay a premium is confirmed. The competition is fragmented and slow. The only missing piece is execution: curated sourcing, trust-layer product design, and the courage to position as a premium destination rather than a generic everything-store.
      </p>
      <IvoryCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black mb-4">What Blinkit already has</h3>
            <ul className="space-y-2">
              {[
                '10-minute fulfillment infrastructure already at scale',
                'Existing trust as a brand in premium urban households',
                'Millions of active premium users already in the app funnel',
              ].map((item) => (
                <li key={item} className="text-[15px] leading-[1.60] text-olive-gray flex gap-2">
                  <span className="text-terracotta mt-1">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-[20px] font-medium leading-[1.30] text-near-black mb-4">What the strategy adds</h3>
            <ul className="space-y-2">
              {[
                'Verified sourcing and authenticity assurance',
                'Curated selection designed around the 4 highest-demand categories',
                'Premium pricing architecture that respects the customer\'s intelligence',
              ].map((item) => (
                <li key={item} className="text-[15px] leading-[1.60] text-olive-gray flex gap-2">
                  <span className="text-terracotta mt-1">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </IvoryCard>
    </SectionLight>
  )
}

function ClosingSection() {
  return (
    <SectionDark>
      <H2Dark>Where This Leaves the Problem</H2Dark>
      <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-8">
        Blinkit's hardest problem in this category was never building delivery speed — it already has that. The $263M sitting uncaptured in Year 1 alone is the cost of treating imported foods as just another SKU vertical rather than as a trust-and-curation category that rewards specialization.
      </p>
      <p className="font-serif text-[20px] leading-[1.60] text-warm-silver max-w-[720px] mb-8">
        The research kept returning to one underlying truth: premium buyers are not asking for cheaper. They are asking for reliable. Authentic. Curated. Fast. Blinkit is the only player in India's quick-commerce market with a realistic path to all four simultaneously — if it chooses to build the sourcing relationships and trust architecture the category demands.
      </p>
      <p className="font-serif text-[17px] leading-[1.60] text-warm-silver max-w-[720px] mb-14 opacity-80">
        This case study is a product course capstone. The analysis here is a strategic argument, built on market sizing, competitive analysis, and direct user research. The recommendation is deliberately focused: curation over catalog, trust over volume, and premium positioning as a structural moat rather than a marketing message.
      </p>
      <p className="font-serif text-[clamp(24px,3vw,36px)] font-medium leading-[1.30] max-w-[720px]" style={{ color: '#d97757' }}>
        The opportunity is not to out-list the gourmet stores. It is to out-speed them, out-trust them, and make their best customers never need to visit again.
      </p>
    </SectionDark>
  )
}

function PageFooter() {
  return (
    <footer className="bg-parchment border-t border-border-cream px-6 md:px-16 py-8">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between gap-4 text-[14px] text-stone-gray">
        <span>Blinkit — Imported Foods Case Study · Airtribe Capstone · 2025</span>
        <span>
          Built by Sujit&nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="https://linkedin.com" className="underline text-stone-gray hover:text-olive-gray transition-colors">LinkedIn</a>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="/" className="underline text-stone-gray hover:text-olive-gray transition-colors">Other Projects</a>
        </span>
      </div>
    </footer>
  )
}

/* ─── Page export ──────────────────────────────────────────────────── */

export function Blinkit() {
  return (
    <ProjectLayout>
      <HeroSection />
      <OpportunitySection />
      <CoreInsightSection />
      <ProblemSection />
      <MarketSizingSection />
      <CompetitivenessSection />
      <CompetitorMatrixSection />
      <UserResearchSection />
      <RecommendationSection />
      <ExecutionSection />
      <WhyItWorksSection />
      <ClosingSection />
      <PageFooter />
    </ProjectLayout>
  )
}
