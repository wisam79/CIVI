"use client";

import { useApp } from "@/contexts/app-provider";
import { translations } from "@/lib/i18n";

export function useTranslation() {
  const { state } = useApp();
  return translations[state.language];
}
