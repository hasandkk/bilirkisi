import type { IconKey } from "./expertise";

export type CorporateSolution = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Kartlarda gosterilen tek satirlik etiket. */
  tagline: string;
  icon: IconKey | "shield" | "briefcase";
  summary: string;
  intro: string[];
  needs: string[];
  deliverables: string[];
  relatedExpertise: string[];
  seoDescription: string;
};

export const corporateSolutions: CorporateSolution[] = [
  {
    slug: "sigorta-sirketleri",
    tagline: "Hasar, rücu ve teknik dosya",
    title: "Sigorta Şirketleri",
    shortTitle: "Sigorta",
    icon: "shield",
    summary: "Hasar, rücu ve teknik dosya incelemeleri.",
    intro: [
      "Hasar ve rücu dosyalarında teknik değerlendirme, dosyanın hem hızını hem de sonucunu belirler. Hasarın kapsamı, oluşum mekanizması ve maliyeti çoğu zaman aynı dosyada birlikte tartışılır.",
      "Teminat Rapor; hasar, rücu, hukuk ve teknik inceleme birimleri için dosya bazlı teknik inceleme ve uzman görüşü desteği sunar.",
    ],
    needs: [
      "Hasar dosyalarının teknik incelenmesi",
      "Rücu dosyalarında teknik nedensellik değerlendirmesi",
      "Hasar kapsamı ve maliyet analizi",
      "Mevcut eksper ve teknik raporların incelenmesi",
      "Sigorta tahkim dosyalarında teknik değerlendirme",
      "Beyan ve hasar uyumluluğunun teknik incelenmesi",
    ],
    deliverables: [
      "Dosya bazlı gerekçeli teknik değerlendirme",
      "Hasar kapsamı ve maliyet tabloları",
      "Teknik soru–cevap formatında özet",
    ],
    relatedExpertise: [
      "trafik-kazalari-ve-otomotiv",
      "yangin-ve-endustriyel-hasar",
      "insaat-ve-yapi",
    ],
    seoDescription:
      "Sigorta şirketlerinin hasar, rücu ve teknik inceleme birimleri için dosya bazlı teknik inceleme, hasar kapsamı ve maliyet analizi, uzman görüşü.",
  },
  {
    slug: "sanayi-ve-fabrikalar",
    tagline: "Yangın, tesis ve makine",
    title: "Sanayi ve Fabrikalar",
    shortTitle: "Sanayi",
    icon: "fire",
    summary: "Yangın, tesis, makine ve üretim kaynaklı teknik uyuşmazlıklar.",
    intro: [
      "Üretim tesislerinde yaşanan yangın ve hasar olayları, doğrudan üretim kapasitesini etkiler. Hasarın kapsamı kadar makine parkının kullanılabilirliği ve yeniden devreye alma maliyeti de teknik olarak değerlendirilmelidir.",
      "Teminat Rapor, sanayi kuruluşlarının hasar sonrası teknik değerlendirme ihtiyaçlarını dosya bazlı olarak karşılar.",
    ],
    needs: [
      "Fabrika ve tesis yangınlarının teknik incelenmesi",
      "Makine ve ekipman hasar değerlendirmesi",
      "Yangın sonrası kullanılabilirlik incelemesi",
      "Onarım ve yenileme maliyet analizi",
      "Üretim durması ile ilişkili teknik tespitler",
      "Sigorta hasar dosyasının teknik incelenmesi",
    ],
    deliverables: [
      "Hasar kapsamı ve etkilenen ekipman envanteri",
      "Kullanılabilirlik değerlendirmesi",
      "Onarım/yenileme maliyet analizi",
    ],
    relatedExpertise: ["yangin-ve-endustriyel-hasar", "is-kazalari", "insaat-ve-yapi"],
    seoDescription:
      "Fabrika ve sanayi tesislerinde yangın, makine, ekipman ve üretim kaynaklı hasarların teknik incelenmesi, kullanılabilirlik ve maliyet değerlendirmesi.",
  },
  {
    slug: "filo-ve-rent-a-car",
    tagline: "Araç hasarı ve onarım",
    title: "Filo ve Rent a Car Şirketleri",
    shortTitle: "Filo",
    icon: "vehicle",
    summary: "Araç hasarı ve teknik uyuşmazlıklar.",
    intro: [
      "Filo işletmelerinde hasar, onarım ve mekanik arıza uyuşmazlıkları yüksek hacimli ve tekrar eden bir teknik inceleme ihtiyacı doğurur.",
      "Teminat Rapor, filo ve kiralama şirketleri için hem tekil dosyalarda hem de düzenli çalışma modelinde teknik inceleme desteği sunar.",
    ],
    needs: [
      "Araç hasar analizi ve maliyet incelemesi",
      "Kaza oluşumunun teknik değerlendirmesi",
      "Hatalı onarım ve servis hatası iddiaları",
      "Mekanik arıza incelemeleri",
      "Pert ve rayiç değer değerlendirmesi",
      "Kiralama sonrası hasar uyuşmazlıkları",
    ],
    deliverables: [
      "Araç bazlı teknik değerlendirme",
      "Hasar maliyet tablosu",
      "Tekrar eden dosyalar için standart inceleme formatı",
    ],
    relatedExpertise: ["trafik-kazalari-ve-otomotiv"],
    seoDescription:
      "Filo ve rent a car şirketleri için araç hasar analizi, kaza değerlendirmesi, hatalı onarım ve mekanik arıza uyuşmazlıklarında teknik inceleme.",
  },
  {
    slug: "insaat-sirketleri",
    tagline: "Yapı ve imalat uyuşmazlığı",
    title: "İnşaat Şirketleri",
    shortTitle: "İnşaat",
    icon: "building",
    summary: "Yapı ve imalat uyuşmazlıkları.",
    intro: [
      "İnşaat projelerinde imalat, hakediş ve kusur tartışmaları çoğu zaman teknik dayanağı gösterilmemiş iddialar üzerinden yürür.",
      "Teminat Rapor; proje, metraj ve saha verilerini birlikte değerlendirerek uyuşmazlığın teknik çerçevesini ortaya koyar.",
    ],
    needs: [
      "Eksik ve hatalı imalat iddialarının incelenmesi",
      "Projeye aykırılık değerlendirmesi",
      "Hakediş ve metraj uyuşmazlıkları",
      "Yapı hasarı ve onarım maliyeti",
      "Alt yüklenici uyuşmazlıklarında teknik inceleme",
      "Teslim ve kabul aşamasındaki teknik tespitler",
    ],
    deliverables: [
      "İmalat–proje karşılaştırma tablosu",
      "Onarım maliyet analizi",
      "Gerekçeli teknik değerlendirme",
    ],
    relatedExpertise: ["insaat-ve-yapi", "tasinmaz-degerleme"],
    seoDescription:
      "İnşaat şirketleri için eksik ve hatalı imalat, projeye aykırılık, hakediş ve yapı hasarı uyuşmazlıklarında teknik inceleme ve maliyet analizi.",
  },
  {
    slug: "gayrimenkul-sirketleri",
    tagline: "Taşınmaz ve değerleme",
    title: "Gayrimenkul Şirketleri",
    shortTitle: "Gayrimenkul",
    icon: "estate",
    summary: "Taşınmaz ve değerleme konuları.",
    intro: [
      "Gayrimenkul portföylerinde değer, kullanım ve yapı kalitesi tartışmaları teknik verilerle desteklenmediğinde uyuşmazlığa dönüşür.",
      "Teminat Rapor, taşınmazın teknik ve ekonomik özelliklerini inceleyerek değer analizinin dayanaklarını görünür kılar.",
    ],
    needs: [
      "Taşınmaz değer analizi",
      "Kira değeri incelemesi",
      "Yapı kalitesi ve teknik durum tespiti",
      "Portföy bazlı teknik değerlendirme",
      "Değer uyuşmazlıklarında teknik inceleme",
    ],
    deliverables: [
      "Değer analizi ve kriter tablosu",
      "Taşınmaz teknik durum değerlendirmesi",
      "Karşılaştırmalı emsal değerlendirmesi",
    ],
    relatedExpertise: ["tasinmaz-degerleme", "insaat-ve-yapi"],
    seoDescription:
      "Gayrimenkul şirketleri ve kurumsal yatırımcılar için taşınmaz değer analizi, kira değeri incelemesi ve teknik durum değerlendirmesi.",
  },
  {
    slug: "bankalar-ve-finans-kuruluslari",
    tagline: "Değerleme ve teknik durum",
    title: "Bankalar ve Finans Kuruluşları",
    shortTitle: "Finans",
    icon: "briefcase",
    summary: "İlgili teknik ve değerleme ihtiyaçları.",
    intro: [
      "Kredi, teminat ve tasfiye süreçlerinde taşınmaz ve tesis varlıklarının teknik durumu ile değeri, kararların temel girdisidir.",
      "Teminat Rapor, finans kuruluşlarının teknik inceleme ve değer analizi ihtiyaçlarında uzman desteği sağlar.",
    ],
    needs: [
      "Taşınmaz ve tesis değer analizi",
      "Teknik durum tespiti",
      "Makine ve ekipman değerlendirmesi",
      "Uyuşmazlık dosyalarında teknik inceleme",
    ],
    deliverables: [
      "Değer ve teknik durum değerlendirmesi",
      "Varlık bazlı teknik envanter",
      "Gerekçeli teknik rapor",
    ],
    relatedExpertise: ["tasinmaz-degerleme", "yangin-ve-endustriyel-hasar"],
    seoDescription:
      "Bankalar ve finans kuruluşları için taşınmaz, tesis, makine ve ekipman değerlendirmesi ile teknik durum tespiti ve uyuşmazlık incelemeleri.",
  },
  {
    slug: "sirket-hukuk-departmanlari",
    tagline: "Dava dosyalarında uzman görüşü",
    title: "Şirket Hukuk Departmanları",
    shortTitle: "Hukuk Departmanları",
    icon: "document",
    summary: "Dava ve uyuşmazlıklardaki teknik sorular.",
    intro: [
      "Şirket hukuk departmanları, teknik uzmanlık gerektiren dosyalarda çoğu zaman iç kaynakla değerlendirilemeyen sorularla karşılaşır.",
      "Teminat Rapor, bu dosyalarda dış uzman desteği sağlar; teknik soruları belirler ve gerekçeli değerlendirmeye dönüştürür.",
    ],
    needs: [
      "Dava dosyalarındaki teknik soruların belirlenmesi",
      "Karşı taraf raporlarının teknik incelenmesi",
      "Uzman görüşü hazırlanması",
      "Sözleşmesel teknik uyuşmazlıkların değerlendirilmesi",
      "Çok alanlı dosyalarda multidisipliner inceleme",
    ],
    deliverables: [
      "Teknik soru listesi ve inceleme kapsamı",
      "Gerekçeli uzman görüşü",
      "Mevcut rapora ilişkin teknik değerlendirme",
    ],
    relatedExpertise: [
      "bilisim-ve-siber-guvenlik",
      "imza-ve-belge-inceleme",
      "insaat-ve-yapi",
    ],
    seoDescription:
      "Şirket hukuk departmanları için dava ve uyuşmazlık dosyalarında teknik soruların belirlenmesi, uzman görüşü ve mevcut raporların teknik incelenmesi.",
  },
];

export const corporateBySlug = Object.fromEntries(
  corporateSolutions.map((item) => [item.slug, item]),
) as Record<string, CorporateSolution>;
