"use client";

import { useState } from "react";
import { useAssessmentStore } from "@/lib/assessment-store";
import type { Goals } from "@/lib/types";

const TARGET_OPTIONS = [
  "10 – 20 lbs",
  "21 – 40 lbs",
  "41 – 60 lbs",
  "61 – 80 lbs",
  "80+ lbs",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "3 – 6 months",
  "6 – 12 months",
  "No rush — sustainable pace",
];

const MOTIVATION_OPTIONS = [
  "Improve overall health",
  "Feel more confident",
  "Reduce disease risk",
  "Keep up with my kids/family",
  "Athletic performance",
  "Doctor recommended it",
];

export function StepGoals({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { data, updateData } = useAssessmentStore();
  const [goals, setGoals] = useState<Goals>(
    data.goals ?? { targetLoss: "", timeline: "", motivation: "" }
  );

  const isValid = goals.targetLoss && goals.timeline && goals.motivation;

  function handleSubmit() {
    updateData({ goals });
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          What are your goals?
        </h2>
        <p className="text-gray-500 mt-2">
          This helps us match you with the right treatment plan.
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">
          How much weight would you like to lose?
        </p>
        <div className="grid grid-cols-1 gap-2">
          {TARGET_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setGoals({ ...goals, targetLoss: opt })}
              className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                goals.targetLoss === opt
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">
          What&apos;s your ideal timeline?
        </p>
        <div className="grid grid-cols-1 gap-2">
          {TIMELINE_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setGoals({ ...goals, timeline: opt })}
              className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                goals.timeline === opt
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">
          What&apos;s your primary motivation?
        </p>
        <div className="grid grid-cols-1 gap-2">
          {MOTIVATION_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setGoals({ ...goals, motivation: opt })}
              className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                goals.motivation === opt
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {opt}
            </button>
          ))}
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
