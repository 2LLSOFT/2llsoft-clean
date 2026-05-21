"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function WhyUs() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const items = isTR
    ? [
        "Premium UI/UX tasarımı",
        "Ölçeklenebilir backend mimarisi",
        "Production-ready teslimat",
        "Uzun vadeli teknik destek",
      ]
    : [
        "Premium UI/UX design",
        "Scalable backend architecture",
        "Production-ready delivery",
        "Long-term technical support",
      ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        {isTR ? "Neden 2LLSOFT?" : "Why 2LLSOFT"}
      </p>

      <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        {isTR
          ? "Modern yazılım ürünleri için güçlü mühendislik yaklaşımı."
          : "Engineering modern software products with a premium approach."}
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="glass-card glass-hover rounded-[2rem] p-8 text-xl font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}