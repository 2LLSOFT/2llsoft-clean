"use client";

import AnimatedLogo from "@/components/AnimatedLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/language-store";
import SearchButton from "@/components/SearchButton";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 z-[100] w-full border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white md:px-10">
        <a href="/">
          <AnimatedLogo />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#services" className="transition hover:text-cyan-300">
            {t.navServices}
          </a>
          <a href="#projects" className="transition hover:text-cyan-300">
            {t.navPortfolio}
          </a>
          <a href="#pricing" className="transition hover:text-cyan-300">
            {t.navPricing}
          </a>
          <a href="#contact" className="transition hover:text-cyan-300">
            {t.navContact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
  <SearchButton />

  <LanguageSwitcher />

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300 md:block"
          >
            {t.startLaunch}
          </a>
        </div>
      </div>
    </header>
  );
}