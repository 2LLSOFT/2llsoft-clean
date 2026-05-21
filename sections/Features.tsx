"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Features() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const features = [
    {
      title: isTR ? "Hızlı Performans" : "Fast Performance",
      text: isTR
        ? "Modern frontend ve optimize edilmiş backend mimarisi."
        : "Modern frontend and optimized backend architecture.",
    },
    {
      title: isTR ? "Ölçeklenebilir Altyapı" : "Scalable Infrastructure",
      text: isTR
        ? "Büyüyen şirketler için güçlü cloud ve database yapısı."
        : "Cloud and database structure for growing companies.",
    },
    {
      title: isTR ? "Premium Tasarım" : "Premium Design",
      text: isTR
        ? "Güven veren, modern ve conversion odaklı arayüzler."
        : "Modern, trustworthy and conversion-focused interfaces.",
    },
  ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        {isTR ? "Özellikler" : "Features"}
      </p>

      <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        {isTR
          ? "Modern yazılım ürünleri için güçlü temel özellikler."
          : "Core features for modern software products."}
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="glass-card glass-hover rounded-[2rem] p-8"
          >
            <p className="text-sm text-cyan-400">0{index + 1}</p>

            <h3 className="mt-8 text-3xl font-black">
              {feature.title}
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}