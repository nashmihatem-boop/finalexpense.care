import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Affects the Cost of a Casket",
  description:
    "Why casket prices vary so much — material and craftsmanship — and your legal right to buy one from outside the funeral home.",
  openGraph: { title: "What Affects the Cost of a Casket", description: "Why casket prices vary so much — material and craftsmanship — and your legal right to buy one from outside the funeral home." },

  twitter: { title: "What Affects the Cost of a Casket", description: "Why casket prices vary so much — material and craftsmanship — and your legal right to buy one from outside the funeral home." },
};

export default function CasketCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Casket Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What actually drives the cost of a casket
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Caskets span an enormous price range, and the reasons come down to a short list of
          concrete factors — mainly material and craftsmanship — rather than anything mysterious.
          Consumers also have more control over this specific line item than a lot of people
          realize, thanks to a federal rule worth knowing before you shop.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Material
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Material is the biggest driver of price. Solid hardwoods and heavier-gauge metals,
          including bronze or copper on the higher end, sit at the top of the range. Lighter-gauge
          steel and veneered wood sit in the middle. Simpler options, including cloth-covered wood
          or fiberboard and other minimalist alternatives, sit at the lower end, and they&apos;re
          entirely appropriate choices, not a compromise.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Craftsmanship and finish
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Beyond raw material, a casket is priced much like furniture. Interior fabric and
          construction quality, hardware, joinery, and finish work all add cost as they increase
          in detail and labor. Two caskets built from a similar base material can still land at
          very different price points once craftsmanship and finish are factored in.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Your legal right to buy elsewhere
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Under the FTC&apos;s Funeral Rule — a federal consumer-protection regulation — you have
          the right to buy a casket from a third party, including online, instead of only through
          the funeral home handling arrangements. The funeral home is required to accept it, and
          it cannot charge a handling fee or otherwise penalize you for using a casket bought
          elsewhere. For a family that wants to manage this specific cost directly, that right can
          make a real difference.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">The Funeral Rule, in practice</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A funeral home has to let you supply your own casket and can&apos;t add a fee for it.
            If you&apos;re quoted a &quot;casket handling charge&quot; for an outside casket,
            that&apos;s worth questioning directly — it isn&apos;t allowed under the rule.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Renting a casket for a viewing before cremation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Families who want a viewing before{" "}
          <Link href="/funeral-cost/direct-cremation" className="font-semibold text-harbor-mid hover:underline">
            cremation
          </Link>{" "}
          but don&apos;t want to purchase a casket outright often have another option: a rental
          casket built for that purpose, paired with a separate container used for the cremation
          itself. It&apos;s a middle path worth asking about if a traditional-feeling viewing
          matters to you even though cost or your disposition plans point toward cremation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Getting a real number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because material, craftsmanship, and even regional market pricing all move
          independently of each other, the only accurate number is one quoted directly by a
          provider, or a third-party seller, for the specific casket you&apos;re considering. Once
          you have that figure, or even a realistic range, it&apos;s straightforward to size a
          final expense policy around it, with enough cushion left for the rest of the
          arrangements too.
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
