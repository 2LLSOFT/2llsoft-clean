"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Process() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const steps = [
    {
      title: isTR ? "Keşif" : "Discovery",
      text: isTR
        ? "İş hedeflerini, ihtiyaçları ve teknik yönü netleştiriyoruz."
        : "We clarify business goals, requirements and technical direction.",
    },
    {
      title: isTR ? "Tasarım" : "Design",
      text: isTR
        ? "Premium arayüz, kullanıcı deneyimi ve marka hissi oluşturuyoruz."
        : "We create premium interface, user experience and brand feeling.",
    },
    {
      title: isTR ? "Geliştirme" : "Development",
      text: isTR
        ? "Frontend, backend, database ve API sistemlerini inşa ediyoruz."
        : "We build frontend, backend, database and API systems.",
    },
    {
      title: isTR ? "Yayınlama" : "Launch",
      text: isTR
        ? "Production deploy, test ve final optimizasyon işlemlerini tamamlıyoruz."
        : "We complete production deploy, testing and final optimization.",
    },
  ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        {isTR ? "Süreç" : "Process"}
      </p>

      <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        {isTR
          ? "Fikirden production seviyesine net bir geliştirme süreci."
          : "A clear development process from idea to production."}
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="glass-card glass-hover rounded-[2rem] p-8"
          >
            <p className="text-sm text-cyan-400">0{index + 1}</p>

            <h3 className="mt-8 text-3xl font-black">
              {step.title}
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}