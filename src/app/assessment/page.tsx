"use client";

import { useRouter } from "next/navigation";
import { Nav } from "@/components/nav";
import { ProgressBar } from "@/components/assessment/progress-bar";
import { StepPersonalInfo } from "@/components/assessment/step-personal-info";
import { StepBiometrics } from "@/components/assessment/step-biometrics";
import { StepMedicalHistory } from "@/components/assessment/step-medical-history";
import { StepMedications } from "@/components/assessment/step-medications";
import { StepContraindications } from "@/components/assessment/step-contraindications";
import { StepWeightHistory } from "@/components/assessment/step-weight-history";
import { StepGoals } from "@/components/assessment/step-goals";
import { StepIdVerification } from "@/components/assessment/step-id-verification";
import { useAssessmentStore } from "@/lib/assessment-store";

export default function AssessmentPage() {
  const router = useRouter();
  const { step, setStep } = useAssessmentStore();

  function next() {
    if (step < 7) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/medication");
    }
  }

  function back() {
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <Nav />
      <main className="flex-1 bg-warm-gray">
        <div className="max-w-xl mx-auto px-4 py-8 md:py-14">
          <ProgressBar currentStep={step} />

          <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-sm">
            {step === 0 && <StepPersonalInfo onNext={next} />}
            {step === 1 && <StepBiometrics onNext={next} onBack={back} />}
            {step === 2 && <StepMedicalHistory onNext={next} onBack={back} />}
            {step === 3 && <StepMedications onNext={next} onBack={back} />}
            {step === 4 && (
              <StepContraindications onNext={next} onBack={back} />
            )}
            {step === 5 && <StepWeightHistory onNext={next} onBack={back} />}
            {step === 6 && <StepGoals onNext={next} onBack={back} />}
            {step === 7 && (
              <StepIdVerification onNext={next} onBack={back} />
            )}
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            Your information is protected under HIPAA and encrypted in transit
            and at rest.
          </p>
        </div>
      </main>
    </>
  );
}
