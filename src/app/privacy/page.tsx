import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: { absolute: "Privacy Policy | Future Weight Loss" },
  description:
    "How Future Weight Loss collects, uses, and protects your personal and health information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1 bg-warm-gray">
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] py-16 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/60 mt-3">
              Last updated April 13, 2026
            </p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-5 md:px-[60px] py-16 prose">
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 md:p-10 text-gray-700 leading-relaxed space-y-6">
            <p className="text-base">
              This Privacy Policy describes how Future Weight Loss
              (&ldquo;Future,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
              collects, uses, and protects your personal and health information
              when you use our medical weight loss program.
            </p>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Information we collect
              </h2>
              <p>
                We collect information you provide directly, including name,
                date of birth, contact details, state of residence, medical
                history, current medications, weight, height, and goals. Our
                health assessment questions are necessary for licensed
                physicians to prescribe safely.
              </p>
              <p className="mt-3">
                We also collect technical information such as device type, IP
                address, and browser type when you use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                How we use your information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide medical care through our licensed telehealth partner
                  (SteadyMD)
                </li>
                <li>Route prescriptions to your selected pharmacy</li>
                <li>Process payments for your program</li>
                <li>Communicate about your treatment and billing</li>
                <li>Improve our services and patient experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">HIPAA and PHI</h2>
              <p>
                Your Protected Health Information (PHI) is handled in accordance
                with HIPAA. We share PHI only with licensed providers, partner
                pharmacies, and services directly required to deliver your care.
                All PHI is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Third-party services
              </h2>
              <p>We use the following third parties to deliver our services:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong>SteadyMD</strong> provides licensed clinician
                  services, electronic prescribing, and patient record
                  management
                </li>
                <li>
                  <strong>Stripe</strong> processes payments. We do not store
                  full payment card details
                </li>
                <li>
                  <strong>Partner pharmacies</strong> receive prescriptions via
                  SureScripts e-prescribing
                </li>
                <li>
                  <strong>Resend</strong> sends transactional emails like
                  assessment updates and magic-link logins
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Your rights</h2>
              <p>
                You can request a copy of your health information, correct
                inaccuracies, or delete your account at any time. To exercise
                these rights, contact{" "}
                <a href="mailto:privacy@future.co" className="text-black underline">
                  privacy@future.co
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Cookies and tracking
              </h2>
              <p>
                We use essential cookies to keep you logged in and to process
                your assessment. Analytics cookies help us understand how
                visitors use our site. You can manage cookie preferences in your
                browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Children&apos;s privacy
              </h2>
              <p>
                Future Weight Loss is intended for adults 18 and older. We do
                not knowingly collect information from children under 18.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                Changes to this policy
              </h2>
              <p>
                We may update this policy. We&apos;ll notify you of material
                changes via email or on this page. Continued use of our services
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">Contact</h2>
              <p>
                Questions about this policy? Email{" "}
                <a href="mailto:privacy@future.co" className="text-black underline">
                  privacy@future.co
                </a>
                .
              </p>
            </section>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            This policy is a template for a prototype environment. Consult
            counsel for your production Privacy Policy.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
