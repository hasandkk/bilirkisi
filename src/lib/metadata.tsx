import type { Metadata } from "next";
import { contact, legalDisclaimer, site } from "@/content/site";
import { expertiseAreas } from "@/content/expertise";

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title: `${title} | ${site.nameTitleCase}`,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.nameTitleCase}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}#organization`,
    name: site.nameTitleCase,
    alternateName: site.name,
    url: site.url,
    description: site.brandMessage,
    slogan: site.slogan,
    email: contact.email,
    telephone: contact.phoneDisplay,
    areaServed: { "@type": "Country", name: "Türkiye" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "İstanbul",
    },
    disambiguatingDescription: legalDisclaimer,
    knowsAbout: expertiseAreas.map((area) => area.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Teknik İnceleme ve Uzman Görüşü Hizmetleri",
      itemListElement: expertiseAreas.map((area) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: area.title,
          description: area.description,
          url: `${site.url}/uzmanlik-alanlari/${area.slug}`,
        },
      })),
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    areaServed: { "@type": "Country", name: "Türkiye" },
    provider: { "@id": `${site.url}#organization` },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
