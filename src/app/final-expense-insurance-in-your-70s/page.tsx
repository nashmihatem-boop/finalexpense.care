import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 70s",
  description:
    "Why your 70s are one of the most common ages to buy final expense insurance, and how to handle health questions when a condition applies to you.",
};

export default function FinalExpenseInsuranceInYour70sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 70s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 70s
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-reading-porch.jpg"
            alt=""
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          If there&apos;s a single decade this product is built around, it&apos;s this one. More
          people apply for final expense insurance in their 70s than any other age group — which
          also means carriers have more experience underwriting this decade than any other.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The core buying age for this product
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your 70s are where the largest share of final expense applicants land. Both simplified
          and guaranteed issue are actively used at this age, and most carriers&apos;
          simplified-issue questionnaires are written with exactly this age band in mind. If
          you&apos;re in your 70s and just starting to look into this, you&apos;re not behind —
          you&apos;re squarely in the group this coverage was designed for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why more applicants have something to disclose
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Naturally, by your 70s more people are managing at least one diagnosed condition — heart
          history, diabetes, a past cancer diagnosis, COPD, arthritis. That&apos;s common, not
          disqualifying, and it&apos;s exactly what our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          is built to help with. It covers how carriers evaluate common conditions and where each
          one typically lands.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A condition doesn&apos;t automatically mean guaranteed issue
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s easy to assume that having something to disclose means skipping straight to
          guaranteed acceptance, but that&apos;s often not the case. Level and graded outcomes
          through simplified issue are still very reachable in your 70s, depending on how stable
          and well-managed the condition is. See{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            how carriers sort applicants into level, graded, modified, or guaranteed
          </Link>{" "}
          before assuming which one applies to you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why comparing carriers matters even more here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every carrier sets its own health questions and look-back periods, and since more
          70-year-olds have something to disclose than 50- or 60-year-olds do, the gap between a
          well-matched carrier and a random first pick tends to widen at this age.{" "}
          <Link href="/pre-existing-conditions#why-carriers-differ" className="text-harbor-mid underline">
            See why the same condition can get different answers from different carriers
          </Link>{" "}
          before settling on one.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-80s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 80s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-60s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 60s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
