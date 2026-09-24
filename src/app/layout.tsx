import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = `https://${siteConfig.domain}`;
const DEFAULT_TITLE = "FinalExpense.care — Final Expense Life Insurance Quotes";
const DEFAULT_DESCRIPTION =
  "Compare final expense life insurance coverage in minutes. No medical exam for most applicants. Answer a few quick questions to see your options.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — FinalExpense.care",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "FinalExpense.care",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FinalExpense.care",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  telephone: siteConfig.supportPhoneDisplay,
  parentOrganization: { "@type": "Organization", name: siteConfig.legalEntity },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FinalExpense.care",
  url: SITE_URL,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-charcoal">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18467626647"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18467626647');
          `}
        </Script>
        {/* LeadForms pixel (useleadbot.com) — powers the embedded quote form at /get-quote.
            window.form_token must be set before the pixel script itself loads. */}
        <Script id="leadforms-token" strategy="afterInteractive">
          {`window.form_token = "GLFT-SSUMFHGJIO35PIDV7SBCKW5AFWF";`}
        </Script>
        <Script
          src="https://api.useleadbot.com/lead-bots/get-pixel-script.js"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
