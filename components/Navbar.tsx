function LogoMark() {
  return (
    <svg
      className="h-9 w-9"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="120" height="120" rx="32" fill="#030303" />
      <path d="M32 78L58 42H76L50 78H32Z" fill="#22D3EE" />
      <path d="M62 78L88 42H104L78 78H62Z" fill="white" />
      <circle cx="30" cy="32" r="6" fill="#22D3EE" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 z-[100] w-full border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white md:px-10">
        <a href="/" className="flex items-center gap-3">
          <LogoMark />

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

        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
        >
          Start Project
        </a>
      </div>
    </header>
  );
}