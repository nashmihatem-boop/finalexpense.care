import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Is Final Expense Insurance Worth It?",
  description:
    "An honest, balanced look at who final expense insurance is genuinely a good fit for, and who might not need it.",
  openGraph: { title: "Is Final Expense Insurance Worth It?", description: "An honest, balanced look at who final expense insurance is genuinely a good fit for, and who might not need it." },

  twitter: { title: "Is Final Expense Insurance Worth It?", description: "An honest, balanced look at who final expense insurance is genuinely a good fit for, and who might not need it." },
};

export default function IsItWorthItPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Is It Worth It?
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Is final expense insurance worth it?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This isn&apos;t a question with one right answer for everyone. It depends on what you
          already have in place, and what you&apos;re actually trying to protect against.
          Here&apos;s a genuinely balanced look at both sides, so you can decide for yourself.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          When it&apos;s genuinely a good fit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For a lot of people, the case is fairly straightforward. It tends to make the most
          sense if the following sound like you:
        </p>
        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Good fit if</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• You don&apos;t already have savings set aside specifically for final costs.</li>
            <li>• You want to guarantee your family never has to cover a funeral, burial, or final medical bills out of pocket or on credit.</li>
            <li>• You&apos;d rather go through a short, simplified approval now than try to qualify for a much larger traditional policy later.</li>
            <li>• You don&apos;t want retirement or investment accounts drawn down at an inconvenient time — or at all — to pay for these costs.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          When you might not need it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s just as honest to say this coverage isn&apos;t for everyone. It may not add
          much if you already have liquid savings specifically earmarked and accessible for final
          costs — not retirement funds you&apos;d need for something else. The same goes if you
          already hold an existing life insurance policy large enough, with a current beneficiary
          designation, to comfortably cover these costs along with anything else it&apos;s meant
          to handle. Or if your family&apos;s financial situation is such that the cost genuinely
          wouldn&apos;t create hardship for anyone. Stacking a new policy on top of provisions
          that already cover this is mostly redundant cost, not added protection — and it&apos;s
          worth recognizing that plainly rather than being sold coverage you don&apos;t need.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Questions worth asking yourself
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Right now, today, is there money set aside specifically for this — not retirement
          savings earmarked for something else? If something happened this month, would your
          family have to come up with these costs unexpectedly? And if you already have coverage,
          have you actually checked whether the amount is enough once you account for more than
          just the funeral itself, like outstanding medical bills or other debts?
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          There&apos;s no universal right answer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is a personal-finance decision, not a scare tactic, and it&apos;s fine to land on
          either side of it. If you want a second opinion, a licensed agent can help you look at
          your specific situation — what you already have, what it would actually cost to fill
          the gap, and whether it&apos;s worth doing — at no charge and no obligation, whichever
          way it turns out.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/biggest-mistakes" className="font-semibold text-harbor-mid hover:underline">
              Already decided? Avoid these common mistakes →
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
