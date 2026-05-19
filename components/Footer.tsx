export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303] px-6 py-12 text-white md:px-20">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-black tracking-[0.3em]">
            2LLSOFT
          </h2>

          <p className="mt-4 max-w-md text-zinc-400">
            Modern software solutions for scalable web, mobile, cloud and
            AI-powered systems.
          </p>
        </div>

        <div className="grid gap-3 text-zinc-400">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <div className="grid gap-3 text-zinc-400">
          <a href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </a>

          <a href="/terms" className="transition hover:text-white">
            Terms of Service
          </a>

          <a href="/login" className="transition hover:text-white">
            Admin Login
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-500">
        © 2026 2LLSOFT. Engineered for scalable digital products.
      </div>
    </footer>
  );
}