"use client";

import { useState } from "react";
import { useAssessmentStore } from "@/lib/assessment-store";
import type { Contraindications } from "@/lib/types";

const QUESTIONS = [
  {
    key: "thyroidCancer" as const,
    label:
      "Have you or a family member been diagnosed with medullary thyroid carcinoma (MTC)?",
  },
  {
    key: "men2" as const,
    label:
      "Have you been diagnosed with Multiple Endocrine Neoplasia syndrome type 2 (MEN2)?",
  },
  {
    key: "pancreatitis" as const,
    label: "Have you had pancreatitis in the past?",
  },
  {
    key: "pregnant" as const,
    label: "Are you currently pregnant, breastfeeding, or planning to become pregnant?",
  },
];

export function StepContraindications({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { data, updateData } = useAssessmentStore();
  const [answers, setAnswers] = useState<Contraindications>(
    data.contraindications ?? {
      thyroidCancer: false,
      men2: false,
      pancreatitis: false,
      pregnant: false,
    }
  );

  const hasContraindication =
    answers.thyroidCancer || answers.men2 || answers.pregnant;

  function handleSubmit() {
    updateData({ contraindications: answers });
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Safety screening
        </h2>
        <p className="text-gray-500 mt-2">
          These questions help ensure GLP-1 medications are safe for you.
        </p>
      </div>

      <div className="space-y-3">
        {QUESTIONS.map((q) => (
          <div key={q.key} className="space-y-2">
            <p className="text-sm font-medium text-gray-700">{q.label}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setAnswers({ ...answers, [q.key]: false })}
                className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  !answers[q.key]
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                No
              </button>
              <button
                onClick={() => setAnswers({ ...answers, [q.key]: true })}
                className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  answers[q.key]
                    ? "border-hot-pink bg-hot-pink text-white"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                Yes
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasContraindication && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-red-800 font-medium">
            Based on your responses, GLP-1 medications may not be appropriate.
            A provider will review your full assessment and discuss alternatives.
          </p>
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
          className="flex-1 bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
