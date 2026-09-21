import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is a Celebration of Life Service?",
  description:
    "How a celebration of life compares to a traditional funeral, what it can include, and how it fits with burial or cremation plans.",
};

export default function CelebrationOfLifePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a &quot;celebration of life&quot; service?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A celebration of life is one of the more flexible options families have when planning
          how to honor someone who&apos;s passed — less a fixed format than an approach.
          Here&apos;s what typically sets it apart, and how it fits alongside more traditional
          choices.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it differs from a traditional funeral
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A traditional funeral service tends to follow a familiar structure — often religious,
          typically formal, and usually held close to the time of burial. A celebration of life
          is looser by design. It&apos;s generally more personalized, often less formal, and
          built around the specific person&apos;s life and personality rather than a set order
          of service. There&apos;s no single template for what one looks like, which is part of
          the appeal for families who want something that feels more like the person being
          remembered.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where it fits with burial or cremation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A celebration of life is frequently held separately from — and after — the disposition
          of remains, meaning burial or cremation happens on its own, often soon after death,
          while the memorial gathering itself is scheduled later. This is especially common
          alongside cremation, since it removes the time pressure that traditional burial can
          carry, giving a family room to plan a gathering for a date and place that actually
          works. That said, a celebration of life isn&apos;t exclusive to cremation — it can
          also be paired with a burial, either instead of or alongside a more traditional
          service.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What it can include
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because there&apos;s no fixed script, the format is really up to the family. Common
          elements include sharing photos or video, playing music the person loved, and open
          time for family and friends to speak or share memories — sometimes at a location tied
          to the person&apos;s life, like a home, a park, or a favorite restaurant, rather than a
          funeral home or place of worship. Some families blend in traditional elements, like a
          religious reading or a eulogy; others skip that entirely in favor of something closer
          to a gathering or reception.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why this matters for planning ahead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because a celebration of life is so flexible, the cost and shape of it depend heavily
          on what a family chooses — a rented venue, catering, travel for guests, and other
          personal touches can add up differently than a standard service would. Having funds
          already available, through a life insurance or final expense policy, gives a family
          room to plan the kind of service that actually fits, rather than being limited to
          whatever is most affordable in the moment.
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
