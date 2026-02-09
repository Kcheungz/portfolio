import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold">Kevin Cheung</h1>
        <p className="text-lg text-gray-600">
          IT Generalist • Networking • Automation • Software Developer • Software Engineer
        </p>

        <div className="flex gap-3">
          <a className="underline" href="/projects">Projects</a>
          <a className="underline" href="/resume">Resume</a>
          <a className="underline" href="/contact">Contact</a>
        </div>
      </div>
    </main>
  );
}
