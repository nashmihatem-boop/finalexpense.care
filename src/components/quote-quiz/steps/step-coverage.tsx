import { RadioCard } from "@/components/ui/radio-card";
import { COVERAGE_TIERS } from "@/lib/lead-schema";
import type { StepProps } from "@/components/quote-quiz/types";

export function StepCoverage({ value, update, onNext }: StepProps) {
  function choose(coverageAmount: string) {
    update({ coverageAmount });
    setTimeout(onNext, 150);
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-harbor sm:text-3xl">
        How much coverage are you looking for?
      </h1>
      <p className="mt-2 text-base text-charcoal/70">
        A rough number is fine — your agent can help you fine-tune it.
      </p>

      <div role="radiogroup" aria-label="Coverage amount" className="mt-8 space-y-3">
        {COVERAGE_TIERS.map((tier) => (
          <RadioCard
            key={tier.value}
            label={tier.label}
            selected={value.coverageAmount === tier.value}
            onSelect={() => choose(tier.value)}
          />
        ))}
      </div>
    </div>
  );
}
