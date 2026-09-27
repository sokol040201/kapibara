"use client";

import { useMemo, useState } from "react";
import { LeadButton } from "@/components/LeadButton";
import { Icon } from "@/components/Icon";

const ZONE_LABELS = [
  { id: 1, title: "Зона 1", hint: "до 5 км" },
  { id: 2, title: "Зона 2", hint: "5–7 км" },
  { id: 3, title: "Зона 3", hint: "7–10 км" },
  { id: 4, title: "Зона 4", hint: "10–15 км" },
  { id: 5, title: "Зона 5", hint: "15–20 км" },
] as const;

const MONTH_OPTIONS = [6, 7, 8, 9, 10, 11, 12] as const;

const EXTRAS = [
  {
    id: "odor" as const,
    title: "Устранение запаха",
    hint: "+2 модуля",
    icon: "spark" as const,
  },
  {
    id: "hard" as const,
    title: "Сложные загрязнения",
    hint: "+1 модуль",
    icon: "sofa" as const,
  },
  {
    id: "renewal" as const,
    title: "Действующий абонемент",
    hint: "−10% к цене",
    icon: "card" as const,
  },
];

const selectClass =
  "calc-select h-14 w-full cursor-pointer appearance-none rounded-2xl border border-transparent bg-canvas px-4 pr-11 text-base outline-none transition-all focus:border-blue focus:bg-white";

export function ModuleCalculator() {
  const [modules, setModules] = useState(20);
  const [months, setMonths] = useState(6);
  const [zone, setZone] = useState(1);
  const [odor, setOdor] = useState(false);
  const [hardStains, setHardStains] = useState(false);
  const [renewal, setRenewal] = useState(false);

  const progress = ((modules - 5) / (60 - 5)) * 100;

  const summary = useMemo(() => {
    const base = Math.max(5, modules);
    const extras = (odor ? 2 : 0) + (hardStains ? 1 : 0);
    const totalModules = base + extras;
    const zoneLabel = ZONE_LABELS.find((z) => z.id === zone);
    return { base, extras, totalModules, months, zone, zoneLabel, renewal };
  }, [modules, months, zone, odor, hardStains, renewal]);

  const toggleExtra = (id: "odor" | "hard" | "renewal") => {
    if (id === "odor") setOdor((v) => !v);
    if (id === "hard") setHardStains((v) => !v);
    if (id === "renewal") setRenewal((v) => !v);
  };

  const extraChecked = (id: "odor" | "hard" | "renewal") =>
    id === "odor" ? odor : id === "hard" ? hardStains : renewal;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-service-card md:rounded-4xl">
      <div className="border-b border-canvas px-5 py-6 sm:px-8 sm:py-8 md:px-11 md:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[640px]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-wash text-blue">
              <Icon name="module" className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-blue">Абонемент</p>
            <h3 className="mt-1 text-[28px] font-medium leading-8 tracking-[-0.56px] sm:text-[32px] sm:leading-9 md:text-[40px] md:leading-[44px]">
              Калькулятор модулей
            </h3>
            <p className="mt-3 text-sm text-text-secondary sm:text-base md:text-lg">
              Считаем объём обслуживания. Сумму в рублях подтверждаем по фото — без выдуманного прайса.
            </p>
          </div>
          <div className="shrink-0 rounded-3xl bg-canvas px-5 py-4 sm:min-w-[160px] sm:text-right">
            <p className="text-sm text-text-muted">Итого сейчас</p>
            <p className="mt-1 text-[40px] font-medium leading-none tracking-[-1.6px] text-blue">
              {summary.totalModules}
            </p>
            <p className="mt-1 text-sm text-text-secondary">модулей</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:grid-cols-[1.15fr_0.85fr] md:px-11 md:py-10">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-sm font-medium">Количество модулей</p>
                <p className="mt-1 text-sm text-text-muted">Минимум выезда — 5, шаг 0,5</p>
              </div>
              <div className="rounded-2xl bg-blue px-4 py-2 text-white">
                <span className="text-2xl font-medium leading-none">{modules}</span>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-canvas" />
              <div
                className="pointer-events-none absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-blue"
                style={{ width: `${progress}%` }}
              />
              <input
                type="range"
                min={5}
                max={60}
                step={0.5}
                value={modules}
                onChange={(e) => setModules(Number(e.target.value))}
                aria-label="Количество модулей"
                className="calc-range relative z-10 w-full"
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-text-muted">
              <span>5</span>
              <span>60</span>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium">Срок абонемента</p>
            <div className="flex flex-wrap gap-2">
              {MONTH_OPTIONS.map((m) => {
                const active = months === m;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMonths(m)}
                    className={`flex h-12 min-w-[52px] items-center justify-center rounded-2xl px-4 text-sm font-medium transition-all ${
                      active
                        ? "bg-blue text-white shadow-[0_8px_24px_rgba(20,95,255,0.28)]"
                        : "bg-canvas text-black hover:bg-blue-wash"
                    }`}
                  >
                    {m}
                    <span className={`ml-1 ${active ? "text-white/80" : "text-text-muted"}`}>мес</span>
                  </button>
                );
              })}
            </div>
            {months === 6 && (
              <p className="mt-2 text-sm text-text-muted">6 месяцев — минимальный срок</p>
            )}
          </div>

          <div>
            <p className="mb-3 text-sm font-medium">Зона выезда</p>
            <label className="block">
              <span className="sr-only">Зона выезда</span>
              <select
                value={zone}
                onChange={(e) => setZone(Number(e.target.value))}
                className={selectClass}
              >
                {ZONE_LABELS.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.title} — {z.hint}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Дополнительно</p>
          <div className="space-y-2">
            {EXTRAS.map((item) => {
              const active = extraChecked(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleExtra(item.id)}
                  aria-pressed={active}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all ${
                    active
                      ? "border-blue bg-blue-wash"
                      : "border-transparent bg-canvas hover:border-border"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      active ? "bg-blue text-white" : "bg-white text-blue"
                    }`}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{item.title}</span>
                    <span className={`mt-0.5 block text-sm ${active ? "text-blue" : "text-text-muted"}`}>
                      {item.hint}
                    </span>
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                      active ? "border-blue bg-blue text-white" : "border-border bg-white"
                    }`}
                  >
                    {active && (
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
                        <path
                          d="M2.5 6.2 4.8 8.5 9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-canvas bg-canvas px-5 py-6 sm:px-8 sm:py-8 md:px-11">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Базовые", summary.base],
            ["Допы", summary.extras],
            ["Итого", summary.totalModules],
            ["Срок", `${summary.months} мес`],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`rounded-2xl px-4 py-4 ${
                i === 2 ? "bg-blue text-white" : "bg-white"
              }`}
            >
              <p className={`text-sm ${i === 2 ? "text-white/75" : "text-text-muted"}`}>{label}</p>
              <p className="mt-1 text-2xl font-medium leading-none tracking-[-0.48px]">{value}</p>
              {i === 3 && (
                <p className="mt-2 text-sm text-text-secondary">
                  {summary.zoneLabel?.title} · {summary.zoneLabel?.hint}
                </p>
              )}
            </div>
          ))}
        </div>

        {summary.renewal && (
          <p className="mt-4 rounded-2xl bg-blue-wash px-4 py-3 text-sm text-blue">
            Учтём скидку 10% для действующего абонемента при расчёте цены.
          </p>
        )}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[480px] text-sm text-text-secondary sm:text-base">
            Стоимость в рублях уточним по 1–2 фото мебели и выбранной зоне.
          </p>
          <LeadButton scenario="module" className="sm:shrink-0">
            Подготовить заявку
          </LeadButton>
        </div>
      </div>
    </div>
  );
}
