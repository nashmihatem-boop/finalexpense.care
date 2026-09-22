import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance and Cremation Costs",
  description:
    "How a final expense policy's cash benefit works if your family chooses cremation, and how it differs from a prepaid cremation plan.",
  openGraph: { title: "Final Expense Insurance and Cremation Costs", description: "How a final expense policy's cash benefit works if your family chooses cremation, and how it differs from a prepaid cremation plan." },

  twitter: { title: "Final Expense Insurance and Cremation Costs", description: "How a final expense policy's cash benefit works if your family chooses cremation, and how it differs from a prepaid cremation plan." },
};

export default function CremationCoveragePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Cremation Coverage
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Does final expense insurance cover cremation?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Yes, in the sense that matters most: the cash benefit your policy pays out can be used
          for cremation. But it helps to understand exactly how that works, because final expense
          insurance isn&apos;t a &quot;cremation-only&quot; product, and it works differently from
          a prepaid cremation plan.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the benefit actually works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A final expense policy pays a cash death benefit directly to whoever you name as your
          beneficiary — not to a funeral home, cremation provider, or any other business. Your
          beneficiary decides how to use it: cremation, a memorial gathering, remaining medical
          bills, or anything else that comes up. Nothing in the policy ties the payout to
          cremation specifically. It&apos;s simply money your family can direct however the
          moment calls for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How this differs from a prepaid cremation plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A prepaid cremation plan, often sold directly by a funeral home or cremation provider,
          locks in a specific service and provider in advance. That can work well for someone who
          already knows exactly what they want and where. But it&apos;s typically harder to
          transfer or redirect if you move, change your mind, or your family ends up needing
          something different when the time actually comes. A final expense policy&apos;s cash
          benefit isn&apos;t tied to any one business, so it stays flexible no matter what your
          family ultimately decides.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Choosing a coverage amount if cremation is the plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation is generally a less expensive final arrangement than a traditional burial, but
          costs still vary widely by region, provider, and whether a memorial service, urn, or
          gathering is included. Rather than guessing at a figure, it helps to think through what
          you actually want first — direct cremation alone, or cremation with a service attached —
          then work with a licensed agent to land on a coverage amount that reasonably fits the
          plan.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Combining both isn&apos;t unusual
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some people already have a prepaid cremation arrangement and still choose final expense
          insurance specifically to cover what the prepaid plan doesn&apos;t touch — outstanding
          medical bills, other debts, or extra support for family. The two aren&apos;t competing
          products. One locks in a specific service; the other provides flexible cash your family
          can point at whatever actually needs it.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/is-it-worth-it" className="font-semibold text-harbor-mid hover:underline">
              Still deciding? An honest look at whether it&apos;s worth it →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
