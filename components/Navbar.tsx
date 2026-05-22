"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SearchButton from "@/components/SearchButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="text-xl font-black tracking-[0.25em] text-white"
        >
          2LLSOFT
        </Link>

        <div className="flex items-center gap-4">
          <SearchButton />

          <LanguageSwitcher />

          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-cyan-300"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}