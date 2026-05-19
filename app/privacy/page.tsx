export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          2LLSOFT
        </p>

        <h1 className="mt-4 text-5xl font-black">Privacy Policy</h1>

        <div className="mt-10 space-y-6 text-zinc-400">
          <p>
            2LLSOFT respects user privacy and handles submitted information only
            for communication, project evaluation and service delivery.
          </p>

          <p>
            Contact form data may include name, email address and project
            details. This information is not sold or shared with third parties.
          </p>

          <p>
            Website analytics may be used to understand traffic, improve
            performance and enhance user experience.
          </p>
        </div>
      </div>
    </main>
  );
}