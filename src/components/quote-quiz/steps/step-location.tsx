import { TextField } from "@/components/ui/text-field";
import { SelectField } from "@/components/ui/select-field";
import { Button } from "@/components/ui/button";
import { US_STATES, stateFromZip } from "@/lib/us-states";
import type { StepProps } from "@/components/quote-quiz/types";

export function StepLocation({ value, update, onNext }: StepProps) {
  const valid = Boolean(value.zip && /^\d{5}$/.test(value.zip) && value.state);

  function onZipChange(raw: string) {
    const zip = raw.replace(/\D/g, "").slice(0, 5);
    const patch: { zip: string; state?: string } = { zip };
    if (zip.length === 5) {
      const guessed = stateFromZip(zip);
      if (guessed) patch.state = guessed;
    }
    update(patch);
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-harbor sm:text-3xl">
        Where do you live?
      </h1>
      <p className="mt-2 text-base text-charcoal/70">
        Coverage and pricing vary by state.
      </p>

      <div className="mt-8 space-y-5">
        <TextField
          label="ZIP code"
          inputMode="numeric"
          maxLength={5}
          placeholder="90210"
          value={value.zip ?? ""}
          onChange={(e) => onZipChange(e.target.value)}
        />
        <SelectField
          label="State"
          value={value.state ?? ""}
          onChange={(e) => update({ state: e.target.value })}
        >
          <option value="" disabled>
            Select your state
          </option>
          {US_STATES.map((s) => (
            <option key={s.code} value={s.code}>
              {s.name}
            </option>
          ))}
        </SelectField>
      </div>

      <Button as="button" type="button" size="lg" className="mt-8 w-full" disabled={!valid} onClick={onNext}>
        Continue
      </Button>
    </div>
  );
}
