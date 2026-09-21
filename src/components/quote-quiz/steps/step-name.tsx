import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import type { StepProps } from "@/components/quote-quiz/types";

export function StepName({ value, update, onNext }: StepProps) {
  const valid = Boolean(value.firstName?.trim() && value.lastName?.trim());

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-harbor sm:text-3xl">
        Who are we getting this quote for?
      </h1>

      <div className="mt-8 space-y-5">
        <TextField
          label="First name"
          autoComplete="given-name"
          value={value.firstName ?? ""}
          onChange={(e) => update({ firstName: e.target.value })}
        />
        <TextField
          label="Last name"
          autoComplete="family-name"
          value={value.lastName ?? ""}
          onChange={(e) => update({ lastName: e.target.value })}
        />
      </div>

      <Button as="button" type="button" size="lg" className="mt-8 w-full" disabled={!valid} onClick={onNext}>
        Continue
      </Button>
    </div>
  );
}
