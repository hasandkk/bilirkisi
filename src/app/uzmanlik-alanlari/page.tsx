import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { MultidisciplinarySection } from "@/components/sections";
import { Section, SectionHeader } from "@/components/ui";
import { areaIcons, ArrowRightIcon } from "@/components/icons";
import { expertiseAreas } from "@/content/expertise";
import { JsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

const crumbs = [{ label: "Uzmanlık Alanları" }];

export const metadata: Metadata = pageMetadata({
  title: "Uzmanlık Alanları",
  description:
    "Trafik kazaları ve otomotiv, yangın ve endüstriyel hasar, inşaat ve yapı, taşınmaz, iş kazaları, bilişim ve belge inceleme alanlarında teknik inceleme, uzman görüşü ve raporlama.",
  path: "/uzmanlik-alanlari",
});

export default function ExpertiseIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Uzmanlık Alanları"
        title="Teknik uyuşmazlıkların incelendiği yedi ana alan"
        description="Her alan kendi teknik sorularıyla ele alınır. Dosya birden fazla uzmanlık gerektiriyorsa inceleme, bu alanların birlikte çalışacağı bir yapıda kurgulanır."
        crumbs={crumbs}
      />

      <Section size="lg">
        <div className="container-page">
          <ul className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
            {expertiseAreas.map((area) => {
              const Icon = areaIcons[area.icon];
              return (
                <li key={area.slug} className="bg-white">
                  <Link
                    href={`/uzmanlik-alanlari/${area.slug}`}
                    className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-surface sm:p-10"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-gold-600">
                          {area.index}
                        </span>
                        <h2 className="mt-3 font-display text-xl leading-tight font-semibold text-navy-900 sm:text-[1.375rem]">
                          {area.title}
                        </h2>
                      </div>
                      <Icon className="size-11 shrink-0 text-navy-300 transition-colors duration-300 group-hover:text-gold-600" />
                    </div>

                    <p className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {area.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {area.services.slice(0, 5).map((service) => (
                        <li
                          key={service}
                          className="border border-line bg-surface px-3 py-1.5 text-[0.75rem] text-ink-soft"
                        >
                          {service}
                        </li>
                      ))}
                      {area.services.length > 5 ? (
                        <li className="px-2 py-1.5 font-mono text-[0.6875rem] text-ink-muted">
                          +{area.services.length - 5}
                        </li>
                      ) : null}
                    </ul>

                    <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-navy-700 uppercase transition-colors group-hover:text-gold-700">
                      {area.ctaLabel}
                      <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <MultidisciplinarySection />
      <CtaBand />
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Uzmanlık Alanları",
            itemListElement: expertiseAreas.map((area, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: area.title,
              url: `${site.url}/uzmanlik-alanlari/${area.slug}`,
            })),
          },
        ]}
      />
    </>
  );
}
