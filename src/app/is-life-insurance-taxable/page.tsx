import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Is Life Insurance Taxable?",
  description:
    "The general federal tax rule for life insurance death benefits, a few well-established nuances, and why your specific situation still needs a tax professional.",
  openGraph: { title: "Is Life Insurance Taxable?", description: "The general federal tax rule for life insurance death benefits, a few well-established nuances, and why your specific situation still needs a tax professional." },

  twitter: { title: "Is Life Insurance Taxable?", description: "The general federal tax rule for life insurance death benefits, a few well-established nuances, and why your specific situation still needs a tax professional." },
};

export default function IsLifeInsuranceTaxablePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Is life insurance taxable?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This is one of the most common questions about life insurance, and the general answer
          is genuinely reassuring. Here&apos;s the well-established federal rule, a couple of
          nuances worth knowing, and why your own situation still deserves a conversation with a
          tax professional.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The general rule: death benefits are typically income-tax-free
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Under federal law, life insurance death benefits are generally received by the
          beneficiary free of federal income tax. This is one of the most well-established
          features of life insurance in the United States, and it&apos;s a large part of why the
          death benefit is such a reliable planning tool — in the ordinary case, the amount your
          beneficiary receives isn&apos;t reduced by federal income tax before or after it
          reaches them.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where interest can come into play
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          One well-known nuance involves timing. If a payout is delayed and the insurer holds
          the funds for a period before releasing them to the beneficiary, any interest that
          accrues during that time can be taxable, even though the underlying death benefit
          itself is not. In other words, the death benefit stays income-tax-free — it&apos;s
          specifically interest earned on top of it, during a delay, that can create a tax
          event.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Large estates are a separate question
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s a second, more specific nuance: for very large estates, the value of a
          life insurance policy can in some cases factor into estate tax considerations, separate
          from the income tax treatment discussed above. This generally only becomes relevant
          for a small share of estates, and it depends on federal (and sometimes state)
          thresholds and rules that can change over time — specific enough that this page
          won&apos;t attempt to state numbers that could be outdated or simply not apply to your
          situation.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">
            Talk to a tax professional about your specific situation
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The general rule above is well established and safe to rely on as a starting point,
            but taxes are personal by nature — your state, the size of any estate involved, how
            a policy is owned, and other individual factors can all matter. Before making
            decisions based on the tax treatment of a policy, talk with a qualified tax
            professional who can look at your specific situation directly.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
