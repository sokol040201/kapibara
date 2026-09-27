import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mascot } from "@/components/Mascot";
import { LeadButton } from "@/components/LeadButton";
import { LeadForm } from "@/components/LeadForm";
import { FaqList } from "@/components/FaqList";
import { BeforeAfterCarousel } from "@/components/BeforeAfterCarousel";
import { EquipmentBlock } from "@/components/EquipmentBlock";
import { GisReviews } from "@/components/GisReviews";
import { Icon } from "@/components/Icon";
import { FAQ, UTP } from "@/lib/site";

const tiles = [
  {
    title: "Разовая чистка",
    text: "Обновить мебель за один визит",
    href: "/pervichnaya",
    image: "/media/sofa.png",
  },
  {
    title: "Абонемент «Модуль»",
    text: "Платите только за нужные секции",
    href: "/abonement",
    image: "/media/kit.png",
  },
  {
    title: "Оплата после результата",
    text: "Без предоплаты на разовой чистке",
    href: "/pervichnaya",
    image: "/mascot/portrait.png",
  },
  {
    title: "Секция целиком",
    text: "Без ореолов и границ чистки",
    href: "/abonement",
    image: "/media/armchair.png",
  },
  {
    title: "1–2 фото",
    text: "Посчитаем стоимость до выезда",
    href: "/#lead",
    image: "/media/mattress.png",
  },
  {
    title: "Santoemma Sabrina",
    text: "Профессиональный моющий пылесос",
    href: "/#equipment",
    image: "/media/extractor.png",
  },
];

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-white">
      <section className="w-full bg-white p-1">
        <div className="hero-gradient relative overflow-hidden rounded-[20px] px-4 pb-5 min-[390px]:rounded-[32px] min-[768px]:px-8 min-[768px]:pb-8 min-[1025px]:px-11 min-[1025px]:pb-[68px] xl:px-14">
          <div className="relative mx-auto w-full max-w-[1168px] py-6 min-[768px]:py-10">
            <Header variant="hero" />

            <div className="relative z-10 mt-8 flex flex-col gap-8 min-[1025px]:mt-14 min-[1025px]:gap-14">
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div className="flex max-w-[740px] flex-col gap-4 min-[768px]:gap-6 min-[1025px]:gap-8">
                  <h1 className="text-[28px] font-bold leading-[32px] tracking-[-1.12px] text-white min-[768px]:text-[48px] min-[768px]:leading-[48px] min-[768px]:tracking-[-1.92px] min-[1025px]:text-[72px] min-[1025px]:leading-[68px] min-[1025px]:tracking-[-2.88px]">
                    Выездная химчистка мебели
                  </h1>
                  <p className="max-w-[560px] text-[16px] leading-[20px] tracking-[-0.64px] text-white/80 min-[768px]:text-[20px] min-[768px]:leading-[28px] min-[768px]:tracking-[-0.8px]">
                    {UTP}
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <LeadButton scenario="once" variant="white">
                      Рассчитать по фото
                    </LeadButton>
                    <Link
                      href="/abonement"
                      className="flex h-16 w-full max-w-64 items-center justify-center rounded-2xl border border-white px-8 text-lg font-medium text-white transition-all hover:border-blue-interactive hover:bg-blue-interactive"
                    >
                      Абонемент «Модуль»
                    </Link>
                  </div>
                </div>
                <Mascot
                  src="/mascot/hero.png"
                  alt="Маскот Капибара с оборудованием"
                  className="mx-auto h-auto w-[260px] md:w-[340px] lg:w-[400px]"
                  priority
                  width={640}
                  height={640}
                />
              </div>

              <div className="grid grid-cols-2 gap-1 min-[768px]:gap-2 min-[1025px]:grid-cols-3 min-[1025px]:gap-5">
                {tiles.map((card) => (
                  <Link key={card.title} href={card.href} className="block">
                    <div className="group relative min-h-[160px] overflow-hidden rounded-2xl bg-white p-4 transition-all hover:bg-blue-wash min-[768px]:min-h-[200px] min-[768px]:rounded-[24px] min-[768px]:p-5 min-[1025px]:min-h-[220px]">
                      <p className="relative z-10 max-w-[52%] text-[14px] font-semibold leading-[16px] tracking-[-0.56px] min-[390px]:text-[16px] min-[390px]:font-medium min-[390px]:leading-[18px] min-[768px]:max-w-[48%] min-[768px]:text-[20px] min-[768px]:leading-6 min-[768px]:tracking-[-0.8px]">
                        {card.title}
                      </p>
                      <p className="relative z-10 mt-2 max-w-[48%] text-sm text-text-secondary min-[768px]:max-w-[45%]">
                        {card.text}
                      </p>
                      <Image
                        src={card.image}
                        alt=""
                        width={320}
                        height={320}
                        className="pointer-events-none absolute -bottom-6 -right-5 h-[150px] w-[150px] object-contain opacity-95 transition-transform group-hover:scale-105 min-[768px]:-bottom-8 min-[768px]:-right-6 min-[768px]:h-[200px] min-[768px]:w-[200px] min-[1025px]:h-[230px] min-[1025px]:w-[230px]"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-20 lg:pt-32">
        <div className="section-content px-4 md:px-8">
          <h2 className="text-center text-2xl font-medium md:text-[40px] lg:text-[52px]">
            Что вам подходит сейчас
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-center text-text-secondary md:text-lg">
            Восстановление «с нуля» или поддержание чистоты на годы.
          </p>
          <div className="mt-10 grid gap-2 md:grid-cols-2 lg:mt-16">
            <article className="rounded-4xl bg-canvas p-6 transition-all hover:shadow-service-card md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue">
                <Icon name="spark" />
              </div>
              <p className="text-sm font-medium text-blue">Первый раз</p>
              <h3 className="mt-2 text-[28px] font-medium leading-8 md:text-[32px]">Разовая химчистка</h3>
              <ul className="mt-6 space-y-3 text-text-secondary">
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 text-blue" /> Давно не чистили мебель</li>
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 text-blue" /> Сильные загрязнения или запах</li>
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 text-blue" /> Освежить за один визит</li>
                <li className="flex gap-2 font-medium text-black"><Icon name="check" className="mt-0.5 h-5 w-5 text-blue" /> Оплата после результата</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <LeadButton scenario="once">Оставить заявку</LeadButton>
                <Link href="/pervichnaya" className="flex h-16 items-center px-4 text-lg font-medium text-blue">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="rounded-4xl bg-canvas p-6 transition-all hover:shadow-service-card md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue">
                <Icon name="module" />
              </div>
              <p className="text-sm font-medium text-blue">После первой чистки</p>
              <h3 className="mt-2 text-[28px] font-medium leading-8 md:text-[32px]">Абонемент «Модуль»</h3>
              <ul className="mt-6 space-y-3 text-text-secondary">
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 text-blue" /> Платите только за нужные участки</li>
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 text-blue" /> Грязь не накапливается годами</li>
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 text-blue" /> Срок 6 / 9 / 12 месяцев</li>
                <li className="flex gap-2 font-medium text-black"><Icon name="check" className="mt-0.5 h-5 w-5 text-blue" /> Онлайн / Яндекс Сплит</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <LeadButton scenario="module">Открыть заявку</LeadButton>
                <Link href="/abonement" className="flex h-16 items-center px-4 text-lg font-medium text-blue">
                  Калькулятор
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-20 lg:pt-32">
        <div className="section-content px-4 md:px-8">
          <BeforeAfterCarousel />
        </div>
      </section>

      <section id="equipment" className="w-full bg-white px-1 pt-20 lg:pt-32">
        <div className="section-content px-4 md:px-8">
          <EquipmentBlock />
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-20 lg:pt-32">
        <div className="section-content px-4 md:px-8">
          <div className="relative min-h-[360px] overflow-hidden rounded-4xl bg-canvas px-4 py-10 pb-[260px] md:min-h-[440px] md:px-11 md:py-16 md:pb-16 lg:min-h-[480px]">
            <div className="relative z-10 max-w-[560px] md:max-w-[50%]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue">
                <Icon name="module" />
              </div>
              <h2 className="text-2xl font-medium md:text-[40px] md:leading-[44px] lg:text-[52px]">
                Что такое модуль
              </h2>
              <p className="mt-4 text-text-secondary md:text-lg">
                1 модуль — участок до 60 см. Чистим полными секциями: сиденье, спинка или подлокотник
                целиком, чтобы не было ореолов.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Секция ~1,2 м ≈ 2 модуля",
                  "Секция ~0,8 м ≈ 1,5 модуля",
                  "+2 модуля — запах",
                  "+1 модуль — сложные пятна",
                ].map((t) => (
                  <li key={t} className="rounded-xl bg-white px-4 py-3 font-medium">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 flex h-[300px] w-[95%] items-end justify-end overflow-hidden md:inset-y-0 md:left-[36%] md:h-auto md:w-auto md:items-center md:justify-start">
              <Image
                src="/media/sofa-left.png"
                alt="Диван — левая секция"
                width={1000}
                height={1000}
                className="h-[155%] w-auto max-w-none translate-x-[12%] object-contain md:h-[175%] md:translate-x-[6%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-20 lg:pt-32">
        <div className="section-content px-4 md:px-8">
          <div className="relative overflow-hidden rounded-4xl bg-blue px-6 py-10 pb-52 text-white md:min-h-[360px] md:px-11 md:py-16 md:pb-16">
            <div className="relative z-10 max-w-[520px] md:max-w-[560px]">
              <p className="text-sm font-medium text-white/80">Акция</p>
              <h2 className="mt-2 text-2xl font-medium md:text-[40px] lg:text-[52px]">
                +1 модуль в подарок
              </h2>
              <p className="mt-4 text-white/80 md:text-xl">
                Оформите абонемент в день первичной полной чистки — добавим 1 модуль бонусом.
              </p>
              <div className="mt-8">
                <LeadButton scenario="module" variant="white">
                  Оформить с бонусом
                </LeadButton>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-4 h-[220px] w-[220px] md:bottom-auto md:right-6 md:top-1/2 md:h-[340px] md:w-[340px] md:-translate-y-1/2 lg:right-10 lg:h-[400px] lg:w-[400px]">
              <Image
                src="/mascot/cushion.png"
                alt="Модуль в подарок"
                fill
                sizes="400px"
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-20 lg:pt-32">
        <div className="section-content px-4 md:px-8">
          <h2 className="text-center text-2xl font-medium md:text-[40px] lg:text-[52px]">Почему Капибара</h2>
          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["shield", "Оплата по результату", "Сначала работа, потом приёмка и оплата."],
              ["sofa", "Без ореолов", "Чистим секцию целиком, а не кусочком."],
              ["machine", "Santoemma Sabrina", "Профессиональный итальянский экстрактор."],
              ["clock", "До 5 выездов в месяц", "Входит в абонемент для семьи или офиса."],
              ["camera", "Расчёт по фото", "1–2 снимка — и понятная смета."],
              ["star", "Отзывы на 2ГИС", "Независимые оценки клиентов."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-canvas p-6 md:p-7">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue md:h-[72px] md:w-[72px]">
                  <Icon name={icon as "shield"} className="h-9 w-9 md:h-10 md:w-10" />
                </div>
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-2 text-text-secondary">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-20 lg:pt-32">
        <div className="section-content px-4 md:px-8">
          <GisReviews />
        </div>
      </section>

      <section className="w-full bg-white px-4 pt-20 lg:pt-32">
        <div className="section-content rounded-4xl bg-canvas px-4 py-16 md:px-11 md:py-24">
          <h2 className="text-center text-2xl font-medium md:text-[40px] lg:text-[52px]">
            Вопросы и ответы
          </h2>
          <div className="mt-10">
            <FaqList items={FAQ} />
          </div>
        </div>
      </section>

      <section id="lead" className="w-full bg-white px-1 pt-20 lg:pt-32">
        <div className="section-content grid items-stretch gap-4 px-4 md:grid-cols-2 md:px-8">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-canvas p-6 md:min-h-0 md:p-10">
            <div className="relative z-10 max-w-[420px]">
              <h2 className="text-2xl font-medium md:text-[40px] md:leading-[44px]">
                Отправьте фото — посчитаем и подскажем вариант
              </h2>
              <p className="mt-4 text-text-secondary md:text-lg">
                Достаточно 1–2 фото: общий вид и проблемная зона. Скажем, что выгоднее — разовая
                чистка или абонемент.
              </p>
            </div>
            <Image
              src="/media/kit.png"
              alt=""
              width={480}
              height={480}
              className="pointer-events-none absolute -bottom-8 -right-6 w-[240px] object-contain md:w-[300px] lg:w-[340px]"
            />
          </div>
          <LeadForm scenarioDefault="once" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
