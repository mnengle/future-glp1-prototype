"use client";

import { create } from "zustand";
import type { AssessmentData, MedicationSelection, PharmacySelection } from "./types";

interface SteadyMDIds {
  patientGuid?: string;
  episodeGuid?: string;
  consultGuid?: string;
  demo?: boolean;
}

interface AssessmentStore {
  step: number;
  data: Partial<AssessmentData>;
  medication: MedicationSelection | null;
  pharmacy: PharmacySelection | null;
  steadymd: SteadyMDIds;
  setStep: (step: number) => void;
  updateData: (partial: Partial<AssessmentData>) => void;
  setMedication: (med: MedicationSelection) => void;
  setPharmacy: (pharmacy: PharmacySelection) => void;
  setSteadyMDIds: (ids: SteadyMDIds) => void;
  reset: () => void;
}

export const useAssessmentStore = create<AssessmentStore>((set) => ({
  step: 0,
  data: {},
  medication: null,
  pharmacy: null,
  steadymd: {},
  setStep: (step) => set({ step }),
  updateData: (partial) =>
    set((state) => ({ data: { ...state.data, ...partial } })),
  setMedication: (medication) => set({ medication }),
  setPharmacy: (pharmacy) => set({ pharmacy }),
  setSteadyMDIds: (steadymd) => set({ steadymd }),
  reset: () =>
    set({
      step: 0,
      data: {},
      medication: null,
      pharmacy: null,
      steadymd: {},
    }),
}));
