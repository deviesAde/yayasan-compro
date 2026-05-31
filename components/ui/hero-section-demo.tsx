"use client";

import HeroSection from '@/components/ui/hero-section-9';
import { Heart, House, HandHeart } from "@phosphor-icons/react";

const HeroSectionDemo = () => {
  // Direct integration of the Miracle Leukemia brand identity and copy
  const heroData = {
    title: (
      <>
        Brave Hearts Deserve <br />
        <span className="text-terracotta relative inline-block mt-1">
          Bright Miracles
          <span className="absolute bottom-2.5 left-0 w-full h-[6px] bg-rose/30 -z-10 rounded-full" />
        </span>
      </>
    ),
    subtitle: 'We provide shelter, clinical nutrition, and emotional therapy for brave children battling leukemia. Join our hopeful mission.',
    actions: [
      {
        text: 'Donate Now',
        onClick: () => {
          window.location.href = '/donate';
        },
        variant: 'default' as const,
        className: 'font-semibold',
      },
      {
        text: 'Become Volunteer',
        onClick: () => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        },
        variant: 'outline' as const,
        className: 'font-semibold',
      },
    ],
    stats: [
      {
        value: '150+',
        label: 'Children Sheltered',
        icon: <House weight="fill" className="w-5 h-5 text-terracotta" />,
      },
      {
        value: '12,400+',
        label: 'Nutrition Packs',
        icon: <HandHeart weight="fill" className="w-5 h-5 text-amber" />,
      },
      {
        value: '100%',
        label: 'Direct Aid Impact',
        icon: <Heart weight="fill" className="w-5 h-5 text-rose" />,
      },
    ],
    images: [
      '/hero_child_smiling.png',
      '/shelter_home.png',
      '/nutrition_kits.png',
    ],
  };

  return (
    <div className="w-full bg-background">
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
      />
    </div>
  );
};

export default HeroSectionDemo;
