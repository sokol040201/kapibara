"use client";

import Image from "next/image";
import { useState } from "react";
import { EQUIPMENT_ITEMS } from "@/lib/site";
import { Icon } from "@/components/Icon";

export function EquipmentBlock() {
  const [index, setIndex] = useState(0);
  const item = EQUIPMENT_ITEMS[index];

  return (
    <div className="rounded-4xl bg-canvas p-4 md:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-[720px]">
          <p className="text-sm font-medium text-blue">Оборудование</p>
          <h2 className="mt-2 text-2xl font-medium md:text-[40px] md:leading-[44px] lg:text-[52px]">
            Профессиональное оборудование
          </h2>
          <p className="mt-3 text-text-secondary md:text-lg">
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
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl transition-all hover:bg-blue hover:text-white"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            onClick={() => setIndex((i) => (i + 1) % EQUIPMENT_ITEMS.length)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl transition-all hover:bg-blue hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid items-stretch gap-3 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-white md:min-h-[420px]">
          <Image
            key={item.id}
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-4 md:p-8"
            priority={index === 0}
          />
        </div>

        <div className="flex flex-col rounded-3xl bg-white p-6 md:p-8">
          <p className="text-sm font-medium text-blue">
            {item.country} · {item.tag}
          </p>
          <h3 className="mt-2 text-[28px] font-medium leading-8 md:text-[32px]">{item.name}</h3>
          <p className="mt-2 text-text-secondary">{item.modelNote}</p>

          <ul className="mt-6 flex-1 space-y-3">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3 rounded-xl bg-canvas px-4 py-3">
                <span className="mt-0.5 shrink-0 text-blue">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.badges.map((badge) => (
              <div
                key={badge}
                className="rounded-2xl bg-blue-wash px-3 py-3 text-center text-sm font-medium"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <p className="text-text-secondary">
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
