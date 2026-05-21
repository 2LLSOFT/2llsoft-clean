"use client";

import { motion } from "framer-motion";

const feed = [
  "New enterprise dashboard deployed.",
  "AI automation system updated.",
  "Cloud infrastructure synchronized.",
  "Mobile application published.",
  "Security systems verified.",
  "New international client connected.",
];

export default function LiveFeed() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="glass-card rounded-[3rem] p-10 md:p-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
              Live Activity
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Real-time system updates.
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
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="flex items-center justify-between rounded-[2rem] border border-white/10 bg-black/40 p-6"
            >
              <div className="flex items-center gap-4">
                <span className="h-3 w-3 rounded-full bg-cyan-400" />

                <p className="text-lg text-zinc-300">
                  {item}
                </p>
              </div>

              <span className="text-sm text-zinc-500">
                just now
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}