import type { ReactNode } from "react";
import { PageHero, type Crumb } from "./page-hero";
import { Section } from "./ui";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  crumbs,
  updated,
  sections,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  updated: string;
  sections: LegalSection[];
  footer?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} crumbs={crumbs}>
        <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-navy-300 uppercase">
          Son güncelleme: {updated}
        </p>
      </PageHero>

      <Section>
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <ol className="mb-14 border border-line bg-surface p-7">
              <p className="eyebrow mb-5 text-gold-700">İçindekiler</p>
              <ul className="space-y-2.5">
                {sections.map((section, index) => (
                  <li key={section.heading}>
                    <a
                      href={`#bolum-${index + 1}`}
                      className="flex items-baseline gap-3 text-[0.9375rem] text-ink-soft transition-colors hover:text-navy-900"
                    >
                      <span className="font-mono text-[0.6875rem] text-gold-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </ol>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <section key={section.heading} id={`bolum-${index + 1}`}>
                  <h2 className="flex items-baseline gap-4 font-display text-xl font-semibold text-navy-900">
                    <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-gold-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink-soft"
                        >
                          <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-gold-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            {footer ? <div className="mt-14 border-t border-line pt-10">{footer}</div> : null}
          </div>
        </div>
      </Section>
    </>
  );
}
