import { faqItems, type FaqItem } from "@/content/faq";
import { PlusIcon } from "./icons";
import { Section, SectionHeader } from "./ui";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors hover:text-navy-600 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[1.0625rem] leading-snug font-medium text-navy-900 sm:text-[1.125rem]">
              {item.question}
            </h3>
            <span
              aria-hidden
              className="mt-0.5 flex size-7 shrink-0 items-center justify-center border border-line text-gold-600 transition-all duration-300 group-open:rotate-45 group-open:border-gold-500 group-open:bg-gold-500 group-open:text-navy-950"
            >
              <PlusIcon className="size-3.5" />
            </span>
          </summary>
          <div className="pr-12 pb-7">
            <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-ink-soft">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({ items = faqItems }: { items?: FaqItem[] }) {
  return (
    <Section id="sikca-sorulan-sorular" size="lg">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader
            eyebrow="Sık Sorulan Sorular"
            title="Süreç, kapsam ve sınırlar"
            description="Başvuru öncesinde en sık sorulan konular ve hizmetin kapsamına ilişkin açıklamalar."
          />
          <FaqList items={items} />
        </div>
      </div>
    </Section>
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
