import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$15,000 Final Expense Insurance Cost",
  description:
    "What a $15,000 final expense policy commonly covers, how it compares to $10,000 and $20,000, and what actually drives the price.",
  openGraph: { title: "$15,000 Final Expense Insurance Cost", description: "What a $15,000 final expense policy commonly covers, how it compares to $10,000 and $20,000, and what actually drives the price." },

  twitter: { title: "$15,000 Final Expense Insurance Cost", description: "What a $15,000 final expense policy commonly covers, how it compares to $10,000 and $20,000, and what actually drives the price." },
};

export default function FifteenThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $15,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How much does a $15,000 final expense policy cost?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $15,000 sits between the two amounts people search for most — $10,000 and $20,000 — and
          tends to appeal to people who&apos;ve looked at both and want something in the middle.
          The price itself still depends entirely on you, not a fixed number we can post here.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            There&apos;s no fixed price for a $15,000 policy — it&apos;s underwritten per
            applicant. What we can say is how this amount tends to be used: a step up from the
            bare minimum, without reaching for a full traditional funeral budget.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $15,000 is typically meant to cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $15,000 generally buys more breathing room than a bare-bones cremation policy — often
          enough for a fuller service with a viewing beforehand, or a modest burial in a
          lower-cost area, with a bit left over for smaller bills. It&apos;s a common choice for
          people who want more than the minimum without paying for coverage sized for a full
          traditional funeral they don&apos;t necessarily need.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why some people land in between
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not everyone fits neatly into &quot;cremation only&quot; or &quot;full traditional
          funeral.&quot; Some people want a hybrid — a service or viewing before cremation, say —
          and some simply want more cushion than the smaller tiers offer without paying for
          coverage sized for services they don&apos;t plan to use. $15,000 is often the number
          people settle on after comparing both neighbors directly:{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000
          </Link>{" "}
          on one side, and{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          on the other.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually determines your price at $15,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Landing in between doesn&apos;t change what sets your price — the same factors apply at
          $15,000 as at any other amount:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Comparing your actual quote at $10,000, $15,000, and $20,000 side by side is often the
          fastest way to see exactly what the extra coverage costs you month to month.
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
