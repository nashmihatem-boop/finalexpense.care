import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Child",
  description:
    "Final expense coverage for a child is a different, much smaller product than senior final expense insurance. Here's an honest look at how it works.",
};

export default function ChildPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Child
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a child
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          If you searched for this, it&apos;s worth being upfront: what people usually mean by
          &quot;final expense insurance for a child&quot; is a different, much smaller product
          than the senior-focused coverage the rest of this site is built around. It&apos;s a real
          option, but a niche one — here&apos;s an honest look at what it actually is.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A different, much smaller product than senior final expense coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Everywhere else on this site, &quot;final expense insurance&quot; refers to coverage
          built for seniors — sized to handle funeral and end-of-life costs for someone later in
          life. A policy on a child is a different category entirely, usually a small juvenile
          whole life policy. It exists, and it&apos;s legitimate, but it&apos;s a much smaller
          corner of the insurance world, and it serves a different purpose than the coverage the
          rest of this site focuses on. We&apos;d rather say that plainly than stretch our usual
          content to fit a situation it wasn&apos;t written for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why some parents consider it anyway
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The honest reason usually isn&apos;t about expecting the worst — a child&apos;s death is
          thankfully rare, and most parents know that. The appeal is mostly about optionality. A
          small whole life policy taken out on a child locks in insurability for life: whatever
          health conditions might develop later, the coverage already in place isn&apos;t
          affected, and it&apos;s often possible to convert or grow it into a larger adult policy
          down the line without new health questions. It also locks in a low premium permanently,
          since cost is tied to the age you start. Some families also treat it as a small, slow
          savings vehicle, since whole life coverage builds some cash value over time. Covering an
          actual funeral cost is rarely the main motivation — it&apos;s usually further down the
          list than the other two reasons.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it works differently for a child
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since a minor can&apos;t enter into a contract, a parent or legal guardian is the
          applicant and owner by default, with the child as the insured. Underwriting tends to be
          light — often little more than a short health form, since children are, statistically,
          about as low-risk as an applicant gets. Coverage amounts are typically modest, in
          keeping with the policy&apos;s purpose. Exact terms, minimum ages, and how conversion
          options work all vary by carrier, so this is very much a &quot;talk to an agent about
          specifics&quot; kind of product.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Things worth weighing before you buy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because the likelihood of ever using the death benefit is thankfully very low, it&apos;s
          worth being clear-eyed about what you&apos;re actually buying: mostly locked-in future
          insurability and a small amount of lifelong coverage, not a product designed around
          probability the way senior final expense insurance is. That&apos;s not a reason to avoid
          it — plenty of families find real value in it — but it&apos;s a different value than the
          coverage the rest of this site describes, and it&apos;s worth choosing it for the right
          reason rather than out of a sense that every family &quot;needs&quot; one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Looking for coverage for yourself or a parent instead?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you landed here but you&apos;re actually trying to cover funeral or final costs for
          yourself or an aging family member, that&apos;s the coverage the rest of this site
          focuses on. Our{" "}
          <Link href="/final-expense-insurance" className="text-harbor-mid underline">
            final expense insurance guide
          </Link>{" "}
          is the right place to start, or see the guide for{" "}
          <Link href="/final-expense-insurance-for/parents" className="text-harbor-mid underline">
            buying coverage for a parent
          </Link>{" "}
          specifically.
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
