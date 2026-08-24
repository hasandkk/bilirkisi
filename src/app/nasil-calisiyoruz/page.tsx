import type { Metadata } from "next";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { MultidisciplinarySection, ReportApproachSection } from "@/components/sections";
import { FaqList } from "@/components/faq";
import { BulletList, ButtonLink, NoteBox, Section, SectionHeader } from "@/components/ui";
import { processSteps } from "@/content/process";
import { faqItems } from "@/content/faq";
import { cta, scopeStatement } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "Nasıl Çalışıyoruz?" }];

export const metadata: Metadata = pageMetadata({
  title: "Nasıl Çalışıyoruz?",
  description:
    "Başvurudan raporlamaya beş aşamalı teknik inceleme süreci: başvuru, ön inceleme, uzmanlık eşleştirmesi, teknik inceleme ve gerekçeli raporlama.",
  path: "/nasil-calisiyoruz",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Nasıl Çalışıyoruz?"
        title="Başvurudan raporlamaya beş aşama"
        description="Her aşamanın çıktısı bellidir. Dosyanın kapsamı, incelenebilirliği ve sınırları süreç içinde açıkça tanımlanır."
        crumbs={crumbs}
        aside={
          <div className="border border-white/12 bg-white/[0.035] p-7">
            <p className="eyebrow mb-5 text-gold-400">Çalışma Esası</p>
            <p className="text-[0.9375rem] leading-relaxed text-navy-200">{scopeStatement}</p>
            <div className="mt-7 border-t border-white/10 pt-6">
              <ButtonLink href={cta.primaryLong.href} variant="gold" withArrow className="w-full">
                Dosya Ön İnceleme Talebi
              </ButtonLink>
            </div>
          </div>
        }
      />

      <Section size="lg">
        <div className="container-page">
          <ol className="space-y-px bg-line">
            {processSteps.map((step) => (
              <li key={step.step} className="bg-white">
                <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[auto_1fr_20rem] lg:items-start lg:gap-14">
                  <span className="font-mono text-[2.5rem] leading-none font-light text-navy-200">
                    {step.step}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 sm:text-[1.375rem]">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-[0.9375rem] font-medium text-gold-700">
                      {step.summary}
                    </p>
                    <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-soft">
                      {step.detail}
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 bg-surface p-6">
                    <p className="eyebrow mb-4 text-gold-700">Aşama Çıktıları</p>
                    <BulletList items={step.outputs} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <MultidisciplinarySection />
      <ReportApproachSection full />

      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeader
                eyebrow="Kapsam ve Sınırlar"
                title="Neyi yaparız, neyi yapmayız?"
              />
              <div className="mt-8">
                <NoteBox title="Sınırların açıkça belirtilmesi">
                  Teknik değerlendirme, incelenen belge, veri ve bulgularla sınırlıdır.
                  Bulguların yeterli olmadığı hâllerde bu durum raporda açıkça yazılır;
                  sonuç taahhüdü verilmez.
                </NoteBox>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-line bg-white p-7">
                <p className="eyebrow mb-5 text-gold-700">Kapsamımızda</p>
                <BulletList
                  items={[
                    "Teknik inceleme ve analiz",
                    "Uzman görüşü ve teknik mütalaa",
                    "Hasar ve maliyet değerlendirmesi",
                    "Teknik nedensellik analizi",
                    "Mevcut raporların teknik incelenmesi",
                    "Multidisipliner dosya kurgusu",
                  ]}
                />
              </div>
              <div className="border border-line bg-surface p-7">
                <p className="eyebrow mb-5 text-ink-muted">Kapsamımız Dışında</p>
                <BulletList
                  items={[
                    "Hukuki tavsiye ve dava stratejisi",
                    "Tıbbi teşhis ve maluliyet değerlendirmesi",
                    "Sonuç veya kazanç taahhüdü",
                    "Yetki gerektiren resmî raporların yetkisiz düzenlenmesi",
                    "Hukuka aykırı temin edilmiş veriler üzerinde inceleme",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeader eyebrow="Sık Sorulan Sorular" title="Süreç hakkında" as="h2" />
            <FaqList items={faqItems} />
          </div>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
