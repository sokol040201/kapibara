"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ok = window.localStorage.getItem("kapibara-cookie-ok");
    if (!ok) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 z-50 flex w-full flex-col gap-3 bg-blue px-4 py-3 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:h-16 md:py-0">
      <p className="text-sm md:text-base">
        Используем cookie для работы сайта и аналитики.{" "}
        <Link href="/politika" className="underline">
          Подробнее
        </Link>
      </p>
      <button
        type="button"
        className="h-10 w-full shrink-0 rounded-full bg-white px-5 text-black transition-all hover:bg-blue-wash sm:h-9 sm:w-auto"
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
