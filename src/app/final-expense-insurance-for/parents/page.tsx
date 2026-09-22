import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Parent",
  description:
    "How adult children typically start the conversation, what a parent needs to be involved in, and how payment and ownership commonly work.",
  openGraph: { title: "Final Expense Insurance for a Parent", description: "How adult children typically start the conversation, what a parent needs to be involved in, and how payment and ownership commonly work." },

  twitter: { title: "Final Expense Insurance for a Parent", description: "How adult children typically start the conversation, what a parent needs to be involved in, and how payment and ownership commonly work." },
};

export default function ParentsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Parents
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Buying final expense insurance for your parents
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This is, by a wide margin, the most common version of this conversation. An adult child
          notices their parent doesn&apos;t have coverage in place, or has let an old policy
          lapse, and decides to do something about it before it becomes urgent. If that&apos;s
          where you are, here&apos;s how it usually goes.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why adult children take this on
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It rarely starts as a planned project. More often it&apos;s prompted by something —
          a parent&apos;s recent health scare, helping settle another relative&apos;s funeral and
          realizing how fast the costs and decisions pile up, or simply a parent mentioning they
          &quot;never got around to it.&quot; Sometimes a parent genuinely can&apos;t manage the
          process alone anymore, whether that&apos;s researching options, understanding the
          paperwork, or just making the call. And sometimes it&apos;s simpler than any of that: an
          adult child wants the certainty of knowing it&apos;s handled, rather than hoping their
          parent gets to it eventually.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Starting the conversation with your parent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is usually the hardest part, not the paperwork. It helps to frame it around peace
          of mind rather than mortality — you&apos;re not asking your parent to dwell on dying,
          you&apos;re offering to take one thing permanently off their plate. It also helps to
          treat your parent as a full partner in the decision rather than someone the decision is
          being made about. Ask what they&apos;d actually want for a funeral or service, whether
          they have any preferences you don&apos;t know about, and whether they&apos;ve looked
          into coverage before. Some parents have been putting it off out of discomfort and are
          quietly relieved someone else brought it up; others want to feel in control of the
          decision, not just informed of it after the fact. Either way, going in ready to listen
          tends to go better than going in with a plan already decided.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What your parent needs to consent to and be involved in
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You can do most of the legwork — researching options, talking to an agent, comparing
          what&apos;s available — but your parent is the one being insured, and that comes with
          requirements that can&apos;t be skipped. They&apos;ll need to consent to the policy
          themselves, answer the health questions in their own words (since only they actually
          know their medical history and current medications), and sign the application. This
          isn&apos;t just a formality — it&apos;s both a legal requirement rooted in insurable
          interest and consent, and a practical safeguard, since an application filled out on a
          parent&apos;s behalf without their accurate input risks a mismatch between what was
          answered and what&apos;s in their medical or prescription records. That kind of mismatch
          is exactly what can put a claim at risk later. Plan for your parent to be present, even
          briefly, for the actual application call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How payment and ownership commonly work
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s very common for the adult child to be the one who owns the policy and pays the
          premium, while the parent remains the insured. Ownership is what gives you control — the
          ability to manage the policy, keep it current, and update details later — while your
          parent&apos;s role is limited to being the person the coverage is on. The beneficiary is
          a separate decision entirely: many families name the adult child who&apos;s paying, some
          split it evenly among siblings, and some let the parent choose regardless of who&apos;s
          footing the bill. If you have siblings, it&apos;s worth agreeing on this together ahead
          of time rather than assuming everyone&apos;s on the same page — beneficiary and payment
          responsibility don&apos;t have to match, but confusion about who&apos;s doing what is an
          easy, avoidable source of family friction later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If a health condition is part of the picture
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most parents in the age range where this conversation comes up have at least one
          diagnosed health condition, and that&apos;s normal — it doesn&apos;t mean they&apos;re
          out of options. Simplified-issue underwriting is built around a short list of health
          questions rather than a medical exam, and plenty of common conditions still qualify for
          full, day-one coverage. Our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          walks through how carriers typically evaluate specific conditions, and what to expect if
          your parent has one.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
