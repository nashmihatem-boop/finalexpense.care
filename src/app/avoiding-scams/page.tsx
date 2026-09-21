import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Avoiding Final Expense Insurance Scams",
  description:
    "Why final expense insurance draws scammers, how to verify a company is legitimate, and six specific things to check before you buy or switch a policy.",
};

const TOPICS = [
  {
    title: "Verifying a company is actually legitimate",
    description:
      "How to check a carrier's and agent's state license, confirm an NPN, and spot payment requests no real insurance company would ever make.",
    href: "/avoiding-scams/verify-a-company-is-legitimate",
  },
  {
    title: "Reading insurance ads for what they actually say",
    description:
      "Why “as low as” pricing and “no medical exam” claims mean something narrower than they sound like.",
    href: "/avoiding-scams/truth-about-insurance-ads",
  },
  {
    title: "Spotting a scam call before it costs you anything",
    description:
      "The specific differences between a licensed agent's call and a scammer's, and what to do if you're already on the phone with one.",
    href: "/avoiding-scams/scam-calls-targeting-seniors",
  },
  {
    title: "Knowing who you're actually buying from",
    description:
      "A plain, honest explanation of a captive agent, an independent agent, and buying direct from a carrier.",
    href: "/avoiding-scams/independent-vs-captive-vs-direct",
  },
  {
    title: "Understanding policy churning",
    description:
      "What it can cost you if someone talks you into replacing a policy you already have, and how to protect yourself.",
    href: "/avoiding-scams/policy-churning",
  },
  {
    title: "Recognizing agent fraud",
    description:
      "The specific red flags that an agent isn't acting in your interest, and what to do if you spot one.",
    href: "/avoiding-scams/agent-fraud",
  },
];

export default function AvoidingScamsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/" className="hover:text-harbor">Home</Link> / Avoiding Scams
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Avoiding final expense insurance scams
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Final expense insurance is a small policy, but it&apos;s rarely a small decision.
          It&apos;s usually bought later in life, often specifically to spare family members a
          burden, and sometimes while someone is thinking through a diagnosis or a spouse&apos;s
          passing. That combination — an important decision, made under emotional weight, without
          much room for a do-over — is exactly what draws people looking to take advantage. This
          guide covers what to watch for, however you end up buying.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why this market draws bad actors
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense buyers skew older, are sometimes on a fixed income, and sometimes make
          the decision without a family member reviewing it alongside them. A lot of this
          business is still conducted by phone or by mail rather than face to face. None of that
          means most buyers are vulnerable, or that most agents are anything other than licensed
          professionals doing ordinary, legitimate work — the overwhelming majority of this
          industry is exactly that. But a market with these features does draw a specific kind of
          bad actor: one who relies on urgency and unfamiliarity with the product to skip the
          scrutiny a purchase like this deserves. Recognizing the pattern is most of the defense.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The good news: this is a regulated market
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurance is one of the more heavily regulated consumer products that exists. Every
          company and every individual agent selling final expense insurance has to be licensed
          in the state where you live, and that license is public information you&apos;re
          entitled to check yourself, for free. That&apos;s not a workaround — it&apos;s the
          normal, intended way this market is supposed to work, and it&apos;s available to you no
          matter who you end up buying from, including an agency like this one.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Six things worth knowing before you buy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The rest of this guide breaks down into six specific, practical topics. None of them
          require special expertise — just knowing what to look for before you need to.
        </p>
        {TOPICS.map((topic) => (
          <div key={topic.href} className="mt-8">
            <h3 className="font-display text-lg font-extrabold text-harbor">{topic.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">{topic.description}</p>
            <Link href={topic.href} className="mt-2 inline-block text-sm font-semibold text-harbor-mid hover:underline">
              Read the full guide →
            </Link>
          </div>
        ))}

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
