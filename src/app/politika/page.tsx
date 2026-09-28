import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика обработки персональных данных сервиса Капибара. Оператор ИП Боровенский А. В.",
};

export default function PolicyPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-canvas">
      <Header />

      <article className="section-content mt-6 w-full max-w-[1392px] rounded-3xl bg-white px-4 py-8 md:mt-[40px] md:px-11 md:py-14">
        <h1 className="text-[32px] font-medium leading-none md:text-[56px] md:leading-[60px]">
          Политика конфиденциальности
        </h1>
        <p className="mt-6 text-text-secondary md:text-lg">
          Текст собран из публичных формулировок сайта Капибара. Это не новый юридический документ —
          краткая выжимка того, что уже сообщается пользователям при заявке.
        </p>

        <section className="mt-10 space-y-6">
          <div>
            <h2 className="text-xl font-medium md:text-[28px]">Оператор</h2>
            <p className="mt-3 text-text-secondary">
              {LEGAL.operator}, ИНН {LEGAL.inn}. Обращения о персональных данных:{" "}
              <a className="text-blue underline" href={`mailto:${LEGAL.email}`}>
                {LEGAL.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium md:text-[28px]">Зачем собираем данные</h2>
            <p className="mt-3 text-text-secondary">
              Заявка на сайте нужна, чтобы связаться с вами, уточнить задачу по химчистке мебели,
              посчитать модули по фото и согласовать выезд. Отправка заявки не означает согласия на
              рекламную рассылку.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium md:text-[28px]">Какие данные</h2>
            <p className="mt-3 text-text-secondary">
              Имя, телефон, способ связи (телефон, Telegram, MAX), описание мебели и загрязнений,
              фотографии мебели, выбранный сценарий чистки и город обслуживания.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium md:text-[28px]">Cookie</h2>
            <p className="mt-3 text-text-secondary">
              На сайте используются cookie-файлы и аналогичные технологии для улучшения работы сайта
              и аналитики. Оставаясь на сайте, вы не возражаете против их использования.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium md:text-[28px]">Согласие</h2>
            <p className="mt-3 text-text-secondary">
              Отправляя форму, вы соглашаетесь на обработку персональных данных и принимаете эту
              политику в объёме, опубликованном на сайте.
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
