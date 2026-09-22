import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 80s",
  description:
    "You likely haven't aged out. What to know about applying for final expense insurance in your 80s, including when guaranteed issue makes sense.",
  openGraph: { title: "Final Expense Insurance in Your 80s", description: "You likely haven't aged out. What to know about applying for final expense insurance in your 80s, including when guaranteed issue makes sense." },

  twitter: { title: "Final Expense Insurance in Your 80s", description: "You likely haven't aged out. What to know about applying for final expense insurance in your 80s, including when guaranteed issue makes sense." },
};

export default function FinalExpenseInsuranceInYour80sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 80s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 80s
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-candid-smile-outdoors.jpg"
            alt="A woman in her 80s smiling outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          A lot of people in their 80s assume they&apos;ve missed the window entirely. In most
          cases, that isn&apos;t true — final expense insurance remains genuinely available at
          this age, just with a couple of things worth understanding upfront.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          You likely haven&apos;t aged out
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most carriers continue offering final expense coverage well into the 80s. The exact
          maximum issue age is set by each carrier individually and varies from one company to
          the next, so rather than assuming you&apos;re past the cutoff, it&apos;s worth actually
          checking — &quot;too old&quot; is a myth more often than it&apos;s a fact at this stage.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Guaranteed issue becomes a more common path
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          As health histories lengthen, more applicants in their 80s end up better suited to
          guaranteed acceptance — the option that skips health questions entirely and accepts
          anyone within the eligible age range, in exchange for a two-year waiting period on
          natural-cause death. It&apos;s not the only option at this age, but it&apos;s a more
          commonly used one than it was a decade or two earlier.
        </p>
        <PolicyTypesTable />

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Worth checking simplified issue first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed issue isn&apos;t automatically the right starting point just because of age.
          Plenty of people in their 80s are in good enough health to still qualify for simplified
          issue, which costs less for the same coverage and skips the waiting period entirely.
          It&apos;s worth having your health answers actually reviewed before assuming guaranteed
          issue is your only option — see our{" "}
          <Link href="/final-expense-insurance/biggest-mistakes" className="text-harbor-mid underline">
            rundown of common shopping mistakes
          </Link>{" "}
          for more on this exact trap.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What coverage amount to think about at this stage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Priorities often narrow to the essentials at this age — funeral, burial, or cremation
          costs, and making sure adult children aren&apos;t left covering the balance. If
          cremation is part of the plan, see{" "}
          <Link href="/final-expense-insurance/cremation-coverage" className="text-harbor-mid underline">
            how final expense insurance works alongside cremation
          </Link>{" "}
          for what the benefit does and doesn&apos;t cover.
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
            <Link href="/final-expense-insurance-in-your-70s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 70s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
