export function ProjectHero({ title, subtitle, eyebrow, category, tags = [], meta = [] }) {
  return (
    <section className="bg-parchment">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-10 pb-16">

        {/* Breadcrumb */}
        <div className="text-[11px] font-sans text-stone-gray mb-8 leading-none">
          <a href="/#projects" className="hover:text-near-black transition-colors duration-150 no-underline text-stone-gray">Portfolio</a>
          <span className="text-terracotta mx-2">›</span>
          <span>{category}</span>
          <span className="text-terracotta mx-2">›</span>
          <span className="text-charcoal-warm">{title}</span>
        </div>

        {/* Eyebrow */}
        <div className="text-[10px] font-sans font-medium uppercase tracking-[0.8px] text-terracotta mb-4">
          {eyebrow}
        </div>

        {/* Title */}
        <h1 className="font-serif text-[25px] md:text-[36px] lg:text-[52px] font-medium leading-[1.15] text-near-black mb-6 max-w-[900px]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-[17px] md:text-[20px] font-normal leading-[1.60] text-olive-gray mb-10 max-w-[680px]">
          {subtitle}
        </p>

        {/* Meta row */}
        {meta.length > 0 && (
          <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-border-warm">
            {meta.map((item, i) => (
              <div key={i}>
                <div className="text-[9px] font-sans font-medium uppercase tracking-[0.8px] text-stone-gray mb-1.5">
                  {item.label}
                </div>
                <div className="text-[12px] font-sans font-medium text-charcoal-warm">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tag pills */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="inline-block px-3 py-1 text-[11px] font-sans text-olive-gray bg-ivory border border-border-warm rounded-full leading-none"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
