"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/nav";
import { useAssessmentStore } from "@/lib/assessment-store";

const PRICES: Record<string, Record<string, { first: number; monthly: number }>> = {
  semaglutide: {
    injection: { first: 179, monthly: 299 },
    oral: { first: 249, monthly: 369 },
  },
  tirzepatide: {
    injection: { first: 279, monthly: 399 },
    oral: { first: 279, monthly: 399 },
  },
};

export default function CheckoutPage() {
  const router = useRouter();
  const { medication, pharmacy } = useAssessmentStore();
  const [processing, setProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const price = medication
    ? PRICES[medication.type]?.[medication.form]
    : null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setProcessing(true);
    // Simulate Stripe processing
    setTimeout(() => {
      router.push("/review");
    }, 2000);
  }

  const medName =
    medication?.type === "semaglutide" ? "Semaglutide" : "Tirzepatide";
  const formName =
    medication?.form === "injection" ? "Injection" : "Oral Tablet";

  return (
    <>
      <Nav />
      <main className="flex-1 bg-warm-gray">
        <div className="max-w-xl mx-auto px-4 py-8 md:py-14">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Checkout
            </h1>
            <p className="text-gray-500 mt-3">
              You&apos;ll only be charged if a provider approves your treatment.
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-6 mb-6">
            <h2 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{medName}</p>
                  <p className="text-sm text-gray-500">{formName} — {medication?.dosage}</p>
                </div>
                <p className="font-semibold">${price?.first}</p>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Provider consultation</span>
                <span className="text-sage font-medium">Included</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-sage font-medium">Free</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Pharmacy</span>
                <span className="text-gray-700">{pharmacy?.name}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-4 pt-4">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold">Due today</span>
                <span className="text-2xl font-bold">${price?.first}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Then ${price?.monthly}/month. Cancel anytime.
              </p>
            </div>

            <div className="mt-3 flex items-center gap-2 bg-cool-gray rounded-lg px-3 py-2">
              <svg
                className="w-4 h-4 text-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-xs font-medium text-gray-600">
                HSA/FSA Eligible
              </span>
            </div>
          </div>

          {/* Payment Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-200/60 p-6"
          >
            <h2 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
              Payment Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Card Number
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4242 4242 4242 4242"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Expiry
                  </label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    CVC
                  </label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="123"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full mt-6 bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {processing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                `Pay $${price?.first ?? 0}`
              )}
            </button>

            <p className="text-xs text-gray-400 text-center mt-3">
              Secured by Stripe. 256-bit encryption.
            </p>
          </form>

          <button
            onClick={() => router.back()}
            className="w-full mt-4 px-6 py-3 text-sm text-gray-500 hover:text-gray-700 transition-colors text-center"
          >
            Back to pharmacy selection
          </button>
        </div>
      </main>
    </>
  );
}
