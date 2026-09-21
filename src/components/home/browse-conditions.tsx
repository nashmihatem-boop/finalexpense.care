import Link from "next/link";
import { CONDITIONS, CONDITION_CATEGORIES } from "@/lib/condition-facts";

export function BrowseConditions() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="rounded-3xl border border-harbor-mid/15 bg-canvas-alt p-6 sm:p-10">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            Browse by condition
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-extrabold text-harbor sm:text-3xl">
            Have a health condition? See how it&apos;s typically treated.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/70">
            A diagnosis rarely rules you out entirely. Tap any condition below for the typical
            outcome, or read the full guide to how simplified-issue underwriting works.
          </p>

          <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {CONDITION_CATEGORIES.map((category) => (
              <div key={category.label}>
                <p className="text-xs font-bold tracking-wide text-harbor/60 uppercase">{category.label}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.slugs.map((slug) => {
                    const condition = CONDITIONS.find((c) => c.slug === slug);
                    if (!condition) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/pre-existing-conditions/${slug}`}
                        className="rounded-full border border-mist bg-canvas-raised px-3.5 py-1.5 text-sm font-semibold text-harbor transition-colors hover:border-harbor-mid hover:bg-harbor hover:text-canvas"
                      >
                        {condition.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/pre-existing-conditions"
            className="mt-9 inline-block text-sm font-bold text-harbor-mid hover:underline"
          >
            See the full pre-existing conditions guide →
          </Link>
        </div>
      </div>
    </section>
  );
}
