# Teminat Rapor — Kurumsal Web Sitesi

**Teknik Uyuşmazlıklarda Uzman İnceleme ve Raporlama**

Trafik kazaları ve otomotiv, yangın ve endüstriyel hasar, inşaat ve yapı, taşınmaz,
iş kazaları, bilişim ve belge inceleme alanlarında dosya bazlı teknik inceleme,
uzman görüşü ve raporlama hizmeti sunan kurumsal web sitesi.

Site, tek bir uzmanın kişisel sitesi olarak değil; farklı teknik uzmanlık alanlarını
tek çatı altında toplayan, Türkiye çapında ölçeklenebilir bir **multidisipliner teknik
raporlama platformu** olarak konumlandırılmıştır.

---

## Hukuki Konumlandırma

Bu, projenin tasarım kararlarını doğrudan belirleyen bir kısıttır:

> Teminat Rapor tarafından sunulan özel teknik inceleme, uzman görüşü ve danışmanlık
> hizmetleri; mahkeme, savcılık veya diğer yargı mercileri tarafından gerçekleştirilen
> resmî bilirkişi görevlendirmelerinden bağımsızdır.

Bu açıklama footer'da, KVKK ve gizlilik sayfalarında, SSS bölümünde, dosya ön inceleme
sayfasında ve tüm SEO sayfalarında yer alır (`legalDisclaimer`, `src/content/site.ts`).

**İçerik üretirken kullanılmayacak ifadeler** — resmî onay/sicil iddiaları (Adalet
Bakanlığı, UYAP vb.), "resmî mahkeme bilirkişisi", "adli bilirkişi", "mahkemelerce
onaylanmış rapor", "kesin sonuç", "dava kazanma garantisi", "%100", "kesin kusur",
"kesin tazminat" ve "Türkiye'nin en iyi/en güvenilir" türü üstünlük iddiaları.

**Kullanılan ifadeler** — teknik inceleme, uzman görüşü, teknik mütalaa, teknik
değerlendirme, hasar analizi, nedensellik analizi, dosya incelemesi, teknik raporlama,
multidisipliner uzman incelemesi, kurumsal teknik danışmanlık.

Ayrıca her uzmanlık alanı, kendi kapsam sınırını içerikte açıkça belirtir: yangın
dosyalarında kesin çıkış sebebi taahhüdü verilmez; iş kazası incelemesi tıbbi
değerlendirme içermez; taşınmaz değerlemede lisans/yetki gerektiren resmî raporların
yetkili kuruluşlarca hazırlanacağı belirtilir; imza incelemesinde mutlak sonuç
iddiasında bulunulmaz.

---

## Teknoloji

| Katman | Seçim |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19, Turbopack) |
| Dil | TypeScript (strict) |
| Stil | Tailwind CSS v4 (`@theme` token'ları, CSS-first konfigürasyon) |
| Fontlar | Inter (metin), Manrope (başlık), IBM Plex Mono (etiket/numara) — `next/font` |
| Görseller | Tamamı elle yazılmış inline SVG; harici görsel bağımlılığı yok |

## Kurulum

```bash
npm install
cp .env.example .env.local   # değerleri doldurun
npm run dev                  # http://localhost:3000
```

```bash
npm run build      # üretim derlemesi
npm start          # üretim sunucusu
npm run typecheck  # tip kontrolü
```

## Dizin Yapısı

```
src/
├── app/
│   ├── page.tsx                      Ana sayfa (14 bölüm)
│   ├── [slug]/                       SEO landing sayfaları (19 adet)
│   ├── uzmanlik-alanlari/[slug]/     7 uzmanlık alanı detay sayfası
│   ├── kurumsal-cozumler/[slug]/     7 sektör sayfası
│   ├── bilgi-merkezi/[slug]/         İçerik sayfaları
│   ├── dosya-on-inceleme/            Ana dönüşüm sayfası (form)
│   ├── api/on-inceleme/route.ts      Form uç noktası
│   ├── sitemap.ts · robots.ts        SEO altyapısı
│   └── kvkk-aydinlatma-metni/ · gizlilik-politikasi/ · site-haritasi/
├── components/                       Header, footer, hero, bölümler, form, UI
├── content/                          Tüm metin içeriği (tek doğruluk kaynağı)
└── lib/                              Doğrulama, metadata, rota listesi
```

### İçerik katmanı

Sitedeki tüm metinler `src/content/` altındaki tipli veri dosyalarında tutulur;
sayfalar bu veriden üretilir. Bir metni değiştirmek için bileşenlere dokunmak gerekmez.

| Dosya | İçerik |
| --- | --- |
| `site.ts` | Marka, slogan, iletişim, menü, hukuki açıklama |
| `expertise.ts` | 7 uzmanlık alanı: hizmetler, teknik sorular, belgeler, kapsam notu |
| `corporate.ts` | 7 kurumsal sektör sayfası |
| `seo-pages.ts` | 19 bağımsız SEO sayfası |
| `knowledge.ts` | Bilgi merkezi içerikleri |
| `audiences.ts` · `process.ts` · `questions.ts` · `faq.ts` · `form.ts` | Ana sayfa bölümleri ve form yapılandırması |

## Yeni SEO Sayfası Ekleme

`src/content/seo-pages.ts` dosyasına bir kayıt eklemek yeterlidir; rota, metadata,
breadcrumb, JSON-LD ve sitemap girişi otomatik oluşur:

```ts
{
  slug: "yeni-inceleme-konusu",     // /yeni-inceleme-konusu
  h1: "Yeni İnceleme Konusu",
  metaTitle: "…",
  metaDescription: "…",
  eyebrow: "Uzmanlık Alanı Adı",
  area: "yangin-ve-endustriyel-hasar",   // expertise.ts'teki slug
  intro: ["…", "…"],
  blocks: [{ title: "İnceleme kapsamı", items: ["…"] }],
  questions: ["…"],
  documents: ["…"],
  note: "Kapsam sınırı açıklaması",       // istege bağlı
  related: ["/fabrika-yangini-teknik-inceleme"],
}
```

Mevcut SEO sayfaları: `/trafik-kazasi-teknik-inceleme`, `/otomotiv-uzman-gorusu`,
`/arac-hasar-teknik-inceleme`, `/pert-total-inceleme`, `/kaza-rekonstruksiyonu`,
`/fabrika-yangini-teknik-inceleme`, `/yangin-hasar-inceleme`,
`/endustriyel-yangin-inceleme`, `/makine-hasar-inceleme`, `/insaat-teknik-inceleme`,
`/yapi-hasar-inceleme`, `/hatali-imalat-inceleme`, `/tasinmaz-degerleme`,
`/is-kazasi-teknik-inceleme`, `/bilisim-teknik-inceleme`,
`/siber-guvenlik-teknik-inceleme`, `/imza-inceleme`, `/belge-inceleme`,
`/hmk-293-uzman-gorusu`.

## Dosya Ön İnceleme Formu

Ana dönüşüm noktası. Alanlar: ad soyad, telefon, e-posta, başvuru türü, uzmanlık alanı,
dosya konusu, kısa açıklama, dosya yükleme (PDF/JPG/PNG) ve KVKK onayları.

`POST /api/on-inceleme` (multipart) şunları yapar:

- Alan doğrulaması (istemci ve sunucu tarafında aynı kurallar — `src/lib/validation.ts`)
- Dosya tipi ve boyut denetimi (dosya başına 10 MB, toplam 25 MB, en fazla 8 dosya)
- Bot tuzağı (honeypot) ve IP başına hız sınırı (10 dakikada 5 başvuru)
- Başvuru referans kodu üretimi (`TR-YYYYAAGG-XXXXX`)

**Teslimat:** `PRE_REVIEW_WEBHOOK_URL` tanımlıysa başvuru JSON olarak o adrese POST
edilir (CRM, e-posta servisi veya otomasyon aracına bağlanabilir); tanımlı değilse
yalnızca sunucu günlüğüne yazılır. Webhook'a dosya içerikleri değil, dosya meta
bilgileri (ad, boyut, tip) gönderilir — kalıcı dosya saklama gerekiyorsa
`src/app/api/on-inceleme/route.ts` içindeki `deliver()` fonksiyonu bir nesne
depolama servisine bağlanmalıdır.

## Yayın Öncesi Yapılacaklar

- [ ] `src/content/site.ts` → `contact` bloğundaki telefon, e-posta ve adres bilgilerini
      gerçek değerlerle değiştirin (mevcut değerler yer tutucudur).
- [ ] `NEXT_PUBLIC_SITE_URL` değerini gerçek alan adına ayarlayın. Tanımsız veya boş
      bırakılırsa sırasıyla Vercel üretim adresi, Vercel dağıtım adresi ve varsayılan
      alan adı kullanılır (`src/lib/site-url.ts`).
- [ ] `PRE_REVIEW_WEBHOOK_URL` ile form başvurularını bir e-posta/CRM hedefine bağlayın.
- [ ] KVKK aydınlatma metni ve gizlilik politikasını hukuk danışmanınıza kontrol ettirin;
      veri sorumlusu unvan ve adres bilgilerini tamamlayın.
- [ ] Open Graph paylaşım görseli ekleyin (`/opengraph-image`).
- [ ] Analitik ve Search Console doğrulamasını ekleyin.

## Tasarım Sistemi

Renkler `src/app/globals.css` içinde `@theme` token'ları olarak tanımlıdır:

| Rol | Değer |
| --- | --- |
| Ana (koyu lacivert) | `#0B1628` — `navy-900` |
| İkincil (kurumsal mavi) | `#163A5F` — `navy-600` |
| Vurgu (kontrollü altın) | `#C7A35A` — `gold-500` |
| Açık arka plan | `#F5F7FA` — `surface` |
| Metin | `#18202A` — `ink` |

Hero ve bölüm görselleri; adalet terazisi veya mahkeme tokmağı yerine yapı, fabrika,
araç, mühendislik çizimi ve veri panellerinden oluşan teknik SVG kompozisyonlarıdır.

## Erişilebilirlik

Semantik başlık hiyerarşisi (sayfa başına tek `h1`), "İçeriğe geç" bağlantısı,
görünür odak halkaları, ARIA etiketli menü ve form alanları, `role="alert"` ile
duyurulan doğrulama hataları, `prefers-reduced-motion` desteği.
