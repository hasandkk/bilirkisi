import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

export function LogoMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const frame = tone === "dark" ? "#0B1628" : "#FFFFFF";
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-9", className)}
      aria-hidden
      fill="none"
    >
      <rect x="0.7" y="0.7" width="38.6" height="38.6" rx="2" stroke={frame} strokeOpacity=".9" strokeWidth="1.4" />
      <path d="M8 8h9M8 8v9" stroke="#C7A35A" strokeWidth="1.6" strokeLinecap="square" />
      <path d="M32 32h-9M32 32v-9" stroke="#C7A35A" strokeWidth="1.6" strokeLinecap="square" />
      <path
        d="M10.5 25.5 16 19l4.5 4 8.5-11"
        stroke={frame}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="19" r="1.9" fill={frame} />
      <circle cx="20.5" cy="23" r="1.9" fill="#C7A35A" />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className,
  withTagline = false,
}: {
  tone?: "dark" | "light";
  className?: string;
  withTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${site.nameTitleCase} — Ana Sayfa`}
    >
      <LogoMark tone={tone} className="size-9 shrink-0 transition-transform duration-300 group-hover:scale-[1.04]" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.9375rem] leading-none font-semibold tracking-[0.14em] sm:text-base",
            tone === "dark" ? "text-navy-900" : "text-white",
          )}
        >
          TEMİNAT<span className="text-gold-500"> RAPOR</span>
        </span>
        {withTagline ? (
          <span
            className={cn(
              "mt-2 font-mono text-[0.5625rem] leading-none tracking-[0.14em] uppercase",
              tone === "dark" ? "text-ink-muted" : "text-navy-300",
            )}
          >
            Teknik İnceleme ve Raporlama
          </span>
        ) : null}
      </span>
    </Link>
  );
}
