import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$5,000 Final Expense Insurance Cost",
  description:
    "What a $5,000 final expense policy is typically meant to cover, who tends to choose this amount, and what actually determines your price.",
  openGraph: { title: "$5,000 Final Expense Insurance Cost", description: "What a $5,000 final expense policy is typically meant to cover, who tends to choose this amount, and what actually determines your price." },

  twitter: { title: "$5,000 Final Expense Insurance Cost", description: "What a $5,000 final expense policy is typically meant to cover, who tends to choose this amount, and what actually determines your price." },
};

export default function FiveThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $5,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How much does a $5,000 final expense policy cost?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $5,000 is typically the smallest face amount carriers commonly offer for final expense
          coverage. We can&apos;t quote a price for it here — that&apos;s calculated per
          applicant — but this amount usually plays a specific, limited role: filling a gap, not
          funding an entire funeral on its own.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $5,000 premium depends on your age, health, gender, tobacco use, and state — we
            can&apos;t responsibly publish one number and call it accurate. What we can tell you
            is that this is usually a supplemental amount, not a full funeral budget on its own.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $5,000 is typically meant to cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In most areas, $5,000 rarely funds a full traditional funeral on its own. It&apos;s more
          commonly used to cover a portion of a simple cremation, or to sit alongside money
          that&apos;s already set aside — savings, a pre-need arrangement with a funeral home, or
          an existing life insurance policy that isn&apos;t quite large enough by itself. Some
          people choose it deliberately as a &quot;just in case&quot; layer on top of other plans,
          rather than as their entire plan.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who tends to choose this amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $5,000 tends to appeal to people easing into coverage for the first time who want to
          keep the monthly commitment as low as possible, people who&apos;ve already funded most
          of their funeral plans another way and just want a smaller amount to cover the gap, and
          people on a fixed income who&apos;d rather have something in force today than wait while
          they decide on a bigger number. Starting smaller doesn&apos;t lock you out of adding more
          later — though a new policy down the road means underwriting again at whatever age and
          health you are at that point, which is worth keeping in mind if you think you&apos;ll
          want more coverage eventually.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you&apos;re not sure $5,000 goes far enough for what you have in mind, it&apos;s
          worth comparing it against a{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000 policy
          </Link>{" "}
          side by side before you decide.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually determines your price at $5,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Even at the smallest commonly offered amount, your price is set by the same factors as
          any other policy:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The only way to know what $5,000 in coverage actually costs for you is a free quote — it
          takes about two minutes and comes with no obligation to apply.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to cost by coverage amount
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
