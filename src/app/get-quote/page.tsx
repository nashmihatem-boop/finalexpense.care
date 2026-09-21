import type { Metadata } from "next";
import { Suspense } from "react";
import { Quiz } from "@/components/quote-quiz/quiz";

export const metadata: Metadata = {
  title: "Get Your Free Quote",
};

export default function GetQuotePage() {
  return (
    <Suspense fallback={null}>
      <Quiz />
    </Suspense>
  );
}
