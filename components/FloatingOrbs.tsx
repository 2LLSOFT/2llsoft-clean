"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-[-120px] top-[10%] z-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed right-[-140px] top-[35%] z-0 h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed bottom-[-160px] left-[30%] z-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[140px]"
      />
    </>
  );
}