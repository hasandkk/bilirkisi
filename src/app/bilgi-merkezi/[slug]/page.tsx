import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { NoteBox, Section, SectionHeader } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { articleBySlug, articles } from "@/content/knowledge";
import { legalDisclaimer, site } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug[slug];
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.summary,
    path: `/bilgi-merkezi/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = articleBySlug[slug];
  if (!article) notFound();

  const crumbs = [
    { label: "Bilgi Merkezi", href: "/bilgi-merkezi" },
    { label: article.title },
  ];
  const others = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.summary}
        crumbs={crumbs}
      >
        <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-navy-300 uppercase">
          {article.readingMinutes} dk okuma · Güncelleme:{" "}
          {new Date(article.updated).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
          })}
        </p>
      </PageHero>

      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,44rem)_1fr] lg:gap-20">
            <article className="prose-tr">
              {article.body.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="mt-12 mb-4 font-display text-xl font-semibold text-navy-900 first:mt-0"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={index} className="my-6 space-y-3">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed">
                          <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-gold-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "note") {
                  return (
                    <div key={index} className="my-8">
                      <NoteBox title="Not">{block.text}</NoteBox>
                    </div>
                  );
                }
                return <p key={index}>{block.text}</p>;
              })}

              <p className="mt-12 border-t border-line pt-8 text-[0.8125rem] leading-relaxed text-ink-muted">
                Bu içerik genel bilgilendirme amaçlıdır; belirli bir dosyaya ilişkin teknik
                veya hukuki tavsiye niteliği taşımaz. {legalDisclaimer}
              </p>
            </article>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-line bg-surface p-7">
                <p className="eyebrow mb-4 text-gold-700">Dosyanız mı var?</p>
                <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                  Uyuşmazlığın konusunu ve elinizdeki belgeleri iletin; teknik soruların
                  belirlenmesi için ön inceleme yapalım.
                </p>
                <Link
                  href="/dosya-on-inceleme"
                  className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2.5 bg-navy-900 px-5 font-mono text-[0.6875rem] tracking-[0.12em] text-white uppercase transition-colors hover:bg-navy-700"
                >
                  Dosya Ön İnceleme
                  <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="container-page">
          <SectionHeader eyebrow="Bilgi Merkezi" title="Diğer içerikler" as="h2" />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/bilgi-merkezi/${item.slug}`}
                  className="group flex h-full flex-col border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-lift"
                >
                  <span className="eyebrow text-gold-700">{item.category}</span>
                  <h3 className="mt-5 flex-1 font-display text-[1.0625rem] leading-snug font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em] text-navy-700 uppercase">
                    Oku
                    <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
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
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.summary,
            dateModified: article.updated,
            articleSection: article.category,
            inLanguage: "tr-TR",
            mainEntityOfPage: `${site.url}/bilgi-merkezi/${article.slug}`,
            publisher: { "@id": `${site.url}#organization` },
          },
        ]}
      />
    </>
  );
}
