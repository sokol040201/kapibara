"use client";

import Image from "next/image";
import { useState } from "react";
import { BEFORE_AFTER } from "@/lib/site";

export function BeforeAfterCarousel() {
  const [index, setIndex] = useState(0);
  const item = BEFORE_AFTER[index];
  const hasPhotos = Boolean(item.before && item.after);

  return (
    <div className="rounded-4xl bg-canvas p-4 md:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue">Результат</p>
          <h2 className="mt-2 text-2xl font-medium md:text-[40px] md:leading-[44px] lg:text-[52px]">
            До и после
          </h2>
          <p className="mt-3 max-w-[560px] text-text-secondary">
            Реальные фото с выездов. Результат зависит от ткани и возраста пятна — до старта
            скажем честно, чего ждать.
          </p>
        </div>
        {BEFORE_AFTER.length > 1 && (
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Назад"
              onClick={() => setIndex((i) => (i - 1 + BEFORE_AFTER.length) % BEFORE_AFTER.length)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl transition-all hover:bg-blue hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Вперёд"
              onClick={() => setIndex((i) => (i + 1) % BEFORE_AFTER.length)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl transition-all hover:bg-blue hover:text-white"
            >
              →
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {(["До", "После"] as const).map((label) => {
          const src = label === "До" ? item.before : item.after;
          return (
            <div
              key={label}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white"
            >
              <span className="absolute left-4 top-4 z-10 rounded-xl bg-black/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                {label}
              </span>
              {src ? (
                <Image
                  src={src}
                  alt={`${item.title} — ${label.toLowerCase()}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
                  <span className="text-sm font-medium text-text-muted">Фото появится позже</span>
                  <span className="text-sm text-text-secondary">
                    Сюда подставим реальные снимки с выездов
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <div>
          <p className="text-xl font-medium">{hasPhotos ? item.title : "Примеры с выездов"}</p>
          <p className="text-text-secondary">
            {hasPhotos ? item.caption : "Раздел готов — осталось добавить фото до и после"}
          </p>
        </div>
        {BEFORE_AFTER.length > 1 && (
          <div className="flex gap-2">
            {BEFORE_AFTER.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={slide.title}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? "bg-blue" : "bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
