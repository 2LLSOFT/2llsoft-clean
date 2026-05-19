export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303] px-6 py-12 text-white md:px-20">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <h2 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h2>

          <p className="mt-4 max-w-md text-zinc-400">
            Modern software solutions for web, mobile, cloud and scalable
            digital products.
          </p>
        </div>

        <div className="grid gap-3 text-zinc-400">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-500">
        © 2026 2LLSOFT. Engineered for scalable digital products.
      </div>
    </footer>
  );
}