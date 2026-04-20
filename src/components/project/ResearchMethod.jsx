export function ResearchMethod({ steps = [] }) {
  return (
    <section className="bg-parchment">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">

        <div className="text-[10px] font-sans font-medium uppercase tracking-[0.8px] text-terracotta mb-10">
          Research & Method
        </div>

        <div className="flex flex-col gap-8 max-w-[760px]">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5">
              {/* Step bubble */}
              <div className="shrink-0 w-6 h-6 rounded-full bg-terracotta flex items-center justify-center mt-0.5">
                <span className="font-sans text-[11px] font-medium text-ivory leading-none">
                  {i + 1}
                </span>
              </div>

              {/* Step content */}
              <div>
                <div className="font-sans text-[12px] font-medium text-near-black mb-1.5 leading-none">
                  {step.title}
                </div>
                <p className="font-sans text-[11px] text-olive-gray leading-[1.60]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
