import type { Metadata } from "next";
import { Suspense } from "react";
import { GetQuotePrefill } from "@/components/get-quote-prefill";

export const metadata: Metadata = {
  title: "Get Your Free Quote",
  openGraph: { title: "Get Your Free Quote — FinalExpense.care" },
  twitter: { title: "Get Your Free Quote — FinalExpense.care" },
};

// The form itself is rendered into #leadforms-embd-form by the LeadForms pixel (useleadbot.com)
// — see the Script tags in the root layout. Plain white background on purpose: the widget's own
// design (configured in the useleadbot dashboard) already carries the page, no extra framing.
//
// The custom multi-step quiz this route used before lives on in src/components/quote-quiz/
// and src/app/actions.ts (unused, not deleted) in case this needs to be reverted.
export default function GetQuotePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <div id="leadforms-embd-form" />
      <Suspense fallback={null}>
        <GetQuotePrefill />
      </Suspense>
    </div>
  );
}
