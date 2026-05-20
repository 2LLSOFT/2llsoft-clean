"use client";

import { useLanguage } from "@/lib/language-store";
import type { Language } from "@/lib/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(event) => setLanguage(event.target.value as Language)}
      className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
    >
      <option value="en">EN</option>
      <option value="tr">TR</option>
      <option value="de">DE</option>
      <option value="pl">PL</option>
    </select>
  );
}