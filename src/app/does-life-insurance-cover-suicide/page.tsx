import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Does Life Insurance Cover Suicide?",
  description:
    "A factual, respectful explanation of how life insurance policies handle death by suicide, including the standard exclusion period.",
  openGraph: { title: "Does Life Insurance Cover Suicide?", description: "A factual, respectful explanation of how life insurance policies handle death by suicide, including the standard exclusion period." },

  twitter: { title: "Does Life Insurance Cover Suicide?", description: "A factual, respectful explanation of how life insurance policies handle death by suicide, including the standard exclusion period." },
};

export default function DoesLifeInsuranceCoverSuicidePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Does life insurance cover death by suicide?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This is a sensitive question, and a common one. Here&apos;s a straightforward,
          factual answer — along with a resource if you or someone you know needs support right
          now.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">If you need to talk to someone right now</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The 988 Suicide &amp; Crisis Lifeline is free, confidential, and available 24/7. You
            can{" "}
            <a href="tel:988" className="font-semibold text-harbor-mid hover:underline">
              call or text 988
            </a>{" "}
            any time you or someone you care about needs support.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The short answer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most life insurance policies, including final expense policies, do cover death by
          suicide — just not unconditionally from the moment the policy starts. Nearly every
          policy includes a suicide exclusion period, commonly the first two years the policy
          is in force. A death by suicide that occurs after that period has passed is generally
          treated like any other covered cause of death, with the full death benefit paid to
          the beneficiary.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why the exclusion period exists
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This isn&apos;t a judgment about any individual applicant — it&apos;s a standard,
          industry-wide safeguard built into how these policies are underwritten. Many final
          expense policies are simplified issue, meaning they&apos;re approved quickly based on
          your answers to a short health questionnaire rather than a full medical exam. The
          suicide exclusion period exists alongside the broader contestability period — the
          window during which an insurer can review a claim closely — as a standard protection
          for that honor-system approach. It applies the same way to every applicant,
          automatically, as a standard printed policy term rather than a decision made about any
          one person.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens if it occurs during the exclusion period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If a death by suicide occurs within that initial window, most policies don&apos;t pay
          the full death benefit. Instead, they typically return the premiums that were paid
          into the policy, sometimes with interest — similar in spirit to how other early-period
          limitations on these policies work. Once the exclusion period has passed, this
          limitation no longer applies, and the policy covers suicide the same way it covers any
          other cause of death.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A standard term, not a special case
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s worth repeating: this exclusion period is a standard, printed term in nearly
          every life insurance contract, simplified issue or otherwise. It&apos;s not something
          a carrier decides case by case, and it&apos;s not unique to any one company or policy
          type. Once it passes, a suicide exclusion has no more bearing on a claim than any other
          early-period policy term that has already run its course.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
