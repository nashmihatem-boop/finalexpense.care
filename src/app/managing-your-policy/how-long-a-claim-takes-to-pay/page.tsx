import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How Long a Life Insurance Claim Takes to Pay",
  description:
    "The main factors that speed up or slow down a death benefit claim, and how a beneficiary can help it move faster.",
  openGraph: { title: "How Long a Life Insurance Claim Takes to Pay", description: "The main factors that speed up or slow down a death benefit claim, and how a beneficiary can help it move faster." },

  twitter: { title: "How Long a Life Insurance Claim Takes to Pay", description: "The main factors that speed up or slow down a death benefit claim, and how a beneficiary can help it move faster." },
};

export default function HowLongAClaimTakesToPayPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / How Long a Claim Takes to Pay
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How long does a life insurance claim take to pay?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          There&apos;s no single honest answer to this — timelines vary by carrier and by the
          specific claim. What&apos;s more useful is understanding the handful of factors that
          actually move the timeline, so you know what&apos;s normal and what might be worth a
          follow-up call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why there&apos;s no fixed number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every carrier sets and discloses its own claims-processing timeline, and a
          straightforward claim moves differently than one with a complication. Rather than
          relying on a general figure, ask your specific carrier what their typical timeline looks
          like once they&apos;ve received a complete claim — that answer will be far more accurate
          than any industry-wide average.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Complete paperwork is the biggest lever
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The single most common reason an otherwise simple claim takes longer than expected is
          incomplete paperwork — a missing signature, an uncertified death certificate, or a claim
          form left partly blank. Double-checking everything before you submit it is the one part
          of this process a beneficiary has full control over.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The contestability period can add review time
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If a death occurs within a policy&apos;s first two years, carriers generally give the
          claim a closer look to confirm the original application was accurate — this is standard
          practice, not a sign of trouble. See our{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            guide to the contestability period
          </Link>{" "}
          for more on how that review works.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cause-of-death questions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An unclear or unusual cause of death — for example, one still pending an autopsy or
          official investigation — can extend the timeline while the carrier waits on official
          records from a coroner or medical examiner. This is outside anyone&apos;s control and
          simply takes as long as it takes.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">What helps it move faster</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Order a few extra certified copies of the death certificate up front, respond quickly
            to any request from the carrier, keep copies of everything you submit, and follow up
            periodically rather than assuming silence means a problem.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
