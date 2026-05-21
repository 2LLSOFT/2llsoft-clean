"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const results = [
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#projects" },
  { title: "Pricing", href: "#pricing" },
  { title: "Support", href: "#support" },
  { title: "Location", href: "#location" },
  { title: "Contact", href: "#contact" },
];

export default function SearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
      >
        <span>⌕</span>
        <span className="hidden md:block">Search</span>
      </motion.button>

      {open && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center bg-black/80 px-6 pt-32 backdrop-blur-xl">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#050505] p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">Search 2LLSOFT</h2>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black"
              >
                Close
              </button>
            </div>

            <div className="mt-8 grid gap-3">
              {results.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}