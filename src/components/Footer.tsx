import Link from "next/link";
import { LEGAL, NAV, cities } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full max-w-full bg-white px-1 pb-5 pt-20 lg:pt-32">
      <div className="flex w-full justify-center rounded-4xl bg-footer px-4 py-14 text-white md:px-8">
        <div className="section-content grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-medium md:text-3xl">Капибара</p>
            <p className="mt-3 max-w-sm text-white/80">
              Выездная химчистка мебели. Сначала результат, потом оплата. Дальше — чистота по модулям.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {Object.values(cities).map((c) => (
                <a
                  key={c.id}
                  href={`tel:${c.phoneTel}`}
                  className="flex h-10 items-center rounded-4xl bg-chip-dark px-4 transition-all hover:bg-blue"
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
                className="flex h-10 items-center rounded-full bg-chip-dark px-4 text-sm transition-all hover:bg-blue"
              >
                Telegram
              </a>
              <a
                href={`https://wa.me/${cities.nsk.phoneTel.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center rounded-full bg-chip-dark px-4 text-sm transition-all hover:bg-blue"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="text-xl">Услуги</p>
            <ul className="mt-4 space-y-2 text-white/80">
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
              className="mt-2 block text-white/80 transition-all hover:text-white"
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
