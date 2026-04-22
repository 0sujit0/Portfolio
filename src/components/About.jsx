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
          <p className="text-[17px] font-normal leading-[1.70] text-olive-gray">
            Most product decisions fail because they don't survive distribution. I've spent my time at Airtel Payments Bank managing the reality of channel engagement and scaling service coverage. Now, I'm bringing that operational rigor upstream to product management. Whether I'm designing an 8-level SQL learning platform from scratch or diagnosing massive GMV leakages for e-commerce, I build solutions rooted in ground truth, not just theory. I'm currently seeking roles where distribution expertise and user empathy intersect.
          </p>
        </div>

        <div data-reveal className="hidden md:flex aspect-[3/4] bg-warm-sand rounded-2xl border border-border-warm items-center justify-center flex-col gap-3 overflow-hidden">
          <img src="/profile.jpg" alt="Sujit Sahu" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  )
}
