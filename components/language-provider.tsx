"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  languageOptions,
  languages,
  type Language
} from "@/data/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "alanliu-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey);
    const initialLanguage = languages.includes(storedLanguage as Language)
      ? (storedLanguage as Language)
      : "en";

    setLanguageState(initialLanguage);
    const option = languageOptions.find((item) => item.code === initialLanguage);
    document.documentElement.lang = option?.htmlLang ?? "en";
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
    const option = languageOptions.find((item) => item.code === nextLanguage);
    document.documentElement.lang = option?.htmlLang ?? "en";
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
