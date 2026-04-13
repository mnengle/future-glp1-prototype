export interface PatientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  state: string;
}

export interface Biometrics {
  heightFeet: number;
  heightInches: number;
  weight: number;
}

export interface MedicalHistory {
  conditions: string[];
  allergies: string;
}

export interface Medications {
  currentMedications: string;
}

export interface Contraindications {
  thyroidCancer: boolean;
  men2: boolean;
  pancreatitis: boolean;
  pregnant: boolean;
}

export interface WeightLossHistory {
  previousAttempts: string[];
  previousMedications: string[];
}

export interface Goals {
  targetLoss: string;
  timeline: string;
  motivation: string;
}

export interface IdVerification {
  idUploaded: boolean;
  selfieUploaded: boolean;
}

export interface AssessmentData {
  patientInfo: PatientInfo;
  biometrics: Biometrics;
  medicalHistory: MedicalHistory;
  medications: Medications;
  contraindications: Contraindications;
  weightLossHistory: WeightLossHistory;
  goals: Goals;
  idVerification: IdVerification;
}

export interface MedicationSelection {
  type: "semaglutide" | "tirzepatide";
  form: "injection" | "oral";
  dosage: string;
}

export interface PharmacySelection {
  ncpdpId: string;
  name: string;
  address: string;
  phone: string;
  isPartner: boolean;
}

export interface Order {
  id: string;
  patientId: string;
  assessmentId: string;
  medication: MedicationSelection;
  pharmacy: PharmacySelection;
  status:
    | "pending"
    | "paid"
    | "reviewing"
    | "approved"
    | "prescribed"
    | "compounding"
    | "shipped"
    | "delivered";
  amountCents: number;
  stripePaymentIntentId?: string;
  steadymdPatientGuid?: string;
  steadymdEpisodeGuid?: string;
  steadymdConsultGuid?: string;
  trackingNumber?: string;
  carrier?: string;
  estimatedDelivery?: string;
  createdAt: string;
}

export const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
] as const;

export const CONDITIONS = [
  "Type 2 Diabetes",
  "High Blood Pressure",
  "High Cholesterol",
  "Sleep Apnea",
  "PCOS",
  "Fatty Liver Disease",
  "Heart Disease",
  "Kidney Disease",
  "None of the above",
] as const;

export const PREVIOUS_ATTEMPTS = [
  "Diet changes",
  "Exercise programs",
  "Weight Watchers / Noom",
  "Personal trainer",
  "Bariatric surgery consultation",
  "Prescription medication",
  "Over-the-counter supplements",
  "None",
] as const;

export const PREVIOUS_MEDICATIONS = [
  "Phentermine",
  "Contrave",
  "Saxenda",
  "Qsymia",
  "Semaglutide (Ozempic/Wegovy)",
  "Tirzepatide (Mounjaro/Zepbound)",
  "None",
] as const;
