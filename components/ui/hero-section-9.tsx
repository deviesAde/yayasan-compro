"use client";

import { motion } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

// Define the props for reusability
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('w-full overflow-hidden bg-background py-16 sm:py-24', className)}>
      {/* Decorative Warm Background Glows */}
      <div className="absolute top-0 right-0 w-[45%] h-[45%] rounded-full bg-rose/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[35%] h-[35%] rounded-full bg-sage/5 blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 max-w-[1400px]">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline / Eyebrow with custom warm-craft pulse indicator */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/10 border border-sage/25 text-[11px] font-mono tracking-wider text-terracotta uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta"></span>
              </span>
              #BefriendTheBrave
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-sans leading-[1.15]"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-base md:text-lg text-foreground/75 leading-relaxed" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button key={index} onClick={action.onClick} variant={action.variant} size="lg" className={action.className}>
                {action.text}
              </Button>
            ))}
          </motion.div>
          <motion.div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-terracotta">{stat.icon}</div>
                <div className="text-left">
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs font-medium text-foreground/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[400px] w-full sm:h-[500px] mt-8 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Warm Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-rose/20 blur-[2px]"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-2xl bg-amber/25 blur-[1px]"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '0.5s' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-8 w-8 rounded-full bg-sage/35"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '1s' }}
          />

          {/* Images with premium layered framing */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-background p-2 shadow-lg sm:h-64 sm:w-64 border border-border-color"
            style={{ transformOrigin: 'bottom center' }}
            variants={imageVariants}
          >
            <img src={images[0]} alt="Primary smiling brave child painting" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-background p-2 shadow-lg sm:h-56 sm:w-56 border border-border-color"
            style={{ transformOrigin: 'left center' }}
            variants={imageVariants}
          >
            <img src={images[1]} alt="Comfortable shelter environment" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-background p-2 shadow-lg sm:h-48 sm:w-48 border border-border-color"
            style={{ transformOrigin: 'top right' }}
            variants={imageVariants}
          >
            <img src={images[2]} alt="Preparing pediatric nutrition kits" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
