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
              <span
                className={`relative flex h-5 w-5 shrink-0 items-center justify-center text-text-muted transition-transform duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden
              >
                <span className="absolute h-[1.5px] w-3.5 rounded-full bg-current" />
                <span className="absolute h-3.5 w-[1.5px] rounded-full bg-current" />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`px-4 pb-4 text-sm leading-6 text-text-secondary transition-opacity duration-300 ease-out sm:px-5 sm:pb-5 sm:text-base motion-reduce:transition-none ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
