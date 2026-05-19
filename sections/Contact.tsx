"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully.");
      form.reset();
    } else {
      setStatus("Something went wrong.");
    }
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-20">
      <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-10 text-black md:p-16">
        <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">Contact</p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Let’s build something serious.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <input name="name" required className="rounded-2xl border border-zinc-200 px-5 py-4" placeholder="Your name" />
          <input name="email" required type="email" className="rounded-2xl border border-zinc-200 px-5 py-4" placeholder="Email address" />
          <textarea name="message" required className="min-h-36 rounded-2xl border border-zinc-200 px-5 py-4 md:col-span-2" placeholder="Project details" />

          <button className="rounded-full bg-black px-8 py-4 font-bold text-white md:w-fit">
            Send Message
          </button>
        </div>

        {status && <p className="mt-6 text-sm text-zinc-600">{status}</p>}
      </form>
    </section>
  );
}