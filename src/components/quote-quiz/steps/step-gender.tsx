import { RadioCard } from "@/components/ui/radio-card";
import type { StepProps } from "@/components/quote-quiz/types";

export function StepGender({ value, update, onNext }: StepProps) {
  function choose(gender: "male" | "female") {
    update({ gender });
    // Auto-advance — a single tap answers this step, no need to also hit "Next".
    setTimeout(onNext, 150);
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-harbor sm:text-3xl">
        Which best describes you?
      </h1>
      <p className="mt-2 text-base text-charcoal/70">
        Carriers price coverage differently by sex.
      </p>

      <div role="radiogroup" aria-label="Gender" className="mt-8 space-y-3">
        <RadioCard label="Female" selected={value.gender === "female"} onSelect={() => choose("female")} autoFocus />
        <RadioCard label="Male" selected={value.gender === "male"} onSelect={() => choose("male")} />
      </div>
    </div>
  );
}
