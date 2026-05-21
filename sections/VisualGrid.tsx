"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function VisualGrid() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const items = isTR
    ? [
        "SaaS Mimarisi",
        "AI Otomasyonu",
        "Cloud Sistemleri",
        "Mobil Uygulamalar",
        "Admin Dashboard",
        "Database Tasarımı",
        "API Mühendisliği",
        "SEO Sistemleri",
      ]
    : [
        "SaaS Architecture",
        "AI Automation",
        "Cloud Systems",
        "Mobile Apps",
        "Admin Dashboards",
        "Database Design",
        "API Engineering",
        "SEO Systems",
      ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-6 md:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-cyan-400/[0.06] p-8"
          >
            <p className="text-sm text-cyan-400">0{index + 1}</p>

            <h3 className="mt-8 text-2xl font-black">
              {item}
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {isTR
                ? "Production-ready yazılım sistemleri için modern teknoloji altyapısı."
                : "Modern infrastructure engineered for production-grade software systems."}
            </p>

            <div className="mt-8 h-24 rounded-2xl bg-black/40" />
          </div>
        ))}
      </div>
    </section>
  );
}