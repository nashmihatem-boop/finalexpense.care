import Link from "next/link";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { consentDisclosureText } from "@/lib/consent-copy";
import type { StepProps } from "@/components/quote-quiz/types";

function formatPhone(digits: string): string {
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

type Props = StepProps & { submitting: boolean; submitError: string | null };

export function StepPhoneConsent({ value, update, onNext, submitting, submitError }: Props) {
  const phoneDigits = (value.phone ?? "").replace(/\D/g, "");
  const valid = phoneDigits.length === 10 && value.consent === true;

  return (
    <div>
      <p className="text-sm font-semibold text-brass-dark">Last step</p>
      <h1 className="mt-1 font-display text-2xl font-extrabold text-harbor sm:text-3xl">
        Where can an agent reach you?
      </h1>

      <div className="mt-8">
        <TextField
          label="Phone number"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="555-123-4567"
          value={formatPhone(phoneDigits)}
          onChange={(e) => update({ phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
        />
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-charcoal/75">
        <input
          type="checkbox"
          checked={value.consent === true}
          onChange={(e) => update({ consent: e.target.checked })}
          className="mt-1 h-5 w-5 shrink-0 accent-harbor"
        />
        <span>
          {consentDisclosureText()}{" "}
          <Link href="/tcpa-consent" className="font-semibold text-harbor underline">
            Read full details
          </Link>
          .
        </span>
      </label>

      {submitError && (
        <p role="alert" className="mt-4 text-sm font-medium text-clay">
          {submitError}
        </p>
      )}

      <Button
        as="button"
        type="button"
        size="lg"
        className="mt-6 w-full"
        disabled={!valid || submitting}
        onClick={onNext}
      >
        {submitting ? "Submitting…" : "Get my free quote"}
      </Button>
    </div>
  );
}
