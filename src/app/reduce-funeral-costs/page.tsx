import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Reduce Funeral Costs",
  description:
    "Practical, honest ways to reduce funeral costs — from knowing your rights under the FTC Funeral Rule to considering direct burial — and why coverage still matters even with a simple plan.",
  openGraph: { title: "How to Reduce Funeral Costs", description: "Practical, honest ways to reduce funeral costs — from knowing your rights under the FTC Funeral Rule to considering direct burial — and why coverage still matters even with a simple plan." },

  twitter: { title: "How to Reduce Funeral Costs", description: "Practical, honest ways to reduce funeral costs — from knowing your rights under the FTC Funeral Rule to considering direct burial — and why coverage still matters even with a simple plan." },
};

export default function ReduceFuneralCostsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to reduce funeral costs
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Funeral costs aren&apos;t fixed, and families have more control over them than most
          people realize going in. A few practical steps — most of them about asking the right
          questions rather than cutting corners — can make a meaningful difference.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Compare providers, and know your rights
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral homes are required under the FTC Funeral Rule, a federal consumer protection
          regulation, to give you an itemized, written price list — called a General Price List —
          and to let you choose only the specific goods and services you actually want, rather
          than requiring a bundled package. Not every provider prices things the same way, and
          you&apos;re entitled to that price list before you commit to anything. Calling more than
          one funeral home and comparing their written price lists side by side is one of the
          simplest ways to avoid paying for more than you need.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            What the FTC Funeral Rule guarantees you
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-charcoal/75">
            <li>• A written, itemized price list before you agree to anything</li>
            <li>• The right to buy only the specific goods and services you want</li>
            <li>• The right to provide your own casket or urn without a handling fee</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Consider direct cremation or direct burial
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Skipping embalming and a formal viewing — through direct cremation or{" "}
          <Link href="/traditional-funeral-vs-direct-burial" className="font-semibold text-harbor-mid hover:underline">
            direct burial
          </Link>{" "}
          — removes several of the costliest steps in a traditional funeral, while still allowing
          the family to hold a separate memorial or celebration of life afterward, on their own
          schedule. For families focused on keeping costs manageable without giving up a
          meaningful goodbye, this is often the single biggest lever available.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Buy a casket from a third party
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Under the same FTC Funeral Rule, a funeral home is required to accept a casket you
          purchase from an outside seller and can&apos;t charge you an extra handling fee for using
          one. Caskets purchased directly from a third party are often priced differently than
          what a funeral home offers on-site, so it&apos;s worth asking whether this option makes
          sense before defaulting to whatever the funeral home has on the floor.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Consider a simpler service, and celebrate separately
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A large, formal service isn&apos;t the only way to honor someone. A smaller, simpler
          service — or none at all at the time of burial — paired with a separate celebration of
          life planned later, with more time and less pressure, can meaningfully reduce cost
          without reducing how meaningful the send-off is.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Ask about veteran burial benefits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If the person who died served in the military, they — and often their spouse — may be
          eligible for federal burial benefits that can offset part of the cost, regardless of
          which state they lived in. Eligibility and specifics vary, so it&apos;s worth asking
          directly; our{" "}
          <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
            state-by-state coverage guide
          </Link>{" "}
          includes what to look for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why final expense insurance still matters, even with a simple plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          None of this planning eliminates cost entirely, and it doesn&apos;t account for
          everything else that tends to show up around a death — from final medical bills to the
          other costs most families don&apos;t plan for in advance. Even a modest, carefully
          planned service can be paired with unexpected expenses, which is exactly the gap a final
          expense policy is built to cover: cash paid directly to your family, usable for whatever
          actually comes up. See{" "}
          <Link href="/hidden-costs-of-dying" className="font-semibold text-harbor-mid hover:underline">
            the hidden costs of dying
          </Link>{" "}
          for the full picture.
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
