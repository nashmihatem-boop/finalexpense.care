import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Employer Life Insurance vs. an Individual Policy",
  description:
    "Group life insurance through work is often free, but it's usually small and tied to your job. Here's how it compares to a policy you own yourself.",
};

export default function EmployerVsIndividualLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Employer life insurance vs. a policy you own yourself
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Many people&apos;s only life insurance is whatever their employer automatically
          enrolled them in, without realizing how different that coverage is from a policy
          they&apos;d buy on their own. Both have a place — but understanding what group
          coverage actually promises, and when it stops, changes how you should think about it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What employer-provided coverage actually gives you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Group life insurance through work is a real benefit, and it&apos;s usually
          inexpensive — often provided at no cost to you, or available to add for a modest
          payroll deduction. Because it&apos;s underwritten as a group rather than person by
          person, most employees are accepted automatically with no individual health
          questions, which is genuinely valuable if your own health would make an individual
          policy harder to get. The tradeoff is size: employer coverage is typically a flat
          amount or a multiple of your salary, set by the employer&apos;s plan rather than by
          what your family would actually need.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          It&apos;s tied to your job, not to you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The most important thing to understand about group life insurance is that it belongs
          to your employer&apos;s plan, not to you personally. In most cases, it ends when your
          employment does — whether you leave voluntarily, get laid off, or retire — regardless
          of your health at that moment. Some employer plans offer a portability or conversion
          option that lets you keep some form of coverage after you leave. Where that exists,
          it&apos;s worth knowing about, but it typically comes at a higher, individually rated
          premium than what you were paying as part of the group, and there&apos;s usually only
          a limited window after your coverage ends to make that choice.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a policy you own looks like instead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An individual final expense or life insurance policy is underwritten around you
          specifically, at the time you apply. Once it&apos;s in place, it&apos;s yours — the
          coverage and premium stay put regardless of what happens with your job afterward. You
          can change employers, retire, or stop working entirely, and the policy doesn&apos;t
          know the difference. That&apos;s the core trade being made: group coverage is often
          cheaper or free but conditional on employment, while an individual policy usually
          costs more out of pocket but comes with no strings attached to your career.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Using both, without relying on either alone
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These two aren&apos;t really competitors — plenty of people carry both. Group coverage
          through work can be a reasonable bonus layer while you&apos;re employed, especially if
          it costs you nothing. The mistake is treating it as your whole plan. Because it can
          disappear at the exact moment your life changes — a layoff, a career switch,
          retirement — the coverage meant to stay with your family no matter what is the kind
          you hold in your own name.
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
