"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Envelope, WhatsappLogo, InstagramLogo, MapPin, CaretRight, Sparkle } from "@phosphor-icons/react";

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
    <footer id="contact" className="w-full py-10 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-terracotta text-cream rounded-[48px] pt-24 pb-12 px-8 md:px-16 shadow-xl shadow-terracotta/10 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-cream)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        {/* Contact & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 relative z-10">
          {/* Left Column: Get in Touch (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.3em] text-cream/60 uppercase font-bold text-left">Connect</span>
                <Sparkle weight="fill" className="text-amber w-3 h-3 animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream font-sans">
                Reach Our Shelter.
              </h2>
              <p className="text-base md:text-lg text-cream/80 leading-relaxed max-w-[45ch] font-medium">
                Have questions about donating, volunteering, or seeking shelter placement? Get in touch with our social care coordinators.
              </p>
            </div>

            {/* Social Links Rows */}
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-[24px] bg-cream/12 border border-cream/20 hover:border-amber/40 hover:bg-cream/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-[18px] bg-cream border border-cream/10 flex items-center justify-center shadow-sm group-hover:bg-amber group-hover:text-terracotta transition-all duration-300">
                      <IconComponent className={`w-6 h-6 ${social.color} group-hover:text-terracotta transition-colors`} weight="fill" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-cream/60 font-bold">
                        {social.name}
                      </span>
                      <span className="text-base font-bold text-cream group-hover:text-amber transition-colors">
                        {social.label}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Physical Address */}
            <div className="flex gap-4 items-start p-6 rounded-[32px] bg-cream/20 border border-cream/10 group hover:bg-cream/25 transition-all duration-300">
              <div className="p-3 rounded-2xl bg-cream/20 text-cream group-hover:scale-110 transition-transform">
                <MapPin size={24} weight="fill" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cream/60 font-bold">
                  Sanctuary Location
                </span>
                <p className="text-sm md:text-base font-bold text-cream mt-2 leading-relaxed">
                  Jalan Cempaka Putih Raya No. 42A, Jakarta Pusat, DKI Jakarta 10510
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Map Location Card */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative w-full h-[450px] md:h-[550px] rounded-[48px] overflow-hidden border border-cream/20 bg-cream/12 flex flex-col items-center justify-center p-10 shadow-2xl group">
              {/* Background Grid Representation */}
              <div className="absolute inset-0 bg-[radial-gradient(var(--color-cream)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06]" />
              <div className="absolute inset-0 bg-gradient-to-br from-cream/5 to-sage/5 opacity-50" />
              
              <div className="absolute inset-x-0 h-[1px] bg-cream/10 top-[45%] transform -rotate-2" />
              <div className="absolute inset-x-0 h-[2px] bg-cream/10 top-[65%] transform rotate-3" />
              <div className="absolute inset-y-0 w-[1px] bg-cream/10 left-[35%] transform rotate-6" />
              <div className="absolute inset-y-0 w-[2px] bg-cream/10 left-[60%] transform -rotate-12" />

              {/* Floating Location Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 p-10 rounded-[40px] bg-background border border-foreground/10 max-w-[400px] shadow-2xl shadow-espresso/20 flex flex-col items-center text-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-rose flex items-center justify-center relative shadow-lg">
                  <motion.span
                    animate={reduceMotion ? {} : { scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-rose/60"
                  />
                  <MapPin size={32} className="text-foreground relative z-10" weight="fill" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-foreground font-sans">
                    Miracle Home Shelter
                  </h3>
                  <p className="text-sm text-foreground-subtle leading-relaxed font-medium">
                    Located within 5 minutes driving distance from Dr. Cipto Mangunkusumo Oncology Hospital.
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 h-12 rounded-full bg-foreground text-background hover:bg-terracotta hover:text-cream hover:shadow-lg hover:shadow-terracotta/20 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
                >
                  Open Google Maps
                  <CaretRight size={14} weight="bold" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Copyright and Navigation Bar */}
        <div className="border-t border-cream/15 pt-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {/* Brand Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="relative w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                style={{ backgroundColor: "#CC5C3D" }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1.5">
                  <div className="relative h-[18px] w-[58px]">
                    <Image
                      src="/logo1.png"
                      alt="Miracle"
                      fill
                      className="object-contain object-left brightness-0 invert"
                    />
                  </div>
                  <span className="font-sans font-bold text-base text-cream tracking-tight leading-none">
                    Leukemia
                  </span>
                </div>
                <span className="text-[9px] text-cream/60 font-mono tracking-[0.2em] uppercase mt-1">
                  Befriend the Brave
                </span>
              </div>
            </Link>
            <p className="text-[10px] text-cream/60 font-mono tracking-wide max-w-[32ch] uppercase font-bold">
              Registered Pediatric Cancer Non-Profit. License No. 42A/SK-YAY/2018.
            </p>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70 hover:text-amber transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copy note */}
          <div className="text-[10px] text-cream/50 font-mono tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} Miracle Leukemia.
          </div>
        </div>
      </div>
    </footer>
  );
}
