import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import type { StepProps } from "@/components/quote-quiz/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function StepEmail({ value, update, onNext }: StepProps) {
  const valid = Boolean(value.email && EMAIL_RE.test(value.email));

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-harbor sm:text-3xl">
        Where should we send your options?
      </h1>
      <p className="mt-2 text-base text-charcoal/70">
        We&apos;ll email a summary along with your agent&apos;s contact details.
      </p>

      <div className="mt-8">
        <TextField
          label="Email address"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={value.email ?? ""}
          onChange={(e) => update({ email: e.target.value })}
        />
      </div>

      <Button as="button" type="button" size="lg" className="mt-8 w-full" disabled={!valid} onClick={onNext}>
        Continue
      </Button>
    </div>
  );
}
