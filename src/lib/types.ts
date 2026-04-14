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

export const US_STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" }, { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" }, { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
];

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
