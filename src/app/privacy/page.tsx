import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  openGraph: { title: "Privacy Policy — FinalExpense.care" },
  twitter: { title: "Privacy Policy — FinalExpense.care" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 21, 2026">
      <p>
        This Privacy Policy explains how {siteConfig.legalEntity} (&quot;we,&quot; &quot;us&quot;)
        collects, uses, and shares information when you visit {siteConfig.domain} or submit a
        request through our quote form (the &quot;Site&quot;).
      </p>

      <h2>Information we collect</h2>
      <p>When you use the Site, we may collect:</p>
      <ul>
        <li>
          <strong>Information you provide</strong> — name, date of birth, sex, ZIP code and
          state, email address, phone number, and the coverage amount you&apos;re interested in.
        </li>
        <li>
          <strong>Consent and verification records</strong> — the exact disclosure text shown to
          you, the time you submitted the form, and technical identifiers (IP address, browser
          user agent) captured at that moment, which we keep as proof of consent.
        </li>
        <li>
          <strong>Usage data</strong> — pages viewed, the page that referred you to the Site, and
          similar analytics collected automatically.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To match you with licensed insurance agents and carriers who can offer coverage.</li>
        <li>To contact you about the request you submitted, by phone, text, or email.</li>
        <li>To maintain records demonstrating your consent, as required by law.</li>
        <li>To operate, secure, and improve the Site.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        Generating insurance quotes for you requires sharing your information with third
        parties who can actually offer you coverage. We share the information you submit with:
      </p>
      <ul>
        <li>
          Licensed insurance agents, agencies, and carriers (&quot;partners&quot;) who may
          contact you directly about final expense insurance products.
        </li>
        <li>
          Service providers who help us operate the Site, verify consent (such as call-tracking
          and consent-certification providers), and process submissions.
        </li>
        <li>As required by law, or to protect the rights, safety, and property of any party.</li>
      </ul>
      <p>
        We do not sell your information to data brokers for purposes unrelated to the insurance
        quote you requested.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask a partner who contacts you to stop, at any time, by following the opt-out
        instructions they provide or by replying STOP to any text message. For Site-wide
        requests — including a request to access, correct, or delete the information we hold
        about you, or to opt out of future contact entirely — see our{" "}
        <a href="/do-not-call">Opt Out / Do Not Call</a> page or email {siteConfig.legalEmail}.
        Residents of states with a specific privacy law (such as California, Colorado, or
        Virginia) may have additional statutory rights; contact us to exercise them.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain submission and consent records for as long as reasonably necessary to fulfill
        the purposes described above and to meet legal, accounting, and dispute-defense
        requirements.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        The Site is intended for adults seeking insurance coverage and is not directed to
        children under 16. We do not knowingly collect information from children.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable administrative and technical safeguards to protect your information.
        No method of transmission or storage is completely secure, and we cannot guarantee
        absolute security.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
        above reflects the most recent revision.
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
