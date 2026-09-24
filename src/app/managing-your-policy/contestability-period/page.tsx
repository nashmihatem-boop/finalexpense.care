import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Life Insurance Contestability Period, Explained",
  description:
    "What the standard two-year contestability period means, why it exists, and how it differs from a graded or modified waiting period.",
  openGraph: { title: "The Life Insurance Contestability Period, Explained", description: "What the standard two-year contestability period means, why it exists, and how it differs from a graded or modified waiting period." },

  twitter: { title: "The Life Insurance Contestability Period, Explained", description: "What the standard two-year contestability period means, why it exists, and how it differs from a graded or modified waiting period." },
};

export default function ContestabilityPeriodPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / The Contestability Period
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Understanding the two-year contestability period
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          &quot;Two years&quot; comes up a lot in life insurance, and it doesn&apos;t always mean
          the same thing. The contestability period is one specific version of it — standard
          across the industry, not something to be alarmed by, but worth actually understanding.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What it actually is
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The contestability period is a standard window — typically the first two years a policy
          is in force — during which the carrier has the right to review a claim closely and
          verify that the original application was accurate before paying it out. After that
          window passes, the policy is generally considered &quot;incontestable&quot; on those
          grounds for most situations, though outright fraud usually remains an exception
          regardless of how much time has passed. Confirm the specifics with your carrier, since
          exact terms are set by your policy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it exists
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It protects the cost structure that keeps insurance affordable for everyone. If someone
          misrepresented their health to get coverage they wouldn&apos;t have otherwise qualified
          for, the contestability period is the carrier&apos;s window to catch that before a large
          payout goes out — which keeps premiums fair for the vast majority of applicants who
          answered honestly in the first place.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What can trigger a closer look
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A death within the contestability window, particularly from a cause connected to a
          health condition that wasn&apos;t disclosed on the application, is what typically
          prompts a closer review. A closer look isn&apos;t the same as a denial — it simply means
          the carrier is confirming the application matches medical and prescription records
          before releasing payment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Not the same as a graded or modified waiting period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These two &quot;two-year&quot; concepts get confused often enough that it&apos;s worth
          spelling out the difference directly.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Concept</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">What it governs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Contestability period</td>
                <td className="px-5 py-4 text-sm text-charcoal">
                  The carrier&apos;s right to review a claim for misrepresentation. Applies broadly, regardless of underwriting type.
                </td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Graded, modified, or guaranteed-acceptance wait</td>
                <td className="px-5 py-4 text-sm text-charcoal">
                  How much of the death benefit is paid for a natural-cause death in the early years, set at the time you&apos;re underwritten.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If a health condition is part of what you&apos;re weighing, our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          covers how graded and modified benefit schedules work in more detail.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Innocent mistakes vs. misrepresentation</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A review during the contestability period is generally looking for material
            misrepresentation — an answer that would have actually changed the underwriting
            decision — not minor paperwork inconsistencies. If your policy is past its second
            anniversary, this generally isn&apos;t something to worry about going forward.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Shopping for a new policy?{" "}
            <a href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              See what you qualify for →
            </a>
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
