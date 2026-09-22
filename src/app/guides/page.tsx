import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";

export const metadata: Metadata = {
  title: "Final Expense Insurance Guides & Resources",
  description:
    "Every guide on FinalExpense.care in one place — coverage by state, pre-existing conditions, funeral costs, managing a policy, avoiding scams, and the basics of life insurance.",
  openGraph: { title: "Final Expense Insurance Guides & Resources", description: "Every guide on FinalExpense.care in one place — coverage by state, pre-existing conditions, funeral costs, managing a policy, avoiding scams, and the basics of life insurance." },

  twitter: { title: "Final Expense Insurance Guides & Resources", description: "Every guide on FinalExpense.care in one place — coverage by state, pre-existing conditions, funeral costs, managing a policy, avoiding scams, and the basics of life insurance." },
};

const FEATURED = [
  {
    href: "/final-expense-insurance",
    title: "Final Expense Insurance Explained",
    description: "The core guide: what it covers, what it costs, and how it differs from other life insurance.",
    image: "/photos/family-caregiving-hands.jpg",
  },
  {
    href: "/coverage-by-state",
    title: "Coverage by State",
    description: "Rules, regulations, and what to expect wherever you live — every state and DC.",
    image: "/photos/senior-hobby.jpg",
  },
  {
    href: "/pre-existing-conditions",
    title: "Pre-Existing Conditions",
    description: "How underwriting actually treats 45 common conditions, from diabetes to COPD.",
    image: "/photos/planning-advisor-senior-documents.jpg",
  },
  {
    href: "/final-expense-insurance-for",
    title: "Buying for a Loved One",
    description: "Spouse, sibling, parent, grandparent, or child — how it works for each relationship.",
    image: "/photos/family-grandparent-grandchild.jpg",
  },
  {
    href: "/funeral-cost",
    title: "Funeral Cost Guide",
    description: "What a funeral actually costs, what drives the price, and where to get a real number.",
    image: "/photos/reflective-golden-hour-landscape.jpg",
  },
  {
    href: "/final-expense-insurance-cost",
    title: "Cost by Coverage Amount",
    description: "What $5,000 up through $40,000+ in coverage is typically meant to cover.",
    image: "/photos/senior-reading-porch.jpg",
  },
  {
    href: "/level-vs-graded-vs-modified",
    title: "Level vs. Graded vs. Modified",
    description: "The three ways a policy can pay out, and what health profile lands in each.",
    image: "/photos/reflective-soft-light.jpg",
  },
  {
    href: "/managing-your-policy",
    title: "Managing Your Policy",
    description: "Already have coverage? Claims, beneficiaries, missed payments, and more.",
    image: "/photos/planning-hands-signing.jpg",
  },
  {
    href: "/avoiding-scams",
    title: "Avoiding Scams",
    description: "How to verify a company is legitimate, and what to watch for before you buy.",
    image: "/photos/planning-senior-phone-call.jpg",
  },
] as const;

type LinkItem = { href: string; title: string; description: string };

const BASICS: LinkItem[] = [
  { href: "/what-is-whole-life-insurance", title: "What is whole life insurance?", description: "The foundational product type final expense coverage is built on." },
  { href: "/cash-value-life-insurance", title: "How cash value works", description: "The savings component inside a whole life policy, and how it grows." },
  { href: "/whole-life-vs-universal-life", title: "Whole life vs. universal life", description: "Fixed vs. flexible — and why final expense is specifically whole life." },
  { href: "/guaranteed-issue-life-insurance", title: "Guaranteed issue life insurance", description: "No health questions at all — the mechanics, the waiting period, and who it's really for." },
  { href: "/how-underwriting-works", title: "How underwriting works", description: "From full medical exams to simplified issue — the spectrum explained." },
  { href: "/what-is-a-death-benefit", title: "What is a death benefit?", description: "How the payout works, and how it's typically treated for tax purposes." },
  { href: "/what-is-a-beneficiary", title: "What is a beneficiary?", description: "Who can be named, primary vs. contingent, and why keeping it updated matters." },
  { href: "/life-insurance-riders", title: "Life insurance riders", description: "Optional add-ons that change how and when a policy pays." },
  { href: "/life-insurance-glossary", title: "Life insurance glossary", description: "Plain-English definitions for the terms that come up in every other guide." },
  { href: "/is-life-insurance-taxable", title: "Is life insurance taxable?", description: "The general federal rule, and the situations where it gets more nuanced." },
  { href: "/how-to-choose-a-company", title: "How to choose a company", description: "A generic, carrier-neutral checklist for evaluating any insurer." },
  { href: "/employer-vs-individual-life-insurance", title: "Employer vs. individual coverage", description: "Why a workplace policy alone usually isn't enough, and what happens if you leave the job." },
];

const COMPARISONS: LinkItem[] = [
  { href: "/final-expense-vs-term-life", title: "Final expense vs. term life", description: "Two very different products that both get called \"life insurance.\"" },
  { href: "/final-expense-insurance-vs-whole-life-insurance", title: "Final expense vs. traditional whole life", description: "Same structure, different scale — how the two relate." },
  { href: "/life-insurance-vs-savings-account", title: "Life insurance vs. a savings account", description: "Why \"I'll just save the money myself\" doesn't replace a death benefit." },
  { href: "/life-insurance-vs-crowdfunding", title: "Life insurance vs. crowdfunding", description: "What a guaranteed payout offers that a fundraiser can't promise." },
  { href: "/life-insurance-vs-accidental-death-insurance", title: "Life insurance vs. accidental death insurance", description: "Why one covers any cause of death and the other covers almost none." },
  { href: "/traditional-funeral-vs-direct-burial", title: "Traditional funeral vs. direct burial", description: "An honest, no-figures comparison of the two paths." },
];

const HARD_QUESTIONS: LinkItem[] = [
  { href: "/dying-without-life-insurance", title: "What happens if you die without coverage", description: "Who ends up responsible for the costs, in plain terms." },
  { href: "/does-life-insurance-cover-suicide", title: "Does life insurance cover suicide?", description: "A respectful, direct explanation of the contestability-period rule." },
  { href: "/hidden-costs-of-dying", title: "The hidden costs of dying", description: "Probate, medical bills, and the expenses beyond the funeral itself." },
  { href: "/multiple-life-insurance-policies", title: "Can you have multiple policies?", description: "How stacking coverage works, and when it draws extra scrutiny." },
  { href: "/life-insurance-for-children", title: "Life insurance for children", description: "A different, much smaller product than senior final expense coverage." },
  { href: "/celebration-of-life", title: "What is a celebration of life?", description: "An alternative to a traditional funeral service, explained." },
  { href: "/reduce-funeral-costs", title: "How to reduce funeral costs", description: "Legitimate ways to lower the bill without cutting corners on dignity." },
  { href: "/what-does-a-funeral-director-do", title: "What does a funeral director do?", description: "Their actual role, respectfully explained." },
];

const BY_AGE: LinkItem[] = [
  { href: "/final-expense-insurance-in-your-50s", title: "In your 50s", description: "Often the easiest decade to qualify for the best rate." },
  { href: "/final-expense-insurance-in-your-60s", title: "In your 60s", description: "Still a strong decade to apply, with a few things starting to look different." },
  { href: "/final-expense-insurance-in-your-70s", title: "In your 70s", description: "The single most common age group to buy this product." },
  { href: "/final-expense-insurance-in-your-80s", title: "In your 80s", description: "You likely haven't aged out — what changes and what doesn't." },
  { href: "/final-expense-insurance/is-it-worth-it", title: "Is it worth it?", description: "An honest look at who this product is, and isn't, built for." },
  { href: "/final-expense-insurance/biggest-mistakes", title: "The biggest mistakes to avoid", description: "Common, avoidable missteps when shopping for coverage." },
  { href: "/final-expense-insurance/buy-online", title: "Buying online vs. through an agent", description: "What actually changes, and what stays the same either way." },
  { href: "/final-expense-insurance/cremation-coverage", title: "Coverage for cremation", description: "How final expense insurance applies when cremation is the plan." },
];

function LinkGroup({ title, items }: { title: string; items: LinkItem[] }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-xl font-extrabold text-harbor">{title}</h2>
      <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="group block">
            <p className="font-semibold text-harbor group-hover:text-harbor-mid">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function GuidesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Resource Library
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Every guide, in one place
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          Final expense insurance touches a lot of decisions beyond just picking a coverage
          amount. Browse by topic below, or use{" "}
          <Link href="/coverage-by-state" className="text-harbor-mid underline">
            Coverage by State
          </Link>{" "}
          and{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            Pre-Existing Conditions
          </Link>{" "}
          to jump straight to your specific situation.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((item) => (
            <TopicCard key={item.href} href={item.href} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>

        <div className="mx-auto mt-4 max-w-3xl">
          <LinkGroup title="Life insurance basics" items={BASICS} />
          <LinkGroup title="Comparing your options" items={COMPARISONS} />
          <LinkGroup title="Planning ahead & hard questions" items={HARD_QUESTIONS} />
          <LinkGroup title="By age" items={BY_AGE} />

          <div className="mt-16 text-center">
            <Button as="link" href="/get-quote" size="lg">
              See what you qualify for
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
