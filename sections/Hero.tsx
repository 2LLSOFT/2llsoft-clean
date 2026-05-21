"use client";

"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 text-white md:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e933,transparent_30%)]" />

      <motion.div
        initial={{ y: 700, scale: 0.8 }}
        animate={{ y: -900, scale: 1 }}
        transition={{ duration: 6, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] bottom-[-300px] z-30 hidden lg:block"
      >
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.6, 2], opacity: [0.7, 0.4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="absolute left-1/2 top-[320px] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-white/20 blur-[80px]"
          />

          <motion.div
            animate={{ height: [160, 260, 180], opacity: [0.8, 1, 0.7] }}
            transition={{ duration: 0.18, repeat: Infinity }}
            className="absolute left-1/2 top-[300px] w-20 -translate-x-1/2 rounded-b-full bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent blur-md"
          />

          <div className="relative h-[380px] w-[140px]">
            <div className="absolute inset-x-0 top-0 h-[300px] rounded-t-full border border-white/20 bg-gradient-to-b from-white via-zinc-300 to-zinc-700 shadow-[0_0_80px_rgba(34,211,238,0.35)]" />
            <div className="absolute left-1/2 top-24 h-16 w-16 -translate-x-1/2 rounded-full border border-cyan-300 bg-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.8)]" />
            <div className="absolute -left-12 bottom-10 h-36 w-20 skew-y-12 rounded-2xl bg-zinc-700" />
            <div className="absolute -right-12 bottom-10 h-36 w-20 -skew-y-12 rounded-2xl bg-zinc-700" />
          </div>
        </div>
      </motion.div>

      <div className="relative z-20 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.5em] text-cyan-400"
        >
          {t.heroBadge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl"
        >
          {t.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          {t.heroText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="mt-12 flex flex-col gap-5 md:flex-row"
        >
          <MagneticButton
            href="#projects"
            className="rounded-full bg-white px-8 py-5 text-center font-bold text-black transition duration-300 hover:bg-cyan-300"
          >
            {t.viewMission}
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-5 text-center font-bold transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            {t.startLaunch}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}