import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="September 21, 2026">
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your use of {siteConfig.domain} (the
        &quot;Site&quot;), operated by {siteConfig.legalEntity}. By using the Site, you agree to
        these Terms.
      </p>

      <h2>What this Site is</h2>
      <p>
        {siteConfig.legalEntity} is not an insurance company. The Site helps connect people
        interested in final expense insurance with licensed insurance agents and carriers who
        can evaluate and offer coverage. Submitting a request does not enroll you in any
        insurance policy, and we do not guarantee that you will qualify for coverage, or any
        particular rate or benefit amount.
      </p>

      <h2>Eligibility</h2>
      <p>
        The Site is intended for individuals who are at least 18 years old and are requesting
        information for themselves or, where permitted, on behalf of a family member with that
        person&apos;s knowledge.
      </p>

      <h2>Accuracy of information</h2>
      <p>
        You agree to provide accurate, current information when using the quote form. Inaccurate
        information may delay or prevent you from receiving a quote or coverage.
      </p>

      <h2>No professional advice</h2>
      <p>
        Content on the Site is for general informational purposes and is not insurance, legal,
        financial, or medical advice. Final coverage terms, pricing, and eligibility are
        determined solely by the licensed carrier underwriting your application.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Site&apos;s design, text, graphics, and other content are owned by{" "}
        {siteConfig.legalEntity} or its licensors and may not be copied or reused without
        permission.
      </p>

      <h2>Disclaimers and limitation of liability</h2>
      <p>
        The Site is provided &quot;as is&quot; without warranties of any kind. To the fullest
        extent permitted by law, {siteConfig.legalEntity} is not liable for any indirect,
        incidental, or consequential damages arising from your use of the Site or any product or
        service offered by a partner you were connected with through it.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may revise these Terms from time to time. Continued use of the Site after a revision
        means you accept the updated Terms.
      </p>

      <h2>Contact us</h2>
      <p>
        {siteConfig.legalEntity}
        <br />
        {siteConfig.mailingAddress}
        <br />
        {siteConfig.legalEmail}
      </p>
    </LegalPage>
  );
}
