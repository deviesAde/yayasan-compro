"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Envelope, WhatsappLogo, InstagramLogo, MapPin, CaretRight, Sparkle } from "@phosphor-icons/react";

export default function ContactFooter() {
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    {
      name: "Instagram Profile",
      href: "https://instagram.com/miracleukemia",
      icon: InstagramLogo,
      color: "text-[#E1306C]",
      label: "@miracleukemia",
    },
    {
      name: "Email Address",
      href: "mailto:miracleukemia@gmail.com",
      icon: Envelope,
      color: "text-[#EA4335]",
      label: "miracleukemia@gmail.com",
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
                <p className="text-sm md:text-base font-bold text-cream mt-2 leading-relaxed text-balance">
                  Jalan Lb. Rejo No. 1083, Sekip Jaya, Kemuning, Palembang, Sumatera Selatan 30114
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Map Location Card */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative w-full h-[450px] md:h-[550px] rounded-[48px] overflow-hidden border border-cream/20 bg-cream/12 shadow-2xl group">
              {/* Google Maps Iframe */}
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=Rumah+Sehat+Ceria+Yayasan+Kanker+Anak+Sumsel,+Jl.+Lb.+Rejo+No.1083,+Sekip+Jaya,+Kemuning,+Palembang+City,+South+Sumatra+30114&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale-[40%] contrast-[1.05] brightness-[0.95] saturate-[0.9] group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>

              {/* Modern Clickable Floating Location Card */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-[360px] p-6 md:p-8 rounded-[32px] bg-background/90 backdrop-blur-xl border border-foreground/10 shadow-2xl flex flex-col gap-4 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-terracotta flex items-center justify-center relative shadow-lg flex-shrink-0">
                    <motion.span
                      animate={reduceMotion ? {} : { scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-2xl bg-terracotta/60"
                    />
                    <MapPin size={24} className="text-cream relative z-10" weight="fill" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-foreground font-sans leading-snug">
                      Miracle Palembang Shelter
                    </h3>
                    <p className="text-[11px] text-[#cb5d3e] leading-tight font-semibold">
                      Rumah Sehat Ceria Yayasan Kanker Anak Sumsel
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-foreground/10 w-full" />

                <p className="text-xs text-[#cb5d3e] leading-relaxed font-medium">
                  Jl. Lb. Rejo No.1083, Sekip Jaya, Kemuning, Palembang City, South Sumatra 30114
                </p>

                <a
                  href="https://maps.app.goo.gl/bWsxNeWXM42QvCXR9?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-2xl bg-foreground text-background hover:bg-terracotta hover:text-cream text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-terracotta/25 active:scale-[0.98]"
                >
                  Get Directions
                  <CaretRight size={12} weight="bold" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Copyright and Navigation Bar */}
        <div className="border-t border-cream/15 pt-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {/* Brand Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <div
                  className="relative w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  style={{ backgroundColor: "#CC5C3D" }}
                >
                  <Image
                    src="/logoo.png"
                    alt="Logo"
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <div className="relative h-[16px] w-[58px]">
                    <Image
                      src="/logo1.png"
                      alt="Miracle"
                      fill
                      className="object-contain object-left brightness-0 invert"
                    />
                  </div>
                  <span className="text-[8px] text-cream/60 font-mono tracking-[0.2em] uppercase mt-1">
                    Befriend the Brave
                  </span>
                </div>
              </Link>

              {/* Vertical Divider */}
              <div className="h-6 w-[1px] bg-cream/20 self-center mx-0.5" />

              {/* Co-brand Logo */}
              <div className="relative h-[28px] w-[37px] opacity-90 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/logo2.png"
                  alt="Secondary Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
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
