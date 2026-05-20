"use client";

import { useLanguage } from "@/lib/language-store";
import type { Language } from "@/lib/translations";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "pl", label: "PL" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
  { code: "nl", label: "NL" },
  { code: "pt", label: "PT" },
  { code: "ar", label: "AR" },
  { code: "ru", label: "RU" },
  { code: "ja", label: "JA" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(event) => setLanguage(event.target.value as Language)}
      className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
    >
      {languages.map((item) => (
        <option key={item.code} value={item.code}>
          {item.label}
        </option>
      ))}
    </select>
  );
}