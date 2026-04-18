import { useEffect } from 'react'
import { Nav } from './Nav'
import { Contact } from './Contact'
import { Footer } from './Footer'

export function ProjectLayout({ children, nextProject }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen pt-[60px]">
      <Nav />
      
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-10 w-full">
            <a href="/#projects" className="inline-flex items-center gap-1.5 text-[15px] font-medium text-olive-gray no-underline border border-border-cream rounded-lg px-3 py-1.5 transition-colors duration-200 hover:bg-ivory hover:border-border-warm hover:text-near-black">
              <span>←</span> Back to portfolio
            </a>
          </div>
        </div>

        <article className="w-full">
          {children}
        </article>

        {nextProject && (
          <div className="w-full bg-parchment">
            <div className="max-w-[800px] mx-auto px-6 md:px-8 py-20 w-full border-t border-border-cream mt-10">
              <div className="text-[12px] font-medium tracking-[1.2px] uppercase text-stone-gray mb-3">
                Next Project
              </div>
              <a href={nextProject.path} className="group flex flex-col no-underline inline-block items-start">
                <div className="font-serif text-[28px] font-medium text-near-black mb-2 group-hover:text-terracotta transition-colors duration-200">
                  {nextProject.title}
                </div>
                <div className="flex items-center gap-1 text-[15px] font-medium text-terracotta">
                  Read case study <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </main>

      <Contact />
      <Footer />
    </div>
  )
}
