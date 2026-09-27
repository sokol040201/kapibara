"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FaqList({ items }: { items: readonly Item[] | Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-[740px] space-y-2">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-base font-medium sm:gap-4 sm:px-5 sm:py-4 sm:text-xl"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="text-text-muted">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-text-secondary">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
