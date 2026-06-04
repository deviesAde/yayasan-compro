"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Heart, Users, House, HandHeart, Sparkle } from "@phosphor-icons/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Editorial Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none -z-10 select-none">
        <span className="text-[20vw] font-bold text-foreground leading-none uppercase tracking-tighter opacity-[0.03]">Hope</span>
      </div>
      
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-terracotta/[0.06] blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-sage/[0.07] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-slate-blue/[0.05] blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-rose/[0.05] blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-amber/[0.06] blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-center w-full relative z-10">
        {/* Left Column: Asymmetric Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-8 text-left lg:pr-12"
        >
          {/* Eyebrow: No em-dash, refined mono style */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-terracotta/30" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-terracotta uppercase font-bold">
              Befriend The Brave
            </span>
            <Sparkle weight="fill" className="text-amber w-3 h-3 animate-pulse" />
          </motion.div>

          {/* Headline: Max 2 lines, striking balance */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1] font-sans text-balance"
          >
            Brave Hearts deserve{" "}
            <span className="italic font-serif text-terracotta relative inline-block">
              Bright
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1, ease: "circOut" }}
                className="absolute -bottom-2 left-0 w-full h-[8px] bg-rose/20 -z-10 rounded-full" 
              />
            </span>{" "}
            Miracles.
          </motion.h1>

          {/* Subtext: max 20 words, airy spacing */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-[40ch] font-medium"
          >
            Providing sanctuary, specialized nutrition, and heart-led support for children battling leukemia.
          </motion.p>

          {/* CTAs: High contrast, tactile feedback */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row flex-wrap gap-5 items-center mt-4"
          >
            <Link
              href="/donate"
              className="group relative inline-flex items-center gap-3 justify-center h-14 px-8 text-sm font-bold uppercase tracking-widest text-cream bg-terracotta rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-terracotta/20 active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-foreground translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <Heart weight="fill" className="relative z-10 w-5 h-5 text-rose" />
              <span className="relative z-10">Donate Now</span>
            </Link>
            
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 justify-center h-14 px-8 text-sm font-bold uppercase tracking-widest text-foreground border-2 border-border-color rounded-full hover:bg-foreground hover:text-background active:scale-[0.98] transition-all duration-300"
            >
              <Users weight="bold" className="w-5 h-5" />
              Volunteer
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Dynamic Editorial Collage */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative h-[450px] md:h-[600px] w-full mt-12 lg:mt-0"
        >
          {/* Layered Frames */}
          <div className="absolute top-10 right-10 bottom-10 left-10 border border-border-color rounded-[40px] rotate-3 -z-10" />
          <div className="absolute top-4 right-4 bottom-4 left-4 bg-sage/10 rounded-[40px] -rotate-2 -z-10" />
          
          {/* Main Visual Frame */}
          <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl shadow-foreground/15 border border-border-color bg-background group">
            <Image
              src="/hero_child_smiling.png"
              alt="A smiling brave child painting with vibrant watercolors at the Miracle Leukemia shelter"
              fill
              priority
              sizes="(max-w-1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-[2s] group-hover:scale-110"
            />
            {/* Grain & Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating Aesthetic Labels (No em-dash) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-8 -left-6 bg-background/90 backdrop-blur-md border border-border-color p-5 rounded-[24px] shadow-xl flex items-center gap-4 group cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-background transition-colors duration-300">
              <House weight="fill" className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-foreground-subtle font-bold">Sanctuary</p>
              <p className="text-sm font-bold text-foreground mt-0.5">Hope Shelter Home</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -top-8 -right-6 bg-background/90 backdrop-blur-md border border-border-color p-5 rounded-[24px] shadow-xl flex items-center gap-4 group cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-foreground transition-colors duration-300">
              <HandHeart weight="fill" className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-foreground-subtle font-bold">Impact</p>
              <p className="text-sm font-bold text-foreground mt-0.5">100% Transparency</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

