import Link from "next/link";
import { contact, legalDisclaimer, site } from "@/content/site";
import { expertiseAreas } from "@/content/expertise";
import { corporateSolutions } from "@/content/corporate";
import { Logo } from "./logo";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "./icons";

const companyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Nasıl Çalışıyoruz?", href: "/nasil-calisiyoruz" },
  { label: "Avukatlar İçin", href: "/avukatlar-icin" },
  { label: "Bilgi Merkezi", href: "/bilgi-merkezi" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Dosya Ön İnceleme", href: "/dosya-on-inceleme" },
];

const seoLinks = [
  { label: "Trafik Kazası Teknik İnceleme", href: "/trafik-kazasi-teknik-inceleme" },
  { label: "Fabrika Yangını Teknik İnceleme", href: "/fabrika-yangini-teknik-inceleme" },
  { label: "Makine Hasar İncelemesi", href: "/makine-hasar-inceleme" },
  { label: "İnşaat Teknik İnceleme", href: "/insaat-teknik-inceleme" },
  { label: "Taşınmaz Değerleme", href: "/tasinmaz-degerleme" },
  { label: "İş Kazası Teknik İnceleme", href: "/is-kazasi-teknik-inceleme" },
  { label: "Bilişim Teknik İnceleme", href: "/bilisim-teknik-inceleme" },
  { label: "İmza İnceleme", href: "/imza-inceleme" },
  { label: "HMK 293 Uzman Görüşü", href: "/hmk-293-uzman-gorusu" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow mb-5 text-gold-500">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.875rem] leading-snug text-navy-200 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
      />

      <div className="relative">
        <div className="container-page py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr_1fr]">
            <div>
              <Logo tone="light" withTagline />
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-navy-200">
                {site.shortDescription}
              </p>

              <dl className="mt-8 space-y-3.5 text-[0.875rem]">
                <div className="flex items-start gap-3">
                  <dt className="mt-0.5">
                    <PhoneIcon className="size-4 text-gold-500" />
                    <span className="sr-only">Telefon</span>
                  </dt>
                  <dd>
                    <a href={`tel:${contact.phoneHref}`} className="transition-colors hover:text-white">
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="mt-0.5">
                    <MailIcon className="size-4 text-gold-500" />
                    <span className="sr-only">E-posta</span>
                  </dt>
                  <dd>
                    <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="mt-0.5">
                    <PinIcon className="size-4 text-gold-500" />
                    <span className="sr-only">Adres</span>
                  </dt>
                  <dd>{contact.addressLines.join(" · ")}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="mt-0.5">
                    <ClockIcon className="size-4 text-gold-500" />
                    <span className="sr-only">Çalışma saatleri</span>
                  </dt>
                  <dd>{contact.workingHours}</dd>
                </div>
              </dl>
            </div>

            <FooterColumn
              title="Uzmanlık Alanları"
              links={expertiseAreas.map((area) => ({
                label: area.navTitle,
                href: `/uzmanlik-alanlari/${area.slug}`,
              }))}
            />

            <FooterColumn
              title="Kurumsal Çözümler"
              links={corporateSolutions.map((item) => ({
                label: item.title,
                href: `/kurumsal-cozumler/${item.slug}`,
              }))}
            />

            <div className="space-y-10">
              <FooterColumn title="Kurumsal" links={companyLinks} />
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-10">
            <h3 className="eyebrow mb-5 text-gold-500">İnceleme Konuları</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {seoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.8125rem] text-navy-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hukuki konumlandirma */}
          <div className="mt-12 border-l-2 border-gold-500 bg-white/[0.035] p-6">
            <p className="eyebrow mb-3 text-gold-400">Önemli Bilgilendirme</p>
            <p className="max-w-4xl text-[0.875rem] leading-relaxed text-navy-200">
              {legalDisclaimer}
            </p>
            <p className="mt-3 max-w-4xl text-[0.875rem] leading-relaxed text-navy-300">
              Sitede yer alan içerikler genel bilgilendirme amaçlıdır; belirli bir
              dosyaya ilişkin teknik veya hukuki tavsiye niteliği taşımaz. Her dosyanın
              kapsamı, incelenebilirliği ve sınırları başvuru sonrası ayrıca değerlendirilir.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-[0.8125rem] text-navy-300 sm:flex-row sm:items-center">
            <p>
              © {year} {site.nameTitleCase}. Tüm hakları saklıdır.
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link href="/kvkk-aydinlatma-metni" className="transition-colors hover:text-white">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="transition-colors hover:text-white">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/site-haritasi" className="transition-colors hover:text-white">
                  Site Haritası
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
