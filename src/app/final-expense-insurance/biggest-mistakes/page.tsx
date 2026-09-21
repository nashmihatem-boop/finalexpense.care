import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Biggest Mistakes Shopping for Final Expense Insurance",
  description:
    "Common, avoidable mistakes people make when shopping for final expense insurance, from comparing only one carrier to letting a policy lapse.",
};

export default function BiggestMistakesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Biggest Mistakes
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          The biggest mistakes people make shopping for final expense insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Most of these are avoidable with a little awareness upfront. None of them are
          complicated once you know to look out for them — here are four that come up again and
          again.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Getting only one quote
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Stopping at the first carrier or agent you talk to, instead of comparing, is the most
          common mistake on this list. Carriers set their own health questions, their own
          look-back periods, and their own pricing — the same person can get a meaningfully
          different answer from one company to the next.{" "}
          <Link href="/pre-existing-conditions#why-carriers-differ" className="text-harbor-mid underline">
            See why the same condition can get different answers from different carriers
          </Link>{" "}
          before settling on the first offer you hear.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Buying guaranteed issue when simplified issue was available
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed issue skips health questions entirely, but it costs more for the same
          coverage and comes with a waiting period. Some people default to it out of assumption,
          or because it&apos;s what they were offered first, without ever finding out whether
          they&apos;d actually qualify for simplified issue instead — which is typically cheaper
          and starts full coverage on day one.
        </p>
        <PolicyTypesTable />

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Not disclosing health information accurately
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Understating or leaving out a condition to get a better rate, or to avoid a decline, can
          feel tempting in the moment — but it risks a real problem later. If a claim is filed
          during the contestability period, the early stretch of the policy when an insurer can
          still review your original answers against your medical and prescription records, a
          mismatch can lead to a denied claim or a reduced payout at the exact moment your family
          needs the money most. Answering honestly the first time protects the coverage you&apos;re
          paying for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Letting a policy lapse over a missed payment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A single missed premium doesn&apos;t have to mean losing coverage. Policies include a
          grace period — a set window, commonly around 30 days, though it varies by carrier and
          state — after a missed due date to catch up before the policy actually lapses. The real
          mistake isn&apos;t missing a payment occasionally; it&apos;s assuming the policy is
          already gone and not contacting the carrier or agent in time to fix it. Keeping payment
          information current, and reaching out right away if a payment fails, protects coverage
          you&apos;ve already been paying for.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/buy-online" className="font-semibold text-harbor-mid hover:underline">
              What actually happens after you get a quote →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
