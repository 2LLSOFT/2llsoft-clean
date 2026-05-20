"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303]">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-cyan-400" />

        <h1 className="mt-8 text-2xl font-black tracking-[0.5em] text-white">
          2LLSOFT
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Loading Experience
        </p>
      </div>
    </div>
  );
}