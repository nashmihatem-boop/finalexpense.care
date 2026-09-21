import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance Glossary",
  description:
    "Plain-language definitions for the life insurance terms used across this site, from beneficiary and death benefit to lapse and look-back period.",
};

const TERMS: { term: string; definition: ReactNode }[] = [
  {
    term: "Beneficiary",
    definition: (
      <>
        The person, people, or entity you name to receive your policy&apos;s death benefit.
        Most policies let you name more than one, and you can generally change your beneficiary
        at any time while the policy is active.
      </>
    ),
  },
  {
    term: "Death benefit",
    definition: (
      <>
        The amount of money paid to your beneficiary after you pass away and the claim is
        approved. This is the core purpose of a life insurance policy.
      </>
    ),
  },
  {
    term: "Premium",
    definition: (
      <>
        The payment you make, usually monthly, to keep your policy in force. Miss enough
        payments and the policy can eventually lapse.
      </>
    ),
  },
  {
    term: "Face amount",
    definition: (
      <>
        The stated coverage amount of a policy — the figure used to calculate the death benefit
        before any early-period adjustments, like a graded or modified payout schedule, apply.
      </>
    ),
  },
  {
    term: "Cash value",
    definition: (
      <>
        A savings-like component that builds slowly inside a whole life or final expense policy
        while you&apos;re alive, separate from the death benefit. See our{" "}
        <Link href="/cash-value-life-insurance" className="font-semibold text-harbor-mid hover:underline">
          full explanation of cash value
        </Link>{" "}
        for more.
      </>
    ),
  },
  {
    term: "Simplified issue",
    definition: (
      <>
        An application process with no medical exam — instead, you answer a short list of
        health questions, and the carrier checks background sources like your prescription
        history. See how{" "}
        <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
          simplified issue works with pre-existing conditions
        </Link>
        .
      </>
    ),
  },
  {
    term: "Guaranteed issue",
    definition: (
      <>
        Also called guaranteed acceptance. An application process with no health questions and
        no medical exam — anyone within the eligible age range is accepted, typically in
        exchange for a waiting period on natural-cause death.
      </>
    ),
  },
  {
    term: "Level / graded / modified",
    definition: (
      <>
        The three common payout structures for how much a policy pays if death occurs during
        its early period. Level pays the full death benefit from day one. Graded pays a
        partial, increasing amount during the early period. Modified returns paid premiums,
        often with interest, during that same window. All three pay the full death benefit once
        the early period has passed.
      </>
    ),
  },
  {
    term: "Contestability period",
    definition: (
      <>
        A window, commonly the first two years a policy is in force, during which the insurer
        can investigate and potentially contest a claim if the application contained a material
        misrepresentation.
      </>
    ),
  },
  {
    term: "Underwriting",
    definition: (
      <>
        The process a carrier uses to evaluate an applicant — health questions, prescription
        history, and other checks — to decide whether to issue a policy, and on what terms.
      </>
    ),
  },
  {
    term: "Look-back period",
    definition: (
      <>
        How far back a carrier&apos;s health questions reach when asking about a past
        diagnosis, treatment, or hospitalization. This window varies by carrier and by the
        specific condition being asked about.
      </>
    ),
  },
  {
    term: "Free-look period",
    definition: (
      <>
        A short window after your policy is delivered during which you can cancel it for any
        reason and receive a full refund of any premiums paid.
      </>
    ),
  },
  {
    term: "Grace period",
    definition: (
      <>
        A set stretch of time after a missed premium due date during which your coverage stays
        in force while you catch up on payment, before the policy lapses.
      </>
    ),
  },
  {
    term: "Lapse",
    definition: (
      <>
        What happens when a policy ends because a premium went unpaid, even through the grace
        period. Once a policy lapses, coverage stops.
      </>
    ),
  },
];

export default function LifeInsuranceGlossaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance glossary
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Final expense and life insurance come with their own vocabulary. Here&apos;s a
          plain-language reference for the terms used across this site, so nothing you read here
          depends on jargon you haven&apos;t seen explained.
        </p>

        <dl className="mt-10 divide-y divide-mist border-t border-mist">
          {TERMS.map((item) => (
            <div key={item.term} className="py-6">
              <dt className="font-display text-xl font-extrabold text-harbor">{item.term}</dt>
              <dd className="mt-2 text-base leading-relaxed text-charcoal/80">{item.definition}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
