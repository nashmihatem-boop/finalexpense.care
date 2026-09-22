import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is Direct Cremation?",
  description:
    "How direct cremation works, why it's generally the least expensive disposition option, and how families pair it with a memorial service on their own timeline.",
  openGraph: { title: "What Is Direct Cremation?", description: "How direct cremation works, why it's generally the least expensive disposition option, and how families pair it with a memorial service on their own timeline." },

  twitter: { title: "What Is Direct Cremation?", description: "How direct cremation works, why it's generally the least expensive disposition option, and how families pair it with a memorial service on their own timeline." },
};

export default function DirectCremationPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Direct Cremation
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What direct cremation actually means
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Direct cremation is a specific, well-defined choice: cremation without a viewing,
          visitation, or funeral service beforehand. It&apos;s generally the simplest and least
          expensive disposition category available, largely because of what it leaves out rather
          than because anything is cut short. Here&apos;s what&apos;s actually included, why it
          tends to cost less, and how families often build a separate memorial around it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What&apos;s included — and what isn&apos;t
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          With direct cremation, a provider transports the deceased, files the required permits,
          performs the cremation, and returns the cremated remains to the family, typically in a
          basic container unless you choose a separate urn. What it leaves out is everything tied
          to a traditional service beforehand: no embalming, which isn&apos;t required for
          cremation in most circumstances, no viewing or visitation, and no formal casket, since a
          simple, less expensive alternative container is used instead.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it tends to cost less
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cost in this industry largely comes down to how many line items are involved, and
          direct cremation simply has fewer of them. There&apos;s no embalming, no casket to
          purchase, and no staffing or facility time for a viewing or service. That doesn&apos;t
          mean every direct cremation is priced the same, though — it still varies by provider and
          by region, which is exactly why it&apos;s worth getting an itemized quote from a local
          provider rather than assuming a number.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Pairing it with a memorial later
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Choosing direct cremation doesn&apos;t mean skipping a gathering altogether — it just
          separates disposition from the service. Many families hold a memorial or celebration of
          life afterward, on their own schedule, somewhere that means something to them rather
          than a funeral home chapel: a backyard, a place of worship, a favorite restaurant, a
          park. That flexibility also gives out-of-town family and friends more time to travel in,
          and it lets the family shape the event around remembrance instead of a fixed format.
          Cremated remains can be present at that gathering, or the family can decide separately
          whether to keep, scatter, or inter them.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Not the only option — just the simplest one</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Direct cremation isn&apos;t the right fit for every family. Some traditions and
            personal wishes call for a viewing or service with the body present beforehand, which
            is a different arrangement with its own cost factors — see how{" "}
            <Link href="/funeral-cost/cremation-cost" className="font-semibold text-harbor-mid hover:underline">
              cremation pricing shifts once a viewing or service is added
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Is it the right fit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The honest answer depends on what matters most: simplicity and a lower cost, or having
          a body present for a traditional service beforehand. Neither is more correct than the
          other. What matters practically is making sure whichever path you lean toward is
          reflected in your final expense coverage and communicated to whoever will be handling
          arrangements, so your wishes are honored without anyone having to guess.
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
