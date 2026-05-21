"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const values = isTR
    ? ["Temiz yazılım mimarisi", "Premium arayüz tasarımı", "Ölçeklenebilir backend sistemleri", "Production odaklı teslimat"]
    : ["Clean engineering architecture", "Premium interface design", "Scalable backend systems", "Production-focused delivery"];

  return (
    <section id="about" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            {isTR ? "2LLSOFT Hakkında" : "About 2LLSOFT"}
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-7xl">
            {isTR
              ? "Premium dijital sistemlere odaklanan yazılım şirketi."
              : "A software company focused on premium digital systems."}
          </h2>
        </div>

        <div>
          <p className="text-xl leading-9 text-zinc-400">
            {isTR
              ? "2LLSOFT, Słupsk Polonya merkezli modern bir yazılım şirketidir. Web platformları, mobil uygulamalar, dashboard sistemleri, backend altyapıları ve AI destekli ürünler geliştirir."
              : "2LLSOFT is a modern software company based in Słupsk, Poland, building scalable web platforms, mobile applications, dashboards, backend systems and AI-powered digital products."}
          </p>

          <p className="mt-8 text-lg leading-8 text-zinc-500">
            {isTR
              ? "Her proje temiz mimari, güçlü görsel kimlik, production-ready altyapı ve uzun vadeli ölçeklenebilirlik düşünülerek tasarlanır."
              : "Every project is designed with clean architecture, strong visual identity, production-ready infrastructure and long-term scalability in mind."}
          </p>

          <div className="mt-10 grid gap-4">
            {values.map((value) => (
              <div key={value} className="glass-card glass-hover rounded-2xl p-5 text-zinc-300">
                ✓ {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}