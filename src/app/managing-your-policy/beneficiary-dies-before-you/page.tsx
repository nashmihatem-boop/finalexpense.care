import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "If Your Beneficiary Dies Before You",
  description:
    "What happens to your policy if your named beneficiary passes away first, and why naming a contingent beneficiary matters.",
  openGraph: { title: "If Your Beneficiary Dies Before You", description: "What happens to your policy if your named beneficiary passes away first, and why naming a contingent beneficiary matters." },

  twitter: { title: "If Your Beneficiary Dies Before You", description: "What happens to your policy if your named beneficiary passes away first, and why naming a contingent beneficiary matters." },
};

export default function BeneficiaryDiesBeforeYouPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / If Your Beneficiary Dies Before You
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          If your named beneficiary dies before you do
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          It happens more often than people expect, especially on policies that have been in
          force for many years — a spouse, sibling, or friend named as beneficiary passes away
          first, and the policy is never updated. Here&apos;s what that actually means, and what
          to do about it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Your policy doesn&apos;t update itself
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers don&apos;t automatically remove or replace a beneficiary who has died. Your
          policy continues to legally list that person until you take action to change it, no
          matter how much time passes. Nothing about the coverage itself is affected in the
          meantime — the issue only surfaces later, when a claim is eventually filed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What typically happens if it&apos;s never updated
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you named a contingent (backup) beneficiary when you applied, the death benefit
          generally passes to them instead, without much complication. If you didn&apos;t name a
          contingent beneficiary, and your primary beneficiary has already died, the death benefit
          often ends up being paid to your estate rather than to a specific person. That usually
          means it has to pass through probate — a court process that can take longer, becomes
          part of the public record, and in some cases can be reached by the estate&apos;s
          creditors before family sees any of it. The exact outcome depends on your policy and
          state, so it&apos;s worth confirming directly with your carrier rather than assuming.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why a contingent beneficiary matters
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Naming a contingent beneficiary costs nothing extra and takes just a few minutes, but it
          gives your policy a clear second choice if your first choice is no longer living when
          you pass away. It&apos;s one of the simplest ways to keep the payout headed toward an
          actual person you chose, instead of defaulting to your estate.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">How to check</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Call your carrier and ask who is currently listed as your primary and contingent
            beneficiary. There&apos;s no cost or downside to checking, even if you&apos;re fairly
            sure everything is up to date. If it isn&apos;t, updating it is a straightforward form
            — see{" "}
            <Link href="/managing-your-policy/change-beneficiary" className="text-harbor-mid underline">
              how to change your beneficiary
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other times it&apos;s worth a check
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A beneficiary&apos;s death is only one reason a policy can fall out of date. Divorce, a
          new marriage, a new child or grandchild, or simply growing apart from the person
          originally named are all common reasons people revisit who&apos;s listed. If it&apos;s
          been several years since you looked, it&apos;s a reasonable thing to confirm.
        </p>

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
