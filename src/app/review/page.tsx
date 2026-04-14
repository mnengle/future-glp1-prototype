"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/nav";
import { useAssessmentStore } from "@/lib/assessment-store";

const STATUSES = [
  { key: "submitted", label: "Assessment submitted to SteadyMD", time: "Just now" },
  { key: "reviewing", label: "Provider assigned", time: "~2 min" },
  { key: "in_review", label: "Under clinical review", time: "~5 min" },
  { key: "approved", label: "Treatment approved", time: "" },
];

export default function ReviewPage() {
  const router = useRouter();
  const { data, medication, pharmacy, steadymd, setSteadyMDIds } =
    useAssessmentStore();
  const [currentStatus, setCurrentStatus] = useState(0);
  const [apiError, setApiError] = useState<string | null>(null);

  // Actually POST to /api/assessment/submit on mount
  useEffect(() => {
    let cancelled = false;
    async function submitToSteadyMD() {
      // Skip if we already submitted (coming back to this page)
      if (steadymd.patientGuid) return;
      // Skip if required data missing (user navigated here directly)
      if (!data.patientInfo || !medication || !pharmacy) return;

      try {
        const res = await fetch("/api/assessment/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            assessment: data,
            medication,
            pharmacy,
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (cancelled) return;
        setSteadyMDIds({
          patientGuid: json.patientGuid,
          episodeGuid: json.episodeGuid,
          consultGuid: json.consultGuid,
          demo: json.demo,
        });
      } catch (err) {
        if (cancelled) return;
        setApiError(err instanceof Error ? err.message : "Submission failed");
      }
    }
    submitToSteadyMD();
    return () => {
      cancelled = true;
    };
  }, [data, medication, pharmacy, steadymd.patientGuid, setSteadyMDIds]);

  // Simulate async provider review animation (real webhook would drive this)
  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentStatus(1), 3000),
      setTimeout(() => setCurrentStatus(2), 7000),
      setTimeout(() => setCurrentStatus(3), 12000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const isApproved = currentStatus === 3;

  const medName =
    medication?.type === "semaglutide" ? "Semaglutide" : "Tirzepatide";

  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1 bg-warm-gray">
        <div className="max-w-xl mx-auto px-4 py-8 md:py-14">
          {!isApproved ? (
            /* Reviewing state */
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <svg
                  className="animate-spin w-16 h-16 text-gray-200"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-black"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              </div>

              <h1 className="text-3xl font-bold tracking-tight">
                Your assessment is under review
              </h1>
              <p className="text-gray-500 mt-3 max-w-md mx-auto">
                A licensed physician is reviewing your health information. This
                typically takes a few minutes for our demo.
              </p>

              <div className="mt-10 bg-white rounded-2xl border border-gray-200/60 p-6 text-left">
                <div className="space-y-4">
                  {STATUSES.map((status, i) => (
                    <div key={status.key} className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full mt-0.5 ${
                            i <= currentStatus
                              ? "bg-black"
                              : "bg-gray-200"
                          }`}
                        />
                        {i < STATUSES.length - 1 && (
                          <div
                            className={`w-0.5 h-8 ${
                              i < currentStatus ? "bg-black" : "bg-gray-200"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 -mt-0.5">
                        <p
                          className={`text-sm font-medium ${
                            i <= currentStatus
                              ? "text-black"
                              : "text-gray-400"
                          }`}
                        >
                          {status.label}
                        </p>
                        {i === currentStatus && status.time && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            {status.time}
                          </p>
                        )}
                      </div>
                      {i < currentStatus && (
                        <svg
                          className="w-4 h-4 text-sage mt-0.5"
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
              </div>

              <p className="text-xs text-gray-400 mt-6">
                We&apos;ll send you a magic link email when your results are
                ready.
              </p>

              {(steadymd.patientGuid || apiError) && (
                <div className="mt-4 text-[10px] text-gray-400 font-mono">
                  {apiError ? (
                    <span className="text-hot-pink">
                      API error: {apiError}
                    </span>
                  ) : (
                    <>
                      {steadymd.demo ? "Demo mode · " : "Live · "}
                      patient {steadymd.patientGuid?.slice(0, 12)}…
                    </>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Approved state */
            <div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-sage"
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
                </div>
                <h1 className="text-3xl font-bold tracking-tight">
                  You&apos;ve been approved
                </h1>
                <p className="text-gray-500 mt-3">
                  Your provider has created a personalized treatment plan.
                </p>
              </div>

              <div className="mt-8 bg-white rounded-2xl border border-gray-200/60 p-6">
                <h2 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Treatment Plan
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Medication</span>
                    <span className="text-sm font-semibold">{medName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Starting Dose</span>
                    <span className="text-sm font-semibold">
                      {medication?.dosage}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Delivery</span>
                    <span className="text-sm font-semibold">
                      {medication?.form === "injection"
                        ? "Weekly subcutaneous injection"
                        : "Daily oral tablet"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Provider</span>
                    <span className="text-sm font-semibold">
                      Dr. Sarah Chen, MD
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-cool-gray rounded-xl">
                  <h3 className="text-sm font-semibold mb-2">
                    Provider Notes
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Based on your health profile, I&apos;m starting you on{" "}
                    {medName} at the lowest dose. We&apos;ll titrate up
                    gradually over the first 2-3 months to minimize side effects.
                    Please stay hydrated, eat smaller meals, and report any
                    persistent nausea. Your Future coach will help you build
                    complementary habits.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-2xl border border-gray-200/60 p-6">
                <h2 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
                  What Happens Next
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Prescription sent to pharmacy
                      </p>
                      <p className="text-xs text-gray-500">
                        Your Rx has been electronically sent. You&apos;ll
                        receive a confirmation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Medication compounded & shipped
                      </p>
                      <p className="text-xs text-gray-500">
                        Typically 2-3 business days for compounding, then
                        overnight shipping.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Start your medication + coaching
                      </p>
                      <p className="text-xs text-gray-500">
                        Your Future coach will reach out to build your fitness &
                        nutrition plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => router.push("/dashboard")}
                className="w-full mt-6 bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity"
              >
                Go to My Dashboard
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
