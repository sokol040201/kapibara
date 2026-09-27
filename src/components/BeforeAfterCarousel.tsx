"use client";

import Image from "next/image";
import { useState } from "react";
import { BEFORE_AFTER } from "@/lib/site";

export function BeforeAfterCarousel() {
  const [index, setIndex] = useState(0);
  const item = BEFORE_AFTER[index];

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
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {[
          { label: "До", src: item.before },
          { label: "После", src: item.after },
        ].map((side) => (
          <div
            key={side.label}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white"
          >
            <span className="absolute left-4 top-4 z-10 rounded-xl bg-black/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              {side.label}
            </span>
            <Image
              src={side.src}
              alt={`${item.title} — ${side.label.toLowerCase()}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <div>
          <p className="text-xl font-medium">{item.title}</p>
          <p className="text-text-secondary">{item.caption}</p>
        </div>
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
      </div>
    </div>
  );
}
