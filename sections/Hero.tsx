"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d455,transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl text-center"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-cyan-400">
          Premium Software Company
        </p>

        <h1 className="text-6xl font-black leading-none tracking-tight md:text-9xl">
          SOFTWARE
          <br />
          BUILT TO SCALE
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-2xl">
          2LLSOFT builds modern web, mobile, cloud and AI-powered systems with
          clean architecture and production-ready engineering.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Start Project
          </a>

          <a
            href="#services"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:bg-white/10"
          >
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}