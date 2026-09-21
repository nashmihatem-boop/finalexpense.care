import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Recognize Agent Fraud",
  description:
    "Red flags that an insurance agent isn't acting in your interest — payment requests, blank forms, withheld paperwork — and what to do if you suspect fraud.",
};

export default function AgentFraudPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Agent Fraud
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to recognize agent fraud
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          The vast majority of licensed agents do exactly what they&apos;re supposed to: match you
          with coverage, submit your application accurately, and hand you your policy documents.
          A small number don&apos;t. A handful of specific behaviors are reliable warning signs
          regardless of how trustworthy or friendly an agent otherwise seems, and they&apos;re
          worth knowing before you&apos;re in the middle of an application.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A check made out to the agent, not the carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your premium payment should always be made out to the insurance company, never to an
          individual agent or agency personally, and never handed over in cash. An agent asking
          you to write a check to them directly, or to pay them in cash &quot;to save time&quot;
          or &quot;to process it for you,&quot; has no legitimate reason to make that request —
          it&apos;s also one of the more common ways an agent pockets a payment while a policy is
          never actually written.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Pressure to sign blank or incomplete forms
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You should never be asked to sign a form with blank sections on the promise that
          &quot;we&apos;ll fill in the rest later.&quot; A signature on a blank or incomplete
          application means you&apos;re agreeing to whatever gets written in afterward, by someone
          else, without your review — including answers to health questions that affect whether a
          future claim gets paid at all. Every field relevant to you should already be filled in
          before you sign anything.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Refusing to give you copies of what you signed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          After you sign an application or a policy, you&apos;re entitled to a copy of it — not a
          summary, not a verbal recap, the actual document. An agent who&apos;s slow to provide
          it, vague about why, or who suggests you don&apos;t really need your own copy is giving
          you a reason to be concerned. Keep copies of everything you sign for as long as the
          policy is active.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What to do if you suspect fraud
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Contact the insurance carrier directly — using contact information you find yourself,
          not a number the agent gave you — and ask them to confirm that a policy actually exists
          in your name and that any payment was applied to it. See our guide to{" "}
          <Link href="/avoiding-scams/verify-a-company-is-legitimate" className="text-harbor-mid underline">
            verifying a company is legitimate
          </Link>{" "}
          for how to find that contact information independently. If anything doesn&apos;t check
          out, or you can&apos;t get a straight answer, file a complaint with your state&apos;s
          department of insurance — the same regulator that licensed the agent in the first place.
          Complaints like this are exactly what that office exists to investigate, and filing one
          doesn&apos;t require you to have already proven anything, just a specific, honest
          account of what happened.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
