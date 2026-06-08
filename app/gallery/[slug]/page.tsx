"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkle, CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import { albums } from "@/lib/gallery-data";
import Navigation from "@/components/Navigation";
import ContactFooter from "@/components/ContactFooter";

export default function GalleryDetailPage() {
  const { slug } = useParams();
  const album = albums.find((a) => a.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null || !album) return;
    setLightboxIndex((lightboxIndex + 1) % album.images.length);
  }, [lightboxIndex, album]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null || !album) return;
    setLightboxIndex((lightboxIndex - 1 + album.images.length) % album.images.length);
  }, [lightboxIndex, album]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

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
              transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.8) }}
              className="relative aspect-square rounded-[32px] overflow-hidden border border-border-color shadow-sm group cursor-pointer"
              onClick={() => setLightboxIndex(i)}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Close lightbox"
            >
              <X size={24} weight="bold" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
              <span className="text-white text-xs font-mono font-bold tracking-widest">
                {lightboxIndex + 1} / {album.images.length}
              </span>
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Previous image"
            >
              <CaretLeft size={28} weight="bold" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Next image"
            >
              <CaretRight size={28} weight="bold" />
            </button>

            {/* Main Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={album.images[lightboxIndex].src}
                alt={album.images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 max-w-[80vw]">
              <p className="text-white text-sm font-medium text-center truncate">
                {album.images[lightboxIndex].caption || album.images[lightboxIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
