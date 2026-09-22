import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Can You Be Denied Final Expense Insurance?",
  description: "What actually causes a decline on a final expense application, and what your options are if it happens.",
  openGraph: {
    title: "Can You Be Denied Final Expense Insurance?",
    description: "What actually causes a decline on a final expense application, and what your options are if it happens.",
  },
  twitter: {
    title: "Can You Be Denied Final Expense Insurance?",
    description: "What actually causes a decline on a final expense application, and what your options are if it happens.",
  },
};

export default function CanYouBeDeniedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / Can You Be Denied?
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Can you be denied final expense insurance?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          On a simplified-issue application, yes — a specific carrier can decline you. What that
          doesn&apos;t mean is that you&apos;re out of options entirely. Here&apos;s what
          actually causes a decline, and what to do next if it happens to you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually causes a decline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most declines come down to a small set of &quot;knockout&quot; questions — conditions
          serious enough that a carrier won&apos;t offer a simplified-issue policy at all, no
          matter how the rest of your health looks. Common examples include currently being on
          oxygen for a lung condition, active cancer treatment, a terminal diagnosis or hospice
          care, dialysis, a recent organ transplant, or residing in a nursing home. A mismatch
          between your health answers and your prescription or medical records can also lead to a
          decline, which is exactly why answering honestly matters more than trying to present a
          cleaner picture than reality.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A decline isn&apos;t the end of the road
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two things are true at once: a decline from one carrier can happen, and it almost never
          means coverage is out of reach entirely. Carriers set their own rules, so a condition
          that knocks you out at one company can still qualify at another. And guaranteed
          acceptance exists specifically as a backstop — it skips health questions altogether and
          takes applicants within the eligible age range regardless of health history, in
          exchange for a two-year waiting period on natural-cause death.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What to do if you&apos;ve been declined
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Avoid reapplying blind to a string of carriers — a decline can be recorded in a shared
          industry database and may work against you on a future application. Instead, working
          with an independent agent who knows which carriers are more lenient toward your specific
          situation is the more direct path, or moving straight to a guaranteed-acceptance policy
          if a knockout condition applies to you.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
