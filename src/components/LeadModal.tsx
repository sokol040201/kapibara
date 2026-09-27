"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useCity } from "@/components/CityProvider";

export function LeadModal() {
  const { city, leadOpen, leadScenario, closeLead } = useCity();
  const [scenario, setScenario] = useState(leadScenario);

  useEffect(() => {
    if (leadOpen) setScenario(leadScenario);
  }, [leadOpen, leadScenario]);
  const [channel, setChannel] = useState<"phone" | "max" | "telegram">("phone");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("");
  const [task, setTask] = useState("");
  const [agree, setAgree] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!leadOpen) return null;

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
      const url = `${city.telegram}?text=${encodeURIComponent(draft)}`;
      window.open(url, "_blank", "noopener,noreferrer");
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
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-3 sm:p-4 md:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-title"
        className="max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-3xl bg-white p-4 sm:rounded-4xl sm:p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div>
            <h2 id="lead-title" className="text-[24px] font-medium leading-7 sm:text-2xl md:text-[32px] md:leading-9">
              Оставить заявку
            </h2>
            <p className="mt-2 text-sm text-text-secondary sm:text-base">
              Ответим с 09:00 до 22:00 · {city.name}. Сервера приёма нет — отправим вас в звонок или Telegram.
            </p>
          </div>
          <button
            type="button"
            onClick={closeLead}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas transition-all hover:bg-gray-hover"
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Сценарий чистки</span>
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value as "once" | "module")}
              className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-transparent bg-canvas bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23666666%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M19.5 8.25l-7.5 7.5-7.5-7.5%27/%3E%3C/svg%3E')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat px-4 pr-11 text-base outline-none transition-all focus:border-blue focus:bg-white"
            >
              <option value="once">Первый раз (разовая)</option>
              <option value="module">Абонемент Модуль — выгодно</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium">Как лучше связаться</span>
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value as typeof channel)}
              className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-transparent bg-canvas bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23666666%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M19.5 8.25l-7.5 7.5-7.5-7.5%27/%3E%3C/svg%3E')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat px-4 pr-11 text-base outline-none transition-all focus:border-blue focus:bg-white"
            >
              <option value="phone">Позвонить на телефон</option>
              <option value="telegram">Написать в Telegram</option>
              <option value="max">Написать в MAX</option>
            </select>
          </label>

          {(channel === "telegram" || channel === "max") && (
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Контакт в Telegram / MAX</span>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="h-14 w-full rounded-2xl border border-transparent bg-canvas px-4 text-base outline-none transition-all placeholder:text-text-muted focus:border-blue focus:bg-white"
                placeholder="@username или ссылка"
              />
            </label>
          )}

          <label className="block">
            <span className="mb-2 block text-sm font-medium">Как к вам обращаться</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 w-full rounded-2xl border border-transparent bg-canvas px-4 text-base outline-none transition-all placeholder:text-text-muted focus:border-blue focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium">Телефон</span>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-14 w-full rounded-2xl border border-transparent bg-canvas px-4 text-base outline-none transition-all placeholder:text-text-muted focus:border-blue focus:bg-white"
              placeholder="+7"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium">Что чистим и что беспокоит</span>
            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              rows={3}
              className="min-h-[96px] w-full resize-none rounded-2xl border border-transparent bg-canvas px-4 py-3 text-base outline-none transition-all placeholder:text-text-muted focus:border-blue focus:bg-white"
              placeholder="Диван, кресло, матрас; пятна, запах, разводы"
            />
          </label>

          <label className="flex items-start gap-3 text-sm text-text-secondary">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-blue"
              required
            />
            <span>
              Согласен на обработку персональных данных и принимаю{" "}
              <Link href="/politika" className="text-blue underline">
                политику конфиденциальности
              </Link>
            </span>
          </label>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center rounded-2xl bg-blue text-lg font-medium text-white transition-all hover:bg-blue-hover"
            >
              {channel === "telegram" ? "Открыть Telegram" : "Позвонить"}
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
    </div>
  );
}
