"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "motion/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Refined transitions for the navbar
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 253, 248, 0)", "rgba(255, 253, 248, 0.85)"]
  );
  
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const borderBottom = useTransform(
    scrollY, 
    [0, 50], 
    ["rgba(36, 24, 22, 0)", "rgba(36, 24, 22, 0.08)"]
  );
  
  const navHeight = useTransform(scrollY, [0, 50], ["80px", "64px"]);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Programs", href: "/#programs" },
    { name: "Stories", href: "/#stories" },
    { name: "Activity Log", href: "/activity-log" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.nav
      style={{ 
        backgroundColor, 
        backdropFilter: backdropBlur,
        borderBottom,
        height: navHeight
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 w-full transition-shadow duration-300"
    >
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center transition-colors shadow-sm"
          >
            <Heart weight="fill" className="text-cream w-5.5 h-5.5" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-espresso leading-none">
              Miracle Leukemia
            </span>
            <span className="text-[9px] text-espresso/50 font-mono tracking-[0.2em] uppercase mt-1">
              Befriend the Brave
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold text-espresso/60 hover:text-terracotta transition-colors relative py-2 group uppercase tracking-widest"
            >
              {link.name}
              <motion.span 
                className="absolute bottom-1 left-0 w-full h-[1.5px] bg-terracotta origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25, ease: "circOut" }}
              />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center h-11 px-6 text-[13px] font-bold tracking-wider uppercase text-cream bg-espresso rounded-full hover:bg-terracotta hover:shadow-lg hover:shadow-terracotta/15 active:scale-[0.98] transition-all duration-300"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-espresso hover:text-terracotta transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-espresso/10 p-8 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-espresso/80 hover:text-terracotta transition-colors block uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full h-14 text-sm font-bold uppercase tracking-widest text-cream bg-espresso rounded-2xl hover:bg-terracotta active:scale-[0.98] transition-all duration-200 mt-4"
              >
                Donate Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
