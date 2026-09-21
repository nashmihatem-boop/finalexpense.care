import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Verify an Insurance Company Is Legitimate",
  description:
    "How to check a carrier's and agent's state insurance license, confirm an NPN, and spot payment requests that no legitimate insurance company would ever make.",
};

export default function VerifyCompanyIsLegitimatePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Verify a Company Is Legitimate
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to verify an insurance company is legitimate
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Before you hand over your health history, personal information, or a payment, a few
          checks are enough to confirm you&apos;re actually dealing with who you think you are.
          None of them take more than a few minutes, and every one of them is free.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check the state license — for the company and the agent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state has an insurance department (sometimes called a Department of Insurance,
          sometimes a Division of Insurance) that licenses every company and every individual
          agent allowed to sell insurance there. That license is public record, and every state
          keeps a free lookup tool where you can search a company or agent by name and see
          whether their license is active and in good standing. If you&apos;re not sure how to
          find your specific state&apos;s regulator, the National Association of Insurance
          Commissioners keeps a directory at{" "}
          <a
            href="https://www.naic.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-harbor-mid underline"
          >
            naic.org
          </a>{" "}
          that can point you to the right one. This isn&apos;t a specialized skill — it&apos;s the
          same tool state regulators want ordinary consumers to use.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Ask for the agent&apos;s license number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An individual licensed agent is issued a National Producer Number, or NPN, when they
          become licensed — a unique ID that follows them regardless of which company they
          happen to be representing at the moment. A legitimate agent should be able to give you
          this number without hesitation if you ask, and it&apos;s searchable through the same
          state lookup tools mentioned above. If someone selling you a policy hesitates, deflects,
          or can&apos;t produce a license number at all, treat that as a reason to slow down and
          verify before going any further.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Pay attention to how you&apos;re asked to pay
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Legitimate carriers collect premium in ordinary, traceable ways — a bank draft, a check
          made out to the insurance company itself, or a credit or debit card charged by the
          carrier directly. None of that requires an unusual payment method. If anyone asks you to
          pay by wire transfer, gift cards, cryptocurrency, or cash sent through the mail, stop —
          legitimate insurance companies do not ask for payment that way, ever. Those methods
          share one property that has nothing to do with insurance and everything to do with
          scams: once the money is sent, it&apos;s essentially impossible to trace or get back.
        </p>
        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A good rule</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            If a payment method would also work for a stranger who called claiming to be a
            grandchild in trouble, it&apos;s not a payment method a real insurance company uses
            either.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why we&apos;re fine with you checking us too
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This site exists to connect people with licensed insurance agents, so it would be a
          little hollow to write a guide about verifying legitimacy without saying plainly: run
          these same checks on us. Ask for a license number. Look up the carriers being discussed
          with you. A legitimate agency has nothing to lose from a five-minute check — and
          honestly, you shouldn&apos;t have to just take anyone&apos;s word for it, including
          ours.
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
