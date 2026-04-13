"use client";

import { useState } from "react";
import { useAssessmentStore } from "@/lib/assessment-store";
import { PREVIOUS_ATTEMPTS, PREVIOUS_MEDICATIONS } from "@/lib/types";
import type { WeightLossHistory } from "@/lib/types";

export function StepWeightHistory({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { data, updateData } = useAssessmentStore();
  const [history, setHistory] = useState<WeightLossHistory>(
    data.weightLossHistory ?? {
      previousAttempts: [],
      previousMedications: [],
    }
  );

  const isValid = history.previousAttempts.length > 0;

  function toggleAttempt(attempt: string) {
    if (attempt === "None") {
      setHistory({ ...history, previousAttempts: ["None"] });
      return;
    }
    const filtered = history.previousAttempts.filter((a) => a !== "None");
    if (filtered.includes(attempt)) {
      setHistory({
        ...history,
        previousAttempts: filtered.filter((a) => a !== attempt),
      });
    } else {
      setHistory({ ...history, previousAttempts: [...filtered, attempt] });
    }
  }

  function toggleMedication(med: string) {
    if (med === "None") {
      setHistory({ ...history, previousMedications: ["None"] });
      return;
    }
    const filtered = history.previousMedications.filter((m) => m !== "None");
    if (filtered.includes(med)) {
      setHistory({
        ...history,
        previousMedications: filtered.filter((m) => m !== med),
      });
    } else {
      setHistory({ ...history, previousMedications: [...filtered, med] });
    }
  }

  function handleSubmit() {
    updateData({ weightLossHistory: history });
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Your weight loss journey so far
        </h2>
        <p className="text-gray-500 mt-2">
          Understanding what you&apos;ve tried helps your provider create a
          better plan.
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">
          What have you tried before? (select all that apply)
        </p>
        <div className="grid grid-cols-1 gap-2">
          {PREVIOUS_ATTEMPTS.map((attempt) => {
            const selected = history.previousAttempts.includes(attempt);
            return (
              <button
                key={attempt}
                onClick={() => toggleAttempt(attempt)}
                className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  selected
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {attempt}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">
          Any previous weight loss medications?
        </p>
        <div className="grid grid-cols-1 gap-2">
          {PREVIOUS_MEDICATIONS.map((med) => {
            const selected = history.previousMedications.includes(med);
            return (
              <button
                key={med}
                onClick={() => toggleMedication(med)}
                className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  selected
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {med}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="px-6 py-3.5 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="flex-1 bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
