type BadgeProps = {
  value: string;
  className?: string;
  tone?: "blue" | "soft";
};

function Badge({ value, className = "", tone = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-flex min-w-8 items-center justify-center rounded-full px-2 py-1 text-xs font-semibold tabular-nums sm:min-w-9 sm:text-sm ${
        tone === "blue" ? "bg-blue text-white" : "bg-white text-blue ring-1 ring-blue/20"
      } ${className}`}
    >
      {value}
    </span>
  );
}

function SolidSofa() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="rounded-[28px] bg-gradient-to-b from-[#e8f2ff] to-[#d6e8ff] p-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.7)]">
        {/* back */}
        <div className="relative mb-2 flex h-16 items-center justify-center rounded-[22px] bg-white/90 shadow-sm ring-1 ring-blue/10 sm:h-[72px]">
          <Badge value="≈ 3" />
          <span className="absolute bottom-2 left-3 text-[11px] font-medium text-text-muted">Спинка</span>
        </div>
        {/* seat + arms */}
        <div className="grid grid-cols-[40px_1fr_40px] gap-2 sm:grid-cols-[48px_1fr_48px]">
          <div className="relative flex items-center justify-center rounded-[18px] bg-white/90 py-8 shadow-sm ring-1 ring-blue/10">
            <Badge value="0,5" tone="soft" />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap text-[10px] font-medium text-text-muted">
              Подлок.
            </span>
          </div>
          <div className="relative flex min-h-[96px] items-center justify-center rounded-[22px] bg-white shadow-sm ring-1 ring-blue/10 sm:min-h-[110px]">
            <Badge value="≈ 3" />
            <span className="absolute bottom-2 left-3 text-[11px] font-medium text-text-muted">Сиденье</span>
          </div>
          <div className="relative flex items-center justify-center rounded-[18px] bg-white/90 py-8 shadow-sm ring-1 ring-blue/10">
            <Badge value="0,5" tone="soft" />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap text-[10px] font-medium text-text-muted">
              Подлок.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModularSofa() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="rounded-[28px] bg-gradient-to-b from-[#e8f2ff] to-[#d6e8ff] p-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.7)]">
        {/* three back modules */}
        <div className="mb-2 grid grid-cols-3 gap-2">
          {["1", "1", "1"].map((v, i) => (
            <div
              key={`back-${i}`}
              className="relative flex h-14 items-center justify-center rounded-[18px] bg-white/90 shadow-sm ring-1 ring-blue/10 sm:h-16"
            >
              <Badge value={v} />
              {i === 0 && (
                <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-text-muted">Спинки</span>
              )}
            </div>
          ))}
        </div>
        {/* arms + three seat modules */}
        <div className="grid grid-cols-[36px_1fr_36px] gap-2 sm:grid-cols-[44px_1fr_44px]">
          <div className="relative flex items-center justify-center rounded-[16px] bg-white/90 py-7 shadow-sm ring-1 ring-blue/10">
            <Badge value="0,5" tone="soft" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["1", "1", "1"].map((v, i) => (
              <div
                key={`seat-${i}`}
                className="relative flex min-h-[88px] items-center justify-center rounded-[18px] bg-white shadow-sm ring-1 ring-blue/10 sm:min-h-[100px]"
              >
                <Badge value={v} />
                {i === 0 && (
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-text-muted">Сиденья</span>
                )}
              </div>
            ))}
          </div>
          <div className="relative flex items-center justify-center rounded-[16px] bg-white/90 py-7 shadow-sm ring-1 ring-blue/10">
            <Badge value="0,5" tone="soft" />
          </div>
        </div>
      </div>
    </div>
  );
}

const RULES = [
  { title: "Модуль", text: "участок мебели до 60 см — единица расчёта" },
  { title: "Секция", text: "сиденье / спинка / подлокотник — чистим целиком" },
  { title: "Кратность", text: "шаг 0,5 модуля, округление вверх" },
  { title: "Допы", text: "+2 за запах, +1 за сложные загрязнения" },
] as const;

export function ModuleScheme({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "rounded-3xl bg-white px-4 py-8 sm:px-6 md:p-11"}>
      {!compact && (
        <>
          <h2 className="text-[26px] font-medium leading-8 sm:text-2xl md:text-[40px] md:leading-[44px]">
            Что такое «модуль» и как считаем
          </h2>
          <p className="mt-3 max-w-[720px] text-sm text-text-secondary sm:text-base md:text-lg">
            1 модуль — участок до 60&nbsp;см. Чистим полными секциями, чтобы не было границ чистки и
            «ореолов». В одной секции может быть больше 1 модуля — считаем по размеру.
          </p>
        </>
      )}

      <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ${compact ? "" : "mt-8"}`}>
        {RULES.map((rule) => (
          <div key={rule.title} className="rounded-2xl bg-canvas px-4 py-4">
            <p className="text-sm font-semibold text-blue">{rule.title}</p>
            <p className="mt-1 text-sm text-text-secondary">{rule.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="rounded-3xl bg-canvas p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h3 className="text-xl font-medium">Цельный диван</h3>
              <p className="mt-1 text-sm text-text-secondary">
                Спинка и сиденье без разделения — считаем по размеру секции
              </p>
            </div>
            <p className="rounded-full bg-white px-3 py-1 text-sm font-medium text-blue">
              ≈ 7 модулей
            </p>
          </div>
          <SolidSofa />
          <p className="mt-4 text-sm text-text-secondary">
            Пример: цельная спинка и сиденье ≈ по 3 модуля, подлокотники по 0,5.
          </p>
        </article>

        <article className="rounded-3xl bg-canvas p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h3 className="text-xl font-medium">Модульный диван</h3>
              <p className="mt-1 text-sm text-text-secondary">
                Каждый блок считается отдельно — честнее и понятнее
              </p>
            </div>
            <p className="rounded-full bg-white px-3 py-1 text-sm font-medium text-blue">
              ≈ 7 модулей
            </p>
          </div>
          <ModularSofa />
          <p className="mt-4 text-sm text-text-secondary">
            Пример: три сиденья и три спинки по 1 модулю, подлокотники по 0,5.
          </p>
        </article>
      </div>

      <div className="mt-6 grid gap-3 rounded-2xl bg-blue-wash px-4 py-4 text-sm text-text-secondary sm:grid-cols-3 sm:px-5">
        <p>
          <span className="font-medium text-black">Пример:</span> секция ~1,2&nbsp;м ≈ 2,0 модуля
        </p>
        <p>
          <span className="font-medium text-black">Пример:</span> секция ~0,8&nbsp;м ≈ 1,5 модуля
        </p>
        <p>
          <span className="font-medium text-black">Точно:</span> по 1–2 фото или на месте при первичной
          чистке
        </p>
      </div>
    </div>
  );
}
