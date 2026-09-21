type HorizonDividerProps = {
  /** Tailwind fill class for the shape — should match the section coming after the divider. */
  fillClassName?: string;
  className?: string;
};

/** A gentle rise between two sections — the same horizon language as the logo mark, stretched wide. */
export function HorizonDivider({ fillClassName = "fill-canvas", className = "" }: HorizonDividerProps) {
  return (
    <div aria-hidden="true" className={`relative h-10 w-full overflow-hidden sm:h-16 ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path d="M0,120 L0,68 Q720,-36 1440,68 L1440,120 Z" className={fillClassName} />
      </svg>
    </div>
  );
}
