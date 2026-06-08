"use client";

import { motion, useReducedMotion } from "motion/react";
import { HandHeart, UsersThree, Hospital, Sparkle } from "@phosphor-icons/react";

export default function ImpactStrip() {
  const reduceMotion = useReducedMotion();

  const stats = [
    {
      value: "1,200+",
      label: "Children supported with shelter & medical kits",
      icon: HandHeart,
      color: "text-terracotta",
    },
    {
      value: "100+",
      label: "Volunteers active in home & hospital care",
      icon: UsersThree,
      color: "text-slate-blue",
    },
    {
      value: "5",
      label: "Provinces represented among our patients (South Sumatra, Bangka Belitung, Jambi, Bengkulu, and Lampung)",
      icon: Hospital,
      color: "text-amber",
    },
  ];

  return (
    <section className="w-full py-10 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-sage text-foreground rounded-[48px] py-20 px-10 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start shadow-xl shadow-sage/10 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-espresso)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        
        {stats.map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={i}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="group flex flex-col items-start gap-6 relative z-10"
            >
              {/* Decorative side line for editorial feel */}
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-foreground/20 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700" />
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-foreground/10 border border-foreground/10 flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-cream">
                  <IconComponent className="w-7 h-7 text-foreground group-hover:text-cream transition-colors" weight="fill" />
                </div>
                {i === 0 && <Sparkle weight="fill" className="text-amber w-4 h-4 animate-spin-slow opacity-80" />}
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground font-sans">
                  {stat.value}
                </span>
                <span className="text-[13px] md:text-sm font-semibold tracking-wide uppercase text-foreground-muted leading-relaxed max-w-[28ch] font-mono">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
