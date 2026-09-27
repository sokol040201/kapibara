"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SOCIAL, cities } from "@/lib/site";
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

export function Header({ variant = "light" }: { variant?: "light" | "hero" }) {
  const pathname = usePathname();
  const { city, cityId, setCityId, openLead } = useCity();
  const onHero = variant === "hero";

  const socialHref = (item: (typeof SOCIAL)[number]) => {
    if ("href" in item) return item.href;
    if ("type" in item && item.type === "whatsapp") {
      return `https://wa.me/${city.phoneTel.replace(/\D/g, "")}`;
    }
    return city.telegram ?? "#";
  };

  return (
    <header
      className={`z-40 flex min-h-16 w-full items-center justify-between gap-4 ${
        onHero ? "text-white" : "text-black"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3 md:gap-4">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-[-0.64px]">
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
                  onHero
                    ? active
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                    : active
                      ? "bg-canvas text-black"
                      : "text-text-secondary hover:bg-canvas hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="flex items-center gap-1.5">
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

        <label className="sr-only" htmlFor="city-select">
          Город
        </label>
        <select
          id="city-select"
          value={cityId}
          onChange={(e) => setCityId(e.target.value as keyof typeof cities)}
          className={`h-10 cursor-pointer rounded-full px-4 text-sm outline-none transition-all ${
            onHero
              ? "border border-white bg-transparent text-white"
              : "bg-chip-dark text-white hover:bg-blue"
          }`}
        >
          {Object.values(cities).map((c) => (
            <option key={c.id} value={c.id} className="text-black">
              {c.name}
            </option>
          ))}
        </select>

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
              ? "border border-white bg-transparent text-white hover:border-blue-interactive hover:bg-blue-interactive"
              : "bg-blue text-white hover:bg-blue-hover"
          }`}
        >
          Рассчитать
        </button>
      </div>
    </header>
  );
}
