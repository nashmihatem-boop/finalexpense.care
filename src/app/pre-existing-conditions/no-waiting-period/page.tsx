import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "No Waiting Period Final Expense Insurance",
  description: "How to qualify for day-one final expense coverage with no waiting period, even with a health condition.",
  openGraph: {
    title: "No Waiting Period Final Expense Insurance",
    description: "How to qualify for day-one final expense coverage with no waiting period, even with a health condition.",
  },
  twitter: {
    title: "No Waiting Period Final Expense Insurance",
    description: "How to qualify for day-one final expense coverage with no waiting period, even with a health condition.",
  },
};

export default function NoWaitingPeriodPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / No Waiting Period Coverage
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Getting day-one coverage with no waiting period
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A policy with no waiting period means your family receives the full death benefit from
          the day your first payment is processed — for any covered cause of death. It&apos;s
          the outcome most people want, and for a lot of applicants with a health condition,
          it&apos;s genuinely reachable.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who typically qualifies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Day-one, no-wait coverage (what carriers call a &quot;level&quot; outcome) comes through
          simplified-issue underwriting — the path with health questions but no medical exam. The
          key factor isn&apos;t whether you have a diagnosis on paper; it&apos;s whether the
          condition is stable, controlled, and being actively managed. Well-controlled high blood
          pressure, treated high cholesterol, stable type 2 diabetes, and sleep apnea managed with
          a CPAP machine are all common examples of conditions that regularly still land at level.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What usually rules it out
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          More serious or recent health events — a heart attack or stroke in the last year or two,
          an active cancer treatment, or a progressive condition like COPD requiring oxygen — tend
          to push an application toward a graded or modified outcome instead, which phases in the
          full benefit over the first couple of years rather than paying it immediately. That
          isn&apos;t a dead end; it&apos;s simply a different, still-real form of coverage. See
          our{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            guide to how carriers tier applicants
          </Link>{" "}
          for the full breakdown.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          One important distinction
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Don&apos;t confuse &quot;no waiting period&quot; with &quot;no health questions.&quot;
          Guaranteed-acceptance policies skip health questions entirely, but they always carry a
          two-year waiting period for natural-cause death in exchange. A policy that claims both
          no health questions and no waiting period at once doesn&apos;t exist in this market —
          treat that combination as a red flag.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to find out where you&apos;d land
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since every carrier sets its own rules for what qualifies as &quot;stable&quot; or
          &quot;controlled,&quot; the most reliable way to know your actual outcome is to talk to
          a licensed agent who can match your specific health history against multiple carriers,
          rather than guessing or applying to just one and hoping.
        </p>

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
