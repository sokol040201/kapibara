"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ok = window.localStorage.getItem("kapibara-cookie-ok");
    if (!ok) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 z-50 flex w-full items-center justify-between gap-4 bg-blue px-4 py-3 text-white md:h-16">
      <p className="text-sm md:text-base">
        Используем cookie для работы сайта и аналитики.{" "}
        <a href="/politika" className="underline">
          Подробнее
        </a>
      </p>
      <button
        type="button"
        className="h-9 shrink-0 rounded-full bg-white px-5 text-black transition-all hover:bg-blue-wash"
        onClick={() => {
          window.localStorage.setItem("kapibara-cookie-ok", "1");
          setVisible(false);
        }}
      >
        OK
      </button>
    </div>
  );
}
