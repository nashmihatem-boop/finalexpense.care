import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Affects Headstone & Grave Marker Cost",
  description:
    "How material, size, and engraving affect headstone and grave marker pricing, and how to get an accurate quote.",
};

export default function HeadstoneCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Headstone Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What affects the cost of a headstone or grave marker
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Like everything else in this guide, headstone and marker pricing isn&apos;t standardized
          — it&apos;s set by individual monument companies based on a handful of factors that are
          worth understanding before you start comparing quotes.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Material is the biggest driver
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Granite is the modern standard for permanent markers, valued for its durability, and is
          generally priced by the piece based on the grade and amount of stone used. Bronze
          markers — typically a cast metal plaque set into a granite or concrete base — are priced
          partly by the weight and detail of the casting plus the base itself. Simpler options,
          like a smaller flat granite marker or a temporary marker meant to be replaced later,
          cost less than a large upright monument in any material. None of these is objectively
          better — it&apos;s a mix of personal preference and what the cemetery even allows, which
          is worth checking before settling on a style.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Size and shape change the price
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A flat, or flush, marker set level with the ground generally costs less than an upright
          monument, since an upright requires more raw material and a larger foundation to stand
          securely. A companion or double marker, meant to eventually cover two plots, costs more
          than a single marker but is usually less than the cost of buying two separate singles
          down the road. Custom shapes or larger monuments simply require more material and more
          fabrication work than a standard design pulled from a monument company&apos;s existing
          catalog.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Engraving adds up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cost generally scales with how much is engraved — a name and two dates costs less than
          an epitaph, a verse, or a detailed design. Leaving space for a second name and date to
          be added later, common for a spouse, is usually cheaper to plan for now than to engrave
          in full later as a separate visit and a separate charge. Custom artwork or a portrait
          etching takes considerably more skilled labor than a standard emblem selected from a
          catalog, and that labor is reflected in the price.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The cemetery may limit your options
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many cemeteries — especially newer sections designed as &quot;memorial gardens&quot; —
          allow only flat, flush markers, largely for ease of mowing and maintenance, and
          don&apos;t permit upright monuments in those sections at all. Some cemeteries also
          require markers to be ordered through an approved list of monument companies, or set
          specific size and material rules. It&apos;s worth checking the cemetery&apos;s own rules
          before you settle on a specific marker, since they can dictate what&apos;s allowed as
          much as budget does.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Getting a real quote</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Monument companies will quote directly, and it&apos;s worth asking exactly
            what&apos;s included — the marker itself, the engraving, and the setting or
            installation fee are sometimes quoted together and sometimes billed separately. Get
            that real number from a local provider before deciding how much coverage to put toward
            it, with some cushion left for whatever else comes up.
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
