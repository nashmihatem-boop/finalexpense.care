import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "What to Do If a Life Insurance Claim Is Denied",
  description:
    "Common reasons a death benefit claim gets denied, and the options a beneficiary has, from appeal to a state complaint.",
};

export default function ClaimDeniedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / If a Claim Is Denied
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What to do if a claim is denied
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A denial is stressful, especially on top of everything else, but it isn&apos;t
          necessarily the final word. Here are the reasons it typically happens, and the concrete
          options a beneficiary has from there.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Common reasons a claim gets denied
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A few patterns account for most denials. Misrepresentation on the original application —
          a health condition or other material fact that wasn&apos;t disclosed accurately — is
          one, and it&apos;s typically only raised within the policy&apos;s{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period
          </Link>
          . A lapsed policy is another — if premiums stopped and the{" "}
          <Link href="/managing-your-policy/missed-premium-payment" className="text-harbor-mid underline">
            grace period
          </Link>{" "}
          passed without payment or reinstatement, coverage may no longer have been active at the
          time of death. A death from a non-accidental cause during a guaranteed-acceptance
          waiting period is a third pattern — though this usually results in a reduced, modified
          payout rather than a full denial, since that&apos;s how those policies are structured.
          Less commonly, a denial can stem from a specific cause of death the policy excludes
          outright.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Start by getting the reason in writing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers are generally expected to provide a specific written reason for denying a
          claim. If you only received a phone call or a vague explanation, request the denial in
          writing — the exact stated reason is what determines your best next step.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          You can appeal
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most carriers have an internal appeals process. If you have documentation that directly
          addresses their stated reason — medical records that clarify a diagnosis timeline, for
          example, or proof a payment was actually received — submitting it as part of a formal
          appeal is the first and most direct option.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Involve your state insurance department
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state has an insurance regulator that handles consumer complaints about claim
          handling. They can look into whether the denial followed proper procedure and, in some
          cases, help push for a resolution. Filing a complaint is typically free.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Consult an attorney for larger disputes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For a significant benefit amount, or a denial that seems to conflict with what the
          policy actually says, an attorney who handles insurance disputes can review the policy
          language and denial letter and advise on whether it&apos;s worth formally contesting.
          Many offer a free initial consultation, so it costs nothing to ask.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Keep everything organized</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The original application, the policy itself, the denial letter, and every piece of
            correspondence with the carrier all strengthen an appeal. Keep dated copies of
            everything, including notes from phone calls.
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
