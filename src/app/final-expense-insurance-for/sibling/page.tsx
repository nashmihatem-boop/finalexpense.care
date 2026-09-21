import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Sibling",
  description:
    "Buying final expense coverage for a brother or sister, what insurable interest means in practice, and how the application typically works.",
};

export default function SiblingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Sibling
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Buying final expense insurance for a sibling
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          It&apos;s less talked about than a spouse or parent buying coverage, but plenty of
          people end up arranging final expense insurance for a brother or sister. If that&apos;s
          you, there&apos;s one concept worth understanding before anything else: insurable
          interest.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why siblings buy coverage for each other
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A sibling often steps in when nobody else is positioned to. Maybe your brother or sister
          never married or had children, so there&apos;s no spouse thinking about this on their
          behalf. Maybe you&apos;re the one who&apos;s handled family logistics before — the one
          who ends up planning things when something needs planning. Or maybe you&apos;re a
          caregiver in practice, even if not on paper, and you already know you&apos;d be the one
          covering costs if nothing were in place. Whatever the reason, it comes from the same
          place as every relationship on this site: not wanting a loss to also become a bill.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurable interest: what it means for a sibling policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurable interest is a foundational concept in insurance law, not something any one
          company invented — it requires that whoever applies for or owns a policy on someone
          else&apos;s life has a genuine financial or emotional stake in that person continuing to
          live. It&apos;s the rule that keeps life insurance from being usable as a way to bet on
          a stranger&apos;s death. Immediate family relationships — spouses, and parents and
          children — are typically the clearest, least-questioned cases. A sibling relationship is
          also generally recognized as having insurable interest, but because it&apos;s one step
          further out, a carrier may ask a few more questions to confirm the relationship and the
          reason for the coverage than it would for a spouse or parent-child pair.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          None of that makes it complicated — it just means being ready to explain, honestly and
          simply, why you&apos;re the one arranging coverage for your sibling. In practice,
          &quot;we&apos;re close, I&apos;d be the one handling things, and I don&apos;t want that
          to be a financial burden&quot; is exactly the kind of answer carriers are looking for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What the application actually involves
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your sibling — the person being insured — has to be involved and has to consent. In
          practice that means they answer the health questions themselves (since only they
          actually know their own medical history), and they sign the application. You can be the
          one who starts the process, talks to the agent, and handles the paperwork logistics, but
          the policy can&apos;t be put in place entirely behind their back. Plan on a short call or
          conversation where your sibling is present, even if you&apos;re doing most of the
          legwork.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Setting up owner, insured, and beneficiary
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A policy has up to three distinct roles, and they don&apos;t have to be the same person.
          Your sibling is the insured — the policy covers their life. You can be the owner, which
          means you&apos;re the one who pays the premium and controls the policy (able to update
          the beneficiary or make changes later). The beneficiary — who actually receives the
          money — is commonly you, since you&apos;d likely be the one covering final costs, but it
          can also be split among other family members, or set to your sibling&apos;s own choice
          if they&apos;d rather name someone else. Talk through this explicitly rather than
          assuming; it&apos;s the one part of the setup that&apos;s easy to leave ambiguous by
          accident.
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
