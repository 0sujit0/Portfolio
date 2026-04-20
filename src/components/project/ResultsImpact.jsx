function PhaseTable({ rows = [], columns = [] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-cream mb-10">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-warm-sand">
            {columns.map((col, i) => (
              <th
                key={i}
                className="font-sans text-[10px] font-medium uppercase tracking-[0.8px] text-stone-gray px-4 py-3 whitespace-nowrap"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="bg-ivory border-t border-border-cream">
              <td className="font-sans text-[12px] font-medium text-near-black px-4 py-3">
                {row.metric}
              </td>
              <td className="font-sans text-[12px] text-stone-gray px-4 py-3">
                {row.baseline}
              </td>
              {row.intermediate !== undefined && (
                <td className="font-sans text-[12px] text-olive-gray px-4 py-3">
                  {row.intermediate}
                </td>
              )}
              <td className="font-sans text-[12px] font-medium text-terracotta px-4 py-3">
                {row.target}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function QualitativeCards({ outcomes = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      {outcomes.map((outcome, i) => (
        <div key={i} className="bg-near-black rounded-xl p-5">
          <p className="font-serif text-[14px] font-medium text-coral leading-[1.30] mb-2">
            {outcome.highlight}
          </p>
          <p className="font-sans text-[12px] text-warm-silver leading-[1.60]">
            {outcome.body}
          </p>
        </div>
      ))}
    </div>
  )
}

export function ResultsImpact({ variant = 'phase-table', tableData, qualitativeData, ctas = [] }) {
  return (
    <section className="bg-ivory">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">

        <div className="text-[10px] font-sans font-medium uppercase tracking-[0.8px] text-terracotta mb-10">
          Results & Impact
        </div>

        {/* Phase table */}
        {variant === 'phase-table' && tableData && (
          <PhaseTable rows={tableData.rows} columns={tableData.columns} />
        )}

        {/* Qualitative */}
        {variant === 'qualitative' && qualitativeData && (
          <QualitativeCards outcomes={qualitativeData} />
        )}

        {/* CTA strip */}
        {ctas.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-6 border-t border-border-cream">
            {ctas.map((cta, i) =>
              i === 0 ? (
                <a
                  key={i}
                  href={cta.url || '#'}
                  className="inline-block px-4 py-2 font-sans text-[15px] font-medium text-ivory bg-terracotta rounded-xl no-underline shadow-[0px_0px_0px_1px_#c96442] transition-opacity duration-150 hover:opacity-90"
                >
                  {cta.label}
                </a>
              ) : (
                <a
                  key={i}
                  href={cta.url || '#'}
                  className="inline-block px-[14px] py-2 font-sans text-[14px] font-medium text-charcoal-warm bg-warm-sand rounded-lg no-underline shadow-[0px_0px_0px_1px_#d1cfc5] transition-opacity duration-150 hover:opacity-80"
                >
                  {cta.label}
                </a>
              )
            )}
          </div>
        )}

      </div>
    </section>
  )
}
