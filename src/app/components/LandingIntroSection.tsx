import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';

export default function LandingIntroSection() {
  return (
    <section className="surface-grid bg-background pb-8 pt-12 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <Reveal>
            <div className="relative h-[240px] overflow-hidden rounded-xl bg-secondary shadow-lg md:h-[300px]">
              <AppImage
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
                alt="Site engineers coordinating work on a construction project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 max-w-[250px] rounded-xl border border-white/15 bg-[#1d477f]/95 p-4 text-white shadow-xl backdrop-blur-sm md:bottom-5 md:left-5">
                <div className="flex items-center gap-2">
                  <Icon name="BoltIcon" size={16} className="text-accent" />
                  <p className="text-xs font-bold">Clean power engineering</p>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-white/75">
                  Rooftop and ground-mounted solar plants, designed around your energy needs.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-mono-label text-[10px] text-solar md:text-xs">Home</p>
            <h2 className="mt-2 text-2xl font-extrabold text-primary md:mt-3 md:text-[1.65rem]">
              Powering a Greener Future with Smart &amp; Sustainable Energy Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground md:mt-4">
              Build a cleaner, greener, and more energy-efficient future with ASYS. For the past 9+
              years, we have been committed to delivering innovative and reliable renewable energy
              solutions that help businesses and communities embrace sustainability. From
              consultation and planning to system design, installation, and maintenance, we provide
              comprehensive energy solutions tailored to your needs. Together, let&apos;s harness the
              power of clean energy, reduce carbon emissions, and create a sustainable tomorrow.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
