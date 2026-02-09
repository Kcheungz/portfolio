import Navbar from "@/components/Navbar";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border bg-white px-3 py-1 text-sm text-zinc-700">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
      <div className="mt-4 text-sm text-zinc-700">
        <span className="underline underline-offset-4">Coming soon</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-5xl px-5">
        {/* HERO */}
        <section className="py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm text-zinc-600">
                Software Engineer • Software Developer • IT Generalist • Networking 
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Kevin Cheung
              </h1>

              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                Entry-level Software Engineer with a Bachelor’s degree in Computer Science and hands-on experience building
backend services, cloud-based APIs, data pipelines, and full-stack applications.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Contact me
                </a>
                <a
                  href="/resume"
                  className="rounded-full border px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  View resume
                </a>
                <a
                  href="https://github.com/Kcheungz"
                  className="rounded-full border px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  GitHub
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
              </div>
            </div>

            {/* Photo panel */}
            <div className="rounded-3xl border bg-zinc-50 p-6 shadow-sm">
              <div className="overflow-hidden rounded-2xl border bg-white">
                <img
                  src="/me.png"
                  alt="Kevin headshot"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-12 border-t">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-zinc-600">
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">Software Development</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Backend-focused software engineer building scalable cloud APIs and data pipelines.
              </p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">IT Operations</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Endpoint support, hardware diagnostics, deployment validation, documentation.
              </p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">Programming Languages</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Java, Go, Python, C++, JavaScript, Node.js,
              </p>
            </div>
          </div>
        </section>

        {/* WORK / FEATURED */}
        <section id="work" className="py-12 border-t">
          <h2 className="text-2xl font-semibold tracking-tight">Featured work</h2>
          <p className="mt-2 text-zinc-600">
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="Network Troubleshooting Toolkit"
              desc="A web tool that generates structured ticket notes and helps isolate common LAN/Wi-Fi issues."
            />
            <Card
              title="Home-Lab Status Dashboard"
              desc="A small dashboard for service health checks, visibility, and ops awareness."
            />
            <Card
              title="Onboarding Automation Generator"
              desc="Generates onboarding checklists + access matrices based on role templates."
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-12 border-t">
          <div className="rounded-3xl border bg-zinc-50 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Let’s talk
            </h2>
            <p className="mt-2 text-zinc-600">
              Best way to reach me is by email : cheung.kevin20@gmail.com.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                href="cheung.kevin20@gmail.com"
              >
                Email me
              </a>
              <a
                className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-white"
                href="https://www.linkedin.com/in/kcheung20/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} Kevin. Built with Next.js.
        </footer>
      </main>
    </div>
  );
}
