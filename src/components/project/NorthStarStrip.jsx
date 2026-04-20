export function NorthStarStrip({ stats = [] }) {
  return (
    <section className="bg-near-black">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-dark-surface rounded-lg px-4 py-[14px]"
            >
              <div className="font-serif text-[22px] md:text-[28px] font-medium text-coral mb-2 leading-none">
                {stat.number}
              </div>
              <div className="font-sans text-[10px] text-warm-silver leading-[1.4]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
