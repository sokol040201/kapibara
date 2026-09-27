import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import { CityProvider } from "@/components/CityProvider";
import { LeadModal } from "@/components/LeadModal";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Капибара — выездная химчистка мебели",
    template: "%s · Капибара",
  },
  description:
    "Химчистка мебели на дому в Новосибирске и Хабаровске. Сначала результат, потом оплата. Абонемент «Модуль» — чистота по секциям без полной перечистки каждый раз.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${golos.variable} ${golos.className}`}>
        <CityProvider>
          {children}
          <LeadModal />
          <CookieBanner />
        </CityProvider>
      </body>
    </html>
  );
}
