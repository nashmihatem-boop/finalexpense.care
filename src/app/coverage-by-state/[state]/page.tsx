import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable, CostFactorsGrid } from "@/components/final-expense/policy-types-table";
import { US_STATES } from "@/lib/us-states";
import { STATE_FACTS, formatMetros } from "@/lib/state-facts";
import { STATE_COUNTIES, countyTermFor } from "@/lib/state-counties";
import { siteConfig } from "@/lib/site-config";

function findState(slug: string) {
  return US_STATES.find((s) => s.code.toLowerCase() === slug.toLowerCase());
}

export function generateStaticParams() {
  return US_STATES.map((s) => ({ state: s.code.toLowerCase() }));
}

export async function generateMetadata(props: PageProps<"/coverage-by-state/[state]">): Promise<Metadata> {
  const { state: slug } = await props.params;
  const state = findState(slug);
  if (!state) return {};
  return {
    title: `Final Expense Insurance in ${state.name} | Costs, Regulations & Quotes`,
    description: `Final expense insurance in ${state.name}: how coverage works, what affects your rate, state regulations, veteran burial benefits, and how to get a free quote from a licensed agent.`,
  };
}

const TOC = [
  { id: "costs", label: (s: string) => `Funeral and Cremation Costs in ${s}` },
  { id: "how-it-works", label: () => "How Final Expense Insurance Works" },
  { id: "policy-types", label: () => "Policy Types Available" },
  { id: "regulations", label: (s: string) => `Final Expense Insurance Regulations in ${s}` },
  { id: "burial-laws", label: (s: string) => `Funeral and Burial Laws in ${s}` },
  { id: "regions", label: (s: string) => `Regions and Major Metros in ${s}` },
  { id: "counties", label: (s: string) => `Counties We Serve in ${s}` },
  { id: "veterans", label: () => "Veterans' Burial Benefits" },
  { id: "faq", label: () => "Frequently Asked Questions" },
];

function faqsFor(stateName: string, isDC: boolean) {
  const locality = isDC ? "the District" : stateName;
  return [
    {
      q: `Is final expense insurance available in ${stateName}?`,
      a: `Yes. Multiple carriers are licensed to sell final expense insurance to ${locality} residents. Which specific carriers and plans are available to you depends on your age, health, and the coverage amount you're looking for — a licensed agent can tell you exactly what you qualify for.`,
    },
    {
      q: `Does final expense insurance cost more in ${stateName} than other states?`,
      a: `Insurance is regulated state by state, so pricing and product availability aren't identical everywhere. Within ${locality}, though, your premium is still driven mainly by your age, gender, tobacco use, health, and coverage amount, not by your specific address.`,
    },
    {
      q: `Will my policy still work if I move out of ${stateName}?`,
      a: `Yes. Once your policy is issued, it's tied to you, not your state of residence — coverage and premium stay the same if you move.`,
    },
    {
      q: "Do I need a medical exam to qualify?",
      a: "Most final expense policies don't require one. Simplified-issue policies ask a short set of health questions instead, and guaranteed-issue policies skip health questions entirely (in exchange for a waiting period before the full benefit applies).",
    },
    {
      q: "How much coverage should I choose?",
      a: "Most people size their policy to cover a funeral or burial plus any bills they don't want to leave behind. There's no single right number — a licensed agent can walk through your specific situation and recommend an amount, at no cost.",
    },
    {
      q: "Can I name more than one beneficiary?",
      a: "Yes. You can typically name multiple beneficiaries and set what percentage of the payout each one receives, and update that list later if your situation changes.",
    },
    {
      q: `Do veterans in ${stateName} get any special burial benefits?`,
      a: "Many veterans and their spouses are eligible for federal burial benefits through the VA, including a burial allowance and, in some cases, a plot in a VA national cemetery, regardless of which state they live in. Final expense insurance is separate from these benefits and can cover costs the VA benefit doesn't, like a service, viewing, or headstone beyond what's provided.",
    },
  ];
}

export default async function StateCoveragePage(props: PageProps<"/coverage-by-state/[state]">) {
  const { state: slug } = await props.params;
  const state = findState(slug);
  if (!state) notFound();

  const isDC = state.code === "DC";
  const facts = STATE_FACTS[state.code];
  const displayName = isDC ? "D.C." : state.name;
  const possessive = isDC ? "the District of Columbia's" : `${state.name}'s`;
  const faqs = faqsFor(state.name, isDC);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="bg-canvas">
      {/* Static, locally-authored JSON-LD — no user input reaches this. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          {state.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in {state.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          {isDC ? (
            <>
              Final expense insurance is available to residents of Washington, D.C. through
              carriers licensed to do business in the District.
            </>
          ) : (
            <>
              Final expense insurance is available to residents across {state.name} — from{" "}
              {facts.capital}, the state capital, to {formatMetros(facts.metros)} — through
              carriers licensed to do business in the state.
            </>
          )}{" "}
          Like all insurance, it&apos;s regulated at the state level: {possessive} Department of
          Insurance oversees which carriers and policies can be sold locally, which is part of
          why the right fit can vary depending on where you live. This guide covers how coverage
          works for {displayName} residents specifically — costs, regulations, and how to get
          matched with a licensed local agent.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            What this means for {displayName} residents
          </p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Agents you talk to are licensed specifically to sell insurance in {isDC ? "the District" : state.name}.</li>
            <li>• Your premium is still based mainly on your age, health, and coverage amount.</li>
            <li>• Most applicants qualify without a medical exam.</li>
            <li>• Coverage stays in force if you later move to another state.</li>
          </ul>
        </div>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">What&apos;s in this guide</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-harbor-mid hover:underline">
                  {i + 1}. {item.label(state.name)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="costs" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Funeral and cremation costs in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and cremation costs vary significantly depending on the services chosen and
          where you live — we won&apos;t guess at region-specific numbers we can&apos;t verify,
          but broadly, a simple direct cremation costs a fraction of a traditional funeral with a
          viewing, casket, vault, and burial plot. The{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">National Funeral Directors Association</a>{" "}
          publishes national median cost data each year as a starting reference point; your local
          funeral home is the best source for current pricing in {displayName}. The coverage
          amount you choose should reflect the kind of service your family actually plans, not a
          generic number — that&apos;s exactly what a licensed agent can help you work through.
        </p>

        <h2 id="how-it-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How final expense insurance works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You apply with a coverage amount that fits your needs, answer a short set of health
          questions (or skip them entirely with a guaranteed-issue plan), and — if approved — pay
          a fixed monthly premium for the life of the policy. When you pass away, your named
          beneficiary receives the full death benefit in cash, tax-free, usually within days of
          the claim being filed. They can use it for funeral costs, medical bills, or anything
          else — the payout isn&apos;t restricted to a specific funeral home or package the way a
          prepaid funeral plan often is.
        </p>

        <h2 id="policy-types" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Policy types available
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every final expense policy sold in {displayName} falls into one of two
          categories. Neither is objectively better — the right one depends on your health and
          how soon you need full coverage in place.
        </p>
        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Exact carriers and pricing available in {displayName} vary — a licensed agent can tell
          you precisely what you qualify for, at no cost.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A simplified-issue policy that accepts your health answers typically provides full
          coverage from day one. Guaranteed-issue policies, since they skip health questions
          entirely, usually include a two-year waiting period — if you pass away from natural
          causes during those first two years, the policy typically refunds the premiums you paid
          rather than the full benefit (accidental death is often covered immediately either
          way). After the waiting period ends, you have full coverage for life.
        </p>

        <h2 id="regulations" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Final expense insurance regulations in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Like every state, {isDC ? "D.C." : state.name} regulates which insurance carriers and
          policies can be sold to its residents through its Department of Insurance. Agents must
          hold a state-specific license to sell you a policy, and carriers have to get their
          policy forms and rates approved before offering them locally. Your policy will also
          include a free-look period — commonly between 10 and 30 days, depending on the
          state — during which you can cancel for a full refund if you change your mind; your
          policy documents will show the exact number that applies to yours. Because these rules
          are set at the state level, not every plan available nationally is necessarily approved
          for sale in {displayName} — a licensed agent will only show you options that are.
        </p>

        <h2 id="burial-laws" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Funeral and burial laws in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and burial practices are also regulated at the state level. In general, state
          law establishes who has the legal right to make funeral and burial decisions (usually a
          spouse or next of kin, unless you&apos;ve designated someone else), requires funeral
          homes to be licensed, and sets consumer-protection rules for how prices are disclosed.
          The specifics vary by state, so it&apos;s worth a conversation with a local funeral home
          or an elder law attorney if you want the details that apply to your situation — final
          expense insurance is there to make sure the money is available regardless of how those
          decisions get made.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What affects your rate
        </h2>
        <CostFactorsGrid />

        <h2 id="regions" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Regions and major metros in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Washington, D.C. is a single jurisdiction rather than a state made up of counties or
            regions — coverage works the same way across the whole District.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Licensed agents and carriers serve residents throughout {state.name}, including
              around its state capital and major metro areas:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-mist bg-canvas-alt">
                    <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Area</th>
                    <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">City</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-mist">
                    <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">State capital</td>
                    <td className="px-5 py-4 text-sm text-charcoal">{facts.capital}</td>
                  </tr>
                  {facts.metros.map((metro, i) => (
                    <tr key={metro} className={i < facts.metros.length - 1 ? "border-b border-mist" : ""}>
                      <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Major metro</td>
                      <td className="px-5 py-4 text-sm text-charcoal">{metro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h2 id="counties" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Counties we serve in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Washington, D.C. is a single federal district with no county-level subdivisions —
            coverage works the same way across the whole District.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Coverage is available to residents throughout every {countyTermFor(state.code).singular}{" "}
              in {state.name} — final expense insurance isn&apos;t limited to major metro areas.
              We currently serve all {STATE_COUNTIES[state.code]?.length ?? 0} of them:
            </p>
            <div className="mt-6 columns-2 gap-x-6 sm:columns-3 lg:columns-4">
              {(STATE_COUNTIES[state.code] ?? []).map((county) => (
                <p key={county} className="break-inside-avoid py-1 text-sm text-charcoal/75">
                  {county}
                </p>
              ))}
            </div>
          </>
        )}

        <h2 id="veterans" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Veterans&apos; burial benefits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Veterans and, in many cases, their spouses may qualify for federal burial benefits
          through the VA, including a burial allowance and eligibility for a plot in a VA national
          cemetery — a benefit that applies no matter which state you live in. Final expense
          insurance is separate from these benefits and is often used to cover the costs a VA
          benefit doesn&apos;t, such as a service, viewing, or a headstone beyond what&apos;s
          provided. A licensed agent can help you understand how the two fit together.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-xl border border-mist bg-canvas-raised px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-harbor marker:content-none">
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-harbor-mid transition-transform duration-200 group-open:-rotate-180">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">
            Why compare multiple carriers in {displayName}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            {siteConfig.name} specializes in final expense insurance for seniors who want peace of
            mind knowing their funeral expenses won&apos;t burden their loved ones. We partner
            with multiple providers so we can compare plans side by side for {displayName}{" "}
            residents, instead of pointing everyone toward a single company&apos;s policy
            regardless of fit.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={`/get-quote?state=${state.code}`} size="lg">
            See what you qualify for in {state.name}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
              ← See all states
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
