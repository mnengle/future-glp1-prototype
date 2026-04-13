"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/nav";
import { useAssessmentStore } from "@/lib/assessment-store";
import type { PharmacySelection } from "@/lib/types";

const PARTNER_PHARMACY: PharmacySelection = {
  ncpdpId: "3692539",
  name: "Future Pharmacy Partner",
  address: "Direct-to-door shipping, nationwide",
  phone: "(800) 555-0199",
  isPartner: true,
};

const MOCK_PHARMACIES: PharmacySelection[] = [
  {
    ncpdpId: "1234567",
    name: "CVS Pharmacy #4521",
    address: "1234 Main St, Los Angeles, CA 90001",
    phone: "(213) 555-0100",
    isPartner: false,
  },
  {
    ncpdpId: "2345678",
    name: "Walgreens #9876",
    address: "5678 Broadway, Los Angeles, CA 90012",
    phone: "(213) 555-0200",
    isPartner: false,
  },
  {
    ncpdpId: "3456789",
    name: "Rite Aid #3344",
    address: "9012 Sunset Blvd, Los Angeles, CA 90028",
    phone: "(323) 555-0300",
    isPartner: false,
  },
];

export default function PharmacyPage() {
  const router = useRouter();
  const { setPharmacy } = useAssessmentStore();
  const [selected, setSelected] = useState<PharmacySelection>(PARTNER_PHARMACY);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPharmacies = MOCK_PHARMACIES.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleContinue() {
    setPharmacy(selected);
    router.push("/checkout");
  }

  return (
    <>
      <Nav />
      <main className="flex-1 bg-warm-gray">
        <div className="max-w-xl mx-auto px-4 py-8 md:py-14">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Pharmacy selection
            </h1>
            <p className="text-gray-500 mt-3">
              Choose where your prescription will be sent.
            </p>
          </div>

          {/* Partner pharmacy — recommended */}
          <div
            className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all mb-4 ${
              selected.ncpdpId === PARTNER_PHARMACY.ncpdpId
                ? "border-black shadow-md"
                : "border-gray-200/60 hover:border-gray-300"
            }`}
            onClick={() => {
              setSelected(PARTNER_PHARMACY);
              setShowSearch(false);
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{PARTNER_PHARMACY.name}</h3>
                  <span className="text-xs font-medium bg-sage/20 text-sage px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {PARTNER_PHARMACY.address}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Fastest fulfillment. Your medication ships directly to your
                  door within 2-5 business days.
                </p>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                  selected.ncpdpId === PARTNER_PHARMACY.ncpdpId
                    ? "border-black"
                    : "border-gray-300"
                }`}
              >
                {selected.ncpdpId === PARTNER_PHARMACY.ncpdpId && (
                  <div className="w-3 h-3 bg-black rounded-full" />
                )}
              </div>
            </div>
          </div>

          {/* Choose your own */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="w-full text-left bg-white rounded-2xl border border-gray-200/60 p-5 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  Choose a different pharmacy
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Search our network of pharmacies near you
                </p>
              </div>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  showSearch ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {showSearch && (
            <div className="mt-3 bg-white rounded-2xl border border-gray-200/60 p-5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, address, or zip code..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-cool-gray text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
              />
              <div className="mt-3 space-y-2">
                {filteredPharmacies.map((pharmacy) => (
                  <div
                    key={pharmacy.ncpdpId}
                    onClick={() => setSelected(pharmacy)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selected.ncpdpId === pharmacy.ncpdpId
                        ? "border-black bg-gray-50"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <p className="text-sm font-medium">{pharmacy.name}</p>
                    <p className="text-xs text-gray-400">{pharmacy.address}</p>
                    <p className="text-xs text-gray-400">{pharmacy.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => router.back()}
              className="px-6 py-3.5 rounded-lg border border-gray-200 bg-white text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              className="flex-1 bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity"
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
