const posts = [
  {
    title: "How modern SaaS systems scale",
    category: "Architecture",
  },
  {
    title: "Building premium UI with Next.js",
    category: "Frontend",
  },
  {
    title: "Cloud deployment best practices",
    category: "Infrastructure",
  },
];

export default function Blog() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Blog
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Engineering insights.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.title}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <div className="h-[240px] bg-gradient-to-br from-cyan-500/20 to-blue-700/20" />

            <div className="p-8">
              <p className="text-sm text-cyan-400">
                {post.category}
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                {post.title}
              </h3>

              <button className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black">
                Read Article
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}