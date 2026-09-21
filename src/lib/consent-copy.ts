import { siteConfig } from "@/lib/site-config";

// Single source of truth for the consent disclosure shown at the point of opt-in. The exact
// string returned here is also stored on the lead record (see lead-schema.ts's consentText
// field) so there's a durable record of what the visitor actually agreed to, not just that
// a checkbox was checked. Keep this as one function, not copy duplicated in JSX, so the
// on-screen text and the stored record can never drift apart.
//
// This is drafted to match common industry structure (entity name, contact methods,
// autodialer/prerecorded-voice disclosure, "not a condition of purchase", opt-out, links) —
// it is NOT a substitute for review by counsel familiar with TCPA and your state's insurance
// marketing rules before this goes live.
export function consentDisclosureText(): string {
  return (
    `By submitting this form, you agree to ${siteConfig.name}'s Privacy Policy and Terms, ` +
    `and consent to be contacted by ${siteConfig.legalEntity} and its licensed insurance ` +
    `agency partners at the phone number and email you provided — by call, text, or email, ` +
    `including by automatic telephone dialing system or prerecorded/artificial voice — about ` +
    `final expense insurance options, even if your number is on a Do Not Call list. Consent ` +
    `is not a condition of purchase. Message and data rates may apply. Message frequency ` +
    `varies. Reply STOP to any text to opt out, or call ${siteConfig.supportPhoneDisplay}.`
  );
}
