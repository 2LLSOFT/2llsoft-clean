"use client";

import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        animate={{
          boxShadow: [
            "0 0 15px rgba(34,211,238,0.25)",
            "0 0 40px rgba(34,211,238,0.75)",
            "0 0 15px rgba(34,211,238,0.25)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-black"
      >
        2L
      </motion.div>

      <motion.span
        animate={{
          opacity: [0.75, 1, 0.75],
          letterSpacing: ["0.25em", "0.35em", "0.25em"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="text-xl font-black md:text-2xl"
      >
        2LLSOFT
      </motion.span>
    </div>
  );
}