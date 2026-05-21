"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "48+",
    label: "Projects Delivered",
  },
  {
    value: "99.9%",
    label: "Infrastructure Stability",
  },
  {
    value: "24/7",
    label: "System Monitoring",
  },
  {
    value: "12K+",
    label: "Users Reached",
  },
];

export default function AdvancedStats() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
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