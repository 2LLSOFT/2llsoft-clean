"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const rocketY = useTransform(scrollY, [0, 600], [0, -420]);
  const flameHeight = useTransform(scrollY, [0, 600], [160, 260]);
  const smokeOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#030303] px-6 pt-32 text-white md:px-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#22d3ee22,transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
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
        </motion.div>

        <div className="relative hidden h-[620px] items-end justify-center lg:flex">
          <motion.div
            style={{ y: rocketY }}
            initial={{ y: 420, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="relative z-20"
          >
            <div className="relative h-[370px] w-[120px]">
              <div className="absolute inset-x-0 top-0 h-[300px] rounded-t-full border border-white/20 bg-gradient-to-b from-white via-zinc-300 to-zinc-700 shadow-2xl shadow-cyan-400/20" />

              <div className="absolute left-1/2 top-24 h-16 w-16 -translate-x-1/2 rounded-full border border-cyan-300 bg-cyan-400/20 shadow-lg shadow-cyan-400/30" />

              <div className="absolute -left-12 bottom-12 h-32 w-20 skew-y-12 rounded-2xl bg-zinc-700" />

              <div className="absolute -right-12 bottom-12 h-32 w-20 -skew-y-12 rounded-2xl bg-zinc-700" />

              <motion.div
                style={{ height: flameHeight }}
                className="absolute left-1/2 top-[300px] w-14 -translate-x-1/2 rounded-b-full bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent blur-sm"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: smokeOpacity }}
            className="absolute bottom-0 z-10 h-[160px] w-[420px] rounded-full bg-white/10 blur-[70px]"
          />

          <div className="absolute bottom-0 h-[220px] w-[120px] rounded-full bg-cyan-400/20 blur-[80px]" />
        </div>
      </div>
    </section>
  );
}