export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030303] px-6 py-14 text-white md:px-20">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h2>

          <p className="mt-5 leading-7 text-zinc-400">
            Premium software company based in Słupsk, Poland. We build web,
            mobile, cloud and AI-powered digital products.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Company</h3>

          <div className="mt-5 grid gap-3 text-zinc-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Portfolio</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Legal</h3>

          <div className="mt-5 grid gap-3 text-zinc-400">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>

          <div className="mt-5 grid gap-3 text-zinc-400">
            <p>info@2llsoft.com</p>
            <p>+48 507 275 668</p>
            <p>Słupsk, Poland</p>
            <p>Mon - Fri / 09:00 - 18:00</p>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-6 text-sm text-zinc-500">
        © 2026 2LLSOFT. Engineered for scalable digital products.
      </div>
    </footer>
  );
}