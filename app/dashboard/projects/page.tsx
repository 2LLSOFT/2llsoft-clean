export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#030303] p-10 text-white">
      <h1 className="text-5xl font-black">Projects</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          SaaS Platform
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          Mobile Commerce
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          AI Dashboard
        </div>
      </div>
    </main>
  );
}
