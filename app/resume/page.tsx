import Navbar from "@/components/Navbar";

export default function ResumePage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <a
            className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </div>

        <p className="mt-3 text-zinc-600">
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
          <iframe
            src="/resume.pdf"
            className="h-[80vh] w-full"
            title="Resume PDF"
          />
        </div>
      </main>
    </div>
  );
}
