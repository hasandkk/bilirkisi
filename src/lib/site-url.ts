/**
 * Sitenin mutlak adresini cozer.
 *
 * Oncelik sirasi:
 *   1. NEXT_PUBLIC_SITE_URL          — elle tanimlanan alan adi
 *   2. Vercel uretim alan adi        — proje Vercel'de yayindaysa
 *   3. Vercel dagitim adresi         — onizleme dagitimlari icin
 *   4. Varsayilan alan adi
 *
 * Bos veya gecersiz degerler sessizce atlanir; boylece ortam degiskeni
 * bos birakildiginda derleme kirilmaz.
 */
const FALLBACK_URL = "https://www.teminatrapor.com";

function normalize(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    return new URL(withScheme).origin;
  } catch {
    return null;
  }
}

export function resolveSiteUrl(): string {
  return (
    normalize(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalize(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) ??
    normalize(process.env.NEXT_PUBLIC_VERCEL_URL) ??
    FALLBACK_URL
  );
}
