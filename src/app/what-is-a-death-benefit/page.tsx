import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is a Death Benefit?",
  description:
    "What a life insurance death benefit is, how it's paid, whether it's taxable, and what it can actually be used for.",
};

export default function WhatIsADeathBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a death benefit?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A death benefit is the amount a life insurance company pays to your named beneficiary
          after you pass away. It&apos;s the entire purpose of a life insurance policy —
          everything else about the policy exists to define when, how much, and under what
          conditions this payment happens.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How a death benefit is paid
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most death benefits are paid as a single lump sum, sent directly to the beneficiary once
          the claim is filed and approved. Some policies also offer alternative payout structures
          — installments paid out over a set period instead of all at once, for example — though a
          lump sum remains the most common and straightforward option, and the one most final
          expense policies are built around.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Is a death benefit taxable?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Generally, no — life insurance death benefits are typically received income-tax-free by
          the beneficiary. This is one of the more consistent features of life insurance as a
          financial product. That said, tax situations can get more complex depending on how a
          policy is owned or structured, and specific circumstances vary, so it&apos;s worth
          confirming your particular situation with a tax professional rather than assuming every
          scenario works identically.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What the money can actually be used for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A death benefit isn&apos;t restricted to any specific purpose. Unlike a prepaid funeral
          plan, which is generally locked into services from a specific funeral provider, a life
          insurance death benefit is paid directly to your beneficiary as cash, with no requirement
          about how it&apos;s spent. Many families do use it to cover a funeral or burial, but it
          can just as easily go toward medical bills, everyday living expenses, debt, or anything
          else the family needs at the time.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the amount is decided
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The death benefit amount isn&apos;t set by the insurance company — it&apos;s chosen by
          the applicant at the time of purchase, based on what they&apos;re trying to cover. For a
          policy meant to handle end-of-life costs specifically, that&apos;s usually a more modest
          amount than a policy meant to replace years of income. See{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          for more on choosing a coverage amount, and{" "}
          <Link href="/what-is-a-beneficiary" className="font-semibold text-harbor-mid hover:underline">
            what is a beneficiary
          </Link>{" "}
          for who can actually receive this payment.
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
