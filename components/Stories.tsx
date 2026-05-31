"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Play, Calendar, ChatTeardrop, Sparkle, CaretRight } from "@phosphor-icons/react";

export default function Stories() {
  const reduceMotion = useReducedMotion();

  const testimonials = [
    {
      text: "“Having a clean bed and healthy meals at the shelter allowed our daughter to focus entirely on her chemotherapy recovery and healing.”",
      author: "Rahmawati",
      role: "Mother of Patient Aldy",
      org: "Miracle Shelter Family",
      bgClass: "bg-slate-blue/10 text-espresso border border-slate-blue/10",
    },
    {
      text: "“Volunteering at the shelter reshaped my life. Helping these brave children paint, study, and smile is a deeply grounding experience.”",
      author: "Budi Santoso",
      role: "Lead Educator",
      org: "Volunteer Network",
      bgClass: "bg-sage/10 text-espresso border border-sage/10",
    },
  ];

  const volunteerLogs = [
    {
      date: "May 28, 2026",
      title: "Art Therapy and Watercolor Session",
      desc: "Ten children created hope banners and custom watercolor paintings during our weekly therapy block in the main activity hall.",
    },
    {
      date: "May 22, 2026",
      title: "Pediatric Ward Distribution Run",
      desc: "Delivered forty nutritional kits and personalized care packages directly to oncology outpatient rooms at the central hospital.",
    },
  ];

  return (
    <section id="stories" className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-background border-t border-espresso/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column: Cinematic Video & Logs (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-espresso/40 uppercase font-bold text-left">Our Impact</span>
              <Sparkle weight="fill" className="text-amber w-3 h-3" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-espresso font-sans leading-tight">
              Brave Journeys.
            </h2>
            <p className="text-base md:text-lg text-espresso/60 leading-relaxed max-w-[55ch]">
              Watch our patient spotlight journeys and see the active care logs updated weekly by our shelter volunteer squads.
            </p>
          </div>

          {/* Video Placeholder Card (Premium Materiality) */}
          <motion.div 
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl shadow-espresso/15 group border border-espresso/10"
          >
            <Image
              src="/hero_child_smiling.png"
              alt="Patient journey video cover showing painting activities"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/40 transition-colors duration-500 flex flex-col justify-between p-10" />

            {/* Badges (Refined) */}
            <div className="absolute top-10 left-10 flex flex-wrap gap-3 z-10">
              <span className="px-4 py-1.5 rounded-full text-[9px] font-mono tracking-widest font-bold uppercase bg-background/90 backdrop-blur-md text-espresso shadow-sm border border-espresso/5">
                Support Journey
              </span>
              <span className="px-4 py-1.5 rounded-full text-[9px] font-mono tracking-widest font-bold uppercase bg-sage text-espresso shadow-sm">
                Healthy Recovery
              </span>
            </div>

            {/* Play Button (Cinematic) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 rounded-full bg-cream text-espresso flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:bg-terracotta group-hover:text-cream"
                aria-label="Play video journey"
              >
                <Play size={32} weight="fill" className="ml-1" />
              </motion.button>
            </div>

            {/* Video Label */}
            <div className="absolute bottom-10 left-10 right-10 z-10 text-cream">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber font-bold">
                Patient Spotlight
              </p>
              <h3 className="text-xl md:text-2xl font-bold font-sans mt-2 text-balance leading-tight">
                Aldy’s Walk: From Hospital Outpatient to School Re-entry
              </h3>
            </div>
          </motion.div>

          {/* Volunteer Logs (Refined Grid) */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-espresso font-sans flex items-center gap-3">
                <Calendar size={24} weight="fill" className="text-terracotta" />
                Recent Volunteer Logs
              </h3>
              <Link 
                href="/activity-log"
                className="text-[10px] font-mono font-bold uppercase tracking-widest text-espresso/40 hover:text-terracotta transition-colors flex items-center gap-2 group/all"
              >
                View Full Log <CaretRight weight="bold" className="transition-transform group-hover/all:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {volunteerLogs.map((log, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[32px] bg-espresso/[0.02] border border-espresso/5 flex flex-col gap-3 hover:border-espresso/15 hover:bg-espresso/[0.03] transition-all duration-300 group"
                >
                  <span className="text-[10px] font-mono tracking-widest text-espresso/30 uppercase font-bold group-hover:text-terracotta transition-colors">
                    {log.date}
                  </span>
                  <h4 className="text-base font-bold text-espresso leading-tight">
                    {log.title}
                  </h4>
                  <p className="text-sm text-espresso/50 leading-relaxed">
                    {log.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Testimonials (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-10 lg:pt-20">
          <div className="flex items-center gap-3 text-terracotta font-mono text-[10px] tracking-[0.3em] uppercase font-bold">
            <ChatTeardrop size={24} weight="fill" />
            Voices of Hope
          </div>

          <div className="flex flex-col gap-8">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                className={`p-10 rounded-[40px] shadow-sm ${test.bgClass} flex flex-col justify-between group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-espresso/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                {/* Quote (No em-dash) */}
                <p className="relative z-10 text-base md:text-lg font-sans italic font-semibold leading-relaxed mb-8 text-balance text-espresso/80">
                  {test.text}
                </p>

                {/* Attribution (No em-dash) */}
                <div className="relative z-10 border-t border-espresso/10 pt-6 flex flex-col text-left">
                  <span className="text-sm font-bold text-espresso tracking-tight">
                    {test.author}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-espresso/40 font-bold mt-1">
                    {test.role}, {test.org}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
