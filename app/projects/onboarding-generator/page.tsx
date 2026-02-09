"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";

type RoleKey = "it" | "frontdesk" | "manager";

const roleTemplates: Record<RoleKey, { label: string; tasks: string[]; access: string[] }> = {
  it: {
    label: "IT / Technician",
    tasks: [
      "Issue laptop + verify updates",
      "Enroll device in management (if applicable)",
      "Configure MFA + password manager",
      "Verify VPN / remote tools",
      "Add to IT documentation + escalation channels",
    ],
    access: [
      "Google Workspace Admin (as needed)",
      "UniFi controller access (least privilege)",
      "Ticketing / knowledge base",
      "VoIP admin portal (read-only if possible)",
      "Shared IT drive / runbooks",
    ],
  },
  frontdesk: {
    label: "Front Desk / Sales",
    tasks: [
      "Create user account + set MFA",
      "Assign POS login + permissions",
      "Set up email signature",
      "Train on common workflows + handoff rules",
      "Verify access to scheduling/booking tool",
    ],
    access: [
      "Email + calendar",
      "POS system (role-based)",
      "Scheduling/booking platform",
      "Shared drive (front desk)",
      "VoIP softphone / extension",
    ],
  },
  manager: {
    label: "Manager",
    tasks: [
      "Create user + MFA + manager groups",
      "Grant reporting dashboards access",
      "Set up approvals/workflows",
      "Train on incident escalation process",
      "Verify access to vendor portals",
    ],
    access: [
      "Email + calendar",
      "POS manager permissions",
      "Reporting dashboards",
      "Vendor portals",
      "Shared drive (management)",
    ],
  },
};

export default function OnboardingGeneratorPage() {
  const [employeeName, setEmployeeName] = useState("New Hire");
  const [department, setDepartment] = useState("Operations");
  const [startDate, setStartDate] = useState("2026-02-09");
  const [role, setRole] = useState<RoleKey>("frontdesk");

  const output = useMemo(() => {
    const tmpl = roleTemplates[role];
    return [
      "ONBOARDING PACKET",
      `Employee: ${employeeName}`,
      `Department: ${department}`,
      `Start date: ${startDate}`,
      `Role: ${tmpl.label}`,
      "",
      "CHECKLIST",
      ...tmpl.tasks.map((t, i) => `${i + 1}. ${t}`),
      "",
      "ACCESS / SYSTEMS",
      ...tmpl.access.map((a, i) => `${i + 1}. ${a}`),
      "",
      "WELCOME MESSAGE (TEMPLATE)",
      `Hi ${employeeName}, welcome aboard! Your start date is ${startDate}.`,
      "If you have any issues accessing systems, reply here and we’ll help immediately.",
    ].join("\n");
  }, [employeeName, department, startDate, role]);

  async function copy() {
    await navigator.clipboard.writeText(output);
    alert("Copied to clipboard.");
  }

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Onboarding Automation Generator</h1>
        <p className="mt-3 text-zinc-600">
          Generates a role-based onboarding checklist and access matrix you can paste into a ticket or doc.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Inputs</h2>

            <div className="mt-4 grid gap-3">
              <label className="text-sm">
                <span className="text-zinc-700">Employee name</span>
                <input
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                />
              </label>

              <label className="text-sm">
                <span className="text-zinc-700">Department</span>
                <input
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                />
              </label>

              <label className="text-sm">
                <span className="text-zinc-700">Start date</span>
                <input
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  type="date"
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                />
              </label>

              <label className="text-sm">
                <span className="text-zinc-700">Role template</span>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as RoleKey)}
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                >
                  <option value="frontdesk">{roleTemplates.frontdesk.label}</option>
                  <option value="it">{roleTemplates.it.label}</option>
                  <option value="manager">{roleTemplates.manager.label}</option>
                </select>
              </label>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={copy}
                className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Copy output
              </button>

              <button
                onClick={() => window.print()}
                className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
              >
                Print / Save as PDF
              </button>
            </div>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Generated output</h2>
            <pre className="mt-4 whitespace-pre-wrap rounded-xl border bg-zinc-50 p-4 text-xs">
              {output}
            </pre>
          </section>
        </div>
      </main>
    </div>
  );
}
