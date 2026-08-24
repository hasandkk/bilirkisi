import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { BulletList, ButtonLink, Section, SectionHeader } from "@/components/ui";
import { areaIcons, ArrowRightIcon } from "@/components/icons";
import { corporateBySlug, corporateSolutions } from "@/content/corporate";
import { getExpertise } from "@/content/expertise";
import { processSteps } from "@/content/process";
import { cta } from "@/content/site";
import { JsonLd, pageMetadata, serviceJsonLd } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return corporateSolutions.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = corporateBySlug[slug];
  if (!item) return {};
  return pageMetadata({
    title: `${item.title} İçin Teknik İnceleme`,
    description: item.seoDescription,
    path: `/kurumsal-cozumler/${item.slug}`,
    keywords: item.needs.slice(0, 8),
  });
}

export default async function CorporateDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = corporateBySlug[slug];
  if (!item) notFound();

  const Icon = areaIcons[item.icon];
  const crumbs = [
    { label: "Kurumsal Çözümler", href: "/kurumsal-cozumler" },
    { label: item.title },
  ];
  const areas = item.relatedExpertise.map(getExpertise).filter(Boolean);
  const others = corporateSolutions.filter((entry) => entry.slug !== item.slug);

  return (
    <>
      <PageHero
        eyebrow="Kurumsal Çözümler"
        title={`${item.title} için teknik inceleme`}
        description={item.summary}
        crumbs={crumbs}
        aside={
          <div className="border border-white/12 bg-white/[0.035] p-7">
            <Icon className="size-12 text-gold-500" />
            <p className="eyebrow mt-6 mb-3 text-gold-400">Çalışma Talebi</p>
            <p className="text-[0.9375rem] leading-relaxed text-navy-200">
              Dosya tipleriniz ve raporlama beklentileriniz doğrultusunda uygun
              çalışma modelini belirleyelim.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <ButtonLink href={cta.corporate.href} variant="gold" withArrow className="w-full">
                Kurumsal Çalışma Talebi
              </ButtonLink>
              <ButtonLink href={cta.primaryLong.href} variant="light" className="w-full">
                Dosya Ön İnceleme
              </ButtonLink>
            </div>
          </div>
        }
      />

      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="prose-tr">
              <p className="eyebrow mb-5 text-gold-700">Yaklaşım</p>
              {item.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="border border-line bg-surface p-7 sm:p-8">
              <p className="eyebrow mb-6 text-gold-700">Çalışma Çıktıları</p>
              <BulletList items={item.deliverables} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="container-page">
          <SectionHeader
            eyebrow="İhtiyaç Başlıkları"
            title="Bu alanda sık karşılaşılan teknik inceleme konuları"
          />
          <div className="mt-12 border border-line bg-white p-8 shadow-card sm:p-10">
            <BulletList items={item.needs} columns={2} />
          </div>
        </div>
      </Section>

      {areas.length > 0 ? (
        <Section>
          <div className="container-page">
            <SectionHeader
              eyebrow="İlgili Uzmanlık Alanları"
              title="Dosyalarınızın yönlendirildiği alanlar"
            />
            <ul className="mt-12 grid gap-6 lg:grid-cols-3">
              {areas.map((area) => {
                if (!area) return null;
                const AreaIcon = areaIcons[area.icon];
                return (
                  <li key={area.slug}>
                    <Link
                      href={`/uzmanlik-alanlari/${area.slug}`}
                      className="group flex h-full flex-col border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-lift"
                    >
                      <AreaIcon className="size-9 text-navy-300 transition-colors group-hover:text-gold-600" />
                      <h3 className="mt-6 font-display text-[1.0625rem] font-semibold text-navy-900">
                        {area.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {area.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-gold-700 uppercase">
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
      ) : null}

      <Section tone="navy-deep" className="overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-texture opacity-50" />
        <div className="relative container-page">
          <SectionHeader dark eyebrow="Süreç" title="Çalışmanın işleyişi" as="h2" />
          <ol className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.step} className="bg-navy-950 p-6">
                <span className="font-mono text-[1.75rem] leading-none font-light text-navy-600">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-[0.9375rem] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-navy-300">
                  {step.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="surface">
        <div className="container-page">
          <SectionHeader eyebrow="Diğer Sektörler" title="Kurumsal çözümlerin tamamı" as="h2" />
          <ul className="mt-12 flex flex-wrap gap-3">
            {others.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={`/kurumsal-cozumler/${entry.slug}`}
                  className="group inline-flex items-center gap-3 border border-line bg-white px-5 py-3.5 text-[0.9375rem] text-navy-900 transition-colors hover:border-navy-900/30 hover:bg-surface-2"
                >
                  {entry.title}
                  <ArrowRightIcon className="size-3.5 text-navy-300 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: `${item.title} için teknik inceleme`,
            description: item.seoDescription,
            path: `/kurumsal-cozumler/${item.slug}`,
          }),
        ]}
      />
    </>
  );
}
