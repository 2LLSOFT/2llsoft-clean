"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function LiveFeed() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const feed = isTR
    ? [
        "Yeni enterprise dashboard yayınlandı.",
        "AI otomasyon sistemi güncellendi.",
        "Cloud altyapısı senkronize edildi.",
        "Mobil uygulama yayına hazırlandı.",
        "Güvenlik sistemleri doğrulandı.",
        "Yeni uluslararası müşteri bağlandı.",
      ]
    : [
        "New enterprise dashboard deployed.",
        "AI automation system updated.",
        "Cloud infrastructure synchronized.",
        "Mobile application published.",
        "Security systems verified.",
        "New international client connected.",
      ];

  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="glass-card rounded-[3rem] p-10 md:p-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
              {isTR ? "Canlı Aktivite" : "Live Activity"}
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              {isTR ? "Gerçek zamanlı sistem güncellemeleri." : "Real-time system updates."}
            </h2>
          </div>

          <div className="hidden items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-300 md:flex">
            <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
            LIVE
          </div>
        </div>

        <div className="mt-14 grid gap-5">
          {feed.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex items-center justify-between rounded-[2rem] border border-white/10 bg-black/40 p-6"
            >
              <div className="flex items-center gap-4">
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <p className="text-lg text-zinc-300">{item}</p>
              </div>

              <span className="text-sm text-zinc-500">
                {isTR ? "az önce" : "just now"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}