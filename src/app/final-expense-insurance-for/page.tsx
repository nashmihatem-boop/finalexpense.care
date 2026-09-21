import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Family Member",
  description:
    "Final expense insurance is often bought by one family member for another — a spouse, sibling, parent, grandparent, or child. Here's how it works for each relationship.",
};

const RELATIONSHIPS: { href: string; title: string; description: string; image: string }[] = [
  {
    href: "/final-expense-insurance-for/spouse",
    title: "Your spouse",
    description: "Covering each other so the survivor never has to pay final costs out of pocket.",
    image: "/photos/family-caregiving-hands.jpg",
  },
  {
    href: "/final-expense-insurance-for/sibling",
    title: "A sibling",
    description: "What insurable interest means when you're buying coverage on a brother or sister.",
    image: "/photos/family-siblings-together.jpg",
  },
  {
    href: "/final-expense-insurance-for/parents",
    title: "Your parents",
    description: "The most common version of this — starting the conversation and getting it set up.",
    image: "/photos/family-parent-adult-child-documents.jpg",
  },
  {
    href: "/final-expense-insurance-for/grandparents",
    title: "A grandparent",
    description: "How grandchildren and extended family typically step in, and how to coordinate.",
    image: "/photos/family-grandparent-grandchild.jpg",
  },
  {
    href: "/final-expense-insurance-for/child",
    title: "A child",
    description: "A different, much smaller product than senior final expense coverage — explained honestly.",
    image: "/photos/family-multigenerational-group.jpg",
  },
];

export default function FinalExpenseInsuranceForPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Who It&apos;s For
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Buying final expense insurance for someone else
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Most of what we write about on this site assumes you&apos;re shopping for your own
          coverage. In practice, a huge share of final expense applications start a different way
          — one family member picks up the phone, starts the conversation, or fills out the first
          form on behalf of someone else. If that&apos;s you, you&apos;re not doing anything
          unusual. Here&apos;s how it typically works, and what changes depending on who
          you&apos;re buying for.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why it&apos;s so often one family member handling it for another
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance protects the people left behind, which means the person with the
          most urgency about getting it in place often isn&apos;t the person it covers. An aging
          parent might mean to get around to it and simply never has. A spouse who handles the
          household&apos;s paperwork and bills is the natural one to start the process for both of
          them. An adult child who just helped plan a funeral for someone else&apos;s parent
          suddenly doesn&apos;t want to leave the same scramble to their own siblings. A sibling
          without kids of their own may not have anyone else positioned to think about it. The
          relationship changes, but the reason is almost always the same: nobody wants a death in
          the family to also become an unplanned financial emergency.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The legal basics: insurable interest and consent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You can&apos;t buy a life insurance policy on just anyone. Every application is built
          around a principle called &quot;insurable interest&quot; — the person applying for or
          owning the policy has to have a genuine financial or emotional stake in the insured
          person&apos;s continued life. It&apos;s a long-standing concept across the entire
          insurance industry, not a rule specific to any one company, and it exists to keep life
          insurance from being used as a way to bet on someone else&apos;s death. Close family —
          a spouse, a parent, a child, a sibling, a grandparent — is generally recognized as having
          insurable interest in each other without much question.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          What insurable interest doesn&apos;t do is remove the insured person from the process.
          With very few exceptions, the adult whose life is being covered still has to consent to
          the policy, answer the health questions themselves, and sign the application. How that
          plays out — and how closely a carrier looks at the relationship — varies a bit depending
          on who&apos;s involved, which is exactly what each guide below walks through.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Find your situation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The core process is similar across every relationship. The details worth knowing ahead
          of time are different for each one.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {RELATIONSHIPS.map((r) => (
            <TopicCard key={r.href} href={r.href} title={r.title} description={r.description} image={r.image} />
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          How to get started
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Whoever you&apos;re buying for, the process starts the same way: an honest conversation
          about wanting to do this and why (skip this only when you&apos;re insuring your own
          young child). From there, gather the basics — age, general health, and state of
          residence, since licensing and coverage details work state by state. A licensed agent
          can then walk you both through what you&apos;d actually qualify for, including price and
          whether coverage would start immediately or phase in over time.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Curious how coverage works specifically where you live?{" "}
          <Link href="/coverage-by-state" className="text-harbor-mid underline">
            See coverage by state
          </Link>
          , or jump straight to a quote below.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Final Expense Insurance
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
