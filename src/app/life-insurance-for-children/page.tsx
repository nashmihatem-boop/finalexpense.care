import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance for Children, Explained",
  description:
    "How small whole life policies and riders for children work, why families buy them, and how they differ from senior-focused final expense coverage.",
};

export default function LifeInsuranceForChildrenPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance for children, explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Life insurance for a child is a real, if niche, corner of the market — and a different
          product from the senior-focused final expense coverage that&apos;s the main focus of
          this site. Here&apos;s what it actually is, and isn&apos;t.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What it typically looks like
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Coverage for a child is usually structured one of two ways: a small standalone whole
          life policy in the child&apos;s name, or a{" "}
          <Link href="/life-insurance-riders" className="font-semibold text-harbor-mid hover:underline">
            rider
          </Link>{" "}
          attached to a parent&apos;s own policy that adds a modest amount of coverage on the
          child. Either way, the amounts involved tend to be modest — this isn&apos;t designed
          as a large policy, and coverage amounts are set with that in mind. Because it&apos;s
          whole life coverage when written as its own policy, it can also begin building a
          small amount of cash value over time, the same basic mechanism used in adult whole
          life and final expense policies.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why families buy it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The reasoning usually comes down to one of two things. The first is locking in future
          insurability — buying coverage while a child is young and healthy guarantees
          they&apos;ll have some life insurance in place as an adult, regardless of what health
          conditions might develop later, often with the option to convert to a larger adult
          policy at set points without new health questions. The second is starting cash value
          early, treating the slow, steady build of a whole life policy as a small, long-horizon
          head start. Neither reason is about replacing income, which is the usual driver behind
          adult life insurance — a child doesn&apos;t have dependents relying on their earnings,
          so the purpose here is genuinely different.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How this is different from final expense insurance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance, the focus of the rest of this site, is built for older adults
          and sized around a specific, near-term purpose: making sure funeral, burial, and other
          end-of-life costs don&apos;t become a burden on family. Children&apos;s coverage is a
          smaller, optional, long-horizon product built around a completely different life stage
          and purpose. If a juvenile policy or rider is specifically what you&apos;re looking
          for, it&apos;s worth asking an agent directly, since it&apos;s a distinct product from
          what most of this site is written around.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
