import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Borrowing Against Your Policy's Cash Value",
  description:
    "How a policy loan against a whole life policy's cash value works, and what an unpaid loan does to the death benefit.",
};

export default function BorrowFromPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Borrowing Against Your Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Borrowing against your policy&apos;s cash value
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Final expense policies are typically whole life insurance, which means they build cash
          value over time in addition to the death benefit. If your policy has been in force for
          a while, borrowing against that cash value is usually an option — but it works
          differently from a typical bank loan, and it&apos;s worth understanding before you use
          it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What you&apos;re actually borrowing against
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cash value is a separate, slower-growing pool of money attached to a whole life policy —
          it&apos;s not the same as the death benefit, and it isn&apos;t available on day one. It
          builds gradually as you pay premiums, typically accumulating faster the longer the
          policy has been active. You can only borrow up to whatever cash value has actually
          accumulated, not the full face amount of the policy, so a policy that&apos;s only been
          in force a short time may not have much — or anything — to borrow against yet.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the loan itself works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because you&apos;re borrowing against money that&apos;s already yours, a policy loan
          generally doesn&apos;t involve a credit check or approval process the way a bank loan
          does. Interest accrues on the amount you borrow, at a rate and under terms set by your
          carrier, and there&apos;s typically no fixed monthly repayment schedule — you can often
          repay on your own timeline, or not at all. That flexibility is convenient, but it comes
          with a real tradeoff covered below.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What an unpaid loan does to your policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Any loan balance, plus accrued interest, is generally subtracted from the death benefit
          when a claim is eventually paid — so an unpaid loan directly reduces what your
          beneficiary receives. If the loan and interest are left to grow long enough that the
          balance catches up to the policy&apos;s total cash value, the policy can lapse entirely,
          ending coverage altogether. That risk is the main reason to treat a policy loan
          seriously rather than as free money.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Before you borrow</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Ask your carrier for your current cash value, the loan&apos;s interest rate, how
            interest accrues over time, and exactly how an unpaid balance would affect your death
            benefit if you never repaid it. Your policy&apos;s most recent in-force illustration
            or annual statement is usually the fastest way to see real numbers for your policy.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
