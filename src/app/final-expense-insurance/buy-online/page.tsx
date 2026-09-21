import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Can You Buy Final Expense Insurance Online?",
  description:
    "What getting a quote online actually involves for final expense insurance, and why a phone call with a licensed agent is still part of the process.",
};

export default function BuyOnlinePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Buying Online
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What &quot;getting a quote online&quot; actually means
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Sites like this one let you start the process from your phone or computer, and
          that&apos;s genuinely useful — but it helps to know exactly what that step does, and
          what still happens the old-fashioned way, before you begin.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What an online quote actually does
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Filling out a form like ours collects the basics — your age, a general sense of your
          health, your state, the coverage amount you&apos;re considering, and how to reach you.
          That information gets matched against carrier eligibility criteria so the options you
          hear about are realistic ones, not a generic list. It&apos;s a genuine head start
          compared to cold-calling one company at a time, but it&apos;s the beginning of the
          process, not the end of it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why a phone call is still part of the process
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified-issue underwriting requires actually answering a specific set of health
          questions, and getting those answers right matters. A licensed agent asking them live
          can catch details a static web form can&apos;t — an exact diagnosis date, whether a
          medication was for a one-time issue, or a follow-up question a form would never think to
          ask — which protects you from an answer being recorded in a way that could cause a
          problem for a claim later. In most states, a licensed agent is also required to actually
          bind and issue the policy. For this particular product, no online tool fully replaces
          that step.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What online tools are genuinely good for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Comparing potential options across multiple carriers quickly, narrowing down which
          carriers are worth pursuing before you ever pick up the phone, and starting on your own
          schedule instead of waiting for business hours — that&apos;s where online tools
          genuinely speed things up. Think of it as doing the legwork in advance, so the call that
          follows is shorter and more useful.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens after you submit a quote request
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A licensed agent follows up to review your answers, confirm the details, and walk
          through real, personalized options rather than a generic estimate. There&apos;s no cost
          to get this information and no obligation to move forward on that call — you&apos;re
          free to hear the numbers and decide later, or not at all.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/biggest-mistakes" className="font-semibold text-harbor-mid hover:underline">
              Before you apply: common mistakes to avoid →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
