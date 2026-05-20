"use client";

import { useEffect, useState } from "react";
import { translations, type Language } from "@/lib/translations";

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("2llsoft-language") as Language | null;

    if (saved && translations[saved]) {
      setLanguageState(saved);
    }

    const handler = () => {
      const current = localStorage.getItem(
        "2llsoft-language"
      ) as Language | null;

      if (current && translations[current]) {
        setLanguageState(current);
      }
    };

    window.addEventListener("language-change", handler);

    return () => {
      window.removeEventListener("language-change", handler);
    };
  }, []);

  function setLanguage(value: Language) {
    localStorage.setItem("2llsoft-language", value);
    setLanguageState(value);
    window.dispatchEvent(new Event("language-change"));
  }

  return {
    language,
    setLanguage,
    t: translations[language],
  };
}