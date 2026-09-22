import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "What Happens If You Miss a Premium Payment",
  description:
    "How grace periods work, what happens if a policy lapses, and what to do if you've missed a payment.",
  openGraph: { title: "What Happens If You Miss a Premium Payment", description: "How grace periods work, what happens if a policy lapses, and what to do if you've missed a payment." },

  twitter: { title: "What Happens If You Miss a Premium Payment", description: "How grace periods work, what happens if a policy lapses, and what to do if you've missed a payment." },
};

export default function MissedPremiumPaymentPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Missed Premium Payment
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What happens if you miss a premium payment
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A missed payment is common, and it usually isn&apos;t an emergency the moment it
          happens. Life insurance policies build in a cushion for exactly this situation —
          here&apos;s how it typically works, and what to do if it&apos;s happened to you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The grace period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most policies include a grace period that starts after a missed due date — a window
          during which your coverage generally stays fully in force even though the payment
          hasn&apos;t been made yet. The exact length is set by your policy and state, so check
          your policy documents or ask your carrier for your specific grace period rather than
          assuming a number.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If a death occurs during the grace period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Coverage is generally still considered active during the grace period, so a claim is
          typically still payable. In most cases the outstanding premium is simply deducted from
          the death benefit rather than causing a denial. Confirm this detail with your specific
          carrier, since it&apos;s written into your policy&apos;s actual terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If the grace period passes with no payment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Once the grace period ends without payment, the policy generally lapses — meaning
          coverage ends and premiums are no longer being collected. This is the outcome worth
          avoiding, since a lapse can mean starting over on new coverage later, often at a higher
          cost simply because of age.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If your policy has already lapsed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many carriers offer reinstatement within a certain window after a lapse, though it can
          require paying back premiums, answering new health questions, or providing proof of
          insurability — ask your carrier directly what reinstatement would require for your
          policy. If reinstatement isn&apos;t available, or your health has changed enough that it
          no longer makes sense, looking at a new policy may be the more practical path forward.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">To avoid it happening again</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Setting up autopay, keeping your payment method current after a card expires or a bank
            account changes, and making sure your carrier has an up-to-date mailing address and
            phone number all reduce the odds of a payment slipping through unnoticed.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            If your policy lapsed and reinstatement isn&apos;t the right fit,{" "}
            <Link href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              see what you qualify for →
            </Link>
          </p>
          <p className="mt-3 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
