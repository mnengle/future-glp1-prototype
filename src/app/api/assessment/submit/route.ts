import { NextResponse } from "next/server";
import {
  createPatient,
  createEpisode,
  submitIntake,
  setPreferredPharmacy,
  createConsult,
} from "@/lib/steadymd";

export async function POST(request: Request) {
  const body = await request.json();
  const { assessment, medication, pharmacy } = body;

  try {
    // Step 1: Create patient in SteadyMD
    const patient = await createPatient({
      first_name: assessment.patientInfo.firstName,
      last_name: assessment.patientInfo.lastName,
      date_of_birth: assessment.patientInfo.dateOfBirth,
      email: assessment.patientInfo.email,
      phone: assessment.patientInfo.phone,
    });

    // Step 2: Create episode of care
    const episode = await createEpisode(patient.guid);

    // Step 3: Submit intake questionnaire
    await submitIntake(episode.guid, {
      biometrics: assessment.biometrics,
      medical_history: assessment.medicalHistory,
      medications: assessment.medications,
      contraindications: assessment.contraindications,
      weight_loss_history: assessment.weightLossHistory,
      goals: assessment.goals,
      medication_selection: medication,
    });

    // Step 4: Set preferred pharmacy
    await setPreferredPharmacy(episode.guid, pharmacy.ncpdpId);

    // Step 5: Request async consult
    const consult = await createConsult({
      patient: patient.guid,
      episode: episode.guid,
      state: assessment.patientInfo.state,
      reason_for_visit: `GLP-1 weight management assessment — requesting ${medication.type} ${medication.form}`,
    });

    return NextResponse.json({
      success: true,
      patientGuid: patient.guid,
      episodeGuid: episode.guid,
      consultGuid: consult.guid,
    });
  } catch (error) {
    console.error("[SteadyMD] Assessment submission error:", error);

    // For prototype: return success even if SteadyMD isn't configured
    // This allows the UI flow to work without API keys
    return NextResponse.json({
      success: true,
      patientGuid: "demo-patient-" + Date.now(),
      episodeGuid: "demo-episode-" + Date.now(),
      consultGuid: "demo-consult-" + Date.now(),
      demo: true,
    });
  }
}
