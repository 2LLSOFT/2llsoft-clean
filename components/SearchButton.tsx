"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function SearchButton() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/10 bg-black/40 p-3 text-white transition hover:border-cyan-400/40"
      >
        <Search size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center bg-black/80 p-6 pt-32 backdrop-blur-xl">
          <div className="w-full max-w-2xl rounded-[3rem] border border-white/10 bg-[#050505] p-8 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black">
                {isTR ? "Ara" : "Search"}
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-4 py-2 text-sm"
              >
                Close
              </button>
            </div>

            <input
              type="text"
              placeholder={
                isTR
                  ? "Servis, proje veya teknoloji ara..."
                  : "Search services, projects or technologies..."
              }
              className="mt-8 w-full rounded-[2rem] border border-white/10 bg-black/40 px-6 py-5 text-white outline-none"
            />

            <div className="mt-8 grid gap-4">
              {[
                isTR ? "Web Platformları" : "Web Platforms",
                isTR ? "Mobil Uygulamalar" : "Mobile Applications",
                isTR ? "AI Sistemleri" : "AI Systems",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}