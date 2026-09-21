import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Life Insurance Underwriting Works",
  description:
    "How insurers decide what to offer and at what price, and how simplified-issue underwriting for final expense insurance differs from a fully underwritten traditional policy.",
};

export default function HowUnderwritingWorksPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How life insurance underwriting works
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Every life insurance application goes through underwriting before a carrier will offer
          a policy. It&apos;s the step that decides whether you&apos;re approved, what
          you&apos;ll pay, and — depending on the type of policy — how quickly your full coverage
          takes effect. Here&apos;s what that process actually involves, and how it changes for a
          final expense policy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What underwriting actually is
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Underwriting is, at its core, a risk assessment. An insurance company is agreeing to
          pay a death benefit that can be many times larger than the premiums it has collected,
          particularly in a policy&apos;s early years. Before making that promise, the carrier
          wants a reasonable picture of the risk involved — your age, your health, and sometimes
          your occupation or lifestyle — and uses it to decide two things: whether to offer you
          coverage, and what to charge for it. Higher perceived risk generally means a higher
          premium for the same coverage amount, or a longer wait before the full benefit applies;
          lower risk generally earns better terms. That relationship holds across every kind of
          life insurance. What changes from one policy type to the next is how much information
          the insurer gathers before making that call, and how it gathers it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Fully underwritten life insurance: the traditional path
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Larger, long-term policies — a large term policy meant to replace decades of income,
          for instance — are usually medically underwritten in full. That typically starts with a
          detailed application covering your medical history, family history, and lifestyle,
          often followed by a paramedical exam (height, weight, blood pressure, and similar
          basics) and lab work drawn from a blood and urine sample. For larger coverage amounts,
          the insurer may go a step further and request your medical records directly from your
          doctor, sometimes called an attending physician statement. All of that gives the
          carrier a precise picture of your health, but it also takes time — a decision can take
          several weeks or longer from application to final approval.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Simplified-issue underwriting: what final expense insurance uses instead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance is almost always underwritten on a simplified-issue basis — a
          deliberately lighter process built for smaller policies. There&apos;s no exam and no lab
          work. Instead, you answer a short list of yes-or-no health questions directly on the
          application. Rather than ordering new medical evidence, the carrier checks your answers
          against two existing sources: your prescription history, and the MIB, a shared database
          insurers use to flag inconsistencies with past applications. Because there&apos;s less
          to gather, a decision often comes back the same day or within a few business days
          rather than weeks.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">At a glance</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-charcoal/75">
            <li>• Fully underwritten: exam, lab work, sometimes a physician records request. Weeks to decide.</li>
            <li>• Simplified issue: health questions only, checked against prescription history and the MIB. Days to decide.</li>
            <li>• Guaranteed issue: no health questions at all, but always paired with a waiting period.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The tradeoff behind a faster decision
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue isn&apos;t a loophole — it&apos;s a different balance of speed,
          information, and risk, and that balance shows up in how these policies are built.
          Because the carrier is deciding with less information than a full exam would provide,
          simplified-issue policies are generally offered in smaller coverage amounts than fully
          underwritten term or permanent policies. And depending on how your health questions are
          answered, the carrier may offer full coverage starting immediately or a policy with a
          graded benefit that phases in over the first couple of years. What you gain in exchange
          is real: far fewer people are excluded outright, and most applicants get a decision
          without ever needing an exam. For exactly how specific health conditions are evaluated
          under this process — and what &quot;level,&quot; &quot;graded,&quot; and
          &quot;modified&quot; actually mean — see our{" "}
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            full guide to pre-existing conditions
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          One process among a few
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue isn&apos;t the only alternative to a full medical exam. Applicants who
          don&apos;t qualify for simplified issue at all — because of a serious health condition,
          for example — generally still have access to guaranteed-issue coverage, which skips
          health questions entirely in exchange for a waiting period. It works by a different set
          of rules, so we cover it on its own page:{" "}
          <Link href="/guaranteed-issue-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            guaranteed issue life insurance, explained
          </Link>
          .
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
