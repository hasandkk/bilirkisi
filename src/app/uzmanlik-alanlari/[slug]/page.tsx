import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ProcessSection } from "@/components/sections";
import { BulletList, ButtonLink, NoteBox, Section, SectionHeader } from "@/components/ui";
import { areaIcons, ArrowRightIcon } from "@/components/icons";
import { expertiseAreas, getExpertise } from "@/content/expertise";
import { seoPageBySlug } from "@/content/seo-pages";
import { cta, scopeStatement } from "@/content/site";
import { JsonLd, pageMetadata, serviceJsonLd } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return expertiseAreas.map((area) => ({ slug: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getExpertise(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.seoTitle,
    description: area.seoDescription,
    path: `/uzmanlik-alanlari/${area.slug}`,
    keywords: area.services.slice(0, 10),
  });
}

export default async function ExpertiseDetailPage({ params }: Params) {
  const { slug } = await params;
  const area = getExpertise(slug);
  if (!area) notFound();

  const Icon = areaIcons[area.icon];
  const crumbs = [
    { label: "Uzmanlık Alanları", href: "/uzmanlik-alanlari" },
    { label: area.navTitle },
  ];
  const others = expertiseAreas.filter((item) => item.slug !== area.slug);
  const relatedSeo = area.relatedPages
    .map((path) => seoPageBySlug[path.replace("/", "")])
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={`${area.index} — Uzmanlık Alanı`}
        title={area.title}
        description={area.description}
        crumbs={crumbs}
        aside={
          <div className="border border-white/12 bg-white/[0.035] p-7">
            <Icon className="size-12 text-gold-500" />
            <p className="mt-6 font-display text-lg leading-snug font-medium text-white">
              {area.summary}
            </p>
            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="eyebrow mb-3 text-gold-400">Kapsam</p>
              <p className="text-[0.875rem] leading-relaxed text-navy-200">
                {area.services.length} başlıkta teknik inceleme ve raporlama
              </p>
            </div>
            <div className="mt-7">
              <ButtonLink href={cta.primaryLong.href} variant="gold" size="md" withArrow className="w-full">
                {area.ctaLabel}
              </ButtonLink>
            </div>
          </div>
        }
      />

      {/* Giris */}
      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="prose-tr">
              <p className="eyebrow mb-5 text-gold-700">Bu Alanda İnceleme</p>
              {area.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <NoteBox>{area.scopeNote}</NoteBox>
          </div>
        </div>
      </Section>

      {/* Hizmet basliklari */}
      <Section tone="surface">
        <div className="container-page">
          <SectionHeader
            eyebrow="İnceleme Başlıkları"
            title="Bu alanda değerlendirilen konular"
            description="Aşağıdaki başlıklar dosya kapsamına göre tek tek veya birlikte ele alınır."
          />
          <div className="mt-12 border border-line bg-white p-8 shadow-card sm:p-10">
            <BulletList items={area.services} columns={3} />
          </div>
        </div>
      </Section>

      {/* Teknik sorular + belgeler */}
      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Teknik Sorular"
                title="Dosyada cevaplanan başlıca sorular"
                as="h2"
              />
              <ol className="mt-10 divide-y divide-line border-y border-line">
                {area.questions.map((question, index) => (
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
              <SectionHeader
                eyebrow="Dosya Hazırlığı"
                title="İncelemeyi hızlandıran belgeler"
                as="h2"
              />
              <div className="mt-10 border border-line bg-surface p-7 sm:p-8">
                <BulletList items={area.documents} />
                <p className="mt-7 border-t border-line pt-6 text-[0.875rem] leading-relaxed text-ink-muted">
                  Eksik belgeler ön inceleme sonrasında ayrıca bildirilir. Başvuru için
                  tüm belgelerin hazır olması gerekmez.
                </p>
              </div>
              <div className="mt-8">
                <ButtonLink href={cta.primaryLong.href} withArrow size="lg">
                  Dosya Ön İnceleme Talebi
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ProcessSection />

      {/* Ilgili SEO sayfalari */}
      {relatedSeo.length > 0 ? (
        <Section tone="surface">
          <div className="container-page">
            <SectionHeader
              eyebrow="İlgili İnceleme Konuları"
              title="Bu alandaki özel inceleme başlıkları"
            />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSeo.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="group flex h-full flex-col border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-lift"
                  >
                    <h3 className="font-display text-[1.0625rem] leading-snug font-semibold text-navy-900">
                      {page.h1}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-ink-soft">
                      {page.metaDescription}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-gold-700 uppercase">
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

      {/* Diger alanlar */}
      <Section>
        <div className="container-page">
          <SectionHeader eyebrow="Diğer Uzmanlık Alanları" title="Dosyanız birden fazla alanı ilgilendiriyor olabilir" description={scopeStatement} />
          <ul className="mt-12 flex flex-wrap gap-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/uzmanlik-alanlari/${item.slug}`}
                  className="group inline-flex items-center gap-3 border border-line bg-white px-5 py-3.5 text-[0.9375rem] text-navy-900 transition-colors hover:border-navy-900/30 hover:bg-surface"
                >
                  <span className="font-mono text-[0.6875rem] text-gold-600">{item.index}</span>
                  {item.navTitle}
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
            name: area.title,
            description: area.description,
            path: `/uzmanlik-alanlari/${area.slug}`,
          }),
        ]}
      />
    </>
  );
}
