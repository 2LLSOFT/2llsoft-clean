"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function AdvancedStats() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const stats = [
    {
      value: "48+",
      label: isTR ? "Teslim Edilen Proje" : "Projects Delivered",
    },
    {
      value: "99.9%",
      label: isTR ? "Altyapı Stabilitesi" : "Infrastructure Stability",
    },
    {
      value: "24/7",
      label: isTR ? "Sistem İzleme" : "System Monitoring",
    },
    {
      value: "12K+",
      label: isTR ? "Ulaşılan Kullanıcı" : "Users Reached",
    },
  ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="glass-card glass-hover rounded-[3rem] p-10"
          >
            <h2 className="text-6xl font-black text-cyan-400">
              {stat.value}
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}