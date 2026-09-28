"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { useCity } from "@/components/CityProvider";
import { SOCIAL } from "@/lib/site";

type Props = {
  scenarioDefault?: "once" | "module";
  title?: string;
  subtitle?: string;
  compact?: boolean;
  onClose?: () => void;
};

const MAX_PHOTOS = 5;
const MAX_BYTES = 8 * 1024 * 1024;

const fieldClass =
  "h-14 w-full rounded-2xl border border-transparent bg-canvas px-4 text-base outline-none transition-all placeholder:text-text-muted focus:border-blue focus:bg-white";

const selectClass = `${fieldClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23666666%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M19.5 8.25l-7.5 7.5-7.5-7.5%27/%3E%3C/svg%3E')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-11`;

type PhotoItem = { id: string; file: File; url: string };

function maxHref() {
  const item = SOCIAL.find((s) => s.id === "max");
  return item && "href" in item ? item.href : "https://max.ru/kapibarapro";
}

export function LeadForm({
  scenarioDefault = "once",
  title = "Оставить заявку",
  subtitle = "Ответим с 09:00 до 22:00. Можно сразу прикрепить 1–2 фото мебели.",
  compact = false,
  onClose,
}: Props) {
  const { city } = useCity();
  const inputId = useId();
  const fileRef = useRef<HTMLInputElement>(null);
  const [scenario, setScenario] = useState(scenarioDefault);
  const [channel, setChannel] = useState<"phone" | "max" | "telegram">("phone");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("");
  const [task, setTask] = useState("");
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [agree, setAgree] = useState(false);
  const [copied, setCopied] = useState(false);
  const [photoError, setPhotoError] = useState("");

  const photosRef = useRef<PhotoItem[]>([]);
  photosRef.current = photos;

  useEffect(() => setScenario(scenarioDefault), [scenarioDefault]);

  useEffect(() => {
    return () => {
      photosRef.current.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, []);

  const draft = [
    `Заявка Капибара · ${city.name}`,
    `Сценарий: ${scenario === "once" ? "Разовая чистка" : "Абонемент Модуль"}`,
    `Связь: ${channel === "phone" ? "телефон" : channel === "telegram" ? "Telegram" : "MAX"}`,
    name ? `Имя: ${name}` : "",
    phone ? `Телефон: ${phone}` : "",
    contact ? `Контакт: ${contact}` : "",
    task ? `Задача: ${task}` : "",
    photos.length
      ? `Фото: ${photos.length} шт. (${photos.map((p) => p.file.name).join(", ")}) — пришлю следующим сообщением`
      : "Фото: не прикреплено",
  ]
    .filter(Boolean)
    .join("\n");

  function addPhotos(list: FileList | null) {
    if (!list?.length) return;
    setPhotoError("");
    const next: PhotoItem[] = [];
    for (const file of Array.from(list)) {
      if (!file.type.startsWith("image/")) {
        setPhotoError("Можно только изображения");
        continue;
      }
      if (file.size > MAX_BYTES) {
        setPhotoError("Каждый файл — до 8 МБ");
        continue;
      }
      next.push({ id: `${file.name}-${file.size}-${file.lastModified}`, file, url: URL.createObjectURL(file) });
    }
    setPhotos((prev) => {
      const merged = [...prev];
      for (const item of next) {
        if (merged.length >= MAX_PHOTOS) break;
        if (!merged.some((p) => p.id === item.id)) merged.push(item);
        else URL.revokeObjectURL(item.url);
      }
      return merged;
    });
    if (fileRef.current) fileRef.current.value = "";
  }

  function removePhoto(id: string) {
    setPhotos((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((p) => p.id !== id);
    });
  }

  async function shareOrOpenMessenger() {
    const files = photos.map((p) => p.file);
    if (files.length && typeof navigator !== "undefined" && navigator.canShare) {
      try {
        const payload: ShareData = { text: draft, files };
        if (navigator.canShare(payload)) {
          await navigator.share(payload);
          return;
        }
      } catch {
        /* user cancel or unsupported — fall through */
      }
    }

    if (channel === "telegram" && city.telegram) {
      window.open(`${city.telegram}?text=${encodeURIComponent(draft)}`, "_blank", "noopener,noreferrer");
      return;
    }
    if (channel === "max") {
      window.open(maxHref(), "_blank", "noopener,noreferrer");
      return;
    }
    window.location.href = `tel:${city.phoneTel}`;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agree || !name.trim() || !phone.trim()) return;
    await shareOrOpenMessenger();
    onClose?.();
  }

  async function copyDraft() {
    await navigator.clipboard.writeText(draft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const submitLabel =
    channel === "telegram" ? "В Telegram" : channel === "max" ? "В MAX" : "Позвонить";

  return (
    <div className={`flex h-full flex-col rounded-3xl bg-white ${compact ? "p-4 sm:p-5" : "p-4 sm:p-6 md:p-8"}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[24px] font-medium leading-7 sm:text-2xl md:text-[32px] md:leading-9">{title}</h3>
          <p className="mt-2 text-sm text-text-secondary sm:text-base">{subtitle}</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas text-xl transition-all hover:bg-gray-hover"
            aria-label="Закрыть"
          >
            ×
          </button>
        )}
      </div>

      <form className="mt-6 flex flex-1 flex-col gap-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Сценарий чистки</span>
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value as "once" | "module")}
              className={selectClass}
            >
              <option value="once">Первый раз (разовая)</option>
              <option value="module">Абонемент Модуль — выгодно</option>
            </select>
          </label>
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Как лучше связаться</span>
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value as typeof channel)}
              className={selectClass}
            >
              <option value="phone">Позвонить на телефон</option>
              <option value="telegram">Написать в Telegram</option>
              <option value="max">Написать в MAX</option>
            </select>
          </label>
        </div>

        {(channel === "telegram" || channel === "max") && (
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Контакт в Telegram / MAX</span>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={fieldClass}
              placeholder={
                channel === "max"
                  ? "Для MAX можно не заполнять"
                  : "@username или ссылка"
              }
            />
          </label>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block min-w-0">
            <span className="mb-2 block text-sm font-medium">Как к вам обращаться</span>
            <input required value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} />
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
          <span className="mb-2 block text-sm font-medium">Что чистим и что беспокоит</span>
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            rows={compact ? 2 : 3}
            className="min-h-[96px] w-full resize-none rounded-2xl border border-transparent bg-canvas px-4 py-3 text-base outline-none transition-all placeholder:text-text-muted focus:border-blue focus:bg-white"
            placeholder="Диван, кресло, матрас; пятна, запах, разводы"
          />
        </label>

        <div className="block min-w-0">
          <span className="mb-2 block text-sm font-medium">Фото мебели для точного расчёта</span>
          <p className="mb-3 text-sm text-text-secondary">
            Достаточно 1–2 фото: общий вид и проблемная зона, если она есть. До {MAX_PHOTOS} файлов.
          </p>
          <input
            ref={fileRef}
            id={inputId}
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(e) => addPhotos(e.target.files)}
          />
          <label
            htmlFor={inputId}
            className="flex min-h-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-border bg-canvas px-4 py-4 text-center transition-all hover:border-blue hover:bg-blue-wash"
          >
            <span className="text-base font-medium text-blue">Прикрепить фото</span>
            <span className="text-sm text-text-secondary">JPG, PNG, WEBP · до 8 МБ</span>
          </label>
          {photoError && <p className="mt-2 text-sm text-red-600">{photoError}</p>}
          {photos.length > 0 && (
            <ul className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {photos.map((photo) => (
                <li key={photo.id} className="relative aspect-square overflow-hidden rounded-xl bg-canvas">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.url} alt="" className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removePhoto(photo.id)}
                    className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-sm text-white"
                    aria-label="Удалить фото"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <label className="mt-auto flex items-start gap-3 text-sm text-text-secondary">
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center rounded-2xl bg-blue text-lg font-medium text-white transition-all hover:bg-blue-hover"
          >
            {submitLabel}
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
