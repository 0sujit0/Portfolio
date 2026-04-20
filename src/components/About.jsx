import { useScrollReveal } from '../hooks/useScrollReveal'

export function About() {
  const ref = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 100, duration: 800 })

  return (
    <div className="bg-ivory border-y border-border-cream">
      <section ref={ref} id="about" className="section-padding grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div data-reveal className="flex flex-col">
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.20] text-near-black mb-8">
            About
          </h2>
          <p className="text-[17px] font-normal leading-[1.70] text-olive-gray mb-5">
            By day, I run the Vizag territory for Airtel Payments Bank — a network of close to a thousand retailers across AePS, BBPS, DMT, and Suraksha insurance products. That means FSE management, distributor relationships, activation funnels, and incentive modeling all land on my desk. Alongside the day job, I've shipped Badcode, a browser-based SQL tutor with WebAssembly execution and GPT-guided hints, built Momentum, a human-accountability goal-tracking platform, and continued doing independent PM case work across fintech, consumer, and AI product categories.
          </p>
          <p className="text-[17px] font-normal leading-[1.70] text-olive-gray">
            The reason I want to move into product management is simple: working distribution has shown me exactly where structural problems live. A territory manager patches those problems one market at a time. A PM fixes the underlying system. I want to work at that layer — solving for the operator at scale, not just the operator in my zone.
          </p>
        </div>

        <div data-reveal className="hidden md:flex aspect-[3/4] bg-warm-sand rounded-2xl border border-border-warm items-center justify-center flex-col gap-3">
          <span className="font-serif text-[52px] font-medium text-terracotta opacity-60">SKS</span>
          <span className="text-[13px] text-stone-gray">Photo placeholder</span>
        </div>
      </section>
    </div>
  )
}
