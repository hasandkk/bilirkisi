import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { breadcrumbJsonLd } from "@/components/page-hero";
import { contact, legalDisclaimer, site } from "@/content/site";
import { JsonLd, pageMetadata } from "@/lib/metadata";

const crumbs = [{ label: "KVKK Aydınlatma Metni" }];

export const metadata: Metadata = pageMetadata({
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Teminat Rapor tarafından işlenen kişisel verilere ilişkin aydınlatma metni.",
  path: "/kvkk-aydinlatma-metni",
});

export default function KvkkPage() {
  return (
    <>
      <LegalPage
        eyebrow="Kişisel Verilerin Korunması"
        title="KVKK Aydınlatma Metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, başvurularınız aracılığıyla iletilen kişisel verilerin işlenmesine ilişkin bilgilendirme."
        crumbs={crumbs}
        updated="Ocak 2025"
        sections={[
          {
            heading: "Veri Sorumlusu",
            paragraphs: [
              `Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca veri sorumlusu sıfatıyla ${site.nameTitleCase} tarafından hazırlanmıştır.`,
              `İletişim: ${contact.email} · ${contact.phoneDisplay} · ${contact.addressLines.join(", ")}`,
            ],
          },
          {
            heading: "İşlenen Kişisel Veriler",
            paragraphs: [
              "Web sitesi üzerindeki dosya ön inceleme formu ve iletişim kanalları aracılığıyla aşağıdaki veriler işlenmektedir:",
            ],
            items: [
              "Kimlik verisi: ad ve soyad",
              "İletişim verisi: telefon numarası, e-posta adresi",
              "Başvuru verisi: başvuru türü, uzmanlık alanı, dosya konusu ve açıklama metni",
              "Dosya içeriği: başvuru kapsamında iletilen belge, fotoğraf ve dokümanlar",
              "İşlem güvenliği verisi: başvuru zamanı ve teknik bağlantı kayıtları",
            ],
          },
          {
            heading: "İşleme Amaçları",
            items: [
              "Başvurunun teknik açıdan değerlendirilmesi ve ön incelemenin yürütülmesi",
              "Talep edilen teknik inceleme, uzman görüşü ve raporlama hizmetinin sunulması",
              "Başvuru sahibi ile iletişim kurulması ve bilgilendirme yapılması",
              "Hizmete ilişkin sözleşmesel ve hukuki yükümlülüklerin yerine getirilmesi",
              "Hizmet kalitesinin ve süreç güvenliğinin sağlanması",
            ],
          },
          {
            heading: "Hukuki Sebepler",
            paragraphs: [
              "Kişisel verileriniz; KVKK m.5/2-(c) uyarınca bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması, m.5/2-(ç) uyarınca veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi, m.5/2-(e) uyarınca bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması ve m.5/2-(f) uyarınca meşru menfaat hukuki sebeplerine dayanılarak işlenir.",
              "Bu kapsamda yer almayan işleme faaliyetleri, KVKK m.5/1 uyarınca açık rızanıza dayanılarak gerçekleştirilir. Açık rıza her zaman geri alınabilir.",
            ],
          },
          {
            heading: "Aktarım",
            paragraphs: [
              "Kişisel verileriniz, yalnızca başvurunuzun değerlendirilmesi amacıyla ve amaçla sınırlı olarak; dosyanın gerektirdiği uzmanlık alanında görev alan uzmanlarla, bilgi teknolojileri hizmet sağlayıcılarıyla ve hukuken yetkili kamu kurum ve kuruluşlarıyla paylaşılabilir.",
              "Verileriniz, bu amaçlar dışında üçüncü kişilerle paylaşılmaz, satılmaz veya pazarlama amacıyla kullanılmaz.",
            ],
          },
          {
            heading: "Saklama Süresi",
            paragraphs: [
              "Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı ile saklama süreleri dikkate alınarak muhafaza edilir. Sürenin sona ermesi hâlinde veriler silinir, yok edilir veya anonim hâle getirilir.",
            ],
          },
          {
            heading: "İlgili Kişinin Hakları",
            paragraphs: ["KVKK m.11 uyarınca aşağıdaki haklara sahipsiniz:"],
            items: [
              "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
              "İşlenmişse buna ilişkin bilgi talep etme",
              "İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme",
              "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
              "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme",
              "Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
              "Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme",
              "Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
              "Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
            ],
          },
          {
            heading: "Başvuru Yöntemi",
            paragraphs: [
              `Haklarınıza ilişkin taleplerinizi ${contact.email} adresine ileterek veya yazılı olarak ${contact.addressLines.join(", ")} adresine başvurarak iletebilirsiniz. Talepleriniz, niteliğine göre en kısa sürede ve en geç otuz gün içinde sonuçlandırılır.`,
            ],
          },
          {
            heading: "Çerezler",
            paragraphs: [
              "Web sitemiz, sitenin çalışması için gerekli olan zorunlu çerezleri kullanır. Zorunlu çerezler dışında bir çerez kullanılması hâlinde bu durum ayrıca bildirilir ve gerekli onay alınır.",
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
