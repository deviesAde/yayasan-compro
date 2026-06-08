"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BookOpen, Heartbeat, House, HandCoins, Smiley, Orange, Sparkle } from "@phosphor-icons/react";

export default function Programs() {
  const reduceMotion = useReducedMotion();

  const programs = [
    {
      id: 1,
      title: "Home Shelter: Rumah Singgah Sehat Ceria",
      desc: "Free temporary shelter near oncology hospitals for child patients undergoing treatments away from home.",
      metric: "80+ kids sheltered yearly",
      link: "/#donate",
      type: "image",
      src: "/2024/R0011417.webp",
      span: "lg:col-span-2 h-[400px]",
      icon: House,
      accent: "text-amber",
    },
    {
      id: 2,
      title: "Patient Support & Care Journey",
      desc: "Emergency transport and clinical coordination for families in crisis.",
      metric: "420+ journeys supported",
      link: "/#donate",
      type: "tint",
      bgClass: "bg-background hover:bg-background/95 border border-foreground/10 shadow-sm",
      span: "lg:col-span-1 h-[400px]",
      icon: Heartbeat,
      accent: "text-rose",
    },
    {
      id: 3,
      title: "Hopeful Education Program",
      desc: "Bedside tutoring and art therapies to keep children learning.",
      metric: "150+ students enrolled",
      link: "/#donate",
      type: "image",
      src: "/Cancer%20Day%202026/IMG_4987.webp",
      span: "lg:col-span-1 h-[360px]",
      icon: BookOpen,
      accent: "text-amber",
    },
    {
      id: 4,
      title: "Community Fundraising Operations",
      desc: "Partnering with transparent networks to fuel long-term assistance.",
      metric: "Rp 500M+ medical aid raised",
      link: "/#donate",
      type: "tint",
      bgClass: "bg-sage hover:bg-sage/90 border border-foreground/10 shadow-sm",
      span: "lg:col-span-2 h-[360px]",
      icon: HandCoins,
      accent: "text-terracotta",
    },
    {
      id: 5,
      title: "Parent & Child Emotional Support",
      desc: "Professional psychological guidance and interactive music circles.",
      metric: "650+ counseling sessions",
      link: "/#donate",
      type: "image",
      src: "/Tunica%20concert%202025/IMG_0087.webp",
      span: "lg:col-span-2 h-[360px]",
      icon: Smiley,
      accent: "text-amber",
    },
    {
      id: 6,
      title: "High-Quality Nutrition Aid",
      desc: "Specialized pediatric formulas and nutrition supplements delivered monthly.",
      metric: "350+ care packages monthly",
      link: "/#donate",
      type: "tint",
      bgClass: "bg-amber hover:bg-amber/90 border border-foreground/10 shadow-sm",
      span: "lg:col-span-1 h-[360px]",
      icon: Orange,
      accent: "text-slate-blue",
    },
  ];

  return (
    <section id="programs" className="w-full py-10 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-rose rounded-[48px] py-24 px-8 md:px-16 shadow-xl shadow-rose/10 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-espresso)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        {/* Header: Vertical Stack */}
        <div className="flex flex-col items-center text-center gap-5 mb-20 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-foreground/20" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-foreground/70 uppercase font-bold">What We Do</span>
            <div className="h-[1px] w-8 bg-foreground/20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-sans text-balance max-w-[20ch]">
            Core Support Programs
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-[60ch] font-medium">
            Comprehensive support programs providing safe shelter, medical assistance, nutritional support, educational enrichment, creative development, entrepreneurship training, and emotional care for children with leukemia, cancer, and chronic diseases.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          {programs.map((prog, i) => {
            const IconComponent = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className={`relative rounded-[32px] overflow-hidden shadow-sm flex flex-col justify-end group transition-all duration-500 hover:shadow-2xl hover:shadow-foreground/10 ${prog.span}`}
              >
                {/* Type 1: Image Background Card */}
                {prog.type === "image" && prog.src && (
                  <>
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={prog.src}
                        alt={prog.title}
                        fill
                        sizes="(max-w-1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Shadow overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808]/90 via-[#0a0808]/30 to-transparent opacity-80" />
                    </div>
                    <div className="relative z-10 p-10 flex flex-col justify-between h-full text-cream">
                      {/* Icon container */}
                      <div className="w-12 h-12 rounded-[20px] bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-cream/20">
                        <IconComponent size={24} weight="fill" className="text-cream" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono tracking-widest text-amber uppercase font-bold">
                            {prog.metric}
                          </span>
                          <Sparkle weight="fill" className="text-amber/40 w-3 h-3" />
                        </div>
                        <h3 className="text-2xl font-bold font-sans text-cream leading-tight">
                          {prog.title}
                        </h3>
                        <p className="text-sm text-cream/70 leading-relaxed max-w-[40ch]">
                          {prog.desc}
                        </p>
                        <Link
                          href="/activity-log"
                          className="inline-flex items-center gap-2 mt-2 text-xs font-bold uppercase tracking-widest text-amber hover:text-cream transition-colors group/link"
                        >
                          Read Activity Log
                          <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </>
                )}

                {/* Type 2: Solid Tint Card */}
                {prog.type === "tint" && (
                  <div className={`p-10 flex flex-col justify-between h-full text-foreground transition-colors duration-500 ${prog.bgClass}`}>
                    <div className="w-12 h-12 rounded-[20px] bg-foreground/[0.02] border border-foreground/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-foreground group-hover:text-background">
                      <IconComponent size={24} weight="fill" className={`${prog.accent} group-hover:text-background transition-colors`} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${prog.accent}`}>
                        {prog.metric}
                      </span>
                      <h3 className="text-2xl font-bold font-sans text-foreground leading-tight">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-foreground-subtle leading-relaxed max-w-[40ch]">
                        {prog.desc}
                      </p>
                      <Link
                        href="/activity-log"
                        className="inline-flex items-center gap-2 mt-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-terracotta transition-colors group/link"
                      >
                        Read Impact Report
                        <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

