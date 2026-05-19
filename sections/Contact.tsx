export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-20">
      <div className="rounded-[2rem] bg-white p-10 text-black md:p-16">
        <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">Contact</p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Let’s build something serious.
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-600">
          Tell us what you want to build. 2LLSOFT turns ideas into production-ready digital products.
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
  );
}