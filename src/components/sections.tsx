import Link from "next/link";
import { audiences } from "@/content/audiences";
import { corporateSolutions } from "@/content/corporate";
import { expertiseAreas } from "@/content/expertise";
import { processSteps, reportPrinciples } from "@/content/process";
import {
  multidisciplinaryApproach,
  multidisciplinaryCases,
  multidisciplinaryIntro,
  technicalQuestions,
  technicalQuestionsNote,
} from "@/content/questions";
import { articles } from "@/content/knowledge";
import { cta } from "@/content/site";
import { cn } from "@/lib/cn";
import { areaIcons, ArrowRightIcon, CheckIcon, LayersIcon } from "./icons";
import { ButtonLink, Section, SectionHeader } from "./ui";

/* ------------------------- Kimlere hizmet veriyoruz ------------------------ */

export function AudiencesSection() {
  return (
    <Section tone="surface" id="kimlere-hizmet-veriyoruz">
      <div className="container-page">
        <SectionHeader
          eyebrow="Kimlere Hizmet Veriyoruz?"
          title="Teknik uzmanlık gerektiren dosyalarda kurumsal çözüm ortağı"
          description="Teminat Rapor; hukuk, sigorta, sanayi ve gayrimenkul alanındaki kurumsal yapıların yanı sıra bireysel başvuruları da dosya bazlı olarak değerlendirir."
        />

        <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <li key={audience.title} className="bg-white">
              <Link
                href={audience.href}
                className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-navy-950 sm:p-8"
              >
                <h3 className="font-display text-[1.0625rem] leading-snug font-semibold text-navy-900 transition-colors group-hover:text-white">
                  {audience.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft transition-colors group-hover:text-navy-200">
                  {audience.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-gold-700 uppercase transition-colors group-hover:text-gold-400">
                  Detay
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

/* ----------------------------- Uzmanlik alanlari --------------------------- */

export function ExpertiseSection({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="uzmanlik-alanlari" size="lg">
      <div className="container-page">
        <SectionHeader
          eyebrow="Uzmanlık Alanlarımız"
          title="Farklı teknik uzmanlıklar, tek bir inceleme yapısı"
          description="Her alan kendi teknik sorularıyla ele alınır. Dosya birden fazla uzmanlık gerektiriyorsa inceleme, bu alanların birlikte çalışacağı bir yapıda kurgulanır."
          action={
            !compact ? (
              <ButtonLink href={cta.primaryLong.href} variant="outline" size="md" withArrow>
                Dosya Ön İnceleme Talebi
              </ButtonLink>
            ) : undefined
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {expertiseAreas.map((area, index) => {
            const Icon = areaIcons[area.icon];
            const featured = area.slug === "yangin-ve-endustriyel-hasar";
            return (
              <article
                key={area.slug}
                className={cn(
                  "group relative flex flex-col overflow-hidden border transition-all duration-300",
                  featured
                    ? "border-navy-900 bg-navy-950 text-navy-200 lg:col-span-2"
                    : "border-line bg-white hover:border-navy-900/25 hover:shadow-lift",
                )}
              >
                {featured ? (
                  <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
                ) : null}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-px transition-opacity duration-300",
                    featured ? "bg-gold-500/70" : "bg-gold-500 opacity-0 group-hover:opacity-100",
                  )}
                />

                <div
                  className={cn(
                    "relative flex flex-1 flex-col p-7 sm:p-9",
                    featured && "lg:grid lg:grid-cols-[1.05fr_1fr] lg:gap-12",
                  )}
                >
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span
                          className={cn(
                            "font-mono text-[0.6875rem] tracking-[0.2em]",
                            featured ? "text-gold-400" : "text-gold-600",
                          )}
                        >
                          {area.index}
                        </span>
                        <h3
                          className={cn(
                            "mt-3 font-display text-xl leading-tight font-semibold sm:text-[1.375rem]",
                            featured && "text-white",
                          )}
                        >
                          {area.title}
                        </h3>
                      </div>
                      <Icon
                        className={cn(
                          "size-11 shrink-0 transition-colors duration-300",
                          featured
                            ? "text-gold-500"
                            : "text-navy-300 group-hover:text-gold-600",
                        )}
                      />
                    </div>

                    <p
                      className={cn(
                        "mt-5 text-[0.9375rem] leading-relaxed",
                        featured ? "text-navy-200" : "text-ink-soft",
                      )}
                    >
                      {area.description}
                    </p>

                    {featured ? (
                      <div className="mt-8 hidden lg:block">
                        <ExpertiseCta area={area.slug} label={area.ctaLabel} featured />
                      </div>
                    ) : null}
                  </div>

                  <div className={cn(featured ? "mt-8 lg:mt-0" : "mt-7 flex-1")}>
                    <p
                      className={cn(
                        "eyebrow mb-4",
                        featured ? "text-gold-400" : "text-ink-muted",
                      )}
                    >
                      Başlıca Konular
                    </p>
                    <ul
                      className={cn(
                        "grid gap-x-6 gap-y-2.5",
                        featured ? "sm:grid-cols-2" : "xs:grid-cols-2",
                      )}
                    >
                      {area.services.slice(0, featured ? 12 : 8).map((service) => (
                        <li
                          key={service}
                          className={cn(
                            "flex items-start gap-2.5 text-[0.8125rem] leading-snug",
                            featured ? "text-navy-200" : "text-ink-soft",
                          )}
                        >
                          <span aria-hidden className="mt-[0.5em] size-1 shrink-0 rotate-45 bg-gold-500" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    {area.services.length > (featured ? 12 : 8) ? (
                      <p
                        className={cn(
                          "mt-4 font-mono text-[0.6875rem] tracking-[0.1em]",
                          featured ? "text-navy-300" : "text-ink-muted",
                        )}
                      >
                        +{area.services.length - (featured ? 12 : 8)} konu başlığı
                      </p>
                    ) : null}
                  </div>
                </div>

                <div
                  className={cn(
                    "relative border-t px-7 py-5 sm:px-9",
                    featured ? "border-white/10 lg:hidden" : "border-line",
                  )}
                >
                  <ExpertiseCta area={area.slug} label={area.ctaLabel} featured={featured} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function ExpertiseCta({
  area,
  label,
  featured = false,
}: {
  area: string;
  label: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/uzmanlik-alanlari/${area}`}
      className={cn(
        "group/cta inline-flex items-center gap-2.5 font-mono text-[0.6875rem] tracking-[0.14em] uppercase transition-colors",
        featured ? "text-gold-400 hover:text-white" : "text-navy-700 hover:text-gold-700",
      )}
    >
      {label}
      <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover/cta:translate-x-1" />
    </Link>
  );
}

/* --------------------- Dosyanizda hangi teknik soru var? ------------------- */

export function TechnicalQuestionsSection() {
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
          title="Doğru teknik soru, incelemenin başlangıç noktasıdır"
          description={technicalQuestionsNote}
        />

        <ul className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {technicalQuestions.map((item, index) => (
            <li key={item.question} className="bg-navy-900">
              <Link
                href={item.href}
                className="group flex h-full flex-col gap-4 p-6 transition-colors duration-300 hover:bg-navy-800 sm:p-7"
              >
                <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-gold-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="flex-1 font-display text-[1.0625rem] leading-snug font-medium text-white">
                  {item.question}
                </p>
                <span className="inline-flex items-center gap-2 text-[0.75rem] text-navy-300 transition-colors group-hover:text-gold-400">
                  {item.area}
                  <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <ButtonLink href={cta.primaryLong.href} variant="gold" size="lg" withArrow>
            Dosyanızı Ön İncelemeye Gönderin
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------- Multidisipliner dosyalar ---------------------- */

export function MultidisciplinarySection() {
  return (
    <Section tone="surface" id="multidisipliner" size="lg">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Multidisipliner İnceleme"
              title="Bazı dosyalar tek bir uzmanlık alanına sığmaz"
              description={multidisciplinaryIntro}
            />

            <div className="mt-10 border-l-2 border-gold-500 bg-white p-7 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <LayersIcon className="size-6 text-gold-600" />
                <p className="eyebrow text-gold-700">Yaklaşımımız</p>
              </div>
              <p className="font-display text-lg leading-relaxed font-medium text-navy-900">
                {multidisciplinaryApproach}
              </p>
            </div>

            <div className="mt-8">
              <ButtonLink href="/nasil-calisiyoruz" variant="outline" withArrow>
                Çalışma Sürecini İncele
              </ButtonLink>
            </div>
          </div>

          <ul className="space-y-4">
            {multidisciplinaryCases.map((item) => (
              <li
                key={item.title}
                className="group border border-line bg-white p-6 transition-all duration-300 hover:border-navy-900/25 hover:shadow-card sm:p-7"
              >
                <h3 className="font-display text-[1.0625rem] font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-wrap items-center gap-2">
                  {item.disciplines.map((discipline, index) => (
                    <li key={discipline} className="flex items-center gap-2">
                      {index > 0 ? (
                        <span aria-hidden className="text-gold-500">
                          +
                        </span>
                      ) : null}
                      <span className="border border-line bg-surface px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.08em] text-navy-700 uppercase">
                        {discipline}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Avukatlar icin ---------------------------- */

const lawyerCategories = [
  { label: "Trafik ve Otomotiv", href: "/uzmanlik-alanlari/trafik-kazalari-ve-otomotiv" },
  { label: "Yangın ve Endüstriyel Hasar", href: "/uzmanlik-alanlari/yangin-ve-endustriyel-hasar" },
  { label: "İnşaat", href: "/uzmanlik-alanlari/insaat-ve-yapi" },
  { label: "Taşınmaz", href: "/uzmanlik-alanlari/tasinmaz-degerleme" },
  { label: "İş Kazası", href: "/uzmanlik-alanlari/is-kazalari" },
  { label: "Bilişim", href: "/uzmanlik-alanlari/bilisim-ve-siber-guvenlik" },
  { label: "İmza ve Belge", href: "/uzmanlik-alanlari/imza-ve-belge-inceleme" },
];

export function LawyersSection() {
  return (
    <Section id="avukatlar-icin" size="lg">
      <div className="container-page">
        <div className="relative overflow-hidden border border-line bg-white">
          <div aria-hidden className="absolute inset-0 grid-texture-light opacity-70" />
          <div aria-hidden className="absolute inset-y-0 left-0 w-1 bg-gold-500" />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:p-16">
            <div>
              <p className="eyebrow mb-5 flex items-center gap-3 text-gold-700">
                <span aria-hidden className="hidden h-px w-8 bg-current opacity-60 sm:block" />
                Avukatlar ve Hukuk Büroları
              </p>
              <h2 className="text-[1.75rem] leading-tight font-semibold sm:text-[2.125rem] lg:text-[2.375rem]">
                Teknik uzmanlık gerektiren dosyalarınız için
              </h2>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
                Uyuşmazlığın hukuki tarafını siz yönetin, teknik soruların sistematik
                biçimde incelenmesini uzmanlarına bırakın.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  "Dosyanın teknik soruları baştan netleştirilir.",
                  "İnceleme kapsamı ve sınırları yazılı olarak belirlenir.",
                  "Bulgular gerekçeleriyle birlikte raporlanır.",
                  "Birden fazla uzmanlık gerektiren dosyalar tek yapı içinde yürütülür.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-ink-soft">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={cta.primaryLong.href} size="lg" withArrow>
                  Dosya Ön İnceleme Talebi
                </ButtonLink>
                <ButtonLink href="/avukatlar-icin" variant="outline" size="lg">
                  Avukatlar İçin Sayfası
                </ButtonLink>
              </div>
            </div>

            <div className="lg:border-l lg:border-line lg:pl-14">
              <p className="eyebrow mb-6 text-ink-muted">Gönderebileceğiniz Dosya Kategorileri</p>
              <ul className="space-y-px bg-line">
                {lawyerCategories.map((category, index) => (
                  <li key={category.href} className="bg-white">
                    <Link
                      href={category.href}
                      className="group flex items-center justify-between gap-4 bg-white py-4 pr-2 transition-colors hover:bg-surface"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[0.6875rem] text-gold-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.9375rem] font-medium text-navy-900">
                          {category.label}
                        </span>
                      </span>
                      <ArrowRightIcon className="size-4 shrink-0 text-navy-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gold-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------- Kurumsal cozumler --------------------------- */

export function CorporateSection() {
  return (
    <Section tone="surface" id="kurumsal-cozumler" size="lg">
      <div className="container-page">
        <SectionHeader
          eyebrow="Kurumsal Çözümler"
          title="Kurumsal yapılar için dosya bazlı ve sürekli teknik inceleme"
          description="Tekil dosyalarda uzman görüşü, tekrar eden dosyalarda ise standart inceleme formatıyla sürekli çalışma modeli kurulabilir."
          action={
            <ButtonLink href={cta.corporate.href} variant="outline" withArrow>
              Kurumsal Çalışma Talebi
            </ButtonLink>
          }
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {corporateSolutions.map((item) => {
            const Icon = areaIcons[item.icon];
            return (
              <li key={item.slug}>
                <Link
                  href={`/kurumsal-cozumler/${item.slug}`}
                  className="group flex h-full flex-col border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-lift"
                >
                  <Icon className="size-9 text-navy-300 transition-colors duration-300 group-hover:text-gold-600" />
                  <h3 className="mt-6 font-display text-[1.0625rem] leading-snug font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {item.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-gold-700 uppercase">
                    İncele
                    <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/* ------------------------------ Nasil calisiyoruz -------------------------- */

export function ProcessSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <Section id="nasil-calisiyoruz" size="lg">
      <div className="container-page">
        <SectionHeader
          eyebrow="Nasıl Çalışıyoruz?"
          title="Başvurudan raporlamaya beş aşama"
          description="Her aşamanın çıktısı bellidir. Dosyanın kapsamı, incelenebilirliği ve sınırları süreç içinde açıkça tanımlanır."
          action={
            !detailed ? (
              <ButtonLink href="/nasil-calisiyoruz" variant="outline" withArrow>
                Süreci Ayrıntılı İncele
              </ButtonLink>
            ) : undefined
          }
        />

        <ol className="mt-14 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.step} className="group relative flex flex-col bg-white p-7 transition-colors duration-300 hover:bg-surface">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="font-mono text-[2rem] leading-none font-light text-navy-200 transition-colors duration-300 group-hover:text-gold-500">
                {step.step}
              </span>
              <h3 className="mt-6 font-display text-[1.0625rem] font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
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

/* --------------------------- Raporlama yaklasimimiz ------------------------ */

export function ReportApproachSection() {
  return (
    <Section tone="navy-deep" size="lg" id="raporlama-yaklasimimiz" className="overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-texture opacity-50" />
      <div
        aria-hidden
        className="absolute -right-40 -bottom-40 size-[40rem] rounded-full bg-navy-600/20 blur-[140px]"
      />
      <div className="relative container-page">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeader
            dark
            eyebrow="Raporlama Yaklaşımımız"
            title="Rapor, bir sonuç cümlesi değil; gerekçelendirilmiş bir değerlendirmedir"
            description="Teknik değerlendirmenin değeri, ulaştığı sonucun nasıl gerekçelendirildiğiyle ölçülür. Her tespitin dayanağı gösterilir, kapsam ve sınırlar açıkça belirtilir."
          />

          <ul className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {reportPrinciples.map((principle, index) => (
              <li key={principle.title} className="bg-navy-950 p-7">
                <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-gold-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-navy-200">
                  {principle.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Bilgi merkezi ----------------------------- */

export function KnowledgeSection({ limit = 3 }: { limit?: number }) {
  const items = articles.slice(0, limit);
  return (
    <Section tone="surface" size="lg" id="bilgi-merkezi">
      <div className="container-page">
        <SectionHeader
          eyebrow="Bilgi Merkezi"
          title="Teknik inceleme süreçlerine dair notlar"
          description="Dosya hazırlığı, inceleme kapsamı ve teknik değerlendirmenin sınırlarına ilişkin açıklayıcı içerikler."
          action={
            <ButtonLink href="/bilgi-merkezi" variant="outline" withArrow>
              Tüm İçerikler
            </ButtonLink>
          }
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/bilgi-merkezi/${article.slug}`}
                className="group flex h-full flex-col border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-lift"
              >
                <span className="eyebrow text-gold-700">{article.category}</span>
                <h3 className="mt-5 font-display text-[1.0625rem] leading-snug font-semibold text-navy-900">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {article.summary}
                </p>
                <span className="mt-6 flex items-center justify-between border-t border-line pt-5 font-mono text-[0.6875rem] tracking-[0.1em] text-ink-muted uppercase">
                  {article.readingMinutes} dk okuma
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
