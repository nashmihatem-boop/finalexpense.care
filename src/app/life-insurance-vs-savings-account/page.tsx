import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. a Savings Account",
  description:
    "A savings account only holds what you've deposited. A life insurance policy can pay its full amount from day one. Here's how to think about both.",
  openGraph: { title: "Life Insurance vs. a Savings Account", description: "A savings account only holds what you've deposited. A life insurance policy can pay its full amount from day one. Here's how to think about both." },

  twitter: { title: "Life Insurance vs. a Savings Account", description: "A savings account only holds what you've deposited. A life insurance policy can pay its full amount from day one. Here's how to think about both." },
};

export default function LifeInsuranceVsSavingsAccountPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. a savings account
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Both can leave money behind for the people you care about, but they work in
          fundamentally different ways. Understanding the difference is less about which is
          &quot;better&quot; and more about what each one is actually built to do.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A savings account only has what you&apos;ve put into it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is the simplest way to think about it: a savings account balance is exactly the
          sum of what you&apos;ve deposited, plus whatever modest interest it&apos;s earned.
          There&apos;s no shortcut — if you&apos;ve saved a modest amount so far, that modest
          amount is what&apos;s there. It grows only as fast as you&apos;re able to keep adding
          to it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A life insurance policy can pay its full amount from day one
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A life insurance policy works on entirely different math. Once your coverage is in
          force — and past any applicable waiting period — it can pay its full face amount to
          your beneficiary, even if you&apos;ve only made a single premium payment. That&apos;s
          the fundamental trade being made with insurance: a relatively small, regular payment
          stands in for a much larger guaranteed amount, available immediately once the policy
          is active, in a way a savings balance simply can&apos;t match early on.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          But they&apos;re built for different jobs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A savings account is liquid and unrestricted — accessible at any time, for absolutely
          any purpose, no questions asked. A life insurance death benefit is specifically built
          to pay out upon death, to a named beneficiary; it isn&apos;t something you can
          casually dip into for a vacation or an unexpected repair the way a savings account is.
          Whole life and final expense policies do build their own separate{" "}
          <Link href="/cash-value-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            cash value
          </Link>{" "}
          that you can access while alive, but that&apos;s a distinct feature from the death
          benefit itself. Neither account type is more flexible than the other in every sense —
          they&apos;re just flexible in different ways.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A reasonable way to think about both
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most people are well served by having both, not choosing between them. A savings
          account is the right tool for accessible, everyday flexibility — an emergency fund, a
          near-term goal, anything you might need on short notice. Life insurance is the right
          tool for making sure a specific, guaranteed amount reaches your family the moment
          it&apos;s needed, regardless of whether that&apos;s one month or twenty years into the
          policy.
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
