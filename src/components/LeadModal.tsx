"use client";

import { LeadForm } from "@/components/LeadForm";
import { useCity } from "@/components/CityProvider";

export function LeadModal() {
  const { city, leadOpen, leadScenario, closeLead } = useCity();

  if (!leadOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-3 sm:p-4 md:items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLead();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-3xl bg-white shadow-service-card"
      >
        <LeadForm
          scenarioDefault={leadScenario}
          title="Оставить заявку"
          subtitle={`Ответим с 09:00 до 22:00 · ${city.name}. Прикрепите 1–2 фото — посчитаем точнее.`}
          onClose={closeLead}
        />
      </div>
    </div>
  );
}
