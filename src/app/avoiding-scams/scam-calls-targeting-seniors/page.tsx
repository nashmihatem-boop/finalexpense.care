import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Recognize a Scam Call Targeting Seniors",
  description:
    "The specific differences between a legitimate final expense insurance call and a scam, and exactly what to do if you're on a suspicious call.",
  openGraph: { title: "How to Recognize a Scam Call Targeting Seniors", description: "The specific differences between a legitimate final expense insurance call and a scam, and exactly what to do if you're on a suspicious call." },

  twitter: { title: "How to Recognize a Scam Call Targeting Seniors", description: "The specific differences between a legitimate final expense insurance call and a scam, and exactly what to do if you're on a suspicious call." },
};

export default function ScamCallsTargetingSeniorsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Scam Calls Targeting Seniors
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to recognize a scam call targeting seniors
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Phone calls are still one of the most common ways final expense insurance gets sold —
          and one of the most common ways it gets scammed. The two can sound similar in the first
          ten seconds, which is exactly why it helps to know the specific differences in advance,
          before you&apos;re actually on the call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a legitimate call looks like
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A licensed agent calling you — whether because you requested a quote or because
          they&apos;re following up on an existing policy — will identify themselves by name, name
          the company or agency they&apos;re calling from, and give you a license number if asked.
          They&apos;ll explain the specific product they&apos;re discussing in plain terms, they
          won&apos;t rush you into a decision on the first call, and any policy you agree to will
          show up in writing afterward — an actual application and policy documents you can read,
          keep, and reread before your first payment is ever due.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Signs a call isn&apos;t legitimate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A few specific behaviors are reliable warning signs, regardless of how friendly or
          confident the caller sounds.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Watch for</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Demanding immediate payment over the phone, especially by gift card, wire transfer, or cryptocurrency.</li>
            <li>• Pressuring you to decide before you hang up, often with urgency like &quot;this rate expires today.&quot;</li>
            <li>• Refusing to send anything in writing, or staying vague about the actual insurance company involved.</li>
            <li>• Asking for a bank account, Social Security, or Medicare number early, before any legitimate reason to need it.</li>
            <li>• Already seeming to know a lot about your finances or health from a source they won&apos;t explain.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What to do if you&apos;re on a suspicious call right now
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Hang up. You don&apos;t owe a caller an explanation, a polite exit, or a chance to
          counter your objection — a legitimate company loses nothing from you calling back later
          through a number you looked up yourself. Don&apos;t confirm or give out personal or
          financial information, even just to &quot;verify&quot; who you are, since scammers often
          use small confirmed details to make the next call more convincing. If you want to check
          whether the company they claimed actually exists, look it up separately, using your
          state&apos;s insurance department — not a number or link the caller gave you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Reporting it afterward
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Once you&apos;re off the call, it&apos;s worth reporting it. The Federal Trade
          Commission takes reports of exactly this kind of call at{" "}
          <a
            href="https://reportfraud.ftc.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-harbor-mid underline"
          >
            reportfraud.ftc.gov
          </a>
          , and reporting helps regulators track patterns even when a single report doesn&apos;t
          lead to an individual investigation. If money changed hands, contacting your bank or
          card issuer promptly matters too — the sooner a fraudulent transaction is reported, the
          better the odds of stopping or reversing it.
        </p>

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
