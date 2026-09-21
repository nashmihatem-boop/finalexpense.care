import type { ReactNode } from "react";
import { ProgressArc } from "@/components/progress-arc";

type QuizShellProps = {
  step: number;
  total: number;
  onBack?: () => void;
  children: ReactNode;
};

export function QuizShell({ step, total, onBack, children }: QuizShellProps) {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl flex-col px-5 py-10 sm:py-16">
      <div className="flex items-center justify-between">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-harbor/70 hover:text-harbor"
          >
            <span aria-hidden="true">&larr;</span> Back
          </button>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-2.5">
          <ProgressArc step={step} total={total} />
          <span className="text-sm font-medium text-charcoal/60">
            {step} of {total}
          </span>
        </div>
      </div>

      <div key={step} className="mt-10 flex-1 animate-fade-up sm:mt-14">
        {children}
      </div>
    </div>
  );
}
