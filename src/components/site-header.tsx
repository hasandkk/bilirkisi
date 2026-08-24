"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { contact, cta, primaryNav, site } from "@/content/site";
import { Logo } from "./logo";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header className="relative z-50">
      {/* Ust bilgi seridi */}
      <div className="hidden bg-navy-950 text-navy-200 lg:block">
        <div className="container-page flex h-10 items-center justify-between">
          <p className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase">
            {site.coverage} · Teknik inceleme, uzman görüşü ve raporlama
          </p>
          <div className="flex items-center gap-7 text-[0.8125rem]">
            <a
              href={`tel:${contact.phoneHref}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <PhoneIcon className="size-3.5 text-gold-500" />
              {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <MailIcon className="size-3.5 text-gold-500" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Ana bar */}
      <div
        className={cn(
          "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "border-line shadow-header" : "border-transparent",
        )}
      >
        <div className="container-page flex h-18 items-center justify-between gap-6 lg:h-20">
          <Logo />

          <nav aria-label="Ana menü" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative inline-flex h-20 items-center px-3 text-[0.8125rem] font-medium tracking-[-0.005em] transition-colors",
                          active ? "text-navy-900" : "text-ink-soft hover:text-navy-900",
                        )}
                      >
                        {item.label}
                        {active ? (
                          <span
                            aria-hidden
                            className="absolute inset-x-3 bottom-0 h-0.5 bg-gold-500"
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                }
                const open = openMenu === item.href;
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose();
                      setOpenMenu(item.href);
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={open}
                      onFocus={() => setOpenMenu(item.href)}
                      className={cn(
                        "relative inline-flex h-20 items-center gap-1.5 px-3 text-[0.8125rem] font-medium transition-colors",
                        active ? "text-navy-900" : "text-ink-soft hover:text-navy-900",
                      )}
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 10 6"
                        aria-hidden
                        className={cn(
                          "size-2 transition-transform duration-200",
                          open && "rotate-180",
                        )}
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-3 bottom-0 h-0.5 bg-gold-500"
                        />
                      ) : null}
                    </Link>

                    <div
                      className={cn(
                        "absolute top-full left-0 w-80 origin-top-left transition-all duration-200",
                        open
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0",
                      )}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="mt-0 border border-line bg-white p-2 shadow-lift">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex items-center justify-between gap-3 px-4 py-3 text-[0.8125rem] text-ink-soft transition-colors hover:bg-surface hover:text-navy-900"
                          >
                            {child.label}
                            <ArrowRightIcon className="size-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-60" />
                          </Link>
                        ))}
                        <Link
                          href={item.href}
                          className="mt-1 block border-t border-line px-4 py-3 font-mono text-[0.6875rem] tracking-[0.12em] text-gold-700 uppercase transition-colors hover:text-navy-900"
                        >
                          Tümünü Gör
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={cta.secondary.href}
              className="hidden h-11 items-center border border-navy-900/20 px-4 text-[0.8125rem] font-medium text-navy-900 transition-colors hover:border-navy-900/45 hover:bg-navy-900/[0.035] 2xl:inline-flex"
            >
              {cta.secondary.label}
            </Link>
            <Link
              href={cta.primary.href}
              className="group hidden h-11 items-center gap-2 bg-navy-900 px-5 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-white uppercase transition-colors hover:bg-navy-700 sm:inline-flex"
            >
              {cta.primary.label}
              <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-expanded={mobileOpen}
              aria-controls="mobil-menu"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              className="inline-flex size-11 items-center justify-center border border-line text-navy-900 transition-colors hover:bg-surface xl:hidden"
            >
              <span className="sr-only">Menü</span>
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M3.5 7h17M3.5 12h17M3.5 17h17" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menu */}
      <div
        id="mobil-menu"
        className={cn(
          "fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-line bg-white transition-all duration-300 xl:hidden",
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobil menü" className="container-page py-6">
          <ul className="divide-y divide-line">
            {primaryNav.map((item) => (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between py-3.5 text-[0.9375rem] font-medium",
                    isActive(item.href) ? "text-navy-900" : "text-ink-soft",
                  )}
                >
                  {item.label}
                  <ArrowRightIcon className="size-4 opacity-40" />
                </Link>
                {item.children ? (
                  <ul className="mb-3 space-y-0.5 border-l border-line pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-[0.8125rem] text-ink-muted transition-colors hover:text-navy-900"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href={cta.primary.href}
              className="inline-flex h-13 items-center justify-center gap-2 bg-navy-900 px-6 font-mono text-[0.6875rem] tracking-[0.12em] text-white uppercase"
            >
              {cta.primaryLong.label}
              <ArrowRightIcon className="size-3.5" />
            </Link>
            <Link
              href={cta.secondary.href}
              className="inline-flex h-13 items-center justify-center border border-navy-900/20 px-6 text-[0.9375rem] font-medium text-navy-900"
            >
              {cta.secondary.label}
            </Link>
          </div>

          <div className="mt-8 space-y-3 border-t border-line pt-6 text-[0.875rem] text-ink-soft">
            <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-3">
              <PhoneIcon className="size-4 text-gold-600" />
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3">
              <MailIcon className="size-4 text-gold-600" />
              {contact.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
