"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  return (
    <footer className="border-t border-white/10 bg-[#030303] px-6 py-16 text-white md:px-20">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <h2 className="text-3xl font-black">2LLSOFT</h2>

          <p className="mt-6 leading-7 text-zinc-400">
            {isTR
              ? "Premium web platformları, mobil uygulamalar ve AI destekli yazılım sistemleri geliştiriyoruz."
              : "We build premium web platforms, mobile applications and AI-powered software systems."}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            {isTR ? "Servisler" : "Services"}
          </p>

          <div className="mt-6 space-y-4 text-zinc-400">
            <p>Web Development</p>
            <p>Mobile Apps</p>
            <p>AI Systems</p>
            <p>Cloud Infrastructure</p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            {isTR ? "Şirket" : "Company"}
          </p>

          <div className="mt-6 space-y-4 text-zinc-400">
            <a href="/privacy" className="block hover:text-cyan-300">
              Privacy Policy
            </a>

            <a href="/terms" className="block hover:text-cyan-300">
              Terms of Service
            </a>

            <a href="#contact" className="block hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            {isTR ? "İletişim" : "Contact"}
          </p>

          <div className="mt-6 space-y-4 text-zinc-400">
            <p>info@2llsoft.com</p>
            <p>+48 507 275 668</p>
            <p>Słupsk, Poland</p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 2LLSOFT. {isTR ? "Tüm hakları saklıdır." : "All rights reserved."}
        </p>
        <p className="mt-6 text-sm text-zinc-500">
  Next.js • TypeScript • AI Systems • Cloud Infrastructure
</p>

        <p>
          {isTR
            ? "Modern software engineering systems."
            : "Modern software engineering systems."}
        </p>
      </div>
    </footer>
  );
}