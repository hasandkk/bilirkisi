export const applicantTypes = [
  "Avukat",
  "Hukuk Bürosu",
  "Sigorta Şirketi",
  "Kurumsal Şirket",
  "Bireysel",
  "Diğer",
] as const;

export const expertiseOptions = [
  "Trafik Kazası ve Otomotiv",
  "Yangın / Fabrika Hasarı",
  "İnşaat ve Yapı",
  "Taşınmaz",
  "İş Kazası",
  "Bilişim",
  "İmza / Belge",
  "Birden Fazla Uzmanlık Alanı",
  "Diğer",
] as const;

export type ApplicantType = (typeof applicantTypes)[number];
export type ExpertiseOption = (typeof expertiseOptions)[number];

export const upload = {
  accept: ".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png",
  acceptLabel: "PDF, JPG veya PNG",
  maxFiles: 8,
  maxFileBytes: 10 * 1024 * 1024,
  maxTotalBytes: 25 * 1024 * 1024,
  allowedMimeTypes: ["application/pdf", "image/jpeg", "image/png"],
} as const;

export const kvkkConsentText =
  "KVKK Aydınlatma Metni'ni okudum. Başvurumun değerlendirilmesi amacıyla ilettiğim kişisel verilerin ve dosya içeriğinin işlenmesini kabul ediyorum.";

export const kvkkContactConsentText =
  "Başvurumla ilgili olarak telefon, e-posta ve kısa mesaj yoluyla tarafımla iletişime geçilmesini kabul ediyorum.";

export const kvkkShortNotice =
  "İlettiğiniz bilgi ve belgeler yalnızca başvurunuzun teknik açıdan değerlendirilmesi amacıyla işlenir; bu amaç dışında kullanılmaz ve üçüncü kişilerle paylaşılmaz. Ayrıntılar için KVKK Aydınlatma Metni'ni inceleyebilirsiniz.";
