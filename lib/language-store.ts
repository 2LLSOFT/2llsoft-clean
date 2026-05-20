"use client";

import { useEffect, useState } from "react";
import { translations, type Language } from "@/lib/translations";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("2llsoft-language") as Language | null;

    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }, []);

  function changeLanguage(value: Language) {
    setLanguage(value);
    localStorage.setItem("2llsoft-language", value);
    window.dispatchEvent(new Event("language-change"));
  }

  return {
    language,
    setLanguage: changeLanguage,
    t: translations[language],
  };
}