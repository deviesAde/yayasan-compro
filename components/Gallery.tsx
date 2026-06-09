"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Sparkle, Folder, ArrowRight } from "@phosphor-icons/react";
import { albums } from "@/lib/gallery-data";

export default function Gallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="gallery" className="w-full py-10 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-amber rounded-[48px] py-24 px-8 md:px-16 shadow-xl shadow-amber/10 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-espresso)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        {/* Header: Vertical Stack */}
        <div className="flex flex-col items-center text-center gap-5 mb-20 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-foreground/20" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-foreground/70 uppercase font-bold">Memory Albums</span>
            <div className="h-[1px] w-8 bg-foreground/20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-sans text-balance max-w-[20ch]">
            Stories in Every Folder.
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-[60ch] font-medium text-justify">
            Explore our journey through categorized albums. Each folder captures a unique chapter of joy, solidarity, and healing.
          </p>
        </div>

        {/* Interactive Folder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {(() => {
            const albumColors = [
              { bg: "bg-sage", text: "text-sage", border: "border-sage/20" },
              { bg: "bg-rose", text: "text-rose", border: "border-rose/20" },
              { bg: "bg-slate-blue", text: "text-slate-blue", border: "border-slate-blue/20" },
              { bg: "bg-terracotta", text: "text-terracotta", border: "border-terracotta/20" },
            ];
            return albums.map((album, i) => {
              const color = albumColors[i % albumColors.length];
              return (
                <Link key={album.slug} href={`/gallery/${album.slug}`}>
                  <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="group cursor-pointer"
                  >
                    {/* Folder Visual Stack */}
                    <div className="relative h-[300px] w-full mb-6">
                      {/* Back Plate (Folder Tab) */}
                      <div className={`absolute top-0 left-0 w-24 h-12 ${color.bg} opacity-30 group-hover:opacity-60 rounded-t-[20px] -translate-y-2 group-hover:-translate-y-3 transition-all duration-500`} />
                      
                      {/* Main Image Container (The "Contents") */}
                      <div className={`absolute inset-0 z-10 rounded-[32px] overflow-hidden border border-foreground/10 shadow-sm bg-background group-hover:-rotate-2 group-hover:-translate-y-2 transition-all duration-500 ease-out`}>
                         <Image
                          src={album.coverImage}
                          alt={album.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Scrim */}
                        <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />
                        
                        {/* Icon Overlay */}
                        <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center ${color.text} shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                          <Folder weight="fill" size={20} />
                        </div>
                      </div>

                      {/* Decorative Paper Peeking Out */}
                      <div className="absolute inset-x-4 -top-1 h-full bg-background/80 rounded-[32px] rotate-2 group-hover:rotate-4 transition-transform duration-500 border border-foreground/10 shadow-sm" />
                    </div>

                    {/* Album Info */}
                    <div className="flex flex-col gap-2 px-2">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-xl font-bold text-foreground font-sans group-hover:${color.text} transition-colors line-clamp-1`}>
                          {album.title}
                        </h3>
                        <ArrowRight size={18} className={`text-foreground-subtle group-hover:${color.text} group-hover:translate-x-1 transition-all`} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkle weight="fill" className={`text-terracotta w-3 h-3`} />
                        <span className="text-[10px] font-mono tracking-widest text-foreground-muted uppercase font-bold">
                          {album.images.length} Photos
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            });
          })()}
        </div>
      </div>
    </section>
  );
}
