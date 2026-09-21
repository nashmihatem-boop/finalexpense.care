import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { consentDisclosureText } from "@/lib/consent-copy";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Consent to Be Contacted" };

export default function TcpaConsentPage() {
  return (
    <LegalPage title="Consent to Be Contacted" updated="September 21, 2026">
      <p className="rounded-xl border-2 border-mist bg-canvas-raised p-5 text-charcoal">
        {consentDisclosureText()}
      </p>

      <h2>What this means in plain terms</h2>
      <ul>
        <li>
          When you submit the quote form, you&apos;re allowing {siteConfig.legalEntity} and the
          licensed agents we work with to call, text, or email you about final expense insurance
          — even using automated dialing systems or a prerecorded voice, and even if your number
          is on a state or national Do Not Call list.
        </li>
        <li>
          <strong>You do not have to agree to this to get a quote.</strong> If you&apos;d rather
          not be contacted this way, call us directly instead — see the number in the footer of
          every page.
        </li>
        <li>Standard message and data rates from your carrier may apply to text messages.</li>
        <li>
          Consent isn&apos;t a condition of buying insurance from us or any partner — you can
          decline coverage at any point in the process at no cost.
        </li>
      </ul>

      <h2>How to revoke consent</h2>
      <p>
        You can withdraw this consent at any time. Reply <strong>STOP</strong> to any text
        message to stop texts from that sender, tell an agent on a call that you&apos;d like to
        be removed from future calls, or contact us directly using the details below or on our{" "}
        <a href="/do-not-call">Opt Out / Do Not Call</a> page. Revoking consent doesn&apos;t
        affect any coverage you&apos;ve already been issued.
      </p>

      <h2>Contact us</h2>
      <p>
        {siteConfig.legalEntity}
        <br />
        {siteConfig.mailingAddress}
        <br />
        {siteConfig.legalEmail} &middot; {siteConfig.supportPhoneDisplay}
      </p>
    </LegalPage>
  );
}
