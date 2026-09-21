import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Affects the Cost of Cremation",
  description:
    "The real factors that move cremation pricing up or down — service type, urn choice, and provider — and how to get an accurate number for your area.",
};

export default function CremationCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Cremation Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What actually drives the cost of cremation
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Cremation pricing varies widely from one provider and one region to the next, which
          makes any single published number close to meaningless. What&apos;s more useful is
          understanding the specific factors that push a cremation toward the simple, lower end
          or the more involved, higher end — so you know what to ask when you call a local
          provider.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Direct cremation vs. cremation with a viewing or service first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is the single biggest factor. Direct cremation, with no viewing or service
          beforehand, sits at the simple end, since it skips embalming, a viewing-ready casket,
          and staffed service time. Adding a viewing or a full service before cremation brings
          several of those items back: embalming, use of a viewing or chapel space, staff time to
          coordinate it, and often a casket suited for a viewing, sometimes a rental unit built
          for that purpose. Each addition is its own line item, which is why the word
          &quot;cremation&quot; alone can describe very different bills. If you want a simpler
          starting point, see how{" "}
          <Link href="/funeral-cost/direct-cremation" className="font-semibold text-harbor-mid hover:underline">
            direct cremation
          </Link>{" "}
          works on its own.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Urn choice
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A provider will typically include a basic container as part of cremation, but many
          families choose to purchase a separate urn, and that choice has its own range. Material
          and craftsmanship drive it, much the way they drive{" "}
          <Link href="/funeral-cost/casket-cost" className="font-semibold text-harbor-mid hover:underline">
            casket pricing
          </Link>
          : simple options sit at the low end, while wood, metal, ceramic, or custom-engraved
          urns cost more as material quality and detail increase. Families aren&apos;t limited to
          what a provider offers on-site, either — a container purchased elsewhere works just as
          well for holding, transporting, or scattering remains.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral home vs. a standalone crematory
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some funeral homes operate their own crematory; many others contract with a separate,
          standalone crematory to actually perform the cremation. When a family wants disposition
          only, without any of the services a full-service funeral home provides, working
          directly with a cremation-focused provider is often the more straightforward and
          lower-cost path. A full-service funeral home may build facility and staffing costs into
          the price even when a service isn&apos;t part of the plan.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other line items that can add up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A few smaller factors are easy to overlook until they show up on a bill: the number of
          certified death certificate copies you order, often needed for banks, insurers, and
          other paperwork; transportation if the death occurred somewhere other than where the
          cremation takes place; required permits and filing fees; and optional extras like
          keepsake jewelry or dividing remains into several small urns for different family
          members.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Ask for it in writing</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A reputable provider will give you an itemized price list on request, before you
            commit to anything. Comparing that written list against what you actually want,
            rather than a bundled package, is the clearest way to see where your money is going
            and where you have room to simplify.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The number that actually matters is the one from your provider
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every factor above moves in a different direction depending on where you live and which
          provider you call, which is exactly why this guide won&apos;t hand you a figure —
          anything published here would be wrong for a meaningful share of readers the moment
          local prices shifted. The reliable move is to call a provider or two in your area, ask
          for an itemized quote, and use that real number to size a final expense policy that
          covers it with a reasonable cushion left over.
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
