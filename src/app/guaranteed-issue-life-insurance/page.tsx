import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Guaranteed Issue Life Insurance Explained",
  description:
    "How guaranteed-issue (guaranteed-acceptance) life insurance actually works, why it carries a waiting period, why it costs more, and who it's really built for.",
  openGraph: { title: "Guaranteed Issue Life Insurance Explained", description: "How guaranteed-issue (guaranteed-acceptance) life insurance actually works, why it carries a waiting period, why it costs more, and who it's really built for." },

  twitter: { title: "Guaranteed Issue Life Insurance Explained", description: "How guaranteed-issue (guaranteed-acceptance) life insurance actually works, why it carries a waiting period, why it costs more, and who it's really built for." },
};

export default function GuaranteedIssueLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Guaranteed issue life insurance, explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Guaranteed issue life insurance — sometimes called guaranteed acceptance — is built
          around a simple promise: if you&apos;re within the eligible age range, you&apos;re
          approved, full stop. No health questions, no medical records, no possibility of a
          decline. That promise makes it one of the most accessible products in the life insurance
          market, and also one of the most misunderstood.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How guaranteed issue actually works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no application in the usual sense. You won&apos;t be asked about any health
          conditions, medications, or hospital visits, and nothing you disclose can get you turned
          down as long as you fall within the carrier&apos;s eligible age range. That&apos;s the
          entire underwriting process — age, and nothing else. It&apos;s a sharp contrast to
          simplified issue, which still asks a short list of health questions, and to fully
          underwritten policies, which involve a medical exam. Our guide to{" "}
          <Link href="/how-underwriting-works" className="font-semibold text-harbor-mid hover:underline">
            how underwriting works
          </Link>{" "}
          covers that full spectrum in more detail.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The waiting period, and why it&apos;s always there
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every guaranteed issue policy pairs that guaranteed approval with a waiting period —
          commonly two years — that applies to death from natural causes. If the insured passes
          away from natural causes during that window, the policy typically doesn&apos;t pay the
          full death benefit; instead, it generally refunds the premiums paid, sometimes with
          interest. Death from an accident is usually covered in full from day one, since
          accidental death isn&apos;t the risk the waiting period exists to manage. Once the
          waiting period passes, the policy pays the full benefit for any covered cause of death,
          and stays that way for the life of the policy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it&apos;s generally the most expensive tier for the same coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because the carrier is accepting every eligible applicant regardless of health, it&apos;s
          effectively pricing the policy for the whole pool of applicants at once — including
          people who would be declined or rated up under any other type of underwriting. That
          unknown risk has to be priced in somewhere, which is why guaranteed issue policies are
          generally the most expensive option for a given amount of coverage, compared to a
          simplified-issue policy the same applicant might otherwise qualify for. The waiting
          period is the other side of that same coin — it&apos;s what allows the carrier to offer
          guaranteed approval at all, without pricing every applicant as if they were the highest
          possible risk indefinitely.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Not &quot;no strings attached&quot;</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Guaranteed approval doesn&apos;t mean guaranteed full coverage on day one. The tradeoff
            for skipping health questions entirely is the waiting period — treat the two as a
            package deal, not two separate features you might get without the other.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who this product is really built for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed issue isn&apos;t designed to be everyone&apos;s first choice — it&apos;s
          designed to be available to everyone. It exists specifically for people who don&apos;t
          have a simplified-issue option: someone previously declined by a carrier, or someone
          living with a serious health condition — currently on oxygen, on dialysis, in active
          cancer treatment, or otherwise facing one of the &quot;knockout&quot; conditions that
          rule out simplified issue outright. For that person, guaranteed issue isn&apos;t a worse
          version of a better product; it&apos;s often the only path to coverage at all, which is
          exactly the gap it&apos;s built to fill. If you haven&apos;t been declined and
          don&apos;t have a serious health condition, simplified issue is usually worth ruling out
          first, since it tends to cost less for the same coverage and typically doesn&apos;t
          carry a waiting period. See our{" "}
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            pre-existing conditions guide
          </Link>{" "}
          for how specific conditions are typically treated, or read about{" "}
          <Link href="/pre-existing-conditions/can-you-be-denied" className="font-semibold text-harbor-mid hover:underline">
            what actually causes a decline
          </Link>{" "}
          in the first place.
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
