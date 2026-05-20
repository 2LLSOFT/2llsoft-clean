import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-[100] w-full border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white md:px-10">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-black">
            2L
          </div>

          <span className="text-xl font-black tracking-[0.3em] md:text-2xl">
            2LLSOFT
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#services" className="transition hover:text-cyan-300">
            Services
          </a>
          <a href="#projects" className="transition hover:text-cyan-300">
            Portfolio
          </a>
          <a href="#pricing" className="transition hover:text-cyan-300">
            Pricing
          </a>
          <a href="#contact" className="transition hover:text-cyan-300">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300 md:block"
          >
            Start Project
          </a>
        </div>
      </div>
    </header>
  );
}