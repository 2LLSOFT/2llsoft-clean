import Link from "next/link";

const projects = ["SaaS Platform", "Mobile Commerce", "AI Dashboard"];

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h1>
        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Overview</Link>
          <Link href="/dashboard/messages" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Messages</Link>
          <Link href="/dashboard/projects" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">Projects</Link>
          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Settings</Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">Dashboard / Projects</p>
        <h1 className="mt-3 text-5xl font-black">Projects</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-bold">{project}</h2>
              <p className="mt-4 text-zinc-400">Project status: Active</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}