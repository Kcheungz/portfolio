import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 text-zinc-600">
          The fastest way to reach me is email. LinkedIn works too.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a
            href="mailto:you@example.com"
            className="rounded-2xl border bg-white p-6 shadow-sm hover:bg-zinc-50"
          >
            <p className="text-sm text-zinc-500">Email</p>
            <p className="mt-2 text-lg font-semibold">you@example.com</p>
            <p className="mt-1 text-sm text-zinc-600">Click to send a message</p>
          </a>

          <a
            href="https://www.linkedin.com/"
            className="rounded-2xl border bg-white p-6 shadow-sm hover:bg-zinc-50"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-sm text-zinc-500">LinkedIn</p>
            <p className="mt-2 text-lg font-semibold">Your LinkedIn</p>
            <p className="mt-1 text-sm text-zinc-600">Open profile</p>
          </a>
        </div>
      </main>
    </div>
  );
}
