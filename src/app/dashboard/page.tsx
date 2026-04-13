"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useAssessmentStore } from "@/lib/assessment-store";

const TRACKING_STEPS = [
  {
    label: "Prescription sent",
    status: "complete" as const,
    date: "Apr 13, 2026",
  },
  {
    label: "Pharmacy received",
    status: "complete" as const,
    date: "Apr 13, 2026",
  },
  {
    label: "Compounding",
    status: "current" as const,
    date: "Est. Apr 15, 2026",
  },
  { label: "Shipped", status: "upcoming" as const, date: "Est. Apr 16, 2026" },
  {
    label: "Delivered",
    status: "upcoming" as const,
    date: "Est. Apr 18, 2026",
  },
];

export default function DashboardPage() {
  const { medication, data } = useAssessmentStore();
  const medName =
    medication?.type === "semaglutide" ? "Semaglutide" : "Tirzepatide";
  const patientName = data.patientInfo?.firstName ?? "there";

  return (
    <>
      <Nav />
      <main className="flex-1 bg-warm-gray">
        <div className="max-w-3xl mx-auto px-4 py-8 md:py-14">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back, {patientName}
            </h1>
            <p className="text-gray-500 mt-1">
              Here&apos;s your treatment overview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Status card */}
            <div className="bg-white rounded-2xl border border-gray-200/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Status
              </p>
              <p className="text-lg font-bold mt-1 text-sage">Active</p>
              <p className="text-xs text-gray-500 mt-1">Since Apr 13, 2026</p>
            </div>

            {/* Medication card */}
            <div className="bg-white rounded-2xl border border-gray-200/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Medication
              </p>
              <p className="text-lg font-bold mt-1">{medName}</p>
              <p className="text-xs text-gray-500 mt-1">
                {medication?.dosage} — {medication?.form}
              </p>
            </div>

            {/* Next refill card */}
            <div className="bg-white rounded-2xl border border-gray-200/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Next Refill
              </p>
              <p className="text-lg font-bold mt-1">May 13, 2026</p>
              <p className="text-xs text-gray-500 mt-1">
                Auto-renew enabled
              </p>
            </div>
          </div>

          {/* Order tracking */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold">Order Tracking</h2>
              <span className="text-xs font-medium bg-coral/10 text-coral px-3 py-1 rounded-full">
                In Progress
              </span>
            </div>

            <div className="space-y-0">
              {TRACKING_STEPS.map((step, i) => (
                <div key={step.label} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 ${
                        step.status === "complete"
                          ? "bg-black border-black"
                          : step.status === "current"
                          ? "bg-white border-black"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      {step.status === "current" && (
                        <div className="w-1.5 h-1.5 bg-black rounded-full m-[3px]" />
                      )}
                    </div>
                    {i < TRACKING_STEPS.length - 1 && (
                      <div
                        className={`w-0.5 h-10 ${
                          step.status === "complete"
                            ? "bg-black"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 -mt-0.5 pb-4">
                    <p
                      className={`text-sm font-medium ${
                        step.status === "upcoming"
                          ? "text-gray-400"
                          : "text-black"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{step.date}</p>
                  </div>
                  {step.status === "complete" && (
                    <svg
                      className="w-4 h-4 text-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-cool-gray rounded-xl flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Tracking Number</p>
                <p className="text-xs text-gray-500 mt-0.5 font-mono">
                  1Z999AA10123456784
                </p>
              </div>
              <button className="text-xs font-semibold text-black underline">
                Track Package
              </button>
            </div>
          </div>

          {/* Treatment plan */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-6 mb-6">
            <h2 className="font-bold mb-4">Your Treatment Plan</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Provider</span>
                <span className="font-medium">Dr. Sarah Chen, MD</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Current dose</span>
                <span className="font-medium">{medication?.dosage}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Next dose increase</span>
                <span className="font-medium">Week 5 (pending review)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Check-in</span>
                <span className="font-medium">Week 2 — Apr 27, 2026</span>
              </div>
            </div>
          </div>

          {/* Coaching */}
          <div className="bg-black text-white rounded-2xl p-6 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Your Future Coach
                </p>
                <h3 className="text-xl font-bold mt-1">Alex Rivera</h3>
                <p className="text-sm text-white/60 mt-1">
                  Certified Personal Trainer, Nutrition Specialist
                </p>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">AR</span>
              </div>
            </div>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Your coach will design a complementary fitness and nutrition plan
              that works alongside your GLP-1 treatment — so the habits stick
              even after you finish medication.
            </p>
            <button className="mt-4 bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-lg hover:opacity-80 transition-opacity">
              Message Coach
            </button>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white rounded-2xl border border-gray-200/60 p-5 text-left hover:border-gray-300 transition-colors">
              <p className="text-sm font-semibold">Request Refill</p>
              <p className="text-xs text-gray-400 mt-1">
                Next eligible: May 10
              </p>
            </button>
            <button className="bg-white rounded-2xl border border-gray-200/60 p-5 text-left hover:border-gray-300 transition-colors">
              <p className="text-sm font-semibold">Message Support</p>
              <p className="text-xs text-gray-400 mt-1">24/7 care team</p>
            </button>
            <button className="bg-white rounded-2xl border border-gray-200/60 p-5 text-left hover:border-gray-300 transition-colors">
              <p className="text-sm font-semibold">Update Pharmacy</p>
              <p className="text-xs text-gray-400 mt-1">Change pharmacy</p>
            </button>
            <button className="bg-white rounded-2xl border border-gray-200/60 p-5 text-left hover:border-gray-300 transition-colors">
              <p className="text-sm font-semibold">Billing</p>
              <p className="text-xs text-gray-400 mt-1">
                Manage subscription
              </p>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
