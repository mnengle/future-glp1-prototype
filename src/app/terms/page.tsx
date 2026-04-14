import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service | Future Weight Loss",
  description:
    "The terms that govern your use of Future Weight Loss's medical weight loss program.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-warm-gray">
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-16 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-white/60 mt-3">
              Last updated April 13, 2026
            </p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 md:px-[60px] py-16">
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 md:p-10 text-gray-700 leading-relaxed space-y-6">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              the Future Weight Loss website and services. By using our
              services, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Medical services
              </h2>
              <p>
                Medical services on this platform are provided by licensed
                physicians through SteadyMD, our telemedicine partner. Future
                Weight Loss is a consumer-facing brand and does not directly
                provide medical services. Your provider is licensed in your
                state and determines whether you are a candidate for GLP-1
                therapy based on your assessment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Eligibility</h2>
              <p>
                You must be at least 18 years old and a resident of a state
                where we operate. You represent that the information you provide
                in your assessment is accurate and complete. Providing false
                information may result in termination of service and is illegal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Prescriptions and compounded products
              </h2>
              <p>
                Brand-name GLP-1 products (Ozempic, Wegovy, Mounjaro, Zepbound)
                are FDA-approved. Compounded formulations, when prescribed, are
                prepared under applicable FDA 503A or 503B compounding
                regulations. Compounded products are not FDA-approved and may
                carry different safety and efficacy profiles than brand-name
                equivalents. Your provider discusses these differences with you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Billing and subscription
              </h2>
              <p>
                Our program is billed monthly via subscription. You will only be
                charged if a licensed physician approves your treatment. You can
                cancel any time at least 72 hours before your next billing cycle
                from your dashboard.
              </p>
              <p className="mt-3">
                Refunds are generally not provided once medication has been
                dispensed. See our Refund Policy (available from your dashboard
                or from the care team) for full details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Results disclaimer
              </h2>
              <p>
                Individual results vary. Clinical trial data cited on our
                website reflects averages and may not predict your individual
                outcome. Factors including adherence, lifestyle, and baseline
                health influence results. We make no guarantee of specific
                weight loss amounts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Coaching services
              </h2>
              <p>
                Coaching is provided through Future, Inc. (future.co) and is a
                separate service. Coaching subscriptions and medication
                subscriptions are billed separately unless you select the
                bundled plan. Coaching is not medical advice and does not
                replace guidance from your licensed physician.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Telehealth consent
              </h2>
              <p>
                By using our services, you consent to receive medical care via
                telehealth. Asynchronous clinical review means your provider may
                prescribe without a real-time video call. If your provider
                determines a video visit is necessary, we will facilitate one.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Acceptable use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Share your account or prescriptions with others</li>
                <li>Misrepresent your health information</li>
                <li>Resell or distribute any prescribed medication</li>
                <li>Use our services for any unlawful purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by law, Future Weight Loss is
                not liable for indirect, incidental, or consequential damages
                arising from your use of our services. Our total liability in
                any event is limited to the amount you paid us in the 12 months
                preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Changes to these terms
              </h2>
              <p>
                We may update these Terms. Continued use of our services after
                changes take effect constitutes acceptance. We&apos;ll notify
                you of material changes by email or via a notice on our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Governing law
              </h2>
              <p>
                These Terms are governed by the laws of the State of Delaware,
                without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Contact</h2>
              <p>
                Questions? Email{" "}
                <a
                  href="mailto:legal@future.co"
                  className="text-black underline"
                >
                  legal@future.co
                </a>
                .
              </p>
            </section>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            These Terms are a template for a prototype environment. Consult
            counsel for your production Terms of Service.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
