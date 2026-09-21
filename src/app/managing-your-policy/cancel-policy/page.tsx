import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "What to Know Before You Cancel a Policy",
  description:
    "How canceling a life insurance policy works, what happens to any cash value, and what to check before you let coverage go.",
};

export default function CancelPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Cancel a Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What to know before you cancel a policy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Sometimes canceling is genuinely the right call. But because life insurance pricing is
          tied closely to your age, it&apos;s worth checking a few things first so canceling
          doesn&apos;t end up costing you more than it saves.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How canceling actually works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Canceling is usually as simple as contacting your carrier and requesting it, sometimes
          in writing, sometimes over the phone. If your policy has cash value, this is often
          called &quot;surrendering&quot; it instead. Either way, coverage ends as of a specific
          date, and you&apos;re not responsible for any premiums after that point.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens to cash value, if your policy has any
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A whole life policy that has accumulated cash value typically pays that value out to you
          when you surrender it, minus anything you owe — including an outstanding{" "}
          <Link href="/managing-your-policy/borrow-from-policy" className="text-harbor-mid underline">
            policy loan
          </Link>
          , if you have one. A term policy generally has no cash value to receive. Surrendered
          cash value can carry tax implications in some situations, so it&apos;s worth confirming
          the specifics with your carrier or a tax professional before you finalize anything.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other things worth checking first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Ask whether any balance or fees apply to the cancellation itself, and get the
          cancellation confirmed in writing or by email so there&apos;s no ambiguity later about
          the effective date. If anyone else — a spouse, adult child, or family member — is
          counting on this specific policy as part of their own planning, it&apos;s worth a
          conversation before you let it go.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">The big question to ask first</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Since pricing is generally based on your age — and sometimes health — at the time you
            apply, a new policy taken out later almost always costs more than your current one did
            when you first bought it, even if nothing about your health has changed. If
            you&apos;re canceling to replace this policy with something better, it&apos;s usually
            smarter to line up and confirm the new policy first, so you&apos;re never without
            coverage in between.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Have questions first?{" "}
            <a href={siteConfig.supportPhoneHref} className="font-semibold text-harbor-mid hover:underline">
              Call {siteConfig.supportPhoneDisplay}
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
