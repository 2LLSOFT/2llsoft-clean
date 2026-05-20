"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  status: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState("");

  async function loadProjects() {
    const response = await fetch("/api/projects");
    const data = await response.json();
    setProjects(data);
  }

  async function addProject() {
    if (!newProject) return;

    await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newProject,
        description: "New project created from dashboard",
        status: "New",
      }),
    });

    setNewProject("");
    loadProjects();
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h1>

        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Overview</Link>
          <Link href="/dashboard/messages" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Messages</Link>
          <Link href="/dashboard/projects" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">Projects</Link>
          <Link href="/dashboard/analytics" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Analytics</Link>
          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Settings</Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Projects
        </p>

        <h1 className="mt-3 text-5xl font-black">Projects</h1>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            value={newProject}
            onChange={(event) => setNewProject(event.target.value)}
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
              key={project.id}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <h2 className="text-2xl font-black">{project.name}</h2>
              <p className="mt-4 text-zinc-400">{project.description}</p>
              <div className="mt-5 inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}