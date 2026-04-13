import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const goals = [
  { label: "1 – 20 lbs", value: "1-20" },
  { label: "21 – 50 lbs", value: "21-50" },
  { label: "51+ lbs", value: "51+" },
  { label: "Not sure yet", value: "unsure" },
];

const steps = [
  {
    number: "01",
    title: "Complete your assessment",
    description:
      "Answer a few questions about your health, goals, and medical history. Takes about 5 minutes.",
  },
  {
    number: "02",
    title: "Get matched with a provider",
    description:
      "A licensed physician reviews your assessment and creates a personalized treatment plan.",
  },
  {
    number: "03",
    title: "Receive your medication",
    description:
      "Your prescription ships directly to your door. Discreet packaging, fast delivery.",
  },
  {
    number: "04",
    title: "Ongoing coaching & support",
    description:
      "Your Future coach helps you build sustainable habits alongside your medication program.",
  },
];

const medications = [
  {
    name: "Semaglutide",
    description: "Same active ingredient as Ozempic & Wegovy",
    stat: "Up to 15% body weight loss",
  },
  {
    name: "Tirzepatide",
    description: "Same active ingredient as Mounjaro & Zepbound",
    stat: "Up to 22% body weight loss",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="future-gradient absolute inset-0" />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-4 md:px-[60px] py-24 md:py-36">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
                Medical Weight Loss Program
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Weight loss,
                <br />
                guided by
                <br />
                <span className="future-gradient-text">experts.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mt-6 max-w-lg leading-relaxed">
                Clinically proven GLP-1 medications paired with personalized
                coaching. Your plan, your pace, real results.
              </p>

              <div className="mt-10">
                <p className="text-sm font-medium text-white/50 mb-4">
                  How much weight do you want to lose?
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {goals.map((goal) => (
                    <Link
                      key={goal.value}
                      href={`/assessment?goal=${goal.value}`}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-center text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      {goal.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/assessment"
                className="inline-block mt-8 bg-white text-black text-base font-semibold px-10 py-3.5 rounded-lg hover:opacity-80 transition-opacity"
              >
                Start Your Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="bg-white border-b border-gray-200/60">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-6 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-2xl font-bold text-black">500K+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Patients Treated
              </p>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div>
              <p className="text-2xl font-bold text-black">Licensed</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Physicians in 49 States
              </p>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div>
              <p className="text-2xl font-bold text-black">24/7</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Care Team Support
              </p>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div>
              <p className="text-2xl font-bold text-black">HSA/FSA</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Eligible
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-warm-gray">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
              How it works
            </h2>
            <p className="text-gray-500 text-center mt-3 text-lg max-w-xl mx-auto">
              From assessment to your doorstep in as little as 5 days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col">
                  <span className="text-4xl font-bold text-gray-200">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold mt-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medications */}
        <section className="bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
              Clinically proven medications
            </h2>
            <p className="text-gray-500 text-center mt-3 text-lg max-w-xl mx-auto">
              FDA-approved GLP-1 receptor agonists prescribed by licensed
              physicians.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-3xl mx-auto">
              {medications.map((med) => (
                <div
                  key={med.name}
                  className="bg-cool-gray rounded-2xl p-8 border border-gray-200/60"
                >
                  <h3 className="text-xl font-bold">{med.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {med.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-semibold text-sage">
                      {med.stat}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/assessment"
                className="inline-block bg-black text-white text-base font-semibold px-10 py-3.5 rounded-lg hover:opacity-80 transition-opacity"
              >
                See If You Qualify
              </Link>
              <p className="text-xs text-gray-400 mt-3">
                $149 first month, then $299/month. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Coaching callout */}
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
                The Future Difference
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Medication alone isn&apos;t enough.
              </h2>
              <p className="text-lg text-white/60 mt-4 leading-relaxed">
                GLP-1 medications work best when paired with the right habits.
                Your Future coach builds a personalized fitness and nutrition
                plan that complements your treatment — so when you&apos;re ready
                to step off medication, the results stay.
              </p>
              <Link
                href="/assessment"
                className="inline-block mt-8 bg-white text-black text-base font-semibold px-10 py-3.5 rounded-lg hover:opacity-80 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
