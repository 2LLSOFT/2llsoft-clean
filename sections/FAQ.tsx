"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function FAQ() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  const faqs = [
    {
      q: isTR ? "Bir proje ne kadar sürer?" : "How long does a project take?",
      a: isTR
        ? "Şirket siteleri genelde 1-3 hafta sürer. Daha büyük SaaS, dashboard veya mobil sistemler özel planlanır."
        : "Most company websites take 1-3 weeks. Larger SaaS, dashboard or mobile systems are planned individually.",
    },
    {
      q: isTR ? "Mobil uygulama yapıyor musunuz?" : "Do you build mobile apps?",
      a: isTR
        ? "Evet. Flutter ile cross-platform mobil uygulamalar ve ölçeklenebilir backend sistemleri geliştiriyoruz."
        : "Yes. 2LLSOFT builds cross-platform mobile applications with Flutter and scalable backend systems.",
    },
    {
      q: isTR ? "Dashboard ve admin panel yapılır mı?" : "Can you build dashboards and admin panels?",
      a: isTR
        ? "Evet. Modern dashboardlar, CRM sistemleri, analytics panelleri ve özel iş araçları geliştiriyoruz."
        : "Yes. We build modern dashboards, CRM systems, analytics panels and custom business tools.",
    },
    {
      q: isTR ? "Uzun vadeli destek veriyor musunuz?" : "Do you provide long-term support?",
      a: isTR
        ? "Evet. Bakım, güncelleme, monitoring ve teknik destek proje kapsamına göre eklenebilir."
        : "Yes. Maintenance, updates, monitoring and technical support can be included depending on the project.",
    },
  ];

  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">FAQ</p>

      <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        {isTR ? "Projeye başlamadan önce sorularınız mı var?" : "Questions before starting a project?"}
      </h2>

      <div className="mt-16 grid gap-5">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-black">{item.q}</h3>
            <p className="mt-4 leading-8 text-zinc-400">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}