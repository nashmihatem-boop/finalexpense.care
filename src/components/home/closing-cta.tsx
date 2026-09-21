import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function ClosingCta() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-3xl bg-harbor px-6 py-14 text-center text-canvas sm:px-16 sm:py-16">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Two minutes now, one less worry later.
          </h2>
          <p className="mt-4 text-lg text-canvas/75">
            See what you qualify for — no medical exam required for most applicants.
          </p>
          <p className="mt-4 text-sm font-bold tracking-wide text-brass uppercase">
            There is no cost and no obligation
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button as="link" href="/get-quote" size="lg">
              See if you qualify
            </Button>
            <Button as="link" href={siteConfig.supportPhoneHref} variant="outline-inverse" size="lg">
              Call {siteConfig.supportPhoneDisplay}
            </Button>
          </div>

          <p className="mx-auto mt-7 max-w-md text-xs leading-relaxed text-canvas/50">
            By continuing you agree to our{" "}
            <Link href="/privacy" className="underline hover:text-canvas">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/tcpa-consent" className="underline hover:text-canvas">
              consent to be contacted
            </Link>{" "}
            by a licensed agent. Consent isn&apos;t required to get a quote.
          </p>
        </div>
      </div>
    </section>
  );
}
