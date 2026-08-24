import { expertiseAreas } from "@/content/expertise";
import { corporateSolutions } from "@/content/corporate";
import { articles } from "@/content/knowledge";
import { seoPages } from "@/content/seo-pages";

export type RouteGroup = {
  title: string;
  description?: string;
  routes: { label: string; href: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[];
};

export const routeGroups: RouteGroup[] = [
  {
    title: "Ana Sayfalar",
    routes: [
      { label: "Ana Sayfa", href: "/", priority: 1, changeFrequency: "weekly" },
      { label: "Uzmanlık Alanları", href: "/uzmanlik-alanlari", priority: 0.9, changeFrequency: "monthly" },
      { label: "Avukatlar İçin", href: "/avukatlar-icin", priority: 0.9, changeFrequency: "monthly" },
      { label: "Kurumsal Çözümler", href: "/kurumsal-cozumler", priority: 0.9, changeFrequency: "monthly" },
      { label: "Nasıl Çalışıyoruz?", href: "/nasil-calisiyoruz", priority: 0.8, changeFrequency: "monthly" },
      { label: "Bilgi Merkezi", href: "/bilgi-merkezi", priority: 0.7, changeFrequency: "weekly" },
      { label: "Hakkımızda", href: "/hakkimizda", priority: 0.7, changeFrequency: "yearly" },
      { label: "İletişim", href: "/iletisim", priority: 0.8, changeFrequency: "yearly" },
      { label: "Dosya Ön İnceleme", href: "/dosya-on-inceleme", priority: 1, changeFrequency: "monthly" },
    ],
  },
  {
    title: "Uzmanlık Alanları",
    routes: expertiseAreas.map((area) => ({
      label: area.title,
      href: `/uzmanlik-alanlari/${area.slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
  },
  {
    title: "Kurumsal Çözümler",
    routes: corporateSolutions.map((item) => ({
      label: item.title,
      href: `/kurumsal-cozumler/${item.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  },
  {
    title: "İnceleme Konuları",
    description: "Uzmanlık alanlarının altındaki özel inceleme başlıkları.",
    routes: seoPages.map((page) => ({
      label: page.h1,
      href: `/${page.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  },
  {
    title: "Bilgi Merkezi",
    routes: articles.map((article) => ({
      label: article.title,
      href: `/bilgi-merkezi/${article.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  },
  {
    title: "Yasal",
    routes: [
      { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni", priority: 0.3, changeFrequency: "yearly" },
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi", priority: 0.3, changeFrequency: "yearly" },
      { label: "Site Haritası", href: "/site-haritasi", priority: 0.3, changeFrequency: "monthly" },
    ],
  },
];

export const allRoutes = routeGroups.flatMap((group) => group.routes);
