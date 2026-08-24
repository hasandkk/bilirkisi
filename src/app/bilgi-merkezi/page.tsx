import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Section, SectionHeader } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { articles } from "@/content/knowledge";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "Bilgi Merkezi" }];

export const metadata: Metadata = pageMetadata({
  title: "Bilgi Merkezi",
  description:
    "Teknik inceleme, uzman görüşü ve teknik raporlama süreçlerine ilişkin açıklayıcı içerikler: dosya hazırlığı, inceleme kapsamı ve değerlendirmenin sınırları.",
  path: "/bilgi-merkezi",
});

export default function KnowledgeIndexPage() {
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  return (
    <>
      <PageHero
        eyebrow="Bilgi Merkezi"
        title="Teknik inceleme süreçlerine dair notlar"
        description="Dosya hazırlığı, inceleme kapsamı ve teknik değerlendirmenin sınırlarına ilişkin açıklayıcı içerikler."
        crumbs={crumbs}
      >
        <ul className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <li
              key={category}
              className="border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[0.6875rem] tracking-[0.1em] text-navy-200 uppercase"
            >
              {category}
            </li>
          ))}
        </ul>
      </PageHero>

      <Section size="lg">
        <div className="container-page">
          <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug} className="bg-white">
                <Link
                  href={`/bilgi-merkezi/${article.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-surface"
                >
                  <span className="eyebrow text-gold-700">{article.category}</span>
                  <h2 className="mt-5 font-display text-[1.125rem] leading-snug font-semibold text-navy-900">
                    {article.title}
                  </h2>
                  <p className="mt-3.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {article.summary}
                  </p>
                  <span className="mt-7 flex items-center justify-between border-t border-line pt-5 font-mono text-[0.6875rem] tracking-[0.1em] text-ink-muted uppercase">
                    {article.readingMinutes} dk okuma
                    <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
