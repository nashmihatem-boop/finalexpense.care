import type { SVGProps } from "react";
import Image from "next/image";

function IconCompass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M15 9l-2 5-4 1 2-5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function IconTrendingDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 7l6 6 4-4 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10v5h-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTrendingUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 17l6-6 4 4 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 9v5h-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGift(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="9" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 13h16M12 9v11" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 9c-2-3.5-7-2.5-7-.2C5 10 7 9 12 9zM12 9c2-3.5 7-2.5 7-.2 0 1.2-2 .2-7 .2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

const SCENARIOS = [
  {
    Icon: IconCompass,
    title: "New to final expense insurance",
    body: "Not sure where to start? We'll walk you through how it works and what fits your situation, with no pressure to decide today.",
  },
  {
    Icon: IconTrendingDown,
    title: "Looking to lower your payments",
    body: "Already have a policy? We can compare it against current offers to see if there's a better rate for the same coverage.",
  },
  {
    Icon: IconTrendingUp,
    title: "Need more coverage than you have",
    body: "If your existing policy would leave a gap, we'll help you size additional coverage to close it.",
  },
  {
    Icon: IconGift,
    title: "Want to leave a little extra",
    body: "Beyond funeral costs, some people want to leave a cushion for medical bills or a gift for family. We'll help you land on the right amount.",
  },
];

export function HowWeCanHelp() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            However you got here
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            How we can help
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            Every visitor to this page is somewhere a little different in the process. Here&apos;s
            where most people start.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/photos/planning-seniors-conversation.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            {SCENARIOS.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-xl border-l-[3px] border-harbor-mid bg-canvas-alt p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-harbor text-canvas">
                  <s.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-extrabold text-harbor">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center font-display text-lg font-bold text-harbor">
          Wherever you are in the process, we&apos;ll keep it simple.
        </p>
      </div>
    </section>
  );
}
