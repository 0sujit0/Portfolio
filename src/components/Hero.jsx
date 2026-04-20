import { useEffect, useLayoutEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { Download } from 'lucide-react'

export function Hero() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const container = ref.current
    if (!container) return
    container.querySelectorAll('[data-hero]').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(44px) scale(0.97)'
    })
  }, [])

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const els = Array.from(container.querySelectorAll('[data-hero]'))
    animate(els, {
      opacity: [0, 1],
      translateY: ['44px', '0px'],
      scale: [0.97, 1],
      delay: stagger(120, { start: 150 }),
      duration: 1100,
      ease: 'outExpo',
    })
  }, [])

  return (
    <section ref={ref} id="hero" className="min-h-[calc(100vh-60px)] flex flex-col justify-center section-padding pt-0 pb-0">
      <div data-hero className="text-xs font-medium tracking-[1.4px] uppercase text-terracotta mb-6">
        Product · Operations · Fintech
      </div>

      <h1 data-hero className="font-serif text-[clamp(40px,6vw,72px)] font-medium leading-[1.08] text-near-black mb-7 max-w-[720px]">
        Sujit Kumar Sahu
      </h1>

      <p data-hero className="font-serif text-[clamp(18px,2.4vw,26px)] font-normal leading-[1.40] text-charcoal-warm max-w-[600px] mb-4">
        Product-oriented operator at a payments bank. Moving into PM.
      </p>

      <p data-hero className="text-[17px] font-normal leading-[1.60] text-stone-gray max-w-[560px] mb-12">
        Zonal Manager at Airtel Payments Bank, shipping AI products and PM case work on the side.
      </p>

      <div data-hero className="flex items-center flex-wrap gap-5">
        <a
          href="mailto:0sujit0@gmail.com"
          className="font-sans text-[15px] font-medium text-ivory bg-terracotta hover:opacity-90 px-6 py-3 rounded-xl transition-opacity flex items-center gap-2"
        >
          Email me <span>→</span>
        </a>

        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/sujit-kumar-sahu"
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet flex items-center gap-1"
          >
            LinkedIn <span className="text-[12px]">↗</span>
          </a>
          <a
            href="/Resume.pdf"
            download="Sujit-Kumar-Sahu-Resume.pdf"
            className="link-quiet flex items-center gap-1"
          >
            Resume <Download size={14} className="ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
