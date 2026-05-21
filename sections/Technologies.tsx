"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Technologies() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Flutter",
    "OpenAI",
    "Cloud",
    "TailwindCSS",
    "Vercel",
    "Docker",
  ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        {isTR ? "Teknoloji Altyapısı" : "Technology Stack"}
      </p>

      <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        {isTR
          ? "Ölçeklenebilir dijital ürünler için modern teknolojiler."
          : "Modern technologies engineered for scalable digital products."}
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-4">
        {technologies.map((tech, index) => (
          <div
            key={tech}
            className="glass-card glass-hover group relative overflow-hidden rounded-[2rem] p-8"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500">0{index + 1}</span>
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
              </div>

              <h3 className="mt-10 text-3xl font-black">{tech}</h3>

              <p className="mt-5 leading-7 text-zinc-400">
                {isTR
                  ? "Modern yazılım sistemleri için production-ready teknoloji."
                  : "Production-grade technology optimized for modern software systems."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}