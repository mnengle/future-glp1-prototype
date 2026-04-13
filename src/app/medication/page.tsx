"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/nav";
import { useAssessmentStore } from "@/lib/assessment-store";
import type { MedicationSelection } from "@/lib/types";

const MEDICATIONS = [
  {
    type: "semaglutide" as const,
    name: "Semaglutide",
    brand: "Same active ingredient as Ozempic & Wegovy",
    efficacy: "Up to 15% body weight loss in clinical trials",
    mechanism: "GLP-1 receptor agonist. Reduces appetite and slows digestion.",
    injectionPrice: { first: 179, monthly: 299 },
    oralPrice: { first: 249, monthly: 369 },
  },
  {
    type: "tirzepatide" as const,
    name: "Tirzepatide",
    brand: "Same active ingredient as Mounjaro & Zepbound",
    efficacy: "Up to 22% body weight loss in clinical trials",
    mechanism:
      "Dual GIP/GLP-1 receptor agonist. Targets two pathways for greater effect.",
    injectionPrice: { first: 279, monthly: 399 },
    oralPrice: { first: 279, monthly: 399 },
  },
];

const DOSAGES: Record<string, string[]> = {
  semaglutide: ["0.25mg (starting)", "0.5mg", "1.0mg", "1.7mg", "2.4mg"],
  tirzepatide: ["2.5mg (starting)", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
};

export default function MedicationPage() {
  const router = useRouter();
  const { setMedication } = useAssessmentStore();
  const [selected, setSelected] = useState<{
    type: "semaglutide" | "tirzepatide";
    form: "injection" | "oral";
  } | null>(null);

  const activeMed = MEDICATIONS.find((m) => m.type === selected?.type);
  const price = activeMed
    ? selected?.form === "oral"
      ? activeMed.oralPrice
      : activeMed.injectionPrice
    : null;

  function handleContinue() {
    if (!selected) return;
    const dosages = DOSAGES[selected.type];
    const sel: MedicationSelection = {
      type: selected.type,
      form: selected.form,
      dosage: dosages[0],
    };
    setMedication(sel);
    router.push("/pharmacy");
  }

  return (
    <>
      <Nav />
      <main className="flex-1 bg-warm-gray">
        <div className="max-w-3xl mx-auto px-4 py-8 md:py-14">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Choose your medication
            </h1>
            <p className="text-gray-500 mt-3 text-lg">
              Your provider will confirm the right medication and dosage for
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MEDICATIONS.map((med) => {
              const isSelected = selected?.type === med.type;
              return (
                <div
                  key={med.type}
                  className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                    isSelected
                      ? "border-black shadow-md"
                      : "border-gray-200/60 hover:border-gray-300"
                  }`}
                  onClick={() =>
                    setSelected({
                      type: med.type,
                      form: selected?.form ?? "injection",
                    })
                  }
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold">{med.name}</h3>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? "border-black" : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-3 h-3 bg-black rounded-full" />
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{med.brand}</p>
                  <p className="text-sm text-sage font-semibold mt-4">
                    {med.efficacy}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">{med.mechanism}</p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Injection</span>
                      <span className="font-semibold">
                        ${med.injectionPrice.first} first mo
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-500">Oral tablet</span>
                      <span className="font-semibold">
                        ${med.oralPrice.first} first mo
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {selected && (
            <div className="mt-6 bg-white rounded-2xl border border-gray-200/60 p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Delivery method
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() =>
                    setSelected({ ...selected, form: "injection" })
                  }
                  className={`px-4 py-3.5 rounded-lg border text-sm font-medium transition-all ${
                    selected.form === "injection"
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="block">Injection</span>
                  <span className="block text-xs mt-0.5 opacity-70">
                    Weekly subcutaneous
                  </span>
                </button>
                <button
                  onClick={() => setSelected({ ...selected, form: "oral" })}
                  className={`px-4 py-3.5 rounded-lg border text-sm font-medium transition-all ${
                    selected.form === "oral"
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="block">Oral Tablet</span>
                  <span className="block text-xs mt-0.5 opacity-70">
                    Daily dissolving tab
                  </span>
                </button>
              </div>

              {price && (
                <div className="mt-4 p-4 bg-cool-gray rounded-xl">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">First month</span>
                    <span className="text-2xl font-bold">${price.first}</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-sm text-gray-500">
                      Then monthly
                    </span>
                    <span className="text-base font-semibold text-gray-600">
                      ${price.monthly}/mo
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Includes medication, provider visits, and shipping.
                    HSA/FSA eligible.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => router.back()}
              className="px-6 py-3.5 rounded-lg border border-gray-200 bg-white text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              disabled={!selected}
              className="flex-1 bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Continue to Pharmacy Selection
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
