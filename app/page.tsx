const services = [
  "Web Development",
  "Mobile Applications",
  "Backend Systems",
  "Cloud Infrastructure",
  "AI Integrations",
  "UI/UX Design",
];

const technologies = ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Cloud"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <section className="relative min-h-screen px-6 py-8 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d455,transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

        <nav className="relative z-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <h1 className="text-xl font-black tracking-[0.3em]">2LLSOFT</h1>
          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#tech" className="hover:text-white">Tech</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[85vh] items-center justify-center text-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.5em] text-cyan-400">
              Premium Software Company
            </p>

            <h2 className="text-6xl font-black leading-none tracking-tight md:text-9xl">
              SOFTWARE
              <br />
              BUILT TO SCALE
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
              2LLSOFT builds modern web, mobile and cloud systems with clean
              architecture, strong performance and production-ready engineering.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                Start Project
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24 md:px-20">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Services
        </p>
        <h3 className="mt-4 text-4xl font-black md:text-6xl">
          What we build
        </h3>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.08]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                0{index + 1}
              </div>
              <h4 className="text-2xl font-bold">{service}</h4>
              <p className="mt-4 text-zinc-400">
                Scalable, secure and maintainable solutions designed for real
                business use.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="tech" className="px-6 py-24 md:px-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl md:p-16">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            Technology
          </p>
          <h3 className="mt-4 text-4xl font-black md:text-6xl">
            Modern stack. Clean code.
          </h3>

          <div className="mt-10 flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-20">
        <div className="rounded-[2rem] bg-white p-10 text-black md:p-16">
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">
            Contact
          </p>
          <h3 className="mt-4 text-4xl font-black md:text-6xl">
            Let’s build something serious.
          </h3>
          <p className="mt-6 max-w-2xl text-zinc-600">
            Tell us what you want to build. We turn ideas into production-ready
            digital products.
          </p>
        </div>
      </section>
    </main>
  );
}