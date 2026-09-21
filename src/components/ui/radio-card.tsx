import { cn } from "@/lib/cn";

type RadioCardProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
  autoFocus?: boolean;
};

/** A large, tap-friendly single-choice option — the quiz never asks anyone to hit a tiny target. */
export function RadioCard({ label, selected, onSelect, autoFocus }: RadioCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      autoFocus={autoFocus}
      className={cn(
        "w-full rounded-2xl border-2 px-6 py-5 text-left text-lg font-medium transition-colors duration-150",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        selected
          ? "border-harbor bg-harbor text-canvas"
          : "border-mist bg-canvas-raised text-charcoal hover:border-harbor/40"
      )}
    >
      {label}
    </button>
  );
}
