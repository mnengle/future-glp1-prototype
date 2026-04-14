"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

const FAQ_SECTIONS = [
  {
    title: "Getting Started",
    items: [
      {
        q: "Who is this program for?",
        a: "Adults with a BMI of 27 or higher, or 30 or higher without comorbidities, who want to lose weight with medical supervision. A licensed physician reviews every assessment to confirm eligibility.",
      },
      {
        q: "How long does the assessment take?",
        a: "Around 5 minutes. You answer questions about your health history, current weight, goals, and any medications. You can save your progress and come back if needed.",
      },
      {
        q: "What states do you operate in?",
        a: "We operate in most US states where GLP-1 telehealth is permitted. A licensed physician in your state reviews your assessment.",
      },
    ],
  },
  {
    title: "Medication & Treatment",
    items: [
      {
        q: "Which GLP-1 medications do you prescribe?",
        a: "Semaglutide (same active ingredient as Ozempic and Wegovy) and tirzepatide (same active ingredient as Mounjaro and Zepbound). Your provider determines which is appropriate based on your assessment.",
      },
      {
        q: "Is this the same as Ozempic or Wegovy?",
        a: "We offer both brand-name FDA-approved options (when clinically appropriate) and compounded alternatives with the same active ingredients. Your provider explains the differences and helps you choose.",
      },
      {
        q: "What side effects should I expect?",
        a: "The most common side effects are nausea, constipation, and reduced appetite. Your provider starts you at the lowest dose and titrates up gradually to minimize side effects. You have 24/7 access to messaging with the care team.",
      },
      {
        q: "How long should I stay on the medication?",
        a: "Treatment duration is individualized. Many patients stay on medication for 12 to 18 months, then transition off gradually. Pairing medication with coaching and resistance training dramatically improves long-term outcomes after stopping.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    items: [
      {
        q: "How much does it cost?",
        a: "Compounded semaglutide starts at $179 for the first month, then $299 per month ongoing. Tirzepatide starts at $279 first month, then $399 per month. Bundle with Future coaching for a flat $499 per month.",
      },
      {
        q: "Is there a membership fee?",
        a: "No. The price you see is the total monthly cost. Medication, provider visits, and shipping are all included.",
      },
      {
        q: "Do you accept insurance?",
        a: "GLP-1 medications for weight loss are rarely covered by insurance. Our pricing reflects direct cash pay. We provide receipts for HSA/FSA reimbursement.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. Cancel from your dashboard at least 72 hours before your next billing cycle. No contracts, no cancellation fees.",
      },
    ],
  },
  {
    title: "Coaching & Muscle Preservation",
    items: [
      {
        q: "Why add coaching to medication?",
        a: "Clinical trials show 25 to 40% of weight lost on GLP-1s is lean body mass, not fat. Resistance training combined with adequate protein intake dramatically reduces muscle loss. Coaching is how you make that happen consistently.",
      },
      {
        q: "What does the coaching include?",
        a: "A dedicated Future coach builds a personalized resistance training program, dials in your protein targets, and adjusts weekly based on how you feel on the medication. You can message your coach anytime.",
      },
      {
        q: "Is coaching required?",
        a: "No. The medication program works independently. But we strongly recommend combining them for the best body composition outcomes.",
      },
    ],
  },
];

export default function FaqPage() {
  const [openItem, setOpenItem] = useState<string | null>("0-0");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SECTIONS.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Nav />
      <main id="main-content" className="flex-1 bg-warm-gray">
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Frequently asked questions
            </h1>
            <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
              Everything you need to know about medical weight loss with Future.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 md:px-[60px] py-16 md:py-20">
          {FAQ_SECTIONS.map((section, sectionIdx) => (
            <div key={section.title} className="mb-12">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, i) => {
                  const id = `${sectionIdx}-${i}`;
                  const isOpen = openItem === id;
                  const panelId = `faq-panel-${id}`;
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenItem(isOpen ? null : id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="font-semibold pr-4">{item.q}</span>
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
                        <div
                          id={panelId}
                          className="px-5 pb-5 text-sm text-gray-600 leading-relaxed"
                        >
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 text-center mt-16">
            <h3 className="text-xl font-bold">Still have questions?</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Our care team is available 24/7 once you&apos;re a member.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-black text-white text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
