export type TechnicalQuestion = {
  question: string;
  area: string;
  href: string;
};

/** "Dosyanizda hangi teknik soru var?" bolumu. */
export const technicalQuestions: TechnicalQuestion[] = [
  {
    question: "Yangın nerede başlamış olabilir?",
    area: "Yangın ve Endüstriyel Hasar",
    href: "/uzmanlik-alanlari/yangin-ve-endustriyel-hasar",
  },
  {
    question: "Fabrika yangınındaki hasarın kapsamı nedir?",
    area: "Yangın ve Endüstriyel Hasar",
    href: "/fabrika-yangini-teknik-inceleme",
  },
  {
    question: "Makine veya ekipmanda hasarın oluşum nedeni nedir?",
    area: "Yangın ve Endüstriyel Hasar",
    href: "/makine-hasar-inceleme",
  },
  {
    question: "Bu araç gerçekten pert midir?",
    area: "Trafik ve Otomotiv",
    href: "/pert-total-inceleme",
  },
  {
    question: "Kaza anlatıldığı şekilde gerçekleşmiş olabilir mi?",
    area: "Trafik ve Otomotiv",
    href: "/kaza-rekonstruksiyonu",
  },
  {
    question: "Servis hatalı onarım yapmış olabilir mi?",
    area: "Trafik ve Otomotiv",
    href: "/otomotiv-uzman-gorusu",
  },
  {
    question: "Yapıdaki hasarın olası nedeni nedir?",
    area: "İnşaat ve Yapı",
    href: "/yapi-hasar-inceleme",
  },
  {
    question: "İmalat projeye ve teknik gerekliliklere uygun mu?",
    area: "İnşaat ve Yapı",
    href: "/hatali-imalat-inceleme",
  },
  {
    question: "Taşınmaz değerlemesinde hangi kriterler dikkate alınmalıdır?",
    area: "Taşınmaz",
    href: "/tasinmaz-degerleme",
  },
  {
    question: "İş kazasının teknik oluşum mekanizması nedir?",
    area: "İş Kazaları",
    href: "/is-kazasi-teknik-inceleme",
  },
  {
    question: "Dijital kayıtlarda hangi teknik veriler bulunmaktadır?",
    area: "Bilişim",
    href: "/bilisim-teknik-inceleme",
  },
  {
    question: "Belge veya imza üzerinde teknik inceleme gerekiyor mu?",
    area: "İmza ve Belge",
    href: "/imza-inceleme",
  },
];

export const technicalQuestionsNote =
  "Teknik uyuşmazlığın çözümü, öncelikle doğru teknik sorunun belirlenmesiyle başlar.";

export type MultidisciplinaryCase = {
  title: string;
  description: string;
  disciplines: string[];
};

export const multidisciplinaryCases: MultidisciplinaryCase[] = [
  {
    title: "Fabrika yangını dosyası",
    description:
      "Hasarın kapsamı, etkilenen ekipmanın durumu ve yeniden devreye alma maliyeti birlikte değerlendirilir.",
    disciplines: ["Yangın", "Elektrik", "Makine", "İnşaat", "Hasar maliyeti"],
  },
  {
    title: "Karmaşık trafik kazası",
    description:
      "Kaza oluşumu, araç davranışı ve yol geometrisi birlikte ele alınmadan tutarlı bir değerlendirme kurulamaz.",
    disciplines: ["Otomotiv", "Makine", "Rekonstrüksiyon", "Yol/Geometri"],
  },
  {
    title: "İş kazası dosyası",
    description:
      "Makine güvenliği, çalışma yöntemi ve ortam koşulları teknik nedensellik açısından birlikte incelenir.",
    disciplines: ["Makine", "İş güvenliği tekniği", "Elektrik", "Üretim süreci"],
  },
  {
    title: "İnşaat uyuşmazlığı",
    description:
      "İmalat kusuru, yapısal etki ve maliyet farklı uzmanlık alanlarının kesişiminde değerlendirilir.",
    disciplines: ["İnşaat", "Statik", "Malzeme", "Maliyet/Metraj"],
  },
];

export const multidisciplinaryIntro =
  "Özellikle fabrika yangınları, büyük endüstriyel hasarlar, iş kazaları, inşaat uyuşmazlıkları ve karmaşık trafik kazaları, birden fazla teknik uzmanlık alanının birlikte değerlendirilmesini gerektirebilir.";

export const multidisciplinaryApproach =
  "Dosyanın teknik sorularını belirle, gerekli uzmanlık alanlarını tespit et ve incelemeyi uygun uzmanlık kapsamında yapılandır.";
