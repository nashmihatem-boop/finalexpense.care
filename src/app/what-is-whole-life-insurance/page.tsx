import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is Whole Life Insurance?",
  description:
    "A foundational explainer: permanent coverage for your entire life, level premiums that never increase, a guaranteed death benefit, and built-in cash value.",
};

export default function WhatIsWholeLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is whole life insurance?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whole life insurance is a type of permanent life insurance — coverage designed to last
          for your entire life, rather than expiring after a set number of years the way term
          insurance does. In exchange for a level premium, it guarantees a death benefit for as
          long as the policy stays in force, and it builds cash value along the way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coverage that lasts your whole life
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The defining feature is right in the name. As long as premiums are paid, a whole life
          policy doesn&apos;t expire at the end of a term and doesn&apos;t require renewal or
          re-qualification later in life. It stays in force for as long as you live, which is
          precisely why it&apos;s the structure used for coverage meant to be there whenever
          it&apos;s eventually needed, rather than coverage meant to protect a specific stretch of
          years like a mortgage term or a child&apos;s upbringing.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Level premiums that don&apos;t increase
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your premium is set when the policy is issued and stays the same for the life of the
          policy — it doesn&apos;t rise as you get older, even though your risk of death naturally
          increases with age. That&apos;s possible because the insurer prices the policy using
          your age at issue and spreads the cost evenly over time, rather than charging more each
          year the way some other insurance products do. The result is a payment that&apos;s
          predictable for as long as you own the policy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cash value that builds over time
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Part of every whole life premium goes toward a cash value component that accumulates on
          a guaranteed schedule set out in the policy. This cash value is a savings-like feature
          built into the contract — depending on the policy, it may be accessible while
          you&apos;re still living, though tapping it can reduce the death benefit if it
          isn&apos;t repaid. It&apos;s a genuine feature of the product, but it&apos;s a secondary
          one for most people who buy a smaller policy — the primary purpose is still the
          guaranteed death benefit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A guaranteed death benefit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          As long as the policy remains in force, the death benefit is guaranteed — a fixed amount
          your beneficiary receives, set when you bought the policy and not subject to change
          based on investment performance or market conditions. That guarantee is the central
          reason people choose whole life over other permanent options: it&apos;s not the amount
          you might get, it&apos;s the amount you will get.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Final expense insurance: a smaller, specific type of whole life
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance isn&apos;t a separate category from whole life insurance — it is
          whole life insurance, just sized and underwritten for a specific purpose: covering
          end-of-life costs rather than replacing decades of income. It typically comes in smaller
          coverage amounts, uses simpler underwriting, and is easier to qualify for than a large
          whole life policy, while keeping the same core guarantees — a level premium and a
          guaranteed death benefit. See{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          for the details specific to that product.
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
