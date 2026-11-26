'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const HERO_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=85',
    alt: 'Rows of solar photovoltaic panels across a large ground-mounted plant',
  },
  {
    src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2000&q=85',
    alt: 'Solar panels on open agricultural land beneath a clear sky',
  },
  {
    src: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2000&q=85',
    alt: 'Decentralized solar plant with galvanized mounting structures',
  },
  {
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85',
    alt: 'Utility-scale solar array stretching toward the horizon',
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setMotion(!reduced);
    if (reduced) return;

    const id = window.setInterval(() => {
      setSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 7800);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let raf = 0;
    let scrollY = 0;
    let mx = 0;
    let my = 0;

    const apply = () => {
      raf = 0;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${mx * -10}px, ${scrollY * 0.3 + my * -8}px, 0) scale(1.08)`;
      }
      if (blobARef.current) {
        blobARef.current.style.transform = `translate3d(${mx * 40}px, ${scrollY * 0.5 + my * 30}px, 0)`;
      }
      if (blobBRef.current) {
        blobBRef.current.style.transform = `translate3d(${mx * -30}px, ${scrollY * 0.18 + my * -24}px, 0)`;
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onScroll = () => {
      scrollY = Math.min(window.scrollY, 900);
      schedule();
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      schedule();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[40vh] min-h-[440px] max-h-[520px] items-end overflow-hidden bg-foreground md:min-h-[380px] md:max-h-[520px]"
    >
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {HERO_SLIDES.map((item, index) => (
          <div
            key={item.src}
            className={`hero-slide absolute inset-0 ${slide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className={`absolute inset-0 ${motion ? 'animate-kenburns' : ''}`}>
              <AppImage
                src={item.src}
                alt={item.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="hero-scrim absolute inset-0" />
      <div className="panel-grid absolute inset-0" />

      <div
        ref={blobARef}
        className="blob-amber pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] animate-drift opacity-40 will-change-transform"
      />

      <div
        ref={blobBRef}
        className="blob-green pointer-events-none absolute -left-32 bottom-0 h-[520px] w-[520px] animate-drift-slow opacity-30 will-change-transform"
      />

      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-7 pt-24 md:px-8 md:pb-8 md:pt-28">
        <div className="max-w-4xl">
          <h1 className="text-hero-xl font-extrabold text-primary-foreground">
            Sustainable solar
            <br />
            engineering for a{' '}
            <span className="text-accent">brighter tomorrow.</span>
          </h1>

          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/90 md:text-sm">
            We design, supply, install and maintain solar PV and BESS systems, plus specialised
            battery electrical maintenance for the Oil and Gas sector.
          </p>

          <div className="mt-5 flex flex-row flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Quote
              <Icon name="ArrowRightIcon" size={15} />
            </a>
            <a
              href="/projects"
              className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full border border-primary-foreground/40 bg-primary/40 px-5 py-2.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Explore Project Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
