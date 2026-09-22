import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Grandparent",
  description:
    "How grandchildren and extended family typically arrange final expense coverage for a grandparent, and how to coordinate with the rest of the family.",
  openGraph: { title: "Final Expense Insurance for a Grandparent", description: "How grandchildren and extended family typically arrange final expense coverage for a grandparent, and how to coordinate with the rest of the family." },

  twitter: { title: "Final Expense Insurance for a Grandparent", description: "How grandchildren and extended family typically arrange final expense coverage for a grandparent, and how to coordinate with the rest of the family." },
};

export default function GrandparentsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Grandparents
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Buying final expense insurance for a grandparent
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Grandchildren and extended family arrange final expense coverage more often than you
          might think — especially when a grandparent&apos;s own children aren&apos;t in a
          position to, or when a grandchild has simply grown closest to them. Here&apos;s what to
          know if that&apos;s your situation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why grandchildren and extended family step in
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Family circumstances don&apos;t always follow the tidy version. A grandparent&apos;s
          children may live far away, be dealing with their own health or financial stretch, or
          simply not be the ones with the closest day-to-day relationship. A grandchild — often an
          adult with more financial stability and a strong bond with their grandparent — sometimes
          ends up the natural person to notice the gap and do something about it. It can also come
          up after a scare: a fall, a diagnosis, or a hospital stay that makes the lack of coverage
          suddenly feel urgent instead of hypothetical.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurable interest across a generation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The same rule that applies to every relationship on this site applies here: you need
          insurable interest — a genuine financial or emotional stake in your grandparent&apos;s
          life — to buy a policy on them, and your grandparent still has to consent and answer the
          health questions themselves. A grandchild-grandparent relationship is generally
          recognized the same way a sibling relationship is: real, but one step further from the
          most obvious cases like a spouse or a parent and child, so a carrier may ask a few
          clarifying questions about the relationship and why you&apos;re the one applying. Our{" "}
          <Link href="/final-expense-insurance-for/sibling" className="text-harbor-mid underline">
            guide to buying coverage for a sibling
          </Link>{" "}
          goes deeper on how insurable interest works in practice, and it applies here in much the
          same way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coordinating with the rest of the family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because a grandparent typically has multiple children and grandchildren who could
          reasonably be involved, it&apos;s worth a quick family conversation before you apply —
          mainly so you don&apos;t end up with two relatives independently arranging overlapping
          coverage, or disagreement later about who the beneficiary should be. Clarify up front
          whether you&apos;re buying this to relieve the burden from your grandparent&apos;s own
          children specifically, to be reimbursed by the family after the fact, or simply because
          you want to be the one who handles it. None of those reasons need anyone&apos;s
          permission, but naming the reason out loud tends to prevent confusion later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What your grandparent needs to do
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          As with any adult being insured, your grandparent has to be part of the process — giving
          consent, answering health questions honestly and in their own words, and signing the
          application. You can absolutely lead on research, comparing options, and handling the
          logistics, but plan for your grandparent to be present, even briefly, when the
          application actually happens.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
