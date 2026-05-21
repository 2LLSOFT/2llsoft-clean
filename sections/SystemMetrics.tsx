"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function SystemMetrics() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const metrics = [
    {
      label: isTR ? "API Durumu" : "API Status",
      value: "ONLINE",
    },
    {
      label: isTR ? "Cloud Altyapısı" : "Cloud Infrastructure",
      value: "STABLE",
    },
    {
      label: isTR ? "Database" : "Database",
      value: "SYNCED",
    },
    {
      label: isTR ? "AI Sistemleri" : "AI Systems",
      value: "ACTIVE",
    },
  ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-black">
        <div className="border-b border-white/10 px-8 py-5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            {isTR ? "Sistem Metrikleri" : "System Metrics"}
          </p>
        </div>

        <div className="grid gap-6 p-8 md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm text-zinc-500">
                {metric.label}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-cyan-400" />

                <h3 className="text-2xl font-black text-cyan-300">
                  {metric.value}
                </h3>
              </div>

              <div className="mt-6 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[85%] rounded-full bg-cyan-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}