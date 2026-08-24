import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";
import { JsonLd, organizationJsonLd } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nameTitleCase} | ${site.slogan}`,
    template: `%s | ${site.nameTitleCase}`,
  },
  description: site.shortDescription,
  applicationName: site.nameTitleCase,
  authors: [{ name: site.nameTitleCase }],
  creator: site.nameTitleCase,
  publisher: site.nameTitleCase,
  keywords: [
    "teknik inceleme",
    "uzman görüşü",
    "teknik mütalaa",
    "teknik raporlama",
    "hasar analizi",
    "kaza rekonstrüksiyonu",
    "yangın hasar incelemesi",
    "makine hasar incelemesi",
    "inşaat teknik inceleme",
    "taşınmaz değerleme",
    "iş kazası teknik inceleme",
    "bilişim teknik inceleme",
    "imza ve belge inceleme",
  ],
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.nameTitleCase} | ${site.slogan}`,
    description: site.shortDescription,
    url: site.url,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${manrope.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          İçeriğe geç
        </a>
        <SiteHeader />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
