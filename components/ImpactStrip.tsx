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
      value: "300+",
      label: "Volunteers active in home & hospital care",
      icon: UsersThree,
      color: "text-slate-blue",
    },
    {
      value: "40+",
      label: "Hospital visits & medical runs conducted",
      icon: Hospital,
      color: "text-amber",
    },
  ];

  return (
    <section className="w-full border-y border-border-color py-20 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
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
              className="group flex flex-col items-start gap-6 relative"
            >
              {/* Decorative side line for editorial feel */}
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-border-color origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700" />
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-foreground/[0.02] border border-border-color flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-cream">
                  <IconComponent className={`w-7 h-7 ${stat.color} group-hover:text-cream transition-colors`} weight="fill" />
                </div>
                {i === 0 && <Sparkle weight="fill" className="text-amber w-4 h-4 animate-spin-slow opacity-40" />}
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground font-sans">
                  {stat.value}
                </span>
                <span className="text-[13px] md:text-sm font-semibold tracking-wide uppercase text-foreground-subtle leading-relaxed max-w-[28ch] font-mono">
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
