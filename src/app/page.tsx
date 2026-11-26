import React from 'react';
import SiteShell from '@/components/SiteShell';
import HeroSection from './components/HeroSection';
import CapabilitySection from './components/CapabilitySection';
import LandingIntroSection from './components/LandingIntroSection';

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <HeroSection />
        <CapabilitySection />
        <LandingIntroSection />
      </main>
    </SiteShell>
  );
}