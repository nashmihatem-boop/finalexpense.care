import Link from "next/link";
import { HorizonMark } from "@/components/horizon-mark";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/final-expense-insurance", label: "Learn" },
  { href: "/guides", label: "Guides" },
  { href: "/coverage-by-state", label: "By State" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        {/* Plain <a>, not <Link>: the homepage hero embeds the LeadForms widget, which only
            reliably initializes on a real page load — client-side nav here leaves it blank
            (same issue as /get-quote, see button.tsx). */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="flex min-w-0 items-center gap-2.5">
          <HorizonMark className="h-9 w-9 shrink-0" />
          <span className="truncate font-display text-xl font-extrabold text-harbor">
            FinalExpense<span className="text-brass">.care</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-harbor/80 hover:text-harbor"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button as="link" href={siteConfig.supportPhoneHref} size="sm" className="shrink-0 gap-2 whitespace-nowrap">
          <span aria-hidden="true">&#9742;</span>
          <span className="hidden sm:inline">{siteConfig.supportPhoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </Button>
      </div>
    </header>
  );
}
