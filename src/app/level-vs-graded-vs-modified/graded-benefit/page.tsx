import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Graded Benefit Final Expense Insurance Explained",
  description:
    "How the graded step-up payout works in the first couple of years, what health profile typically lands here, and why it's real, valid coverage.",
  openGraph: { title: "Graded Benefit Final Expense Insurance Explained", description: "How the graded step-up payout works in the first couple of years, what health profile typically lands here, and why it's real, valid coverage." },

  twitter: { title: "Graded Benefit Final Expense Insurance Explained", description: "How the graded step-up payout works in the first couple of years, what health profile typically lands here, and why it's real, valid coverage." },
};

export default function GradedBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/level-vs-graded-vs-modified" className="hover:text-harbor">Level vs. Graded vs. Modified</Link> / Graded Benefit
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Graded benefit coverage: how the step-up payout works
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Graded coverage is real, in-force life insurance from the day it starts — it just pays
          out on a schedule rather than all at once for the first stretch. Here&apos;s exactly how
          the step-up works, why carriers use it, and who typically ends up here.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What &quot;graded&quot; actually means
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A graded policy starts on day one like any other policy — you&apos;re approved, the
          contract is active, and premiums are due right away. What&apos;s different is what
          happens if death occurs from natural causes during the policy&apos;s initial waiting
          window, commonly the first two years (the exact length is set by the individual
          contract). Instead of the full face amount, your beneficiary receives a partial payout,
          and that partial amount typically increases with each year that passes inside the
          window — lower in year one, higher after that. Once the window closes, the policy
          behaves exactly like a level policy from that point forward: 100% of the face amount,
          for any covered cause of death.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">The exception worth remembering</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death is generally paid in full immediately, even during the step-up
            window. The waiting period built into a graded policy applies specifically to death
            from natural causes — not to the policy as a whole.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why carriers structure coverage this way
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Graded exists as a middle option. A health history with some real, but moderate,
          near-term risk isn&apos;t always a fit for a level policy priced without any cushion at
          all, but it also isn&apos;t severe enough to require the longer, no-questions-asked
          structure of guaranteed acceptance. Graded lets a carrier say yes — with a real, growing
          death benefit in place from day one — instead of saying no outright. It&apos;s a way of
          extending coverage that a level policy simply isn&apos;t priced to offer that particular
          health history yet.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What kind of health profile typically lands here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Graded tends to show up for a health history with meaningfully more going on than the
          routine, well-controlled conditions that clear at level, but which is still considered
          manageable. A cardiac event like a heart attack, stroke, or stent placement within
          roughly the last year — after which you&apos;ve stayed stable — is a common example:
          many carriers want more time to pass before offering level, but are comfortable offering
          a step-up payout in the meantime rather than no offer at all. A moderate, well-managed
          condition like COPD without home oxygen use is another common example. Whether a given
          condition lands at graded specifically, or modified instead, usually comes down to the
          individual carrier&apos;s own underwriting rather than the condition itself — the same
          history can get two different answers from two different companies.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          This is real coverage — not a consolation prize
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s easy to hear &quot;partial payout&quot; and assume graded is a lesser product,
          but that&apos;s not an accurate way to think about it. The premium is fixed for life,
          the same as any other final expense policy. The death benefit is locked in at the time
          you&apos;re approved — it doesn&apos;t get renegotiated, and it only ever moves in one
          direction: up, on schedule, toward the full amount. Your beneficiary is covered starting
          on day one, not starting after the window closes; the only thing that changes is how
          much applies during that initial stretch for a natural-cause death, and even that
          partial, growing amount is often enough to make a real difference. For an accidental
          death, none of this applies at all — the full benefit is in place immediately. Graded is
          frequently the difference between a &quot;yes&quot; and a &quot;no&quot; for an
          applicant who&apos;d otherwise be turned away entirely, which makes it one of the more
          genuinely useful tools in this market, not a downgrade from it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to know if you&apos;d land here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since the line between level, graded, and modified is drawn differently by every
          carrier, the only way to know for certain is to apply — ideally with a sense, ahead of
          time, of which carriers tend to be more favorable to your specific history. An
          independent agent can check that before you formally apply. And if your history points
          toward modified instead, it&apos;s worth understanding{" "}
          <Link href="/level-vs-graded-vs-modified/modified-benefit" className="text-harbor-mid underline">
            how that outcome differs
          </Link>{" "}
          before assuming one or the other.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/level-vs-graded-vs-modified" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the comparison guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
