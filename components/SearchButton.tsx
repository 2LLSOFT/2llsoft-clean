"use client";

import { motion } from "framer-motion";

export default function SearchButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
    >
      <span>⌕</span>
      <span className="hidden md:block">Search</span>
    </motion.button>
  );
}