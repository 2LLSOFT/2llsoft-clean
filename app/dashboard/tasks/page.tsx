"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  priority: string;
  status: string;
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  async function loadTasks() {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    setTasks(data);
  }

  async function addTask() {
    if (!newTask) return;

    await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTask,
        priority: "Medium",
        status: "New",
      }),
    });

    setNewTask("");
    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h1>

        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Overview</Link>
          <Link href="/dashboard/messages" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Messages</Link>
          <Link href="/dashboard/projects" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Projects</Link>
          <Link href="/dashboard/tasks" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">Tasks</Link>
          <Link href="/dashboard/analytics" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Analytics</Link>
          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Settings</Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Tasks
        </p>

        <h1 className="mt-3 text-5xl font-black">Tasks</h1>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="New task title"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <button
            onClick={addTask}
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-cyan-300"
          >
            Add Task
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <h2 className="text-2xl font-black">{task.title}</h2>

              <div className="mt-5 flex gap-3">
                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  {task.priority}
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300">
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}