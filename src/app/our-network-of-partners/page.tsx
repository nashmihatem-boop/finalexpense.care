import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Network of Partners",
  description: "Who your information may be shared with when you submit a request on FinalExpense.care.",
  robots: { index: false, follow: true },
  openGraph: { title: "Our Network of Partners — FinalExpense.care" },
  twitter: { title: "Our Network of Partners — FinalExpense.care" },
};

export default function OurNetworkOfPartnersPage() {
  return (
    <LegalPage title="Our Network of Partners" updated="September 24, 2026">
      <p>
        FinalExpense.care is operated by {siteConfig.legalEntity}. When you submit a request on
        {" "}{siteConfig.domain}, your information may be shared with one or more of the companies
        listed below, or with independent insurance agents and agencies working with them, so
        they can contact you. The companies listed are independent businesses. We do not endorse
        or guarantee their services.
      </p>

      <h2>Partners</h2>
      <p>
        We&apos;re finalizing this list with our current insurance partners. In the meantime,
        contact us at {siteConfig.legalEmail} for details on who currently receives requests
        submitted through this Site.
      </p>

      <p>
        This list may change from time to time. For details on how your information is used and
        how to opt out, see our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
