"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { NAV, SOCIAL, cities, type CityId } from "@/lib/site";
import { useCity } from "@/components/CityProvider";
import { asset } from "@/lib/asset";

function SocialIcon({ id }: { id: string }) {
  if (id === "telegram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M21.5 3.4 2.9 10.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.9 5.8c.2.7.1 1 .8 1 .5 0 .8-.2 1.1-.6l2.4-3.7 5 3.7c.9.5 1.6.2 1.8-.9L23.7 4.7c.3-1.3-.5-1.9-1.3-1.4l-.9.1ZM9.3 14.7l-.3 3.8 1.9-2.6 8.2-7.4-9.8 6.2Z" />
      </svg>
    );
  }
  if (id === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.08 6.46 2.08 11.95c0 1.76.46 3.47 1.34 4.98L2 22l5.21-1.37a9.9 9.9 0 0 0 4.83 1.23h.01c5.49 0 9.96-4.46 9.96-9.95a9.87 9.87 0 0 0-2.96-7ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.52 3.68-8.2 8.21-8.2a8.16 8.16 0 0 1 5.81 2.41 8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.2 8.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.09-.39-.12-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    );
  }
  if (id === "max") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M4.5 18.5V5.5h3.6l3.15 8.1 3.15-8.1H17.9v13h-3.05v-8.35L11.55 17.6H9.7L6.55 10.15V18.5H4.5Z" />
      </svg>
    );
  }
  if (id === "vk") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2Zm3.08 14.27h-1.46c-.55 0-.72-.45-1.7-1.45-.86-.82-1.24-.93-1.45-.93-.3 0-.38.08-.38.5v1.33c0 .36-.12.58-1.04.58-1.54 0-3.24-.93-4.44-2.67C6.08 11.2 5.5 9.1 5.5 8.74c0-.2.08-.38.5-.38h1.46c.37 0 .51.17.66.57.73 2.11 1.96 3.96 2.46 3.96.19 0 .28-.09.28-.57V10.4c-.06-.98-.57-1.06-.57-1.41 0-.17.14-.34.37-.34h2.3c.31 0 .42.17.42.54v3.05c0 .31.14.42.23.42.19 0 .34-.11.69-.46.97-1.09 1.66-2.78 1.66-2.78.09-.17.26-.34.63-.34h1.46c.44 0 .53.23.44.54-.18.82-1.95 3.36-1.95 3.36-.16.25-.22.37 0 .65.16.22 1.4 1.37 1.4 1.37.4.54.22 1.04-.33 1.04Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2.1A9.9 9.9 0 0 0 2.1 12c0 1.7.4 3.4 1.3 4.9L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2.1Z" />
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
            : "bg-blue text-white hover:bg-blue-hover"
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroLook = onHero && !scrolled;

  const headerSocial = SOCIAL.filter((item) => item.id !== "vk");

  const socialHref = (item: (typeof SOCIAL)[number]) => {
    if ("href" in item) return item.href;
    if ("type" in item && item.type === "whatsapp") {
      return `https://wa.me/${city.phoneTel.replace(/\D/g, "")}`;
    }
    return city.telegram ?? "#";
  };

  const linkIdle = heroLook
    ? "text-white/80 hover:bg-white/10 hover:text-white"
    : "text-text-secondary hover:bg-canvas hover:text-black";
  const linkActive = heroLook ? "bg-white/15 text-white" : "bg-canvas text-black";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color,padding] duration-200 ${
          heroLook
            ? "bg-transparent text-white"
            : "bg-white/95 text-black shadow-[0_1px_0_rgb(0_0_0/0.06)] backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex min-h-14 w-full max-w-[1392px] items-center justify-between gap-2 px-4 sm:min-h-16 sm:gap-4 md:px-8">
          <div className="flex min-w-0 items-center gap-2 md:gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-2.5">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10 ${
                  heroLook ? "bg-white/15" : "bg-blue"
                }`}
              >
                <Image
                  src={asset("/logo.png")}
                  alt="Капибара"
                  width={40}
                  height={40}
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                  priority
                />
              </span>
              <span className="text-lg font-bold tracking-[-0.64px] sm:text-xl">Капибара</span>
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

          <div className="relative flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <div className="hidden items-center gap-1.5 md:flex">
              {headerSocial.map((item) => (
                <a
                  key={item.id}
                  href={socialHref(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                    heroLook
                      ? "border border-white/80 text-white hover:border-white hover:bg-white/15"
                      : "bg-canvas text-black hover:bg-blue hover:text-white"
                  }`}
                >
                  <SocialIcon id={item.id} />
                </a>
              ))}
            </div>

            <CitySelect
              onHero={heroLook}
              cityId={cityId}
              cityName={city.name}
              onChange={setCityId}
            />

            <a
              href={`tel:${city.phoneTel}`}
              className={`hidden font-medium lg:inline ${heroLook ? "text-white" : "text-black"}`}
            >
              {city.phone}
            </a>

            <button
              type="button"
              onClick={() => openLead("once")}
              className={`btn-shimmer hidden h-10 items-center justify-center rounded-full px-6 text-base transition-all md:inline-flex ${
                heroLook
                  ? "border border-white bg-transparent text-white hover:bg-white hover:text-black"
                  : "bg-blue text-white hover:bg-blue-hover"
              }`}
            >
              <span className="relative z-[2]">Рассчитать</span>
            </button>

            <button
              type="button"
              className={`flex h-9 w-9 items-center justify-center rounded-full lg:hidden sm:h-10 sm:w-10 ${
                heroLook ? "border border-white/80 text-white" : "bg-canvas text-black"
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

            {menuOpen && (
              <div
                className={`absolute right-0 top-[calc(100%+8px)] z-50 w-[min(100vw-2rem,24rem)] rounded-3xl p-4 shadow-service-card lg:hidden ${
                  heroLook ? "bg-white text-black" : "border border-border/40 bg-white"
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

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {headerSocial.map((item) => (
                    <a
                      key={item.id}
                      href={socialHref(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-canvas text-sm font-medium"
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
          </div>
        </div>
      </header>
      <div className="h-14 shrink-0 sm:h-16" aria-hidden />
    </>
  );
}
