export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#030303] p-10 text-white">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
        Dashboard / Projects
      </p>

      <h1 className="mt-3 text-5xl font-black">Projects</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["SaaS Platform", "Mobile Commerce", "AI Dashboard"].map((project) => (
          <div
            key={project}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h2 className="text-2xl font-bold">{project}</h2>
            <p className="mt-4 text-zinc-400">Project status: Active</p>
          </div>
        ))}
      </div>
    </main>
  );
}