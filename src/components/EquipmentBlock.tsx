"use client";

import Image from "next/image";
import { useState } from "react";
import { EQUIPMENT_ITEMS } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { asset } from "@/lib/asset";

export function EquipmentBlock() {
  const [index, setIndex] = useState(0);
  const item = EQUIPMENT_ITEMS[index];

  return (
    <div className="rounded-3xl bg-canvas p-4 sm:rounded-4xl sm:p-5 md:p-8">
      <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <div className="max-w-[720px]">
          <p className="text-sm font-medium text-blue">Оборудование</p>
          <h2 className="mt-2 text-[26px] font-medium leading-8 sm:text-2xl md:text-[40px] md:leading-[44px] lg:text-[52px]">
            Профессиональное оборудование
          </h2>
          <p className="mt-3 text-sm text-text-secondary sm:text-base md:text-lg">
            Работаем профессиональным комплектом — в том числе с сильными и въевшимися
            загрязнениями. Итальянский экстрактор, американская турбосушка и польская химия, не
            бытовые пылесосы.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Назад"
            onClick={() => setIndex((i) => (i - 1 + EQUIPMENT_ITEMS.length) % EQUIPMENT_ITEMS.length)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all hover:bg-blue hover:text-white sm:h-12 sm:w-12"
          >
            <Icon name="chevronLeft" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            onClick={() => setIndex((i) => (i + 1) % EQUIPMENT_ITEMS.length)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all hover:bg-blue hover:text-white sm:h-12 sm:w-12"
          >
            <Icon name="chevronRight" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid items-stretch gap-3 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-white sm:min-h-[280px] sm:rounded-3xl md:min-h-[420px]">
          <Image
            key={item.id}
            src={asset(item.image)}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-3 sm:p-4 md:p-8"
            priority={index === 0}
          />
        </div>

        <div className="flex flex-col rounded-2xl bg-white p-4 sm:rounded-3xl sm:p-6 md:p-8">
          <p className="text-sm font-medium text-blue">
            {item.country} · {item.tag}
          </p>
          <h3 className="mt-2 text-[24px] font-medium leading-7 sm:text-[28px] sm:leading-8 md:text-[32px]">{item.name}</h3>
          <p className="mt-2 text-sm text-text-secondary sm:text-base">{item.modelNote}</p>

          <ul className="mt-5 flex-1 space-y-2 sm:mt-6 sm:space-y-3">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3 rounded-xl bg-canvas px-3 py-3 text-sm sm:px-4 sm:text-base">
                <span className="mt-0.5 shrink-0 text-blue">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {item.badges.map((badge) => (
              <div
                key={badge}
                className="rounded-2xl bg-blue-wash px-3 py-2.5 text-center text-sm font-medium sm:py-3"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <p className="text-sm text-text-secondary sm:text-base">
          {index + 1} / {EQUIPMENT_ITEMS.length} · {item.name}
        </p>
        <div className="flex gap-2">
          {EQUIPMENT_ITEMS.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={slide.name}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? "bg-blue" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {EQUIPMENT_ITEMS.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`rounded-2xl px-4 py-3 text-left transition-all ${
              i === index ? "bg-blue text-white" : "bg-white hover:bg-blue-wash"
            }`}
          >
            <p className="text-sm font-medium">{slide.shortTitle}</p>
            <p className={`mt-1 text-sm ${i === index ? "text-white/80" : "text-text-secondary"}`}>
              {slide.country}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
