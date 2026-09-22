import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable, CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance Explained",
  description:
    "How final expense (burial) insurance works, the two main policy types, what affects your premium, and how to apply — in plain language.",
  openGraph: { title: "Final Expense Insurance Explained", description: "How final expense (burial) insurance works, the two main policy types, what affects your premium, and how to apply — in plain language." },

  twitter: { title: "Final Expense Insurance Explained", description: "How final expense (burial) insurance works, the two main policy types, what affects your premium, and how to apply — in plain language." },
};

export default function FinalExpenseInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Final Expense Insurance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance, explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Final expense insurance — also called burial insurance or funeral insurance — is a
          small whole life insurance policy built for one job: making sure the people you leave
          behind aren&apos;t stuck paying for your funeral, burial, or final medical bills out of
          their own pocket.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Key takeaways</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Pays a cash benefit directly to whoever you name as your beneficiary — it isn&apos;t paid to a funeral home.</li>
            <li>• It&apos;s whole life coverage: once approved, your premium is locked in and coverage doesn&apos;t expire as long as you pay.</li>
            <li>• Most applicants qualify without a medical exam, and many pre-existing conditions don&apos;t disqualify you.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          How final expense insurance works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You apply for a policy with a coverage amount that fits your needs — commonly enough to
          cover a funeral, burial or cremation, and any leftover medical or credit card debt.
          Once approved, you pay a fixed monthly premium for the life of the policy. When you
          pass away, the insurer pays the full death benefit to your named beneficiary in cash,
          tax-free, usually within days of the claim being filed. Your family can use it however
          they need to — funeral costs, other bills, or anything else. Unlike a funeral home
          prepayment plan, the money isn&apos;t locked into a specific funeral provider or
          package.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The two main types of policies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every final expense policy falls into one of two categories. Neither is
          objectively &quot;better&quot; — the right one depends on your health and how quickly
          you need full coverage in place.
        </p>

        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Exact numbers vary by carrier, state, and your personal details — a licensed agent can
          tell you exactly what you qualify for and what it costs, at no charge.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Day-one coverage vs. a waiting period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is the most important difference between the two policy types above. A
          simplified-issue policy that accepts your health answers typically provides
          &quot;day-one&quot; coverage — if you pass away from any covered cause after your first
          payment is processed, your beneficiary receives the full death benefit. Guaranteed
          issue policies, since they skip health questions entirely, usually include a two-year
          waiting period: if you pass away from natural causes during those first two years, the
          policy typically refunds the premiums you paid rather than paying the full benefit
          (accidental death is often covered immediately either way). After the waiting period
          ends, you have full coverage.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What affects your premium
        </h2>
        <CostFactorsGrid />

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          How to apply
        </h2>
        <ol className="mt-6 space-y-5">
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">1</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Tell us the basics.</strong> Your age, general
              health, coverage amount, and contact information — that&apos;s the quiz on this
              site, and it takes about two minutes.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">2</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">A licensed agent reaches out.</strong> They&apos;ll
              compare options across our carrier partners and walk you through what you actually
              qualify for — including price, coverage amount, and whether you&apos;d have a
              waiting period.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">3</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Apply, if you choose to.</strong> If a policy fits,
              you can complete the application on that same call — most simplified-issue
              applications only need your health question answers and beneficiary details.
              There&apos;s no obligation to move forward.
            </p>
          </li>
        </ol>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">
            Why we compare multiple carriers instead of selling one
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            FinalExpense.care specializes in life insurance and final expense insurance for
            seniors who want peace of mind knowing their funeral expenses won&apos;t burden their
            loved ones. We partner with multiple providers so we can compare dozens of plans side
            by side to find the best value for each customer, instead of pointing everyone toward
            a single company&apos;s policy regardless of fit.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            How we&apos;re paid: when you enroll in a policy through one of our licensed agent
            partners, that carrier compensates the agency. That&apos;s standard across the
            industry, and it never changes your premium or comes out of your pocket — getting a
            quote and talking to an agent is free either way.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Have questions first? See our{" "}
            <Link href="/#faq" className="font-semibold text-harbor-mid hover:underline">
              FAQ
            </Link>{" "}
            or the plain-language{" "}
            <Link href="/tcpa-consent" className="font-semibold text-harbor-mid hover:underline">
              details on how we contact you
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
