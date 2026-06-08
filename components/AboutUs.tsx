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
      className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-background border-t border-border-color overflow-hidden"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans leading-[1.1] text-balance"
            >
              A Journey of Hope and Sanctuary.
            </motion.h2>

            <motion.div
              {...animationProps(0.2)}
              className="text-base md:text-lg text-foreground-subtle leading-relaxed flex flex-col gap-6 max-w-[55ch]"
            >
              <p>
                Founded in 2018, Miracle Leukemia began as TUNICA Charity Concert, initiated by dr. Muhammad Adib Dwitamma Putra to support children living with chronic and life-threatening illnesses. In 2019, dr. Amira Azra and dr. Faiza Al Khalifa joined the movement. Following the COVID-19 pandemic, the three founders transformed it into a sustainable organization dedicated to children with leukemia, cancer, and other chronic diseases.
              </p>
              <p>
                With the guidance of our mentor Dr. dr. Dian Puspita Sari, Sp.A(K) and Dr. Titin Hartini, S.E., M.Si. Along the way, we witnessed families traveling great distances for treatment, often sleeping in hospital hallways or exhausting their savings just to stay close to their children. Through awareness campaigns, fundraising initiatives, virtual runs, and solidarity movements, our mission continued to grow.
              </p>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-terracotta/[0.03] border border-terracotta/10">
                <div className="mt-1 h-2 w-2 rounded-full bg-terracotta flex-shrink-0" />
                <p className="font-semibold text-terracotta italic leading-relaxed">
                  Today, through Rumah Singgah Sehat Ceria, we provide a safe sanctuary where children and their families can find comfort, hope, and support. We also empower our young heroes through creative and educational activities, helping them develop life skills, learn entrepreneurship, and create handcrafted products that showcase their talents and generate meaningful opportunities. Today, our shelter ensures that no young hero faces the battle against cancer or chronic illness alone.
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
            className="group p-10 rounded-[40px] bg-sage/20 border border-sage/30 relative overflow-hidden transition-all duration-500 hover:bg-sage/30"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sage/20 text-foreground flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                <Eye size={28} weight="fill" className="text-sage" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-sans">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-foreground-subtle leading-relaxed max-w-[40ch]">
                To build a supportive sanctuary where every child battling leukemia, cancer, or chronic diseases receives safe housing, quality care, and compassionate support throughout their treatment journey.
              </p>
            </div>
          </motion.div>

          {/* Mission Block - Offset */}
          <motion.div
            {...animationProps(0.4)}
            className="group p-10 rounded-[40px] bg-rose/20 border border-rose/30 lg:-translate-x-12 relative overflow-hidden transition-all duration-500 hover:bg-rose/30"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-foreground/[0.02] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose/20 text-foreground flex items-center justify-center transition-transform duration-500 group-hover:-rotate-12">
                <Compass size={28} weight="fill" className="text-rose" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-sans">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-foreground-subtle leading-relaxed max-w-[40ch]">
                We provide safe home shelters, essential medical and nutritional support, educational and creative development programs, and compassionate care for children with leukemia, cancer, and chronic diseases. Through volunteer engagement, family assistance, and entrepreneurship initiatives, we empower our young heroes and their families throughout their treatment journey.
              </p>
            </div>
          </motion.div>

          {/* Values Block */}
          <motion.div
            {...animationProps(0.5)}
            className="group p-10 rounded-[40px] bg-slate-blue/20 border border-slate-blue/30 relative overflow-hidden transition-all duration-500 hover:bg-slate-blue/30"
          >
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-blue/20 text-foreground flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <ShieldCheck size={28} weight="fill" className="text-slate-blue" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-sans text-balance">
                Organizational Integrity
              </h3>
              <p className="text-sm md:text-base text-foreground-subtle leading-relaxed max-w-[40ch]">
                We serve children and families from all backgrounds with compassion, fairness, and respect. Guided by transparency and accountability, we ensure that every donation is managed responsibly and every impact is openly shared with our donors, partners, and community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
