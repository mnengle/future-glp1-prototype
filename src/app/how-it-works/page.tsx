"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const TIMELINE_STEPS = [
  {
    day: "Day 1",
    title: "Complete your 5-minute assessment",
    body: "Share your health history, current weight, goals, and any medications. Our intake asks only what a licensed physician actually needs to prescribe safely.",
    image: "/timeline/step-1-assessment.jpg",
    accent: "coral",
  },
  {
    day: "Day 1 to 2",
    title: "A licensed physician reviews your file",
    body: "Your provider, licensed in your state through SteadyMD, reviews your assessment asynchronously. No video call required in most cases. If they need more info, they'll message you directly.",
    image: "/timeline/step-2-review.jpg",
    accent: "purple",
  },
  {
    day: "Day 2 to 5",
    title: "Your prescription is written and shipped",
    body: "Once approved, your medication is e-prescribed to your selected pharmacy. Partner pharmacy ships direct to your door within 2 to 5 business days. Discreet packaging, no signature required.",
    image: "/timeline/step-3-shipped.jpg",
    accent: "sage",
  },
  {
    day: "Week 1+",
    title: "Start your coaching program",
    body: "Claim your first month free with Future. Your coach designs a resistance training program and dials in protein targets to preserve muscle while you lose fat. Chat with them anytime, anywhere.",
    image: "/timeline/step-4-training.jpg",
    accent: "soft-blue",
  },
];

const FAQS = [
  {
    q: "Who prescribes the medication?",
    a: "All prescriptions are written by licensed physicians through our telemedicine partner, SteadyMD. They are licensed in your state and verify your eligibility before writing any prescription.",
  },
  {
    q: "How is this different from Hims or Ro?",
    a: "Most telehealth GLP-1 providers only sell medication. We pair medication with a referral to Future coaching. Clinical research shows up to 40% of weight lost on GLP-1s is lean mass unless you resistance train. Our job is to make sure your results last.",
  },
  {
    q: "Is the coaching required?",
    a: "No. The GLP-1 program works independently. But we strongly recommend combining it with Future coaching. Emerging research suggests that pairing resistance training with GLP-1 therapy can dramatically reduce the proportion of weight lost as muscle.",
  },
  {
    q: "What happens if the provider doesn't approve me?",
    a: "You only pay if approved. If your provider determines GLP-1 medication isn't the right fit, you won't be charged. They may also recommend alternative treatments or request a video consultation for more information.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Your subscription auto-renews monthly but you can cancel at any time from your dashboard. We'll ship your current cycle, and nothing after that.",
  },
  {
    q: "What states do you operate in?",
    a: "We operate in all 50 states where GLP-1 telehealth is legal. Your provider will be licensed specifically in your state.",
  },
];

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
                How It Works
              </p>
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
                From signup to
                <br />
                <span className="future-gradient-text">
                  medication in hand
                </span>
                <br />
                in under a week.
              </h1>
              <p className="text-lg text-white/70 mt-6 max-w-lg">
                Here&apos;s exactly what happens after you tap &quot;Start
                Assessment.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Interactive timeline */}
        <section className="bg-warm-gray">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            {/* Tab nav */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {TIMELINE_STEPS.map((step, i) => {
                const isActive = i === activeStep;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white text-gray-500 hover:text-black border border-gray-200"
                    }`}
                  >
                    <span className="opacity-60 mr-2">0{i + 1}</span>
                    {step.day}
                  </button>
                );
              })}
            </div>

            {/* Active step display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200">
                  {TIMELINE_STEPS.map((step, i) => (
                    <img
                      key={i}
                      src={step.image}
                      alt={step.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        i === activeStep ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {TIMELINE_STEPS[activeStep].day}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Step {activeStep + 1} of {TIMELINE_STEPS.length}
                </p>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mt-3 leading-tight">
                  {TIMELINE_STEPS[activeStep].title}
                </h2>
                <p className="text-gray-500 mt-4 text-base leading-relaxed">
                  {TIMELINE_STEPS[activeStep].body}
                </p>

                <div className="flex items-center gap-3 mt-8">
                  <button
                    onClick={() =>
                      setActiveStep(Math.max(0, activeStep - 1))
                    }
                    disabled={activeStep === 0}
                    className="w-11 h-11 rounded-full border border-gray-300 hover:border-black disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setActiveStep(
                        Math.min(TIMELINE_STEPS.length - 1, activeStep + 1)
                      )
                    }
                    disabled={activeStep === TIMELINE_STEPS.length - 1}
                    className="w-11 h-11 rounded-full bg-black text-white hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-opacity"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-warm-gray">
          <div className="max-w-3xl mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-center">
              Frequently asked questions
            </h2>

            <div className="mt-12 space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-semibold pr-4">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-14">
              <Link
                href="/assessment"
                className="inline-block bg-black text-white text-base font-semibold px-10 py-3.5 rounded-lg hover:opacity-80 transition-opacity"
              >
                Start Your Assessment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
