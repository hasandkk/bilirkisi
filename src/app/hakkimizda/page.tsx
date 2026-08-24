import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, breadcrumbJsonLd } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ReportApproachSection } from "@/components/sections";
import { BulletList, MetaRow, NoteBox, Section, SectionHeader } from "@/components/ui";
import { areaIcons, ArrowRightIcon } from "@/components/icons";
import { expertiseAreas } from "@/content/expertise";
import { legalDisclaimer, scopeStatement, site } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "Hakkımızda" }];

export const metadata: Metadata = pageMetadata({
  title: "Hakkımızda",
  description:
    "Teminat Rapor; farklı teknik uzmanlık alanlarını tek çatı altında toplayan, teknik uyuşmazlıklara yönelik inceleme, uzman görüşü ve raporlama platformudur.",
  path: "/hakkimizda",
});

const principles = [
  {
    title: "Teknik soru önce gelir",
    description:
      "Her dosya, cevaplanması gereken teknik sorularla başlar. Soru doğru kurulmadan yapılan inceleme, doğru cevaba ulaşamaz.",
  },
  {
    title: "Uzmanlık alanı içinde kalmak",
    description:
      "Değerlendirme, ilgili uzmanlık alanının sınırları içinde yapılır. Başka bir uzmanlık gerektiren konular ayrıca belirtilir ve gerekirse ilgili uzmana yönlendirilir.",
  },
  {
    title: "Gerekçe göstermek",
    description:
      "Bir tespitin değeri, dayanağının gösterilmesindedir. Her bulgunun hangi belge, ölçüm veya veriden çıktığı raporda izlenebilir biçimde yer alır.",
  },
  {
    title: "Sınırları açıkça yazmak",
    description:
      "İncelenen materyalin kapsamı, eksik veriler ve değerlendirmenin sınırları açıkça ifade edilir. Mutlak nitelikte sonuç iddiasında bulunulmaz.",
  },
  {
    title: "Gizlilik",
    description:
      "İletilen bilgi ve belgeler yalnızca dosyanın incelenmesi amacıyla, ilgili uzmanlar tarafından kullanılır.",
  },
  {
    title: "Ölçeklenebilir yapı",
    description:
      "Teminat Rapor, tek bir uzmanın kişisel çalışma alanı değil; farklı teknik disiplinleri ortak bir inceleme ve raporlama standardında buluşturan bir yapıdır.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Teknik uyuşmazlıklar için uzman inceleme ve raporlama merkezi"
        description={site.brandMessage}
        crumbs={crumbs}
        aside={
          <div className="border border-white/12 bg-white/[0.035] p-7">
            <p className="eyebrow mb-5 text-gold-400">Kısaca</p>
            <ul className="space-y-5">
              {[
                { label: "Kapsam", value: "7 ana teknik uzmanlık alanı" },
                { label: "Çalışma Biçimi", value: "Dosya bazlı teknik inceleme" },
                { label: "Hizmet Bölgesi", value: site.coverage },
                { label: "Çıktı", value: "Gerekçeli teknik değerlendirme" },
              ].map((item) => (
                <li key={item.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <p className="eyebrow mb-2 text-gold-400">{item.label}</p>
                  <p className="text-[0.9375rem] text-white">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="prose-tr">
              <p className="eyebrow mb-5 text-gold-700">Konumlandırma</p>
              <p>
                Teknik uyuşmazlıklar, tek bir mesleğin sınırları içinde çözülmez. Bir
                fabrika yangını dosyasında makine, elektrik, yapı ve maliyet başlıkları
                aynı anda gündeme gelir; karmaşık bir trafik kazasında otomotiv, mekanik
                ve rekonstrüksiyon bilgisi birlikte gerekir.
              </p>
              <p>
                Teminat Rapor, bu ihtiyaca tek bir uzmanın bakış açısıyla değil; farklı
                teknik uzmanlık alanlarını ortak bir inceleme ve raporlama standardında
                buluşturan bir yapı olarak yanıt verir.
              </p>
              <p>
                Amaç, dosyanın teknik sorularını doğru tanımlamak, incelemeyi uygun
                uzmanlık kapsamında yapılandırmak ve bulguları gerekçelendirilmiş bir
                teknik değerlendirmeye dönüştürmektir.
              </p>
            </div>

            <div className="space-y-6">
              <NoteBox title="Çalışma Esası">{scopeStatement}</NoteBox>
              <NoteBox title="Hukuki Konumlandırma">{legalDisclaimer}</NoteBox>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy-deep" className="overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-texture opacity-50" />
        <div className="relative container-page">
          <SectionHeader
            dark
            eyebrow="Üç Temel Mesaj"
            title="Teminat Rapor ne yapar?"
            as="h2"
          />
          <div className="mt-14">
            <MetaRow
              dark
              items={[
                {
                  label: "Hangi dosyalara bakıyoruz?",
                  value:
                    "Trafik, otomotiv, yangın, fabrika, inşaat, taşınmaz, iş kazası, bilişim ve belge",
                },
                {
                  label: "Ne yapıyoruz?",
                  value: "Teknik inceleme, analiz, uzman görüşü ve raporlama",
                },
                {
                  label: "Nasıl hizmet alınır?",
                  value: "Dosya Ön İnceleme Talebi oluşturarak",
                },
                {
                  label: "Nerede çalışıyoruz?",
                  value: `${site.coverage}, dosya bazlı ve uzaktan inceleme dâhil`,
                },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page">
          <SectionHeader
            eyebrow="İlkelerimiz"
            title="İncelemenin dayandığı altı ilke"
          />
          <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <li key={principle.title} className="bg-white p-8">
                <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[1.0625rem] font-semibold text-navy-900">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {principle.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <div className="container-page">
          <SectionHeader
            eyebrow="Uzmanlık Alanları"
            title="Tek çatı altında yedi teknik alan"
            description="Dosyanın gerektirdiği alanlar tespit edilir ve inceleme bu alanların birlikte çalışacağı bir yapıda kurgulanır."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((area) => {
              const Icon = areaIcons[area.icon];
              return (
                <li key={area.slug}>
                  <Link
                    href={`/uzmanlik-alanlari/${area.slug}`}
                    className="group flex h-full flex-col border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-card"
                  >
                    <Icon className="size-8 text-navy-300 transition-colors group-hover:text-gold-600" />
                    <h3 className="mt-5 flex-1 font-display text-[0.9375rem] leading-snug font-semibold text-navy-900">
                      {area.navTitle}
                    </h3>
                    <ArrowRightIcon className="mt-4 size-3.5 text-navy-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gold-600" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 border border-line bg-white p-8 shadow-card sm:p-10">
            <p className="eyebrow mb-6 text-gold-700">Kapsam Dışında Kalanlar</p>
            <BulletList
              columns={2}
              items={[
                "Hukuki tavsiye, dava stratejisi ve usule ilişkin yönlendirme",
                "Tıbbi teşhis, maluliyet ve sağlık durumu değerlendirmesi",
                "Sonuç, kazanç veya kesinlik taahhüdü",
                "Yetki gerektiren resmî raporların yetkisiz düzenlenmesi",
                "Hukuka aykırı biçimde temin edilmiş veriler üzerinde inceleme",
                "Her dosyada kesin sebep tespiti garantisi",
              ]}
            />
          </div>
        </div>
      </Section>

      <ReportApproachSection />
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
