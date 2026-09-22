import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Financial Assistance for Funeral Costs",
  description:
    "The real categories of help available when a family can't cover a funeral — and why having final expense coverage in place means you never have to rely on them.",
  openGraph: { title: "Financial Assistance for Funeral Costs", description: "The real categories of help available when a family can't cover a funeral — and why having final expense coverage in place means you never have to rely on them." },

  twitter: { title: "Financial Assistance for Funeral Costs", description: "The real categories of help available when a family can't cover a funeral — and why having final expense coverage in place means you never have to rely on them." },
};

export default function FuneralFinancialAssistancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Financial Assistance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Help paying for a funeral when money is tight
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          When a death happens without final expense coverage already in place, families are
          often left scrambling to cover a bill that can&apos;t wait. Real help does exist for
          some situations — but it&apos;s narrower, slower, and less certain than most people
          expect. Here&apos;s what&apos;s actually out there, and why the honest point of this
          guide is that coverage arranged ahead of time is what keeps a family from needing any
          of it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          When a death was accidental or the result of a crime
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state runs its own crime victim compensation program, and most will cover funeral
          expenses, up to a set limit, when a death resulted from a violent crime. Some states
          extend similar help to certain accidental deaths through separate funds. These programs
          are real and worth pursuing when they apply, but they come with real limits: you
          typically need a police report on file, have to apply within a defined window after the
          death, and then wait through a claims process that can take weeks or months. They were
          built for specific circumstances, not as a general safety net for funeral costs.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Crowdfunding
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Online fundraising has become a common way families try to close the gap quickly, and
          it can genuinely help. It also comes with trade-offs worth knowing before you start one:
          platforms typically take a processing fee out of what&apos;s raised, the amount that
          actually comes in is unpredictable and often falls short of the goal, and campaigns
          usually take days to gain momentum — time a family facing an immediate bill may not
          have. It also means asking your community for money during one of the hardest weeks of
          your life, which carries its own emotional weight on top of the loss itself.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Payment plans through the funeral home
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many funeral homes will let a family pay over time instead of all at once, either
          directly or through a third-party financing arrangement. This can make an immediate
          bill manageable, but it&apos;s worth being clear about what it actually does: it spreads
          the cost out, it doesn&apos;t reduce it, and financing arrangements often carry interest
          on top. A payment plan solves a timing problem, not a cost problem — the family still
          owes the full amount, now with monthly payments attached during a period that&apos;s
          already difficult.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">A modest federal benefit</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Social Security pays a one-time lump-sum payment to certain eligible survivors —
            typically a spouse who was living with the deceased, or in some cases an eligible
            child. It&apos;s a real, federal program, but an intentionally modest one: the payment
            has stayed fixed for a long stretch of time and was never designed to cover a funeral
            on its own, just to help with immediate costs. Because it&apos;s a government-set
            figure that can change, the Social Security Administration is the right place to
            confirm current eligibility rules and amount for a given family.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What this list is really telling you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Look at the pattern across everything above: each option depends on specific
          circumstances, requires an application and a wait, or simply shifts the bill into the
          future instead of covering it. None of it is something you can count on before you need
          it — it&apos;s what&apos;s left to reach for when there wasn&apos;t a plan in place. A
          final expense policy works differently. It&apos;s arranged in advance, it pays directly
          to whoever you name as beneficiary, generally within days of an approved claim, and it
          doesn&apos;t depend on how the death happened or whether a fundraiser catches on.
          That&apos;s the real value in having it — not that it&apos;s the only source of help out
          there, but that it&apos;s the one your family can count on no matter the circumstances.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
