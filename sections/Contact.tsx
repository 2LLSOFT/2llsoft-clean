"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("Sending...");

    const form = event.currentTarget;

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: new FormData(form).get("name"),
        email: new FormData(form).get("email"),
        message: new FormData(form).get("message"),
      }),
    });

    setStatus("Message sent successfully.");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="bg-[#030303] px-6 py-24 text-white md:px-20"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl md:p-16">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Let’s build something serious.
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400">
          Send your project idea. 2LLSOFT will turn it into production-ready
          software systems.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          <input
            required
            name="name"
            placeholder="Your name"
            className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <textarea
            required
            name="message"
            placeholder="Project details"
            className="min-h-[180px] rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none md:col-span-2"
          />

          <button
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300 md:w-fit"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-6 text-sm text-cyan-400">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}