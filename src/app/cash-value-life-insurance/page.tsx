import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is Cash Value in Life Insurance?",
  description:
    "How cash value builds inside a whole life or final expense policy, who it belongs to, and how it's different from the death benefit.",
  openGraph: { title: "What Is Cash Value in Life Insurance?", description: "How cash value builds inside a whole life or final expense policy, who it belongs to, and how it's different from the death benefit." },

  twitter: { title: "What Is Cash Value in Life Insurance?", description: "How cash value builds inside a whole life or final expense policy, who it belongs to, and how it's different from the death benefit." },
};

export default function CashValueLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is cash value in a life insurance policy?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Cash value is one of the more misunderstood features of a whole life or final expense
          policy — mixed up, understandably, with the death benefit itself. They&apos;re
          related, but they&apos;re not the same thing.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cash value vs. the death benefit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The death benefit is the amount your beneficiary receives when you pass away —
          that&apos;s the core purpose of the policy. Cash value is a separate, internal
          component that only exists in whole life-style policies, final expense insurance
          included, and that you, the policyholder, can potentially access while you&apos;re
          still alive. Term life insurance, by contrast, generally doesn&apos;t build any cash
          value at all — it&apos;s coverage for a set period with no savings-like component
          attached.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it builds
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cash value starts at or near zero and grows slowly, year over year, as a small portion
          of each premium payment is set aside and credited to it. It&apos;s a gradual mechanism
          by design, not a fast-growing account — the early years typically add up slowly, with
          the balance building more noticeably over a longer stretch of time. Exactly how it
          grows depends on the specific policy&apos;s terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What you can do with it while you&apos;re alive
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because cash value belongs to you as the policyholder, it&apos;s generally something
          you can access while the policy is in force — commonly by borrowing against it, and in
          some cases using it to help cover a premium payment if needed. The specifics of how
          borrowing against a policy works, and what it means for your coverage afterward, are
          worth understanding in detail before you rely on it, and an agent can walk through
          exactly how it would work on your policy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens to it when you pass away
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is the part that trips people up: in most standard cash value policies,
          what&apos;s paid to your beneficiary is the policy&apos;s stated death benefit — not
          the death benefit plus whatever cash value had built up on top of it. Cash value is a
          living benefit, meant to be used or accessed while you&apos;re alive, rather than an
          extra sum stacked onto the payout after you&apos;re gone. It&apos;s a different concept
          from the death benefit, serving a different purpose, even though both live inside the
          same policy.
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
