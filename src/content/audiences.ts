export type Audience = {
  title: string;
  /** Kartlarda gosterilen kisa etiket. */
  short: string;
  description: string;
  href: string;
};

/** "Kimlere hizmet veriyoruz?" bolumu. */
export const audiences: Audience[] = [
  {
    title: "Avukatlar ve Hukuk Büroları",
    short: "Dava dosyalarında teknik inceleme",
    description:
      "Teknik uzmanlık gerektiren dava ve uyuşmazlık dosyalarının incelenmesi, teknik soruların belirlenmesi ve gerekçeli değerlendirme.",
    href: "/avukatlar-icin",
  },
  {
    title: "Sigorta Şirketleri",
    short: "Hasar ve rücu dosyaları",
    description:
      "Hasar, rücu, hukuk ve teknik inceleme departmanlarına dosya bazlı teknik destek.",
    href: "/kurumsal-cozumler/sigorta-sirketleri",
  },
  {
    title: "Sanayi ve Fabrikalar",
    short: "Yangın, makine ve tesis hasarı",
    description:
      "Yangın, makine, ekipman, tesis ve endüstriyel hasar incelemeleri.",
    href: "/kurumsal-cozumler/sanayi-ve-fabrikalar",
  },
  {
    title: "Filo ve Rent a Car Şirketleri",
    short: "Araç hasarı ve mekanik uyuşmazlık",
    description:
      "Araç hasarı, kaza, servis ve mekanik uyuşmazlıklarda teknik inceleme.",
    href: "/kurumsal-cozumler/filo-ve-rent-a-car",
  },
  {
    title: "İnşaat Şirketleri",
    short: "Yapı kusuru ve imalat",
    description:
      "Yapı kusurları, hasar, imalat ve teknik uyuşmazlıkların değerlendirilmesi.",
    href: "/kurumsal-cozumler/insaat-sirketleri",
  },
  {
    title: "Gayrimenkul Şirketleri ve Kurumsal Yatırımcılar",
    short: "Taşınmaz ve değerleme",
    description:
      "Taşınmaz, değerleme ve gayrimenkul uyuşmazlıklarında teknik inceleme.",
    href: "/kurumsal-cozumler/gayrimenkul-sirketleri",
  },
  {
    title: "Şirketlerin Hukuk Departmanları",
    short: "Dış uzman desteği",
    description:
      "Teknik uzmanlık gerektiren dava ve uyuşmazlıklarda dış uzman desteği.",
    href: "/kurumsal-cozumler/sirket-hukuk-departmanlari",
  },
  {
    title: "Kurumsal Şirketler",
    short: "Çok alanlı teknik uyuşmazlık",
    description:
      "Yangın, iş kazası, bilgi güvenliği, belge veya teknik hasar uyuşmazlıkları.",
    href: "/kurumsal-cozumler",
  },
  {
    title: "Bireysel Başvurular",
    short: "Tekil dosya incelemesi",
    description:
      "Araç, yapı, taşınmaz veya diğer teknik uyuşmazlıklarda uzman incelemesine ihtiyaç duyan kişiler.",
    href: "/dosya-on-inceleme",
  },
];
