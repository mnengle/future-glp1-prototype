// Base URL for SteadyMD Partner API. The public docs reference
// api.steadymd.com but that doesn't resolve. partner-api.steadymd.com
// is the host SteadyMD actually routes requests through.
const STEADYMD_API_BASE =
  process.env.STEADYMD_API_BASE ?? "https://partner-api.steadymd.com";
const STEADYMD_API_KEY = process.env.STEADYMD_API_KEY ?? "";

async function steadymdFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${STEADYMD_API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Token ${STEADYMD_API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`SteadyMD API error ${res.status}: ${body}`);
  }

  return res.json();
}

// --- EMR: Patients ---

export async function createPatient(data: {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  phone: string;
}) {
  return steadymdFetch("/api/v2/emr/patients/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// --- EMR: Episodes of Care ---

export async function createEpisode(patientGuid: string) {
  return steadymdFetch("/api/v2/emr/episodes/", {
    method: "POST",
    body: JSON.stringify({ patient: patientGuid }),
  });
}

export async function submitIntake(
  episodeGuid: string,
  questionnaire: Record<string, unknown>
) {
  return steadymdFetch(`/api/v2/emr/episodes/${episodeGuid}/intake/`, {
    method: "POST",
    body: JSON.stringify({ questionnaire }),
  });
}

export async function setPreferredPharmacy(
  episodeGuid: string,
  ncpdpId: string
) {
  return steadymdFetch(`/api/v2/emr/episodes/${episodeGuid}/pharmacy/`, {
    method: "PUT",
    body: JSON.stringify({ ncpdp_id: ncpdpId }),
  });
}

export async function getEpisode(episodeGuid: string) {
  return steadymdFetch(`/api/v2/emr/episodes/${episodeGuid}/`);
}

// --- Consults ---

export async function createConsult(data: {
  patient: string;
  episode: string;
  state: string;
  reason_for_visit: string;
}) {
  return steadymdFetch("/api/v2/consults/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getConsult(consultGuid: string) {
  return steadymdFetch(`/api/v2/consults/${consultGuid}/`);
}

// --- Pharmacy Search ---

export async function searchPharmacies(query: string, state: string) {
  const params = new URLSearchParams({ query, state });
  return steadymdFetch(`/api/v2/emr/pharmacies/?${params}`);
}
