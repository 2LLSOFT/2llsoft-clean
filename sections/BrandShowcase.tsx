

export default function BrandShowcase() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-10 rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 md:grid-cols-2 md:p-16">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            Brand System
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Minimal identity for premium software engineering.
          </h2>

          <p className="mt-8 leading-8 text-zinc-400">
            2LLSOFT uses a clean, cinematic and technical visual language built
            around dark interfaces, sharp typography and cyan system accents.
          </p>
        </div>

        <div className="flex items-center justify-center rounded-[2rem] border border-white/10 bg-black/40 p-12">
     <img
  src="/logo/mark.svg"
  alt="2LLSOFT Brand Mark"
  className="h-[180px] w-[180px] object-contain"
/>
        </div>
      </div>
    </section>
  );
}