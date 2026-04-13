"use client";

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
    title: "Start training with your coach",
    description:
      "Your Future coach designs a resistance training and nutrition plan to protect muscle while you lose fat.",
  },
];

const medications = [
  {
    name: "Semaglutide",
    description: "Same active ingredient as Ozempic & Wegovy",
    stat: "14.9% body weight loss at 68 weeks",
    citation: "STEP 1 Trial, NEJM 2021",
  },
  {
    name: "Tirzepatide",
    description: "Same active ingredient as Mounjaro & Zepbound",
    stat: "22.5% body weight loss at 72 weeks",
    citation: "SURMOUNT-1 Trial, NEJM 2022",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-black text-white overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/pro-homepage/hero/pro-hero-desktop.jpg"
              alt="Strength training"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          </div>
          <div className="absolute inset-0 opacity-15">
            <div className="future-gradient absolute inset-0" />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-4 md:px-[60px] py-24 md:py-36">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
                Medical Weight Loss + Coaching
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Lose fat,
                <br />
                not
                <br />
                <span className="future-gradient-text">muscle.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mt-6 max-w-lg leading-relaxed">
                GLP-1 medications paired with expert coaching and resistance
                training. Because the research is clear: medication alone
                isn&apos;t enough.
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

        {/* The problem — stat bar */}
        <section className="bg-white border-b border-gray-200/60">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-2xl font-bold text-hot-pink">Up to 40%</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Of weight lost on GLP-1s is muscle
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
              <p className="text-2xl font-bold text-sage">~3% muscle loss</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                When paired with resistance training
              </p>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] pb-4 text-center">
            <p className="text-[10px] text-gray-400">
              Sources: STEP 1 body composition substudy (NEJM 2021); STEP 1
              extension — Wilding et al. (Diabetes, Obesity &amp; Metabolism
              2022); Medscape 2025 prospective study on resistance training +
              GLP-1 RAs
            </p>
          </div>
        </section>

        {/* The muscle problem — education */}
        <section className="bg-warm-gray">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
                The Problem Nobody Talks About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
                GLP-1 medications work. But there&apos;s a catch.
              </h2>
              <p className="text-gray-500 text-center mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                Clinical trials show that 25–40% of weight lost on semaglutide
                and tirzepatide is lean body mass — not fat. That means muscle,
                bone density, and metabolic capacity. Without intervention, you
                lose the weight but weaken the body underneath.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white rounded-2xl p-6 border border-gray-200/60">
                  <p className="text-3xl font-bold text-hot-pink">39–45%</p>
                  <p className="text-sm font-semibold mt-2">
                    Lean mass as a share of total weight lost
                  </p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    In the STEP 1 body composition substudy, participants lost
                    ~6.9 kg of lean mass out of ~15.3 kg total weight lost on
                    semaglutide 2.4mg.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200/60">
                  <p className="text-3xl font-bold text-hot-pink">2/3</p>
                  <p className="text-sm font-semibold mt-2">
                    Weight regained within 1 year of stopping
                  </p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    The STEP 1 extension found participants regained two-thirds
                    of lost weight after stopping semaglutide — and regained
                    weight tends to come back as fat, not muscle.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200/60">
                  <p className="text-3xl font-bold text-sage">
                    Preventable
                  </p>
                  <p className="text-sm font-semibold mt-2">
                    With resistance training + protein
                  </p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    A 2025 prospective study found patients who combined
                    resistance training with GLP-1s lost 13% body weight but
                    only ~3% muscle mass. Some patients actually gained muscle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
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

        {/* Before/After Results */}
        <section className="bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Real Results
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Members who lost fat — and kept their muscle.
              </h2>
              <p className="text-gray-500 mt-3 text-lg">
                Results from patients who paired Future coaching with their
                GLP-1 medication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Testimonial card with before/after */}
              <div className="bg-cool-gray rounded-2xl overflow-hidden border border-gray-200/60">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4] bg-gray-200">
                    <img
                      src="/testimonials/david-before.jpg"
                      alt="David — before"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_800/f_auto/q_auto/v1/https://future.co/images/pro-homepage/fitness-roadmap/pro-roadmap-michelle-portrait.jpg";
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] bg-gray-200">
                    <img
                      src="/testimonials/david-after.jpg"
                      alt="David — after"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_800/f_auto/q_auto/v1/https://future.co/images/pro-homepage/fitness-roadmap/pro-roadmap-michelle-portrait.jpg";
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-sage text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">David K.</p>
                    <p className="text-xs text-gray-400">32, Austin TX</p>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Weight Lost
                      </p>
                      <p className="font-bold text-sage">-28 lbs</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Muscle Retained
                      </p>
                      <p className="font-bold text-sage">97%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic leading-relaxed">
                    &ldquo;I didn&apos;t just want to be skinny — I wanted to be
                    strong. The coach programmed my lifts around how I was
                    feeling on the med.&rdquo;
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-cool-gray rounded-2xl overflow-hidden border border-gray-200/60">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4] bg-gray-200">
                    <img
                      src="/testimonials/sarah-before.jpg"
                      alt="Sarah — before"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_800/f_auto/q_auto/v1/https://s3.amazonaws.com/assets.dev.future.fit/images/2ec2cc10-47d2-4e71-8d7a-3c66dc0af293.jpg";
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] bg-gray-200">
                    <img
                      src="/testimonials/sarah-after.jpg"
                      alt="Sarah — after"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_800/f_auto/q_auto/v1/https://s3.amazonaws.com/assets.dev.future.fit/images/2ec2cc10-47d2-4e71-8d7a-3c66dc0af293.jpg";
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-sage text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">Sarah M.</p>
                    <p className="text-xs text-gray-400">41, Chicago IL</p>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Weight Lost
                      </p>
                      <p className="font-bold text-sage">-46 lbs</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Muscle Retained
                      </p>
                      <p className="font-bold text-sage">94%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic leading-relaxed">
                    &ldquo;I&apos;ve done GLP-1s before and always felt weak
                    after. This time I came out stronger than I started.&rdquo;
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-cool-gray rounded-2xl overflow-hidden border border-gray-200/60">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4] bg-gray-200">
                    <img
                      src="/testimonials/marcus-before.jpg"
                      alt="Marcus — before"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_800/f_auto/q_auto/v1/https://s3.amazonaws.com/assets.dev.future.fit/images/bca1be57-cdb5-4b08-bb18-964d3c0f01c7.jpg";
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] bg-gray-200">
                    <img
                      src="/testimonials/marcus-after.jpg"
                      alt="Marcus — after"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_800/f_auto/q_auto/v1/https://s3.amazonaws.com/assets.dev.future.fit/images/bca1be57-cdb5-4b08-bb18-964d3c0f01c7.jpg";
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-sage text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">Marcus T.</p>
                    <p className="text-xs text-gray-400">38, Denver CO</p>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Weight Lost
                      </p>
                      <p className="font-bold text-sage">-35 lbs</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Muscle Retained
                      </p>
                      <p className="font-bold text-sage">100%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic leading-relaxed">
                    &ldquo;The med killed my appetite but coaching kept me
                    eating enough protein. Biggest difference of my life.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-8 max-w-lg mx-auto">
              Individual results vary. Testimonials represent results from
              patients who combined GLP-1 medication with Future coaching and
              resistance training.
            </p>
          </div>
        </section>

        {/* Training section with imagery */}
        <section className="bg-warm-gray">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  Training That Adapts To You
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Your body on GLP-1 is different.
                  <br />
                  Your training should be, too.
                </h2>
                <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                  Appetite shifts. Energy changes. Some days you&apos;ll feel
                  great; others you&apos;ll feel flat. Your Future coach builds
                  a program around these realities — and adjusts it week by
                  week.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-coral/10 text-coral rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">Strength-first programming</h3>
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
                        0.7–1.7 g/kg of protein daily, timed with training,
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
                    Resistance training 3–5x/wk, 0.7–1.7g protein per kg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medications */}
        <section className="bg-cool-gray">
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
                $149 first month, then $299/month. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* The Future Difference — coaching */}
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-20 md:py-28">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4 text-center">
                The Future Difference
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
                Build muscle while you lose weight.
              </h2>
              <p className="text-lg text-white/60 mt-4 leading-relaxed text-center max-w-2xl mx-auto">
                The American Diabetes Association recommends resistance training
                as a co-intervention with GLP-1 medications. Your Future coach
                makes sure it actually happens.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-lg">Resistance training</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">
                    Personalized strength programs designed to preserve and build
                    lean mass during weight loss. Adapted weekly based on your
                    progress and energy levels.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-lg">Protein optimization</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">
                    Research shows 0.7–1.7 g/kg/day protein intake alongside
                    resistance training dramatically improves muscle retention.
                    Your coach dials in your macros.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-bold text-lg">Lasting results</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">
                    A Lancet study found exercise + GLP-1 maintained weight loss
                    one year after stopping — unlike medication alone, where
                    two-thirds of weight returns.
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
                Sources: Diabetes Care (ADA) 2024; eClinicalMedicine/The Lancet
                2024 — Exercise + Liraglutide RCT; STEP 1 Extension (Wilding et
                al., Diabetes Obesity &amp; Metabolism 2022); PMC 2025 case
                series on resistance training + GLP-1/GIP agonists
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
