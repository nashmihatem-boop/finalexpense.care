import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONDITIONS, TIER_INFO, type Tier } from "@/lib/condition-facts";
import { CarrierComparisonGraphic } from "@/components/pre-existing/carrier-comparison-graphic";

export const metadata: Metadata = {
  title: "Final Expense Insurance with Pre-Existing Conditions",
  description:
    "How simplified-issue underwriting treats common health conditions, what level/graded/modified/guaranteed-acceptance actually mean, and how to find your likely path before you apply.",
  openGraph: { title: "Final Expense Insurance with Pre-Existing Conditions", description: "How simplified-issue underwriting treats common health conditions, what level/graded/modified/guaranteed-acceptance actually mean, and how to find your likely path before you apply." },

  twitter: { title: "Final Expense Insurance with Pre-Existing Conditions", description: "How simplified-issue underwriting treats common health conditions, what level/graded/modified/guaranteed-acceptance actually mean, and how to find your likely path before you apply." },
};

const TOC = [
  { id: "the-two-paths-and-how-simplified-issue-works", label: "The two paths, and how simplified issue works" },
  { id: "tiers", label: "How carriers tier you — level, graded, modified, or decline" },
  { id: "where-conditions-land", label: "Where common conditions land" },
  { id: "a-z", label: "Eligibility by health condition (A–Z)" },
  { id: "why-carriers-differ", label: "Why the same condition gets different answers" },
  { id: "how-to-prepare", label: "How to figure out your path before you apply" },
  { id: "faq", label: "Frequently asked questions" },
];

const TIER_GROUPS: { tier: Tier; heading: string }[] = [
  { tier: "level", heading: "Conditions that usually qualify for level rates" },
  { tier: "graded-modified", heading: "Conditions that often land in graded or modified" },
  { tier: "guaranteed", heading: "Conditions that often need guaranteed acceptance" },
];

const FAQS = [
  {
    q: "I take several medications every day. Will that stop me from getting coverage?",
    a: "No. Taking medications doesn't automatically disqualify you. Carriers mainly check your prescription history to confirm your health answers match your records — plenty of people on multiple daily medications still qualify for full, day-one coverage.",
  },
  {
    q: "One company turned me down. Does that mean nobody will cover me?",
    a: "Not usually. Carriers set their own rules and look-back periods, so a decline from one often isn't a decline everywhere. Guaranteed acceptance is also always available as a backstop, since it doesn't ask health questions at all.",
  },
  {
    q: "What's the difference between “no exam” and “no health questions”?",
    a: "“No exam” almost always means simplified issue — no physical or bloodwork, but you still answer health questions. “No health questions” means guaranteed acceptance, which always comes with a two-year waiting period. Be cautious of anyone promising both no health questions and no waiting period — that combination doesn't exist in this market.",
  },
  {
    q: "Will I have to wait two years to be covered if I have a common condition like diabetes?",
    a: "Not necessarily. Many common, well-managed conditions — including a lot of diabetes cases — qualify for simplified issue with day-one coverage. The two-year wait is specifically a feature of guaranteed acceptance, which is a different, separate path.",
  },
  {
    q: "Do I need to disclose a condition if I'm feeling fine now?",
    a: "Yes — answer every health question honestly regardless of how you feel today. Carriers cross-check your answers against your prescription history and a shared industry database, and a mismatch discovered during the early contestability period can put your family's claim at risk.",
  },
];

export default function PreExistingConditionsPage() {
  const grouped = TIER_GROUPS.map((g) => ({
    ...g,
    conditions: CONDITIONS.filter((c) => c.tier === g.tier).slice(0, 7),
  }));

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Pre-Existing Conditions
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance with a pre-existing condition
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Having a health condition doesn&apos;t mean you&apos;re out of options. Most people
          with pre-existing conditions still qualify for final expense insurance — sometimes at
          the best available rate, sometimes through a plan built for a harder health history.
          This guide explains how carriers actually evaluate your health, where common
          conditions typically land, and how to figure out your likely path before you apply.
        </p>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">What&apos;s in this guide</p>
          <ol className="mt-3 space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-harbor-mid hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="the-two-paths-and-how-simplified-issue-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          The two paths, and how simplified issue works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Almost every application with a health condition comes down to one fork: simplified
          issue or guaranteed acceptance. Simplified issue is the path most people start on, and
          it&apos;s the focus of this guide — guaranteed acceptance works on a different, simpler
          set of rules and is covered on its own.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue means no medical exam — no nurse visit, no bloodwork. Instead, you
          answer a short list of yes-or-no health questions, typically under a dozen. The carrier
          also runs a couple of quiet background checks to confirm your answers — a look at your
          prescription history, and a check against the MIB, a shared industry database of past
          insurance applications. A decision often comes back the same day or within a few
          business days.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s worth aiming for: when your answers clear, coverage is &quot;level&quot; —
          the full death benefit is in place from day one, and simplified issue typically costs
          less than guaranteed acceptance for the same amount of coverage.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">A word of caution</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            &quot;No exam&quot; and &quot;no health questions&quot; are not the same thing. &quot;No
            exam&quot; usually means simplified issue — health questions still apply. &quot;No
            health questions&quot; means guaranteed acceptance, which always carries a two-year
            waiting period. Be cautious of anyone promising both no health questions and no
            waiting period at once — that combination doesn&apos;t exist in this market.
          </p>
        </div>

        <h2 id="tiers" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How carriers tier you — level, graded, modified, or decline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Reviewing your health answers isn&apos;t a simple yes-or-no — carriers sort applicants
          into one of a few outcomes that decide when your family actually receives the full
          death benefit.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Outcome</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Years 1–2, natural death</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">After the wait</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Level</td>
                <td className="px-5 py-4 text-sm text-charcoal">100% of the death benefit, from day one</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Graded</td>
                <td className="px-5 py-4 text-sm text-charcoal">A partial payout that steps up each year</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Modified</td>
                <td className="px-5 py-4 text-sm text-charcoal">Premiums paid back, plus interest — not the full amount</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Decline</td>
                <td className="px-5 py-4 text-sm text-charcoal">No simplified policy offered by that carrier</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Accidental death is generally paid in full immediately under graded or modified plans —
          the waiting period applies to natural-cause death only. A decline from one carrier
          usually just means guaranteed acceptance (or a different carrier) is the next step, not
          that coverage is out of reach entirely.
        </p>

        <h2 id="where-conditions-land" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Where common conditions land
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These are general, typical patterns — not guarantees. Every carrier draws its own
          lines, which is exactly why the same condition can get a different answer from a
          different company.
        </p>
        {grouped.map((g) => (
          <div key={g.tier} className="mt-8">
            <h3 className="font-display text-lg font-extrabold text-harbor">{g.heading}</h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-mist">
              <table className="w-full min-w-[480px] border-collapse text-left">
                <tbody>
                  {g.conditions.map((c, i) => (
                    <tr key={c.slug} className={i < g.conditions.length - 1 ? "border-b border-mist" : ""}>
                      <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/70 align-top">
                        <Link href={`/pre-existing-conditions/${c.slug}`} className="text-harbor-mid hover:underline">
                          {c.name}
                        </Link>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-charcoal align-top">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h2 id="a-z" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Eligibility by health condition (A–Z)
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A quick-reference index of the conditions we cover — tap any of them for a closer look.
          As above, these are typical outcomes, not promises.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">Condition</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Typical tier</th>
              </tr>
            </thead>
            <tbody>
              {CONDITIONS.map((c, i) => (
                <tr key={c.slug} className={i < CONDITIONS.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3 text-sm font-semibold text-charcoal/70">
                    <Link href={`/pre-existing-conditions/${c.slug}`} className="text-harbor-mid hover:underline">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-sm text-charcoal/80">{TIER_INFO[c.tier].label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Don&apos;t see your exact situation, or been declined before? That doesn&apos;t mean
          you&apos;re out of options — a different carrier&apos;s rules, or the guaranteed-issue
          path, very often still has a place for you.
        </p>

        <h2 id="why-carriers-differ" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Why the same condition gets different answers from different carriers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two carriers can look at the exact same person and reach different conclusions — one
          says level, another says graded. That&apos;s not a glitch; it&apos;s how this market is
          built, and it works in your favor if you know how to use it.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers don&apos;t share one rulebook. Each sets its own health questions, its own
          look-back periods (how far back it asks about a diagnosis or treatment), and its own
          list of medications it will and won&apos;t accept. A treatment from three years ago
          might fall outside one carrier&apos;s two-year look-back but inside another&apos;s
          four-year window — and that single difference can decide your tier.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because of this, applying to just one carrier and accepting its answer can leave real
          money — or a better tier — on the table. This is exactly where working with an
          independent agency helps: matching your specific history to the carrier whose rules
          are friendliest to it, before an application ever gets submitted.
        </p>

        <CarrierComparisonGraphic />

        <h2 id="how-to-prepare" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How to figure out your path before you apply
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A little preparation goes a long way. Before you apply, it helps to have a clear
          picture ready: each condition and when it was diagnosed, when you were last treated or
          hospitalized for it, and a complete, current medication list. Carriers check your
          prescription history against your answers, so an accurate list avoids surprises.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Answer every question honestly. A mismatch between your answers and your records —
          discovered during the early contestability period — can put your family&apos;s claim
          at risk later. If a knockout condition like current oxygen use, dialysis, or active
          cancer treatment applies to you, guaranteed acceptance is likely the more direct path,
          not a last resort.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((item) => (
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
          <h2 className="font-display text-xl font-extrabold text-harbor">Two more things worth reading</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/pre-existing-conditions/can-you-be-denied" className="font-semibold text-harbor-mid hover:underline">
                Can you be denied? What actually causes a decline →
              </Link>
            </li>
            <li>
              <Link href="/pre-existing-conditions/no-waiting-period" className="font-semibold text-harbor-mid hover:underline">
                How to qualify for day-one coverage with no waiting period →
              </Link>
            </li>
            <li>
              <Link href="/pre-existing-conditions/prescriptions" className="font-semibold text-harbor-mid hover:underline">
                How your prescription history affects your application →
              </Link>
            </li>
          </ul>
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
