import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Prepaid Funeral Plans vs. Final Expense Insurance",
  description:
    "How a prepaid funeral plan works, how it differs from final expense insurance, and the real tradeoffs to weigh before choosing either.",
  openGraph: { title: "Prepaid Funeral Plans vs. Final Expense Insurance", description: "How a prepaid funeral plan works, how it differs from final expense insurance, and the real tradeoffs to weigh before choosing either." },

  twitter: { title: "Prepaid Funeral Plans vs. Final Expense Insurance", description: "How a prepaid funeral plan works, how it differs from final expense insurance, and the real tradeoffs to weigh before choosing either." },
};

export default function PrepaidFuneralPlansPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Prepaid Plans vs. Insurance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Prepaid funeral plans vs. final expense insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Both are ways to plan ahead financially so a funeral isn&apos;t a scramble for whoever
          is left to handle it. They work in genuinely different ways, though, and the difference
          matters more than it might seem to at first.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a prepaid funeral plan is
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A prepaid, or &quot;preneed,&quot; funeral plan is a contract with one specific funeral
          home. You sit down with that provider, choose the services and merchandise you want, and
          pay for that package in advance, either as a lump sum or in installments. Depending on
          the state and the provider, the money is typically placed in a trust or used to fund a
          small life insurance policy or annuity earmarked for that plan, and the rules protecting
          those funds vary by state. The appeal is straightforward: the decisions are made, the
          arrangement is on file, and, depending on how the contract is structured, the price may
          be locked in even if that provider&apos;s prices rise later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What final expense insurance is, and how it&apos;s different
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance is a life insurance policy. When you pass away, it pays a cash
          death benefit directly to the beneficiary you named — not to a funeral home, and not
          earmarked for any specific use. Your beneficiary can use that money at any funeral home
          or cemetery, in any city, for any combination of services, or even put part of it toward
          something else entirely if that turns out to matter more at the time. You decide the
          coverage amount upfront, based on your own estimate of what you want it to cover — it
          isn&apos;t tied to one provider&apos;s package or price list.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The real tradeoffs of a prepaid plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A prepaid plan&apos;s biggest weakness is portability. The money is tied to one specific
          funeral home, so if you move to a new city or state, using those funds elsewhere can
          range from straightforward to genuinely difficult, depending on the contract and whether
          a new provider will honor it. Funeral homes also get sold, merge, or close — and while
          reputable providers generally work to honor existing preneed contracts through a
          transfer, it can add stress and delay at exactly the moment your family doesn&apos;t
          need more of either. There&apos;s also less flexibility: the specific services and
          merchandise were chosen at the time of signing, sometimes decades before they&apos;re
          used, and preferences or circumstances can change in the meantime. Refund and
          cancellation terms vary a lot by state and by contract, so it&apos;s worth reading the
          fine print, not just the sales brochure.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The real tradeoffs of final expense insurance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In fairness, insurance has its own tradeoffs. Because the payout is cash rather than a
          locked-in package, it depends on your beneficiary actually following through and using
          it as intended — there&apos;s no provider or contract enforcing that. It also means none
          of the decisions are made in advance; your family will still need to make the same
          choices a prepaid plan would have settled ahead of time, just without the financial
          uncertainty hanging over them. And it&apos;s an ongoing premium rather than a single
          upfront transaction, though premiums on a final expense policy are typically designed to
          stay level for the life of the policy.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Which one actually fits</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Neither is a strictly better answer. Plenty of people choose final expense insurance
            specifically for the flexibility and portability, and plenty of people value having
            every decision already made and paid for through a prepaid plan. Some families use
            both. Either way, get a current, itemized estimate from a local provider before you
            commit to anything, and size whatever you choose — plan or policy — to that number
            plus a cushion.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the funeral cost guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
