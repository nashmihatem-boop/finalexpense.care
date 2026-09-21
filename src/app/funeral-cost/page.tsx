import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";

export const metadata: Metadata = {
  title: "Funeral Cost Guide",
  description:
    "Why funeral costs vary so much, the general categories you're actually paying for, and how to get a real number from local providers before you size coverage.",
};

const TOPICS: { href: string; title: string; description: string; image?: string }[] = [
  {
    href: "/funeral-cost/what-to-expect",
    title: "What to expect",
    description: "A step-by-step walk through the funeral planning process, and the decisions involved at each stage.",
    image: "/photos/reflective-garden-bench.jpg",
  },
  {
    href: "/funeral-cost/prepaid-funeral-plans",
    title: "Prepaid funeral plans vs. final expense insurance",
    description: "How each one actually works, and the real tradeoffs of locking in a plan with one provider.",
    image: "/photos/reflective-soft-light.jpg",
  },
  {
    href: "/funeral-cost/cemetery-plot-cost",
    title: "What affects cemetery plot cost",
    description: "Location, cemetery type, and ongoing fees like perpetual care.",
    image: "/photos/reflective-golden-hour-landscape.jpg",
  },
  {
    href: "/funeral-cost/headstone-cost",
    title: "What affects headstone cost",
    description: "Material, size, and engraving are the biggest factors.",
    image: "/photos/reflective-memorial-garden.jpg",
  },
  {
    href: "/funeral-cost/green-burial",
    title: "What is green burial?",
    description: "A growing option, and why it's often — not always — less costly than a traditional burial.",
    image: "/photos/reflective-hands-flower.jpg",
  },
  {
    href: "/funeral-cost/burial-vs-cremation",
    title: "Burial vs. cremation",
    description: "How the two paths actually compare on cost, timeline, and what's involved.",
  },
  {
    href: "/funeral-cost/cremation-cost",
    title: "What affects cremation cost",
    description: "Direct cremation, cremation with a service, and what changes the price.",
  },
  {
    href: "/funeral-cost/direct-cremation",
    title: "What is direct cremation?",
    description: "The simplest, least costly disposition option, and what it does and doesn't include.",
  },
  {
    href: "/funeral-cost/casket-cost",
    title: "What affects casket cost",
    description: "Material and craftsmanship drive most of the range between a simple and premium option.",
  },
  {
    href: "/funeral-cost/funeral-financial-assistance",
    title: "Funeral financial assistance",
    description: "Real programs and resources if paying for a funeral without coverage in place is the immediate problem.",
  },
];

export default function FuneralCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Funeral Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Understanding what a funeral actually costs
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Ask two funeral homes in the same city for pricing on a similar set of services, and you
          can get two genuinely different answers. That&apos;s normal — funeral pricing
          isn&apos;t standardized, isn&apos;t set nationally, and depends heavily on choices only
          your family can make. This guide covers why costs vary, the general categories
          you&apos;re actually paying for, and where to go for a real, current number.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why funeral costs vary so much
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Region.</span> Cost of living, local land
          values, and how much competition exists between providers in an area all shift pricing
          from one zip code to the next. Two towns thirty miles apart can sit at meaningfully
          different price levels for comparable services.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Provider.</span> Every funeral home is an
          independently priced business, even the ones that are part of a larger corporate group.
          There&apos;s no standard national price list, and no requirement that any two providers
          charge the same amount for the same service.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Choices made.</span> Burial or cremation, a
          full traditional service versus a simple direct disposition, the casket or urn selected,
          whether a vault is required — these decisions move the total as much as anything else.
          Two families using the same funeral home can end up with very different bills based
          purely on what they chose.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Know your rights: the itemized price list</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Funeral homes are required by federal rule to give you an itemized general price list
            and let you select and pay for only the specific items and services you want, rather
            than requiring you to accept a single bundled package. Asking for this list in
            writing, early, is one of the most useful things you can do as you compare providers.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The general categories you&apos;re paying for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every funeral, regardless of provider or region, breaks down into the same broad
          categories. What varies is the price of each one, and whether you need all of them at
          all.
        </p>
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-charcoal/80">
          <li>
            <span className="font-semibold text-harbor">Service fees.</span> The funeral
            home&apos;s basic services fee is essentially unavoidable — it covers overhead, staff
            time, and coordinating the arrangements and paperwork, regardless of what else you
            choose.
          </li>
          <li>
            <span className="font-semibold text-harbor">Casket or urn.</span> This is one of the
            biggest swing categories, since it varies enormously with material and craftsmanship.
            A simple option exists at every provider, alongside higher-end choices.
          </li>
          <li>
            <span className="font-semibold text-harbor">The disposition itself.</span> Burial and
            cremation each carry their own direct cost, separate from any merchandise. Cremation
            is generally the simpler, less costly path, since it eliminates several steps a
            traditional in-ground burial requires.
          </li>
          <li>
            <span className="font-semibold text-harbor">Plot and marker, if burial.</span>{" "}
            Choosing burial adds a separate set of costs from a separate business — the cemetery
            plot, the opening and closing fee, and a headstone or marker — on top of anything paid
            to the funeral home.
          </li>
        </ul>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Sizing coverage without knowing an exact number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since none of this is standardized, the only way to get a real number is to ask a local
          provider directly — a funeral home for service costs, and a cemetery separately if
          burial is part of the plan. Final expense insurance pays a set cash benefit to your
          named beneficiary, so the practical approach is to get a current, itemized estimate, add
          a cushion for the unexpected, and size your coverage to that total rather than a guess.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Go deeper on each cost
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} href={topic.href} title={topic.title} description={topic.description} image={topic.image} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
