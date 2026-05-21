"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductShowcase() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const cards = [
    {
      title: isTR ? "Canlı Analytics" : "Live Analytics",
      value: "48K",
      label: isTR ? "Sayfa Görüntüleme" : "Page Views",
    },
    {
      title: isTR ? "Müşteri Talepleri" : "Client Requests",
      value: "312",
      label: isTR ? "Aktif Lead" : "Active Leads",
    },
    {
      title: isTR ? "Sistem Sağlığı" : "System Health",
      value: "99.9%",
      label: isTR ? "Uptime" : "Uptime",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        {isTR ? "Ürün Sistemleri" : "Product Systems"}
      </p>

      <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        {isTR
          ? "Animasyonlu dashboardlar ve akıllı iş sistemleri."
          : "Animated dashboards and intelligent business systems."}
      </h2>

      <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
            className="glass-card glass-hover rounded-[3rem] p-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {card.title}
            </p>

            <h3 className="mt-8 text-6xl font-black text-cyan-400">
              {card.value}
            </h3>

            <p className="mt-5 text-zinc-400">
              {card.label}
            </p>

            <div className="mt-10 h-[140px] rounded-[2rem] border border-white/10 bg-black/30 p-5">
              <div className="flex h-full items-end gap-3">
                {[40, 70, 55, 90, 65, 100, 80].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-xl bg-cyan-400/40"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}