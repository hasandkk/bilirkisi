import Link from "next/link";
import { audiences } from "@/content/audiences";
import { corporateSolutions } from "@/content/corporate";
import { expertiseAreas } from "@/content/expertise";
import { processSteps, reportPrinciples } from "@/content/process";
import {
  multidisciplinaryApproach,
  multidisciplinaryCases,
  technicalQuestions,
} from "@/content/questions";
import { articles } from "@/content/knowledge";
import { cta, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { areaIcons, ArrowRightIcon } from "./icons";
import { areaScenes, ConvergenceScene } from "./illustrations";
import { ButtonLink, Section, SectionHeader } from "./ui";

/* ----------------------------- Rakam seridi ------------------------------ */

const facts = [
  { value: "07", label: "Teknik uzmanlık alanı" },
  { value: "05", label: "Aşamalı inceleme süreci" },
  { value: "19", label: "İnceleme konusu" },
  { value: "TR", label: site.coverage },
];

export function FactStrip() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex items-baseline gap-4 bg-white py-8 pr-4 lg:justify-center lg:px-6">
              <dd className="font-display text-[2.25rem] leading-none font-light text-gold-500 tabular-nums lg:text-[2.75rem]">
                {fact.value}
              </dd>
              <dt className="max-w-28 text-[0.8125rem] leading-snug text-ink-muted">
                {fact.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------- Kimlere hizmet veriyoruz ---------------------- */

export function AudiencesSection() {
  return (
    <Section tone="surface" id="kimlere-hizmet-veriyoruz" size="md">
      <div className="container-page">
        <SectionHeader eyebrow="Kimlere Hizmet Veriyoruz?" title="Dosyanız kimin masasında?" />

        <ul className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <li key={audience.title} className="bg-white">
              <Link
                href={audience.href}
                className="group flex h-full items-center gap-5 p-6 transition-colors duration-300 hover:bg-navy-950"
              >
                <span
                  aria-hidden
                  className="flex size-11 shrink-0 items-center justify-center border border-line font-mono text-[0.6875rem] text-gold-600 transition-colors group-hover:border-gold-500/40 group-hover:text-gold-400"
                >
                  ●
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.9375rem] leading-snug font-medium text-navy-900 transition-colors group-hover:text-white">
                    {audience.title}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] text-ink-muted transition-colors group-hover:text-navy-300">
                    {audience.short}
                  </span>
                </span>
                <ArrowRightIcon className="size-4 shrink-0 text-navy-200 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gold-500" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ----------------------------- Uzmanlik alanlari ------------------------- */

export function ExpertiseSection({ compact = false }: { compact?: boolean }) {
  const featured = expertiseAreas.find((area) => area.slug === "yangin-ve-endustriyel-hasar");
  const rest = expertiseAreas.filter((area) => area.slug !== featured?.slug);

  return (
    <Section id="uzmanlik-alanlari" size="lg">
      <div className="container-page">
        <SectionHeader
          eyebrow="Uzmanlık Alanlarımız"
          title="Yedi teknik alan, tek inceleme yapısı"
          action={
            !compact ? (
              <ButtonLink href={cta.primaryLong.href} variant="outline" withArrow>
                Dosya Ön İnceleme
              </ButtonLink>
            ) : undefined
          }
        />

        <div className="mt-14 space-y-6">
          {/* One cikan alan — genis illustrasyonlu blok */}
          {featured ? <FeaturedAreaCard slug={featured.slug} /> : null}

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((area) => {
              const Scene = areaScenes[area.icon as keyof typeof areaScenes];
              return (
                <li key={area.slug}>
                  <Link
                    href={`/uzmanlik-alanlari/${area.slug}`}
                    className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/25 hover:shadow-lift"
                  >
                    {/* Illustrasyon */}
                    <div className="relative overflow-hidden border-b border-line bg-surface px-5 pt-6 pb-2 text-navy-600">
                      <span className="absolute top-4 left-5 z-10 font-mono text-[0.6875rem] tracking-[0.2em] text-gold-600">
                        {area.index}
                      </span>
                      {Scene ? (
                        <Scene className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                      ) : null}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-[1.0625rem] leading-snug font-semibold text-navy-900">
                        {area.navTitle}
                      </h3>
                      <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-ink-soft">
                        {area.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-gold-700 uppercase">
                        İncele
                        <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function FeaturedAreaCard({ slug }: { slug: string }) {
  const area = expertiseAreas.find((item) => item.slug === slug);
  if (!area) return null;
  const Scene = areaScenes[area.icon as keyof typeof areaScenes];

  return (
    <Link
      href={`/uzmanlik-alanlari/${area.slug}`}
      className="group relative grid overflow-hidden border border-navy-900 bg-navy-950 text-navy-200 transition-shadow duration-300 hover:shadow-lift lg:grid-cols-[1fr_1.1fr]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gold-500/70" />

      <div className="relative flex flex-col justify-center p-8 sm:p-12">
        <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-gold-400">
          {area.index} — Öne çıkan alan
        </span>
        <h3 className="mt-5 font-display text-2xl leading-tight font-semibold text-white sm:text-[2rem]">
          {area.title}
        </h3>
        <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-navy-200">
          {area.summary}
        </p>
        <ul className="mt-7 flex flex-wrap gap-2">
          {["Hasar kapsamı", "Kullanılabilirlik", "Onarım maliyeti", "Rücu dosyası"].map((chip) => (
            <li
              key={chip}
              className="border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.08em] text-navy-200 uppercase"
            >
              {chip}
            </li>
          ))}
        </ul>
        <span className="mt-8 inline-flex items-center gap-2.5 font-mono text-[0.6875rem] tracking-[0.14em] text-gold-400 uppercase">
          {area.ctaLabel}
          <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>

      <div className="relative flex items-center border-t border-white/10 p-8 text-navy-200 sm:p-10 lg:border-t-0 lg:border-l">
        {Scene ? (
          <Scene className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]" />
        ) : null}
      </div>
    </Link>
  );
}

/* --------------------- Dosyanizda hangi teknik soru var? ----------------- */

export function TechnicalQuestionsSection() {
  const shown = technicalQuestions.slice(0, 8);
  return (
    <Section tone="navy" id="teknik-sorular" size="lg" className="overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-texture opacity-60" />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-600/20 blur-[150px]"
      />
      <div className="relative container-page">
        <SectionHeader
          dark
          align="center"
          eyebrow="Dosyanızda Hangi Teknik Soru Var?"
          title="Doğru soru, incelemenin başlangıcıdır"
        />

        <ul className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          {shown.map((item, index) => (
            <li key={item.question} className="bg-navy-900">
              <Link
                href={item.href}
                className="group flex h-full items-start gap-5 p-7 transition-colors duration-300 hover:bg-navy-800 sm:p-8"
              >
                <span className="font-mono text-[1.375rem] leading-none font-light text-navy-600 transition-colors group-hover:text-gold-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-[1.0625rem] leading-snug font-medium text-white sm:text-[1.125rem]">
                  {item.question}
                </span>
                <ArrowRightIcon className="mt-1 size-4 shrink-0 text-navy-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gold-500" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <ButtonLink href={cta.primaryLong.href} variant="gold" size="lg" withArrow>
            Dosyanızı Ön İncelemeye Gönderin
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------- Multidisipliner dosyalar -------------------- */

export function MultidisciplinarySection() {
  return (
    <Section tone="surface" id="multidisipliner" size="lg">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Sema */}
          <div className="order-2 border border-line bg-white p-8 text-navy-600 shadow-card sm:p-10 lg:order-1">
            <ConvergenceScene />
            <p className="mt-6 border-t border-line pt-5 text-center font-mono text-[0.6875rem] tracking-[0.12em] text-ink-muted uppercase">
              Örnek: fabrika yangını dosyası
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Multidisipliner İnceleme"
              title="Bazı dosyalar tek bir uzmanlık alanına sığmaz"
            />
            <p className="mt-8 border-l-2 border-gold-500 pl-6 font-display text-lg leading-relaxed font-medium text-navy-900">
              {multidisciplinaryApproach}
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {multidisciplinaryCases.map((item) => (
                <li key={item.title} className="border border-line bg-white p-5">
                  <p className="text-[0.9375rem] font-medium text-navy-900">{item.title}</p>
                  <p className="mt-2 font-mono text-[0.6875rem] leading-relaxed tracking-[0.06em] text-gold-700 uppercase">
                    {item.disciplines.join(" + ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Avukatlar icin -------------------------- */

export function LawyersSection() {
  return (
    <Section id="avukatlar-icin" size="lg">
      <div className="container-page">
        <div className="relative overflow-hidden border border-line bg-white">
          <div aria-hidden className="absolute inset-0 grid-texture-light opacity-70" />
          <div aria-hidden className="absolute inset-y-0 left-0 w-1 bg-gold-500" />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:p-16">
            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-5 flex items-center gap-3 text-gold-700">
                <span aria-hidden className="hidden h-px w-8 bg-current opacity-60 sm:block" />
                Avukatlar ve Hukuk Büroları
              </p>
              <h2 className="text-[1.75rem] leading-tight font-semibold sm:text-[2.125rem]">
                Hukuki taraf sizde, teknik taraf bizde
              </h2>
              <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
                Teknik soruların sistematik biçimde incelenmesini uzmanlarına bırakın.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={cta.primaryLong.href} size="lg" withArrow>
                  Dosya Gönderin
                </ButtonLink>
                <ButtonLink href="/avukatlar-icin" variant="outline" size="lg">
                  Detaylı Bilgi
                </ButtonLink>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-px bg-line lg:border-l lg:border-line">
              {expertiseAreas.map((area) => {
                const Icon = areaIcons[area.icon];
                return (
                  <li key={area.slug} className="bg-white">
                    <Link
                      href={`/uzmanlik-alanlari/${area.slug}`}
                      className="group flex h-full flex-col items-start gap-3 p-5 transition-colors hover:bg-surface"
                    >
                      <Icon className="size-7 text-navy-300 transition-colors group-hover:text-gold-600" />
                      <span className="text-[0.8125rem] leading-snug font-medium text-navy-900">
                        {area.shortTitle}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <li className="bg-surface-2">
                <Link
                  href="/uzmanlik-alanlari"
                  className="group flex h-full flex-col items-start justify-center gap-2 p-5"
                >
                  <span className="font-mono text-[0.6875rem] tracking-[0.12em] text-gold-700 uppercase">
                    Tümü
                  </span>
                  <ArrowRightIcon className="size-4 text-gold-600 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------- Kurumsal cozumler ------------------------- */

export function CorporateSection() {
  return (
    <Section tone="surface" id="kurumsal-cozumler" size="lg">
      <div className="container-page">
        <SectionHeader
          eyebrow="Kurumsal Çözümler"
          title="Sektörünüze göre çalışma modeli"
          action={
            <ButtonLink href={cta.corporate.href} variant="outline" withArrow>
              Kurumsal Görüşme
            </ButtonLink>
          }
        />

        <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {corporateSolutions.map((item) => {
            const Icon = areaIcons[item.icon];
            return (
              <li key={item.slug} className="bg-white">
                <Link
                  href={`/kurumsal-cozumler/${item.slug}`}
                  className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-navy-950"
                >
                  <Icon className="size-9 text-navy-300 transition-colors duration-300 group-hover:text-gold-500" />
                  <h3 className="mt-7 font-display text-[1rem] leading-snug font-semibold text-navy-900 transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.8125rem] leading-snug text-ink-muted transition-colors group-hover:text-navy-300">
                    {item.tagline}
                  </p>
                  <ArrowRightIcon className="mt-6 size-4 text-navy-200 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gold-500" />
                </Link>
              </li>
            );
          })}

          {/* Izgarayi tamamlayan CTA hucresi */}
          <li className="bg-surface-2">
            <Link
              href={cta.corporate.href}
              className="group flex h-full flex-col justify-center p-7 transition-colors duration-300 hover:bg-navy-950"
            >
              <span className="font-display text-[1rem] leading-snug font-semibold text-navy-900 transition-colors group-hover:text-white">
                Sektörünüz listede yok mu?
              </span>
              <span className="mt-2 text-[0.8125rem] leading-snug text-ink-muted transition-colors group-hover:text-navy-300">
                Çalışma modelini birlikte kuralım
              </span>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-gold-700 uppercase transition-colors group-hover:text-gold-400">
                Görüşme talebi
                <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}

/* ------------------------------ Nasil calisiyoruz ------------------------ */

export function ProcessSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <Section id="nasil-calisiyoruz" size="lg">
      <div className="container-page">
        <SectionHeader
          eyebrow="Nasıl Çalışıyoruz?"
          title="Başvurudan raporlamaya beş aşama"
          action={
            !detailed ? (
              <ButtonLink href="/nasil-calisiyoruz" variant="outline" withArrow>
                Süreci İncele
              </ButtonLink>
            ) : undefined
          }
        />

        {/* Gorsel zaman cizgisi */}
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-line lg:block"
          />
          {processSteps.map((step, index) => (
            <li key={step.step} className="group relative">
              <span
                aria-hidden
                className={cn(
                  "relative z-10 flex size-12 items-center justify-center border bg-white font-mono text-[0.9375rem] transition-all duration-300",
                  index === 0
                    ? "border-gold-500 text-gold-600"
                    : "border-line text-navy-300 group-hover:border-gold-500 group-hover:text-gold-600",
                )}
              >
                {step.step}
              </span>
              <h3 className="mt-6 font-display text-[1.0625rem] font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-soft">
                {detailed ? step.detail : step.summary}
              </p>
              {detailed ? (
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {step.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-2.5 text-[0.8125rem] text-ink-muted">
                      <span aria-hidden className="mt-[0.5em] size-1 shrink-0 rotate-45 bg-gold-500" />
                      {output}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* --------------------------- Raporlama yaklasimimiz ---------------------- */

export function ReportApproachSection({ full = false }: { full?: boolean }) {
  const shown = full ? reportPrinciples : reportPrinciples.slice(0, 3);
  return (
    <Section tone="navy-deep" size="lg" id="raporlama-yaklasimimiz" className="overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-texture opacity-50" />
      <div
        aria-hidden
        className="absolute -right-40 -bottom-40 size-[40rem] rounded-full bg-navy-600/20 blur-[140px]"
      />
      <div className="relative container-page">
        <SectionHeader
          dark
          align="center"
          eyebrow="Raporlama Yaklaşımımız"
          title="Sonuç cümlesi değil, gerekçelendirilmiş değerlendirme"
        />

        <ul className={cn("mt-14 grid gap-px bg-white/10 lg:grid-cols-3", full && "lg:grid-cols-3")}>
          {shown.map((principle, index) => (
            <li key={principle.title} className="bg-navy-950 p-8">
              <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-gold-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-[1.0625rem] font-semibold text-white">
                {principle.title}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-navy-200">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ------------------------------- Bilgi merkezi --------------------------- */

export function KnowledgeSection({ limit = 3 }: { limit?: number }) {
  const items = articles.slice(0, limit);
  return (
    <Section tone="surface" size="lg" id="bilgi-merkezi">
      <div className="container-page">
        <SectionHeader
          eyebrow="Bilgi Merkezi"
          title="İnceleme süreçlerine dair notlar"
          action={
            <ButtonLink href="/bilgi-merkezi" variant="outline" withArrow>
              Tümü
            </ButtonLink>
          }
        />

        <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
          {items.map((article) => (
            <li key={article.slug} className="bg-white">
              <Link
                href={`/bilgi-merkezi/${article.slug}`}
                className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-white/60"
              >
                <span className="eyebrow text-gold-700">{article.category}</span>
                <h3 className="mt-6 flex-1 font-display text-[1.125rem] leading-snug font-semibold text-navy-900">
                  {article.title}
                </h3>
                <span className="mt-8 flex items-center justify-between border-t border-line pt-5 font-mono text-[0.6875rem] tracking-[0.1em] text-ink-muted uppercase">
                  {article.readingMinutes} dk
                  <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
