"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";

function ipToInt(ip: string): number | null {
  const parts = ip.trim().split(".");
  if (parts.length !== 4) return null;
  const nums = parts.map((p) => Number(p));
  if (nums.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return null;
  return ((nums[0] << 24) >>> 0) + (nums[1] << 16) + (nums[2] << 8) + nums[3];
}

function intToIp(n: number): string {
  return [
    (n >>> 24) & 255,
    (n >>> 16) & 255,
    (n >>> 8) & 255,
    n & 255,
  ].join(".");
}

function maskFromCidr(cidr: number): number {
  if (cidr === 0) return 0 >>> 0;
  return (0xffffffff << (32 - cidr)) >>> 0;
}

export default function NetworkToolkitPage() {
  const [ip, setIp] = useState("192.168.1.50");
  const [cidr, setCidr] = useState(24);

  const [symptoms, setSymptoms] = useState("User reports intermittent disconnects on Wi-Fi.");
  const [checks, setChecks] = useState("Checked link status, DHCP lease, DNS resolution, and gateway reachability.");
  const [findings, setFindings] = useState("Signal strength was weak in the affected area; DHCP lease renewals were normal.");
  const [nextSteps, setNextSteps] = useState("Recommend AP placement adjustment; retest; monitor for 24 hours.");

  const subnet = useMemo(() => {
    const ipInt = ipToInt(ip);
    if (ipInt === null) return { ok: false as const, error: "Invalid IP address." };
    if (cidr < 0 || cidr > 32) return { ok: false as const, error: "CIDR must be 0–32." };

    const mask = maskFromCidr(cidr);
    const network = (ipInt & mask) >>> 0;
    const broadcast = (network | (~mask >>> 0)) >>> 0;

    const totalHosts = cidr === 32 ? 1 : Math.max(0, 2 ** (32 - cidr));
    const usable =
      cidr >= 31 ? totalHosts : Math.max(0, totalHosts - 2);

    const firstHost =
      cidr >= 31 ? network : (network + 1) >>> 0;
    const lastHost =
      cidr >= 31 ? broadcast : (broadcast - 1) >>> 0;

    return {
      ok: true as const,
      mask: intToIp(mask >>> 0),
      network: intToIp(network),
      broadcast: intToIp(broadcast),
      firstHost: intToIp(firstHost),
      lastHost: intToIp(lastHost),
      usableHosts: usable,
      totalAddresses: totalHosts,
    };
  }, [ip, cidr]);

  const ticketNote = useMemo(() => {
    return [
      "TROUBLESHOOTING NOTE",
      `Symptoms: ${symptoms}`,
      `Checks performed: ${checks}`,
      `Findings: ${findings}`,
      `Next steps: ${nextSteps}`,
    ].join("\n");
  }, [symptoms, checks, findings, nextSteps]);

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard.");
  }

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Network Troubleshooting Toolkit</h1>
        <p className="mt-3 text-zinc-600">
          A small set of tools to speed up triage and produce clean, structured ticket notes.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Subnet calculator */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Subnet Calculator</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Enter an IP and CIDR to compute network, mask, and usable range.
            </p>

            <div className="mt-4 grid gap-3">
              <label className="text-sm">
                <span className="text-zinc-700">IP Address</span>
                <input
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="192.168.1.50"
                />
              </label>

              <label className="text-sm">
                <span className="text-zinc-700">CIDR</span>
                <input
                  value={cidr}
                  onChange={(e) => setCidr(Number(e.target.value))}
                  type="number"
                  min={0}
                  max={32}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                />
              </label>
            </div>

            <div className="mt-5 rounded-xl border bg-zinc-50 p-4 text-sm">
              {!subnet.ok ? (
                <p className="text-zinc-700">{subnet.error}</p>
              ) : (
                <div className="grid gap-1">
                  <div><span className="text-zinc-500">Mask:</span> {subnet.mask}</div>
                  <div><span className="text-zinc-500">Network:</span> {subnet.network}</div>
                  <div><span className="text-zinc-500">Broadcast:</span> {subnet.broadcast}</div>
                  <div><span className="text-zinc-500">First host:</span> {subnet.firstHost}</div>
                  <div><span className="text-zinc-500">Last host:</span> {subnet.lastHost}</div>
                  <div><span className="text-zinc-500">Usable hosts:</span> {subnet.usableHosts}</div>
                </div>
              )}
            </div>
          </section>

          {/* Ticket note generator */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Ticket Note Generator</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Structured notes = faster handoffs and less repeat work.
            </p>

            <div className="mt-4 grid gap-3">
              <label className="text-sm">
                <span className="text-zinc-700">Symptoms</span>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  rows={2}
                />
              </label>

              <label className="text-sm">
                <span className="text-zinc-700">Checks performed</span>
                <textarea
                  value={checks}
                  onChange={(e) => setChecks(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  rows={2}
                />
              </label>

              <label className="text-sm">
                <span className="text-zinc-700">Findings</span>
                <textarea
                  value={findings}
                  onChange={(e) => setFindings(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  rows={2}
                />
              </label>

              <label className="text-sm">
                <span className="text-zinc-700">Next steps</span>
                <textarea
                  value={nextSteps}
                  onChange={(e) => setNextSteps(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  rows={2}
                />
              </label>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => copy(ticketNote)}
                className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Copy note
              </button>
            </div>

            <pre className="mt-4 whitespace-pre-wrap rounded-xl border bg-zinc-50 p-4 text-xs">
              {ticketNote}
            </pre>
          </section>
        </div>
      </main>
    </div>
  );
}
