"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Testimonials() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const testimonials = [
    {
      quote: isTR
        ? "2LLSOFT, projemizi modern ve güçlü bir dijital ürüne dönüştürdü."
        : "2LLSOFT transformed our project into a modern and powerful digital product.",
      name: "NovaTech",
    },
    {
      quote: isTR
        ? "Dashboard ve backend sistemi beklentimizin üstünde oldu."
        : "The dashboard and backend system exceeded our expectations.",
      name: "Skyline AI",
    },
    {
      quote: isTR
        ? "Temiz tasarım, hızlı teslimat ve güçlü teknik yaklaşım."
        : "Clean design, fast delivery and strong technical approach.",
      name: "CloudForge",
    },
  ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        {isTR ? "Müşteri Yorumları" : "Testimonials"}
      </p>

      <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        {isTR
          ? "Modern şirketler için güven veren yazılım deneyimi."
          : "Software experience trusted by modern companies."}
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="glass-card glass-hover rounded-[2rem] p-8"
          >
            <p className="text-xl leading-9 text-zinc-300">
              “{item.quote}”
            </p>

            <p className="mt-8 font-bold text-cyan-400">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}