"use client";

import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const goals = [
  { label: "1 to 20 lbs", value: "1-20" },
  { label: "21 to 50 lbs", value: "21-50" },
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
    title: "Start training with your coach",
    description:
      "Your Future coach designs a resistance training and nutrition plan to protect muscle while you lose fat.",
  },
];

const medications = [
  {
    name: "Semaglutide",
    description: "Same active ingredient as Ozempic and Wegovy",
    stat: "14.9% body weight loss at 68 weeks",
    citation: "STEP 1 Trial, NEJM 2021",
  },
  {
    name: "Tirzepatide",
    description: "Same active ingredient as Mounjaro and Zepbound",
    stat: "22.5% body weight loss at 72 weeks",
    citation: "SURMOUNT-1 Trial, NEJM 2022",
  },
];

const members = [
  {
    initial: "D",
    name: "Daniel K.",
    age: "32",
    city: "Austin, TX",
    accent: "coral",
    weightLost: "-28 lbs",
    fatLost: "-27.3 lbs",
    musclePreserved: "97%",
    program: "Semaglutide + Coaching",
    quote:
      "I didn't just want to be skinny. I wanted to be strong. My coach programmed lifts around how I was feeling on the med.",
    beforeImg: "/testimonials/before-1.jpg",
    afterImg: "/testimonials/after-1.jpg",
  },
  {
    initial: "S",
    name: "Sarah M.",
    age: "41",
    city: "Chicago, IL",
    accent: "sage",
    weightLost: "-46 lbs",
    fatLost: "-43.2 lbs",
    musclePreserved: "94%",
    program: "Tirzepatide + Coaching",
    quote:
      "I've done GLP-1s before and always felt weak after. This time I came out stronger than I started.",
    beforeImg: "/testimonials/before-2.jpg",
    afterImg: "/testimonials/after-2.jpg",
  },
  {
    initial: "M",
    name: "Marcus T.",
    age: "38",
    city: "Denver, CO",
    accent: "purple",
    weightLost: "-35 lbs",
    fatLost: "-35.2 lbs",
    musclePreserved: "100%",
    program: "Tirzepatide + Coaching",
    quote:
      "The med killed my appetite. Coaching kept me eating enough protein. Biggest difference of my life.",
    beforeImg: "/testimonials/before-3.jpg",
    afterImg: "/testimonials/after-3.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-black text-white overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/pro-homepage/hero/pro-hero-desktop.jpg"
              alt="Strength training"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
          </div>

          <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-6">
                Medical Weight Loss + Coaching
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95]">
                Lose the fat.
                <br />
                Keep the
                <br />
                <span className="future-gradient-text">muscle.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mt-10 max-w-xl leading-relaxed">
                Clinically proven GLP-1 medications, paired with expert coaching
                and resistance training. Because medication alone isn&apos;t
                enough.
              </p>

              <div className="mt-10">
                <p className="text-sm font-medium text-white/60 mb-4">
                  How much weight do you want to lose?
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
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
                className="inline-block mt-8 bg-white text-black text-base font-semibold px-10 py-4 rounded-lg hover:opacity-80 transition-opacity"
              >
                Start Your Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Stat bar */}
        <section className="bg-white border-b border-gray-200/60">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-2xl font-bold text-hot-pink">Up to 40%</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Of weight lost on GLP-1s is lean mass
              </p>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div>
              <p className="text-2xl font-bold text-hot-pink">2/3 regained</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Within 1 year of stopping medication
              </p>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div>
              <p className="text-2xl font-bold text-sage">90%+ preserved</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                With resistance training and protein
              </p>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] pb-4 text-center">
            <p className="text-[10px] text-gray-400">
              Sources: STEP 1 body composition substudy (Wilding et al., NEJM
              2021); STEP 1 extension (Wilding et al., Diabetes, Obesity and
              Metabolism 2022); ISSN position on protein intake during weight
              loss (Jäger et al., 2017).
            </p>
          </div>
        </section>

        {/* The muscle problem */}
        <section className="bg-warm-gray">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
                The Problem Nobody Talks About
              </p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-center">
                GLP-1 medications work. But there&apos;s a catch.
              </h2>
              <p className="text-gray-500 text-center mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                Clinical trials show that 25 to 40% of weight lost on
                semaglutide and tirzepatide is lean body mass, not fat. That
                includes muscle, bone density, and metabolic capacity. Without
                intervention, you lose the weight but weaken the body
                underneath.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white rounded-2xl p-6 border border-gray-200/60">
                  <p className="text-3xl font-bold text-hot-pink">~39%</p>
                  <p className="text-sm font-semibold mt-2">
                    Lean mass as a share of total weight lost
                  </p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    In the STEP 1 body composition substudy, about 39% of total
                    weight lost on semaglutide 2.4mg came from lean body mass,
                    not fat.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200/60">
                  <p className="text-3xl font-bold text-hot-pink">2/3</p>
                  <p className="text-sm font-semibold mt-2">
                    Weight regained within 1 year of stopping
                  </p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    The STEP 1 extension found participants regained two-thirds
                    of lost weight after stopping semaglutide, and the regained
                    weight tends to come back as fat, not muscle.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200/60">
                  <p className="text-3xl font-bold text-sage">Preventable</p>
                  <p className="text-sm font-semibold mt-2">
                    With resistance training and protein
                  </p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Emerging research suggests resistance training combined
                    with adequate protein intake can dramatically reduce muscle
                    loss during GLP-1 treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-center">
              How it works
            </h2>
            <p className="text-gray-500 text-center mt-3 text-lg max-w-xl mx-auto">
              Medication and coaching, designed to work together.
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

        {/* Member Transformations with before/after */}
        <section className="bg-white border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Member Transformations
              </p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
                Fat loss without the muscle loss.
              </h2>
              <p className="text-gray-500 mt-3 text-lg">
                Results from members who paired Future coaching with their
                GLP-1 medication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="bg-cool-gray rounded-2xl overflow-hidden border border-gray-200/60 flex flex-col"
                >
                  {/* Before / After images */}
                  <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                      <img
                        src={member.beforeImg}
                        alt={`${member.name} before`}
                        className="w-full h-full object-cover grayscale-[20%]"
                      />
                      <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        Before
                      </span>
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                      <img
                        src={member.afterImg}
                        alt={`${member.name} after`}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-sage text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        After
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-10 h-10 rounded-full bg-${member.accent}/10 flex items-center justify-center flex-shrink-0`}
                      >
                        <span className={`font-bold text-${member.accent}`}>
                          {member.initial}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold">{member.name}</p>
                        <p className="text-xs text-gray-500">
                          {member.age} · {member.city}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-200">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                          Weight
                        </p>
                        <p className="font-bold">{member.weightLost}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                          Fat
                        </p>
                        <p className="font-bold text-sage">{member.fatLost}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                          Muscle
                        </p>
                        <p className="font-bold text-sage">
                          {member.musclePreserved}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-3">
                      {member.program}
                    </p>

                    <p className="text-sm text-gray-600 italic leading-relaxed mt-4 flex-1">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-10 max-w-lg mx-auto leading-relaxed">
              Individual results vary. Outcomes reflect members who combined
              GLP-1 medication with Future coaching and resistance training.
              Photos are staging placeholders.
            </p>
          </div>
        </section>

        {/* Training section */}
        <section className="bg-warm-gray">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  Training That Adapts To You
                </p>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
                  Your body on GLP-1 is different.
                  <br />
                  Your training should be too.
                </h2>
                <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                  Appetite shifts. Energy changes. Some days you&apos;ll feel
                  great. Others you&apos;ll feel flat. Your Future coach builds
                  a program around these realities and adjusts it week by
                  week.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-coral/10 text-coral rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Strength-first programming
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Compound lifts, progressive overload, and movement
                        patterns designed to preserve muscle while you lose fat.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-sage/10 text-sage rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold">Adaptive intensity</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Your coach scales volume and intensity based on how
                        you&apos;re feeling. Low appetite day? Lighter session.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-purple/10 text-purple rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">Protein periodization</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        1.2 to 2.0 g/kg of protein daily, timed with training,
                        makes the difference between losing weight and losing
                        muscle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_1600/f_auto/q_90/v1/https://future.co/images/pro-homepage/fitness-roadmap/pro-roadmap-desktop-bg.jpg"
                  alt="Strength training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                    Built Around Science
                  </p>
                  <p className="text-white font-bold text-xl mt-1">
                    Resistance training 3 to 5x per week, 1.2 to 2.0g protein
                    per kg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medications */}
        <section className="bg-cool-gray">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-center">
              Clinically proven medications
            </h2>
            <p className="text-gray-500 text-center mt-3 text-lg max-w-xl mx-auto">
              Prescribed by licensed physicians. Same active ingredients as
              brand-name GLP-1s.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-3xl mx-auto">
              {medications.map((med) => (
                <div
                  key={med.name}
                  className="bg-white rounded-2xl p-8 border border-gray-200/60"
                >
                  <h3 className="text-xl font-bold">{med.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {med.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-semibold text-sage">
                      {med.stat}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      {med.citation}
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
                From $179 first month. Or bundle with Future coaching for
                $499/month flat.
              </p>
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
              Brand-name products (Ozempic, Wegovy, Mounjaro, Zepbound) are
              FDA-approved. Compounded formulations, when offered, are
              prescribed and prepared under applicable FDA compounding
              guidelines.
            </p>
          </div>
        </section>

        {/* The Future Difference */}
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4 text-center">
                The Future Difference
              </p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-center">
                Build muscle while you lose weight.
              </h2>
              <p className="text-lg text-white/60 mt-4 leading-relaxed text-center max-w-2xl mx-auto">
                Leading medical organizations recommend combining resistance
                training with obesity pharmacotherapy to preserve lean mass.
                Your Future coach makes sure it actually happens.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-lg">Resistance training</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">
                    Personalized strength programs designed to preserve and
                    build lean mass during weight loss. Adapted weekly based on
                    your progress and energy levels.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-lg">Protein optimization</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">
                    Research supports 1.2 to 2.0 g/kg/day protein intake during
                    active weight loss with resistance training. Your coach
                    dials in your macros.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-lg">Lasting results</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">
                    A Lancet-family RCT of exercise combined with liraglutide
                    maintained weight loss one year after stopping medication,
                    unlike pharmacotherapy alone.
                  </p>
                </div>
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/assessment"
                  className="inline-block bg-white text-black text-base font-semibold px-10 py-3.5 rounded-lg hover:opacity-80 transition-opacity"
                >
                  Get Started
                </Link>
              </div>

              <p className="text-[10px] text-white/30 text-center mt-8 max-w-2xl mx-auto">
                Sources: ADA Standards of Care in Diabetes 2024; Jensen et al.,
                eClinicalMedicine 2024 (Exercise + Liraglutide RCT); Wilding et
                al., STEP 1 Extension (Diabetes, Obesity and Metabolism 2022);
                Jäger et al., ISSN Position on Protein and Exercise (2017).
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
