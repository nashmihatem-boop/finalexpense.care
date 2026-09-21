import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to File a Death Benefit Claim",
  description:
    "The general steps a beneficiary takes to file a life insurance claim, from locating the policy to submitting paperwork.",
};

export default function HowToFileAClaimPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / How to File a Claim
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to file a death benefit claim
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          If you&apos;re reading this because you&apos;ve lost someone, we&apos;re sorry. This
          process is more paperwork than complexity — here are the general steps, laid out
          plainly, so you know what to expect.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          1. Locate the policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Look for the actual policy document, a declarations page, or a recent premium statement
          — these usually list the carrier&apos;s name and a policy number, which speeds
          everything up. If you can&apos;t find any of that, our{" "}
          <Link href="/managing-your-policy/find-a-lost-policy" className="text-harbor-mid underline">
            guide to finding a lost policy
          </Link>{" "}
          walks through where else to look.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          2. Contact the carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Call the insurance carrier&apos;s claims department directly and let them know you need
          to file a death benefit claim. Having the policy number ready helps, but most carriers
          can still look up a policy using the deceased&apos;s name and date of birth if you
          don&apos;t have it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          3. Get and complete the claim form
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The carrier will send you their specific claim form, either by mail or as a download. It
          typically asks for information about the deceased, the beneficiary&apos;s contact and
          identification details, and how you&apos;d like the benefit paid out. Fill it out
          completely — an incomplete form is one of the most common reasons a claim takes longer
          than it needs to.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          4. Provide a certified death certificate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers generally require a certified copy of the death certificate — one with an
          official raised seal or equivalent from the issuing office, not a photocopy. Funeral
          homes typically help order these, and it&apos;s usually worth requesting several
          certified copies up front, since other institutions (banks, other policies, the estate)
          often need their own original as well.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          5. Submit and wait for review
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Once everything is submitted, the carrier reviews the claim before paying it out. They
          may follow up with additional questions, particularly if the policy is still within its{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period
          </Link>{" "}
          or if the cause of death needs clarification. Responding promptly to any request keeps
          things moving.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Can&apos;t find the policy at all?</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            That doesn&apos;t mean it doesn&apos;t exist. See our{" "}
            <Link href="/managing-your-policy/find-a-lost-policy" className="text-harbor-mid underline">
              guide to finding a lost policy
            </Link>{" "}
            for where to look next.
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
