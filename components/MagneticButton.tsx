"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
  href = "#",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }

  function handleLeave() {
    const element = ref.current;

    if (!element) return;

    element.style.transform = "translate(0px, 0px)";
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={`transition duration-200 ${className}`}
    >
      {children}
    </motion.a>
  );
}