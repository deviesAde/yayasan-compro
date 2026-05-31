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
    },
    {
      title: "Nutrition & Care Kits for Young Heroes",
      description: "Delivering boxes filled with clinical milk powder, vitamins, healthy fruits, and toys to children during recovery phases.",
      image: "/nutrition_kits.png",
      tag: "Nutrition",
      accent: "bg-amber",
    },
    {
      title: "Brave Hearts: Life-Saving Medical Fund",
      description: "Financing emergency blood transfusions, medicines, and specialized diagnostic tests for families in financial need.",
      image: "/medical_support.png",
      tag: "Medical",
      accent: "bg-rose",
    },
  ];

  return (
    <section id="campaigns" className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-background">
      {/* Section Header: Vertical Stack */}
      <div className="flex flex-col items-center text-center gap-5 mb-20">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-espresso/10" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-espresso/40 uppercase font-bold">Ongoing Support</span>
          <div className="h-[1px] w-8 bg-espresso/10" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-espresso font-sans text-balance max-w-[20ch]">
          Sustain Our Missions.
        </h2>
        <p className="text-base md:text-lg text-espresso/60 leading-relaxed max-w-[60ch]">
          Your ongoing contributions fuel our daily support structures, ensuring no child faces the battle alone.
        </p>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {campaigns.map((camp, i) => (
          <motion.div
            key={i}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-background rounded-[40px] border border-espresso/5 shadow-sm overflow-hidden group hover:shadow-2xl hover:shadow-espresso/10 transition-all duration-500"
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
              <div className="absolute inset-0 bg-espresso/10 group-hover:bg-espresso/0 transition-colors duration-500" />
              <span className={`absolute top-6 left-6 inline-block px-4 py-1.5 text-[10px] font-mono tracking-widest font-bold text-espresso rounded-full uppercase shadow-sm ${camp.accent}`}>
                {camp.tag}
              </span>
            </div>

            {/* Campaign Content */}
            <div className="p-10 flex flex-col flex-1 gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Sparkle weight="fill" className="text-amber/40 w-3 h-3" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-espresso/30 font-bold">Active Mission</span>
                </div>
                <h3 className="text-2xl font-bold text-espresso leading-tight group-hover:text-terracotta transition-colors duration-300">
                  {camp.title}
                </h3>
                <p className="text-sm text-espresso/50 leading-relaxed font-medium">
                  {camp.description}
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <Link
                  href="/activity-log"
                  className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-espresso/40 hover:text-terracotta transition-colors group/link"
                >
                  View Activity Log <CaretRight weight="bold" className="transition-transform group-hover/link:translate-x-1" />
                </Link>

                {/* Action Button (Tactile) */}
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-3 w-full h-14 text-[13px] font-bold uppercase tracking-widest text-cream bg-espresso rounded-full hover:bg-terracotta active:scale-[0.98] transition-all duration-300 shadow-lg shadow-espresso/5"
                >
                  <Heart weight="fill" className="w-5 h-5 text-rose" />
                  Donate to Mission
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
