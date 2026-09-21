import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Independent vs. Captive vs. Direct: How You're Buying Insurance",
  description:
    "An honest explanation of the three ways to buy final expense insurance — captive agent, independent agent, or direct from a carrier — and the real tradeoffs of each.",
};

export default function IndependentVsCaptiveVsDirectPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Independent vs. Captive vs. Direct
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Independent vs. captive vs. direct: how you&apos;re buying insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Knowing what kind of help you&apos;re getting matters as much as knowing what
          you&apos;re buying. There are three basic ways to buy final expense insurance, and each
          comes with a genuinely different relationship between you, the person you&apos;re
          talking to, and the insurance company. None of the three is a scam — they&apos;re just
          different, and worth understanding honestly rather than through whichever version the
          person selling you happens to prefer.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A captive agent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A captive agent works for, and represents, one specific insurance company. Everything
          they sell you will be that company&apos;s product. The advantage is depth — a captive
          agent typically knows their one company&apos;s underwriting rules, products, and
          paperwork thoroughly. The tradeoff is breadth: if that company&apos;s rules don&apos;t
          fit your health history or budget well, a captive agent has no other option to offer
          you, even if a better one exists somewhere else.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          An independent agent or agency
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An independent agent — which is what this site connects you with — is licensed to sell
          policies from multiple insurance companies rather than just one. That means the same
          conversation about your health, age, and budget can be matched against several
          carriers&apos; rules instead of just one, which matters in this market specifically
          because carriers genuinely differ in who they&apos;ll cover and at what rate — a health
          condition that gets a poor outcome at one company can get a fine one at another. The
          tradeoff is that an independent agent&apos;s depth on any single carrier is naturally a
          little shallower than a captive agent who only ever works with one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Buying direct from a carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Buying direct means going straight to an insurance company&apos;s own website or call
          center, with no agent — captive or independent — involved in the transaction at all.
          The advantage is speed and simplicity for someone who already knows exactly what they
          want. The tradeoff is that you&apos;re doing your own comparison shopping and your own
          interpretation of underwriting questions, with nobody on your side of the table matching
          your situation against other options if the first answer isn&apos;t a good one.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">How you buy</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Who they represent</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">Carriers compared for you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Captive agent</td>
                <td className="px-5 py-4 text-sm text-charcoal">One insurance company</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Just that company&apos;s own options</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Independent agent</td>
                <td className="px-5 py-4 text-sm text-charcoal">You — across multiple companies</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Several companies, matched to your situation</td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Direct from a carrier</td>
                <td className="px-5 py-4 text-sm text-charcoal">The carrier itself</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Just that one company, no agent involved</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          None of these is automatically the right or wrong choice
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A captive agent can be exactly right for someone who already knows and trusts a
          specific company. Buying direct can be exactly right for a healthy applicant who wants
          the fastest possible path. An independent agent tends to matter most when your health
          history, age, or budget make it genuinely unclear which carrier will treat you best —
          which describes a lot of final expense buyers, but not all of them. The honest answer is
          to know which of the three you&apos;re actually talking to, and choose the one that
          matches what you need, rather than assume.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
