import Link from "next/link";
import { HorizonMark } from "@/components/horizon-mark";
import { siteConfig } from "@/lib/site-config";

const ABOUT_LINKS = [
  { href: "/", label: "Homepage" },
  { href: "/final-expense-insurance", label: "Final Expense Insurance Explained" },
  { href: "/coverage-by-state", label: "Coverage by State" },
  { href: "/pre-existing-conditions", label: "Pre-Existing Conditions" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#compare", label: "Compare Coverage" },
  { href: "/#faq", label: "FAQ" },
];

const GUIDE_LINKS = [
  { href: "/guides", label: "Resource Library" },
  { href: "/final-expense-insurance-for", label: "Buying for a Loved One" },
  { href: "/funeral-cost", label: "Funeral Cost Guide" },
  { href: "/managing-your-policy", label: "Managing Your Policy" },
  { href: "/avoiding-scams", label: "Avoiding Scams" },
  { href: "/final-expense-insurance-cost", label: "Cost by Coverage Amount" },
];

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms of Use" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/tcpa-consent", label: "TCPA Compliance" },
  { href: "/do-not-call", label: "Do Not Call Policy" },
  { href: "/our-network-of-partners", label: "Our Network of Partners" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-harbor text-canvas/80">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Plain <a>, not <Link>: the homepage hero embeds the LeadForms widget, which only
              reliably initializes on a real page load — client-side nav here leaves it blank
              (same issue as /get-quote, see button.tsx). */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="flex items-center gap-2.5">
            <HorizonMark className="h-8 w-8 text-canvas [&_.text-harbor]:text-canvas [&_.text-mist]:text-canvas/40" />
            <span className="font-display text-lg font-extrabold text-canvas">
              FinalExpense.care
            </span>
          </a>
          <p className="text-sm text-canvas/60">
            Looking for a quote?{" "}
            <a href={siteConfig.supportPhoneHref} className="font-bold text-brass hover:underline">
              {siteConfig.supportPhoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-canvas">About FinalExpense.care</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {ABOUT_LINKS.map((l) =>
                l.href === "/" ? (
                  // Plain <a>: same widget-blank-on-client-nav issue as the logo link above.
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-canvas">
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-canvas">
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-canvas">Guides</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {GUIDE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-canvas">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-canvas">Legal</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-canvas">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-brass/90">
          FinalExpense.care is a website of {siteConfig.legalEntity}, a privately-owned entity.
          This website serves as an invitation for you to inquire about final expense insurance
          coverage. Submitting your contact information gives permission for a licensed insurance
          agent to contact you with further information, including complete details on cost and
          coverage.
        </p>

        <div className="mt-6 max-w-3xl space-y-2 text-xs leading-relaxed text-canvas/45">
          <p>
            FinalExpense.care is not connected with, or endorsed by, any government agency.
            Submitting your information does not enroll you in any coverage. Final premiums,
            benefit amounts, and eligibility are determined by the insurance carrier based on
            your application and state of residence, and coverage is not available in all
            states.
          </p>
          <p>
            We are committed to protecting your privacy. If you&apos;d rather not share your
            information, see our{" "}
            <Link href="/do-not-call" className="underline hover:text-canvas/70">
              opt-out options
            </Link>
            . Residents of California and other states with their own privacy laws have
            additional rights described in our{" "}
            <Link href="/privacy" className="underline hover:text-canvas/70">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <p className="mt-6 border-t border-white/10 pt-6 text-xs text-canvas/40">
          Copyright &copy; {year} | All rights reserved | {siteConfig.mailingAddress}. (Owned by{" "}
          {siteConfig.legalEntity}.)
        </p>
      </div>
    </footer>
  );
}
