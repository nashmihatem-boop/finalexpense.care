import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Disclaimer",
  openGraph: { title: "Disclaimer — FinalExpense.care" },
  twitter: { title: "Disclaimer — FinalExpense.care" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="September 21, 2026">
      <h2>Final Expense Insurance Disclaimer</h2>
      <p>
        Rates and eligibility are based on factors including your age, gender, health, and
        state of residence. Not every applicant will qualify for every plan.{" "}
        {siteConfig.name}, a website of {siteConfig.legalEntity}, represents multiple insurance
        carriers and products rather than a single insurer. All coverage is subject to
        underwriting approval by the issuing carrier. Most policies don&apos;t require a medical
        exam, but may include a short health questionnaire.
      </p>

      <h2>Consent to Contact</h2>
      <p>
        By submitting your information on this website, you agree that {siteConfig.legalEntity}{" "}
        and its licensed insurance agency partners may contact you by phone call, text message,
        email, or other methods — including by automatic telephone dialing system or
        prerecorded/artificial voice — even if your number is on a Do Not Call list. Consent
        isn&apos;t a condition of purchase, and standard message and data rates may apply. You
        may opt out at any time. See our{" "}
        <a href="/tcpa-consent">Consent to Be Contacted</a> page for the full disclosure, and{" "}
        <a href="/do-not-call">Opt Out / Do Not Call</a> for how to stop contact.
      </p>

      <h2>General Information Disclaimer</h2>
      <p>
        The information on this website is for general educational purposes only and isn&apos;t
        a substitute for advice from a licensed insurance professional. Premiums, death benefit
        amounts, plan availability, and underwriting requirements vary by carrier, state of
        residence, health status, and the policy&apos;s effective date, and are subject to
        change without notice. Always confirm your exact costs and coverage directly with the
        issuing carrier or your licensed agent before enrolling.
      </p>
      <p>
        Any pricing or rate information referenced on this site is for general comparison only
        and may not reflect your exact cost.
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
