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
          <p className="text-[17px] font-normal leading-[1.70] text-olive-gray mb-6">
            I'm a sales and distribution operator transitioning into Product Management — and I build like one, grounded in how products actually reach and behave in the hands of users.
          </p>
          <p className="text-[17px] font-normal leading-[1.70] text-olive-gray mb-6">
            My path: MBA at XIMB, a summer with PwC assisting the MSME Department, Government of Odisha, and then Airtel Payments Bank as a Management Trainee — with stints across product and customer experience before my current role as Zonal Manager. Running channel strategy and field teams there taught me a specific kind of discipline: a product is only as good as the incentive structure and delivery system behind it. That's the lens I bring to PM work — looking for structural inefficiencies rather than surface symptoms, and designing solutions that hold up once they leave the deck.
          </p>
          <p className="text-[17px] font-normal leading-[1.70] text-olive-gray mb-6">
            I've been deliberate about building the PM muscle in parallel: six real projects across Zomato, Blinkit, and Nykaa through Airtribe's AI PM cohort, plus an ongoing PM consulting engagement with a sports analytics startup.
          </p>
          <p className="text-[17px] font-normal leading-[1.70] text-olive-gray mb-2">What that looks like in practice:</p>
          <ul className="text-[17px] font-normal leading-[1.70] text-olive-gray space-y-3">
            <li>— Redesigned channel engagement models to drive 43% growth in product sales, and executed expansion plans to achieve full pin code coverage.</li>
            <li>— Diagnosed a ₹225 Cr GMV leak on a major e-commerce platform by isolating return anxiety as the root cause, then designed prototypes projected to recover 79% of it.</li>
            <li>— Built Badcode, an independent browser-based SQL learning platform with a write → validate → hint loop across an 8-level curriculum — shipped solo, end-to-end.</li>
          </ul>
        </div>

        <div data-reveal className="hidden md:flex aspect-[3/4] bg-warm-sand rounded-2xl border border-border-warm items-center justify-center flex-col gap-3 overflow-hidden">
          <img src="/profile.png" alt="Sujit Sahu" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  )
}
