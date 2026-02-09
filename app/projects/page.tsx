import Navbar from "@/components/Navbar";

function ProjectCard({
  title,
  desc,
  tags,
  href,
}: {
  title: string;
  desc: string;
  tags: string[];
  href: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-2xl border bg-white p-6 shadow-sm hover:bg-zinc-50"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border bg-white px-3 py-1 text-xs text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 text-sm text-zinc-700">
        <span className="underline underline-offset-4">Open project</span>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-zinc-600">
          Practical tools built for troubleshooting, visibility, and repeatable ops.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ProjectCard
            title="Network Troubleshooting Toolkit"
            desc="Generates structured ticket notes + helps isolate common LAN/Wi-Fi problems."
            tags={["Networking", "Troubleshooting", "Docs"]}
            href="/projects/network-toolkit"
          />
          <ProjectCard
            title="Home-Lab Status Dashboard"
            desc="Simple health checks for services with a clean ops-focused UI."
            tags={["Monitoring", "Ops", "Next.js"]}
            href="/projects/lab-dashboard"
          />
          <ProjectCard
            title="Onboarding Automation Generator"
            desc="Role-based onboarding checklist + access matrix with exportable output."
            tags={["Automation", "Process", "Templates"]}
            href="/projects/onboarding-generator"
          />
        </div>
      </main>
    </div>
  );
}
