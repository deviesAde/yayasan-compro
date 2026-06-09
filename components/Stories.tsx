"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";
import { Play, Calendar, ChatTeardrop, Sparkle, CaretRight } from "@phosphor-icons/react";

export default function Stories() {
  const reduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, margin: "-100px" });

  const testimonials = [
    {
      text: "\\u201cHaving a clean bed and healthy meals at the shelter allowed our daughter to focus entirely on her chemotherapy recovery and healing.\\u201d",
      author: "Rahmawati",
      role: "Mother of Patient Aldy",
      org: "Miracle Shelter Family",
      bgClass: "bg-slate-blue/10 text-foreground border border-slate-blue/10",
    },
    {
      text: "\\u201cVolunteering at the shelter reshaped my life. Helping these brave children paint, study, and smile is a deeply grounding experience.\\u201d",
      author: "Budi Santoso",
      role: "Lead Educator",
      org: "Volunteer Network",
      bgClass: "bg-sage/10 text-foreground border border-sage/10",
    },
  ];

  const volunteerLogs = [
    {
      date: "May 28, 2026",
      title: "Art Therapy and Watercolor Session",
      desc: "Ten children created hope banners and custom watercolor paintings during our weekly therapy block in the main activity hall.",
      icon: "🎨",
    },
    {
      date: "May 22, 2026",
      title: "Pediatric Ward Distribution Run",
      desc: "Delivered forty nutritional kits and personalized care packages directly to oncology outpatient rooms at the central hospital.",
      icon: "📦",
    },
    {
      date: "May 15, 2026",
      title: "Volunteer Coordination Meeting",
      desc: "Strategic planning session with volunteer squads to streamline care protocols and expand support for patient families across five provinces.",
      icon: "🤝",
    },
  ];

  return (
    <section id="stories" className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-background border-t border-border-color">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column: Cinematic Video & Timeline Logs (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-foreground-subtle uppercase font-bold text-left">Our Impact</span>
              <Sparkle weight="fill" className="text-amber w-3 h-3" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-sans leading-tight">
              Brave Journeys.
            </h2>
            <p className="text-base md:text-lg text-foreground-subtle leading-relaxed max-w-[55ch] text-justify">
              Watch our patient spotlight journeys and see the active care logs updated weekly by our shelter volunteer squads.
            </p>
          </div>

          {/* Video Placeholder Card (Premium Materiality) */}
          <motion.div 
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl shadow-foreground/15 group border border-border-color"
          >
            <Image
              src="/Miracle%20of%20Smile%202026/IMG_2422.webp"
              alt="Patient journey video cover showing painting activities"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-500 flex flex-col justify-between p-10" />

            {/* Badges (Refined) */}
            <div className="absolute top-10 left-10 flex flex-wrap gap-3 z-10">
              <span className="px-4 py-1.5 rounded-full text-[9px] font-mono tracking-widest font-bold uppercase bg-background/90 backdrop-blur-md text-foreground shadow-sm border border-border-color">
                Support Journey
              </span>
              <span className="px-4 py-1.5 rounded-full text-[9px] font-mono tracking-widest font-bold uppercase bg-sage text-foreground shadow-sm">
                Healthy Recovery
              </span>
            </div>

            {/* Play Button (Cinematic) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 rounded-full bg-cream text-foreground flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:bg-terracotta group-hover:text-cream"
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
                Aldy's Walk: From Hospital Outpatient to School Re-entry
              </h3>
            </div>
          </motion.div>

          {/* Activity Timeline with Animated Line */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground font-sans flex items-center gap-3">
                <Calendar size={24} weight="fill" className="text-terracotta" />
                Activity & Impact Log
              </h3>
              <Link 
                href="/activity-log"
                className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground-subtle hover:text-terracotta transition-colors flex items-center gap-2 group/all"
              >
                View Full Log <CaretRight weight="bold" className="transition-transform group-hover/all:translate-x-1" />
              </Link>
            </div>

            {/* Timeline Container */}
            <div ref={timelineRef} className="relative pl-8 md:pl-12">
              {/* Animated Timeline Line */}
              <svg
                className="absolute left-0 top-0 h-full w-8 md:w-12 pointer-events-none"
                viewBox="0 0 40 1000"
                preserveAspectRatio="none"
              >
                <defs>
                  <style>
                    {`
                      @keyframes drawLine {
                        from {
                          stroke-dashoffset: 1000;
                        }
                        to {
                          stroke-dashoffset: 0;
                        }
                      }
                      .timeline-line {
                        stroke: url(#timelineGradient);
                        stroke-width: 3;
                        fill: none;
                        stroke-dasharray: 1000;
                        stroke-linecap: round;
                        animation: ${isInView && !reduceMotion ? "drawLine 2s ease-in-out forwards" : "none"};
                      }
                    `}
                  </style>
                  <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#cc5b3b" stopOpacity="1" />
                    <stop offset="50%" stopColor="#f5b861" stopOpacity="1" />
                    <stop offset="100%" stopColor="#da8280" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path className="timeline-line" d="M 20 20 L 20 980" />
              </svg>

              {/* Timeline Nodes */}
              <div className="flex flex-col gap-12">
                {volunteerLogs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8, x: -20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: isInView ? i * 0.2 : 0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative"
                  >
                    {/* Timeline Node Dot */}
                    <motion.div
                      className="absolute -left-[26px] md:-left-[38px] top-6 w-6 h-6 md:w-8 md:h-8 rounded-full bg-background border-4 border-terracotta flex items-center justify-center shadow-lg z-10"
                      initial={reduceMotion ? { scale: 1 } : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.5,
                        delay: isInView ? i * 0.2 + 0.1 : 0,
                        ease: "easeOut",
                      }}
                    >
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-terracotta to-amber" />
                    </motion.div>

                    {/* Activity Card */}
                    <div className="p-8 rounded-[32px] bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.01] border border-border-color hover:border-foreground/15 hover:bg-foreground/[0.03] transition-all duration-300 group shadow-sm hover:shadow-md">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-3xl md:text-4xl">{log.icon}</span>
                        <div className="flex-1">
                          <span className="text-[10px] font-mono tracking-widest text-foreground-subtle uppercase font-bold group-hover:text-terracotta transition-colors">
                            {log.date}
                          </span>
                          <h4 className="text-base md:text-lg font-bold text-foreground leading-tight mt-2">
                            {log.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-foreground-subtle leading-relaxed text-justify">
                        {log.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                {/* Quote */}
                <p className="relative z-10 text-base md:text-lg font-sans italic font-semibold leading-relaxed mb-8 text-balance text-foreground/80 text-justify">
                  {test.text}
                </p>

                {/* Attribution */}
                <div className="relative z-10 border-t border-border-color pt-6 flex flex-col text-left">
                  <span className="text-sm font-bold text-foreground tracking-tight">
                    {test.author}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-foreground-subtle font-bold mt-1">
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
