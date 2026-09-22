import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { US_STATES } from "@/lib/us-states";

export const metadata: Metadata = {
  title: "Final Expense Insurance by State",
  description:
    "Final expense insurance is regulated state by state. Pick your state to see how coverage works where you live and get a free quote.",
  openGraph: { title: "Final Expense Insurance by State", description: "Final expense insurance is regulated state by state. Pick your state to see how coverage works where you live and get a free quote." },

  twitter: { title: "Final Expense Insurance by State", description: "Final expense insurance is regulated state by state. Pick your state to see how coverage works where you live and get a free quote." },
};

const FAQS = [
  {
    q: "Does final expense insurance cost more in some states?",
    a: "Insurance is regulated at the state level, so not every carrier or plan is available everywhere — but within your state, your premium is driven mainly by your age, gender, tobacco use, health, and the coverage amount you choose, not by your ZIP code.",
  },
  {
    q: "Will my policy still cover me if I move?",
    a: "Yes. Final expense insurance is a whole life policy tied to you, not your address. Once it's in force, your coverage and premium stay the same no matter which state you move to later.",
  },
  {
    q: "What's the difference between final expense and burial insurance?",
    a: "Nothing — they're different names for the same thing. “Burial insurance,” “funeral insurance,” and “final expense insurance” all describe the same small whole life policy built to cover end-of-life costs.",
  },
  {
    q: "Do I need to talk to an agent licensed in my specific state?",
    a: "Yes — agents have to be licensed in the state where you live to sell you a policy there. When you request a quote, we match you with an agent and carriers actually licensed to do business in your state.",
  },
];

export default function CoverageByStatePage() {
  return (
    <div className="bg-canvas">
      <section className="bg-gradient-to-r from-harbor-deep via-harbor to-harbor-deep">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="font-display text-3xl font-extrabold text-canvas sm:text-4xl">
            Final expense insurance by state
          </h1>
          <p className="mt-4 text-lg text-canvas/75">
            Coverage, carriers, and licensing all work state by state. Pick yours below to get
            started.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as="link" href="/get-quote" size="lg">
              See your rate now
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-2xl border border-mist bg-canvas-alt p-7">
          <p className="text-base leading-relaxed text-charcoal/80">
            FinalExpense.care helps people across the country compare final expense and burial
            insurance from multiple licensed carriers. Select your state below to see what to
            expect and get matched with an agent licensed to help where you live.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            We&apos;re an independent agency, not a single insurance company — so you see real
            options across carriers, with no obligation to enroll.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Select your state
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {US_STATES.map((s) => (
            <Link
              key={s.code}
              href={`/coverage-by-state/${s.code.toLowerCase()}`}
              className="flex items-center gap-3 rounded-xl border border-mist bg-canvas-raised px-4 py-3.5 transition-colors hover:border-harbor-mid/50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-harbor font-display text-xs font-extrabold text-brass">
                {s.code}
              </span>
              <span className="text-sm font-semibold text-charcoal">{s.name}</span>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-extrabold text-harbor">
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
      </div>
    </div>
  );
}
