import type { Metadata } from "next";
import { Suspense } from "react";
import { Quiz } from "@/components/quote-quiz/quiz";

export const metadata: Metadata = {
  title: "Get Your Free Quote",
  openGraph: { title: "Get Your Free Quote — FinalExpense.care" },
  twitter: { title: "Get Your Free Quote — FinalExpense.care" },
};

export default function GetQuotePage() {
  return (
    <Suspense fallback={null}>
      <Quiz />
    </Suspense>
  );
}
