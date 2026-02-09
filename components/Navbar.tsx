export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="/" className="font-semibold tracking-tight">
          Kevin
        </a>

        <nav className="flex items-center gap-5 text-sm text-zinc-700">
          <a className="hover:text-zinc-950" href="#skills">Skills</a>
          <a className="hover:text-zinc-950" href="#work">Work</a>
          <a className="hover:text-zinc-950" href="#contact">Contact</a>
            <a className="rounded-full border px-4 py-2 text-zinc-900 hover:bg-zinc-50" href="/resume">
            Resume
            </a>
        </nav>
      </div>
    </header>
  );
}
