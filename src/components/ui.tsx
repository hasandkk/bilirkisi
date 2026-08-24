import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "./icons";

/* ---------------------------------- Button --------------------------------- */

type ButtonVariant = "primary" | "gold" | "outline" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "group inline-flex items-center justify-center gap-2.5 font-medium tracking-[-0.01em] transition-all duration-200 disabled:opacity-55 disabled:pointer-events-none";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-700 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] hover:shadow-lift",
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 font-semibold",
  outline:
    "border border-navy-900/20 text-navy-900 hover:border-navy-900/45 hover:bg-navy-900/[0.035]",
  light:
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/45",
  ghost: "text-navy-700 hover:text-navy-900 hover:bg-navy-900/[0.04]",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-[0.8125rem]",
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-7 text-[0.9375rem] sm:text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
}) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRightIcon className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      ) : null}
    </>
  );
  const classes = cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);

  if (external) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/* --------------------------------- Section --------------------------------- */

export function Section({
  children,
  id,
  tone = "white",
  className,
  size = "md",
}: {
  children: ReactNode;
  id?: string;
  tone?: "white" | "surface" | "navy" | "navy-deep";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface",
    navy: "bg-navy-900 text-navy-100",
    "navy-deep": "bg-navy-950 text-navy-100",
  };
  const sizes = {
    sm: "py-14 sm:py-16",
    md: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-32",
  };
  return (
    <section id={id} className={cn("relative", tones[tone], sizes[size], className)}>
      {children}
    </section>
  );
}

/* ------------------------------ Section header ----------------------------- */

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  action,
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  action?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        action && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        {eyebrow ? (
          <p
            className={cn(
              "eyebrow mb-4 flex items-center gap-3",
              align === "center" && "justify-center",
              dark ? "text-gold-400" : "text-gold-600",
            )}
          >
            <span aria-hidden className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </p>
        ) : null}
        <Heading
          className={cn(
            "text-[1.75rem] leading-[1.15] font-semibold sm:text-[2.125rem] lg:text-[2.5rem]",
            dark && "text-white",
          )}
        >
          {title}
        </Heading>
        {description ? (
          <div
            className={cn(
              "mt-5 text-[1.0625rem] leading-relaxed",
              dark ? "text-navy-200" : "text-ink-soft",
            )}
          >
            {description}
          </div>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

/* ----------------------------------- Card ---------------------------------- */

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-sm border border-line bg-white p-6 shadow-card transition-all duration-300 sm:p-7",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------- Bullet list --------------------------------- */

export function BulletList({
  items,
  columns = 1,
  dark = false,
  className,
}: {
  items: string[];
  columns?: 1 | 2 | 3;
  dark?: boolean;
  className?: string;
}) {
  const cols = {
    1: "",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
  };
  return (
    <ul className={cn("grid gap-x-8 gap-y-3", cols[columns], className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-3 text-[0.9375rem] leading-relaxed",
            dark ? "text-navy-200" : "text-ink-soft",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "mt-[0.6em] size-1.5 shrink-0 rotate-45",
              dark ? "bg-gold-500" : "bg-gold-500",
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* --------------------------------- Note box -------------------------------- */

export function NoteBox({
  children,
  title = "Kapsam ve sınırlar",
  dark = false,
}: {
  children: ReactNode;
  title?: string;
  dark?: boolean;
}) {
  return (
    <aside
      className={cn(
        "rounded-sm border-l-2 border-gold-500 p-5 sm:p-6",
        dark ? "bg-white/[0.04]" : "bg-surface",
      )}
    >
      <p className={cn("eyebrow mb-2.5", dark ? "text-gold-400" : "text-gold-700")}>
        {title}
      </p>
      <div
        className={cn(
          "text-[0.9375rem] leading-relaxed",
          dark ? "text-navy-200" : "text-ink-soft",
        )}
      >
        {children}
      </div>
    </aside>
  );
}

/* -------------------------------- Stat / meta ------------------------------ */

export function MetaRow({
  items,
  dark = false,
}: {
  items: { label: string; value: string }[];
  dark?: boolean;
}) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="border-t border-current/15 pt-4">
          <dt className={cn("eyebrow mb-2", dark ? "text-gold-400" : "text-gold-700")}>
            {item.label}
          </dt>
          <dd
            className={cn(
              "font-display text-[0.9375rem] leading-snug font-medium",
              dark ? "text-white" : "text-navy-900",
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
