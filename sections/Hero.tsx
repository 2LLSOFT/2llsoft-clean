"use client";

import { motion } from "framer-motion";
import SpaceBackground from "@/components/SpaceBackground";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  return (
    <section className="relative overflow-hidden bg-[#030303] text-white">
      <SpaceBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.5em] text-cyan-400"
        >
          2LLSOFT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 max-w-6xl text-5xl font-black leading-tight md:text-8xl"
        >
          {isTR
            ? "Modern Şirketler İçin Dijital Altyapı Mühendisliği"
            : "Engineering Digital Infrastructure For Modern Companies"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl"
        >
          {isTR
            ? "Ölçeklenebilir platformlar, AI sistemleri ve premium yazılım ürünleri geliştiriyoruz."
            : "We build scalable platforms, AI systems and premium software products engineered for modern businesses."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-14 flex flex-col gap-5 md:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.12em] text-black transition duration-300 hover:bg-cyan-300"
          >
            {isTR ? "Projeyi Başlat" : "Start Project"}
          </a>

          <a
            href="#projects"
            className="rounded-full border border-white/10 bg-black/40 px-10 py-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:border-cyan-400/40"
          >
            {isTR ? "Projeleri Gör" : "View Projects"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}