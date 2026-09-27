import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { GisReviews } from "@/components/GisReviews";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы о Капибаре на 2ГИС и факты доверия сервису.",
};

export default function ReviewsPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-canvas">
      <div className="section-content w-full px-4 pt-4 md:px-8">
        <Header />
      </div>

      <header className="relative mt-6 flex w-full max-w-[1392px] flex-col rounded-3xl bg-white px-4 py-8 md:mt-10 md:flex-row md:items-center md:px-11 md:py-11">
        <div className="md:max-w-[720px]">
          <p className="text-sm font-medium text-blue">Доверие</p>
          <h1 className="mt-2 text-[32px] font-medium leading-none md:text-[60px] md:leading-[66px]">
            Нам доверяют чистоту мебели
          </h1>
          <p className="mt-4 text-text-secondary md:text-xl">
            Отзывы смотрите на независимой площадке 2ГИС. Здесь не выдумываем цитаты — только
            рейтинг, счётчик оценок и живой виджет.
          </p>
        </div>
        <Image
          src="/mascot/portrait.png"
          alt="Маскот Капибара"
          width={320}
          height={320}
          className="mx-auto mt-8 w-[200px] object-contain md:mt-0 md:w-[240px] lg:ml-auto"
          priority
        />
      </header>

      <section className="section-content mt-4 w-full px-4 md:mt-6 md:px-8">
        <GisReviews />
      </section>

      <section className="section-content mt-4 grid w-full gap-4 px-4 pb-8 md:mt-6 md:grid-cols-2 md:px-8">
        <div className="rounded-3xl bg-white p-6 md:p-10">
          <Image
            src="/media/extractor.png"
            alt="Оборудование"
            width={280}
            height={280}
            className="w-[180px] object-contain"
          />
          <h2 className="mt-4 text-2xl font-medium md:text-[32px]">Готовы проверить на своей мебели?</h2>
          <p className="mt-3 text-text-secondary">
            Пришлите фото — посчитаем и подскажем разовую чистку или абонемент.
          </p>
        </div>
        <LeadForm scenarioDefault="once" title="Заявка после отзывов" />
      </section>

      <Footer />
    </main>
  );
}
