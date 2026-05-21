"use client";

import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-28 text-white md:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22d3ee14,transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Dashboard Preview
        </p>

        <h2 className="mt-5 max-w-6xl text-4xl font-black leading-tight md:text-7xl">
          Real-time dashboards built for data-driven companies.
        </h2>

        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card mt-16 overflow-hidden rounded-[3rem] p-6"
        >
          <div className="rounded-[2rem] border border-white/10 bg-black/70 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-zinc-500">2LLSOFT Console</p>
                <h3 className="mt-2 text-3xl font-black">Business Overview</h3>
              </div>

              <div className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-black">
                LIVE
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {["Revenue", "Users", "Projects", "Uptime"].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-zinc-500">{item}</p>

                  <h4 className="mt-4 text-4xl font-black text-cyan-400">
                    {["€48K", "12.4K", "32", "99.9%"][index]}
                  </h4>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-zinc-500">Traffic Flow</p>

                <div className="mt-8 flex h-[260px] items-end gap-4">
                  {[30, 55, 40, 80, 65, 95, 70, 100, 85, 60].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        animate={{ height: [`${height}%`, `${height + 15}%`, `${height}%`] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.15,
                        }}
                        className="flex-1 rounded-t-2xl bg-cyan-400/40"
                      />
                    )
                  )}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-zinc-500">System Status</p>

                <div className="mt-8 space-y-5">
                  {["API Online", "Database Active", "Cloud Stable", "Security OK"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl bg-black/40 p-4"
                      >
                        <span>{item}</span>
                        <span className="h-3 w-3 rounded-full bg-cyan-400" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}