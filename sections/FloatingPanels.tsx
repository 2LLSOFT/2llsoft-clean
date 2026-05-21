"use client";

import { motion } from "framer-motion";

const panels = [
  {
    title: "AI Dashboard",
    value: "94%",
    text: "Automation accuracy",
  },
  {
    title: "Cloud Systems",
    value: "12TB",
    text: "Live infrastructure",
  },
  {
    title: "Active Users",
    value: "48K",
    text: "Global usage",
  },
];

export default function FloatingPanels() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-28 text-white md:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22d3ee11,transparent_40%)]" />

      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Live Interface Systems
      </p>

      <h2 className="mt-5 max-w-6xl text-4xl font-black leading-tight md:text-7xl">
        Intelligent interfaces powered by cinematic software engineering.
      </h2>

      <div className="relative mt-24 grid gap-8 lg:grid-cols-3">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.title}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
            className="glass-card glass-hover relative overflow-hidden rounded-[3rem] p-10"
          >
            <div className="absolute right-[-40px] top-[-40px] h-[140px] w-[140px] rounded-full bg-cyan-400/10 blur-[60px]" />

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {panel.title}
            </p>

            <h3 className="mt-8 text-7xl font-black text-cyan-400">
              {panel.value}
            </h3>

            <p className="mt-5 text-lg text-zinc-400">
              {panel.text}
            </p>

            <div className="mt-12 space-y-4">
              <div className="h-3 rounded-full bg-white/10">
                <motion.div
                  animate={{
                    width: ["20%", "90%", "60%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="h-3 rounded-full bg-cyan-400"
                />
              </div>

              <div className="h-3 rounded-full bg-white/10">
                <motion.div
                  animate={{
                    width: ["60%", "30%", "80%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="h-3 rounded-full bg-blue-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}