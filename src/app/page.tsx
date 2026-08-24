import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import {
  AudiencesSection,
  CorporateSection,
  ExpertiseSection,
  KnowledgeSection,
  LawyersSection,
  MultidisciplinarySection,
  ProcessSection,
  ReportApproachSection,
  TechnicalQuestionsSection,
} from "@/components/sections";
import { FaqSection, faqJsonLd } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { faqItems } from "@/content/faq";
import { site } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: site.slogan,
  description: site.shortDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudiencesSection />
      <ExpertiseSection />
      <TechnicalQuestionsSection />
      <MultidisciplinarySection />
      <LawyersSection />
      <CorporateSection />
      <ProcessSection />
      <ReportApproachSection />
      <KnowledgeSection />
      <FaqSection />
      <CtaBand />
      <JsonLd data={faqJsonLd(faqItems)} />
    </>
  );
}
