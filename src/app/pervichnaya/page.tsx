import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadButton } from "@/components/LeadButton";
import { LeadForm } from "@/components/LeadForm";
import { EquipmentBlock } from "@/components/EquipmentBlock";
import { BeforeAfterCarousel } from "@/components/BeforeAfterCarousel";
import { Icon } from "@/components/Icon";
import { Mascot } from "@/components/Mascot";

export const metadata: Metadata = {
  title: "Разовая химчистка",
  description:
    "Первичная выездная химчистка мягкой мебели на оборудовании Santoemma Sabrina. Оплата после приёмки.",
};

export default function OncePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-canvas">
      <div className="section-content w-full px-4 pt-4 md:px-8">
        <Header />
      </div>

      <header className="relative mt-4 flex w-full max-w-[1392px] flex-col rounded-3xl bg-white px-4 py-6 sm:mt-6 sm:py-8 md:mt-10 md:min-h-[480px] md:flex-row md:items-center md:px-11 md:py-11 min-[1440px]:px-14">
        <div className="z-10 flex w-full flex-col md:max-w-[680px]">
          <p className="text-sm font-medium text-blue">Первичная чистка</p>
          <h1 className="mt-2 text-[28px] font-medium leading-8 sm:text-[32px] sm:leading-none md:text-[60px] md:leading-[66px]">
            Разовая химчистка
          </h1>
          <p className="mt-4 text-sm text-text-secondary sm:text-base md:text-xl">
            Один выезд — обновить мебель за раз, в том числе при сильных загрязнениях. Без
            предоплаты: оплата после приёмки результата. Работаем профессиональным комплектом
            Santoemma Sabrina, турбосушкой и польской химией.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
            <LeadButton scenario="once">Заказать онлайн</LeadButton>
            <Link
              href="/abonement"
              className="flex h-14 w-full items-center justify-center rounded-2xl bg-canvas px-6 text-base font-medium transition-all hover:bg-gray-hover sm:h-16 sm:max-w-64 sm:px-8 sm:text-lg"
            >
              Смотреть абонемент
            </Link>
          </div>
        </div>
        <Image
          src={asset("/media/sofa.png")}
          alt="Диван после чистки"
          width={480}
          height={480}
          className="mx-auto mt-8 w-[260px] object-contain md:mt-0 md:w-[340px] lg:ml-auto"
          priority
        />
      </header>

      <section className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <div className="rounded-3xl bg-white px-4 py-8 md:p-11">
          <h2 className="text-2xl font-medium md:text-[40px]">Как это работает</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["camera", "Фото и смета", "Пришлите 1–2 фото — согласуем объём и цену до выезда."],
              ["machine", "Чистка на месте", "Экстрактор Santoemma Sabrina, насадки под ткань."],
              ["card", "Оплата после", "Сначала приёмка результата, потом оплата удобным способом."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl bg-canvas p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue">
                  <Icon name={icon as "camera"} />
                </div>
                <h3 className="text-[28px] font-medium leading-8">{title}</h3>
                <p className="mt-3 text-text-secondary">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <EquipmentBlock />
      </section>

      <section className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <BeforeAfterCarousel />
      </section>

      <section className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <div className="rounded-3xl bg-white px-4 py-8 md:p-11">
          <h2 className="text-2xl font-medium md:text-[40px]">Что входит</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Сухая чистка пылесосом",
              "Экстракторная химчистка обивки",
              "Работа с сильными загрязнениями, пятнами и запахом",
              "Финальная обработка и кондиционирование",
              "Обычная сушка 4–12 часов",
              "Экспресс-сушка — доп. услуга, 1–2 часа",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-canvas px-4 py-3">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-text-secondary">
            Честно: результат зависит от ткани и возраста пятна. Старые загрязнения могут уйти
            частично. Абонемент снижает риск «въевшихся» пятен.
          </p>
        </div>
      </section>

      <section className="section-content mt-4 grid w-full gap-4 px-4 pb-8 md:mt-6 md:grid-cols-2 md:px-8">
        <div className="rounded-3xl bg-white p-6 md:p-10">
          <Mascot src="/mascot/hero.png" alt="Маскот" className="w-[200px]" />
          <h2 className="mt-4 text-2xl font-medium md:text-[32px]">Готовы освежить мебель?</h2>
          <p className="mt-3 text-text-secondary">Пришлите фото — согласуем цену до выезда.</p>
        </div>
        <LeadForm scenarioDefault="once" title="Заявка на разовую чистку" />
      </section>

      <Footer />
    </main>
  );
}
