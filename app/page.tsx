const services = [
  {
    title: "Web Development",
    text: "Fast, responsive and scalable websites built with modern frontend architecture.",
  },
  {
    title: "Mobile Applications",
    text: "Cross-platform mobile apps designed for clean UX and reliable performance.",
  },
  {
    title: "Backend Systems",
    text: "Secure APIs, databases and server-side systems ready for real users.",
  },
  {
    title: "Cloud Infrastructure",
    text: "Deployment, hosting, monitoring and production-ready cloud setup.",
  },
];

const projects = [
  "SaaS Dashboard",
  "E-commerce Platform",
  "Booking System",
  "AI Assistant App",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Vercel",
];

const pricing = [
  {
    name: "Starter",
    price: "€499+",
    items: ["Landing page", "Responsive design", "Basic SEO", "Vercel deploy"],
  },
  {
    name: "Business",
    price: "€1499+",
    items: ["Company website", "Admin panel", "Contact form", "Analytics"],
  },
  {
    name: "Custom",
    price: "Quote",
    items: ["Full web app", "Backend API", "Database", "Authentication"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <section className="relative min-h-screen overflow-hidden px-6 py-8 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d455,transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

        <nav className="relative z-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <h1 className="text-xl font-black tracking-[0.3em]">2LLSOFT</h1>

          <div className="hidden gap-7 text-sm text-zinc-400 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#tech" className="hover:text-white">Tech</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
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
              <a href="#contact" className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105">
                Start Project
              </a>
              <a href="#services" className="rounded-full border border-white/15 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:bg-white/10">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24 md:px-20">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">Services</p>
        <h3 className="mt-4 text-4xl font-black md:text-6xl">What we build</h3>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.08]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                0{index + 1}
              </div>
              <h4 className="text-2xl font-bold">{service.title}</h4>
              <p className="mt-4 text-zinc-400">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-6 py-24 md:px-20">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">Projects</p>
        <h3 className="mt-4 text-4xl font-black md:text-6xl">Project types</h3>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project} className="min-h-64 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-10">
              <h4 className="text-3xl font-black">{project}</h4>
              <p className="mt-4 max-w-xl text-zinc-400">
                Designed with scalable structure, clean interface and production deployment.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-6 py-24 md:px-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">About</p>
            <h3 className="mt-4 text-4xl font-black md:text-6xl">
              Engineering-focused software studio.
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-zinc-400 md:text-2xl">
            2LLSOFT focuses on building reliable digital products: modern interfaces,
            secure backend systems, scalable APIs and deployment-ready infrastructure.
          </p>
        </div>
      </section>

      <section id="tech" className="px-6 py-24 md:px-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl md:p-16">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">Technologies</p>
          <h3 className="mt-4 text-4xl font-black md:text-6xl">Modern stack. Clean code.</h3>

          <div className="mt-10 flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24 md:px-20">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">Pricing</p>
        <h3 className="mt-4 text-4xl font-black md:text-6xl">Simple starting points</h3>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
            <div key={plan.name} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h4 className="text-2xl font-black">{plan.name}</h4>
              <p className="mt-5 text-5xl font-black">{plan.price}</p>
              <ul className="mt-8 space-y-4 text-zinc-400">
                {plan.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-20">
        <div className="rounded-[2rem] bg-white p-10 text-black md:p-16">
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">Contact</p>
          <h3 className="mt-4 text-4xl font-black md:text-6xl">
            Let’s build something serious.
          </h3>
          <p className="mt-6 max-w-2xl text-zinc-600">
            Tell us what you want to build. We turn ideas into production-ready digital products.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-zinc-200 px-5 py-4" placeholder="Your name" />
            <input className="rounded-2xl border border-zinc-200 px-5 py-4" placeholder="Email address" />
            <textarea className="min-h-36 rounded-2xl border border-zinc-200 px-5 py-4 md:col-span-2" placeholder="Project details" />
            <button className="rounded-full bg-black px-8 py-4 font-bold text-white md:w-fit">
              Send Message
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-zinc-500 md:px-20">
        © 2026 2LLSOFT. Modern Software Solutions.
      </footer>
    </main>
  );
}