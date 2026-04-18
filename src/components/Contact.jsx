import { Download } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-near-black text-center py-24 px-8 w-full block">
      <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.20] text-ivory mb-5 max-w-[640px] mx-auto">
        Let's talk.
      </h2>
      
      <p className="text-lg text-warm-silver leading-[1.60] mb-12 max-w-[520px] mx-auto">
        If something here fits what you're hiring for, I'd like to hear from you.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-9">
        <a 
          href="mailto:0sujit0@gmail.com?subject=Saw%20your%20portfolio"
          className="font-sans text-[15px] font-medium text-ivory bg-terracotta hover:opacity-90 px-6 py-3.5 rounded-xl transition-opacity flex items-center gap-2"
        >
          Email me <span>→</span>
        </a>
        <span className="text-[15px] text-warm-silver font-sans select-all">
          0sujit0@gmail.com
        </span>
      </div>
      
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <a 
          href="https://linkedin.com/in/sujit-kumar-sahu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-dark flex items-center gap-1"
        >
          LinkedIn <span className="text-[12px]">↗</span>
        </a>
        <a 
          href="/Resume.pdf" 
          download="Sujit-Kumar-Sahu-Resume.pdf"
          className="link-dark flex items-center gap-1.5"
        >
          Download Resume <Download size={14} className="mt-0.5" />
        </a>
      </div>
    </section>
  )
}
