import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HorizonDivider } from "@/components/horizon-divider";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-harbor text-canvas">
      <Image
        src="/hero-couple.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_22%]"
      />
      {/* Navy overlay — solid enough on the left for the headline to stay legible, easing up on
          the right where the photo can show through more (the form card there is opaque anyway). */}
      <div className="absolute inset-0 bg-gradient-to-r from-harbor-deep via-harbor/92 to-harbor/55" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-32 lg:grid-cols-[0.95fr_1.15fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            Final Expense Insurance
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] font-extrabold text-canvas sm:text-5xl lg:text-[3.4rem]">
            Make sure the cost never lands on them.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-canvas/80 sm:text-xl">
            See what burial and funeral coverage you qualify for in under two
            minutes. Most applicants are approved with no medical exam and a
            rate that holds for life.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button as="link" href="/get-quote" size="lg">
              See if you qualify
            </Button>
            <Button as="link" href={siteConfig.supportPhoneHref} variant="outline-inverse" size="lg">
              Call {siteConfig.supportPhoneDisplay}
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-canvas/70">
            <div className="flex items-center gap-2">
              <CheckDot />
              Licensed agents, not call-center scripts
            </div>
            <div className="flex items-center gap-2">
              <CheckDot />
              No medical exam for most applicants
            </div>
            <div className="flex items-center gap-2">
              <CheckDot />
              No obligation to enroll
            </div>
          </dl>
        </div>

        <div className="relative">
          {/* max-h + overflow-y-auto on purpose: later widget steps (longer questions, the
              final "Thank you" screen) render far more content than the first zip/state step —
              without a cap the card grows with whichever step is active and the hero jumps
              around. Capping it keeps the hero's height steady; a tall step scrolls internally. */}
          <div className="max-h-[560px] overflow-y-auto rounded-2xl border border-mist bg-canvas-raised p-6 shadow-[0_12px_32px_rgba(20,43,86,0.12)] sm:p-8">
            <div id="leadforms-embd-form" />
          </div>
        </div>
      </div>

      <HorizonDivider fillClassName="fill-canvas" className="absolute bottom-0 left-0" />
    </section>
  );
}

function CheckDot() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/25 text-sage">
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
