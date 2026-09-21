import Link from "next/link";

export function About() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Who we are
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          About FinalExpense.care
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          FinalExpense.care specializes in life insurance and final expense insurance for
          seniors who want peace of mind knowing their funeral expenses won&apos;t burden their
          loved ones. We partner with multiple providers so we can compare dozens of plans side
          by side to find the best value for each customer.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
          Every policy option we show you comes from a licensed carrier — we don&apos;t
          underwrite policies ourselves. Our job is to match you with the right one and put you
          in touch with a licensed agent who can walk you through it, at no cost to you.
        </p>
        <Link
          href="/final-expense-insurance"
          className="mt-7 inline-block text-sm font-bold text-harbor-mid hover:underline"
        >
          Learn how final expense insurance works →
        </Link>
      </div>
    </section>
  );
}
