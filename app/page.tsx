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
                IT Generalist • Networking • Automation
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                I fix systems fast, document clearly, and automate repeat work.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                I specialize in troubleshooting across devices, networks, and
                services—then turning what I learn into repeatable playbooks and
                tools.
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
                  href="https://github.com/"
                  className="rounded-full border px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  GitHub
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Chip>UniFi</Chip>
                <Chip>VLANs</Chip>
                <Chip>DHCP/DNS</Chip>
                <Chip>Jamf</Chip>
                <Chip>VoIP</Chip>
                <Chip>n8n</Chip>
                <Chip>Windows + Linux</Chip>
              </div>
            </div>

            {/* “Visual” panel without needing images */}
            <div className="rounded-3xl border bg-gradient-to-b from-zinc-50 to-white p-6 shadow-sm">
              <div className="rounded-2xl border bg-white p-5">
                <p className="text-xs font-medium text-zinc-500">
                  RECENT FOCUS
                </p>
                <ul className="mt-3 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                    <span>
                      Diagnosing intermittent network/device issues (fast isolation,
                      clean ticket notes).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                    <span>
                      Building lightweight tools for troubleshooting and ops visibility.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                    <span>
                      Process automation and “make it repeatable” playbooks.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-white p-4">
                  <p className="text-xs font-medium text-zinc-500">STYLE</p>
                  <p className="mt-2 text-sm text-zinc-700">
                    Calm under pressure. Obsessed with root cause.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white p-4">
                  <p className="text-xs font-medium text-zinc-500">OUTPUT</p>
                  <p className="mt-2 text-sm text-zinc-700">
                    Fix + notes + prevention (not just heroics).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-12 border-t">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-zinc-600">
            The stuff I’m comfortable touching in production without panicking.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">Networking</h3>
              <p className="mt-2 text-sm text-zinc-600">
                VLANs, DHCP/DNS, Wi-Fi tuning, device adoption, troubleshooting via OSI.
              </p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">IT Operations</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Endpoint support, hardware diagnostics, deployment validation, documentation.
              </p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">Automation</h3>
              <p className="mt-2 text-sm text-zinc-600">
                n8n workflows, repeatable checklists, lightweight internal tooling.
              </p>
            </div>
          </div>
        </section>

        {/* WORK / FEATURED */}
        <section id="work" className="py-12 border-t">
          <h2 className="text-2xl font-semibold tracking-tight">Featured work</h2>
          <p className="mt-2 text-zinc-600">
            I’ll add the full projects next—this is the “landing page that already looks hired.”
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
              Best way to reach me: email + LinkedIn.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                href="mailto:you@example.com"
              >
                Email me
              </a>
              <a
                className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-white"
                href="https://www.linkedin.com/"
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
