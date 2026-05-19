"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    {
      name: "SaaS Platform",
      status: "Active",
    },
    {
      name: "Mobile Commerce",
      status: "Development",
    },
    {
      name: "AI Dashboard",
      status: "Planning",
    },
  ]);

  const [newProject, setNewProject] = useState("");

  function addProject() {
    if (!newProject) return;

    setProjects([
      ...projects,
      {
        name: newProject,
        status: "New",
      },
    ]);

    setNewProject("");
  }

  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">
          2LLSOFT
        </h1>

        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Overview
          </Link>

          <Link href="/dashboard/messages" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Messages
          </Link>

          <Link href="/dashboard/projects" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">
            Projects
          </Link>

          <Link href="/dashboard/analytics" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Analytics
          </Link>

          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Settings
          </Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Projects
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Projects
        </h1>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            placeholder="New project name"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <button
            onClick={addProject}
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-cyan-300"
          >
            Add Project
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <h2 className="text-3xl font-black">
                {project.name}
              </h2>

              <p className="mt-4 text-zinc-400">
                Project status:
              </p>

              <div className="mt-4 inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}