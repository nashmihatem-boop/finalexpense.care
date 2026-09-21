import type { SVGProps } from "react";

function IconNoExam(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconLock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconShieldCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCoins(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <ellipse cx="12" cy="7" rx="6" ry="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 7v10c0 1.66 2.69 3 6 3s6-1.34 6-3V7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 12c0 1.66 2.69 3 6 3s6-1.34 6-3" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconBars(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="12" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <rect x="10" y="6" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <rect x="16" y="9" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconPerson(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function IconSunrise(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M6.5 17a5.5 5.5 0 0111 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="12" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 20s-7-4.4-9-8.8C1.6 8 3.5 5 6.5 5c2 0 3.6 1.2 4.5 2.8C11.9 6.2 13.5 5 15.5 5c3 0 4.9 3 3.5 6.2C17 15.6 12 20 12 20z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BENEFITS = [
  { Icon: IconNoExam, title: "No Medical Exam", body: "Just a short application — most policies skip the physical entirely." },
  { Icon: IconLock, title: "Premiums Never Increase", body: "Your rate is locked in the day you're approved, for life." },
  { Icon: IconShieldCheck, title: "Benefits Never Decrease", body: "The coverage amount you choose stays the same forever." },
  { Icon: IconCoins, title: "Builds Cash Value", body: "As whole life coverage, your policy accumulates value over time." },
  { Icon: IconBars, title: "Flexible Coverage", body: "From $10,000 up to $40,000 or more, sized to your needs." },
  { Icon: IconPerson, title: "Coverage for Seniors", body: "Options available at most ages — a licensed agent can confirm yours." },
  { Icon: IconBolt, title: "Fast Decisions", body: "Often approved in minutes to a few days, not weeks." },
  { Icon: IconSunrise, title: "Day-One Coverage", body: "Most applicants are fully covered from their very first payment." },
  { Icon: IconHeart, title: "Options at Every Health Level", body: "Guaranteed-issue plans are available with no health questions at all." },
];

export function BenefitsGrid() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="text-center font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Everything you get with final expense insurance
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl bg-canvas-alt p-7 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-canvas-raised text-harbor shadow-[0_1px_2px_rgba(20,43,86,0.08)]">
                <b.Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-lg font-extrabold text-harbor">{b.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
