import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$30,000 Final Expense Insurance Cost",
  description:
    "What a $30,000 final expense policy commonly covers, who tends to choose it, and what actually drives the price.",
};

export default function ThirtyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $30,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How much does a $30,000 final expense policy cost?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $30,000 is a comfortable buffer tier — generally enough to fund a full traditional
          funeral without tight choices, and still leave a meaningful amount behind. As with every
          amount on this site, the actual premium depends on you, not a number we can post here.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            There&apos;s no standard rate for $30,000 in coverage — it depends on you. What&apos;s
            consistent is the role this amount plays: full funeral costs covered comfortably, with
            a real amount left over.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $30,000 is typically meant to cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $30,000 generally funds a full traditional funeral and burial without needing to
          economize on the service, casket, or plot, plus a real cushion afterward — often enough
          to make a genuine dent in outstanding debt, whether that&apos;s medical bills, credit
          cards, or a car loan, rather than just covering the small incidental costs around a
          service.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who tends to choose this amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $30,000 tends to appeal to people carrying more significant debt that they specifically
          don&apos;t want passed informally to a spouse or adult child, people who looked at{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          but wanted less pressure on which casket, service, or plot they choose, and people
          who&apos;d otherwise be juggling two smaller policies and would rather consolidate into
          one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually determines your price at $30,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A larger amount doesn&apos;t mean a different pricing method — $30,000 is still priced
          on the same factors as any other tier:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the only way to see what $30,000 in coverage actually costs for you,
          with no obligation to apply.
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
