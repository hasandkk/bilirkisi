import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav aria-label="Sayfa yolu">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
        <li>
          <Link
            href="/"
            className={cn(
              "transition-colors",
              dark ? "text-navy-300 hover:text-white" : "text-ink-muted hover:text-navy-900",
            )}
          >
            Ana Sayfa
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2.5">
            <span aria-hidden className={dark ? "text-gold-500/60" : "text-gold-600/60"}>
              /
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors",
                  dark ? "text-navy-300 hover:text-white" : "text-ink-muted hover:text-navy-900",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className={dark ? "text-gold-400" : "text-gold-700"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(items: Crumb[]) {
  const all = [{ label: "Ana Sayfa", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  };
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  aside,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  crumbs: Crumb[];
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div aria-hidden className="absolute inset-0 grid-texture opacity-60" />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 size-[36rem] rounded-full bg-navy-600/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />

      <div className="relative container-page py-14 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} dark />

        <div
          className={cn(
            "mt-9 gap-12",
            aside ? "grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-16" : "",
          )}
        >
          <div className={aside ? "" : "max-w-4xl"}>
            {eyebrow ? (
              <p className="eyebrow mb-5 flex items-center gap-3 text-gold-400">
                <span aria-hidden className="hidden h-px w-8 bg-current opacity-60 sm:block" />
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-[2rem] leading-[1.12] font-semibold text-white sm:text-[2.5rem] lg:text-[2.875rem]">
              {title}
            </h1>
            {description ? (
              <div className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-navy-200">
                {description}
              </div>
            ) : null}
            {children ? <div className="mt-9">{children}</div> : null}
          </div>
          {aside ? <div className="lg:pt-2">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
