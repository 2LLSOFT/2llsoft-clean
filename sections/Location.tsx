export default function Location() {
  return (
    <section id="location" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-card glass-hover rounded-[3rem] p-10 md:p-16">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            Location
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Based in Słupsk, Poland.
          </h2>

          <p className="mt-8 leading-8 text-zinc-400">
            2LLSOFT works remotely with international clients and provides
            software solutions for businesses across Europe and beyond.
          </p>

          <div className="mt-10 space-y-5 text-zinc-300">
            <p>📍 Słupsk, Poland</p>
            <p>📞 +48 507 275 668</p>
            <p>✉️ info@2llsoft.com</p>
          </div>

          <a
            href="https://www.google.com/maps/search/S%C5%82upsk+Poland"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-300"
          >
            Open Directions
          </a>
        </div>

        <div className="glass-card overflow-hidden rounded-[3rem]">
          <iframe
            title="2LLSOFT Location"
            src="https://www.google.com/maps?q=S%C5%82upsk%2C%20Poland&output=embed"
            className="h-[520px] w-full border-0 grayscale invert"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}