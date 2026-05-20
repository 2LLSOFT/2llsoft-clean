"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function move(event: MouseEvent) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full bg-cyan-400"
      />

      <motion.div
        animate={{
          x: position.x - 24,
          y: position.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-12 w-12 rounded-full border border-cyan-400/40"
      />
    </>
  );
}