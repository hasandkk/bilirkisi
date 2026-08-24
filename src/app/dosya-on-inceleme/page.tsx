import type { Metadata } from "next";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { PreReviewForm } from "@/components/pre-review-form";
import { Section, SectionHeader } from "@/components/ui";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { processSteps } from "@/content/process";
import { contact, legalDisclaimer } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "Dosya Ön İnceleme" }];

export const metadata: Metadata = pageMetadata({
  title: "Dosya Ön İnceleme Talebi",
  description:
    "Teknik uyuşmazlık dosyanızı ön incelemeye gönderin. Dosyanın teknik soruları ve gereken uzmanlık alanları değerlendirilerek tarafınıza dönüş yapılır.",
  path: "/dosya-on-inceleme",
});

type SearchParams = { searchParams: Promise<{ alan?: string }> };

export default async function PreReviewPage({ searchParams }: SearchParams) {
  const { alan } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Dosya Ön İnceleme"
        title="Dosyanızı ön incelemeye gönderin"
        description="Uyuşmazlığın konusunu, cevabını aradığınız teknik soruları ve elinizdeki belgeleri iletin. Ön inceleme aşamasında dosyanın incelenebilirliği, kapsamı ve gereken uzmanlık alanları değerlendirilir."
        crumbs={crumbs}
        aside={
          <div className="border border-white/12 bg-white/[0.035] p-7">
            <p className="eyebrow mb-5 text-gold-400">Ön İncelemede Ne Olur?</p>
            <ol className="space-y-4">
              {processSteps.slice(0, 3).map((step) => (
                <li key={step.step} className="flex items-start gap-4">
                  <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-gold-500">
                    {step.step}
                  </span>
                  <span>
                    <span className="block text-[0.9375rem] font-medium text-white">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] leading-relaxed text-navy-300">
                      {step.summary}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-7 space-y-3 border-t border-white/10 pt-6 text-[0.875rem] text-navy-200">
              <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <PhoneIcon className="size-4 text-gold-500" />
                {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <MailIcon className="size-4 text-gold-500" />
                {contact.email}
              </a>
              <p className="flex items-center gap-3">
                <ClockIcon className="size-4 text-gold-500" />
                {contact.workingHours}
              </p>
            </div>
          </div>
        }
      />

      <Section size="lg">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="Başvuru Formu"
              title="Dosya bilgilerini iletin"
              description="Tüm belgelerin hazır olması gerekmez. Eksik belgeler ön inceleme sonrasında ayrıca bildirilir."
            />
            <div className="mt-12">
              <PreReviewForm defaultArea={alan} />
            </div>

            <p className="mt-10 border-l-2 border-gold-500 bg-surface p-6 text-[0.875rem] leading-relaxed text-ink-soft">
              {legalDisclaimer}
            </p>
          </div>
        </div>
      </Section>

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
