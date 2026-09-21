import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Spouse",
  description:
    "Why couples often buy final expense coverage for each other, who should apply, how beneficiaries typically work, and how to get started.",
};

export default function SpousePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Spouse
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Buying final expense insurance for your spouse
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Of all the relationships on this site, a spouse is the most straightforward. You share a
          household, you likely share bills, and you almost certainly share the consequences if
          one of you passes away without coverage in place. Here&apos;s how couples typically
          approach it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why couples take this on for each other
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          When you&apos;ve built a life together, a funeral isn&apos;t just a loss — it&apos;s
          also a bill, and often one that lands during an already difficult stretch. Buying
          coverage for each other is less about anticipating tragedy and more about making sure
          neither of you is ever left sorting out money on top of grief. It&apos;s also simply
          convenient: most couples review their finances together anyway, so final expense
          coverage tends to come up alongside other household planning, not as its own separate
          project.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who applies, and who owns the policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A spouse is about as clear an example of &quot;insurable interest&quot; as exists in
          insurance — the shared financial and emotional stake is automatic, so there&apos;s
          rarely any question about whether one spouse can buy a policy on the other. The more
          practical question is how you want to structure it. Most couples simply take out two
          separate policies, one on each spouse&apos;s life, with each spouse as their own
          applicant and insured. Some couples instead have one spouse own a policy that insures
          the other — useful if one of you handles the household&apos;s finances and paperwork and
          would rather keep that responsibility centralized. Either approach is common; it&apos;s
          a matter of preference, not a rule.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Setting up your beneficiary
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most spouses simply name each other as primary beneficiary, which keeps things simple:
          the surviving spouse receives the death benefit directly and can use it for the funeral
          or anything else that comes up. It&apos;s worth also naming a contingent beneficiary —
          often an adult child — in case the primary beneficiary predeceases you or you were to
          pass away together. If your circumstances change later, whether through divorce, a new
          marriage, or simply wanting to add someone, beneficiaries can typically be updated at any
          time, so it&apos;s worth revisiting the designation after any major life change rather
          than assuming it&apos;s locked in.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Applying together vs. separately
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Even when a couple decides together to get covered, the underwriting happens
          individually — your health, age, and habits are evaluated on their own, so it&apos;s
          entirely normal for one spouse to qualify for a different rate or outcome than the
          other. Don&apos;t be discouraged if your results don&apos;t match; it doesn&apos;t
          reflect anything other than two separate health histories. If one of you has a health
          condition that complicates things, our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          covers how that&apos;s typically handled.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
