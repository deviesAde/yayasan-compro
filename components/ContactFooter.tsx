"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Envelope, WhatsappLogo, InstagramLogo, MapPin, Heart, CaretRight, Sparkle } from "@phosphor-icons/react";

export default function ContactFooter() {
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    {
      name: "WhatsApp Care Line",
      href: "https://wa.me/628123456789",
      icon: WhatsappLogo,
      color: "text-[#25D366]",
      label: "+62 812-3456-789",
    },
    {
      name: "Instagram Profile",
      href: "https://instagram.com/miracleleukemia",
      icon: InstagramLogo,
      color: "text-[#E1306C]",
      label: "@miracleleukemia",
    },
    {
      name: "Official Email",
      href: "mailto:hello@miracleleukemia.org",
      icon: Envelope,
      color: "text-slate-blue",
      label: "hello@miracleleukemia.org",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "Programs", href: "/#programs" },
    { name: "Brave Stories", href: "/#stories" },
    { name: "Activity Log", href: "/activity-log" },
    { name: "Photo Gallery", href: "/#gallery" },
    { name: "Donate Care", href: "/donate" },
  ];

  return (
    <footer id="contact" className="w-full bg-background border-t border-espresso/10 pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      {/* Contact & Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
        {/* Left Column: Get in Touch (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-espresso/40 uppercase font-bold text-left">Connect</span>
              <Sparkle weight="fill" className="text-terracotta w-3 h-3" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-espresso font-sans">
              Reach Our Shelter.
            </h2>
            <p className="text-base md:text-lg text-espresso/60 leading-relaxed max-w-[45ch]">
              Have questions about donating, volunteering, or seeking shelter placement? Get in touch with our social care coordinators.
            </p>
          </div>

          {/* Social Links Rows (Refined Materiality) */}
          <div className="flex flex-col gap-4">
            {socialLinks.map((social, i) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-[24px] bg-espresso/[0.02] border border-espresso/5 hover:border-terracotta/20 hover:bg-terracotta/[0.03] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-[18px] bg-background border border-espresso/5 flex items-center justify-center shadow-sm group-hover:bg-terracotta group-hover:text-cream transition-all duration-300">
                    <IconComponent className={`w-6 h-6 ${social.color} group-hover:text-cream transition-colors`} weight="fill" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-espresso/30 font-bold">
                      {social.name}
                    </span>
                    <span className="text-base font-bold text-espresso group-hover:text-terracotta transition-colors">
                      {social.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Physical Address (Editorial Card) */}
          <div className="flex gap-4 items-start p-6 rounded-[32px] bg-sage/10 border border-sage/5 group hover:bg-sage/15 transition-all duration-300">
            <div className="p-3 rounded-2xl bg-sage/20 text-terracotta group-hover:scale-110 transition-transform">
              <MapPin size={24} weight="fill" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-espresso/40 font-bold">
                Sanctuary Location
              </span>
              <p className="text-sm md:text-base font-bold text-espresso mt-2 leading-relaxed">
                Jalan Cempaka Putih Raya No. 42A, Jakarta Pusat, DKI Jakarta 10510
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Map Placeholder (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="relative w-full h-[450px] md:h-[550px] rounded-[48px] overflow-hidden border border-espresso/10 bg-background flex flex-col items-center justify-center p-10 shadow-2xl shadow-espresso/10 group">
            {/* Background Grid Representation */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-terracotta)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08]" />
            <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-sage/5 opacity-50" />
            
            <div className="absolute inset-x-0 h-[1px] bg-espresso/5 top-[45%] transform -rotate-2" />
            <div className="absolute inset-x-0 h-[2px] bg-espresso/5 top-[65%] transform rotate-3" />
            <div className="absolute inset-y-0 w-[1px] bg-espresso/5 left-[35%] transform rotate-6" />
            <div className="absolute inset-y-0 w-[2px] bg-espresso/5 left-[60%] transform -rotate-12" />

            {/* Floating Location Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 p-10 rounded-[40px] bg-background/90 backdrop-blur-xl border border-espresso/10 max-w-[400px] shadow-2xl shadow-espresso/20 flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-rose flex items-center justify-center relative shadow-lg">
                <motion.span
                  animate={reduceMotion ? {} : { scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-rose/60"
                />
                <MapPin size={32} className="text-espresso relative z-10" weight="fill" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-espresso font-sans">
                  Miracle Home Shelter
                </h3>
                <p className="text-sm text-espresso/50 leading-relaxed font-medium">
                  Located within 5 minutes driving distance from Dr. Cipto Mangunkusumo Oncology Hospital.
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 h-12 rounded-full bg-espresso text-cream hover:bg-terracotta hover:shadow-lg hover:shadow-terracotta/20 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
              >
                Open Google Maps
                <CaretRight size={14} weight="bold" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Copyright and Navigation Bar */}
      <div className="border-t border-espresso/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Brand Details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-rose flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart weight="fill" className="text-espresso w-4 h-4" />
            </div>
            <span className="font-sans font-bold text-base text-espresso tracking-tight">
              Miracle Leukemia Foundation
            </span>
          </Link>
          <p className="text-[10px] text-espresso/40 font-mono tracking-wide max-w-[32ch] uppercase font-bold">
            Registered Pediatric Cancer Non-Profit. License No. 42A/SK-YAY/2018.
          </p>
        </div>

        {/* Quick Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {quickLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-espresso/40 hover:text-terracotta transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copy note */}
        <div className="text-[10px] text-espresso/30 font-mono tracking-widest uppercase font-bold">
          © {new Date().getFullYear()} Miracle Leukemia.
        </div>
      </div>
    </footer>
  );
}
