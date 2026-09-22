import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Change Your Life Insurance Beneficiary",
  description:
    "How updating a policy's beneficiary works, and the common life events that lead people to do it.",
  openGraph: { title: "How to Change Your Life Insurance Beneficiary", description: "How updating a policy's beneficiary works, and the common life events that lead people to do it." },

  twitter: { title: "How to Change Your Life Insurance Beneficiary", description: "How updating a policy's beneficiary works, and the common life events that lead people to do it." },
};

export default function ChangeBeneficiaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Change Your Beneficiary
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to change your policy&apos;s beneficiary
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Updating a beneficiary is simpler than most people expect — it doesn&apos;t touch your
          coverage, your premium, or any other part of the policy. It&apos;s just a matter of
          telling your carrier who you actually want listed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          It&apos;s a form, not a new policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Changing a beneficiary is normally handled with a beneficiary-change form, submitted on
          paper or through your carrier&apos;s online portal if they offer one. Once it&apos;s
          processed, everything else about your policy — coverage amount, premium, terms — stays
          exactly the same. There&apos;s no need to reapply or go through underwriting again.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Primary vs. contingent beneficiaries
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your primary beneficiary is who receives the death benefit first. A contingent
          beneficiary is the backup, who receives it only if the primary beneficiary has already
          died. If you&apos;re updating one, it&apos;s worth reviewing both at the same time — see{" "}
          <Link href="/managing-your-policy/beneficiary-dies-before-you" className="text-harbor-mid underline">
            what happens if a beneficiary dies before you do
          </Link>{" "}
          for why the contingent choice matters.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Common reasons people update it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Divorce or remarriage, the death of the person currently listed, the arrival of a new
          child or grandchild, or simply a change in who you want to receive the benefit are the
          most common triggers. Some people also update it years after originally naming a parent
          who has since passed away, shifting the benefit to a spouse or child instead.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A note on ex-spouses</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Some states have laws that automatically revoke an ex-spouse&apos;s beneficiary status
            after a divorce, but this varies and isn&apos;t something to rely on. If you want an
            ex-spouse removed — or, in some cases, intentionally kept — submitting a
            beneficiary-change form yourself is the reliable way to make sure the policy actually
            reflects your wishes.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How often to review it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no fixed schedule. Tying a review to major life events, or simply checking
          every few years, is a reasonable habit that only takes a few minutes with your carrier.
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
