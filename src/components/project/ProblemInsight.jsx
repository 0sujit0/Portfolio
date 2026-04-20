export function ProblemInsight({ eyebrow, statement, cards = [] }) {
  return (
    <section>
      {/* Dark statement block */}
      <div className="bg-near-black">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-16 pb-12">
          <div className="bg-near-black border border-dark-surface rounded-lg p-6 max-w-[760px]">
            <div className="text-[10px] font-sans font-medium uppercase tracking-[0.8px] text-coral mb-3">
              {eyebrow}
            </div>
            <p className="font-serif text-[16px] md:text-[20px] font-medium text-ivory leading-[1.30]">
              {statement}
            </p>
          </div>
        </div>
      </div>

      {/* Ivory two-column cards — light section */}
      {cards.length > 0 && (
        <div className="bg-parchment">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-ivory border border-border-cream rounded-lg p-4"
                >
                  <div className="font-serif text-[14px] font-medium text-near-black mb-3">
                    {card.title}
                  </div>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li
                        key={j}
                        className="font-sans text-[12px] text-olive-gray leading-[1.60] flex gap-2"
                      >
                        <span className="text-stone-gray shrink-0 mt-[2px]">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
