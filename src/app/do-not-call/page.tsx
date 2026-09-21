import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Opt Out / Do Not Call" };

export default function DoNotCallPage() {
  return (
    <LegalPage title="Opt Out / Do Not Call" updated="September 21, 2026">
      <p>
        If you no longer want to be contacted by {siteConfig.legalEntity} or the licensed agent
        partners we work with, you can opt out at any time, free of charge, using any of the
        methods below.
      </p>

      <h2>Ways to opt out</h2>
      <ul>
        <li>
          <strong>Text:</strong> Reply <strong>STOP</strong> to any text message you&apos;ve
          received from us to stop future texts from that number.
        </li>
        <li>
          <strong>Phone:</strong> Tell the agent on any call that you&apos;d like to be placed on
          our internal do-not-call list, or call {siteConfig.supportPhoneDisplay} directly.
        </li>
        <li>
          <strong>Email:</strong> Send a request to {siteConfig.legalEmail} with the phone
          number and/or email address you&apos;d like removed.
        </li>
      </ul>
      <p>
        We process opt-out requests within a reasonable time, consistent with applicable law
        (generally within 10 business days). You may still receive a message already in progress
        at the time we process your request.
      </p>

      <h2>How this relates to the National Do Not Call Registry</h2>
      <p>
        Registering your number on the National Do Not Call Registry doesn&apos;t automatically
        stop calls related to a request you&apos;ve submitted through this Site — submitting our
        quote form is a request for information that creates an inquiry relationship, and, if
        you check the consent box, express consent to be contacted, both of which are recognized
        exceptions under telemarketing law. Using the opt-out methods above is the fastest way to
        stop contact regardless of your Registry status.
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
