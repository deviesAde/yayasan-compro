"use client";

import { motion, useReducedMotion } from "motion/react";
import Navigation from "@/components/Navigation";
import ContactFooter from "@/components/ContactFooter";
import { Sparkle, House, HandHeart, Hospital, BookOpen, Smiley } from "@phosphor-icons/react";

export default function ActivityLogPage() {
  const reduceMotion = useReducedMotion();

  const logs = [
    {
      date: "May 28, 2026",
      type: "Therapy",
      title: "Art Therapy and Watercolor Session",
      desc: "Ten children created hope banners and custom watercolor paintings during our weekly therapy block in the main activity hall. Art therapy helps them express emotions that are often hard to vocalize.",
      icon: Smiley,
      accent: "bg-sage/10 text-sage",
    },
    {
      date: "May 22, 2026",
      type: "Medical",
      title: "Pediatric Ward Distribution Run",
      desc: "Delivered forty nutritional kits and personalized care packages directly to oncology outpatient rooms at the central hospital. These kits include clinical milk, vitamins, and high-nutrition supplements.",
      icon: Hospital,
      accent: "bg-rose/10 text-rose",
    },
    {
      date: "May 15, 2026",
      type: "Education",
      title: "Bedside Tutoring and Reading Week",
      desc: "Our volunteer teachers conducted 12 hours of bedside tutoring for students currently undergoing intensive treatment, ensuring they don't fall behind in their primary education.",
      icon: BookOpen,
      accent: "bg-slate-blue/10 text-slate-blue",
    },
    {
      date: "May 08, 2026",
      type: "Shelter",
      title: "New Family Intake at Hope Shelter",
      desc: "Welcomed three new families from West Kalimantan who arrived for their children's first chemotherapy cycles. They are now comfortably settled in our sanctuary rooms.",
      icon: House,
      accent: "bg-amber/10 text-amber",
    },
    {
      date: "May 02, 2026",
      type: "Community",
      title: "Volunteer Coordination Meeting",
      desc: "Successfully onboarded 15 new volunteers for our 'Ward Buddy' program. These volunteers will provide emotional companionship to children during long hospital stays.",
      icon: HandHeart,
      accent: "bg-terracotta/10 text-terracotta",
    },
  ];

  const animationProps = (delay: number) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <Navigation />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-20 md:py-32">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 max-w-[70ch] mx-auto">
          <motion.div {...animationProps(0)} className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-[0.3em] text-foreground-subtle uppercase font-bold">Transparency</span>
            <Sparkle weight="fill" className="text-terracotta w-3 h-3" />
          </motion.div>
          <motion.h1 
            {...animationProps(0.1)}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-sans leading-tight text-balance"
          >
            Activity & Impact Log.
          </motion.h1>
          <motion.p 
            {...animationProps(0.2)}
            className="text-base md:text-lg text-foreground/60 leading-relaxed font-medium"
          >
            A chronological record of our daily missions, field activities, and support deliveries. We believe in complete transparency of impact.
          </motion.p>
        </div>

        {/* Timeline List */}
        <div className="max-w-[1000px] mx-auto flex flex-col gap-12 relative">
          {/* Central Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border-color -translate-x-1/2 hidden md:block" />
          
          {logs.map((log, i) => {
            const Icon = log.icon;
            const isEven = i % 2 === 0;
            
            return (
              <motion.div
                key={i}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-[45%] ${isEven ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                  <div className={`p-8 rounded-[40px] bg-background border border-border-color shadow-xl shadow-foreground/5 hover:border-border-color-strong transition-all duration-300 group`}>
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? "" : "md:flex-row-reverse"}`}>
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full ${log.accent}`}>
                        {log.type}
                      </span>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-foreground-subtle uppercase">
                        {log.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-sans group-hover:text-terracotta transition-colors">
                      {log.title}
                    </h3>
                    <p className="text-sm text-foreground/50 leading-relaxed font-medium">
                      {log.desc}
                    </p>
                  </div>
                </div>

                {/* Central Icon */}
                <div className="absolute left-[39px] md:left-1/2 top-0 md:top-1/2 w-12 h-12 rounded-full bg-background border border-border-color flex items-center justify-center -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-lg">
                  <Icon size={24} weight="fill" className="text-terracotta" />
                </div>

                {/* Empty Side for Spacing */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
