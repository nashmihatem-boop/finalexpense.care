import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is Policy Churning, and How Do You Avoid It?",
  description:
    "How churning — replacing a policy you already have mainly to generate a new commission — can cost you a new contestability period and lost cash value.",
  openGraph: { title: "What Is Policy Churning, and How Do You Avoid It?", description: "How churning — replacing a policy you already have mainly to generate a new commission — can cost you a new contestability period and lost cash value." },

  twitter: { title: "What Is Policy Churning, and How Do You Avoid It?", description: "How churning — replacing a policy you already have mainly to generate a new commission — can cost you a new contestability period and lost cash value." },
};

export default function PolicyChurningPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Policy Churning
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is policy churning, and how do you avoid it?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          &quot;Churning&quot; is the industry&apos;s own name for a specific unethical practice:
          an agent talking you into replacing a life insurance policy you already own with a new
          one, not because the new policy genuinely serves you better, but mainly because writing
          a new policy generates a new commission for the agent. It&apos;s a real, named problem
          in this industry, and worth understanding on its own terms before anyone brings up
          replacing a policy you already have.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Churning usually doesn&apos;t announce itself as churning. It shows up as a call or
          visit built around something that sounds like a straightforward upgrade — a lower
          premium, more coverage, a newer company. What the pitch usually leaves out is what you
          give up by starting over: the time already spent inside your current policy&apos;s
          contestability period, and, if it&apos;s a permanent policy that has built any cash
          value, that value along with it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What replacing a policy can actually cost you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two specific costs are easy to miss in the moment. First, most life insurance policies
          carry a contestability period — typically the first two years — during which the
          insurer can investigate and deny a claim over a misstated or omitted answer on the
          application. Replacing a policy resets that clock on a brand-new contract, even if your
          old one was long past its own contestability period. Second, if your existing policy is
          whole life and has built cash value, surrendering it to buy a new one can mean walking
          away from that value, or paying a surrender charge to exit it early. A new policy also
          means underwriting all over again at your current age and health, which can mean a
          higher premium than the one you&apos;re already locked into.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it happens
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The financial incentive is straightforward — a new policy typically pays the agent who
          writes it a new commission, while an existing policy sitting untouched pays nothing
          further. Most agents don&apos;t act on that incentive at your expense; the great
          majority of replacement conversations happen because someone&apos;s needs genuinely
          changed. But it&apos;s exactly that incentive that makes churning possible on the
          occasions when someone does act on it, which is why it&apos;s worth understanding even
          though it describes a minority of interactions, not a typical one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to protect yourself
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A legitimate reason to replace a policy does exist sometimes — your needs changed, or a
          genuinely better option appeared. A recommendation like that should hold up to a few
          plain checks, not just to a friendly conversation.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Before you replace a policy</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Ask specifically why the new policy is better for you — not just what&apos;s different about it, but why the difference is worth the reset.</li>
            <li>• Get the comparison in writing: the new contestability clock, any cash value you&apos;d give up, and the actual premium difference, side by side.</li>
            <li>• For a decision this size, get a second opinion from someone other than the person recommending the change — a family member or another licensed agent.</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
