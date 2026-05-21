"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const brands = ["NEXT", "CLOUD", "AI LABS", "VENTURE", "QUANTUM", "SYSTEMX"];

export default function TrustedBy() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-20 text-white md:px-20">
      <div className="glass-card rounded-[3rem] p-10 md:p-16">
        <p className="text-center text-xs uppercase tracking-[0.5em] text-cyan-400">
          {isTR ? "Güvenilir Altyapı" : "Trusted Infrastructure"}
        </p>

        <h2 className="mt-6 text-center text-4xl font-black leading-tight md:text-6xl">
          {isTR
            ? "Ölçeklenebilir şirketler için geliştirilen modern sistemler."
            : "Modern systems engineered for scalable companies."}
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
              className="glass-hover flex h-28 items-center justify-center rounded-[2rem] border border-white/10 bg-black/30 text-lg font-black tracking-[0.3em] text-zinc-300"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}