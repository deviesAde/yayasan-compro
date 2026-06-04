"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Heart, CaretRight, Sparkle } from "@phosphor-icons/react";

export default function ActiveCampaigns() {
  const reduceMotion = useReducedMotion();

  const campaigns = [
    {
      title: "Rumah Singgah Ceria: A Home Away From Home",
      description: "Providing free housing, nutritional meals, and child play areas for patients undergoing chemotherapy far from home.",
      image: "/shelter_home.png",
      tag: "Shelter",
      accent: "bg-sage",
      hoverClass: "hover:shadow-sage/10 hover:border-sage/40",
      topBorder: "border-t-sage",
    },
    {
      title: "Nutrition & Care Kits for Young Heroes",
      description: "Delivering boxes filled with clinical milk powder, vitamins, healthy fruits, and toys to children during recovery phases.",
      image: "/nutrition_kits.png",
      tag: "Nutrition",
      accent: "bg-amber",
      hoverClass: "hover:shadow-amber/10 hover:border-amber/40",
      topBorder: "border-t-amber",
    },
    {
      title: "Brave Hearts: Life-Saving Medical Fund",
      description: "Financing emergency blood transfusions, medicines, and specialized diagnostic tests for families in financial need.",
      image: "/medical_support.png",
      tag: "Medical",
      accent: "bg-rose",
      hoverClass: "hover:shadow-rose/10 hover:border-rose/40",
      topBorder: "border-t-rose",
    },
  ];

  return (
    <section id="campaigns" className="w-full py-10 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-slate-blue rounded-[48px] py-24 px-8 md:px-16 shadow-xl shadow-slate-blue/10 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-espresso)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        {/* Section Header: Vertical Stack */}
        <div className="flex flex-col items-center text-center gap-5 mb-20 relative z-10">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <div className="h-px flex-1 bg-foreground/20 w-8" />
            <span className="text-foreground/70 text-xs font-bold tracking-[0.15em] uppercase font-mono">
              Active Campaigns
            </span>
            <div className="h-px flex-1 bg-foreground/20 w-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-sans text-balance max-w-[20ch]">
            Sustain Our Missions.
          </h2>
          <p className="text-foreground/75 text-sm md:text-base leading-relaxed max-w-[45ch] font-medium">
            Your ongoing contributions fuel our daily support structures, ensuring no child faces the battle alone.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {campaigns.map((camp, i) => (
            <motion.div
              key={i}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col bg-background rounded-[40px] border border-foreground/10 border-t-4 ${camp.topBorder} shadow-sm overflow-hidden group hover:shadow-2xl ${camp.hoverClass} transition-all duration-500`}
            >
              {/* Campaign Photo Slot */}
              <div className="relative w-full h-[280px] overflow-hidden">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-500" />
                <span className={`absolute top-6 left-6 inline-block px-4 py-1.5 text-[10px] font-mono tracking-widest font-bold text-foreground rounded-full uppercase shadow-sm ${camp.accent}`}>
                  {camp.tag}
                </span>
              </div>

              {/* Campaign Content */}
              <div className="p-10 flex flex-col flex-1 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Sparkle weight="fill" className="text-amber/40 w-3 h-3" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-subtle font-bold">Active Mission</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-terracotta transition-colors duration-300">
                    {camp.title}
                  </h3>
                  <p className="text-sm text-foreground-subtle leading-relaxed font-medium">
                    {camp.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-6">
                  <Link
                    href="/activity-log"
                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-foreground-subtle hover:text-terracotta transition-colors group/link"
                  >
                    View Activity Log <CaretRight weight="bold" className="transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  {/* Action Button (Tactile) */}
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center gap-3 w-full h-14 text-[13px] font-bold uppercase tracking-widest text-cream bg-foreground rounded-full hover:bg-terracotta active:scale-[0.98] transition-all duration-300 shadow-lg shadow-foreground/5"
                  >
                    <Heart weight="fill" className="w-5 h-5 text-rose" />
                    Donate to Mission
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
