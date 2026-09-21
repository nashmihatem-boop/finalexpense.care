import { Hero } from "@/components/home/hero";
import { BenefitsGrid } from "@/components/home/benefits-grid";
import { HowWeCanHelp } from "@/components/home/how-we-can-help";
import { Education } from "@/components/home/education";
import { About } from "@/components/home/about";
import { BrowseConditions } from "@/components/home/browse-conditions";
import { StateFinder } from "@/components/home/state-finder";
import { HowItWorks } from "@/components/home/how-it-works";
import { Comparison } from "@/components/home/comparison";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { UrgencyCta } from "@/components/home/urgency-cta";
import { Faq } from "@/components/home/faq";
import { ClosingCta } from "@/components/home/closing-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsGrid />
      <HowWeCanHelp />
      <Education />
      <About />
      <BrowseConditions />
      <StateFinder />
      <HowItWorks />
      <Comparison />
      <WhyChooseUs />
      <UrgencyCta />
      <Faq />
      <ClosingCta />
    </>
  );
}
