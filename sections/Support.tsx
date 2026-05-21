const supportItems = [
  {
    title: "WhatsApp Support",
    text: "Fast project communication and direct support.",
    href: "https://wa.me/48507275668",
  },
  {
    title: "Email Support",
    text: "Send project details and business requests.",
    href: "mailto:info@2llsoft.com",
  },
  {
    title: "Technical Help",
    text: "Support for websites, dashboards and software systems.",
    href: "#contact",
  },
];

export default function Support() {
  return (
    <section id="support" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Support Center
      </p>

      <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        Need help with a software project?
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {supportItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            className="glass-card glass-hover rounded-[3rem] p-10"
          >
            <h3 className="text-3xl font-black">{item.title}</h3>

            <p className="mt-6 leading-8 text-zinc-400">
              {item.text}
            </p>

            <div className="mt-10 inline-block rounded-full bg-cyan-400 px-6 py-3 font-bold text-black">
              Open
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}