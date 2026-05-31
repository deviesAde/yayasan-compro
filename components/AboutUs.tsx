"use client";

import { motion, useReducedMotion } from "motion/react";
import { Compass, Eye, ShieldCheck, Sparkle } from "@phosphor-icons/react";

export default function AboutUs() {
  const reduceMotion = useReducedMotion();

  const animationProps = (delay: number) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="about"
      className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-background border-t border-espresso/5 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Left Column: Editorial Content (6 Columns) */}
        <div className="lg:col-span-6 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <motion.div {...animationProps(0)} className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-terracotta uppercase font-bold">Our Heritage</span>
              <Sparkle weight="fill" className="text-amber w-3 h-3" />
            </motion.div>
            
            <motion.h2
              {...animationProps(0.1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-espresso font-sans leading-[1.1] text-balance"
            >
              A Journey of Hope and Sanctuary.
            </motion.h2>

            <motion.div
              {...animationProps(0.2)}
              className="text-base md:text-lg text-espresso/60 leading-relaxed flex flex-col gap-6 max-w-[55ch]"
            >
              <p>
                Founded in 2018, Miracle Leukemia was born when oncology volunteers witnessed the heavy burden placed on families traveling from remote regions for pediatric cancer treatments.
              </p>
              <p>
                Many families had to sleep in hospital hallways or exhaust all savings on temporary lodgings. We established our first Home Shelter to give children a warm bed, nutritious food, and a clean space to laugh and play between therapies.
              </p>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-terracotta/[0.03] border border-terracotta/10">
                <div className="mt-1 h-2 w-2 rounded-full bg-terracotta flex-shrink-0" />
                <p className="font-semibold text-terracotta italic leading-relaxed">
                  Today, our shelter operates as a hopeful sanctuary, ensuring that no young hero faces the chemotherapy battle without a loving support circle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Dynamic Blocks (6 Columns) */}
        <div className="lg:col-span-6 grid grid-cols-1 gap-6 relative">
          {/* Decorative Background Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-sage/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Vision Block */}
          <motion.div
            {...animationProps(0.3)}
            className="group p-10 rounded-[40px] bg-sage/10 border border-sage/5 relative overflow-hidden transition-all duration-500 hover:bg-sage/15"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-espresso/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sage/20 text-espresso flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                <Eye size={28} weight="fill" className="text-terracotta" />
              </div>
              <h3 className="text-xl font-bold text-espresso font-sans">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-espresso/60 leading-relaxed max-w-[40ch]">
                To build a supportive sanctuary where every child battling leukemia receives therapeutic housing, high-quality nutritional care, and robust emotional guidance.
              </p>
            </div>
          </motion.div>

          {/* Mission Block - Offset */}
          <motion.div
            {...animationProps(0.4)}
            className="group p-10 rounded-[40px] bg-rose/10 border border-rose/5 lg:-translate-x-12 relative overflow-hidden transition-all duration-500 hover:bg-rose/15"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-espresso/[0.02] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose/20 text-espresso flex items-center justify-center transition-transform duration-500 group-hover:-rotate-12">
                <Compass size={28} weight="fill" className="text-terracotta" />
              </div>
              <h3 className="text-xl font-bold text-espresso font-sans">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-espresso/60 leading-relaxed max-w-[40ch]">
                We manage clean home shelters, deliver specialized dietary milk kits, coordinate volunteers for ward visits, and provide cost-free support services to households.
              </p>
            </div>
          </motion.div>

          {/* Values Block */}
          <motion.div
            {...animationProps(0.5)}
            className="group p-10 rounded-[40px] bg-slate-blue/10 border border-slate-blue/5 relative overflow-hidden transition-all duration-500 hover:bg-slate-blue/15"
          >
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-blue/20 text-espresso flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <ShieldCheck size={28} weight="fill" className="text-terracotta" />
              </div>
              <h3 className="text-xl font-bold text-espresso font-sans text-balance">
                Organizational Integrity
              </h3>
              <p className="text-sm md:text-base text-espresso/60 leading-relaxed max-w-[40ch]">
                Our support is open to all patients without discrimination. We operate with complete financial transparency, publishing impact reports for our donors and partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
