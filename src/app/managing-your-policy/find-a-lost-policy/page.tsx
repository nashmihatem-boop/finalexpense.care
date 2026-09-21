import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Find a Lost Life Insurance Policy",
  description:
    "Practical steps for tracking down a policy you believe exists but can't find paperwork for, including free lookup resources.",
};

export default function FindALostPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Find a Lost Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Finding a policy you can&apos;t locate paperwork for
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whether you&apos;ve misplaced your own policy documents or you believe a family member
          had coverage but can&apos;t find proof, there are concrete places to look before
          assuming a policy doesn&apos;t exist.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Start with financial records
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Bank and checking account statements are often the fastest lead — look for a recurring
          withdrawal to an insurance carrier, especially one that shows up monthly, quarterly, or
          annually. Also check for canceled checks, credit card statements, a filing cabinet, or a
          safe deposit box, all common places people keep policy paperwork.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check email and mail
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers typically send annual statements, premium due notices, or policy anniversary
          letters. Search email for the carrier&apos;s name if you have any idea who it might be,
          or general terms like &quot;premium,&quot; &quot;policy,&quot; or
          &quot;statement.&quot; Physical mail piles and old filing folders are worth a look too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Ask their agent, if you know who it was
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you know which agent or agency originally sold the policy, reach out — agencies often
          keep records well beyond the sale date and may be able to confirm a policy exists even
          if you can&apos;t find your own copy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Consider employer coverage too
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If the person worked full-time, it&apos;s worth checking whether an employer offered
          group or supplemental life insurance. That&apos;s a different category of coverage from
          an individually owned final expense policy, but it&apos;s a common source people forget
          to check.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check your state&apos;s unclaimed property office
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state maintains an unclaimed property database, and life insurance proceeds can
          end up there if a carrier was ever unable to locate a beneficiary. Search &quot;[your
          state] unclaimed property&quot; to find your state&apos;s official lookup tool —
          it&apos;s free, and worth checking under every name and past address the person used.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Try the NAIC&apos;s policy locator service
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The National Association of Insurance Commissioners (NAIC) — the organization that
          coordinates state insurance regulators — runs a free life insurance policy locator
          service. You submit a request with some basic information about the person, and
          it&apos;s forwarded to participating carriers to check for a matching policy. It&apos;s
          a legitimate, no-cost resource built specifically for this situation.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A note on patience</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Finding a lost policy often takes checking several of these sources together rather
            than one lookup solving it immediately. It&apos;s frustrating, but it&apos;s rarely a
            dead end — keep working down the list.
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
