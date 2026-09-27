"use client";

import { useMemo, useState } from "react";
import { LeadButton } from "@/components/LeadButton";

const ZONE_LABELS = [
  "Зона 1 — до 5 км",
  "Зона 2 — 5–7 км",
  "Зона 3 — 7–10 км",
  "Зона 4 — 10–15 км",
  "Зона 5 — 15–20 км",
];

export function ModuleCalculator() {
  const [modules, setModules] = useState(20);
  const [months, setMonths] = useState(6);
  const [zone, setZone] = useState(1);
  const [odor, setOdor] = useState(false);
  const [hardStains, setHardStains] = useState(false);
  const [renewal, setRenewal] = useState(false);

  const summary = useMemo(() => {
    const base = Math.max(5, modules);
    const extras = (odor ? 2 : 0) + (hardStains ? 1 : 0);
    const totalModules = base + extras;
    return { base, extras, totalModules, months, zone, renewal };
  }, [modules, months, zone, odor, hardStains, renewal]);

  return (
    <div className="rounded-3xl bg-canvas p-6 md:p-11">
      <h3 className="text-[28px] font-medium leading-8 md:text-[32px]">Калькулятор модулей</h3>
      <p className="mt-3 max-w-2xl text-text-secondary">
        Считаем объём обслуживания. Сумму в рублях подтверждаем по фото — коэффициенты зон на живом сайте
        закрыты скриптом, выдуманную цену за модуль не ставим.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex justify-between text-sm font-medium">
            Количество модулей <strong>{modules}</strong>
          </span>
          <input
            type="range"
            min={5}
            max={60}
            step={0.5}
            value={modules}
            onChange={(e) => setModules(Number(e.target.value))}
            className="w-full accent-blue"
          />
          <span className="mt-1 block text-sm text-text-muted">Минимум выезда — 5 модулей, шаг 0,5</span>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium">Срок абонемента</span>
          <select
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="h-12 w-full rounded-xl bg-white px-4 outline-none"
          >
            {Array.from({ length: 7 }, (_, i) => i + 6).map((m) => (
              <option key={m} value={m}>
                {m} месяцев{m === 6 ? " (минимальный срок)" : ""}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium">Зона выезда</span>
          <select
            value={zone}
            onChange={(e) => setZone(Number(e.target.value))}
            className="h-12 w-full rounded-xl bg-white px-4 outline-none"
          >
            {ZONE_LABELS.map((label, i) => (
              <option key={label} value={i + 1}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <div className="space-y-3 rounded-2xl bg-white p-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={odor} onChange={(e) => setOdor(e.target.checked)} />
            <span>+2 модуля — устранение запаха</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={hardStains}
              onChange={(e) => setHardStains(e.target.checked)}
            />
            <span>+1 модуль — сложные загрязнения</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={renewal} onChange={(e) => setRenewal(e.target.checked)} />
            <span>Уже есть действующий абонемент (−10%)</span>
          </label>
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-white p-6">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-sm text-text-muted">Базовые модули</dt>
            <dd className="text-2xl font-medium">{summary.base}</dd>
          </div>
          <div>
            <dt className="text-sm text-text-muted">Допы</dt>
            <dd className="text-2xl font-medium">{summary.extras}</dd>
          </div>
          <div>
            <dt className="text-sm text-text-muted">Итого модулей</dt>
            <dd className="text-2xl font-medium">{summary.totalModules}</dd>
          </div>
          <div>
            <dt className="text-sm text-text-muted">Период / зона</dt>
            <dd className="text-2xl font-medium">
              {summary.months} мес · з.{summary.zone}
            </dd>
          </div>
        </dl>
        {summary.renewal && (
          <p className="mt-4 text-sm text-blue">Учтём скидку 10% для действующего абонемента при расчёте цены.</p>
        )}
        <p className="mt-4 text-text-secondary">
          Стоимость в рублях: уточним по 1–2 фото мебели и выбранной зоне. Без выдуманного прайса.
        </p>
        <div className="mt-6">
          <LeadButton scenario="module">Подготовить заявку</LeadButton>
        </div>
      </div>
    </div>
  );
}
