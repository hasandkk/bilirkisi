import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { PreReviewForm } from "@/components/pre-review-form";
import { Section, SectionHeader } from "@/components/ui";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { contact, legalDisclaimer, site } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "İletişim" }];

export const metadata: Metadata = pageMetadata({
  title: "İletişim",
  description:
    "Teminat Rapor ile iletişime geçin: dosya ön inceleme talebi, kurumsal görüşme ve teknik inceleme başvuruları için iletişim bilgileri.",
  path: "/iletisim",
});

const channels = [
  {
    icon: PhoneIcon,
    label: "Telefon",
    value: contact.phoneDisplay,
    href: `tel:${contact.phoneHref}`,
    note: contact.workingHours,
  },
  {
    icon: MailIcon,
    label: "E-posta",
    value: contact.email,
    href: `mailto:${contact.email}`,
    note: "Dosya ve belge iletimi",
  },
  {
    icon: MailIcon,
    label: "Kurumsal",
    value: contact.emailCorporate,
    href: `mailto:${contact.emailCorporate}`,
    note: "Kurumsal çalışma talepleri",
  },
  {
    icon: PinIcon,
    label: "Adres",
    value: contact.addressLines.join(", "),
    note: `${site.coverage} hizmet`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Dosyanız hakkında görüşelim"
        description="Teknik inceleme talepleri, kurumsal çalışma görüşmeleri ve genel sorularınız için bize ulaşabilirsiniz."
        crumbs={crumbs}
      />

      <Section>
        <div className="container-page">
          <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const inner = (
                <>
                  <Icon className="size-8 text-navy-300 transition-colors group-hover:text-gold-600" />
                  <p className="eyebrow mt-6 text-ink-muted">{channel.label}</p>
                  <p className="mt-3 font-display text-[1rem] leading-snug font-medium break-words text-navy-900">
                    {channel.value}
                  </p>
                  <p className="mt-2 text-[0.8125rem] text-ink-muted">{channel.note}</p>
                </>
              );
              return (
                <li key={channel.label} className="bg-white">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-surface"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex h-full flex-col p-8">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="border border-line bg-surface p-8">
              <ClockIcon className="size-8 text-gold-600" />
              <h2 className="mt-6 font-display text-[1.0625rem] font-semibold text-navy-900">
                Çalışma Saatleri
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                {contact.workingHours}. Yoğun dosyalarda başvurunuz mesai saatleri
                dışında da değerlendirilebilir.
              </p>
            </div>
            <div className="border border-line bg-surface p-8">
              <PinIcon className="size-8 text-gold-600" />
              <h2 className="mt-6 font-display text-[1.0625rem] font-semibold text-navy-900">
                Hizmet Bölgesi
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                Dosya incelemeleri {site.coverage.toLowerCase()}nden kabul edilir. Belge
                ve veri üzerinden yürütülen incelemeler uzaktan yapılabilir.
              </p>
            </div>
            <div className="border border-line bg-surface p-8">
              <MailIcon className="size-8 text-gold-600" />
              <h2 className="mt-6 font-display text-[1.0625rem] font-semibold text-navy-900">
                Kurumsal Görüşme
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                Düzenli dosya akışı olan kurumlar için çalışma modeli görüşmesi
                planlanabilir.{" "}
                <Link
                  href="/kurumsal-cozumler"
                  className="text-navy-600 underline underline-offset-4 transition-colors hover:text-gold-700"
                >
                  Kurumsal çözümler
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" size="lg">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="Başvuru Formu"
              title="Dosya ön inceleme talebi oluşturun"
              description="Formu doldurarak dosyanızın teknik açıdan değerlendirilmesini talep edebilirsiniz."
            />
            <div className="mt-12">
              <PreReviewForm />
            </div>
            <p className="mt-10 border-l-2 border-gold-500 bg-white p-6 text-[0.875rem] leading-relaxed text-ink-soft">
              {legalDisclaimer}
            </p>
          </div>
        </div>
      </Section>

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "İletişim",
            url: `${site.url}/iletisim`,
            mainEntity: { "@id": `${site.url}#organization` },
          },
        ]}
      />
    </>
  );
}
