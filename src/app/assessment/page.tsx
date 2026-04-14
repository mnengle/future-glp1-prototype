"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
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

function AssessmentInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { step, setStep, data, updateData } = useAssessmentStore();

  // Persist ?goal= from the homepage into the assessment data so it's
  // not lost by the time the user reaches the goals step.
  useEffect(() => {
    const goal = searchParams.get("goal");
    if (!goal || data.goals?.targetLoss) return;
    const MAP: Record<string, string> = {
      "1-20": "10 – 20 lbs",
      "21-50": "21 – 40 lbs",
      "51+": "41 – 60 lbs",
      unsure: "",
    };
    const targetLoss = MAP[goal] ?? "";
    if (targetLoss) {
      updateData({
        goals: {
          targetLoss,
          timeline: data.goals?.timeline ?? "",
          motivation: data.goals?.motivation ?? "",
        },
      });
    }
  }, [searchParams, data.goals, updateData]);

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

  function handleSubmit(e: React.FormEvent) {
    // Step components already handle their own advance on click;
    // this catches the Enter-to-submit case and prevents the default
    // full-page form POST.
    e.preventDefault();
  }

  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1 bg-warm-gray">
        <div className="max-w-xl mx-auto px-4 py-8 md:py-14">
          <ProgressBar currentStep={step} />

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-sm"
            aria-label="Medical weight loss health assessment"
          >
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
          </form>

          <p className="text-xs text-gray-400 text-center mt-6">
            Your information is protected under HIPAA and encrypted in transit
            and at rest.
          </p>
          <p className="text-xs text-gray-400 text-center mt-2">
            By continuing, you agree to our{" "}
            <Link href="/privacy" className="underline hover:text-gray-600">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline hover:text-gray-600">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}

export default function AssessmentPage() {
  return (
    <Suspense fallback={null}>
      <AssessmentInner />
    </Suspense>
  );
}
