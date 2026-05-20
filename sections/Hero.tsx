"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#030303] px-6 pt-32 text-white md:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e955,transparent_30%),radial-gradient(circle_at_bottom,#22d3ee22,transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:90px_90px]" />

      <motion.div
        initial={{ y: 160, opacity: 0, scale: 0.92 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            Mission Control / 2LLSOFT
          </p>

          <h1 className="mt-8 text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Launching
            <br />
            digital systems
            <br />
            beyond limits.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Premium web platforms, SaaS dashboards, mobile applications and
            AI-powered software systems engineered for serious companies.
          </p>

          <div className="mt-12 flex flex-col gap-5 md:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-5 text-center font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              View Mission
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-5 text-center font-bold transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              Start Launch
            </a>
          </div>
        </div>

        <motion.div
          initial={{ y: 260, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          className="relative flex h-[560px] items-center justify-center"
        >
          <div className="absolute bottom-0 h-[280px] w-[90px] rounded-full bg-cyan-400/30 blur-[70px]" />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="h-[360px] w-[120px] rounded-t-full border border-white/20 bg-gradient-to-b from-white to-zinc-500 shadow-2xl shadow-cyan-400/20" />

            <div className="absolute left-1/2 top-24 h-14 w-14 -translate-x-1/2 rounded-full border border-cyan-300 bg-cyan-400/20" />

            <div className="absolute -left-10 bottom-0 h-32 w-16 skew-y-12 rounded-2xl bg-zinc-700" />
            <div className="absolute -right-10 bottom-0 h-32 w-16 -skew-y-12 rounded-2xl bg-zinc-700" />

            <motion.div
              animate={{ height: [120, 190, 120], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="absolute left-1/2 top-full w-12 -translate-x-1/2 rounded-b-full bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent blur-sm"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}