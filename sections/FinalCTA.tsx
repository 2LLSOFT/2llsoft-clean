"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function FinalCTA() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  return (
    <section className="bg-[#030303] px-6 py-28 text-white md:px-20">
      <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-12 text-center md:p-20">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          2LLSOFT
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          {isTR
            ? "Bir sonraki dijital ürününüzü production seviyesinde geliştirelim."
            : "Let’s build your next digital product at production scale."}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          {isTR
            ? "Modern web platformları, AI sistemleri ve premium kullanıcı deneyimleri geliştiriyoruz."
            : "We engineer modern web platforms, AI systems and premium user experiences."}
        </p>

        <div className="mt-12">
          <a
            href="#contact"
            className="rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-cyan-300"
          >
            {isTR ? "Projeyi Başlat" : "Start Project"}
          </a>
        </div>
      </div>
    </section>
  );
}