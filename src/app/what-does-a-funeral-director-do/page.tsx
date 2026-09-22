import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Does a Funeral Director Do?",
  description:
    "A respectful look at the role a funeral director actually plays — coordinating logistics, handling permits and paperwork, preparing the deceased, and guiding a grieving family.",
  openGraph: { title: "What Does a Funeral Director Do?", description: "A respectful look at the role a funeral director actually plays — coordinating logistics, handling permits and paperwork, preparing the deceased, and guiding a grieving family." },

  twitter: { title: "What Does a Funeral Director Do?", description: "A respectful look at the role a funeral director actually plays — coordinating logistics, handling permits and paperwork, preparing the deceased, and guiding a grieving family." },
};

export default function WhatDoesAFuneralDirectorDoPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What does a funeral director do?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          When someone dies, a funeral director becomes one of the main points of contact for a
          family that&apos;s often exhausted, grieving, and unsure what happens next. Their role
          goes well beyond running a service — it&apos;s a mix of logistics, paperwork, technical
          care, and steady guidance at a time when a family has very little bandwidth for any of
          it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coordinating the logistics
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A funeral director manages the practical machinery behind a service that a family rarely
          sees in full — transporting the deceased, coordinating with the cemetery or crematory,
          scheduling the service and any visitation, arranging clergy or officiants if requested,
          and making sure everyone and everything is in the right place at the right time. Much of
          this happens on a tight timeline, and it&apos;s coordinated so the family doesn&apos;t
          have to manage the moving pieces themselves.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Handling permits and paperwork
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Death comes with a surprising amount of official paperwork, and a funeral director
          typically handles most of it. That includes filing for the death certificate, securing
          permits required for burial or cremation, and often helping the family understand next
          steps for things like notifying Social Security or filing a life insurance claim. Few
          families know this process in advance, which is exactly why having someone who handles
          it routinely matters.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Preparing the deceased
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral directors are trained to care for the deceased with a level of technical skill
          and dignity most families never have to think about until they need it — whether that
          means embalming and preparation for a viewing, or simpler preparation ahead of a direct
          cremation or burial. The specific steps depend heavily on what the family has chosen,
          but the underlying standard is the same: treating the person with the same respect the
          family would want.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Guiding the family through decisions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Perhaps the least visible part of the job is the most human one. A funeral director
          walks a family through decisions many of them have never had to make before — what kind
          of service, if any; burial or cremation; what to include and what to skip — while being
          mindful that they&apos;re talking to people who are grieving, not shopping. A good
          funeral director explains the options clearly, answers questions honestly, and
          doesn&apos;t pressure a family toward more than they actually want.
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/80">
          Every one of those decisions has a cost attached. Having a policy already in place —
          with a beneficiary who can pay the funeral home directly, on the family&apos;s own
          timeline — is one less thing to figure out in the middle of it.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
