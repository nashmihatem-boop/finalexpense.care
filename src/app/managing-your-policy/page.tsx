import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Managing Your Policy",
  description:
    "Already have a final expense or life insurance policy? Find help with claims, beneficiaries, missed payments, cash value, and more.",
  openGraph: { title: "Managing Your Policy", description: "Already have a final expense or life insurance policy? Find help with claims, beneficiaries, missed payments, cash value, and more." },

  twitter: { title: "Managing Your Policy", description: "Already have a final expense or life insurance policy? Find help with claims, beneficiaries, missed payments, cash value, and more." },
};

const TOPICS: { href: string; title: string; description: string; image?: string }[] = [
  {
    href: "/managing-your-policy/borrow-from-policy",
    title: "Borrowing against your policy",
    description: "How a policy loan against cash value works, and what an unpaid loan does to the death benefit.",
    image: "/photos/planning-seniors-conversation.jpg",
  },
  {
    href: "/managing-your-policy/beneficiary-dies-before-you",
    title: "If your beneficiary dies before you do",
    description: "What happens to your policy, and why naming a backup beneficiary matters.",
  },
  {
    href: "/managing-your-policy/missed-premium-payment",
    title: "Missed a payment",
    description: "Grace periods, lapses, and what to do if a payment slipped through the cracks.",
    image: "/photos/planning-senior-phone-call.jpg",
  },
  {
    href: "/managing-your-policy/how-to-file-a-claim",
    title: "Filing a death benefit claim",
    description: "The general steps a beneficiary takes to start and complete a claim.",
    image: "/photos/planning-hands-signing.jpg",
  },
  {
    href: "/managing-your-policy/how-long-a-claim-takes-to-pay",
    title: "How long a claim takes to pay",
    description: "The factors that actually speed up or slow down a claim payout.",
  },
  {
    href: "/managing-your-policy/find-a-lost-policy",
    title: "Finding a lost policy",
    description: "Practical steps for tracking down a policy when you can't find the paperwork.",
    image: "/photos/planning-senior-laptop.jpg",
  },
  {
    href: "/managing-your-policy/contestability-period",
    title: "The contestability period",
    description: "Why carriers can review a claim more closely during a policy's first two years.",
  },
  {
    href: "/managing-your-policy/claim-denied",
    title: "If a claim is denied",
    description: "Common reasons claims get denied, and the options a beneficiary has next.",
  },
  {
    href: "/managing-your-policy/change-beneficiary",
    title: "Changing your beneficiary",
    description: "How to update who's listed on your policy, and when people typically do it.",
    image: "/photos/planning-advisor-senior-documents.jpg",
  },
  {
    href: "/managing-your-policy/cancel-policy",
    title: "Canceling a policy",
    description: "What actually happens when you cancel, and what to check first.",
  },
];

export default function ManagingYourPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- widget on / needs a real page load, see button.tsx */}
          <a href="/" className="hover:text-harbor">Home</a> / Managing Your Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Managing a policy you already have
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This section isn&apos;t about shopping for coverage — it&apos;s for people who already
          have a final expense or life insurance policy and need help with something specific: a
          missed payment, a claim, an outdated beneficiary, or a question about how the policy
          actually works. Pick a topic below.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What you can do here
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} href={topic.href} title={topic.title} description={topic.description} image={topic.image} />
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Still shopping for coverage?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you don&apos;t have a policy yet and you&apos;re trying to find one, this isn&apos;t
          the right section — head back to the homepage to compare options, or, if a health
          condition is part of what you&apos;re weighing, see our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          first.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Don&apos;t have a policy yet?{" "}
            <a href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              See what you qualify for →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
