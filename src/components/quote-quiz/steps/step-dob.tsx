import { SelectField } from "@/components/ui/select-field";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { isValidDate } from "@/lib/lead-schema";
import type { StepProps } from "@/components/quote-quiz/types";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const currentYear = new Date().getFullYear();

export function StepDob({ value, update, onNext }: StepProps) {
  const { birthMonth, birthDay, birthYear } = value;
  const valid =
    Boolean(birthMonth) &&
    Boolean(birthDay) &&
    Boolean(birthYear) &&
    String(birthYear).length === 4 &&
    isValidDate(birthMonth!, birthDay!, birthYear!) &&
    birthYear! <= currentYear - 15 &&
    birthYear! >= currentYear - 120;

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-harbor sm:text-3xl">
        When were you born?
      </h1>
      <p className="mt-2 text-base text-charcoal/70">
        This is the main factor in what you qualify for.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <SelectField
            label="Month"
            autoComplete="off"
            value={birthMonth ?? ""}
            onChange={(e) => update({ birthMonth: e.target.value ? Number(e.target.value) : undefined })}
          >
            <option value="" disabled>
              Select
            </option>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>
                {m}
              </option>
            ))}
          </SelectField>
        </div>
        <div>
          <SelectField
            label="Day"
            autoComplete="off"
            value={birthDay ?? ""}
            onChange={(e) => update({ birthDay: e.target.value ? Number(e.target.value) : undefined })}
          >
            <option value="" disabled>
              Select
            </option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </SelectField>
        </div>
        <div>
          <TextField
            label="Year"
            inputMode="numeric"
            autoComplete="off"
            maxLength={4}
            placeholder="1955"
            value={birthYear ?? ""}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
              update({ birthYear: digits ? Number(digits) : undefined });
            }}
          />
        </div>
      </div>

      <Button as="button" type="button" size="lg" className="mt-8 w-full" disabled={!valid} onClick={onNext}>
        Continue
      </Button>
    </div>
  );
}
