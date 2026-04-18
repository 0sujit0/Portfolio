import { ProjectLayout } from '../../components/ProjectLayout'

export function Badcode() {
  return (
    <ProjectLayout nextProject={{ title: 'Nykaa Fashion', path: '/projects/nykaa-fashion-conversion' }}>
      <div className="max-w-[800px] mx-auto px-6 md:px-8 pb-10 w-full">
         <div className="text-[12px] font-medium tracking-[1.4px] uppercase text-terracotta mb-4">Shipped Product</div>
         <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] text-near-black mb-6">
            Badcode — Browser-Based SQL Tutor
         </h1>
         <p className="text-[19px] leading-[1.60] text-charcoal-warm mb-10">
            A fully functioning, client-side SQL learning environment powered by WebAssembly and GPT-4. Built to solve the cold-start problem for aspiring analysts.
         </p>
      </div>

      <div className="w-full bg-ivory border-y border-border-cream py-16 mb-16 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto w-full prose text-[17px] text-olive-gray leading-[1.70]">
           <div className="aspect-video bg-warm-sand flex items-center justify-center border border-border-cream rounded-xl mb-12 shadow-sm font-serif text-stone-gray italic">
               Screenshot / Architecture Diagram Placeholder
           </div>

           <h2 className="font-serif text-[28px] font-medium text-near-black mb-4">The Problem</h2>
           <p className="mb-6">Setting up a local SQL environment (Postgres, DBeaver, sample data) is a massive friction point for beginners. Existing browser-based options are either too simplistic for real querying or require expensive backend container orchestration.</p>

           <h2 className="font-serif text-[28px] font-medium text-near-black mb-4">The Architecture</h2>
           <ul className="list-disc pl-5 mb-8 flex flex-col gap-2">
              <li><strong>Execution:</strong> Browser-based WASM (sql.js) ensures zero backend latency and infinitely scalable compute. No server-side resources per user.</li>
              <li><strong>Auth & Data:</strong> Supabase handles user sessions and progress synchronisation.</li>
              <li><strong>AI Guidance:</strong> GPT-4 API dynamically analyses query ASTs (Abstract Syntax Trees) against schema definitions to provide hyper-specific hints without giving away the answer.</li>
           </ul>

           <h2 className="font-serif text-[28px] font-medium text-near-black mb-4">Outcomes</h2>
           <p>Deployed live. Users can run standard ANSI SQL against populated schemas with instant execution feedback. The AI integration cut support queries for 'Why isn't this working?' to near zero.</p>
        </div>
      </div>
    </ProjectLayout>
  )
}
