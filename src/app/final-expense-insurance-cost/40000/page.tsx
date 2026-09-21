import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$40,000 Final Expense Insurance Cost",
  description:
    "What a $40,000-and-up final expense policy is meant to cover, where final expense starts overlapping with whole life insurance, and what drives the price.",
};

export default function FortyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $40,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How much does a $40,000 final expense policy cost?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $40,000 sits near the top of what&apos;s typically marketed as &quot;final expense&quot;
          insurance. Past this point, coverage starts to look less like a funeral-specific policy
          and more like a small whole life policy that happens to also cover one.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $40,000 premium is set per applicant, the same as any other amount. What&apos;s
            worth knowing upfront is that at this level, it&apos;s worth confirming whether a
            final-expense product or a standard whole life policy actually fits your goal better.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $40,000 is typically meant to cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $40,000 generally funds a traditional funeral and burial with plenty of room to spare,
          and typically leaves a real amount behind on top of that — enough to matter to a
          surviving spouse&apos;s monthly budget, chip away at a remaining mortgage balance, or
          set something aside for grandchildren. At this tier, the death benefit is doing double
          duty: final expenses, plus a legacy gift for the people you leave behind.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          $40,000 and above: where final expense blends into whole life insurance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no strict industry line here, but coverage amounts above roughly this range
          increasingly overlap with what&apos;s simply called whole life insurance — often still
          issued with simplified underwriting, but sized more for leaving money behind than
          specifically for funeral costs. If you&apos;re thinking about $50,000 or more, it&apos;s
          worth an honest conversation with a licensed agent about whether a &quot;final
          expense&quot;-branded product or a standard whole life policy is the better fit for what
          you&apos;re actually trying to do. The label matters less than getting the right
          policy — and if $40,000 feels like more coverage than you need, it&apos;s worth
          comparing against{" "}
          <Link href="/final-expense-insurance-cost/30000" className="text-harbor-mid underline">
            $30,000
          </Link>{" "}
          too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually determines your price at $40,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Even at the upper end of final expense coverage, price still comes down to the same
          factors as every smaller amount:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the most direct way to find out what $40,000 in coverage — or a larger
          whole life policy, if that turns out to be the better fit — actually costs for you.
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
