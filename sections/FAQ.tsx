const faq = [
  {
    question: "How long does a project take?",
    answer:
      "Most company websites are completed within 1–3 weeks depending on scope.",
  },
  {
    question: "Do you build SaaS platforms?",
    answer:
      "Yes. 2LLSOFT develops scalable SaaS systems with dashboards and APIs.",
  },
  {
    question: "Can you manage hosting and deployment?",
    answer:
      "Yes. We handle deployment, infrastructure and production optimization.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Maintenance, monitoring and future upgrades are available.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        FAQ
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Frequently asked questions.
      </h2>

      <div className="mt-14 space-y-6">
        {faq.map((item) => (
          <div
            key={item.question}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <h3 className="text-2xl font-bold">
              {item.question}
            </h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}