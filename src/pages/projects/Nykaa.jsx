import { ProjectLayout } from '../../components/ProjectLayout'

export function Nykaa() {
  return (
    <ProjectLayout nextProject={{ title: 'Momentum', path: '/projects/momentum' }}>
      <div className="max-w-[800px] mx-auto px-6 md:px-8 pb-10 w-full">
         <div className="text-[12px] font-medium tracking-[1.4px] uppercase text-terracotta mb-4">Case Study</div>
         <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] text-near-black mb-6">
            Nykaa Fashion — Conversion Optimization
         </h1>
         <p className="text-[19px] leading-[1.60] text-charcoal-warm mb-10">
            Diagnosed a ₹225 Cr GMV leakage across 19 million non-converting users. Designed a 16-screen prototype targeting a 55% RPU lift.
         </p>
      </div>

      <div className="w-full bg-ivory border-y border-border-cream py-16 mb-16 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto w-full prose text-[17px] text-olive-gray leading-[1.70]">
           <div className="aspect-square max-w-sm mx-auto bg-warm-sand flex items-center justify-center border border-border-cream rounded-xl mb-12 shadow-sm font-serif text-stone-gray italic">
               Mobile Prototype Screenshot Placeholder
           </div>

           <h2 className="font-serif text-[28px] font-medium text-near-black mb-4">The Diagnosis</h2>
           <p className="mb-6">Nykaa Fashion exhibited strong top-of-funnel acquisition but suffered severe drop-offs at the discovery and list-view stages. Quantitative analysis indicated a massive volume of 'scrollers' (19M) who never added an item to their cart, resulting in an estimated ₹225 Cr annualized GMV leakage.</p>

           <h2 className="font-serif text-[28px] font-medium text-near-black mb-4">The Intervention</h2>
           <p className="mb-6">The core issue wasn't price; it was decision fatigue. The proposed solution restructured the product discovery loop:</p>
           <ul className="list-disc pl-5 mb-8 flex flex-col gap-2">
              <li><strong>Guided Discovery:</strong> Replaced infinite, uncurated lists with 'Style Paths' based on immediate intent cues.</li>
              <li><strong>Social Proof Injection:</strong> Abstracted standard reviews into 'Loved by' micro-signals visible directly on the list view.</li>
              <li><strong>Checkout De-risking:</strong> Prominently surfaced return policies dynamically based on user segment risk scores.</li>
           </ul>

           <h2 className="font-serif text-[28px] font-medium text-near-black mb-4">Projected Impact</h2>
           <p>Financial modeling based on conservative baseline improvements across the funnels projected a 55% increase in Revenue Per User (RPU) for the targeted segment.</p>
        </div>
      </div>
    </ProjectLayout>
  )
}
