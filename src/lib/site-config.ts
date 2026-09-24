// Central place for the handful of business facts that appear across the site copy,
// legal pages, and consent language. Fill these in with real values before launch —
// nothing here should ship with a placeholder still in it.

export const siteConfig = {
  name: "FinalExpense.care",
  // The disclosed name on every legal page, footer, and schema.org entry — deliberately the
  // branded domain name itself, not a separate LLC name.
  legalEntity: "FinalExpense.Care",
  domain: "finalexpense.care",
  // Every call CTA on the site (header, hero, thank-you page) reads this pair, so once the
  // "Insurance - Final Expense - IN/WT" Ringba campaign exists, dropping its Dynamic Number
  // Insertion tag into layout.tsx and letting it rewrite these two values on page load is the
  // whole integration — no component changes needed. Until then this is a plain, untracked
  // number and calls to it won't show up in Ringba/the CRM.
  supportPhoneDisplay: "(302) 407-0876",
  supportPhoneHref: "tel:+13024070876",
  // One contact address, info@<domain>, used everywhere — general contact and legal pages alike.
  supportEmail: "info@finalexpense.care",
  legalEmail: "info@finalexpense.care",
  // Where new-lead notification emails go (see sendLeadNotificationEmail in lead-delivery.ts).
  // Interim inbox — swap this one line when the real destination is ready.
  leadNotificationEmail: "kobi@assigners.com",
  // Same registered address as healthadvantageplan.com's footer, per confirmation.
  mailingAddress: "2810 N Church St STE 88855, Wilmington, DE 19802",
} as const;
