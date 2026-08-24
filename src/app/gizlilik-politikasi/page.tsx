import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { breadcrumbJsonLd } from "@/components/page-hero";
import { contact, legalDisclaimer } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "Gizlilik Politikası" }];

export const metadata: Metadata = pageMetadata({
  title: "Gizlilik Politikası",
  description:
    "Teminat Rapor gizlilik politikası: dosya ve belge güvenliği, veri saklama, erişim yetkileri ve gizlilik esasları.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  return (
    <>
      <LegalPage
        eyebrow="Gizlilik"
        title="Gizlilik Politikası"
        description="İncelemeye konu dosya ve belgelerin nasıl korunduğuna, kimlerin eriştiğine ve ne kadar süreyle saklandığına ilişkin esaslar."
        crumbs={crumbs}
        updated="Ocak 2025"
        sections={[
          {
            heading: "Gizlilik Esası",
            paragraphs: [
              "Teminat Rapor'a iletilen tüm bilgi, belge ve dosya içerikleri gizli kabul edilir. Bu materyaller yalnızca başvurunun değerlendirilmesi ve talep edilen teknik inceleme hizmetinin sunulması amacıyla kullanılır.",
              "Dosya içerikleri hiçbir koşulda pazarlama, tanıtım veya referans amacıyla kullanılmaz; başvuru sahibinin yazılı onayı olmadan üçüncü kişilerle paylaşılmaz.",
            ],
          },
          {
            heading: "Erişim Yetkileri",
            paragraphs: [
              "Dosya içeriğine erişim, yalnızca ilgili dosyada görev alan uzmanlar ve süreci yürüten personel ile sınırlıdır. Erişim yetkileri dosya bazında tanımlanır ve çalışma tamamlandığında gözden geçirilir.",
            ],
            items: [
              "Görev alan uzmanlar dosya kapsamıyla sınırlı erişime sahiptir",
              "Erişim kayıtları tutulur",
              "Görev alan uzmanlar gizlilik yükümlülüğü altındadır",
            ],
          },
          {
            heading: "Belge Güvenliği",
            items: [
              "Dijital belgeler erişim kontrolü uygulanan ortamlarda saklanır",
              "Fiziki belge asılları, inceleme süresince güvenli biçimde muhafaza edilir ve inceleme sonrasında iade edilir",
              "Dosya aktarımlarında güvenli iletim yöntemleri tercih edilir",
              "Yedekleme ve saklama süreçleri erişim kısıtlarına tabidir",
            ],
          },
          {
            heading: "Dijital Materyal İncelemeleri",
            paragraphs: [
              "Bilişim ve dijital inceleme çalışmalarında veri bütünlüğünün korunması esastır. İnceleme, mümkün olduğunca kopya üzerinden yürütülür ve inceleme adımları kayıt altına alınır.",
              "İnceleme yalnızca hukuka uygun biçimde temin edilmiş ve incelenmesi için yetki verilmiş veriler üzerinde yapılır.",
            ],
          },
          {
            heading: "Saklama ve İmha",
            paragraphs: [
              "Dosya materyalleri, çalışma amacının gerektirdiği süre ve ilgili mevzuatta öngörülen saklama süreleri boyunca muhafaza edilir. Sürenin sona ermesi hâlinde materyaller silinir, yok edilir veya anonim hâle getirilir.",
              "Başvuru sahibinin talebi hâlinde, hukuki saklama yükümlülüğü bulunmayan materyaller çalışma tamamlandıktan sonra imha edilir.",
            ],
          },
          {
            heading: "İletişim",
            paragraphs: [
              `Gizliliğe ilişkin soru ve talepleriniz için ${contact.email} adresinden bize ulaşabilirsiniz. Kişisel verilerin işlenmesine ilişkin ayrıntılar KVKK Aydınlatma Metni'nde yer almaktadır.`,
            ],
          },
        ]}
        footer={
          <p className="border-l-2 border-gold-500 bg-surface p-6 text-[0.875rem] leading-relaxed text-ink-soft">
            {legalDisclaimer}
          </p>
        }
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
