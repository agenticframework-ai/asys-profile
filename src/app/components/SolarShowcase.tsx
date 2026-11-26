'use client';

import React, { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const SHOWCASE_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
    alt: 'Rows of solar panels at a utility-scale solar plant',
  },
  {
    src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85',
    alt: 'Solar panels installed across open agricultural land',
  },
  {
    src: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1400&q=85',
    alt: 'Solar energy installation with rows of photovoltaic panels',
  },
];

export default function SolarShowcase() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % SHOWCASE_IMAGES.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      role="img"
      aria-label="Animated showcase of solar energy installations"
      className="relative h-[260px] overflow-hidden rounded-2xl bg-primary shadow-xl md:h-[340px]"
    >
      {SHOWCASE_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-all duration-1000 ${
            activeImage === index ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
          }`}
        >
          <AppImage
            src={image.src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-primary/10" />
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-primary/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md md:bottom-6 md:left-6">
        <Icon name="BoltIcon" size={16} className="text-accent" />
        Solar PV &amp; BESS
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-primary/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md md:right-6 md:top-6">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        Clean energy in motion
      </div>
    </div>
  );
}
