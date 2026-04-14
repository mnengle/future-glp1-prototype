"use client";

import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const REASONS = [
  "General question",
  "Assessment help",
  "Prescription question",
  "Billing or subscription",
  "Technical issue",
  "Feedback",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reason, setReason] = useState(REASONS[0]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      reason,
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1 bg-warm-gray">
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Contact us
            </h1>
            <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
              We typically respond within one business day.
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 md:px-[60px] py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-2xl border border-gray-200/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Email
              </p>
              <p className="font-bold mt-1">hello@future.co</p>
              <p className="text-xs text-gray-500 mt-1">24 hour response</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Care team
              </p>
              <p className="font-bold mt-1">In-app chat</p>
              <p className="text-xs text-gray-500 mt-1">24/7 for members</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Emergencies
              </p>
              <p className="font-bold mt-1">Call 911</p>
              <p className="text-xs text-gray-500 mt-1">Not a medical line</p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-200/60 p-8 text-center">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Message received</h3>
              <p className="text-gray-500 mt-2 text-sm">
                We&apos;ll get back to you at the email you provided within one
                business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-200/60 p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-reason"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  What&apos;s this about?
                </label>
                <select
                  id="contact-reason"
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                >
                  {REASONS.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
                  placeholder="How can we help?"
                />
              </div>

              {error && (
                <p className="text-sm text-hot-pink" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-black text-white font-semibold py-3.5 rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}

          <p className="text-xs text-gray-400 text-center mt-6 max-w-lg mx-auto">
            For medical emergencies, call 911. Do not use this form for urgent
            medical concerns. Existing patients should message their care team
            via the in-app chat for faster response.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
