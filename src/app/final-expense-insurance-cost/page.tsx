import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance Cost by Coverage Amount",
  description:
    "What actually drives your final expense insurance premium, and what coverage amounts from $5,000 to $40,000 and up are typically meant to cover.",
};

const COST_TIERS = [
  {
    amount: "$5,000",
    href: "/final-expense-insurance-cost/5000",
    blurb: "The smallest commonly offered amount — usually a supplement to savings or other coverage, not a standalone funeral budget.",
  },
  {
    amount: "$10,000",
    href: "/final-expense-insurance-cost/10000",
    blurb: "A common starting point, often sized for a modest cremation or simple service with a little left over.",
  },
  {
    amount: "$15,000",
    href: "/final-expense-insurance-cost/15000",
    blurb: "A middle step up — room for a fuller service or a modest burial, without a full traditional funeral budget.",
  },
  {
    amount: "$20,000",
    href: "/final-expense-insurance-cost/20000",
    blurb: "One of the most commonly chosen amounts — often enough for a traditional funeral and burial plus a cushion.",
  },
  {
    amount: "$25,000",
    href: "/final-expense-insurance-cost/25000",
    blurb: "Beyond the funeral itself, with room for medical bills, debts, or other costs left behind.",
  },
  {
    amount: "$30,000",
    href: "/final-expense-insurance-cost/30000",
    blurb: "A comfortable buffer — a full traditional funeral funded without tight choices, plus a meaningful amount left over.",
  },
  {
    amount: "$40,000",
    href: "/final-expense-insurance-cost/40000",
    blurb: "Near the top of what's typically called final expense — often meant to leave something behind, not just cover a funeral.",
  },
];

export default function FinalExpenseInsuranceCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Cost by Coverage Amount
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How much does final expense insurance cost?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          There&apos;s no single price list we can publish here — final expense insurance is
          underwritten individually, so the only completely accurate number is the one a carrier
          gives you after a short application. What we can do honestly is walk through what
          actually moves your premium, and what different coverage amounts are typically meant to
          cover, so you can pick a target that fits your situation before you ever talk to anyone.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Why you won&apos;t find a price on this page
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A sample rate would have to assume an age, a gender, a health history, and a state —
            change any one of those and the real number moves. Publishing a figure that
            doesn&apos;t apply to you would be more misleading than helpful. If you want to
            research actual funeral and cremation costs as a starting point,{" "}
            <a href="https://nfda.org" className="text-harbor-mid underline">
              the National Funeral Directors Association
            </a>{" "}
            publishes national median cost data each year. For what coverage actually costs you
            specifically, a free quote is the only number that counts.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What actually drives your premium
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every carrier looks at some version of the same handful of factors. None of them are
          secret, and none of them depend on which company you end up with:
        </p>
        <CostFactorsGrid />

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Coverage amount is the one factor you control
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Age, health, and gender are what they are by the time you apply. Coverage amount is
          different — it&apos;s a choice you make, and it has a direct, predictable relationship
          to your premium: more coverage costs more, all else being equal. That makes the real
          question less &quot;what&apos;s the cheapest policy I can get&quot; and more &quot;what
          amount actually does the job I need it to do.&quot; The sections below break that down
          by amount.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Explore cost by coverage amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each amount below is one of the tiers our own quote process asks about. Pick the one
          closest to what you have in mind for a closer look at what it&apos;s typically used for.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {COST_TIERS.map((tier) => (
            <Link
              key={tier.href}
              href={tier.href}
              className="rounded-xl border border-mist bg-canvas-raised p-5 transition-colors hover:border-harbor-mid/50"
            >
              <p className="font-display text-lg font-extrabold text-harbor">{tier.amount}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">{tier.blurb}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
