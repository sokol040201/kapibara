"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useCity } from "@/components/CityProvider";

type Props = {
  scenarioDefault?: "once" | "module";
  title?: string;
  subtitle?: string;
  compact?: boolean;
};

const fieldClass =
  "h-14 w-full rounded-2xl border border-transparent bg-canvas px-4 text-base outline-none transition-all placeholder:text-text-muted focus:border-blue focus:bg-white";

const selectClass = `${fieldClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23666666%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M19.5 8.25l-7.5 7.5-7.5-7.5%27/%3E%3C/svg%3E')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-11`;

export function LeadForm({
  scenarioDefault = "once",
  title = "Оставить заявку",
  subtitle = "Ответим с 09:00 до 22:00. После проверки откроем звонок или Telegram.",
  compact = false,
}: Props) {
  const { city } = useCity();
  const [scenario, setScenario] = useState(scenarioDefault);
  const [channel, setChannel] = useState<"phone" | "max" | "telegram">("phone");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("");
  const [task, setTask] = useState("");
  const [agree, setAgree] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => setScenario(scenarioDefault), [scenarioDefault]);

  const draft = [
    `Заявка Капибара · ${city.name}`,
    `Сценарий: ${scenario === "once" ? "Разовая чистка" : "Абонемент Модуль"}`,
    `Связь: ${channel === "phone" ? "телефон" : channel === "telegram" ? "Telegram" : "MAX"}`,
    name ? `Имя: ${name}` : "",
    phone ? `Телефон: ${phone}` : "",
    contact ? `Контакт: ${contact}` : "",
    task ? `Задача: ${task}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agree || !name.trim() || !phone.trim()) return;
    if (channel === "telegram" && city.telegram) {
      window.open(`${city.telegram}?text=${encodeURIComponent(draft)}`, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `tel:${city.phoneTel}`;
    }
  }

  async function copyDraft() {
    await navigator.clipboard.writeText(draft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={`flex h-full flex-col rounded-3xl bg-white ${compact ? "p-4 sm:p-5" : "p-4 sm:p-6 md:p-8"}`}>
      <h3 className="text-[24px] font-medium leading-7 sm:text-2xl md:text-[32px] md:leading-9">{title}</h3>
      <p className="mt-2 text-sm text-text-secondary sm:text-base">{subtitle}</p>

      <form className="mt-6 flex flex-1 flex-col gap-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Сценарий</span>
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value as "once" | "module")}
              className={selectClass}
            >
              <option value="once">Первый раз (разовая)</option>
              <option value="module">Абонемент Модуль</option>
            </select>
          </label>
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Как связаться</span>
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value as typeof channel)}
              className={selectClass}
            >
              <option value="phone">Позвонить</option>
              <option value="telegram">Telegram</option>
              <option value="max">MAX</option>
            </select>
          </label>
        </div>

        {(channel === "telegram" || channel === "max") && (
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Контакт в мессенджере</span>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={fieldClass}
              placeholder="@username"
            />
          </label>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Имя</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
            />
          </label>
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Телефон</span>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={fieldClass}
              placeholder="+7"
            />
          </label>
        </div>

        <label className="block min-w-0">
          <span className="mb-2 block text-sm font-medium">Что чистим</span>
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            rows={compact ? 2 : 3}
            className="min-h-[96px] w-full resize-none rounded-2xl border border-transparent bg-canvas px-4 py-3 text-base outline-none transition-all placeholder:text-text-muted focus:border-blue focus:bg-white"
            placeholder="Диван, кресло, матрас; пятна, запах"
          />
        </label>

        <label className="mt-auto flex items-start gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-blue"
            required
          />
          <span>
            Согласен на обработку данных и{" "}
            <Link href="/politika" className="text-blue underline">
              политику конфиденциальности
            </Link>
          </span>
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center rounded-2xl bg-blue text-lg font-medium text-white transition-all hover:bg-blue-hover"
          >
            {channel === "telegram" ? "В Telegram" : "Позвонить"}
          </button>
          <button
            type="button"
            onClick={copyDraft}
            className="flex h-14 w-full items-center justify-center rounded-2xl bg-canvas text-lg font-medium transition-all hover:bg-gray-hover"
          >
            {copied ? "Скопировано" : "Скопировать текст"}
          </button>
        </div>
      </form>
    </div>
  );
}
