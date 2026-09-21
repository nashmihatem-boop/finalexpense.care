const ROWS: { feature: string; finalExpense: string; term: string }[] = [
  {
    feature: "Coverage length",
    finalExpense: "Lifetime — stays in force as long as premiums are paid.",
    term: "A fixed window (10, 20, 30 years), then it ends.",
  },
  {
    feature: "Monthly cost",
    finalExpense: "Lower face amount keeps premiums small and fixed for life.",
    term: "Often cheaper per dollar of coverage, but can rise sharply at renewal.",
  },
  {
    feature: "Medical exam",
    finalExpense: "Usually none — a handful of health questions instead.",
    term: "Often required, with pricing based on the results.",
  },
  {
    feature: "Cash value",
    finalExpense: "Builds some cash value over time, since it's whole life coverage.",
    term: "None — it's pure, temporary protection.",
  },
  {
    feature: "Best for",
    finalExpense: "Covering funeral, burial, and other end-of-life costs.",
    term: "Replacing income or covering a mortgage while dependents rely on you.",
  },
];

export function Comparison() {
  return (
    <section id="compare" className="scroll-mt-20 bg-canvas">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            How it compares
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            Final expense vs. a term policy.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            Both are life insurance — they&apos;re just built for different jobs. Here&apos;s
            the honest difference.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-mist bg-canvas-raised">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist">
                <th className="px-6 py-4 text-sm font-semibold text-charcoal/60">Feature</th>
                <th className="px-6 py-4 font-display text-base font-extrabold text-harbor">
                  Final expense
                </th>
                <th className="px-6 py-4 font-display text-base font-extrabold text-charcoal/60">
                  Term life
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i < ROWS.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-6 py-5 text-sm font-semibold text-charcoal/70 align-top">
                    {row.feature}
                  </td>
                  <td className="px-6 py-5 text-sm leading-relaxed text-charcoal align-top">
                    {row.finalExpense}
                  </td>
                  <td className="px-6 py-5 text-sm leading-relaxed text-charcoal/70 align-top">
                    {row.term}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
