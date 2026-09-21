import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What to Expect When Planning a Funeral",
  description:
    "A step-by-step walkthrough of the funeral planning process and the decisions — and costs — involved at each stage.",
};

export default function WhatToExpectPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / What to Expect
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What to expect when you&apos;re planning a funeral
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          If you&apos;ve never had to do this before, the number of decisions can feel like a lot
          — often within a day or two of a loss. None of it has to be figured out alone, and none
          of it has to happen all at once. Here&apos;s the general sequence, and what&apos;s
          actually being decided, and paid for, at each step.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 1: Choosing a provider
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          When someone dies, the first practical step is getting them into the care of a funeral
          home or cremation provider. If hospice was involved, hospice staff will often help
          coordinate this first call. If a provider wasn&apos;t chosen in advance, you&apos;re
          free to call around before committing to one — you don&apos;t have to use the first,
          nearest, or most familiar name. Providers are required to give you pricing information
          over the phone if you ask, which makes a quick round of calls worth the time even under
          pressure.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 2: The arrangement conference
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is the meeting, usually in person at the funeral home, where most of the actual
          decisions get made. You&apos;ll be asked whether the family wants burial or cremation,
          what kind of service — a full traditional funeral with a viewing, a memorial service
          without the body present, a graveside-only service, or a direct disposition with no
          formal service — and you&apos;ll be walked through the funeral home&apos;s itemized
          price list. It&apos;s a lot to absorb at once, especially early in grief. It&apos;s
          completely reasonable to bring another family member along, take the price list home, or
          ask for a day to decide on anything that isn&apos;t time-sensitive.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 3: The choices that actually drive the cost
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A handful of decisions made in that meeting account for most of the final bill. The
          basic services fee is unavoidable — every provider charges it, and it covers their
          overhead and staff time regardless of what else you pick. From there: whether the body
          is embalmed or refrigerated (embalming is rarely legally required — a provider has to
          tell you when it actually is, versus when it&apos;s simply being offered), what casket
          or urn you select, and the disposition itself. If burial is chosen, the cemetery is a
          separate cost from a separate business — the plot, opening and closing the grave, and a
          marker typically aren&apos;t part of the funeral home&apos;s bill at all.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 4: Paperwork running alongside everything else
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          While arrangements are being made, there&apos;s a parallel track of logistics: ordering
          certified copies of the death certificate (usually worth getting more than you think
          you&apos;ll need, since banks, insurers, and government agencies each want their own
          original), writing an obituary, and filing the permits required to bury or cremate. Many
          funeral homes fold a good amount of this coordination into their basic services fee,
          which is worth asking about directly — it can save a genuinely stressful amount of
          running around.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 5: Getting a real number before you commit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Prices are set locally and individually by each provider, so the only way to know an
          actual total is to ask — in writing, itemized, before you sign anything. If time allows,
          a second quote from another provider is a reasonable thing to request. And if
          you&apos;re reading this ahead of an actual loss, to plan for your own family rather
          than in the middle of one, that&apos;s the ideal time to have this conversation: a
          current estimate from a local provider, with no pressure and no clock running.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the funeral cost guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
