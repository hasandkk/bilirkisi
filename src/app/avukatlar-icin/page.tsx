import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ProcessSection } from "@/components/sections";
import { FaqList } from "@/components/faq";
import { BulletList, ButtonLink, NoteBox, Section, SectionHeader } from "@/components/ui";
import { areaIcons, ArrowRightIcon, CheckIcon } from "@/components/icons";
import { expertiseAreas } from "@/content/expertise";
import { faqItems } from "@/content/faq";
import { cta } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "Avukatlar İçin" }];

export const metadata: Metadata = pageMetadata({
  title: "Avukatlar İçin Teknik İnceleme ve Uzman Görüşü",
  description:
    "Avukatlar ve hukuk büroları için teknik uzmanlık gerektiren dosyalarda teknik soruların belirlenmesi, dosya incelemesi, uzman görüşü ve gerekçeli teknik raporlama.",
  path: "/avukatlar-icin",
});

const workflow = [
  {
    title: "Teknik sorunun belirlenmesi",
    description:
      "Dosyanın hangi teknik soruları içerdiği baştan tanımlanır. Yanlış kurulmuş bir teknik soru, doğru cevabı imkânsız hâle getirir.",
  },
  {
    title: "İncelenebilirlik değerlendirmesi",
    description:
      "Mevcut belge ve verilerle hangi soruların yanıtlanabileceği, hangilerinin ek materyal gerektirdiği açıkça bildirilir.",
  },
  {
    title: "Kapsamın yazılı hâle getirilmesi",
    description:
      "İnceleme kapsamı, yöntem ve süre çalışma öncesinde yazılı olarak belirlenir; sürpriz kapsam genişlemesi olmaz.",
  },
  {
    title: "Gerekçeli raporlama",
    description:
      "Her tespitin dayanağı gösterilir; değerlendirmenin sınırları ve varsayımları raporda ayrıca belirtilir.",
  },
];

const useCases = [
  {
    title: "Mevcut rapora karşı teknik değerlendirme",
    description:
      "Dosyadaki bir teknik raporun yöntemi, kabulleri ve hesap esasları teknik açıdan incelenir; tutarsızlıklar gerekçeleriyle ortaya konur.",
  },
  {
    title: "Dava öncesi teknik ön değerlendirme",
    description:
      "Uyuşmazlığın teknik tarafının ne ölçüde desteklenebilir olduğu, dava açılmadan önce değerlendirilir.",
  },
  {
    title: "Teknik soru listesi hazırlığı",
    description:
      "Dosyada sorulması gereken teknik soruların sistematik biçimde belirlenmesi ve önceliklendirilmesi.",
  },
  {
    title: "Multidisipliner dosya kurgusu",
    description:
      "Birden fazla uzmanlık gerektiren dosyalarda incelemenin tek bir yapı içinde koordine edilmesi.",
  },
];

const lawyerFaq = faqItems.filter((item) =>
  [
    "Bu hizmet, yargı mercilerinin yaptığı görevlendirmelerle aynı şey mi?",
    "Raporun dosyada nasıl kullanılacağına kim karar verir?",
    "İnceleme ne kadar sürer?",
    "Hangi belgeleri göndermem gerekiyor?",
    "Sonuç garantisi veriliyor mu?",
    "Gönderdiğim belgeler gizli tutuluyor mu?",
  ].includes(item.question),
);

export default function LawyersPage() {
  return (
    <>
      <PageHero
        eyebrow="Avukatlar ve Hukuk Büroları"
        title="Teknik uzmanlık gerektiren dosyalarınız için"
        description="Uyuşmazlığın hukuki tarafını siz yönetin, teknik soruların sistematik biçimde incelenmesini uzmanlarına bırakın."
        crumbs={crumbs}
        aside={
          <div className="border border-white/12 bg-white/[0.035] p-7">
            <p className="eyebrow mb-5 text-gold-400">Çalışma İlkeleri</p>
            <ul className="space-y-4">
              {[
                "Teknik soru baştan tanımlanır",
                "Kapsam ve sınırlar yazılıdır",
                "Bulgular gerekçelendirilir",
                "Sonuç taahhüdü verilmez",
              ].map((principle) => (
                <li key={principle} className="flex items-start gap-3 text-[0.9375rem] text-navy-200">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-gold-500" />
                  {principle}
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-white/10 pt-6">
              <ButtonLink href={cta.primaryLong.href} variant="gold" withArrow className="w-full">
                Dosya Ön İnceleme Talebi
              </ButtonLink>
            </div>
          </div>
        }
      />

      <Section>
        <div className="container-page">
          <SectionHeader
            eyebrow="Dosya Kategorileri"
            title="Gönderebileceğiniz dosya kategorileri"
            description="Her kategori kendi teknik sorularıyla ele alınır; dosya birden fazla alanı ilgilendiriyorsa inceleme multidisipliner olarak yapılandırılır."
          />
          <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((area) => {
              const Icon = areaIcons[area.icon];
              return (
                <li key={area.slug} className="bg-white">
                  <Link
                    href={`/uzmanlik-alanlari/${area.slug}`}
                    className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-surface"
                  >
                    <Icon className="size-9 text-navy-300 transition-colors group-hover:text-gold-600" />
                    <h3 className="mt-6 flex-1 font-display text-[1rem] leading-snug font-semibold text-navy-900">
                      {area.navTitle}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em] text-gold-700 uppercase">
                      Detay
                      <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeader
              eyebrow="Çalışma Yöntemi"
              title="Dosyanız nasıl ele alınır?"
              description="Teknik inceleme, dosyanın hukuki stratejisinin yerine geçmez; o stratejinin teknik dayanağını kurar."
            />
            <ol className="space-y-px bg-line">
              {workflow.map((step, index) => (
                <li key={step.title} className="bg-white p-7 sm:p-8">
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-gold-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.0625rem] font-semibold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page">
          <SectionHeader
            eyebrow="Kullanım Senaryoları"
            title="Hangi durumlarda başvuruluyor?"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <li key={useCase.title} className="border border-line bg-white p-8 shadow-card">
                <h3 className="font-display text-[1.0625rem] font-semibold text-navy-900">
                  {useCase.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {useCase.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-line bg-surface p-8">
              <p className="eyebrow mb-6 text-gold-700">Dosya Gönderirken</p>
              <BulletList
                items={[
                  "Uyuşmazlığın konusunu kısaca özetleyin",
                  "Cevabını aradığınız teknik soruları belirtin",
                  "Mevcut teknik raporları ekleyin",
                  "Fotoğraf, tutanak ve sözleşmeleri iletin",
                  "Varsa süre kısıtını başvuruda bildirin",
                ]}
              />
            </div>
            <NoteBox title="Önemli">
              Teminat Rapor teknik inceleme yapar; usule ve hukuki stratejiye ilişkin
              yönlendirmede bulunmaz. Çalışmanın dosyada hangi usulle kullanılacağı,
              tamamen vekilin hukuki değerlendirmesine bağlıdır.
            </NoteBox>
          </div>
        </div>
      </Section>

      <ProcessSection detailed />

      <Section tone="surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeader eyebrow="Sık Sorulan Sorular" title="Avukatlardan gelen sorular" as="h2" />
            <FaqList items={lawyerFaq} />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Dosyanızdaki teknik soruyu birlikte tanımlayalım"
        description="Uyuşmazlığın konusunu ve elinizdeki belgeleri iletin; incelenebilirliği ve gereken uzmanlık alanlarını ön inceleme kapsamında değerlendirelim."
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
