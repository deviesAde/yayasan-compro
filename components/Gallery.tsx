"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Sparkle } from "@phosphor-icons/react";

export default function Gallery() {
  const reduceMotion = useReducedMotion();

  const galleryItems = [
    {
      src: "/hero_child_smiling.png",
      alt: "A child smiling and painting watercolor artwork at the shelter",
      span: "md:col-span-2 md:row-span-2 h-[500px]",
      caption: "Creative Arts and Painting Sessions",
    },
    {
      src: "/shelter_home.png",
      alt: "A warm and bright children’s play area inside our home shelter",
      span: "md:col-span-1 h-[240px]",
      caption: "Rumah Singgah Ceria Playroom",
    },
    {
      src: "/education_program.png",
      alt: "A child learning and tutoring with colorful drawing books",
      span: "md:col-span-1 h-[240px]",
      caption: "Weekly Classroom Learning",
    },
    {
      src: "/emotional_support.png",
      alt: "Volunteers playing guitar and singing songs with children in a circle",
      span: "md:col-span-2 h-[260px]",
      caption: "Emotional Healing and Music Therapy",
    },
    {
      src: "/nutrition_kits.png",
      alt: "Organizing pediatric milk formulas and nutrition boxes",
      span: "md:col-span-1 h-[260px]",
      caption: "Nutritional Care Kit Preparation",
    },
  ];

  return (
    <section id="gallery" className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-background border-t border-espresso/5">
      {/* Header: Vertical Stack */}
      <div className="flex flex-col items-center text-center gap-5 mb-20">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-espresso/10" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-espresso/40 uppercase font-bold">Moments of Joy</span>
          <div className="h-[1px] w-8 bg-espresso/10" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-espresso font-sans text-balance max-w-[20ch]">
          Healing Through Creativity.
        </h2>
        <p className="text-base md:text-lg text-espresso/60 leading-relaxed max-w-[60ch]">
          A glimpse into the daily activities, therapeutic play, and caring circles that keep hope alive in our shelter programs.
        </p>
      </div>

      {/* Asymmetric Grid (Refined Materiality) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            className={`relative rounded-[40px] overflow-hidden border border-espresso/5 shadow-sm group ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            {/* Scrim & Caption Overlay */}
            <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                   <Sparkle weight="fill" className="text-amber w-3 h-3" />
                   <span className="text-[10px] font-mono tracking-widest text-cream uppercase font-bold">Activity</span>
                </div>
                <h3 className="text-lg font-bold text-cream font-sans leading-tight">
                  {item.caption}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
