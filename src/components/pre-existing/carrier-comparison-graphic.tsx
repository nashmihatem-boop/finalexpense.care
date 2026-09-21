function IconCheckShield(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconXCircle(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconClipboard(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <rect x="6" y="4" width="12" height="17" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <rect x="9" y="2.5" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendar(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 9.5h16M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconPillBottle(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <rect x="7" y="6" width="10" height="15" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7 11h10M9 6V3.5h6V6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

const OUTCOMES = [
  { label: "Carrier A", verdict: "LEVEL", body: "Full coverage, day one.", tone: "sage" as const, Icon: IconCheckShield },
  { label: "Carrier B", verdict: "GRADED", body: "A waiting window, then full coverage.", tone: "brass" as const, Icon: IconClock },
  { label: "Carrier C", verdict: "DECLINE", body: "Offers guaranteed acceptance instead.", tone: "muted" as const, Icon: IconXCircle },
];

const REASONS = [
  { label: "Different health questions", Icon: IconClipboard },
  { label: "Different look-back periods", Icon: IconCalendar },
  { label: "Different medication rules", Icon: IconPillBottle },
];

const toneClasses = {
  sage: "bg-sage/10 text-sage-dark border-sage/25",
  brass: "bg-brass/10 text-brass-dark border-brass/30",
  muted: "bg-charcoal/5 text-charcoal/60 border-charcoal/15",
};

export function CarrierComparisonGraphic() {
  return (
    <div className="mt-8 rounded-2xl border border-mist bg-canvas-raised p-6 sm:p-10">
      <p className="text-center font-display text-2xl font-extrabold text-harbor sm:text-3xl">
        Same condition, different answers.
      </p>
      <p className="mt-2 text-center text-sm text-charcoal/60">
        One applicant. Same health history. Three carriers.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {OUTCOMES.map((o) => (
          <div key={o.label} className={`rounded-xl border p-5 text-center ${toneClasses[o.tone]}`}>
            <o.Icon className="mx-auto h-8 w-8" />
            <p className="mt-3 text-xs font-bold tracking-wide uppercase text-charcoal/50">{o.label}</p>
            <p className="mt-1 font-display text-lg font-extrabold">{o.verdict}</p>
            <p className="mt-1.5 text-sm text-charcoal/70">{o.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-canvas-alt p-6">
        <p className="text-center text-sm font-bold tracking-wide text-harbor uppercase">Why the answers differ</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas-raised text-harbor shadow-[0_1px_2px_rgba(20,43,86,0.08)]">
                <r.Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-charcoal/80">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center font-display text-base font-extrabold text-harbor">
        This is exactly why comparing carriers — not applying to just one — matters.
      </p>
    </div>
  );
}
