"use client";

import { useState } from "react";
import { useAssessmentStore } from "@/lib/assessment-store";

export function StepIdVerification({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const { updateData } = useAssessmentStore();
  const [idUploaded, setIdUploaded] = useState(false);
  const [selfieUploaded, setSelfieUploaded] = useState(false);

  const isValid = idUploaded && selfieUploaded;

  function handleSubmit() {
    updateData({ idVerification: { idUploaded, selfieUploaded } });
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Verify your identity
        </h2>
        <p className="text-gray-500 mt-2">
          Required by law for telehealth prescriptions. Your documents are
          encrypted and never shared.
        </p>
      </div>

      <div className="space-y-4">
        {/* ID Upload */}
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
            idUploaded
              ? "border-sage bg-sage/5"
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => setIdUploaded(true)}
        >
          {idUploaded ? (
            <div>
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-sage"
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
              <p className="text-sm font-medium text-sage">
                Government ID uploaded
              </p>
            </div>
          ) : (
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">
                Upload Government-Issued ID
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Driver&apos;s license, passport, or state ID
              </p>
            </div>
          )}
        </div>

        {/* Selfie Upload */}
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
            selfieUploaded
              ? "border-sage bg-sage/5"
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => setSelfieUploaded(true)}
        >
          {selfieUploaded ? (
            <div>
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-sage"
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
              <p className="text-sm font-medium text-sage">Selfie uploaded</p>
            </div>
          ) : (
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">
                Take a Selfie
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Clear photo of your face for identity match
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center">
        Your photos are encrypted with 256-bit AES and stored in a
        HIPAA-compliant environment. They are only used for identity
        verification.
      </p>

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
          Complete Assessment
        </button>
      </div>
    </div>
  );
}
