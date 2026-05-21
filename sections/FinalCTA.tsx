"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function FinalCTA() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="rounded-[3rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-10 text-center md:p-20">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          {isTR ? "Hazır mısınız?" : "Ready to launch"}
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          {isTR
            ? "2LLSOFT ile premium bir yazılım ürünü geliştirin."
            : "Build a premium software product with 2LLSOFT."}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          {isTR
            ? "Web platformları, mobil uygulamalar, SaaS dashboardları, cloud sistemleri ve AI destekli yazılım ürünleri geliştiriyoruz."
            : "Web platforms, mobile applications, SaaS dashboards, cloud systems and AI-powered software products engineered for serious businesses."}
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 md:flex-row">
          <a href="#contact" className="rounded-full bg-white px-10 py-5 font-bold text-black transition hover:bg-cyan-300">
            {isTR ? "Projeni Başlat" : "Start a Project"}
          </a>

          <a href="#projects" className="rounded-full border border-white/10 bg-black/30 px-10 py-5 font-bold text-white transition hover:border-cyan-400/40">
            {isTR ? "Portföyü Gör" : "View Portfolio"}
          </a>
        </div>
      </div>
    </section>
  );
}