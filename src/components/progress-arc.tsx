type ProgressArcProps = {
  step: number;
  total: number;
};

/** The quiz's step indicator, drawn as a horizon arc filling in — same signature as the logo. */
export function ProgressArc({ step, total }: ProgressArcProps) {
  const fraction = Math.min(Math.max(step / total, 0), 1) * 100;

  return (
    <svg viewBox="0 0 200 34" className="h-7 w-36 sm:w-44" aria-hidden="true">
      <path
        d="M4 30 Q100 -6 196 30"
        fill="none"
        stroke="var(--color-mist)"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={100}
      />
      <path
        d="M4 30 Q100 -6 196 30"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={`${fraction} 100`}
        className="transition-[stroke-dasharray] duration-500 ease-out"
      />
    </svg>
  );
}
