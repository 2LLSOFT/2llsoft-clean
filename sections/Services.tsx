"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Services() {
  const { language } = useLanguage();

  const isTR = language === "tr";

  const services = [
    {
      title: isTR ? "Web Platformları" : "Web Platforms",
      description: isTR
        ? "Modern frontend sistemleriyle premium şirket siteleri, SaaS platformları ve landing page çözümleri."
        : "Premium company websites, SaaS platforms and landing pages built with modern frontend systems.",
      items: ["Next.js", "SEO", "Responsive UI"],
    },
    {
      title: isTR ? "Mobil Uygulamalar" : "Mobile Applications",
      description: isTR
        ? "Ölçeklenebilir mimari ve temiz kullanıcı deneyimiyle cross-platform mobil uygulamalar."
        : "Cross-platform mobile applications with scalable architecture and clean user experience.",
      items: ["Flutter", "API Integration", "Push-ready"],
    },
    {
      title: isTR ? "Backend Sistemleri" : "Backend Systems",
      description: isTR
        ? "Güvenli API’ler, veritabanları, auth sistemleri ve dashboard tabanlı backend mimarisi."
        : "Secure APIs, databases, authentication systems and dashboard-driven backend architecture.",
      items: ["Node.js", "PostgreSQL", "Prisma"],
    },
    {
      title: isTR ? "AI Entegrasyonları" : "AI Integrations",
      description: isTR
        ? "Modern şirketler için AI destekli iş akışları, otomasyon sistemleri ve akıllı ürün özellikleri."
        : "AI-powered workflows, automation systems and intelligent product features for modern companies.",
      items: ["OpenAI", "Automation", "Custom AI"],
    },
  ];

  return (
    <section id="services" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        {isTR ? "Hizmetler" : "Services"}
      </p>

      <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        {isTR
          ? "Ciddi iş büyümesi için tasarlanmış yazılım hizmetleri."
          : "Software services designed for serious business growth."}
      </h2>

      <div className="mt-16 grid gap-8 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="glass-card glass-hover rounded-[2rem] p-8"
          >
            <div className="text-sm text-cyan-400">0{index + 1}</div>

            <h3 className="mt-8 text-3xl font-black">{service.title}</h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {service.description}
            </p>

            <div className="mt-8 space-y-3">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}