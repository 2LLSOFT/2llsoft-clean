"use client";

import { useLanguage } from "@/components/LanguageProvider";

function LogoMark() {
  return (
    <svg
      className="h-[180px] w-[180px]"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="120" height="120" rx="32" fill="#030303" />
      <path d="M32 78L58 42H76L50 78H32Z" fill="#22D3EE" />
      <path d="M62 78L88 42H104L78 78H62Z" fill="white" />
      <circle cx="30" cy="32" r="6" fill="#22D3EE" />
    </svg>
  );
}

export default function BrandShowcase() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-10 rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 md:grid-cols-2 md:p-16">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            {isTR ? "Marka Sistemi" : "Brand System"}
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            {isTR
              ? "Premium yazılım mühendisliği için minimal kimlik."
              : "Minimal identity for premium software engineering."}
          </h2>

          <p className="mt-8 leading-8 text-zinc-400">
            {isTR
              ? "2LLSOFT; koyu arayüzler, keskin tipografi ve cyan sistem vurguları üzerine kurulu temiz, sinematik ve teknik bir görsel dil kullanır."
              : "2LLSOFT uses a clean, cinematic and technical visual language built around dark interfaces, sharp typography and cyan system accents."}
          </p>
        </div>

        <div className="flex items-center justify-center rounded-[2rem] border border-white/10 bg-black/40 p-12">
          <LogoMark />
        </div>
      </div>
    </section>
  );
}