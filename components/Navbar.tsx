"use client";

import { useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SearchButton from "@/components/SearchButton";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.navServices, href: "#services" },
    { label: t.navPortfolio, href: "#projects" },
    { label: t.navPricing, href: "#pricing" },
    { label: t.navContact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-[100] w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white md:px-10">
        <a href="/">
          <AnimatedLogo />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <SearchButton />
          <LanguageSwitcher />

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            {t.startLaunch}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white md:hidden"
        >
          MENU
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 text-white backdrop-blur-2xl md:hidden">
          <div className="grid gap-4">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-3">
              <SearchButton />
              <LanguageSwitcher />
            </div>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-5 py-4 text-center font-bold text-black"
            >
              {t.startLaunch}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}