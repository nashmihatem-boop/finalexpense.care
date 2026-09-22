import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$10,000 Final Expense Insurance Cost",
  description:
    "What a $10,000 final expense policy commonly covers, how cremation and burial costs compare, and what actually drives the price.",
  openGraph: { title: "$10,000 Final Expense Insurance Cost", description: "What a $10,000 final expense policy commonly covers, how cremation and burial costs compare, and what actually drives the price." },

  twitter: { title: "$10,000 Final Expense Insurance Cost", description: "What a $10,000 final expense policy commonly covers, how cremation and burial costs compare, and what actually drives the price." },
};

export default function TenThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $10,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How much does a $10,000 final expense policy cost?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $10,000 is one of the most familiar numbers in final expense insurance — often treated
          as a baseline amount. What it actually costs isn&apos;t something we can put on this
          page as a fixed rate, but what it&apos;s typically used for is fairly consistent.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $10,000 premium is set individually, not off a rate card we can publish here.
            What&apos;s consistent is the role this amount tends to play: a modest cremation or
            simple service, with a little room to spare.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $10,000 is typically meant to cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $10,000 is often enough for a modest, no-frills cremation or a simple direct service,
          sometimes with a little left over for small debts — a final credit card balance, a last
          medical bill, or a utility account that needs closing out. It tends to run tighter for a
          full traditional burial with a casket, vault, and plot, since those add up faster than a
          cremation-focused plan. If a full traditional funeral with a viewing and burial is the
          goal, it&apos;s worth comparing this amount against{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cremation vs. burial, and why it matters for this number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation is generally the less expensive of the two most common options, which is part
          of why $10,000 tends to fit a cremation-focused plan more comfortably than a
          burial-focused one. Actual costs vary a lot by funeral home, region, and the specific
          services chosen — a viewing beforehand, an urn, or a memorial gathering all add to the
          total. We won&apos;t guess at numbers we can&apos;t verify, but the{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">
            National Funeral Directors Association
          </a>{" "}
          publishes national median cost data each year if you want a real starting point for your
          own research before settling on a coverage amount.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually determines your price at $10,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At $10,000 or any other amount, the same handful of factors set your actual price:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the only way to see what $10,000 in coverage actually costs based on
          your own age, health, and state — no obligation to move forward with it.
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
