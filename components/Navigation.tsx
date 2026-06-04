"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, List, X, Moon, Sun } from "@phosphor-icons/react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { scrollY } = useScroll();

  // Initialize theme from data-theme attribute
  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme as "light" | "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem("ml-theme", newTheme);
    } catch (e) {}
  };

  // Refined transitions for the navbar — using CSS variables for theme awareness
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    [
      "rgba(254, 244, 173, 0)",
      "rgba(254, 244, 173, 0.95)",
    ]
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
        height: navHeight,
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
            <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-foreground leading-none">
              Miracle Leukemia
            </span>
            <span className="text-[9px] text-foreground-subtle font-mono tracking-[0.2em] uppercase mt-1">
              Befriend the Brave
            </span>
          </div>
        </Link>

        {/* Desktop Links + Actions */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold text-foreground-muted hover:text-terracotta transition-colors relative py-2 group uppercase tracking-widest"
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

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-foreground/[0.05] border border-border-color flex items-center justify-center text-foreground-muted hover:text-terracotta hover:border-terracotta/30 hover:bg-terracotta/5 transition-all duration-300"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon size={18} weight="fill" />
            ) : (
              <Sun size={18} weight="fill" />
            )}
          </motion.button>

          {/* Action Button */}
          <Link
            href="/donate"
            className="inline-flex items-center justify-center h-11 px-6 text-[13px] font-bold tracking-wider uppercase text-background bg-foreground rounded-full hover:bg-terracotta hover:text-cream hover:shadow-lg hover:shadow-terracotta/20 active:scale-[0.98] transition-all duration-300"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle + Theme */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-foreground/[0.05] border border-border-color flex items-center justify-center text-foreground-muted hover:text-terracotta transition-all"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon size={16} weight="fill" />
            ) : (
              <Sun size={16} weight="fill" />
            )}
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground-muted hover:text-terracotta transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border-color p-8 flex flex-col gap-6 shadow-2xl md:hidden"
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
                  className="text-lg font-bold text-foreground-muted hover:text-terracotta transition-colors block uppercase tracking-wider"
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
                className="inline-flex items-center justify-center w-full h-14 text-sm font-bold uppercase tracking-widest text-background bg-foreground rounded-2xl hover:bg-terracotta hover:text-cream active:scale-[0.98] transition-all duration-200 mt-4"
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
