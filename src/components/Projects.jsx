import { useState, useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const caseStudies = [
  { title: 'Blinkit Premium HNI', hook: 'Entry strategy for imported international food brands on quick commerce.', tags: ['Consumer', 'Growth'], slug: 'blinkit-imported-foods' },
  { title: 'Blinkit Subscriptions', hook: 'Subscription model for essentials across daily, weekly, and monthly cadences.', tags: ['Consumer', 'Fintech'], slug: 'blinkit-subscriptions' },
  { title: 'Meal Planning Tool', hook: 'Time-and-pantry-aware meal planner, prototyped end-to-end.', tags: ['Consumer', 'AI'], slug: 'meal-planning' },
  { title: 'VitaFit', hook: 'Engagement and retention features for an online fitness platform.', tags: ['Consumer', 'Growth'], slug: 'vitafit' },
  { title: 'Zomato', hook: 'OKRs, KPI funnel, and cohort analysis for Tier-1 food delivery.', tags: ['Consumer', 'Growth', 'Fintech'], slug: 'zomato-analytics' },
  { title: 'Twitter (X)', hook: 'AARRR funnel mapping and growth opportunity prioritization.', tags: ['Consumer', 'Growth'], slug: 'twitter-x' },
  { title: 'Online Education', hook: 'Personalized learning recommendation system across three user personas.', tags: ['AI', 'Consumer'], slug: 'online-education' },
]

export function Projects() {
  const [activeTag, setActiveTag] = useState('all')

  const filteredCaseStudies = activeTag === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.tags.includes(activeTag))

  // Scroll reveals
  const headingRef = useScrollReveal({ duration: 700 })
  const featuredRef = useScrollReveal({ selector: '[data-featured]', staggerDelay: 100, duration: 800 })
  const buildsRef = useScrollReveal({ selector: '[data-build]', staggerDelay: 100, duration: 700 })

  // Case study cards grid ref — re-animates on filter change
  const caseGridRef = useRef(null)
  const isMounted = useRef(false)

  useEffect(() => {
    const grid = caseGridRef.current
    if (!grid) return

    const cards = Array.from(grid.querySelectorAll('[data-card]'))
    if (!cards.length) return

    if (!isMounted.current) {
      // First render: set hidden, then reveal on scroll
      cards.forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(16px)'
      })
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          animate(cards, {
            opacity: [0, 1],
            translateY: ['16px', '0px'],
            delay: stagger(50),
            duration: 600,
            ease: 'outExpo',
          })
          observer.disconnect()
        },
        { threshold: 0.08 }
      )
      observer.observe(grid)
      isMounted.current = true
      return () => observer.disconnect()
    } else {
      // Filter change: stagger-in
      cards.forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(28px) scale(0.96)'
      })
      animate(cards, {
        opacity: [0, 1],
        translateY: ['28px', '0px'],
        scale: [0.96, 1],
        delay: stagger(60),
        duration: 500,
        ease: 'outExpo',
      })
    }
  }, [filteredCaseStudies])

  return (
    <div className="bg-ivory border-y border-border-cream">
      <section id="projects" className="section-padding">
        <div ref={headingRef} className="mb-14">
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.20] text-near-black mb-3">
            Projects
          </h2>
          <p className="text-[17px] text-olive-gray max-w-[560px] leading-[1.60]">
            Selected projects across shipped products, independent builds, and PM case work.
          </p>
        </div>

        {/* Tier 1 - Featured */}
        <div className="text-[11px] font-medium tracking-[1.2px] uppercase text-stone-gray mb-5">
          Featured
        </div>
        <div ref={featuredRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          <div data-featured className="bg-ivory rounded-2xl border border-border-cream overflow-hidden shadow-[rgba(0,0,0,0.04)_0px_4px_24px] flex flex-col group cursor-pointer" onClick={() => window.location.href = '/projects/badcode'}>
            <div className="h-[180px] bg-warm-sand flex items-center justify-center border-b border-border-cream font-serif text-[15px] text-stone-gray italic relative overflow-hidden">
              <span className="z-10 relative">Badcode — Screenshot placeholder</span>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-border-warm to-transparent opacity-50 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70"></div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="font-serif text-[22px] font-medium leading-[1.20] text-near-black mb-2.5">
                Badcode
              </div>
              <p className="text-[15px] leading-[1.60] text-olive-gray mb-6 flex-1">
                Shipped browser-based SQL tutor. WebAssembly execution, Supabase auth, GPT-guided hints.
              </p>
              <a href="/projects/badcode" className="self-start text-[14px] font-medium text-terracotta no-underline border border-border-warm rounded-lg px-4 py-2 inline-flex items-center gap-1.5 transition-colors duration-200 hover:bg-warm-sand hover:border-ring-warm">
                Case study <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          <div data-featured className="bg-ivory rounded-2xl border border-border-cream overflow-hidden shadow-[rgba(0,0,0,0.04)_0px_4px_24px] flex flex-col group cursor-pointer" onClick={() => window.location.href = '/projects/nykaa-fashion-conversion'}>
            <div className="h-[180px] bg-warm-sand flex items-center justify-center border-b border-border-cream font-serif text-[15px] text-stone-gray italic relative overflow-hidden">
              <span className="z-10 relative">Nykaa Fashion — Screenshot placeholder</span>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-border-warm to-transparent opacity-50 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70"></div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="font-serif text-[22px] font-medium leading-[1.20] text-near-black mb-2.5">
                Nykaa Fashion
              </div>
              <p className="text-[15px] leading-[1.60] text-olive-gray mb-6 flex-1">
                ₹225 Cr GMV leakage diagnosed across 19M non-converting users. 55% RPU lift designed.
              </p>
              <a href="/projects/nykaa-fashion-conversion" className="self-start text-[14px] font-medium text-terracotta no-underline border border-border-warm rounded-lg px-4 py-2 inline-flex items-center gap-1.5 transition-colors duration-200 hover:bg-warm-sand hover:border-ring-warm">
                Case study <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          <div data-featured className="bg-ivory rounded-2xl border border-border-cream overflow-hidden shadow-[rgba(0,0,0,0.04)_0px_4px_24px] flex flex-col group cursor-pointer" onClick={() => window.location.href = '/projects/uber-reserve'}>
            <div className="h-[180px] bg-warm-sand flex items-center justify-center border-b border-border-cream font-serif text-[15px] text-stone-gray italic relative overflow-hidden">
              <span className="z-10 relative">Uber Reserve — Screenshot placeholder</span>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-border-warm to-transparent opacity-50 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70"></div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="font-serif text-[22px] font-medium leading-[1.20] text-near-black mb-2.5">
                Uber Reserve
              </div>
              <p className="text-[15px] leading-[1.60] text-olive-gray mb-6 flex-1">
                Repositioned Reserve from a premium booking tier into a guaranteed-arrival insurance product. First-principles diagnosis + JTBD + supply modeling.
              </p>
              <a href="/projects/uber-reserve" className="self-start text-[14px] font-medium text-terracotta no-underline border border-border-warm rounded-lg px-4 py-2 inline-flex items-center gap-1.5 transition-colors duration-200 hover:bg-warm-sand hover:border-ring-warm">
                Case study <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          <div data-featured className="bg-ivory rounded-2xl border border-border-cream overflow-hidden shadow-[rgba(0,0,0,0.04)_0px_4px_24px] flex flex-col group cursor-pointer" onClick={() => window.location.href = '/projects/meal-planning'}>
            <div className="h-[180px] bg-warm-sand flex items-center justify-center border-b border-border-cream font-serif text-[15px] text-stone-gray italic relative overflow-hidden">
              <span className="z-10 relative">Bon Appétit Bytes — Screenshot placeholder</span>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-border-warm to-transparent opacity-50 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70"></div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="font-serif text-[22px] font-medium leading-[1.20] text-near-black mb-2.5">
                Bon Appétit Bytes
              </div>
              <p className="text-[15px] leading-[1.60] text-olive-gray mb-6 flex-1">
                On-demand meal decision app for time-starved Indian urban professionals. Prototyped end-to-end in 2 weeks.
              </p>
              <a href="/projects/meal-planning" className="self-start text-[14px] font-medium text-terracotta no-underline border border-border-warm rounded-lg px-4 py-2 inline-flex items-center gap-1.5 transition-colors duration-200 hover:bg-warm-sand hover:border-ring-warm">
                Case study <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          <div data-featured className="bg-ivory rounded-2xl border border-border-cream overflow-hidden shadow-[rgba(0,0,0,0.04)_0px_4px_24px] flex flex-col group cursor-pointer" onClick={() => window.location.href = '/projects/blinkit-subscriptions'}>
            <div className="h-[180px] bg-warm-sand flex items-center justify-center border-b border-border-cream font-serif text-[15px] text-stone-gray italic relative overflow-hidden">
              <span className="z-10 relative">Blinkit Subscriptions — Screenshot placeholder</span>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-border-warm to-transparent opacity-50 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70"></div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="font-serif text-[22px] font-medium leading-[1.20] text-near-black mb-2.5">
                Blinkit Subscriptions
              </div>
              <p className="text-[15px] leading-[1.60] text-olive-gray mb-6 flex-1">
                Subscription model for essentials across daily, weekly, and monthly cadences. Built for retention and predictable basket value.
              </p>
              <a href="/projects/blinkit-subscriptions" className="self-start text-[14px] font-medium text-terracotta no-underline border border-border-warm rounded-lg px-4 py-2 inline-flex items-center gap-1.5 transition-colors duration-200 hover:bg-warm-sand hover:border-ring-warm">
                Case study <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Tier 2 - Independent Builds */}
        <div className="text-[11px] font-medium tracking-[1.2px] uppercase text-stone-gray mb-5 mt-16">
          Independent Builds
        </div>
        <div ref={buildsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">

          <a data-build href="/projects/momentum" className="bg-parchment border border-border-warm rounded-xl p-6 no-underline transition-colors duration-200 hover:border-ring-warm group cursor-pointer block">
            <div className="font-serif text-[18px] font-medium text-near-black mb-2 group-hover:text-terracotta transition-colors duration-200">
              Momentum
            </div>
            <p className="text-[14px] leading-[1.60] text-olive-gray">
              Human accountability and goal-tracking platform. Mentor oversight drives follow-through better than software notifications.
            </p>
          </a>

          <a data-build href="/projects/notion-study-notes" className="bg-parchment border border-border-warm rounded-xl p-6 no-underline transition-colors duration-200 hover:border-ring-warm group cursor-pointer block">
            <div className="font-serif text-[18px] font-medium text-near-black mb-2 group-hover:text-terracotta transition-colors duration-200">
              Notion Study-Notes Workflow
            </div>
            <p className="text-[14px] leading-[1.60] text-olive-gray">
              Reusable AI-assisted system for converting lecture transcripts into structured study notes.
            </p>
          </a>

        </div>

        {/* Tier 3 - PM Case Studies */}
        <div className="text-[11px] font-medium tracking-[1.2px] uppercase text-stone-gray mb-5 mt-16">
          PM Case Studies
        </div>

        <div className="flex gap-2 mb-6 flex-nowrap overflow-x-auto pb-1 scrollbar-hide -mx-8 px-8 md:mx-0 md:px-0">
          {['all', 'Fintech', 'AI', 'Growth', 'Consumer'].map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`
                whitespace-nowrap text-[13px] font-normal px-4 py-1.5 rounded-full border transition-all duration-150 select-none cursor-pointer
                ${activeTag === tag
                  ? 'bg-terracotta text-ivory border-terracotta'
                  : 'bg-ivory text-olive-gray border-border-warm hover:border-border-cream hover:opacity-80'}
              `}
            >
              {tag === 'all' ? 'All' : tag}
            </button>
          ))}
        </div>

        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-12 text-[15px] italic text-stone-gray col-span-full border border-border-warm border-dashed rounded-xl">
            No case studies match this filter yet.
          </div>
        ) : (
          <div ref={caseGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCaseStudies.map((c, i) => (
              <a data-card href={`/projects/${c.slug}`} key={i} className="bg-ivory border border-border-cream rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-[rgba(0,0,0,0.06)_0px_4px_20px] hover:border-border-warm group cursor-pointer block no-underline">
                <div className="font-serif text-[16px] font-medium leading-[1.30] text-near-black group-hover:text-terracotta transition-colors duration-200">
                  {c.title}
                </div>
                <p className="text-[14px] leading-[1.55] text-olive-gray flex-1">
                  {c.hook}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {c.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-medium tracking-[0.4px] text-charcoal-warm bg-warm-sand rounded px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}

      </section>
    </div>
  )
}
