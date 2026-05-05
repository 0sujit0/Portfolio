/* Shared design primitives for all case study pages.
   Page-specific components (Pill variants, KRCard, etc.) stay local to each page file. */

export function Eyebrow({ children, dark }) {
  return (
    <div className={`text-[10px] font-medium tracking-[1.2px] uppercase mb-5 ${dark ? 'text-warm-silver' : 'text-stone-gray'}`}>
      {children}
    </div>
  )
}

export function SectionLight({ children, className = '', id }) {
  return (
    <section id={id} className={`bg-parchment py-24 px-6 md:px-16 ${className}`}>
      <div className="max-w-[960px] mx-auto">{children}</div>
    </section>
  )
}

export function SectionDark({ children, className = '', id }) {
  return (
    <section id={id} className={`bg-near-black py-24 px-6 md:px-16 ${className}`}>
      <div className="max-w-[960px] mx-auto">{children}</div>
    </section>
  )
}

export function H2Light({ children }) {
  return <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] font-medium leading-[1.20] text-near-black mb-6">{children}</h2>
}

export function H2Dark({ children }) {
  return <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] font-medium leading-[1.20] text-ivory mb-6">{children}</h2>
}

export function H3({ children, dark }) {
  return (
    <h3 className={`font-serif text-[clamp(22px,2.8vw,32px)] font-medium leading-[1.15] mb-4 ${dark ? 'text-ivory' : 'text-near-black'}`}>
      {children}
    </h3>
  )
}

export function H3Light({ children }) {
  return <H3>{children}</H3>
}

export function H3Dark({ children }) {
  return <H3 dark>{children}</H3>
}

export function BodyLight({ children, className = '' }) {
  return <p className={`text-[17px] leading-[1.60] text-olive-gray ${className}`}>{children}</p>
}

export function BodyDark({ children, className = '' }) {
  return <p className={`text-[17px] leading-[1.60] text-warm-silver ${className}`}>{children}</p>
}

export function PullQuote({ children, dark, attribution }) {
  return (
    <blockquote className={`border-l-4 border-terracotta rounded-r-2xl p-8 my-8 ${dark ? 'bg-dark-surface' : 'bg-ivory'}`}>
      <p className={`font-serif text-[25px] font-medium leading-[1.30] italic ${dark ? 'text-ivory' : 'text-near-black'}`}>{children}</p>
      {attribution && (
        <div className={`text-[14px] mt-3 ${dark ? 'text-warm-silver' : 'text-stone-gray'}`}>{attribution}</div>
      )}
    </blockquote>
  )
}

export function StatCard({ value, label, dark }) {
  return (
    <div className={`rounded-2xl border p-6 ${dark ? 'bg-dark-surface border-dark-surface' : 'bg-ivory border-border-cream'}`}>
      <div className={`font-serif text-[clamp(36px,4vw,52px)] font-medium leading-[1.10] mb-2 ${dark ? 'text-coral' : 'text-near-black'}`}>{value}</div>
      <div className={`text-[14px] leading-[1.43] ${dark ? 'text-warm-silver' : 'text-olive-gray'}`}>{label}</div>
    </div>
  )
}

export function IvoryCard({ children, className = '' }) {
  return (
    <div className={`bg-ivory border border-border-cream rounded-2xl p-7 ${className}`}>{children}</div>
  )
}

export function DarkCard({ children, className = '' }) {
  return (
    <div className={`bg-dark-surface rounded-2xl p-7 ${className}`}>{children}</div>
  )
}

export function LightCallout({ label, children }) {
  return (
    <div className="bg-ivory rounded-r-2xl border-l-4 border-terracotta p-7 my-8">
      {label && <div className="text-[12px] font-medium tracking-[0.12em] uppercase text-terracotta mb-3">{label}</div>}
      <p className="font-serif text-[20px] font-medium leading-[1.60] text-near-black">{children}</p>
    </div>
  )
}

export function DarkCallout({ label, children, labelColor = 'text-coral' }) {
  return (
    <div className="bg-dark-surface rounded-2xl p-8 border-l-4 border-coral my-8">
      {label && <div className={`text-[12px] font-medium tracking-[0.12em] uppercase mb-3 ${labelColor}`}>{label}</div>}
      <p className="font-serif text-[20px] font-medium leading-[1.60] text-ivory italic">{children}</p>
    </div>
  )
}

export function TableWrapper({ children, className = '' }) {
  return (
    <div className={`overflow-x-auto rounded-2xl border border-border-cream bg-ivory ${className}`}>
      <table className="w-full text-[14px] text-near-black border-collapse">{children}</table>
    </div>
  )
}

export function Th({ children, dark }) {
  return (
    <th className={`text-left text-[11px] font-medium tracking-[0.12em] uppercase px-5 py-4 border-b ${dark ? 'text-stone-gray border-near-black bg-dark-surface' : 'text-stone-gray border-border-cream bg-ivory'}`}>
      {children}
    </th>
  )
}

export function Td({ children, highlight, dark, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b align-top text-[14px] leading-[1.55]
      ${dark ? 'border-near-black text-warm-silver' : 'border-border-cream'}
      ${highlight ? (dark ? 'bg-near-black' : 'bg-warm-sand') : ''}
      ${className}`}>
      {children}
    </td>
  )
}

export function DarkTableWrapper({ children, className = '' }) {
  return (
    <div className={`overflow-x-auto rounded-2xl border border-dark-surface bg-dark-surface ${className}`}>
      <table className="w-full text-[14px] border-collapse">{children}</table>
    </div>
  )
}

export function DarkTh({ children }) {
  return (
    <th className="text-left text-[11px] font-medium tracking-[0.12em] uppercase text-warm-silver px-5 py-4 border-b border-dark-surface">
      {children}
    </th>
  )
}

export function DarkTd({ children, className = '' }) {
  return (
    <td className={`px-5 py-4 border-b border-dark-surface text-[14px] leading-[1.55] text-warm-silver align-top ${className}`}>
      {children}
    </td>
  )
}
