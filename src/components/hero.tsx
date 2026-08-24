import Link from "next/link";
import { cta } from "@/content/site";
import { expertiseAreas } from "@/content/expertise";
import { ArrowRightIcon } from "./icons";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div aria-hidden className="absolute inset-0 grid-texture opacity-70" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 size-[46rem] rounded-full bg-navy-600/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-56 -left-32 size-[36rem] rounded-full bg-gold-700/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />

      <div className="relative container-page pt-16 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* Metin */}
          <div className="animate-rise max-w-2xl">
            <p className="eyebrow mb-6 flex items-center gap-3 text-gold-400">
              <span aria-hidden className="hidden h-px w-10 bg-gold-500/70 sm:block" />
              Türkiye Geneli · Multidisipliner Teknik İnceleme
            </p>

            <h1 className="text-[2.125rem] leading-[1.1] font-semibold text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              Teknik Uyuşmazlıklarda{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">Uzman İnceleme</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 z-0 h-[3px] bg-gold-500"
                />
              </span>{" "}
              ve Raporlama
            </h1>

            <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-navy-200 sm:text-lg">
              Trafik kazaları, otomotiv, fabrika ve endüstriyel yangınlar, yapı,
              taşınmaz, iş kazaları, bilişim ve belge inceleme alanlarında dosya
              bazlı teknik analiz ve uzman görüşü.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={cta.primaryLong.href}
                className="group inline-flex h-14 items-center justify-center gap-3 bg-gold-500 px-7 text-[0.9375rem] font-semibold text-navy-950 transition-all duration-200 hover:bg-gold-400"
              >
                {cta.primaryLong.label}
                <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/uzmanlik-alanlari"
                className="inline-flex h-14 items-center justify-center gap-3 border border-white/25 px-7 text-[0.9375rem] font-medium text-white transition-all duration-200 hover:border-white/50 hover:bg-white/[0.06]"
              >
                Uzmanlık Alanlarını İncele
              </Link>
            </div>

            {/* Alan seridi */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="eyebrow mb-4 text-navy-300">İnceleme Alanları</p>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {expertiseAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/uzmanlik-alanlari/${area.slug}`}
                      className="inline-flex items-center border border-white/12 bg-white/[0.03] px-3.5 py-2 text-[0.8125rem] text-navy-200 transition-colors hover:border-gold-500/50 hover:bg-white/[0.07] hover:text-white"
                    >
                      {area.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gorsel */}
          <div className="animate-rise lg:pl-4" style={{ animationDelay: "120ms" }}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
