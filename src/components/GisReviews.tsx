"use client";

import { Icon } from "@/components/Icon";
import { useCity } from "@/components/CityProvider";

export function GisReviews() {
  const { city } = useCity();

  return (
    <div className="rounded-4xl bg-canvas p-6 md:p-11">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-blue">Отзывы 2ГИС</p>
          <h2 className="mt-2 text-2xl font-medium md:text-[40px] md:leading-[44px]">
            Реальные оценки с независимой площадки
          </h2>
          <p className="mt-3 max-w-[560px] text-text-secondary">
            Не публикуем «нарисованные» цитаты. Смотрите актуальные отзывы клиентов Капибары на
            2ГИС — рейтинг и тексты обновляются там.
          </p>
        </div>
        <a
          href={city.gisUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-16 items-center justify-center rounded-2xl bg-blue px-8 text-lg font-medium text-white transition-all hover:bg-blue-hover"
        >
          Открыть отзывы в 2ГИС
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-3xl bg-white p-6">
          <div className="flex items-center gap-2 text-blue">
            <Icon name="star" className="h-7 w-7 fill-current" />
            <span className="text-[40px] font-medium leading-[44px]">{city.gisRating}</span>
          </div>
          <p className="mt-2 text-text-secondary">рейтинг на 2ГИС</p>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <p className="text-[40px] font-medium leading-[44px]">{city.gisCount}</p>
          <p className="mt-2 text-text-secondary">оценок на карточке фирмы</p>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <p className="text-[40px] font-medium leading-[44px]">1000+</p>
          <p className="mt-2 text-text-secondary">выполненных заказов сервиса</p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl bg-white">
        <iframe
          title="Отзывы Капибара на 2ГИС"
          src={`${city.gisUrl}/tab/reviews`}
          className="h-[520px] w-full border-0"
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
