import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$20,000 Final Expense Insurance Cost",
  description:
    "Why $20,000 is one of the most commonly chosen final expense coverage amounts, what it's meant to cover, and what actually drives the price.",
  openGraph: { title: "$20,000 Final Expense Insurance Cost", description: "Why $20,000 is one of the most commonly chosen final expense coverage amounts, what it's meant to cover, and what actually drives the price." },

  twitter: { title: "$20,000 Final Expense Insurance Cost", description: "Why $20,000 is one of the most commonly chosen final expense coverage amounts, what it's meant to cover, and what actually drives the price." },
};

export default function TwentyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $20,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How much does a $20,000 final expense policy cost?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $20,000 is consistently one of the most commonly chosen final expense coverage amounts —
          the number a lot of people land on once they&apos;ve thought through what a full funeral
          actually involves. What it costs is individual to you; what it&apos;s meant to cover is
          fairly consistent.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            We can&apos;t quote a $20,000 rate here — premiums are calculated per applicant, not
            off a shared table. What&apos;s consistent is that this is one of the most commonly
            chosen amounts, and why people land on it.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $20,000 is typically meant to cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In many areas, $20,000 is enough for a full traditional funeral and burial — a service,
          casket, vault, plot, and headstone — plus a cushion for the smaller costs that build up
          around it: an obituary, flowers, a gathering afterward, or travel for family members
          coming from out of town. Actual costs vary widely by region and the specific choices
          made, so treat this as a general pattern rather than a guarantee for your area — the{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">
            National Funeral Directors Association
          </a>{" "}
          publishes national median cost figures if you want to research current numbers directly.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it&apos;s such a common target
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $20,000 tends to be roughly the point where most of the core pieces of a traditional
          funeral are accounted for without needing to trim service choices to fit a smaller
          number — while keeping the ongoing premium meaningfully lower than doubling up at{" "}
          <Link href="/final-expense-insurance-cost/40000" className="text-harbor-mid underline">
            $40,000
          </Link>
          . That balance is why it comes up so often in conversations with agents, not because
          it&apos;s a fixed &quot;correct&quot; answer for everyone. Your own number should still
          come down to what you actually want covered, not what&apos;s statistically common.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually determines your price at $20,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Popularity doesn&apos;t change the math — a $20,000 policy is priced on the same factors
          as any other amount:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the only way to see what $20,000 in coverage actually costs based on
          your own details, with no obligation to apply.
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
