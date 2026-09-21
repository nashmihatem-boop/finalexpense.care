import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Hidden Costs of Dying Families Don't Plan For",
  description:
    "Beyond the funeral itself — probate, medical bills, debt, final utility payments, family travel, and lost income are costs many families don't think about until it's too late.",
};

export default function HiddenCostsOfDyingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          The hidden costs of dying that families don&apos;t plan for
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          When people think about planning for the cost of a death in the family, the funeral is
          usually the first thing that comes to mind — and often the only thing. But a funeral is
          rarely the only bill that shows up. Several other costs tend to surface in the weeks and
          months afterward, and because they&apos;re easy to overlook in advance, they&apos;re
          also the ones most likely to catch a family off guard.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Probate and estate administration
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If the person who died owned property in their name alone — a house, a car, a bank
          account without a named beneficiary — that property typically has to pass through
          probate, the court process that validates a will (or applies state law if there
          isn&apos;t one) and formally transfers ownership. Probate can involve court filing fees,
          and often an attorney or executor to manage the paperwork, notify creditors, and see the
          process through. It also takes time, sometimes months, during which certain assets may
          not be readily available to the family.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Outstanding medical bills
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A final illness often comes with a final round of medical bills — hospital stays,
          specialists, equipment, home health care — that may still be arriving after death.
          Depending on how they&apos;re structured, some of these bills become a claim against the
          estate rather than a debt any family member personally owes, but they still have to be
          addressed before an estate can be settled, and they&apos;re rarely small.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Credit cards and other personal debt
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Credit card balances, personal loans, and similar unsecured debt generally don&apos;t
          just disappear at death — they&apos;re typically paid out of the estate before anything
          is distributed to heirs. Families are often surprised by how much of an estate&apos;s
          value can go toward settling debts most people never thought of as part of &quot;final
          expenses&quot; at all.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Final utility and household bills
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Life doesn&apos;t pause for grief. Rent or a mortgage payment, utilities, insurance
          premiums, and other recurring household bills keep coming due, often while the family is
          focused on far more pressing matters. Someone still has to keep the lights on and the
          payments current until the household&apos;s affairs are sorted out, which can mean real
          out-of-pocket cost in the short term.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Travel for family to attend a service
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          When a family is spread across different cities or states, getting everyone to a
          funeral or memorial service on short notice can add up quickly — flights, lodging,
          rental cars, and time away from work, often booked at the last minute rather than
          planned in advance. It&apos;s rarely factored into funeral planning, even though
          it&apos;s a real cost several family members may end up absorbing individually.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Lost income for a surviving spouse or family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The financial impact of a death isn&apos;t limited to bills that arrive — it also
          includes income that stops arriving. A surviving spouse may need to take unpaid time off
          work to handle arrangements and grieve, and if the person who died contributed income to
          the household, that gap doesn&apos;t close on its own. This is often the largest and
          least visible cost of all, precisely because it&apos;s an absence rather than a bill.
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/80">
          None of this is meant to be discouraging — it&apos;s meant to be useful. Most of these
          costs are exactly the kind of thing a modest life insurance policy is built to absorb:
          cash paid directly to your beneficiary, usable for whatever actually comes up, rather
          than restricted to a funeral home&apos;s invoice.
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
