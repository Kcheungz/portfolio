"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";

type Service = {
  id: string;
  name: string;
  url: string;
};

type CheckResult = {
  ok: boolean;
  ms: number;
  checkedAt: string;
};

const STORAGE_KEY = "lab_services_v1";

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default function LabDashboardPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [results, setResults] = useState<Record<string, CheckResult>>({});
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setServices(JSON.parse(raw));
        return;
      } catch {}
    }
    setServices([
      { id: uid(), name: "Grafana", url: "https://grafana.example.com" },
      { id: uid(), name: "Portainer", url: "https://portainer.example.com" },
      { id: uid(), name: "n8n", url: "https://n8n.example.com" },
    ]);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
  }, [services]);

  function addService() {
    if (!name.trim() || !url.trim()) return;
    setServices((s) => [...s, { id: uid(), name: name.trim(), url: url.trim() }]);
    setName("");
    setUrl("");
  }

  function removeService(id: string) {
    setServices((s) => s.filter((x) => x.id !== id));
    setResults((r) => {
      const copy = { ...r };
      delete copy[id];
      return copy;
    });
  }

  async function checkOne(id: string) {
    // Simulated check (keeps demo reliable without CORS/network limits)
    const start = performance.now();
    await new Promise((res) => setTimeout(res, 200 + Math.random() * 600));
    const ms = Math.round(performance.now() - start);
    const ok = Math.random() > 0.08; // ~92% up
    setResults((r) => ({
      ...r,
      [id]: { ok, ms, checkedAt: new Date().toLocaleString() },
    }));
  }

  async function checkAll() {
    for (const s of services) {
      // sequential keeps UI feeling deterministic
      // (and avoids blasting requests if you later swap to real checks)
      await checkOne(s.id);
    }
  }

  const upCount = useMemo(
    () => Object.values(results).filter((r) => r.ok).length,
    [results]
  );

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Home-Lab Status Dashboard</h1>
        <p className="mt-3 text-zinc-600">
          A lightweight ops dashboard for service visibility (demo uses simulated checks).
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={checkAll}
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Check all
          </button>
          <div className="text-sm text-zinc-600">
            Services up: <span className="font-medium text-zinc-900">{upCount}</span> / {services.length}
          </div>
        </div>

        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Add a service</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border px-3 py-2"
              placeholder="Service name (e.g., Grafana)"
            />
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="rounded-xl border px-3 py-2 md:col-span-2"
              placeholder="URL (e.g., https://grafana.yourdomain.com)"
            />
          </div>
          <div className="mt-3">
            <button
              onClick={addService}
              className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
            >
              Add
            </button>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((s) => {
            const r = results[s.id];
            return (
              <div key={s.id} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    <p className="mt-1 break-all text-sm text-zinc-600">{s.url}</p>
                  </div>
                  <button
                    onClick={() => removeService(s.id)}
                    className="text-sm text-zinc-600 hover:text-zinc-900"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => checkOne(s.id)}
                    className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    Check
                  </button>

                  {r ? (
                    <div className="text-sm">
                      <span className={r.ok ? "text-zinc-900" : "text-zinc-900"}>
                        Status: <span className="font-medium">{r.ok ? "UP" : "DOWN"}</span>
                      </span>
                      <span className="text-zinc-500"> • {r.ms} ms • {r.checkedAt}</span>
                    </div>
                  ) : (
                    <div className="text-sm text-zinc-500">Not checked yet</div>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
