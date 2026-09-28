import type { ReactNode } from "react";

/** Ровные геометрические иконки, viewBox 24×24, stroke 1.75 */
const paths: Record<string, ReactNode> = {
  sofa: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 14.5V17a1.5 1.5 0 001.5 1.5h11A1.5 1.5 0 0019 17v-2.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 14.5h16a1.5 1.5 0 000-3H4a1.5 1.5 0 000 3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 11.5V9A1.5 1.5 0 018 7.5h8A1.5 1.5 0 0117.5 9v2.5"
      />
      <path strokeLinecap="round" d="M8 18.5v1.5M16 18.5v1.5" />
    </>
  ),
  shield: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l7 3v5.2c0 4.4-2.9 7.5-7 9.3-4.1-1.8-7-4.9-7-9.3V6.5l7-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.2 12.2l1.9 1.9 3.7-3.8" />
    </>
  ),
  camera: (
    <>
      <rect x="3.5" y="7" width="17" height="12" rx="2.5" strokeLinejoin="round" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7l1.2-2.2A1.5 1.5 0 0111.5 4h1a1.5 1.5 0 011.3.8L15 7"
      />
      <circle cx="12" cy="13" r="3.25" />
    </>
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3.5 2" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" strokeLinejoin="round" />
      <path strokeLinecap="round" d="M3 10h18" />
      <path strokeLinecap="round" d="M7 14.5h4M7 17h2.5" />
    </>
  ),
  spark: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5V6M12 18v2.5M3.5 12H6M18 12h2.5M6.2 6.2l1.8 1.8M16 16l1.8 1.8M17.8 6.2L16 8M8 16l-1.8 1.8"
      />
      <circle cx="12" cy="12" r="2.75" />
    </>
  ),
  module: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" strokeLinejoin="round" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" strokeLinejoin="round" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" strokeLinejoin="round" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" strokeLinejoin="round" />
    </>
  ),
  machine: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 8.5h7.5A2.5 2.5 0 0117 11v5.5a2 2 0 01-2 2H8a2 2 0 01-2-2V10a1.5 1.5 0 011.5-1.5z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 8.5V6.5A1.5 1.5 0 0111 5h2a1.5 1.5 0 011.5 1.5V8.5" />
      <circle cx="9.5" cy="14.5" r="1.25" />
      <path strokeLinecap="round" d="M13 13.5h2.5M13 16h2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 12.5h2.5l1 2.5v2" />
    </>
  ),
  star: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.5l2.35 4.76 5.25.76-3.8 3.7.9 5.24L12 15.5l-4.7 2.46.9-5.24-3.8-3.7 5.25-.76L12 3.5z"
    />
  ),
  chevronLeft: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5L7.5 12 15 4.5" />
  ),
  chevronRight: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5L16.5 12 9 19.5" />
  ),
};

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
