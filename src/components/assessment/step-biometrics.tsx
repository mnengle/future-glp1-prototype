"use client";

import { useState } from "react";
import { useAssessmentStore } from "@/lib/assessment-store";
import type { Biometrics } from "@/lib/types";

function calculateBMI(heightFeet: number, heightInches: number, weight: number) {
  const totalInches = heightFeet * 12 + heightInches;
  if (totalInches === 0 || weight === 0) return 0;
  return (weight / (totalInches * totalInches)) * 703;
}

function getBMICategory(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "text-yellow-600" };
  if (bmi < 25) return { label: "Normal", color: "text-sage" };
  if (bmi < 30) return { label: "Overweight", color: "text-coral" };
  return { label: "Obese", color: "text-hot-pink" };
}

export function StepBiometrics({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { data, updateData } = useAssessmentStore();
  const [bio, setBio] = useState<Biometrics>(
    data.biometrics ?? { heightFeet: 5, heightInches: 6, weight: 0 }
  );

  const bmi = calculateBMI(bio.heightFeet, bio.heightInches, bio.weight);
  const bmiCategory = getBMICategory(bmi);
  const isValid = bio.weight > 0 && bio.heightFeet > 0;

  function handleSubmit() {
    updateData({ biometrics: bio });
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Your current measurements
        </h2>
        <p className="text-gray-500 mt-2">
          We use this to calculate your BMI and determine eligibility.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Height
        </label>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <select
              value={bio.heightFeet}
              onChange={(e) =>
                setBio({ ...bio, heightFeet: parseInt(e.target.value) })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
            >
              {[4, 5, 6, 7].map((ft) => (
                <option key={ft} value={ft}>
                  {ft} ft
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={bio.heightInches}
              onChange={(e) =>
                setBio({ ...bio, heightInches: parseInt(e.target.value) })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {i} in
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Current Weight (lbs)
        </label>
        <input
          type="number"
          value={bio.weight || ""}
          onChange={(e) => setBio({ ...bio, weight: parseInt(e.target.value) || 0 })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
          placeholder="185"
          min={80}
          max={700}
        />
      </div>

      {bmi > 0 && (
        <div className="bg-cool-gray rounded-xl p-5 border border-gray-200/60">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-gray-500">Your BMI</span>
            <div className="text-right">
              <span className="text-2xl font-bold">{bmi.toFixed(1)}</span>
              <span className={`text-sm font-medium ml-2 ${bmiCategory.color}`}>
                {bmiCategory.label}
              </span>
            </div>
          </div>
          {bmi >= 27 && (
            <p className="text-xs text-sage mt-2 font-medium">
              You may be eligible for GLP-1 medication.
            </p>
          )}
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
          disabled={!isValid}
          className="flex-1 bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
