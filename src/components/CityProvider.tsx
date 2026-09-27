"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { cities, type City, type CityId } from "@/lib/site";

type LeadScenario = "once" | "module";

type CityContextValue = {
  city: City;
  cityId: CityId;
  setCityId: (id: CityId) => void;
  leadOpen: boolean;
  leadScenario: LeadScenario;
  openLead: (scenario?: LeadScenario) => void;
  closeLead: () => void;
};

const CityContext = createContext<CityContextValue | null>(null);
const STORAGE_KEY = "kapibara-city";

export function CityProvider({ children }: { children: ReactNode }) {
  const [cityId, setCityIdState] = useState<CityId>("nsk");
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadScenario, setLeadScenario] = useState<LeadScenario>("once");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "nsk" || saved === "hbk") setCityIdState(saved);
  }, []);

  const setCityId = useCallback((id: CityId) => {
    setCityIdState(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }, []);

  const openLead = useCallback((scenario: LeadScenario = "once") => {
    setLeadScenario(scenario);
    setLeadOpen(true);
  }, []);

  const closeLead = useCallback(() => setLeadOpen(false), []);

  const value = useMemo(
    () => ({
      city: cities[cityId],
      cityId,
      setCityId,
      leadOpen,
      leadScenario,
      openLead,
      closeLead,
    }),
    [cityId, leadOpen, leadScenario, setCityId, openLead, closeLead],
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

export function useCity() {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error("useCity must be used within CityProvider");
  return ctx;
}
