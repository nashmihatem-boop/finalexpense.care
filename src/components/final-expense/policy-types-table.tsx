const POLICY_TYPES = [
  { feature: "Medical exam", simplified: "None", guaranteed: "None" },
  {
    feature: "Health questions",
    simplified: "A short yes/no questionnaire",
    guaranteed: "None — health isn't asked about",
  },
  {
    feature: "Typical monthly cost",
    simplified: "Lower, for the same coverage amount",
    guaranteed: "Higher, for the same coverage amount",
  },
  {
    feature: "Coverage available",
    simplified: "Generally higher maximums",
    guaranteed: "Generally lower maximums",
  },
  {
    feature: "When coverage starts",
    simplified: "Full coverage from day one, for most applicants",
    guaranteed: "Full benefit after a 2-year waiting period",
  },
  {
    feature: "Approval time",
    simplified: "Often minutes to a few days",
    guaranteed: "Instant — nobody is declined",
  },
];

export function PolicyTypesTable() {
  return (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-mist">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-mist bg-canvas-alt">
            <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Feature</th>
            <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Simplified issue</th>
            <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">Guaranteed issue</th>
          </tr>
        </thead>
        <tbody>
          {POLICY_TYPES.map((row, i) => (
            <tr key={row.feature} className={i < POLICY_TYPES.length - 1 ? "border-b border-mist" : ""}>
              <td className="px-5 py-4 text-sm font-semibold text-charcoal/70 align-top">{row.feature}</td>
              <td className="px-5 py-4 text-sm leading-relaxed text-charcoal align-top">{row.simplified}</td>
              <td className="px-5 py-4 text-sm leading-relaxed text-charcoal/70 align-top">{row.guaranteed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const COST_FACTORS = [
  { label: "Age", body: "The single biggest factor — locking in a rate earlier generally means a lower premium for life." },
  { label: "Gender", body: "Statistically-based pricing differences between carriers, similar to other life insurance." },
  { label: "Tobacco use", body: "Tobacco users typically pay more; some carriers offer better rates the longer you've been tobacco-free." },
  { label: "Health history", body: "Relevant only for simplified-issue policies — the specific questions vary by carrier." },
  { label: "Coverage amount", body: "A $10,000 policy costs less than a $30,000 policy, all else being equal." },
  { label: "State of residence", body: "Insurance is regulated at the state level, so the same policy can price differently by state." },
];

export function CostFactorsGrid() {
  return (
    <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {COST_FACTORS.map((f) => (
        <div key={f.label}>
          <p className="font-display text-base font-extrabold text-harbor">{f.label}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75">{f.body}</p>
        </div>
      ))}
    </div>
  );
}
