"use client";

import { useEffect, useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function ClickEffects() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const id = Date.now();

      setRipples((current) => [
        ...current,
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      setTimeout(() => {
        setRipples((current) => current.filter((item) => item.id !== id));
      }, 700);
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none fixed z-[9997] h-6 w-6 animate-ping rounded-full border border-cyan-400"
          style={{
            left: ripple.x - 12,
            top: ripple.y - 12,
          }}
        />
      ))}
    </>
  );
}