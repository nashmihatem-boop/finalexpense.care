import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is a Beneficiary?",
  description:
    "Who can be named a life insurance beneficiary, the difference between primary and contingent beneficiaries, and why keeping this information current matters.",
  openGraph: { title: "What Is a Beneficiary?", description: "Who can be named a life insurance beneficiary, the difference between primary and contingent beneficiaries, and why keeping this information current matters." },

  twitter: { title: "What Is a Beneficiary?", description: "Who can be named a life insurance beneficiary, the difference between primary and contingent beneficiaries, and why keeping this information current matters." },
};

export default function WhatIsABeneficiaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a beneficiary?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A beneficiary is the person, people, or entity you name on your life insurance policy to
          receive the death benefit when you pass away. Naming a beneficiary is one of the
          simplest parts of applying for coverage, but it&apos;s also one of the most important —
          it determines exactly who your policy is actually going to help.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who can be a beneficiary
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most people name an individual — a spouse, adult child, or another family member — but
          that&apos;s not the only option. You can name more than one person and specify what
          percentage of the death benefit each one receives, so the payout doesn&apos;t have to be
          split evenly if that&apos;s not what you want. You can also name a trust as your
          beneficiary, which is common when there are more specific instructions for how the money
          should be managed or distributed, or you can name your estate — though that typically
          means the money passes through probate before it reaches anyone, which usually defeats
          the purpose of naming a person directly.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Primary vs. contingent beneficiaries
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A primary beneficiary is first in line to receive the death benefit. A contingent — or
          backup — beneficiary only receives it if every primary beneficiary is unable to, most
          often because they&apos;ve also passed away. Naming a contingent beneficiary isn&apos;t
          required, but it closes an important gap: without one, a death benefit that can&apos;t
          reach any named primary beneficiary typically defaults to your estate, which usually
          means the delay and cost of probate before your family sees any of it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why keeping this updated matters
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A beneficiary designation doesn&apos;t update itself when life changes. A marriage, a
          divorce, the birth of a child, or the death of a previously named beneficiary can all
          leave a policy pointing at the wrong person — or at no one at all — if it&apos;s never
          revisited. Insurers generally pay out exactly according to what&apos;s on file,
          regardless of what a will says or what your family assumes you would have wanted, which
          is why it&apos;s worth checking your beneficiary designation any time a major life event
          happens, not just when the policy is first issued. Updating it is usually a simple
          request to your insurance company or agent, and it doesn&apos;t require rewriting the
          policy itself.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Beneficiaries on a final expense policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          On a final expense policy, the beneficiary is usually the person expected to actually
          handle arrangements and costs after a death — often a spouse or adult child, though it
          doesn&apos;t have to be the same person named in a will or serving as executor. Naming
          that person specifically, rather than defaulting to &quot;my estate,&quot; is what allows
          the payout to reach them quickly and directly, without waiting on the broader estate
          process to conclude.
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
