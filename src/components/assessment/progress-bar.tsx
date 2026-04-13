"use client";

const STEP_LABELS = [
  "Personal Info",
  "Biometrics",
  "Medical History",
  "Medications",
  "Screening",
  "History",
  "Goals",
  "Verification",
];

export function ProgressBar({ currentStep }: { currentStep: number }) {
  const progress = ((currentStep + 1) / STEP_LABELS.length) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-500">
          Step {currentStep + 1} of {STEP_LABELS.length}
        </span>
        <span className="text-xs font-medium text-gray-500">
          {STEP_LABELS[currentStep]}
        </span>
      </div>
      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
