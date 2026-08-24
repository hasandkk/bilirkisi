/**
 * Bagimsiz SEO sayfalari — /<slug>
 * Icerik src/content/seo-pages.ts icinde tanimlidir; yeni bir SEO sayfasi
 * eklemek icin oraya bir kayit eklemek yeterlidir.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { BulletList, ButtonLink, NoteBox, Section, SectionHeader } from "@/components/ui";
import { areaIcons, ArrowRightIcon } from "@/components/icons";
import { getExpertise } from "@/content/expertise";
import { seoPageBySlug, seoPages, seoSlugs } from "@/content/seo-pages";
import { processSteps } from "@/content/process";
import { cta, legalDisclaimer } from "@/content/site";
import { JsonLd, pageMetadata, serviceJsonLd } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPageBySlug[slug];
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: page.blocks.flatMap((block) => block.items).slice(0, 12),
  });
}

export default async function SeoLandingPage({ params }: Params) {
  const { slug } = await params;
  const page = seoPageBySlug[slug];
  if (!page) notFound();

  const area = getExpertise(page.area);
  const Icon = area ? areaIcons[area.icon] : null;
  const crumbs = [
    { label: "Uzmanlık Alanları", href: "/uzmanlik-alanlari" },
    ...(area ? [{ label: area.navTitle, href: `/uzmanlik-alanlari/${area.slug}` }] : []),
    { label: page.h1 },
  ];
  const related = page.related
    .map((path) => seoPageBySlug[path.replace("/", "")])
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.metaDescription}
        crumbs={crumbs}
        aside={
          <div className="border border-white/12 bg-white/[0.035] p-7">
            {Icon ? <Icon className="size-11 text-gold-500" /> : null}
            <p className="eyebrow mt-6 mb-3 text-gold-400">Hızlı Başvuru</p>
            <p className="text-[0.9375rem] leading-relaxed text-navy-200">
              Dosyanızın konusunu ve elinizdeki belgeleri iletin; teknik soruların
              belirlenmesi için ön inceleme yapalım.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <ButtonLink href={cta.primaryLong.href} variant="gold" withArrow className="w-full">
                Dosya Ön İnceleme Talebi
              </ButtonLink>
              {area ? (
                <ButtonLink
                  href={`/uzmanlik-alanlari/${area.slug}`}
                  variant="light"
                  className="w-full"
                >
                  {area.navTitle}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        }
      />

      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="prose-tr">
              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            {page.note ? (
              <NoteBox>{page.note}</NoteBox>
            ) : (
              <NoteBox title="Çalışma Esası">
                İnceleme, dosyaya sunulan belge, veri ve bulgularla sınırlı olarak yürütülür.
                Kapsam, varsayımlar ve değerlendirmenin sınırları raporda açıkça belirtilir.
              </NoteBox>
            )}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            {page.blocks.map((block) => (
              <div key={block.title} className="border border-line bg-white p-8 shadow-card sm:p-10">
                <h2 className="font-display text-xl font-semibold text-navy-900">
                  {block.title}
                </h2>
                <div className="mt-7">
                  <BulletList items={block.items} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader eyebrow="Teknik Sorular" title="Bu incelemede ele alınan sorular" as="h2" />
              <ol className="mt-10 divide-y divide-line border-y border-line">
                {page.questions.map((question, index) => (
                  <li key={question} className="flex items-start gap-5 py-5">
                    <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-gold-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{question}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <SectionHeader eyebrow="Dosya Hazırlığı" title="İnceleme için faydalı belgeler" as="h2" />
              <div className="mt-10 border border-line bg-surface p-7 sm:p-8">
                <BulletList items={page.documents} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Surec ozeti */}
      <Section tone="navy-deep" className="overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-texture opacity-50" />
        <div className="relative container-page">
          <SectionHeader
            dark
            eyebrow="Süreç"
            title="Başvurudan raporlamaya"
            description="Her aşamanın çıktısı bellidir; kapsam ve sınırlar süreç içinde yazılı hâle getirilir."
            as="h2"
          />
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
          <p className="mt-12 max-w-4xl border-l-2 border-gold-500 pl-6 text-[0.875rem] leading-relaxed text-navy-300">
            {legalDisclaimer}
          </p>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="surface">
          <div className="container-page">
            <SectionHeader eyebrow="İlgili Konular" title="Bu konuyla ilişkili incelemeler" as="h2" />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="group flex h-full flex-col border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-lift"
                  >
                    <span className="eyebrow text-gold-700">{item.eyebrow}</span>
                    <h3 className="mt-5 font-display text-[1.0625rem] leading-snug font-semibold text-navy-900">
                      {item.h1}
                    </h3>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-navy-700 uppercase">
                      İncele
                      <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <CtaBand />
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: page.h1,
            description: page.metaDescription,
            path: `/${page.slug}`,
          }),
        ]}
      />
    </>
  );
}
