import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ProcessSection } from "@/components/sections";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { areaIcons, ArrowRightIcon } from "@/components/icons";
import { corporateSolutions } from "@/content/corporate";
import { cta } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "Kurumsal Çözümler" }];

export const metadata: Metadata = pageMetadata({
  title: "Kurumsal Çözümler",
  description:
    "Sigorta şirketleri, sanayi kuruluşları, filo işletmeleri, inşaat ve gayrimenkul şirketleri ile hukuk departmanları için dosya bazlı teknik inceleme ve uzman görüşü.",
  path: "/kurumsal-cozumler",
});

const workingModels = [
  {
    title: "Dosya bazlı çalışma",
    description:
      "Tek bir uyuşmazlık dosyası için kapsamı baştan tanımlanmış teknik inceleme ve raporlama.",
  },
  {
    title: "Sürekli çalışma modeli",
    description:
      "Tekrar eden dosya tipleri için standart inceleme formatı, ortak raporlama şablonu ve öngörülebilir süreç.",
  },
  {
    title: "Multidisipliner dosya yapısı",
    description:
      "Birden fazla uzmanlık alanı gerektiren büyük dosyalarda tek koordinasyon noktası üzerinden yürütme.",
  },
];

export default function CorporateIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal Çözümler"
        title="Kurumsal yapılar için teknik inceleme ve uzman görüşü"
        description="Teknik uzmanlık gerektiren dosyalarda; kapsamı tanımlanmış, gerekçelendirilmiş ve tekrarlanabilir bir inceleme yapısı."
        crumbs={crumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={cta.corporate.href} variant="gold" size="lg" withArrow>
            Kurumsal Çalışma Talebi
          </ButtonLink>
          <ButtonLink href={cta.primaryLong.href} variant="light" size="lg">
            Dosya Ön İnceleme
          </ButtonLink>
        </div>
      </PageHero>

      <Section size="lg">
        <div className="container-page">
          <SectionHeader
            eyebrow="Sektörler"
            title="Sektörünüze göre teknik inceleme ihtiyaçları"
            description="Her sektörün dosya yapısı ve teknik soruları farklıdır. Çalışma modeli bu farka göre kurgulanır."
          />
          <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {corporateSolutions.map((item) => {
              const Icon = areaIcons[item.icon];
              return (
                <li key={item.slug} className="bg-white">
                  <Link
                    href={`/kurumsal-cozumler/${item.slug}`}
                    className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-navy-950"
                  >
                    <Icon className="size-10 text-navy-300 transition-colors duration-300 group-hover:text-gold-500" />
                    <h2 className="mt-7 font-display text-[1.125rem] leading-snug font-semibold text-navy-900 transition-colors group-hover:text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft transition-colors group-hover:text-navy-200">
                      {item.summary}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {item.needs.slice(0, 3).map((need) => (
                        <li
                          key={need}
                          className="flex items-start gap-2.5 text-[0.8125rem] leading-snug text-ink-muted transition-colors group-hover:text-navy-300"
                        >
                          <span aria-hidden className="mt-[0.5em] size-1 shrink-0 rotate-45 bg-gold-500" />
                          {need}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-gold-700 uppercase transition-colors group-hover:text-gold-400">
                      İncele
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
          <SectionHeader
            eyebrow="Çalışma Modelleri"
            title="Dosya hacminize uygun bir yapı"
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {workingModels.map((model, index) => (
              <li key={model.title} className="border border-line bg-white p-8">
                <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[1.0625rem] font-semibold text-navy-900">
                  {model.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {model.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ProcessSection />
      <CtaBand
        title="Kurumsal çalışma yapısını birlikte kuralım"
        description="Dosya tipleriniz, hacminiz ve raporlama beklentileriniz doğrultusunda uygun çalışma modelini belirleyelim."
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
