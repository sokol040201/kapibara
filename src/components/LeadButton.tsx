"use client";

import { useCity } from "@/components/CityProvider";

type Props = {
  children: React.ReactNode;
  scenario?: "once" | "module";
  variant?: "primary" | "secondary" | "white" | "outline-white";
  className?: string;
  type?: "button" | "submit";
};

const styles = {
  primary:
    "bg-blue text-white hover:bg-blue-hover",
  secondary:
    "bg-canvas text-black hover:bg-gray-hover",
  white:
    "bg-white text-black hover:bg-blue-wash",
  "outline-white":
    "border border-white bg-transparent text-white hover:bg-white hover:text-black",
};

export function LeadButton({
  children,
  scenario = "once",
  variant = "primary",
  className = "",
  type = "button",
}: Props) {
  const { openLead } = useCity();
  return (
    <button
      type={type}
      onClick={() => openLead(scenario)}
      className={`flex h-14 w-full max-w-none items-center justify-center rounded-2xl px-6 text-base font-medium transition-all sm:h-16 sm:max-w-64 sm:px-8 sm:text-lg ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
