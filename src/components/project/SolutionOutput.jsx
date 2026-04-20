function SolutionCard({ eyebrow, title, description, pills = [] }) {
  return (
    <div className="bg-dark-surface rounded-xl p-6 flex flex-col gap-4">
      <div className="text-[10px] font-sans font-medium uppercase tracking-[0.8px] text-coral">
        {eyebrow}
      </div>
      <h3 className="font-serif text-[14px] md:text-[18px] font-medium text-ivory leading-[1.30]">
        {title}
      </h3>
      <p className="font-sans text-[11px] text-warm-silver leading-[1.50]">
        {description}
      </p>
      {pills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {pills.map((pill, i) => (
            <span
              key={i}
              className="inline-block px-3 py-1 text-[11px] font-sans text-warm-silver bg-near-black rounded-full leading-none border border-dark-surface"
            >
              {pill}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function SolutionOutput({ solutions = [], layout = 'single' }) {
  const gridClass =
    layout === 'two-col'
      ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
      : layout === 'stacked'
      ? 'flex flex-col gap-4'
      : 'flex flex-col gap-4'

  return (
    <section className="bg-near-black">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">

        <div className="text-[10px] font-sans font-medium uppercase tracking-[0.8px] text-warm-silver mb-10">
          Solution / Output
        </div>

        <div className={gridClass}>
          {solutions.map((solution, i) => (
            <SolutionCard
              key={i}
              eyebrow={solution.eyebrow}
              title={solution.title}
              description={solution.description}
              pills={solution.pills || []}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
