import { ProjectLayout } from '../../components/ProjectLayout'

export function UberReserve() {
  return (
    <ProjectLayout nextProject={{ title: 'Badcode', path: '/projects/badcode' }}>
      <div className="max-w-[800px] mx-auto px-6 md:px-8 pb-10 w-full">
         <div className="text-[12px] font-medium tracking-[1.4px] uppercase text-terracotta mb-4">Case Study</div>
         <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] text-near-black mb-6">
            Uber Reserve
         </h1>
         <p className="text-[19px] leading-[1.60] text-charcoal-warm mb-10">
            Adoption diagnosis for pre-booked rides among urban professionals.
         </p>
      </div>

      <div className="w-full bg-ivory border-y border-border-cream py-16 mb-16 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto w-full prose text-[17px] text-olive-gray leading-[1.70]">
           <p className="italic text-stone-gray mb-8 mt-2">[Full case study text placeholder]</p>
        </div>
      </div>
    </ProjectLayout>
  )
}
