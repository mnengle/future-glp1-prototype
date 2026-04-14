"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

type Medication = "semaglutide" | "tirzepatide";
type Form = "injection" | "oral";
type Tier = "medication" | "bundle";

const PRICING = {
  semaglutide: {
    injection: { first: 179, monthly: 299 },
    oral: { first: 249, monthly: 369 },
  },
  tirzepatide: {
    injection: { first: 279, monthly: 399 },
    oral: { first: 279, monthly: 399 },
  },
};

// With Future coaching bundled: flat $499/mo regardless of medication.
// Coaching alone is normally $199/mo, so bundle saves the patient money
// on the tirzepatide path and positions Future as premium on sema.
const BUNDLE_PRICE = { first: 299, monthly: 499 };

const INCLUDES = [
  "Medication (3-month supply available)",
  "Licensed provider consultation",
  "Ongoing clinical support",
  "Prescription refills",
  "Direct-to-door shipping",
  "Dosage adjustments as needed",
  "24/7 patient portal access",
  "HSA/FSA eligible",
];

// Competitor pricing verified via public pricing pages and third-party
// review aggregators, April 2026. See /docs/pricing-research.md for sources.
const COMPETITOR_COMPARISON = [
  {
    feature: "Semaglutide ongoing price",
    future: "$299/mo",
    hims: "$175/mo",
    ro: "$199 to $299",
    henry: "$197 to $397",
    mochi: "$178/mo",
  },
  {
    feature: "Tirzepatide ongoing price",
    future: "$399/mo",
    hims: "$299/mo",
    ro: "$399 to $449",
    henry: "$199+/mo",
    mochi: "$278/mo",
  },
  {
    feature: "Required membership fee",
    future: "None",
    hims: "None",
    ro: "Bundled",
    henry: "None",
    mochi: "$79/mo",
  },
  {
    feature: "Month-to-month (no prepay)",
    future: true,
    hims: false,
    ro: false,
    henry: true,
    mochi: true,
  },
  {
    feature: "Coaching referral included",
    future: "1st month free",
    hims: false,
    ro: false,
    henry: false,
    mochi: false,
  },
  {
    feature: "Resistance training program",
    future: true,
    hims: false,
    ro: false,
    henry: false,
    mochi: false,
  },
];

const FAQS = [
  {
    q: "Are there any hidden fees?",
    a: "No. The price you see is the total monthly cost. Medication, provider visits, and shipping are all included. No membership fees, no activation costs.",
  },
  {
    q: "Why is the first month cheaper?",
    a: "You start at a lower dose for the first month while your body adjusts to the medication. The first-month price reflects this lower dose. Your monthly price after that stays consistent as you reach your therapeutic dose.",
  },
  {
    q: "Is HSA/FSA accepted?",
    a: "Yes. GLP-1 medications prescribed for medical weight loss are generally HSA/FSA eligible. We provide receipts with your diagnosis code for reimbursement.",
  },
  {
    q: "What if I don't get approved?",
    a: "You're only charged if your provider approves your treatment. If approval doesn't happen, you pay nothing.",
  },
  {
    q: "Can I pause or cancel?",
    a: "Yes, anytime. Cancel from your dashboard at least 72 hours before your next billing cycle and you won't be charged again.",
  },
  {
    q: "Does insurance cover this?",
    a: "GLP-1 medications for weight loss are rarely covered by insurance. Our pricing reflects direct cash pay. No insurance hassle, no prior authorizations.",
  },
];

export default function PricingPage() {
  const [medication, setMedication] = useState<Medication>("semaglutide");
  const [form, setForm] = useState<Form>("injection");
  const [tier, setTier] = useState<Tier>("medication");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const medPrice = PRICING[medication][form];
  const price = tier === "bundle" ? BUNDLE_PRICE : medPrice;

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-black text-white">
          <div className="max-w-[1600px] mx-auto px-4 md:px-[60px] py-20 md:py-28 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Transparent Pricing
            </p>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl mx-auto">
              One monthly price.
              <br />
              <span className="future-gradient-text">
                Nothing hidden.
              </span>
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-xl mx-auto">
              Medication, provider visits, and shipping in one monthly bill.
              No membership fees, no prepay requirements, no surprise
              dose-based price hikes.
            </p>
          </div>
        </section>

        {/* Interactive pricing calculator */}
        <section className="bg-warm-gray">
          <div className="max-w-3xl mx-auto px-4 md:px-[60px] py-16 md:py-20">
            <div className="bg-white rounded-3xl border border-gray-200/60 p-6 md:p-10 shadow-sm">
              {/* Medication toggle */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Medication
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setMedication("semaglutide")}
                    className={`p-5 rounded-xl border-2 text-left transition-all ${
                      medication === "semaglutide"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <p className="font-bold">Semaglutide</p>
                    <p
                      className={`text-xs mt-1 ${
                        medication === "semaglutide"
                          ? "text-white/60"
                          : "text-gray-500"
                      }`}
                    >
                      Ozempic / Wegovy
                    </p>
                    <p
                      className={`text-xs mt-2 font-semibold ${
                        medication === "semaglutide"
                          ? "text-sage"
                          : "text-sage"
                      }`}
                    >
                      Up to 15% weight loss
                    </p>
                  </button>
                  <button
                    onClick={() => setMedication("tirzepatide")}
                    className={`p-5 rounded-xl border-2 text-left transition-all ${
                      medication === "tirzepatide"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <p className="font-bold">Tirzepatide</p>
                    <p
                      className={`text-xs mt-1 ${
                        medication === "tirzepatide"
                          ? "text-white/60"
                          : "text-gray-500"
                      }`}
                    >
                      Mounjaro / Zepbound
                    </p>
                    <p
                      className={`text-xs mt-2 font-semibold ${
                        medication === "tirzepatide"
                          ? "text-sage"
                          : "text-sage"
                      }`}
                    >
                      Up to 22% weight loss
                    </p>
                  </button>
                </div>
              </div>

              {/* Form toggle */}
              <div className="mt-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Delivery
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setForm("injection")}
                    disabled={tier === "bundle"}
                    className={`p-4 rounded-xl border-2 text-left transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
                      form === "injection"
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-semibold text-sm">Injection</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Weekly subcutaneous
                    </p>
                  </button>
                  <button
                    onClick={() => setForm("oral")}
                    disabled={tier === "bundle"}
                    className={`p-4 rounded-xl border-2 text-left transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
                      form === "oral"
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-semibold text-sm">Oral Tablet</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Daily dissolving tab
                    </p>
                  </button>
                </div>
              </div>

              {/* Plan toggle */}
              <div className="mt-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Plan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTier("medication")}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      tier === "medication"
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-semibold text-sm">Medication only</p>
                    <p className="text-xs text-gray-500 mt-1">
                      GLP-1 + provider care
                    </p>
                  </button>
                  <button
                    onClick={() => setTier("bundle")}
                    className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                      tier === "bundle"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="absolute -top-2 right-3 text-[9px] font-bold uppercase tracking-wider bg-sage text-white px-2 py-0.5 rounded-full">
                      Best Outcomes
                    </span>
                    <p className="font-semibold text-sm">With Coaching</p>
                    <p
                      className={`text-xs mt-1 ${
                        tier === "bundle" ? "text-white/60" : "text-gray-500"
                      }`}
                    >
                      GLP-1 + Future coach
                    </p>
                  </button>
                </div>
              </div>

              {/* Price display */}
              <div className="mt-8 bg-warm-gray rounded-2xl p-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    First month
                  </span>
                  <div>
                    <span className="text-4xl md:text-5xl font-bold">
                      ${price.first}
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-gray-500">
                    Then monthly
                  </span>
                  <span className="text-xl font-bold text-gray-700">
                    ${price.monthly}
                  </span>
                </div>
                {tier === "bundle" ? (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-gray-400">
                        GLP-1 medication + provider
                      </span>
                      <span className="text-xs text-gray-500">
                        ${medPrice.monthly}/mo value
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-gray-400">
                        Future coach + resistance training
                      </span>
                      <span className="text-xs text-gray-500">
                        $199/mo value
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between pt-1">
                      <span className="text-xs font-semibold text-sage">
                        You save
                      </span>
                      <span className="text-xs font-bold text-sage">
                        ${medPrice.monthly + 199 - 499}/mo
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-xs text-gray-400">
                      Save with 3-month supply
                    </span>
                    <span className="text-xs font-semibold text-sage">
                      ${Math.round(price.monthly * 0.85)}/mo
                    </span>
                  </div>
                )}
              </div>

              <Link
                href="/assessment"
                className="block w-full mt-6 bg-black text-white text-center font-semibold py-4 rounded-xl hover:opacity-80 transition-opacity"
              >
                See If You Qualify
              </Link>
              <p className="text-xs text-gray-400 text-center mt-3">
                Only charged if approved. Cancel anytime.
              </p>
            </div>

            {/* What's included */}
            <div className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 text-center">
                Every plan includes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {INCLUDES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-sage"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="bg-white">
          <div className="max-w-[1600px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
                How we compare
              </h2>
              <p className="text-gray-500 mt-3 text-lg">
                Honest comparison with the other major GLP-1 providers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 text-xs font-semibold uppercase tracking-wider text-gray-400"></th>
                    <th className="py-4 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className="text-base md:text-lg font-bold">
                          Future
                        </span>
                        <span className="text-[10px] bg-black text-white uppercase tracking-wider px-2 py-0.5 rounded mt-1">
                          Coaching
                        </span>
                      </div>
                    </th>
                    <th className="py-4 text-center">
                      <span className="text-base md:text-lg font-medium text-gray-500">
                        Hims
                      </span>
                    </th>
                    <th className="py-4 text-center">
                      <span className="text-base md:text-lg font-medium text-gray-500">
                        Ro
                      </span>
                    </th>
                    <th className="py-4 text-center">
                      <span className="text-base md:text-lg font-medium text-gray-500">
                        Henry
                      </span>
                    </th>
                    <th className="py-4 text-center">
                      <span className="text-base md:text-lg font-medium text-gray-500">
                        Mochi
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITOR_COMPARISON.map((row, i) => {
                    const renderCell = (
                      value: string | boolean,
                      highlight: boolean
                    ) => {
                      if (typeof value === "boolean") {
                        return value ? (
                          <svg
                            className="w-5 h-5 text-sage inline"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <span className="text-gray-300">·</span>
                        );
                      }
                      return (
                        <span
                          className={
                            highlight
                              ? "text-black font-bold"
                              : "text-gray-500"
                          }
                        >
                          {value}
                        </span>
                      );
                    };

                    return (
                      <tr
                        key={i}
                        className="border-b border-gray-100 hover:bg-warm-gray/50 transition-colors"
                      >
                        <td className="py-4 pr-4 text-sm font-medium text-gray-700">
                          {row.feature}
                        </td>
                        <td className="py-4 text-center text-sm">
                          {renderCell(row.future, true)}
                        </td>
                        <td className="py-4 text-center text-sm">
                          {renderCell(row.hims, false)}
                        </td>
                        <td className="py-4 text-center text-sm">
                          {renderCell(row.ro, false)}
                        </td>
                        <td className="py-4 text-center text-sm">
                          {renderCell(row.henry, false)}
                        </td>
                        <td className="py-4 text-center text-sm">
                          {renderCell(row.mochi, false)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="text-xs text-gray-400 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
                Competitor pricing compiled from public pricing pages and
                third-party review aggregators, April 2026. Prices change
                frequently. Some competitors require multi-month prepayment to
                access the lowest advertised rates.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-warm-gray">
          <div className="max-w-3xl mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-center">
              Pricing FAQs
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
