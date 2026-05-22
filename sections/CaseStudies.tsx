"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function CaseStudies() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const cases = [
    {
      title: isTR ? "SaaS Komuta Merkezi" : "SaaS Command Center",
      type: isTR ? "Enterprise Dashboard" : "Enterprise Dashboard",
      result: isTR
        ? "Gerçek zamanlı analytics, proje takibi ve operasyon kontrol sistemi."
        : "Real-time analytics, project tracking and operational control.",
    },
    {
      title: isTR ? "AI İş Akışı Motoru" : "AI Workflow Engine",
      type: isTR ? "Otomasyon Platformu" : "Automation Platform",
      result: isTR
        ? "AI destekli karar akışlarıyla otomatik müşteri süreçleri."
        : "Automated client processes with AI-assisted decision flows.",
    },
    {
      title: isTR ? "Mobil Ticaret Paketi" : "Mobile Commerce Suite",
      type: isTR ? "Mobil Uygulama" : "Mobile Application",
      result: isTR
        ? "Hızlı ürün keşfi, ödeme akışı ve iş yönetim dashboardu."
        : "Fast product discovery, checkout flow and business dashboard.",
    },
  ];

  return (
    <section className="relative bg-[#030303] px-6 py-28 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        {isTR ? "Case Study" : "Case Studies"}
      </p>

      <h2 className="mt-5 max-w-6xl text-4xl font-black leading-tight md:text-7xl">
        {isTR
          ? "Premium görünen ve ölçekli çalışan dijital ürünler."
          : "Digital products designed to look premium and perform at scale."}
      </h2>

      <div className="mt-16 grid gap-8">
        {cases.map((item, index) => (
          <div
            key={item.title}
            className="glass-card glass-hover grid gap-8 rounded-[3rem] p-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-sm text-cyan-400">0{index + 1}</p>

              <h3 className="mt-5 text-4xl font-black">{item.title}</h3>

              <p className="mt-4 text-zinc-500">{item.type}</p>

              <p className="mt-8 max-w-xl leading-8 text-zinc-400">
                {item.result}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <img
  src="/showcase/dashboard.jpg"
  className="h-40 w-full rounded-2xl object-cover"
/>
                <div className="h-40 rounded-2xl bg-cyan-400/20" />
                <div className="h-40 rounded-2xl bg-white/10" />
                <div className="h-40 rounded-2xl bg-blue-500/20" />
              </div>

              <div className="mt-6 h-20 rounded-2xl bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}