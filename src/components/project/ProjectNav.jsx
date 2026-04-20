export function ProjectNav({ prev, next }) {
  return (
    <section className="bg-parchment border-t border-border-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-10">
        <div className="flex items-stretch justify-between gap-4">

          {/* Previous */}
          {prev ? (
            <a
              href={prev.href}
              className="group flex flex-col gap-1 no-underline border border-border-cream rounded-lg px-4 py-3 bg-ivory hover:border-border-warm transition-colors duration-150 flex-1 max-w-[45%]"
            >
              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.8px] text-stone-gray">
                ← Previous
              </span>
              <span className="font-serif text-[13px] font-medium text-near-black group-hover:text-terracotta transition-colors duration-150">
                {prev.title}
              </span>
            </a>
          ) : (
            <div className="flex-1 max-w-[45%]" />
          )}

          {/* Next */}
          {next ? (
            <a
              href={next.href}
              className="group flex flex-col gap-1 items-end no-underline border border-border-cream rounded-lg px-4 py-3 bg-ivory hover:border-border-warm transition-colors duration-150 flex-1 max-w-[45%] text-right"
            >
              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.8px] text-stone-gray">
                Next →
              </span>
              <span className="font-serif text-[13px] font-medium text-near-black group-hover:text-terracotta transition-colors duration-150">
                {next.title}
              </span>
            </a>
          ) : (
            <div className="flex-1 max-w-[45%]" />
          )}

        </div>
      </div>
    </section>
  )
}
