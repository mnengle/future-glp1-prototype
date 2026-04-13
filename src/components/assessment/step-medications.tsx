"use client";

import { useState } from "react";
import { useAssessmentStore } from "@/lib/assessment-store";

export function StepMedications({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { data, updateData } = useAssessmentStore();
  const [meds, setMeds] = useState(
    data.medications?.currentMedications ?? ""
  );
  const [hasNone, setHasNone] = useState(false);

  function handleSubmit() {
    updateData({
      medications: {
        currentMedications: hasNone ? "None" : meds,
      },
    });
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Current medications
        </h2>
        <p className="text-gray-500 mt-2">
          List any medications you&apos;re currently taking, including
          supplements.
        </p>
      </div>

      <button
        onClick={() => {
          setHasNone(!hasNone);
          if (!hasNone) setMeds("");
        }}
        className={`w-full text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-all ${
          hasNone
            ? "border-black bg-black text-white"
            : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        I&apos;m not currently taking any medications
      </button>

      {!hasNone && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            List your current medications
          </label>
          <textarea
            value={meds}
            onChange={(e) => setMeds(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors resize-none"
            placeholder="e.g., Metformin 500mg, Lisinopril 10mg, Vitamin D..."
          />
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="px-6 py-3.5 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!hasNone && !meds}
          className="flex-1 bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
