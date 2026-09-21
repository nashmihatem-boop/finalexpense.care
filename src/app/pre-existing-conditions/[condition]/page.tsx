import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CONDITIONS, TIER_INFO, COMMON_QUESTION_CATEGORIES, findCondition } from "@/lib/condition-facts";

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ condition: c.slug }));
}

export async function generateMetadata(props: PageProps<"/pre-existing-conditions/[condition]">): Promise<Metadata> {
  const { condition: slug } = await props.params;
  const condition = findCondition(slug);
  if (!condition) return {};
  return {
    title: `Final Expense Insurance with ${condition.name}`,
    description: `How simplified-issue final expense insurance typically treats ${condition.name}, what tier to expect, and how to get a free quote.`,
  };
}

export default async function ConditionPage(props: PageProps<"/pre-existing-conditions/[condition]">) {
  const { condition: slug } = await props.params;
  const condition = findCondition(slug);
  if (!condition) notFound();

  const tierInfo = TIER_INFO[condition.tier];
  const others = CONDITIONS.filter((c) => c.slug !== condition.slug).slice(0, 6);

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / {condition.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance with {condition.name}
        </h1>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-canvas-alt px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-brass" />
          <span className="text-sm font-bold text-harbor">{tierInfo.label}</span>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">{tierInfo.blurb}</p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">{condition.note}</p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Keep in mind</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            This is a general, typical pattern — not a promise. Every carrier sets its own health
            questions and look-back periods, so the same condition can land in a better (or
            worse) tier depending on which one reviews your application. A decline from one
            carrier is not a verdict on your insurability elsewhere.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where {condition.name.toLowerCase()} typically lands
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The outcome usually comes down to severity and timing, not the diagnosis alone:
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">If your situation is…</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Typical outcome</th>
              </tr>
            </thead>
            <tbody>
              {condition.scenarios.map((s, i) => (
                <tr key={s.situation} className={i < condition.scenarios.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3.5 text-sm text-charcoal align-top">{s.situation}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/80 align-top">{s.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How underwriting actually works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified-issue applications don&apos;t require a medical exam — instead, you answer a
          short set of health questions, and the carrier checks your prescription history and a
          shared industry database (the MIB) to confirm your answers. Based on that, you land in
          one of four outcomes: <strong className="text-harbor">level</strong> (full coverage
          from day one), <strong className="text-harbor">graded</strong> (a partial benefit that
          steps up over the first couple of years), <strong className="text-harbor">modified</strong>{" "}
          (your premiums returned with interest during that window), or a{" "}
          <strong className="text-harbor">decline</strong> that points you toward guaranteed
          acceptance instead. See the{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            full tiering guide
          </Link>{" "}
          for how each works.
        </p>

        <h3 className="mt-8 font-display text-lg font-extrabold text-harbor">
          What carriers commonly ask about {condition.name.toLowerCase()}
        </h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">What they ask</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_QUESTION_CATEGORIES.map((q, i) => (
                <tr key={q.question} className={i < COMMON_QUESTION_CATEGORIES.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/70 align-top">{q.question}</td>
                  <td className="px-5 py-3.5 text-sm text-charcoal/80 align-top">{q.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
          Exact wording and look-back windows vary by carrier — general categories, not any one
          company&apos;s specific application.
        </p>

        {condition.medications && condition.medications.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
              Medications to know
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Carriers check your prescription history, so what you take can matter as much as
              the diagnosis itself:
            </p>
            <div className="mt-5 space-y-3">
              {condition.medications.map((m) => (
                <div key={m.name} className="rounded-xl border border-mist bg-canvas-raised p-5">
                  <p className="font-display text-base font-extrabold text-harbor">{m.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75">{m.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
              See the full{" "}
              <Link href="/pre-existing-conditions/prescriptions" className="text-harbor-mid underline">
                prescription history guide
              </Link>{" "}
              for how medications factor into underwriting more broadly.
            </p>
          </>
        )}

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What to do next
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The most reliable way to know exactly where you&apos;d land is to talk to a licensed
          agent who can match your specific health history to the carriers whose rules fit it
          best — rather than applying cold to one company and hoping. There&apos;s no cost to ask.
        </p>

        <div className="mt-10 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other conditions
        </h2>
        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {others.map((c) => (
            <li key={c.slug}>
              <Link href={`/pre-existing-conditions/${c.slug}`} className="text-sm text-harbor-mid hover:underline">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-charcoal/60">
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            ← See the full A–Z guide
          </Link>
        </p>
      </div>
    </div>
  );
}
