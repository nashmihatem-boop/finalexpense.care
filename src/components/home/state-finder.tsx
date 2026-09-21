"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { US_STATES } from "@/lib/us-states";

export function StateFinder() {
  const router = useRouter();

  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Coverage varies by location
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Find coverage in your state
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-charcoal/75">
          Carrier availability, pricing, and policy features can differ depending on where you
          live. We&apos;ve built a dedicated guide for every state so you can see your local
          options before you talk to anyone.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row">
          <select
            aria-label="Select your state"
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) router.push(`/coverage-by-state/${e.target.value.toLowerCase()}`);
            }}
            className="w-full rounded-full border border-mist bg-canvas-raised px-5 py-3 text-sm font-semibold text-harbor shadow-[0_1px_2px_rgba(20,43,86,0.06)] focus:border-harbor-mid focus:outline-none"
          >
            <option value="" disabled>
              Choose your state…
            </option>
            {US_STATES.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>
          <Button as="link" href="/coverage-by-state" variant="outline" size="md" className="w-full shrink-0 sm:w-auto">
            Browse all states →
          </Button>
        </div>
      </div>
    </section>
  );
}
