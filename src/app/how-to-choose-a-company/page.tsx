import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Choose a Final Expense Insurance Company",
  description:
    "A practical, carrier-neutral checklist for evaluating any final expense insurance provider — licensing, track record, claims handling, and reading the actual policy before you buy.",
  openGraph: { title: "How to Choose a Final Expense Insurance Company", description: "A practical, carrier-neutral checklist for evaluating any final expense insurance provider — licensing, track record, claims handling, and reading the actual policy before you buy." },

  twitter: { title: "How to Choose a Final Expense Insurance Company", description: "A practical, carrier-neutral checklist for evaluating any final expense insurance provider — licensing, track record, claims handling, and reading the actual policy before you buy." },
};

export default function HowToChooseACompanyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to choose a final expense insurance company
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Not every final expense provider handles things the same way, and the differences matter
          more after you&apos;ve filed a claim than they do while you&apos;re shopping. Here&apos;s
          a practical, carrier-neutral checklist for evaluating any company you&apos;re considering
          — not which specific companies to pick, but what to actually look for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Confirm they&apos;re licensed in your state
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurance is regulated at the state level, and any company or agent selling you a policy
          needs to be properly licensed to do business where you live. This is a basic,
          easy-to-verify starting point, and a legitimate provider will never be cagey about it.
          See our{" "}
          <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
            state-by-state coverage guide
          </Link>{" "}
          for what licensing looks like in your state.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How long they&apos;ve actually operated
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A longer track record isn&apos;t everything, but it tells you something a marketing page
          can&apos;t: the company has been collecting premiums and paying claims long enough to
          have a real operating history, weathered more than one market cycle, and built processes
          that have actually been tested against real claims rather than just designed on paper.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Independent agency vs. a single carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s worth understanding who you&apos;re actually talking to. A single-carrier
          company only offers its own products, so whatever they quote you is the only option on
          the table from that conversation. An independent agency works with multiple carriers and
          can compare plans across them, which means the recommendation you get is based on fitting
          a policy to your specific health and budget rather than steering you toward the one
          product available. Neither structure is inherently dishonest, but it&apos;s worth knowing
          which one you&apos;re dealing with before you commit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How claims and customer service are actually handled
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A policy is only as good as what happens when your family actually needs to use it.
          Before buying, it&apos;s reasonable to ask how claims are filed, how long payment
          typically takes, and how to actually reach a real person if something goes wrong — not
          just how the sales process works. A company that can answer these questions clearly,
          before you&apos;ve bought anything, is a good sign about how they&apos;ll behave after
          you have.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Read the actual policy language, not just the marketing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Marketing materials describe a policy in its best light; the policy itself is the only
          document that actually governs what you get. Before buying, read the specific language
          around waiting periods, exclusions, and how your coverage tier (level, graded, or
          modified) applies to your situation, rather than relying on a general impression from an
          ad or a phone pitch. If something in the policy language doesn&apos;t match what you were
          told verbally, that&apos;s worth resolving before you sign anything, not after. Our
          guides to{" "}
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            pre-existing conditions
          </Link>{" "}
          and{" "}
          <Link href="/guaranteed-issue-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            guaranteed issue coverage
          </Link>{" "}
          cover the terms worth watching for most closely.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">The short version</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-charcoal/75">
            <li>• Licensed in your state, with a real operating history</li>
            <li>• Clear about whether it&apos;s one carrier or several</li>
            <li>• Straightforward about how claims and service actually work</li>
            <li>• A policy whose written terms match what you were told</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why comparing through an independent agency can help
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is exactly the comparison an independent agency is built to make easy. Rather than
          evaluating one company&apos;s policy in isolation, working with an independent agency
          lets you see how multiple carriers actually price and structure coverage for your
          specific situation, side by side, before you decide. It doesn&apos;t replace doing your
          own homework on any company you&apos;re considering — but it does mean you&apos;re
          choosing from real options instead of a single offer.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
