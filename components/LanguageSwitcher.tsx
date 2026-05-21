"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "tr", label: "TR", flag: "🇹🇷" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "pl", label: "PL", flag: "🇵🇱" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "nl", label: "NL", flag: "🇳🇱" },
  { code: "pt", label: "PT", flag: "🇵🇹" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "ja", label: "JA", flag: "🇯🇵" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className="rounded-full border border-white/10 bg-black/50 px-5 py-3 text-sm text-white outline-none backdrop-blur-xl"
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.flag} {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}