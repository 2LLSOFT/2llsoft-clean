"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      onClick={scrollTop}
      className="fixed bottom-8 right-8 z-[9999] flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-black/70 text-2xl text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.35)] backdrop-blur-xl transition hover:scale-110"
    >
      ↑
    </motion.button>
  );
}