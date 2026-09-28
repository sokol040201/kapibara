"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { NAV, SOCIAL, cities, type CityId } from "@/lib/site";
import { useCity } from "@/components/CityProvider";

function SocialIcon({ id }: { id: string }) {
  if (id === "telegram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M21.8 4.2 3.7 11.2c-1.2.5-1.2 1.1-.2 1.4l4.6 1.4 1.8 5.4c.2.6.1.9.8.9.5 0 .7-.2 1-.6l2.3-3.5 4.8 3.5c.9.5 1.5.2 1.7-.8L23 5.5c.3-1.2-.4-1.7-1.2-1.3ZM9.2 14.6l-.3 3.6 1.8-2.4 7.9-7.1-9.4 5.9Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2.1A9.9 9.9 0 0 0 2.1 12c0 1.7.4 3.4 1.3 4.9L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2.1Zm5.7 14.1c-.2.7-1.3 1.2-2.1 1.4-.5.1-1.2.2-3.5-.7-2.9-1.2-4.8-4.2-4.9-4.4-.2-.2-1.3-1.7-1.3-3.3 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.8 2c.1.3.1.4 0 .6l-.4.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1.2c.2-.2.4-.2.6-.1l2.1 1c.2.1.4.2.5.3.1.2.1.8-.1 1.5Z" />
    </svg>
  );
}

function CitySelect({
  onHero,
  cityId,
  cityName,
  onChange,
}: {
  onHero: boolean;
  cityId: CityId;
  cityName: string;
  onChange: (id: CityId) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id="city-select"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className={`flex h-9 items-center gap-1.5 rounded-full px-3 text-sm outline-none transition-all sm:h-10 sm:px-4 ${
          onHero
            ? "border border-white bg-transparent text-white hover:bg-white/10"
            : "bg-chip-dark text-white hover:bg-blue"
        }`}
      >
        <span className="max-w-[7.5rem] truncate sm:max-w-none">{cityName}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby="city-select"
          className="absolute left-0 top-[calc(100%+6px)] z-50 min-w-full overflow-hidden rounded-2xl border border-border/30 bg-white p-1 shadow-service-card"
        >
          {Object.values(cities).map((c) => {
            const selected = c.id === cityId;
            return (
              <li key={c.id} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(c.id);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    selected
                      ? "bg-blue text-white"
                      : "text-black hover:bg-canvas"
                  }`}
                >
                  {c.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Header({ variant = "light" }: { variant?: "light" | "hero" }) {
  const pathname = usePathname();
  const { city, cityId, setCityId, openLead } = useCity();
  const onHero = variant === "hero";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const socialHref = (item: (typeof SOCIAL)[number]) => {
    if ("href" in item) return item.href;
    if ("type" in item && item.type === "whatsapp") {
      return `https://wa.me/${city.phoneTel.replace(/\D/g, "")}`;
    }
    return city.telegram ?? "#";
  };

  const linkIdle = onHero
    ? "text-white/80 hover:bg-white/10 hover:text-white"
    : "text-text-secondary hover:bg-canvas hover:text-black";
  const linkActive = onHero ? "bg-white/15 text-white" : "bg-canvas text-black";

  return (
    <header
      className={`relative z-40 flex min-h-14 w-full items-center justify-between gap-2 sm:min-h-16 sm:gap-4 ${
        onHero ? "text-white" : "text-black"
      }`}
    >
      <div className="flex min-w-0 items-center gap-2 md:gap-4">
        <Link href="/" className="shrink-0 text-lg font-bold tracking-[-0.64px] sm:text-xl">
          Капибара
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-2 text-sm transition-all ${
                  active ? linkActive : linkIdle
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
        <div className="hidden items-center gap-1.5 md:flex">
          {SOCIAL.map((item) => (
            <a
              key={item.id}
              href={socialHref(item)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                onHero
                  ? "border border-white/80 text-white hover:border-white hover:bg-white/15"
                  : "bg-canvas text-black hover:bg-blue hover:text-white"
              }`}
            >
              <SocialIcon id={item.id} />
            </a>
          ))}
        </div>

        <CitySelect
          onHero={onHero}
          cityId={cityId}
          cityName={city.name}
          onChange={setCityId}
        />

        <a
          href={`tel:${city.phoneTel}`}
          className={`hidden font-medium lg:inline ${onHero ? "text-white" : "text-black"}`}
        >
          {city.phone}
        </a>

        <button
          type="button"
          onClick={() => openLead("once")}
          className={`hidden h-10 items-center justify-center rounded-full px-6 text-base transition-all md:inline-flex ${
            onHero
              ? "border border-white bg-transparent text-white hover:bg-white hover:text-black"
              : "bg-blue text-white hover:bg-blue-hover"
          }`}
        >
          Рассчитать
        </button>

        <button
          type="button"
          className={`flex h-9 w-9 items-center justify-center rounded-full lg:hidden sm:h-10 sm:w-10 ${
            onHero ? "border border-white/80 text-white" : "bg-canvas text-black"
          }`}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-3xl p-4 shadow-service-card lg:hidden ${
            onHero ? "bg-white text-black" : "border border-border/40 bg-white"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                    active ? "bg-blue text-white" : "bg-canvas text-black hover:bg-blue-wash"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-3 flex gap-2">
            {SOCIAL.map((item) => (
              <a
                key={item.id}
                href={socialHref(item)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-canvas text-sm font-medium"
              >
                <SocialIcon id={item.id} />
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={`tel:${city.phoneTel}`}
            className="mt-3 flex h-12 items-center justify-center rounded-2xl bg-canvas text-base font-medium"
          >
            {city.phone}
          </a>

          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openLead("once");
            }}
            className="mt-3 flex h-12 w-full items-center justify-center rounded-2xl bg-blue text-base font-medium text-white"
          >
            Рассчитать
          </button>
        </div>
      )}
    </header>
  );
}
