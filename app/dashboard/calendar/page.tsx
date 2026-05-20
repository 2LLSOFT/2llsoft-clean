import Link from "next/link";

const events = [
  {
    title: "Client Meeting",
    date: "May 21, 2026",
    time: "13:00",
  },
  {
    title: "Deployment Release",
    date: "May 22, 2026",
    time: "18:00",
  },
];

export default function CalendarPage() {
  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">
          2LLSOFT
        </h1>

        <div className="mt-14 space-y-3">
          <Link
            href="/dashboard"
            className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400"
          >
            Overview
          </Link>

          <Link
            href="/dashboard/calendar"
            className="block rounded-2xl bg-white px-5 py-4 font-bold text-black"
          >
            Calendar
          </Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Calendar
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Calendar
        </h1>

        <div className="mt-10 space-y-5">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <h2 className="text-3xl font-black">
                {event.title}
              </h2>

              <p className="mt-4 text-zinc-400">
                {event.date}
              </p>

              <div className="mt-4 inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">
                {event.time}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}