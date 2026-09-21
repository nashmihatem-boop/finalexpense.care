type HorizonMarkProps = {
  className?: string;
};

/** The site's signature mark: a sun cresting a horizon line — a new day, taken care of. */
export function HorizonMark({ className }: HorizonMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 32 Q24 6 44 32"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        className="text-harbor"
      />
      <line
        x1="4"
        y1="34.5"
        x2="44"
        y2="34.5"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        className="text-mist"
      />
      <circle cx="24" cy="18.7" r="3.4" fill="currentColor" className="text-brass" />
    </svg>
  );
}
