/**
 * Marka, iletisim ve global site bilgileri.
 * Iletisim alanlari yayina alinmadan once gercek bilgilerle guncellenmelidir.
 */
import { resolveSiteUrl } from "@/lib/site-url";

export const site = {
  name: "TEMİNAT RAPOR",
  nameTitleCase: "Teminat Rapor",
  legalName: "Teminat Rapor",
  slogan: "Teknik Uyuşmazlıklarda Uzman İnceleme ve Raporlama",
  slogans: [
    "Teknik Sorulara Gerekçeli Görüşler",
    "Karmaşık Dosyalarda Teknik Uzmanlık",
    "Hasar, Kaza ve Teknik Uyuşmazlıklarda Uzman Görüşü",
  ],
  brandMessage:
    "Teminat Rapor; trafik kazaları, otomotiv, yangın, endüstriyel hasarlar, inşaat, taşınmaz, iş kazaları, bilişim ve belge inceleme alanlarında teknik uyuşmazlıkların uzmanlar tarafından incelenmesini ve gerekçeli teknik değerlendirmelere dönüştürülmesini sağlar.",
  shortDescription:
    "Trafik kazaları, otomotiv, yangın ve endüstriyel hasar, inşaat, taşınmaz, iş kazaları, bilişim ve belge inceleme alanlarında dosya bazlı teknik analiz, uzman görüşü ve teknik raporlama.",
  url: resolveSiteUrl(),
  locale: "tr_TR",
  coverage: "Türkiye geneli",
} as const;

/** Yayin oncesi guncellenecek iletisim bilgileri. */
export const contact = {
  phoneDisplay: "+90 850 000 00 00",
  phoneHref: "+908500000000",
  whatsappHref: "https://wa.me/908500000000",
  email: "info@teminatrapor.com",
  emailCorporate: "kurumsal@teminatrapor.com",
  addressLines: ["Merkez Ofis", "İstanbul, Türkiye"],
  workingHours: "Hafta içi 09:00 – 18:00",
} as const;

/**
 * Hukuki konumlandirma metni.
 * Footer'da ve ilgili tum sayfalarda gosterilir.
 */
export const legalDisclaimer =
  "Teminat Rapor tarafından sunulan özel teknik inceleme, uzman görüşü ve danışmanlık hizmetleri; mahkeme, savcılık veya diğer yargı mercileri tarafından gerçekleştirilen resmî bilirkişi görevlendirmelerinden bağımsızdır.";

export const scopeStatement =
  "Teminat Rapor; dosyanın teknik sorularını belirler, gereken uzmanlık alanlarını tespit eder ve incelemeyi uygun uzmanlık kapsamında yapılandırır. İnceleme sonucunda ulaşılan değerlendirmeler, incelenen belge, veri ve bulgularla sınırlıdır.";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Uzmanlık Alanları",
    href: "/uzmanlik-alanlari",
    children: [
      { label: "Trafik Kazaları ve Otomotiv", href: "/uzmanlik-alanlari/trafik-kazalari-ve-otomotiv" },
      { label: "Yangın ve Endüstriyel Hasar", href: "/uzmanlik-alanlari/yangin-ve-endustriyel-hasar" },
      { label: "İnşaat ve Yapı", href: "/uzmanlik-alanlari/insaat-ve-yapi" },
      { label: "Taşınmaz Değerleme", href: "/uzmanlik-alanlari/tasinmaz-degerleme" },
      { label: "İş Kazaları", href: "/uzmanlik-alanlari/is-kazalari" },
      { label: "Bilişim ve Siber Güvenlik", href: "/uzmanlik-alanlari/bilisim-ve-siber-guvenlik" },
      { label: "İmza ve Belge İnceleme", href: "/uzmanlik-alanlari/imza-ve-belge-inceleme" },
    ],
  },
  { label: "Avukatlar İçin", href: "/avukatlar-icin" },
  {
    label: "Kurumsal Çözümler",
    href: "/kurumsal-cozumler",
    children: [
      { label: "Sigorta Şirketleri", href: "/kurumsal-cozumler/sigorta-sirketleri" },
      { label: "Sanayi ve Fabrikalar", href: "/kurumsal-cozumler/sanayi-ve-fabrikalar" },
      { label: "Filo ve Rent a Car", href: "/kurumsal-cozumler/filo-ve-rent-a-car" },
      { label: "İnşaat Şirketleri", href: "/kurumsal-cozumler/insaat-sirketleri" },
      { label: "Gayrimenkul Şirketleri", href: "/kurumsal-cozumler/gayrimenkul-sirketleri" },
      { label: "Bankalar ve Finans Kuruluşları", href: "/kurumsal-cozumler/bankalar-ve-finans-kuruluslari" },
      { label: "Şirket Hukuk Departmanları", href: "/kurumsal-cozumler/sirket-hukuk-departmanlari" },
    ],
  },
  { label: "Nasıl Çalışıyoruz?", href: "/nasil-calisiyoruz" },
  { label: "Bilgi Merkezi", href: "/bilgi-merkezi" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const cta = {
  primary: { label: "Dosya Ön İnceleme", href: "/dosya-on-inceleme" },
  primaryLong: { label: "Dosya Ön İnceleme Talebi", href: "/dosya-on-inceleme" },
  secondary: { label: "Kurumsal Görüşme", href: "/iletisim?konu=kurumsal" },
  corporate: { label: "Kurumsal Çalışma Talebi", href: "/iletisim?konu=kurumsal" },
} as const;
