import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Section } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { routeGroups } from "@/lib/routes";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "Site Haritası" }];

export const metadata: Metadata = pageMetadata({
  title: "Site Haritası",
  description:
    "Teminat Rapor web sitesindeki tüm sayfalar: uzmanlık alanları, kurumsal çözümler, inceleme konuları ve bilgi merkezi içerikleri.",
  path: "/site-haritasi",
});

export default function SiteMapPage() {
  return (
    <>
      <PageHero
        eyebrow="Site Haritası"
        title="Tüm sayfalar"
        description="Sitedeki içeriklerin tam listesi."
        crumbs={crumbs}
      />

      <Section size="lg">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-2">
            {routeGroups.map((group) => (
              <div key={group.title}>
                <h2 className="eyebrow mb-2 text-gold-700">{group.title}</h2>
                {group.description ? (
                  <p className="mb-5 text-[0.875rem] text-ink-muted">{group.description}</p>
                ) : null}
                <ul className="divide-y divide-line border-y border-line">
                  {group.routes.map((route) => (
                    <li key={route.href}>
                      <Link
                        href={route.href}
                        className="group flex items-center justify-between gap-4 py-3.5 text-[0.9375rem] text-ink-soft transition-colors hover:text-navy-900"
                      >
                        {route.label}
                        <ArrowRightIcon className="size-3.5 shrink-0 text-navy-200 transition-all group-hover:translate-x-1 group-hover:text-gold-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
