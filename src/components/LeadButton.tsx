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
    "bg-white text-black hover:bg-blue hover:text-white",
  "outline-white":
    "border border-white bg-transparent text-white hover:border-blue-interactive hover:bg-blue-interactive",
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
      className={`flex h-16 w-full max-w-64 items-center justify-center rounded-2xl px-8 text-lg font-medium transition-all ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
