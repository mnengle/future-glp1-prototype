"use client";

import { create } from "zustand";
import type { AssessmentData, MedicationSelection, PharmacySelection } from "./types";

interface AssessmentStore {
  step: number;
  data: Partial<AssessmentData>;
  medication: MedicationSelection | null;
  pharmacy: PharmacySelection | null;
  setStep: (step: number) => void;
  updateData: (partial: Partial<AssessmentData>) => void;
  setMedication: (med: MedicationSelection) => void;
  setPharmacy: (pharmacy: PharmacySelection) => void;
  reset: () => void;
}

export const useAssessmentStore = create<AssessmentStore>((set) => ({
  step: 0,
  data: {},
  medication: null,
  pharmacy: null,
  setStep: (step) => set({ step }),
  updateData: (partial) =>
    set((state) => ({ data: { ...state.data, ...partial } })),
  setMedication: (medication) => set({ medication }),
  setPharmacy: (pharmacy) => set({ pharmacy }),
  reset: () => set({ step: 0, data: {}, medication: null, pharmacy: null }),
}));
