import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 60s",
  description:
    "What changes when you apply for final expense insurance in your 60s, including how pre-existing conditions start to factor into your rate.",
};

export default function FinalExpenseInsuranceInYour60sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 60s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 60s
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-walking-outdoors.jpg"
            alt=""
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          A lot of people specifically start looking into final expense insurance in their 60s —
          often around retirement, a first grandchild, or after helping settle a parent&apos;s or
          friend&apos;s final expenses firsthand. It&apos;s still a strong decade to apply, with a
          few things that start to look different from your 50s.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          One of the most common decades to apply
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Retirement tends to be when a lot of people first sit down and think seriously about
          fixed costs, what they&apos;re leaving behind, and what they&apos;d rather have handled
          in advance. Your 60s are still comfortably within every carrier&apos;s typical age
          window, with the full range of coverage amounts and both policy types on the table.
          Carriers also have deep experience underwriting this age band specifically, since
          it&apos;s one of the most common ages people actually apply.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where pre-existing conditions start to matter more
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Compared with your 50s, more applicants in their 60s are managing at least one ongoing
          condition — blood pressure, cholesterol, a joint replacement, sleep apnea, early
          diabetes. None of that rules out a strong outcome. Most of these, when stable and
          well-managed, still qualify for simplified issue and often land at level, day-one
          coverage. Our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          covers how carriers typically treat conditions like these and where they tend to land.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The cost of waiting still adds up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense pricing is set by the age you are on the day you apply, then locked for
          the life of the policy. That means a rate secured in your 60s will typically run higher
          than the same coverage would have cost in your 50s — but it still beats waiting until
          your 70s for the identical policy. If the last decade has already passed, the next best
          time to lock in a rate is simply now, rather than later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Getting ready to apply
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Before you apply, it helps to have a clear list ready: any diagnoses and roughly when
          they happened, your current medications, and your general treatment history. Carriers
          check your prescription history against your answers, so accuracy upfront avoids
          surprises later. See{" "}
          <Link href="/pre-existing-conditions#how-to-prepare" className="text-harbor-mid underline">
            how to prepare before you apply
          </Link>{" "}
          for the full rundown.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-70s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 70s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-50s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 50s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
