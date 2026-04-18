import { ProjectLayout } from '../../components/ProjectLayout'

export function Momentum() {
  return (
    <ProjectLayout nextProject={{ title: 'Uber Reserve', path: '/projects/uber-reserve' }}>
      <div className="max-w-[800px] mx-auto px-6 md:px-8 pb-10 w-full">
         <div className="text-[12px] font-medium tracking-[1.4px] uppercase text-terracotta mb-4">Independent Build</div>
         <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] text-near-black mb-6">
            Momentum
         </h1>
         <p className="text-[19px] leading-[1.60] text-charcoal-warm mb-10">
            A human-accountability goal-tracking platform built on the thesis that mentor oversight drives follow-through better than software notifications.
         </p>
      </div>

      <div className="w-full bg-ivory border-y border-border-cream py-16 mb-16 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto w-full prose text-[17px] text-olive-gray leading-[1.70]">
           <h2 className="font-serif text-[28px] font-medium text-near-black mb-4">Core Thesis</h2>
           <p className="mb-6">Software is bad at enforcing discipline. A push notification from a habit app is easily swiped away. Momentum replaces algorithmic reminders with human friction: 'Guides' who monitor your daily check-ins and step in when you fall off track.</p>
           <p className="italic text-stone-gray mb-8 mt-2">[Full case study text placeholder]</p>
        </div>
      </div>
    </ProjectLayout>
  )
}
