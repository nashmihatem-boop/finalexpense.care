import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$25,000 Final Expense Insurance Cost",
  description:
    "What a $25,000 final expense policy is meant to cover beyond the funeral itself, and what actually drives the price.",
};

export default function TwentyFiveThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $25,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How much does a $25,000 final expense policy cost?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $25,000 goes a step past covering the funeral itself. It&apos;s the tier where people
          often start thinking about what else they&apos;d rather not leave behind for family to
          sort out — though, as with every amount, the actual price is individual to you.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $25,000 premium is set individually, the same as any other amount. What&apos;s worth
            knowing upfront is that people at this tier are usually budgeting for more than just
            the funeral.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $25,000 is typically meant to cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $25,000 comfortably covers a traditional funeral and burial in most areas with room to
          spare, which is why people at this tier are often planning for more than the service
          alone — a remaining medical bill, a credit card balance, a car payment, or simply a
          buffer so a family member isn&apos;t the one absorbing whatever&apos;s left after the
          funeral home is paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The shift from covering the funeral to covering the aftermath
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000
          </Link>{" "}
          and{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>
          , most people are thinking primarily about the service itself. By $25,000, the
          conversation often shifts toward what happens in the weeks after — final bills that keep
          arriving, a lease or mortgage payment due before an estate settles, that kind of thing.
          It&apos;s not a hard line anyone draws on purpose, just a common pattern in how people
          describe why they landed on this amount.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually determines your price at $25,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The factors that set your price at $25,000 are the same ones that apply at every other
          amount:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the only way to see what $25,000 in coverage actually costs based on
          your own age, health, and state.
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
