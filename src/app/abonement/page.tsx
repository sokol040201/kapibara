import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadButton } from "@/components/LeadButton";
import { LeadForm } from "@/components/LeadForm";
import { ModuleCalculator } from "@/components/ModuleCalculator";
import { EquipmentBlock } from "@/components/EquipmentBlock";
import { Icon } from "@/components/Icon";
import { ABONEMENT_STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Абонемент «Модуль»",
  description:
    "Обслуживание мебели по модулям на 6–12 месяцев. Чистим только нужные секции. Калькулятор модулей.",
};

export default function AbonementPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-canvas">
      <div className="section-content w-full px-4 pt-4 md:px-8">
        <Header />
      </div>

      <header className="relative mt-4 flex w-full max-w-[1392px] flex-col rounded-3xl bg-white px-4 py-6 sm:mt-6 sm:py-8 md:mt-10 md:flex-row md:items-center md:px-11 md:py-11">
        <div className="z-10 flex w-full flex-col md:max-w-[720px]">
          <p className="text-sm font-medium text-blue">Чистое обслуживание</p>
          <h1 className="mt-2 text-[28px] font-medium leading-8 sm:text-[32px] sm:leading-none md:text-[60px] md:leading-[66px]">
            Абонемент «Модуль»
          </h1>
          <p className="mt-4 text-sm text-text-secondary sm:text-base md:text-xl">
            Не чистим весь диван заново каждый раз. Платите только за секции, которые снова
            запачкались. Срок 6–12 месяцев, до 5 выездов в месяц, минимум от 5 модулей.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LeadButton scenario="module">Оформить абонемент</LeadButton>
            <a
              href="#calc"
              className="flex h-14 w-full items-center justify-center rounded-2xl bg-canvas px-6 text-base font-medium transition-all hover:bg-gray-hover sm:h-16 sm:w-auto sm:px-8 sm:text-lg"
            >
              Калькулятор
            </a>
          </div>
        </div>
        <Image
          src={asset("/media/armchair.png")}
          alt="Кресло"
          width={420}
          height={420}
          className="mx-auto mt-8 w-[240px] object-contain md:mt-0 md:w-[300px] lg:ml-auto"
          priority
        />
      </header>

      <section className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <div className="rounded-3xl bg-white px-4 py-8 md:p-11">
          <h2 className="text-2xl font-medium md:text-[40px]">Как устроен абонемент</h2>
          <p className="mt-3 max-w-[720px] text-text-secondary md:text-lg">
            Это не «скидка на разовую чистку», а система поддержания результата. Сначала приводим
            мебель в норму, дальше обслуживаем точечно — дешевле и без накопления грязи.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {ABONEMENT_STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-4 rounded-2xl bg-canvas p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="mt-2 text-text-secondary">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white px-4 py-8 md:p-11">
            <h2 className="text-2xl font-medium md:text-[40px]">Как считаем модули</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left">
                <thead>
                  <tr className="border-b border-border text-text-muted">
                    <th className="py-3 font-medium">Часть мебели</th>
                    <th className="py-3 font-medium">Модули</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Сиденье дивана", "2–6"],
                    ["Спинка дивана", "2–6"],
                    ["Подлокотник", "0,5"],
                    ["Кресло сиденье", "1"],
                    ["Матрас 2-спальный (1 сторона)", "4"],
                    ["Матрас бок", "1"],
                    ["Устранение запаха", "+2"],
                    ["Сложные загрязнения", "+1"],
                  ].map(([part, count]) => (
                    <tr key={part} className="border-b border-canvas">
                      <td className="py-3">{part}</td>
                      <td className="py-3 font-medium">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 rounded-2xl bg-blue-wash px-4 py-3 text-sm">
              Акция: +1 модуль в подарок при оформлении абонемента в день первичной полной чистки.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 md:p-8">
            <Image
              src={asset("/media/mattress.png")}
              alt="Матрас"
              width={360}
              height={360}
              className="mx-auto w-[220px] object-contain"
            />
            <ul className="mt-6 space-y-3">
              {[
                "Секция чистится целиком",
                "Кратность расчёта 0,5 модуля",
                "Онлайн-оплата / Яндекс Сплит",
                "Выезд обычно в течение 48 часов",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Icon name="check" className="mt-0.5 h-5 w-5 text-blue" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="calc" className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <ModuleCalculator />
      </section>

      <section className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <EquipmentBlock />
      </section>

      <section className="section-content mt-4 grid w-full gap-4 px-4 pb-8 md:mt-6 md:grid-cols-2 md:px-8">
        <div className="rounded-3xl bg-blue p-6 text-white md:p-10">
          <h2 className="text-2xl font-medium md:text-[40px] md:leading-[44px]">
            Хотите всегда чисто, а не раз в год?
          </h2>
          <p className="mt-4 text-white/80 md:text-lg">
            Пришлите фото — посчитаем модули и подскажем срок. Можно с бонусом +1 модуль в день
            первичной чистки.
          </p>
          <div className="mt-8">
            <LeadButton scenario="module" variant="white">
              Оставить заявку
            </LeadButton>
          </div>
        </div>
        <LeadForm scenarioDefault="module" title="Заявка на абонемент" />
      </section>

      <Footer />
    </main>
  );
}
