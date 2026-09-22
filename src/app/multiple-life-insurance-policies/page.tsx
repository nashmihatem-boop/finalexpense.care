import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Can You Have More Than One Life Insurance Policy?",
  description:
    "Yes — here's how holding multiple life insurance policies actually works, why people do it, and when it can draw extra underwriting attention.",
  openGraph: { title: "Can You Have More Than One Life Insurance Policy?", description: "Yes — here's how holding multiple life insurance policies actually works, why people do it, and when it can draw extra underwriting attention." },

  twitter: { title: "Can You Have More Than One Life Insurance Policy?", description: "Yes — here's how holding multiple life insurance policies actually works, why people do it, and when it can draw extra underwriting attention." },
};

export default function MultipleLifeInsurancePoliciesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Can you have more than one life insurance policy?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Yes. There&apos;s no rule against owning more than one life insurance policy at the same
          time, and plenty of people do — often without realizing it&apos;s even a question worth
          asking until they&apos;re staring at two separate policies and wondering if that&apos;s
          allowed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why people end up with more than one policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The most common version is simple: someone bought a larger term policy years ago to
          replace income while raising a family or paying off a mortgage, and later adds a separate
          final expense policy specifically earmarked for end-of-life costs. The two serve
          different purposes even though they&apos;re both &quot;life insurance&quot; — one
          replaces income for people who depend on it, the other makes sure funeral and final costs
          don&apos;t become a burden or get tangled up with a larger policy meant for something
          else entirely.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Do insurers actually allow this?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Yes — each policy is its own contract with its own insurer, its own premium, and its own
          beneficiary designation, and carriers don&apos;t prohibit you from holding more than one.
          You&apos;re not required to unwind a decades-old term policy to qualify for a new,
          unrelated final expense application, though most applications will ask about your
          existing coverage as a standard question.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          When it can draw extra scrutiny
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The one place multiple policies can complicate things is at the high end. Very large
          total coverage amounts across all of your policies combined can draw extra underwriting
          attention on a new application, since insurers are generally checking that the total
          amount of coverage in place makes sense relative to income, assets, or the purpose of the
          policy — a safeguard against a policy being used for something other than its intended
          purpose. For the modest coverage amounts typical of a final expense policy stacked on top
          of an existing policy, this is rarely a practical concern, but it&apos;s worth knowing
          the guardrail exists.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">In short</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Holding a modest final expense policy alongside an existing policy is routine and
            rarely a problem. It&apos;s the total across everything you own, not the number of
            policies itself, that occasionally draws a closer look.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Deciding if an additional policy makes sense
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The most useful question isn&apos;t &quot;how many policies is too many&quot; — it&apos;s
          whether your existing coverage actually does the job a final expense policy is built for.
          A large term policy that will expire in a few years, or one your family is counting on to
          replace income, isn&apos;t really earmarked for funeral and final costs even if
          it&apos;s technically large enough on paper. A dedicated final expense policy closes that
          specific gap without touching what your other coverage is meant to do. See{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          for more.
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
