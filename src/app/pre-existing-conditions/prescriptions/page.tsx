import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDICATIONS } from "@/lib/medication-facts";

export const metadata: Metadata = {
  title: "How Prescription History Affects Your Application",
  description: "Why the medications you take can matter as much as the diagnosis behind them when applying for final expense insurance.",
  openGraph: {
    title: "How Prescription History Affects Your Application",
    description: "Why the medications you take can matter as much as the diagnosis behind them when applying for final expense insurance.",
  },
  twitter: {
    title: "How Prescription History Affects Your Application",
    description: "Why the medications you take can matter as much as the diagnosis behind them when applying for final expense insurance.",
  },
};

export default function PrescriptionsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / Prescription History
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How prescription history affects your application
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          On a simplified-issue application, the medications you take can matter as much as the
          diagnosis behind them. Carriers run a prescription history check as part of their
          review — here&apos;s why, and what it means for a few of the most common medication
          categories.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why carriers check your prescriptions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue skips the medical exam, but carriers still want confidence that your
          health answers are accurate. A prescription history check is the main way they confirm
          that — it&apos;s a quick, behind-the-scenes lookup, not a full medical record request.
          If your answers and your prescription history line up, the check works in your favor by
          speeding up approval. If they don&apos;t match, it can lead to a decline or a worse
          tier than you&apos;d otherwise get, which is exactly why answering every health question
          honestly matters more than trying to present a cleaner picture.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some medications also tell carriers something on their own, independent of what you
          disclosed — a specific drug combination can read as a marker for a condition you might
          not have thought to mention. That&apos;s part of why the medication itself, not just
          the diagnosis, factors into the review.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Medication categories
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {MEDICATIONS.map((m) => (
            <Link
              key={m.slug}
              href={`/pre-existing-conditions/prescriptions/${m.slug}`}
              className="rounded-2xl border border-mist bg-canvas-raised p-6 transition-colors hover:border-harbor-mid/50"
            >
              <p className="font-display text-lg font-extrabold text-harbor">{m.name}</p>
              <p className="mt-1 text-xs text-charcoal/50">{m.examples}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">{m.summary}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
