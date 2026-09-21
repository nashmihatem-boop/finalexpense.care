import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Level vs. Graded vs. Modified Life Insurance",
  description:
    "A side-by-side look at the three ways a final expense death benefit can be structured, plus what happens when none of them fit.",
};

const OUTCOMES = [
  {
    slug: "level-benefit",
    name: "Level",
    duringWindow: "No waiting window — 100% of the benefit applies from day one",
    after: "No change. It's already full.",
    summary: "The full death benefit, in place immediately, at the lowest cost of the three.",
  },
  {
    slug: "graded-benefit",
    name: "Graded",
    duringWindow: "A partial benefit that increases every year",
    after: "100% of the benefit",
    summary: "A real, growing payout from day one that reaches full value on a schedule.",
  },
  {
    slug: "modified-benefit",
    name: "Modified",
    duringWindow: "Premiums paid back, plus interest — not a death benefit",
    after: "100% of the benefit",
    summary: "Your premiums returned with interest during the window, then full coverage after.",
  },
];

export default function LevelVsGradedVsModifiedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Level vs. Graded vs. Modified
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Level vs. graded vs. modified: the three ways your payout can be structured
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          When you apply for final expense coverage, the health questions on your application
          sort you into one of a small number of outcomes — and that outcome decides when your
          family actually receives the full death benefit. Here&apos;s a quick side-by-side of
          the three main outcomes, plus the fourth path that exists for health histories none of
          them fit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The three outcomes, side by side
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every simplified-issue policy — meaning no medical exam, just health questions — is
          structured one of these three ways. The difference only matters if death occurs from
          natural causes during a carrier-set initial window, commonly the first two years of the
          policy; after that window, all three pay the exact same thing.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Outcome</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">During the window, natural death</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">After the window</th>
              </tr>
            </thead>
            <tbody>
              {OUTCOMES.map((o, i) => (
                <tr key={o.slug} className={i < OUTCOMES.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-4 text-sm font-semibold text-charcoal/70 align-top">
                    <Link href={`/level-vs-graded-vs-modified/${o.slug}`} className="text-harbor-mid hover:underline">
                      {o.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-sm text-charcoal align-top">{o.duringWindow}</td>
                  <td className="px-5 py-4 text-sm text-charcoal/70 align-top">{o.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">One thing all three share</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            For a death by accident, the full benefit is generally paid immediately under any of
            the three outcomes, no matter how new the policy is. The waiting window only ever
            applies to death from natural causes — it isn&apos;t a delay on the policy as a
            whole.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What decides which one you get
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Underwriters are mainly weighing two things: how stable and well-managed your health is
          right now, and how recent or severe anything more serious in your history is. A
          condition that&apos;s controlled, treated, and hasn&apos;t required a recent
          hospitalization tends to move toward level. Something more recent, or still being
          stabilized, tends to move toward graded or modified. On top of that, every carrier sets
          its own health questions and its own look-back period for how far back it asks about a
          diagnosis — so the same person can land in a different tier depending entirely on which
          carrier reviews the application.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The fourth outcome: when none of the three fit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some health histories fall outside what a given carrier is willing to offer through
          simplified issue at all — that&apos;s a decline, and it&apos;s specific to that one
          carrier, not a verdict on your eligibility everywhere. Guaranteed acceptance exists
          specifically as the backstop for this situation: it skips health questions entirely and
          takes applicants within the eligible age range regardless of health history, in exchange
          for a two-year waiting period on natural-cause death. It&apos;s a different track from
          the three outcomes above, and it&apos;s covered in full in{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            the full pre-existing conditions guide
          </Link>
          .
        </p>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">Go deeper on each outcome</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/level-vs-graded-vs-modified/level-benefit" className="font-semibold text-harbor-mid hover:underline">
                Level benefit coverage, explained →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                Why it&apos;s the lowest-cost tier, and what health profile typically qualifies.
              </p>
            </li>
            <li>
              <Link href="/level-vs-graded-vs-modified/graded-benefit" className="font-semibold text-harbor-mid hover:underline">
                Graded benefit coverage, explained →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                How the step-up payout works, and why it&apos;s real, valid coverage.
              </p>
            </li>
            <li>
              <Link href="/level-vs-graded-vs-modified/modified-benefit" className="font-semibold text-harbor-mid hover:underline">
                Modified benefit coverage, explained →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                How the return-of-premium-plus-interest structure works, and how it differs from graded.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full pre-existing conditions guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
