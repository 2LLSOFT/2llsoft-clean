"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 12 });

export default function SpaceBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Stars */}
      {stars.map((_, index) => {
        const size = Math.random() * 3 + 1;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            initial={{
              opacity: Math.random(),
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
            }}
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        );
      })}

      {/* Shooting Star 1 */}
      <motion.div
        initial={{
          x: -200,
          y: 0,
          opacity: 0,
        }}
        animate={{
          x: 1800,
          y: 500,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 5,
        }}
        className="absolute left-0 top-[10%] h-[2px] w-[220px] rotate-[25deg] bg-gradient-to-r from-white to-transparent blur-[1px]"
      />

      {/* Shooting Star 2 */}
      <motion.div
        initial={{
          x: -300,
          y: 0,
          opacity: 0,
        }}
        animate={{
          x: 1800,
          y: 700,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          repeatDelay: 8,
          delay: 2,
        }}
        className="absolute left-0 top-[35%] h-[2px] w-[160px] rotate-[18deg] bg-gradient-to-r from-cyan-300 to-transparent blur-[1px]"
      />

      {/* Nebula Glow */}
      <div className="absolute left-[-200px] top-[-200px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[60px]" />

      <div className="absolute bottom-[-200px] right-[-200px] h-[600px] w-[600px] rounded-full bg-blue-700/10 blur-[60px]" />
    </div>
  );
}
