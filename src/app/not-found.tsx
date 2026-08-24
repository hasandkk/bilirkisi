import Link from "next/link";
import { ButtonLink } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { expertiseAreas } from "@/content/expertise";
import { cta } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div aria-hidden className="absolute inset-0 grid-texture opacity-60" />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 size-[36rem] rounded-full bg-navy-600/25 blur-[130px]"
      />
      <div className="relative container-page flex min-h-[70vh] flex-col justify-center py-20">
        <p className="eyebrow mb-6 flex items-center gap-3 text-gold-400">
          <span aria-hidden className="hidden h-px w-8 bg-current opacity-60 sm:block" />
          Hata 404
        </p>
        <h1 className="max-w-2xl text-[2rem] leading-tight font-semibold text-white sm:text-[2.75rem]">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-navy-200">
          Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Aşağıdaki başlıklardan
          devam edebilir ya da dosyanızı doğrudan ön incelemeye gönderebilirsiniz.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={cta.primaryLong.href} variant="gold" size="lg" withArrow>
            Dosya Ön İnceleme Talebi
          </ButtonLink>
          <ButtonLink href="/" variant="light" size="lg">
            Ana Sayfaya Dön
          </ButtonLink>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="eyebrow mb-5 text-navy-300">Uzmanlık Alanları</p>
          <ul className="flex flex-wrap gap-2">
            {expertiseAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/uzmanlik-alanlari/${area.slug}`}
                  className="group inline-flex items-center gap-2 border border-white/12 bg-white/[0.03] px-4 py-2.5 text-[0.8125rem] text-navy-200 transition-colors hover:border-gold-500/50 hover:text-white"
                >
                  {area.navTitle}
                  <ArrowRightIcon className="size-3 opacity-0 transition-opacity group-hover:opacity-70" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
