import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 50s",
  description:
    "Why your 50s are often the easiest decade to qualify for final expense insurance, and how locking in a rate now compares with waiting.",
  openGraph: { title: "Final Expense Insurance in Your 50s", description: "Why your 50s are often the easiest decade to qualify for final expense insurance, and how locking in a rate now compares with waiting." },

  twitter: { title: "Final Expense Insurance in Your 50s", description: "Why your 50s are often the easiest decade to qualify for final expense insurance, and how locking in a rate now compares with waiting." },
};

export default function FinalExpenseInsuranceInYour50sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 50s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 50s
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-gardening.jpg"
            alt="A woman in her 50s gardening outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          Fifty is younger than a lot of people picture when they think about final expense
          insurance — but it&apos;s one of the more common ages to first look into it, and often
          the easiest decade to get approved at the best rate a carrier offers. Here&apos;s
          what&apos;s actually different about applying now instead of waiting.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The advantage of applying before health issues stack up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In your 50s, you&apos;re statistically less likely to be managing the kind of chronic,
          ongoing health issues that complicate an application later on — several daily
          prescriptions, a recent hospital stay, a condition still being actively treated. Fewer
          of the &quot;knockout&quot; questions on a simplified-issue application are likely to
          apply to you, which means a better chance of landing level, day-one coverage at a
          carrier&apos;s best available rate for your age. That&apos;s not a guarantee — health
          varies person to person at every age — but as a decade, the 50s tend to be the
          friendliest stretch for the outcome most people actually want.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A rate you lock in now doesn&apos;t go up later
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense policies are whole life insurance: once you&apos;re approved, your
          premium is fixed for the life of the policy. It doesn&apos;t rise as you age, and it
          isn&apos;t reviewed or repriced down the road. In practice, that means the age you are
          on the day you apply sets your rate permanently — so applying in your 50s locks in a
          lower starting point than applying for the same coverage later would, and that gap
          holds for as long as you keep the policy. We won&apos;t put a number on it, since it
          depends on your health, your state, and the carrier — but the direction is consistent:
          earlier costs less for the same coverage, all else being equal.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What still affects your application at this age
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some people in their 50s are already managing something like high blood pressure, early
          type 2 diabetes, or a family history a carrier asks about — none of which is unusual,
          and none of which automatically rules out a strong rate. If something applies to you,
          our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          walks through how carriers typically treat common conditions and where they tend to
          land. Tobacco use is also weighed at every age, including this one, and generally moves
          your cost more than any single well-managed health condition does.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Is your 50s too early to bother?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s a fair question, since a lot of people associate this coverage with
          retirement age. The honest answer is that there&apos;s no minimum age where it starts
          making sense — it comes down to whether you already have savings set aside for final
          costs, and whether you want to make sure that expense never lands on your family,
          regardless of how old you are today. If you&apos;re weighing whether this is the right
          move for you specifically, our{" "}
          <Link href="/final-expense-insurance/is-it-worth-it" className="text-harbor-mid underline">
            honest look at who it&apos;s worth it for
          </Link>{" "}
          covers both sides.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-60s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 60s →
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
