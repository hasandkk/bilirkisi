import Link from "next/link";
import { contact, cta, legalDisclaimer } from "@/content/site";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "./icons";

export function CtaBand({
  title = "Dosyanızdaki teknik soruyu birlikte tanımlayalım",
  description = "Uyuşmazlığın konusunu ve elinizdeki belgeleri iletin; dosyanın hangi teknik soruları içerdiğini ve hangi uzmanlık alanlarını gerektirdiğini ön inceleme kapsamında değerlendirelim.",
  showDisclaimer = true,
}: {
  title?: string;
  description?: string;
  showDisclaimer?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div aria-hidden className="absolute inset-0 grid-texture opacity-60" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/3 size-[38rem] rounded-full bg-navy-500/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
      />

      <div className="relative container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow mb-5 flex items-center gap-3 text-gold-400">
              <span aria-hidden className="hidden h-px w-8 bg-current opacity-60 sm:block" />
              Dosya Ön İnceleme
            </p>
            <h2 className="text-[1.75rem] leading-tight font-semibold text-white sm:text-[2.125rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-navy-200">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={cta.primaryLong.href}
                className="group inline-flex h-14 items-center justify-center gap-3 bg-gold-500 px-7 text-[0.9375rem] font-semibold text-navy-950 transition-colors hover:bg-gold-400"
              >
                Dosyayı Ön İncelemeye Gönder
                <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href={cta.secondary.href}
                className="inline-flex h-14 items-center justify-center border border-white/25 px-7 text-[0.9375rem] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/[0.06]"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.035] p-7 sm:p-8">
            <p className="eyebrow mb-6 text-gold-400">Doğrudan İletişim</p>
            <ul className="space-y-5">
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="group flex items-start gap-4 text-white transition-colors hover:text-gold-400"
                >
                  <PhoneIcon className="mt-0.5 size-5 shrink-0 text-gold-500" />
                  <span>
                    <span className="block font-display text-[1.0625rem] font-medium">
                      {contact.phoneDisplay}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] text-navy-300">
                      {contact.workingHours}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-start gap-4 text-white transition-colors hover:text-gold-400"
                >
                  <MailIcon className="mt-0.5 size-5 shrink-0 text-gold-500" />
                  <span>
                    <span className="block font-display text-[1.0625rem] font-medium">
                      {contact.email}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] text-navy-300">
                      Dosya ve belge iletimi
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            {showDisclaimer ? (
              <p className="mt-7 border-t border-white/10 pt-6 text-[0.8125rem] leading-relaxed text-navy-300">
                {legalDisclaimer}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
