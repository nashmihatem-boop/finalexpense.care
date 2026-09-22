import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Truth About Final Expense Insurance Ads",
  description:
    "How to read \"as low as\" pricing, the real difference between no medical exam and no health questions, and why a familiar face in an ad isn't a recommendation.",
  openGraph: { title: "The Truth About Final Expense Insurance Ads", description: "How to read \"as low as\" pricing, the real difference between no medical exam and no health questions, and why a familiar face in an ad isn't a recommendation." },

  twitter: { title: "The Truth About Final Expense Insurance Ads", description: "How to read \"as low as\" pricing, the real difference between no medical exam and no health questions, and why a familiar face in an ad isn't a recommendation." },
};

export default function TruthAboutInsuranceAdsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / The Truth About Insurance Ads
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          The truth about final expense insurance ads
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Insurance advertising is legal, common, and — like advertising for almost anything else
          — built to put its best foot forward. That&apos;s not inherently dishonest, but it does
          mean a few specific phrases show up constantly and mean something narrower than they
          sound like. Knowing what they actually mean is most of the skill.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          &quot;As low as&quot; is a best case, not your case
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The headline price in most ads is the rate for the healthiest, youngest applicant the
          insurer will cover at that coverage amount — not a quote for you specifically. Your
          actual premium depends on your age, gender, coverage amount, tobacco use, and health, so
          the number in the ad works more like a starting line than a promise. That&apos;s not
          necessarily deceptive on its own — it&apos;s usually disclosed, technically accurate
          math — but treating it as your price before you&apos;ve actually applied is where people
          get a surprise. The only way to know your real number is to go through underwriting with
          a specific carrier.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          &quot;No medical exam&quot; and &quot;no health questions&quot; are not the same thing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These two phrases get used almost interchangeably in ads, and they describe two
          genuinely different products. &quot;No medical exam&quot; usually describes
          simplified-issue underwriting — no nurse visit, no bloodwork, but you still answer a set
          of health questions, and your answers still affect your eligibility and rate.
          &quot;No health questions&quot; describes guaranteed-acceptance coverage, which skips
          health questions entirely but, in exchange, carries a waiting period — typically two
          years — before it pays the full benefit for a death from natural causes. We cover this
          distinction in more depth in our{" "}
          <Link
            href="/pre-existing-conditions#the-two-paths-and-how-simplified-issue-works"
            className="text-harbor-mid underline"
          >
            guide to buying with a pre-existing condition
          </Link>
          , but the short version for reading an ad is this: if it promises no health questions
          and no waiting period in the same breath, that combination doesn&apos;t exist in this
          market, and the ad is either careless or dishonest.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A familiar face isn&apos;t a recommendation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A lot of final expense advertising uses a celebrity spokesperson or a familiar TV
          personality. That&apos;s a marketing arrangement — the person was paid to appear, not to
          evaluate the product against its competitors. It says nothing about whether that
          specific company&apos;s rates, underwriting, or claims experience are actually the best
          fit for you. Treat a celebrity endorsement the way you&apos;d treat any other paid
          placement: as a reason the ad got your attention, not a reason to skip comparing it to
          anything else.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Reading an ad like an informed buyer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          None of the questions below take long to ask, and a legitimate agent will answer all of
          them plainly.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A few questions worth asking</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Is this price actually for someone my age and health, or the best case they can advertise?</li>
            <li>• Does &quot;no exam&quot; here mean I still answer health questions?</li>
            <li>• If there&apos;s a waiting period, how long is it, and what exactly does it apply to?</li>
            <li>• Am I comparing this to anything else, or just responding to the first ad I saw?</li>
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
