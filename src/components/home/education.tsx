const POINTS = [
  {
    title: "Covers what Medicare and savings often don't",
    body: "A typical funeral, burial, and headstone runs well into five figures. Final expense coverage pays out directly to your family so they're not left figuring out how to cover it during an already hard week.",
  },
  {
    title: "Built to be simple to qualify for",
    body: "Most policies are “simplified issue” — a handful of health questions, no exam, no bloodwork. Coverage decisions typically come back in minutes, not weeks.",
  },
  {
    title: "A rate that doesn't change",
    body: "It's whole life coverage: once you're approved, your premium is locked in and your coverage doesn't shrink as you get older, as long as premiums are paid.",
  },
];

export function Education() {
  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            What it actually is
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            A small policy with one job: cover the final bills.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {POINTS.map((point) => (
            <div key={point.title}>
              <div className="h-1 w-10 rounded-full bg-sage" />
              <h3 className="mt-5 font-display text-xl font-extrabold text-harbor">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
