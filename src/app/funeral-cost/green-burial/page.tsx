import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is Green Burial?",
  description:
    "What eco-friendly or green burial actually involves, and why it's often, though not always, less costly than a traditional burial.",
  openGraph: { title: "What Is Green Burial?", description: "What eco-friendly or green burial actually involves, and why it's often, though not always, less costly than a traditional burial." },

  twitter: { title: "What Is Green Burial?", description: "What eco-friendly or green burial actually involves, and why it's often, though not always, less costly than a traditional burial." },
};

export default function GreenBurialPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Green Burial
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is green burial?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Green, or natural, burial is an approach built around minimizing environmental impact,
          and it&apos;s been steadily growing as an option alongside conventional burial and
          cremation. Here&apos;s what the term actually means, and how it tends to affect cost.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually makes a burial &quot;green&quot;
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A few things typically define it. There&apos;s no embalming with the chemical solutions
          used in conventional preparation, since those chemicals are specifically what a green
          approach avoids putting into the ground. The container is biodegradable — sometimes
          there&apos;s no casket at all, just a simple shroud, and sometimes it&apos;s a casket
          made from untreated wood, wicker, bamboo, or another natural material designed to break
          down, rather than metal or a heavily finished hardwood. There&apos;s typically no
          concrete burial vault or liner, which conventional cemeteries often require to keep the
          ground from settling but which a green burial specifically forgoes. And burial often
          takes place in a natural or conservation burial ground — land set aside and managed
          specifically for this purpose, rather than a conventionally landscaped cemetery lawn.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it tends to cost less
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Green burial often — though not always — costs less than a conventional burial, and the
          reason is straightforward: it eliminates several line items rather than discounting
          them. No embalming means no embalming procedure or chemicals to pay for. A simple shroud
          or an untreated wood or wicker casket is typically less expensive than a traditional
          metal casket or a heavily finished hardwood one. No vault requirement removes another
          cost entirely. That said, &quot;often less&quot; isn&apos;t &quot;always less&quot; — a
          natural burial ground still sets its own plot and service pricing like any cemetery, and
          some higher-end natural-material caskets aren&apos;t inexpensive on their own.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Availability isn&apos;t the same everywhere
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not every cemetery accepts green burial, and where it is available, what counts as
          &quot;green&quot; or &quot;natural&quot; isn&apos;t applied uniformly. Some burial
          grounds are certified by independent conservation organizations with specific standards;
          others use the term without any outside certification at all. It&apos;s genuinely worth
          asking a specific provider what their green option actually includes — no embalming and
          no vault mean different things to different cemeteries, and it&apos;s better to know
          exactly what you&apos;re getting before you assume.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where cremation fits in
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation is a separate path from green burial, not the same thing — it uses its own
          energy and isn&apos;t automatically the &quot;greener&quot; choice, though some people
          see it as a simpler, lower-impact option compared to a conventional embalmed burial with
          a vault. Some families combine the two ideas, choosing cremation and then a
          biodegradable urn for a natural burial of the cremated remains. There&apos;s no single
          right answer here — it comes down to what matters most to your family.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Ask directly, then size your coverage</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Because green burial is newer and less standardized than conventional burial,
            it&apos;s worth confirming the details directly with a specific provider rather than
            assuming — including whether the cemetery you&apos;re considering requires a vault
            even in a &quot;green&quot; section, since that alone changes the cost picture. Once
            you have a real, current number, that&apos;s the figure to size coverage against, with
            room left over for the rest of what a funeral involves.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the funeral cost guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
