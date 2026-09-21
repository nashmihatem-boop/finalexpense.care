import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Burial vs. Cremation: A Balanced Comparison",
  description:
    "How cost, religious and cultural considerations, and environmental factors compare between burial and cremation — and why final expense coverage works the same either way.",
};

export default function BurialVsCremationPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Burial vs. Cremation
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Burial vs. cremation: how to think about the choice
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          There&apos;s no universally right answer between burial and cremation — the right
          choice depends on cost priorities, faith, family tradition, and personal preference, and
          reasonable families land in different places. Here&apos;s a balanced look at how they
          actually compare, and one thing that doesn&apos;t change no matter which you choose: how
          your coverage works.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cost tendency
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          As a general tendency, cremation costs less than burial, mainly because it removes
          several line items rather than because any single component is dramatically cheaper.
          Burial typically involves a burial plot, opening and closing the grave, and often a
          burial vault or liner required by the cemetery, on top of a casket — costs that
          don&apos;t apply to cremation at all. That said, &quot;cremation is cheaper&quot;
          isn&apos;t a rule without exceptions: a{" "}
          <Link href="/funeral-cost/cremation-cost" className="font-semibold text-harbor-mid hover:underline">
            cremation paired with an elaborate service
          </Link>{" "}
          and a high-end urn can cost more than a simple, no-frills burial. The category you
          choose matters less than the specific choices you make within it, which is exactly why
          a real, itemized quote from a local provider matters more than any general comparison —
          including this one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Religious and cultural considerations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For many families, this question isn&apos;t primarily financial. Faith and cultural
          background often carry specific expectations: some traditions call for burial
          specifically, some have historically discouraged cremation while increasingly accepting
          it, and others have particular timing or ritual requirements around either option. This
          is genuinely personal territory, and general information only goes so far. If faith or
          family tradition plays a significant role in this decision, your clergy or faith
          community is the right first conversation, alongside a local provider experienced in
          serving that tradition, who can help make sure arrangements are handled correctly and
          respectfully.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Environmental considerations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some families factor environmental impact into the decision alongside cost and
          tradition. Burial involves land use and, depending on the choices made, materials like
          metal, hardwood, and concrete. Cremation avoids land use but involves energy use in the
          process itself. Neither option is impact-free, and there&apos;s growing interest in
          simpler approaches on both sides, including more minimal burial where cemeteries allow
          it, for families who want to weigh this factor more heavily.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">One thing that doesn&apos;t change</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Final expense insurance pays a cash death benefit to whoever you name as beneficiary —
            it isn&apos;t tied to a specific funeral package or disposition method. That means the
            choice between burial and cremation doesn&apos;t require a different kind of policy,
            and it doesn&apos;t lock your family into a decision made years earlier. Whoever
            manages the arrangements decides how to use the funds when the time comes.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Making the choice — and covering it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you&apos;re still weighing burial against cremation, that&apos;s a decision worth
          taking time with, ideally talking it through with family and, if it applies, with
          clergy or a faith community. What doesn&apos;t need to wait is putting coverage in
          place. Since the benefit pays out as cash rather than a predetermined service package,
          you don&apos;t need a final answer today to make sure your family has what it needs when
          the time comes.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
