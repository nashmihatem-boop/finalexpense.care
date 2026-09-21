import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Modified Benefit Final Expense Insurance Explained",
  description:
    "How the return-of-premium-plus-interest structure works during the waiting window, how it differs from graded, and who typically lands here.",
};

export default function ModifiedBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/level-vs-graded-vs-modified" className="hover:text-harbor">Level vs. Graded vs. Modified</Link> / Modified Benefit
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Modified benefit coverage: what return-of-premium-plus-interest means
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Modified coverage uses a different mechanism than graded to handle the same basic
          problem — a health history that carries more near-term risk than a level policy is
          priced for. Instead of a partial, step-up death benefit, a modified policy returns what
          you&apos;ve paid in, plus interest, during its initial window. Here&apos;s how that
          works, how it&apos;s different from graded, and who typically lands here.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What &quot;modified&quot; actually means
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Like any other final expense policy, a modified policy is active from the day it&apos;s
          issued, and premiums are due right away. The difference shows up only if death occurs
          from natural causes during the policy&apos;s initial waiting window — commonly the
          first two years, though the exact length is set by the individual contract. Instead of
          any portion of the death benefit, your beneficiary receives the premiums you&apos;ve
          paid into the policy back, plus interest. Once that window closes, the policy converts
          and behaves exactly like a level policy for the rest of its life: 100% of the face
          amount, for any covered cause of death.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Accidental death works the same as graded</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death is generally paid in full immediately, regardless of how new the
            policy is. The return-of-premium structure applies specifically to natural-cause death
            during the window — it doesn&apos;t change how the policy treats an accident.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it&apos;s different from graded
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The distinction is exactly what each policy pays if the worst happens during the
          window. A{" "}
          <Link href="/level-vs-graded-vs-modified/graded-benefit" className="text-harbor-mid underline">
            graded policy
          </Link>{" "}
          still pays a portion of the actual death benefit — a real, if partial, insurance payout
          that grows every year. A modified policy pays no portion of the death benefit during
          that same window; what your family receives instead is essentially a refund of what was
          paid in, with interest added rather than a true insurance benefit. Both convert to the
          full death benefit once the window closes — the difference is entirely about what
          happens if death occurs during those first couple of years, not about what happens
          afterward.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why the interest is included
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The interest component exists so a family isn&apos;t simply handed back the same dollar
          amount that was paid in, with none of the time value recognized. The exact rate and how
          it&apos;s calculated are set by the individual carrier and contract, so it&apos;s worth
          confirming the specifics in your policy illustration rather than assuming a figure — but
          structurally, it&apos;s built to be more than a flat refund, even though it still
          isn&apos;t the full death benefit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What kind of health profile typically lands here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Modified tends to apply one notch further along the same spectrum as graded — a health
          history a carrier sees as carrying somewhat more near-term risk than what typically
          lands at graded, without crossing into knockout territory that would mean a decline
          instead. Chronic pancreatitis is a useful example of how this plays out in practice:
          managed well, with infrequent flare-ups, it often lands at graded; more frequent
          flare-ups or a related hospitalization, and the same underlying condition often shifts
          toward modified instead. The pattern is less about which specific diagnosis is on the
          application and more about how much recent activity or instability sits behind it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to know if you&apos;d land here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The most reliable way to find out is to have your specific health history checked
          against multiple carriers before you apply, since the line each one draws between
          graded, modified, and guaranteed acceptance is theirs alone to set. An independent agent
          can do that matching for you. And if it turns out your history points toward something
          with even less near-term flexibility, guaranteed acceptance — covered in the{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            full pre-existing conditions guide
          </Link>{" "}
          — is always available as a backstop.
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
