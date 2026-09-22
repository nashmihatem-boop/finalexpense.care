import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Affects Cemetery Plot Cost",
  description:
    "The factors that drive cemetery plot pricing — location, cemetery type, and fees like perpetual care — and how to get a real number.",
  openGraph: { title: "What Affects Cemetery Plot Cost", description: "The factors that drive cemetery plot pricing — location, cemetery type, and fees like perpetual care — and how to get a real number." },

  twitter: { title: "What Affects Cemetery Plot Cost", description: "The factors that drive cemetery plot pricing — location, cemetery type, and fees like perpetual care — and how to get a real number." },
};

export default function CemeteryPlotCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Cemetery Plot Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What affects the cost of a cemetery plot
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A cemetery plot is priced separately from anything a funeral home charges, by a
          completely different business with its own rules. Here&apos;s what actually moves that
          price, so you know what to ask when you call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Location is the biggest factor
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cemetery pricing follows real estate logic more than anything else. Land in or near a
          dense metro area is scarcer and more expensive than land in a small town or rural
          county, and that difference shows up directly in plot prices. Even within the same city,
          an older, established cemetery with limited remaining space can price very differently
          than a newer cemetery on the edge of town with more room to sell.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Public, religious, and private cemeteries price differently
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A municipal or county-owned cemetery sometimes offers lower rates, particularly for
          residents of that town or county. A religious or fraternal cemetery may reserve space
          for members of that faith or organization, often at its own separate rate. Privately
          owned and corporate cemeteries set their own market pricing and frequently tier it
          further within the property itself — a section with mature trees, a water feature, or a
          spot along the main path can carry a premium over a standard section, the same way a
          better lot commands more in any real estate market.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What you&apos;re actually buying
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Buying a plot buys the right to use that specific space for burial — an interment right
          — not the land itself in the way a home is owned. Separate from the plot price, nearly
          every cemetery also charges an opening-and-closing fee: the physical work of digging the
          grave before the service and closing it afterward. It&apos;s easy to budget for the plot
          and forget this second line item, so ask for it specifically when comparing prices.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Perpetual care — ask about this directly
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many cemeteries charge, or build into the plot price, a perpetual — or endowment — care
          fee that funds long-term maintenance of the grounds: mowing, upkeep of roads and
          irrigation, and the general appearance of the property for as long as it operates. A
          number of states actually require cemeteries to maintain a perpetual care fund. What
          varies is whether that fee is already folded into the price you&apos;re quoted or billed
          separately, and that&apos;s a common source of confusion when comparing two
          cemeteries&apos; prices side by side.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Getting an accurate number</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Because none of this is standardized, the only reliable way to know actual cost is to
            contact cemeteries in the area directly, and ask specifically whether the quote
            includes opening and closing and perpetual care, or whether those come on top. That
            full total, not just the headline plot price, is the number worth building into how
            you size coverage alongside everything else a funeral involves.
          </p>
        </div>

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
