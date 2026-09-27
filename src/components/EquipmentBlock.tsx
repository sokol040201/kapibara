import Image from "next/image";
import { EQUIPMENT } from "@/lib/site";
import { Icon } from "@/components/Icon";

export function EquipmentBlock() {
  return (
    <div className="rounded-4xl bg-canvas p-4 md:p-8">
      <div className="mb-6 max-w-[720px]">
        <p className="text-sm font-medium text-blue">Оборудование</p>
        <h2 className="mt-2 text-2xl font-medium md:text-[40px] md:leading-[44px] lg:text-[52px]">
          Профессиональное оборудование
        </h2>
        <p className="mt-3 text-text-secondary md:text-lg">{EQUIPMENT.note}</p>
      </div>

      <div className="grid items-stretch gap-3 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-white md:min-h-[420px]">
          <Image
            src={EQUIPMENT.image}
            alt={EQUIPMENT.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-6 md:p-10"
          />
        </div>

        <div className="flex flex-col rounded-3xl bg-white p-6 md:p-8">
          <p className="text-sm font-medium text-blue">{EQUIPMENT.country} · выезд на дом</p>
          <h3 className="mt-2 text-[28px] font-medium leading-8 md:text-[32px]">
            {EQUIPMENT.name}
          </h3>
          <p className="mt-2 text-text-secondary">{EQUIPMENT.modelNote}</p>

          <ul className="mt-6 flex-1 space-y-3">
            {EQUIPMENT.points.map((point) => (
              <li key={point} className="flex gap-3 rounded-xl bg-canvas px-4 py-3">
                <span className="mt-0.5 shrink-0 text-blue">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {EQUIPMENT.badges.map((badge) => (
              <div key={badge} className="rounded-2xl bg-blue-wash px-3 py-3 text-center text-sm font-medium">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
