import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Traditional Funeral vs. Direct Burial",
  description:
    "An honest comparison of what a traditional funeral includes versus direct burial, why the cost differs, and how families decide between them.",
  openGraph: { title: "Traditional Funeral vs. Direct Burial", description: "An honest comparison of what a traditional funeral includes versus direct burial, why the cost differs, and how families decide between them." },

  twitter: { title: "Traditional Funeral vs. Direct Burial", description: "An honest comparison of what a traditional funeral includes versus direct burial, why the cost differs, and how families decide between them." },
};

export default function TraditionalFuneralVsDirectBurialPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Traditional funeral vs. direct burial
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Choosing between a traditional funeral and direct burial is one of the first major
          decisions a family faces, and it shapes nearly everything else that follows — what
          happens to the body, whether there&apos;s a viewing, and how a service, if any,
          eventually takes place.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a traditional funeral typically includes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A traditional funeral generally involves embalming, a viewing or visitation where family
          and friends can pay their respects with the body present, and a formal service before
          burial — often at a funeral home or place of worship, followed by a procession to the
          cemetery. It&apos;s the version of a funeral most people picture by default, largely
          because it&apos;s been the cultural standard for so long, and it offers a structured,
          in-person way for a community to gather and say goodbye.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What direct burial skips — and why that costs less
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Direct burial removes several of those steps. There&apos;s typically no embalming and no
          public viewing — the body is buried, usually in a simple container, within a relatively
          short time after death, without the formal service that precedes a traditional funeral.
          Because it removes the preparation, staffing, and facility time that a viewing and
          service require, direct burial is generally less expensive than a traditional funeral,
          without changing where the person is ultimately laid to rest.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A separate memorial service or celebration of life
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Choosing direct burial doesn&apos;t mean skipping a gathering altogether. Many families
          choose direct burial specifically so they can hold a separate memorial service or
          celebration of life afterward — often on their own timeline, in a location that means
          something to them, structured however they want rather than following a traditional
          funeral format. It separates the practical step of burial from the more personal,
          flexible process of remembering someone.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to decide what&apos;s right for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no universally &quot;right&quot; choice — it depends on religious or
          cultural expectations, what the person who died would have wanted, and what the family
          actually needs in order to grieve well. Some families need the structure and immediacy
          of a traditional funeral. Others find more room to process loss in a simpler burial
          followed by a celebration of life planned with less time pressure. Either path is a
          legitimate way to say goodbye.
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
