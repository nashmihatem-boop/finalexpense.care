import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Whole Life vs. Universal Life Insurance",
  description:
    "A plain-language comparison of whole life and universal life insurance — fixed guarantees versus flexible premiums — and where final expense insurance fits.",
};

export default function WholeLifeVsUniversalLifePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Whole life vs. universal life insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whole life and universal life are both types of permanent life insurance — coverage
          meant to last your entire life rather than a fixed number of years, unlike term
          insurance. But they manage premiums, cash value, and risk in genuinely different ways,
          and the difference matters when you&apos;re deciding which one actually fits your
          situation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Whole life: fixed and guaranteed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Whole life insurance is built around certainty. Your premium is set when the policy is
          issued and doesn&apos;t increase for as long as you own the policy. The death benefit is
          guaranteed at a fixed amount, and the policy&apos;s cash value grows on a defined,
          guaranteed schedule rather than fluctuating with market or investment performance.
          Nothing about a whole life policy is designed to surprise you later — what you&apos;re
          quoted at the start is, contractually, what you keep.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Universal life: flexible, with more moving parts
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Universal life insurance trades some of that certainty for flexibility. Many universal
          life policies let you adjust your premium payments within limits, and sometimes adjust
          the death benefit as well, as your needs change over time. The cash value typically
          grows based on interest crediting that can vary — depending on the specific policy, that
          might be tied to a minimum guaranteed rate, current interest rates, or the performance of
          an underlying index. That flexibility can be genuinely useful, but it comes with more to
          manage: if premium payments are reduced too far or cash value performance is weak, the
          policy can lose value or, in some cases, lapse — something a properly funded whole life
          policy isn&apos;t exposed to in the same way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The core tradeoff
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The choice largely comes down to certainty versus flexibility. Whole life suits people
          who want a fixed premium and a guaranteed outcome they never have to monitor. Universal
          life suits people who want room to adjust payments over time and are comfortable keeping
          an eye on how the policy is performing, since flexibility on the way in can mean more
          responsibility along the way. Neither structure is better in the abstract — they&apos;re
          built for different priorities.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where final expense insurance fits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance is a type of whole life insurance, not universal life. That&apos;s
          a deliberate design choice, not an incidental detail: a policy meant to cover end-of-life
          costs is built around a fixed premium that won&apos;t increase as you age and a
          guaranteed death benefit your family can count on, without the ongoing management a
          universal life policy can require. For more on how permanent coverage works generally,
          see{" "}
          <Link href="/what-is-whole-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            what is whole life insurance
          </Link>
          , or read about{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance specifically works
          </Link>
          .
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
