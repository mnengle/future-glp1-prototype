"use client";

import { useState } from "react";
import { useAssessmentStore } from "@/lib/assessment-store";
import { US_STATES } from "@/lib/types";
import type { PatientInfo } from "@/lib/types";

export function StepPersonalInfo({ onNext }: { onNext: () => void }) {
  const { data, updateData } = useAssessmentStore();
  const [info, setInfo] = useState<PatientInfo>(
    data.patientInfo ?? {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      state: "",
    }
  );

  const isValid =
    info.firstName &&
    info.lastName &&
    info.email &&
    info.phone &&
    info.dateOfBirth &&
    info.state;

  function handleSubmit() {
    updateData({ patientInfo: info });
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Let&apos;s start with the basics
        </h2>
        <p className="text-gray-500 mt-2">
          This information helps us connect you with a licensed provider in your
          state.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            autoComplete="given-name"
            required
            value={info.firstName}
            onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            autoComplete="family-name"
            required
            value={info.lastName}
            onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          required
          value={info.phone}
          onChange={(e) => setInfo({ ...info, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            autoComplete="bday"
            required
            value={info.dateOfBirth}
            onChange={(e) => setInfo({ ...info, dateOfBirth: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            State
          </label>
          <select
            id="state"
            name="state"
            autoComplete="address-level1"
            required
            value={info.state}
            onChange={(e) => setInfo({ ...info, state: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
          >
            <option value="">Select your state</option>
            {US_STATES.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className="w-full bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
}
