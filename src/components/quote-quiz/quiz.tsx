"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { QuizShell } from "@/components/quote-quiz/quiz-shell";
import { StepGender } from "@/components/quote-quiz/steps/step-gender";
import { StepDob } from "@/components/quote-quiz/steps/step-dob";
import { StepCoverage } from "@/components/quote-quiz/steps/step-coverage";
import { StepLocation } from "@/components/quote-quiz/steps/step-location";
import { StepEmail } from "@/components/quote-quiz/steps/step-email";
import { StepName } from "@/components/quote-quiz/steps/step-name";
import { StepPhoneConsent } from "@/components/quote-quiz/steps/step-phone-consent";
import type { QuizState } from "@/components/quote-quiz/types";
import { submitLead } from "@/app/actions";
import { stateFromZip } from "@/lib/us-states";

const TOTAL_STEPS = 7;

// Pre-fills from the hero's quick-start card (zip/name) or a coverage-by-state page (state)
// so a visitor who already gave us this info never has to enter it again.
function initialAnswers(params: URLSearchParams): QuizState {
  const zip = params.get("zip") ?? undefined;
  const firstName = params.get("firstName") ?? undefined;
  const lastName = params.get("lastName") ?? undefined;
  const stateParam = params.get("state")?.toUpperCase();
  const state = (zip && /^\d{5}$/.test(zip) ? stateFromZip(zip) : undefined) ?? stateParam;
  return { zip, firstName, lastName, state };
}

export function Quiz() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizState>(() => initialAnswers(searchParams));
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update(patch: Partial<QuizState>) {
    setAnswers((prev) => ({ ...prev, ...patch }));
  }

  function goNext() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setSubmitError(null);
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    setSubmitError(null);
    setSubmitting(true);
    try {
      const result = await submitLead({
        gender: answers.gender!,
        birthMonth: answers.birthMonth!,
        birthDay: answers.birthDay!,
        birthYear: answers.birthYear!,
        coverageAmount: answers.coverageAmount!,
        zip: answers.zip!,
        state: answers.state!,
        email: answers.email!,
        firstName: answers.firstName!,
        lastName: answers.lastName!,
        phone: answers.phone!,
        consent: true,
        landingPageUrl: window.location.href,
        referrer: document.referrer || null,
      });

      if (result.status === "success") {
        router.push("/thank-you");
        return;
      }
      if (result.status === "error") {
        setSubmitError(result.message);
      }
    } catch {
      setSubmitError("Something went wrong on our end. Please call us instead.");
    } finally {
      setSubmitting(false);
    }
  }

  const stepProps = { value: answers, update, onBack: step > 1 ? goBack : undefined };

  return (
    <QuizShell step={step} total={TOTAL_STEPS} onBack={stepProps.onBack}>
      {step === 1 && <StepGender {...stepProps} onNext={goNext} />}
      {step === 2 && <StepDob {...stepProps} onNext={goNext} />}
      {step === 3 && <StepCoverage {...stepProps} onNext={goNext} />}
      {step === 4 && <StepLocation {...stepProps} onNext={goNext} />}
      {step === 5 && <StepEmail {...stepProps} onNext={goNext} />}
      {step === 6 && <StepName {...stepProps} onNext={goNext} />}
      {step === 7 && (
        <StepPhoneConsent
          {...stepProps}
          onNext={handleSubmit}
          submitting={submitting}
          submitError={submitError}
        />
      )}
    </QuizShell>
  );
}
