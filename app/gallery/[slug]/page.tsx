"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkle } from "@phosphor-icons/react";
import { albums } from "@/lib/gallery-data";
import Navigation from "@/components/Navigation";
import ContactFooter from "@/components/ContactFooter";

export default function GalleryDetailPage() {
  const { slug } = useParams();
  const album = albums.find((a) => a.slug === slug);

  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Album not found</h1>
          <Link href="/#gallery" className="text-terracotta hover:underline">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/#gallery"
            className="inline-flex items-center gap-2 text-foreground-subtle hover:text-terracotta transition-colors mb-8 group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-mono font-bold uppercase tracking-widest">Back to Gallery</span>
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Sparkle weight="fill" className="text-terracotta w-4 h-4" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-foreground-subtle uppercase font-bold">Album Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-sans">
              {album.title}
            </h1>
            <p className="text-lg text-foreground/60 max-w-[60ch] leading-relaxed">
              {album.description}
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-square rounded-[32px] overflow-hidden border border-border-color shadow-sm group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-cream text-sm font-medium">{image.caption || image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
