export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 flex w-[92%] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-4 text-white backdrop-blur-xl">
      <h1 className="text-lg font-black tracking-[0.3em]">
        2LLSOFT
      </h1>

      <div className="hidden gap-7 text-sm text-zinc-400 md:flex">
        <a href="#services" className="hover:text-white">
          Services
        </a>

        <a href="#projects" className="hover:text-white">
          Projects
        </a>

        <a href="#about" className="hover:text-white">
          About
        </a>

        <a href="#tech" className="hover:text-white">
          Tech
        </a>

        <a href="#pricing" className="hover:text-white">
          Pricing
        </a>

        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </div>
    </nav>
  );
}