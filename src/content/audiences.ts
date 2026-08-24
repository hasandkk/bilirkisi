export type Audience = {
  title: string;
  description: string;
  href: string;
};

/** "Kimlere hizmet veriyoruz?" bolumu. */
export const audiences: Audience[] = [
  {
    title: "Avukatlar ve Hukuk Büroları",
    description:
      "Teknik uzmanlık gerektiren dava ve uyuşmazlık dosyalarının incelenmesi, teknik soruların belirlenmesi ve gerekçeli değerlendirme.",
    href: "/avukatlar-icin",
  },
  {
    title: "Sigorta Şirketleri",
    description:
      "Hasar, rücu, hukuk ve teknik inceleme departmanlarına dosya bazlı teknik destek.",
    href: "/kurumsal-cozumler/sigorta-sirketleri",
  },
  {
    title: "Sanayi ve Fabrikalar",
    description:
      "Yangın, makine, ekipman, tesis ve endüstriyel hasar incelemeleri.",
    href: "/kurumsal-cozumler/sanayi-ve-fabrikalar",
  },
  {
    title: "Filo ve Rent a Car Şirketleri",
    description:
      "Araç hasarı, kaza, servis ve mekanik uyuşmazlıklarda teknik inceleme.",
    href: "/kurumsal-cozumler/filo-ve-rent-a-car",
  },
  {
    title: "İnşaat Şirketleri",
    description:
      "Yapı kusurları, hasar, imalat ve teknik uyuşmazlıkların değerlendirilmesi.",
    href: "/kurumsal-cozumler/insaat-sirketleri",
  },
  {
    title: "Gayrimenkul Şirketleri ve Kurumsal Yatırımcılar",
    description:
      "Taşınmaz, değerleme ve gayrimenkul uyuşmazlıklarında teknik inceleme.",
    href: "/kurumsal-cozumler/gayrimenkul-sirketleri",
  },
  {
    title: "Şirketlerin Hukuk Departmanları",
    description:
      "Teknik uzmanlık gerektiren dava ve uyuşmazlıklarda dış uzman desteği.",
    href: "/kurumsal-cozumler/sirket-hukuk-departmanlari",
  },
  {
    title: "Kurumsal Şirketler",
    description:
      "Yangın, iş kazası, bilgi güvenliği, belge veya teknik hasar uyuşmazlıkları.",
    href: "/kurumsal-cozumler",
  },
  {
    title: "Bireysel Başvurular",
    description:
      "Araç, yapı, taşınmaz veya diğer teknik uyuşmazlıklarda uzman incelemesine ihtiyaç duyan kişiler.",
    href: "/dosya-on-inceleme",
  },
];
