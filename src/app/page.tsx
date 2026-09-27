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
import { asset } from "@/lib/asset";
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
    text: "Проф. техника для сильных загрязнений",
    href: "/#equipment",
    image: "/media/extractor.png",
  },
];

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-white">
      <section className="w-full bg-white p-1">
        <div className="hero-gradient relative overflow-hidden rounded-[20px] px-3 pb-4 min-[390px]:rounded-[28px] min-[390px]:px-4 min-[390px]:pb-5 min-[768px]:rounded-[32px] min-[768px]:px-8 min-[768px]:pb-8 min-[1025px]:px-11 min-[1025px]:pb-[68px] xl:px-14">
          <div className="relative mx-auto w-full max-w-[1168px] py-4 min-[768px]:py-10">
            <Header variant="hero" />

            <div className="relative z-10 mt-6 flex flex-col gap-6 min-[768px]:mt-10 min-[768px]:gap-8 min-[1025px]:mt-14 min-[1025px]:gap-14">
              <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto] lg:gap-8">
                <div className="flex max-w-[740px] flex-col gap-4 min-[768px]:gap-6 min-[1025px]:gap-8">
                  <h1 className="text-[28px] font-bold leading-[32px] tracking-[-1.12px] text-white min-[768px]:text-[48px] min-[768px]:leading-[48px] min-[768px]:tracking-[-1.92px] min-[1025px]:text-[72px] min-[1025px]:leading-[68px] min-[1025px]:tracking-[-2.88px]">
                    Выездная химчистка мебели
                  </h1>
                  <p className="max-w-[560px] text-[15px] leading-[20px] tracking-[-0.48px] text-white/80 min-[390px]:text-[16px] min-[390px]:tracking-[-0.64px] min-[768px]:text-[20px] min-[768px]:leading-[28px] min-[768px]:tracking-[-0.8px]">
                    {UTP}
                  </p>
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
                    <LeadButton scenario="once" variant="white" className="w-full sm:max-w-64">
                      Рассчитать по фото
                    </LeadButton>
                    <Link
                      href="/abonement"
                      className="flex h-14 w-full items-center justify-center rounded-2xl border border-white px-6 text-base font-medium text-white transition-all hover:border-blue-interactive hover:bg-blue-interactive sm:h-16 sm:max-w-64 sm:px-8 sm:text-lg"
                    >
                      Абонемент «Модуль»
                    </Link>
                  </div>
                </div>
                <Mascot
                  src="/mascot/hero.png"
                  alt="Маскот Капибара с оборудованием"
                  className="mx-auto h-auto w-[200px] min-[390px]:w-[240px] md:w-[340px] lg:w-[400px]"
                  priority
                  width={640}
                  height={640}
                />
              </div>

              <div className="grid grid-cols-2 gap-1.5 min-[768px]:gap-2 min-[1025px]:grid-cols-3 min-[1025px]:gap-5">
                {tiles.map((card) => (
                  <Link key={card.title} href={card.href} className="block">
                    <div className="group relative min-h-[148px] overflow-hidden rounded-2xl bg-white p-3 transition-all hover:bg-blue-wash min-[390px]:min-h-[160px] min-[390px]:p-4 min-[768px]:min-h-[200px] min-[768px]:rounded-[24px] min-[768px]:p-5 min-[1025px]:min-h-[220px]">
                      <p className="relative z-10 max-w-[58%] text-[13px] font-semibold leading-[15px] tracking-[-0.4px] min-[390px]:max-w-[52%] min-[390px]:text-[15px] min-[390px]:leading-[17px] min-[768px]:max-w-[48%] min-[768px]:text-[20px] min-[768px]:leading-6 min-[768px]:tracking-[-0.8px]">
                        {card.title}
                      </p>
                      <p className="relative z-10 mt-1.5 max-w-[55%] text-[12px] leading-[15px] text-text-secondary min-[390px]:mt-2 min-[390px]:max-w-[48%] min-[390px]:text-sm min-[390px]:leading-5 min-[768px]:max-w-[45%]">
                        {card.text}
                      </p>
                      <Image
                        src={asset(card.image)}
                        alt=""
                        width={320}
                        height={320}
                        className="pointer-events-none absolute -bottom-5 -right-4 h-[120px] w-[120px] object-contain opacity-95 transition-transform group-hover:scale-105 min-[390px]:-bottom-6 min-[390px]:-right-5 min-[390px]:h-[140px] min-[390px]:w-[140px] min-[768px]:-bottom-8 min-[768px]:-right-6 min-[768px]:h-[200px] min-[768px]:w-[200px] min-[1025px]:h-[230px] min-[1025px]:w-[230px]"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content px-3 sm:px-4 md:px-8">
          <h2 className="text-center text-[26px] font-medium leading-8 sm:text-2xl md:text-[40px] lg:text-[52px]">
            Что вам подходит сейчас
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] px-1 text-center text-sm text-text-secondary sm:mt-4 sm:text-base md:text-lg">
            Восстановление «с нуля» или поддержание чистоты на годы.
          </p>
          <div className="mt-8 grid gap-2 md:grid-cols-2 lg:mt-16">
            <article className="rounded-3xl bg-canvas p-5 transition-all hover:shadow-service-card sm:rounded-4xl sm:p-6 md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue">
                <Icon name="spark" />
              </div>
              <p className="text-sm font-medium text-blue">Первый раз</p>
              <h3 className="mt-2 text-[24px] font-medium leading-7 sm:text-[28px] sm:leading-8 md:text-[32px]">Разовая химчистка</h3>
              <ul className="mt-5 space-y-3 text-sm text-text-secondary sm:mt-6 sm:text-base">
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" /> Давно не чистили мебель</li>
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" /> Сильные загрязнения или запах</li>
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" /> Освежить за один визит</li>
                <li className="flex gap-2 font-medium text-black"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" /> Оплата после результата</li>
              </ul>
              <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                <LeadButton scenario="once">Оставить заявку</LeadButton>
                <Link href="/pervichnaya" className="flex h-12 items-center justify-center px-4 text-base font-medium text-blue sm:h-16 sm:justify-start sm:text-lg">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="rounded-3xl bg-canvas p-5 transition-all hover:shadow-service-card sm:rounded-4xl sm:p-6 md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue">
                <Icon name="module" />
              </div>
              <p className="text-sm font-medium text-blue">После первой чистки</p>
              <h3 className="mt-2 text-[24px] font-medium leading-7 sm:text-[28px] sm:leading-8 md:text-[32px]">Абонемент «Модуль»</h3>
              <ul className="mt-5 space-y-3 text-sm text-text-secondary sm:mt-6 sm:text-base">
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" /> Платите только за нужные участки</li>
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" /> Грязь не накапливается годами</li>
                <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" /> Срок 6 / 9 / 12 месяцев</li>
                <li className="flex gap-2 font-medium text-black"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue" /> Онлайн / Яндекс Сплит</li>
              </ul>
              <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                <LeadButton scenario="module">Открыть заявку</LeadButton>
                <Link href="/abonement" className="flex h-12 items-center justify-center px-4 text-base font-medium text-blue sm:h-16 sm:justify-start sm:text-lg">
                  Калькулятор
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content px-3 sm:px-4 md:px-8">
          <BeforeAfterCarousel />
        </div>
      </section>

      <section id="equipment" className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content px-3 sm:px-4 md:px-8">
          <EquipmentBlock />
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content px-3 sm:px-4 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-canvas px-4 py-8 sm:rounded-4xl sm:px-5 sm:py-10 md:min-h-[440px] md:px-11 md:py-16 lg:min-h-[480px]">
            <div className="relative z-10 max-w-[560px] md:max-w-[50%]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue">
                <Icon name="module" />
              </div>
              <h2 className="text-[26px] font-medium leading-8 sm:text-2xl md:text-[40px] md:leading-[44px] lg:text-[52px]">
                Что такое модуль
              </h2>
              <p className="mt-3 text-sm text-text-secondary sm:mt-4 sm:text-base md:text-lg">
                1 модуль — участок до 60 см. Чистим полными секциями: сиденье, спинка или подлокотник
                целиком, чтобы не было ореолов.
              </p>
              <ul className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                {[
                  "Секция ~1,2 м ≈ 2 модуля",
                  "Секция ~0,8 м ≈ 1,5 модуля",
                  "+2 модуля — запах",
                  "+1 модуль — сложные пятна",
                ].map((t) => (
                  <li key={t} className="rounded-xl bg-white px-3 py-3 text-sm font-medium sm:px-4 sm:text-base">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative -mx-4 mt-5 h-[168px] w-[calc(100%+2rem)] sm:-mx-5 sm:mt-6 sm:h-[200px] sm:w-[calc(100%+2.5rem)] md:absolute md:inset-y-0 md:right-0 md:mx-0 md:mt-0 md:h-auto md:w-[58%]">
              <Image
                src={asset("/media/sofa-left.png")}
                alt="Диван — левая секция"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-[right_bottom]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content px-3 sm:px-4 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-blue px-5 py-8 text-white sm:rounded-4xl sm:px-6 sm:py-10 md:min-h-[360px] md:px-11 md:py-16">
            <div className="relative z-10 max-w-[520px] md:max-w-[560px]">
              <p className="text-sm font-medium text-white/80">Акция</p>
              <h2 className="mt-2 text-[26px] font-medium leading-8 sm:text-2xl md:text-[40px] lg:text-[52px]">
                +1 модуль в подарок
              </h2>
              <p className="mt-3 text-sm text-white/80 sm:mt-4 sm:text-base md:text-xl">
                Оформите абонемент в день первичной полной чистки — добавим 1 модуль бонусом.
              </p>
              <div className="mt-6 sm:mt-8">
                <LeadButton scenario="module" variant="white">
                  Оформить с бонусом
                </LeadButton>
              </div>
            </div>
            <div className="pointer-events-none relative mx-auto mt-6 h-[160px] w-[160px] sm:h-[200px] sm:w-[200px] md:absolute md:bottom-auto md:right-6 md:top-1/2 md:mx-0 md:mt-0 md:h-[340px] md:w-[340px] md:-translate-y-1/2 lg:right-10 lg:h-[400px] lg:w-[400px]">
              <Image
                src={asset("/mascot/cushion.png")}
                alt="Модуль в подарок"
                fill
                sizes="(max-width: 768px) 200px, 400px"
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content px-3 sm:px-4 md:px-8">
          <h2 className="text-center text-[26px] font-medium leading-8 sm:text-2xl md:text-[40px] lg:text-[52px]">Почему Капибара</h2>
          <div className="mt-8 grid gap-2 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["shield", "Оплата по результату", "Сначала работа, потом приёмка и оплата."],
              ["spark", "Сильные загрязнения", "Берёмся за пятна, запах и въевшуюся грязь."],
              ["sofa", "Без ореолов", "Чистим секцию целиком, а не кусочком."],
              ["machine", "Проф. оборудование", "Экстрактор, турбосушка и польская химия."],
              ["camera", "Расчёт по фото", "1–2 снимка — и понятная смета."],
              ["star", "Отзывы на 2ГИС", "Независимые оценки клиентов."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl bg-canvas p-5 sm:rounded-3xl sm:p-6 md:p-7">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue sm:mb-5 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]">
                  <Icon name={icon as "shield"} className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
                </div>
                <h3 className="text-lg font-medium sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm text-text-secondary sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content px-3 sm:px-4 md:px-8">
          <GisReviews />
        </div>
      </section>

      <section className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content rounded-3xl bg-canvas px-3 py-10 sm:rounded-4xl sm:px-4 sm:py-16 md:px-11 md:py-24">
          <h2 className="text-center text-[26px] font-medium leading-8 sm:text-2xl md:text-[40px] lg:text-[52px]">
            Вопросы и ответы
          </h2>
          <div className="mt-8 sm:mt-10">
            <FaqList items={FAQ} />
          </div>
        </div>
      </section>

      <section id="lead" className="w-full bg-white px-1 pt-12 sm:pt-16 lg:pt-32">
        <div className="section-content grid items-stretch gap-3 px-3 sm:gap-4 sm:px-4 md:grid-cols-2 md:px-8">
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-canvas p-5 sm:min-h-[320px] sm:p-6 md:min-h-0 md:p-10">
            <div className="relative z-10 max-w-[420px]">
              <h2 className="text-[24px] font-medium leading-7 sm:text-2xl md:text-[40px] md:leading-[44px]">
                Отправьте фото — посчитаем и подскажем вариант
              </h2>
              <p className="mt-3 text-sm text-text-secondary sm:mt-4 sm:text-base md:text-lg">
                Достаточно 1–2 фото: общий вид и проблемная зона. Скажем, что выгоднее — разовая
                чистка или абонемент.
              </p>
            </div>
            <Image
              src={asset("/media/kit.png")}
              alt=""
              width={480}
              height={480}
              className="pointer-events-none absolute -bottom-6 -right-4 w-[180px] object-contain sm:-bottom-8 sm:-right-6 sm:w-[240px] md:w-[300px] lg:w-[340px]"
            />
          </div>
          <LeadForm scenarioDefault="once" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
