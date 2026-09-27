import Link from "next/link";
import { LEGAL, NAV, cities } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full max-w-full bg-white px-1 pb-5 pt-12 sm:pt-16 lg:pt-32">
      <div className="flex w-full justify-center rounded-3xl bg-footer px-4 py-10 text-white sm:rounded-4xl sm:py-14 md:px-8">
        <div className="section-content grid gap-8 sm:gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-medium md:text-3xl">Капибара</p>
            <p className="mt-3 max-w-sm text-sm text-white/80 sm:text-base">
              Выездная химчистка мебели. Сначала результат, потом оплата. Дальше — чистота по модулям.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {Object.values(cities).map((c) => (
                <a
                  key={c.id}
                  href={`tel:${c.phoneTel}`}
                  className="flex h-11 items-center justify-center rounded-4xl bg-chip-dark px-4 text-sm transition-all hover:bg-blue sm:h-10 sm:justify-start"
                >
                  {c.name} · {c.phone}
                </a>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <a
                href="https://t.me/kapibarapro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 flex-1 items-center justify-center rounded-full bg-chip-dark px-4 text-sm transition-all hover:bg-blue sm:flex-none"
              >
                Telegram
              </a>
              <a
                href={`https://wa.me/${cities.nsk.phoneTel.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 flex-1 items-center justify-center rounded-full bg-chip-dark px-4 text-sm transition-all hover:bg-blue sm:flex-none"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="text-xl">Услуги</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-white/80 sm:block sm:space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-all hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="transition-all hover:text-white">
                  Главная
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xl">Контакты</p>
            <p className="mt-4 text-white/80">Ежедневно 09:00 — 22:00</p>
            <a
              href={`mailto:${LEGAL.email}`}
              className="mt-2 block break-all text-white/80 transition-all hover:text-white"
            >
              {LEGAL.email}
            </a>
            <p className="mt-6 text-sm text-white/60">
              {LEGAL.operator}, ИНН {LEGAL.inn}. Обращения о персональных данных: {LEGAL.email}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
