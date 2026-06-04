"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Navigation from "@/components/Navigation";
import ContactFooter from "@/components/ContactFooter";
import { CheckCircle, ShieldCheck, QrCode, Bank, UploadSimple, Sparkle, Heart } from "@phosphor-icons/react";

export default function DonatePage() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    method: "qris",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      const file = e.target.files[0];
      setTimeout(() => {
        setFileName(file.name);
        setIsUploading(false);
      }, 800);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const animationProps = (delay: number) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <Navigation />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-20 md:py-32">
        {/* Page Header: Vertical Stack */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 max-w-[65ch] mx-auto">
          <motion.div {...animationProps(0)} className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-[0.3em] text-terracotta uppercase font-bold">Sustain Hope</span>
            <Sparkle weight="fill" className="text-amber w-3 h-3" />
          </motion.div>
          <motion.h1 
            {...animationProps(0.1)}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-sans leading-tight text-balance"
          >
            Support the Brave Hearts.
          </motion.h1>
          <motion.p 
            {...animationProps(0.2)}
            className="text-base md:text-lg text-foreground/60 leading-relaxed font-medium"
          >
            100% of public donations directly fund home shelter accommodation, oncology nutrition packs, and emergency medical fees.
          </motion.p>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-[600px] mx-auto p-12 rounded-[40px] bg-sage/10 border border-sage/5 shadow-2xl shadow-foreground/10 text-center flex flex-col items-center gap-8"
          >
            <div className="w-20 h-20 rounded-full bg-sage flex items-center justify-center text-foreground relative">
               <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
               >
                 <CheckCircle size={40} weight="fill" />
               </motion.div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold text-foreground font-sans leading-tight">
                Thank You for Your Hope.
              </h2>
              <p className="text-base text-foreground/60 leading-relaxed font-medium">
                Our social care coordinators have received your donation details. We will verify the transaction and send the official tax receipt to <strong className="text-foreground">{formData.email}</strong> shortly.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center h-14 px-10 text-[13px] font-bold uppercase tracking-widest text-cream bg-foreground rounded-full hover:bg-terracotta active:scale-[0.98] transition-all duration-300"
            >
              Back to Sanctuary
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Donation Form (7 Columns) */}
            <motion.form 
              {...animationProps(0.3)}
              onSubmit={handleSubmit} 
              className="lg:col-span-7 p-10 md:p-12 rounded-[48px] bg-background border border-border-color shadow-2xl shadow-foreground/5 flex flex-col gap-10"
            >
              {/* Trust Badge */}
              <div className="flex items-start gap-4 p-6 rounded-[32px] bg-sage/10 border border-sage/5">
                <ShieldCheck size={28} className="text-terracotta mt-0.5 flex-shrink-0" weight="fill" />
                <div className="flex flex-col text-left gap-1">
                  <h3 className="text-sm font-bold text-foreground font-sans">
                    Secure and Licensed Support Channel
                  </h3>
                  <p className="text-xs text-foreground/50 leading-relaxed font-medium">
                    Authorized under Operational License 42A/SK-YAY/2018. Audited reports are published quarterly for transparency.
                  </p>
                </div>
              </div>

              {/* Step 1: Payment Method */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/30 font-bold text-left flex items-center gap-2">
                   <span className="w-6 h-[1px] bg-border-color" /> 01. Transfer Method
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label
                    className={`h-16 rounded-2xl border px-6 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                      formData.method === "qris"
                        ? "bg-amber/5 border-amber text-foreground shadow-md"
                        : "bg-foreground/[0.01] border-border-color text-foreground/50 hover:bg-foreground/[0.03] hover:border-foreground/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <QrCode size={22} weight="fill" className={formData.method === "qris" ? "text-amber" : "text-foreground/30"} />
                      <span className="text-[13px] font-bold uppercase tracking-wider">QRIS Instant Scan</span>
                    </div>
                    <input type="radio" name="method" value="qris" checked={formData.method === "qris"} onChange={handleInputChange} className="sr-only" />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.method === "qris" ? "border-amber bg-amber" : "border-foreground/20"}`}>
                      {formData.method === "qris" && <div className="w-2 h-2 rounded-full bg-background" />}
                    </div>
                  </label>

                  <label
                    className={`h-16 rounded-2xl border px-6 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                      formData.method === "bank"
                        ? "bg-slate-blue/5 border-slate-blue text-foreground shadow-md"
                        : "bg-foreground/[0.01] border-border-color text-foreground/50 hover:bg-foreground/[0.03] hover:border-foreground/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Bank size={22} weight="fill" className={formData.method === "bank" ? "text-slate-blue" : "text-foreground/30"} />
                      <span className="text-[13px] font-bold uppercase tracking-wider">Bank Transfer</span>
                    </div>
                    <input type="radio" name="method" value="bank" checked={formData.method === "bank"} onChange={handleInputChange} className="sr-only" />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.method === "bank" ? "border-slate-blue bg-slate-blue" : "border-foreground/20"}`}>
                      {formData.method === "bank" && <div className="w-2 h-2 rounded-full bg-background" />}
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 2: Donor Details */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/30 font-bold text-left flex items-center gap-2">
                   <span className="w-6 h-[1px] bg-border-color" /> 02. Donor Particulars
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5 text-left">
                    <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-foreground/40 ml-2">Full Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Sarah Iskandar" className="w-full h-14 px-6 rounded-2xl border border-border-color text-sm bg-background font-bold text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-terracotta focus:ring-4 focus:ring-terracotta/5 transition-all duration-300 shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-2.5 text-left">
                    <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-foreground/40 ml-2">Email Address</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="sarah@example.com" className="w-full h-14 px-6 rounded-2xl border border-border-color text-sm bg-background font-bold text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-terracotta focus:ring-4 focus:ring-terracotta/5 transition-all duration-300 shadow-sm" />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 text-left">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-foreground/40 ml-2">WhatsApp Number</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="081234567890" className="w-full h-14 px-6 rounded-2xl border border-border-color text-sm bg-background font-bold text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-terracotta focus:ring-4 focus:ring-terracotta/5 transition-all duration-300 shadow-sm" />
                  <span className="text-[9px] text-foreground/30 font-mono tracking-wider ml-2 font-bold uppercase">FOR SENDING TRANSACTION STATUS RECEIPTS</span>
                </div>
              </div>

              {/* Step 3: Receipt Upload */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/30 font-bold text-left flex items-center gap-2">
                   <span className="w-6 h-[1px] bg-border-color" /> 03. Proof of Transfer
                </span>
                <label className="relative w-full h-32 rounded-[32px] border border-dashed border-border-color bg-foreground/[0.01] hover:bg-foreground/[0.03] hover:border-terracotta transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer text-center group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-terracotta group-hover:text-cream transition-all">
                    <UploadSimple size={24} weight="bold" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">{isUploading ? "Uploading receipt..." : fileName || "Select transfer receipt photo"}</span>
                    <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-[0.2em]">JPEG, PNG, OR PDF UP TO 4MB</span>
                  </div>
                  <input type="file" accept="image/*,.pdf" onChange={handleFileUpload} className="sr-only" />
                </label>
              </div>

              <button type="submit" className="w-full h-16 inline-flex items-center justify-center gap-3 text-[13px] font-bold uppercase tracking-widest text-cream bg-foreground rounded-3xl hover:bg-terracotta hover:shadow-2xl hover:shadow-terracotta/20 active:scale-[0.98] transition-all duration-300 mt-4 cursor-pointer">
                <Heart weight="fill" className="text-rose w-5 h-5" />
                Confirm Support Mission
              </button>
            </motion.form>

            {/* Right Column: Payment Details (5 Columns) */}
            <motion.div 
              {...animationProps(0.4)}
              className="lg:col-span-5 flex flex-col gap-10"
            >
              {formData.method === "qris" ? (
                <div className="p-12 rounded-[48px] bg-background border border-border-color shadow-2xl shadow-foreground/5 flex flex-col items-center text-center gap-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-foreground/40 uppercase font-bold">Instant Scan Code</span>
                    <h3 className="text-2xl font-bold text-foreground font-sans">Official QRIS QR.</h3>
                  </div>
                  <div className="relative p-10 rounded-[40px] border border-border-color bg-background w-full aspect-square flex flex-col items-center justify-center shadow-inner group">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-foreground" fill="currentColor">
                      <path d="M0 0h30v30H0zm5 5v20h20V5zm5 5h10v10H10zm60-10h30v30H70zm5 5v20h20V5zm5 5h10v10H80zM0 70h30v30H0zm5 5v20h20V5zm5 5h10v10H10z" />
                      <path d="M40 5h5v5h-5zm10 0h5v10h-5zm10 5h5v5h-5zm0 10h15v5H60zm-20 5h10v5H40zm25 0h5v5h-5zm-25 10h5v5h-5zm15 0h10v5H50zm-10 10h5v10h-5zm15 5h5v5h-5zm10-5h5v5h-5zm-15 10h5v5h-5zm20 0h10v5H80zm-40 0h5v5h-5zm25-10h5v5h-5zm15 0h5v5h-5zm0-10h5v5h-5zm-10 0h5v5h-5zm10-10h5v5h-5z" />
                      <rect x="35" y="42" width="30" height="16" rx="4" fill="var(--color-terracotta)" />
                      <text x="50" y="52" fontSize="6" fontWeight="bold" fill="white" textAnchor="middle">QRIS</text>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-bold text-foreground tracking-tight">Miracle Leukemia Foundation</p>
                    <p className="text-[11px] text-foreground/40 font-mono font-bold tracking-widest uppercase">NMID: ID1029384756302</p>
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed font-medium">Scan using any mobile banking app or digital wallet to transfer instantly.</p>
                </div>
              ) : (
                <div className="p-12 rounded-[48px] bg-background border border-border-color shadow-2xl shadow-foreground/5 flex flex-col gap-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-blue/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-foreground/40 uppercase font-bold">Direct Transfer</span>
                    <h3 className="text-2xl font-bold text-foreground font-sans">Official Accounts.</h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 p-8 rounded-[32px] bg-foreground/[0.02] border border-border-color group hover:border-slate-blue/30 transition-all duration-300">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/30 font-bold group-hover:text-slate-blue transition-colors">BANK BCA</span>
                      <p className="text-2xl font-bold text-foreground tracking-tighter font-sans">845 520 2211</p>
                      <p className="text-xs font-bold text-foreground/60 uppercase tracking-wide">A.N. Miracle Leukemia Indonesia</p>
                    </div>
                    <div className="flex flex-col gap-2 p-8 rounded-[32px] bg-foreground/[0.02] border border-border-color group hover:border-slate-blue/30 transition-all duration-300">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/30 font-bold group-hover:text-slate-blue transition-colors">BANK MANDIRI</span>
                      <p className="text-2xl font-bold text-foreground tracking-tighter font-sans">118 000 9844 322</p>
                      <p className="text-xs font-bold text-foreground/60 uppercase tracking-wide">A.N. Miracle Leukemia Indonesia</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed font-medium">Ensure you save your deposit slip photo or screenshot and upload it in the form for verification.</p>
                </div>
              )}

              <div className="p-8 rounded-[32px] bg-amber/10 border border-amber/10 text-left flex items-start gap-4">
                <Sparkle weight="fill" className="text-amber w-6 h-6 mt-1" />
                <div className="flex flex-col gap-2">
                   <h4 className="text-xs font-bold text-foreground uppercase tracking-widest font-mono">Tax Information</h4>
                   <p className="text-xs text-foreground/60 leading-relaxed font-medium italic">Contributions above Rp 250,000 are eligible for income tax reductions under local finance ministry decree.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </main>

      <ContactFooter />
    </div>
  );
}
