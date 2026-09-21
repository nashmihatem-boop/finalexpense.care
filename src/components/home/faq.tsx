const FAQS = [
  {
    q: "What does final expense insurance actually pay for?",
    a: "It's a cash payout to whoever you name as your beneficiary — most people use it for funeral and burial costs, an outstanding medical bill, or just general expenses so family doesn't have to cover them out of pocket. There's no restriction on how the money is spent.",
  },
  {
    q: "Do I have to take a medical exam?",
    a: "For most simplified-issue policies, no. You'll answer a short set of yes/no health questions instead of taking a physical exam or giving a blood sample. Some guaranteed-issue policies skip health questions entirely, though those typically cost more for the same payout.",
  },
  {
    q: "Can I still qualify if I have a pre-existing health condition?",
    a: "Often, yes. Coverage and pricing depend on the condition and the carrier, which is exactly what a licensed agent can check for you — there's no cost or obligation to find out.",
  },
  {
    q: "How much coverage do I actually need?",
    a: "Most people choose an amount that covers a funeral and burial or cremation, which commonly runs $8,000–$15,000, plus a cushion for any outstanding bills. An agent can help you size it to your situation instead of guessing.",
  },
  {
    q: "How is this different from a regular life insurance policy?",
    a: "Final expense policies are smaller, whole life policies built to be easy to qualify for and to cover end-of-life costs specifically — rather than replacing years of income the way a large term policy would.",
  },
  {
    q: "Does requesting a quote commit me to anything?",
    a: "No. Answering the questions and talking to an agent costs nothing and doesn't enroll you in anything. You only have coverage if you choose to accept an offer and it's issued by the carrier.",
  },
  {
    q: "What happens if I miss a premium payment?",
    a: "Most policies include a grace period before coverage lapses, and many carriers will reach out before that happens. If you're ever at risk of missing a payment, call your agent first — there are usually options to keep the policy in force.",
  },
  {
    q: "Can I name more than one beneficiary?",
    a: "Yes. You can typically name multiple beneficiaries and set what percentage of the payout each one receives, and you can update your beneficiaries later if your situation changes.",
  },
  {
    q: "How do carriers decide what my premium will be?",
    a: "Mainly your age and the coverage amount you choose, plus your answers to the health questions on a simplified-issue policy. Because the payout is smaller than a large life insurance policy, premiums are usually modest and fixed for life.",
  },
  {
    q: "Can I change my coverage after I'm enrolled?",
    a: "In most cases, yes — you can typically increase coverage (subject to new underwriting) or adjust your beneficiaries at any time. Your agent can walk you through what your specific carrier allows.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-canvas-alt">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            Questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            Before you start, the honest answers.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-mist bg-canvas-raised px-6 py-5 open:border-harbor-mid/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-harbor marker:content-none">
                {item.q}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0 text-harbor-mid transition-transform duration-200 group-open:-rotate-180"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal/80">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
