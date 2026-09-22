import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance Riders, Explained",
  description:
    "What a rider is, how it attaches to a base policy, and a few common examples like accelerated death benefit and waiver-of-premium riders.",
  openGraph: { title: "Life Insurance Riders, Explained", description: "What a rider is, how it attaches to a base policy, and a few common examples like accelerated death benefit and waiver-of-premium riders." },

  twitter: { title: "Life Insurance Riders, Explained", description: "What a rider is, how it attaches to a base policy, and a few common examples like accelerated death benefit and waiver-of-premium riders." },
};

export default function LifeInsuranceRidersPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a life insurance rider?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A rider is an optional add-on to a base life insurance policy — something that changes
          or extends your coverage beyond what the standard policy provides on its own. Here are
          a few of the more common ones, described generally.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The basic idea
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Think of your base policy as the core contract: a death benefit, a premium, and the
          standard terms that come with it. A rider attaches to that base policy and adds
          something to it — extra flexibility, an additional benefit, or a modification to how
          the policy behaves in a specific situation. Some riders come at an additional cost,
          while others are included depending on the policy. Either way, they&apos;re optional:
          you choose whether to include one when you apply, and in some cases you can add one
          later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Accelerated death benefit (living benefit) riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is one of the more commonly known riders. It allows the policyholder to access a
          portion of their own death benefit while they&apos;re still alive, if they&apos;re
          diagnosed with a qualifying terminal illness — money meant to help with costs during
          that time, rather than only reaching a beneficiary after death. Whatever amount is
          accessed this way is generally subtracted from what&apos;s left to pay out as the
          death benefit later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Waiver-of-premium riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This rider addresses a different problem: staying covered if you become seriously ill
          or disabled in a way that makes it hard to keep paying. If you qualify, a
          waiver-of-premium rider suspends the requirement to pay premiums for a period, while
          keeping the policy fully in force — coverage continues even though payment has paused.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Riders for a child
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some base policies also offer a rider that adds a modest amount of coverage for a
          policyholder&apos;s child, without requiring a completely separate policy. It&apos;s a
          smaller, simpler version of the kind of{" "}
          <Link href="/life-insurance-for-children" className="font-semibold text-harbor-mid hover:underline">
            standalone children&apos;s coverage
          </Link>{" "}
          described elsewhere on this site, bundled into a parent&apos;s existing policy
          instead.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it&apos;s worth asking about
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Riders vary a good deal from policy to policy and carrier to carrier — what&apos;s
          automatically included, what costs extra, and what you actually qualify for. Asking
          specifically what riders are available, and what each one would mean for your
          premium, is a reasonable question to bring to an agent before you apply, not something
          to discover after the fact.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
