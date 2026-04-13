"use client";

import { useState } from "react";
import { useAssessmentStore } from "@/lib/assessment-store";
import { CONDITIONS } from "@/lib/types";
import type { MedicalHistory } from "@/lib/types";

export function StepMedicalHistory({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { data, updateData } = useAssessmentStore();
  const [history, setHistory] = useState<MedicalHistory>(
    data.medicalHistory ?? { conditions: [], allergies: "" }
  );

  const isValid = history.conditions.length > 0;

  function toggleCondition(condition: string) {
    if (condition === "None of the above") {
      setHistory({ ...history, conditions: ["None of the above"] });
      return;
    }
    const filtered = history.conditions.filter((c) => c !== "None of the above");
    if (filtered.includes(condition)) {
      setHistory({
        ...history,
        conditions: filtered.filter((c) => c !== condition),
      });
    } else {
      setHistory({ ...history, conditions: [...filtered, condition] });
    }
  }

  function handleSubmit() {
    updateData({ medicalHistory: history });
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Medical history
        </h2>
        <p className="text-gray-500 mt-2">
          Select any conditions that apply. This helps your provider make safe
          prescribing decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {CONDITIONS.map((condition) => {
          const selected = history.conditions.includes(condition);
          return (
            <button
              key={condition}
              onClick={() => toggleCondition(condition)}
              className={`text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-all ${
                selected
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {condition}
            </button>
          );
        })}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Allergies (optional)
        </label>
        <input
          type="text"
          value={history.allergies}
          onChange={(e) => setHistory({ ...history, allergies: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
          placeholder="List any known allergies"
        />
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
