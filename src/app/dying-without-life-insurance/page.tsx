import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Happens If You Die Without Life Insurance",
  description:
    "A plain-language look at who ends up covering funeral and final expenses when there's no life insurance policy in place.",
};

export default function DyingWithoutLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What happens if you die without life insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This isn&apos;t meant to be alarming — it&apos;s meant to be useful. Understanding
          what actually happens, financially, when someone dies without coverage in place is
          the clearest way to see what life insurance is actually for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral costs don&apos;t wait for anything to get sorted out
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A funeral home typically expects payment at or near the time of service, well before
          an estate has been settled or other financial matters resolved. Without a policy or a
          prepaid arrangement already in place, that bill usually falls to whoever is willing
          and able to pay it — most often the immediate family, sometimes by putting the cost on
          a credit card or taking out a personal loan simply to move forward on a tight
          timeline.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The estate is the first source, but it isn&apos;t automatic or fast
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A deceased person&apos;s own estate is generally the first source used to pay
          outstanding debts and final expenses, before anything passes to heirs. In practice,
          that process — probate — takes time, and many estates don&apos;t hold enough easily
          accessible cash to cover a funeral bill that&apos;s due immediately. Even when the
          estate is eventually enough to cover it, &quot;eventually&quot; doesn&apos;t help on
          the day a funeral home needs to be paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          It rarely arrives as just one bill
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and burial costs tend to show up alongside everything else that doesn&apos;t
          pause for a loss — final medical bills, existing credit card balances, and ongoing
          household costs like rent, a mortgage, or utilities. Individually, none of those may
          be unmanageable. Arriving all at once, on top of a new funeral bill, and often on top
          of losing a household income, is what actually puts families in a difficult financial
          position.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What coverage changes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A life insurance or final expense policy exists specifically to close this gap before
          it opens. Instead of family members covering costs out of pocket and sorting out
          reimbursement later, a named beneficiary can typically receive the death benefit in
          cash within days of a claim being filed — money that&apos;s theirs to use immediately,
          with no probate process required first. It doesn&apos;t prevent the loss. It just
          means the people left behind aren&apos;t also left with the bill.
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
