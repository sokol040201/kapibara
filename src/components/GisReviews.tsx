"use client";

import { Icon } from "@/components/Icon";
import { useCity } from "@/components/CityProvider";

export function GisReviews() {
  const { city } = useCity();

  return (
    <div className="rounded-3xl bg-canvas p-4 sm:rounded-4xl sm:p-6 md:p-11">
      <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-blue">Отзывы 2ГИС</p>
          <h2 className="mt-2 text-[26px] font-medium leading-8 sm:text-2xl md:text-[40px] md:leading-[44px]">
            Реальные оценки с независимой площадки
          </h2>
          <p className="mt-3 max-w-[560px] text-sm text-text-secondary sm:text-base">
            Не публикуем «нарисованные» цитаты. Смотрите актуальные отзывы клиентов Капибары на
            2ГИС — рейтинг и тексты обновляются там.
          </p>
        </div>
        <a
          href={city.gisUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-blue px-6 text-base font-medium text-white transition-all hover:bg-blue-hover sm:h-16 sm:w-auto sm:px-8 sm:text-lg"
        >
          Открыть отзывы в 2ГИС
        </a>
      </div>

      <div className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3">
        <div className="rounded-2xl bg-white p-5 sm:rounded-3xl sm:p-6">
          <div className="flex items-center gap-2 text-blue">
            <Icon name="star" className="h-6 w-6 fill-current sm:h-7 sm:w-7" />
            <span className="text-[32px] font-medium leading-none sm:text-[40px] sm:leading-[44px]">{city.gisRating}</span>
          </div>
          <p className="mt-2 text-sm text-text-secondary sm:text-base">рейтинг на 2ГИС</p>
        </div>
        <div className="rounded-2xl bg-white p-5 sm:rounded-3xl sm:p-6">
          <p className="text-[32px] font-medium leading-none sm:text-[40px] sm:leading-[44px]">{city.gisCount}</p>
          <p className="mt-2 text-sm text-text-secondary sm:text-base">оценок на карточке фирмы</p>
        </div>
        <div className="rounded-2xl bg-white p-5 sm:rounded-3xl sm:p-6">
          <p className="text-[32px] font-medium leading-none sm:text-[40px] sm:leading-[44px]">1000+</p>
          <p className="mt-2 text-sm text-text-secondary sm:text-base">выполненных заказов сервиса</p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl bg-white sm:mt-6 sm:rounded-3xl">
        <iframe
          title="Отзывы Капибара на 2ГИС"
          src={`${city.gisUrl}/tab/reviews`}
          className="h-[420px] w-full border-0 sm:h-[520px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3 text-sm text-text-muted">
        Если виджет не загрузился, откройте отзывы по кнопке выше — 2ГИС иногда блокирует встраивание.
      </p>
    </div>
  );
}
