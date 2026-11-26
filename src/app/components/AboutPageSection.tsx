import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import SolarShowcase from './SolarShowcase';

const VALUES = [
  {
    icon: 'BoltIcon',
    title: 'Comprehensive Engineering Solutions',
    description:
      'We offer integrated solutions across EPC, renewable energy, BESS, BMS, and asset management, delivering diverse capabilities under one roof.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Commitment to Quality & Excellence',
    description:
      'We focus on engineering precision, stringent quality standards, safety, and operational efficiency to deliver reliable and sustainable solutions.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Customer-Centric Approach',
    description:
      "We understand the unique requirements of every project and develop tailored solutions that align with our clients' objectives and long-term business goals.",
  },
];

const PURPOSES = [
  {
    label: 'Our Mission',
    icon: 'FlagIcon',
    description:
      'To deliver reliable, high-quality engineering and energy solutions that improve operational efficiency, strengthen energy resilience, and contribute to a cleaner, more sustainable future.',
  },
  {
    label: 'Our Vision',
    icon: 'EyeIcon',
    description:
      'To be a trusted partner in the global energy transition, enabling industries and communities to thrive through innovative, sustainable, and future-ready energy solutions.',
  },
];

export default function AboutPageSection() {
  return (
    <section id="about" className="surface-grid bg-background pb-16 pt-[104px] md:pb-24 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <div className="relative h-[220px] overflow-hidden rounded-2xl bg-primary shadow-xl md:h-[340px]">
            <AppImage
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=85"
              alt="Solar panels across a utility-scale renewable energy project"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/35 to-primary/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <p className="font-mono-label text-xs text-accent">About ASYS Insta Power</p>
              <h1 className="text-display-lg mt-3 max-w-3xl font-extrabold">
                Engineering a sustainable energy future.
              </h1>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <Reveal>
            <p className="font-mono-label text-xs text-solar">Company profile</p>
            <h2 className="text-display-md mt-4 font-extrabold text-primary">
              Integrated engineering and energy solutions.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground md:text-base">
              <p>
                ASYS is an integrated engineering and energy solutions company with business
                interests aligned with the evolving global energy landscape and the transition
                towards a sustainable future. Our business portfolio encompasses Engineering,
                Procurement &amp; Construction (EPC), Renewable Energy solutions, including Solar
                Power and Battery Energy Storage Systems (BESS), Battery Management Systems (BMS)
                for the Oil &amp; Gas sector, and comprehensive Asset Management, Operations &amp;
                Maintenance (O&amp;M) services.
              </p>
              <p>
                With a strong focus on engineering excellence, technological advancement, and
                sustainable growth, ASYS delivers end-to-end solutions across diverse industry
                segments. Through our expertise in conventional and renewable energy infrastructure,
                we are committed to enhancing operational efficiency, optimising asset performance,
                enabling energy resilience, and contributing to a cleaner and more sustainable
                future.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SolarShowcase />
          </Reveal>
        </div>

        <section className="mt-16 md:mt-20" aria-labelledby="why-asys-heading">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono-label text-xs text-solar">Why choose ASYS?</p>
              <h2
                id="why-asys-heading"
                className="text-display-md mt-4 font-extrabold text-primary"
              >
                One partner for dependable energy solutions.
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 90}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg md:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dcecff]/70 text-solar">
                    <Icon name={value.icon} size={24} />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PURPOSES.map((purpose, index) => (
            <Reveal key={purpose.label} delay={index * 100}>
              <article className="flex h-full gap-5 rounded-2xl border border-[#bad4f5]/70 bg-[#dcecff]/65 p-6 backdrop-blur-sm md:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/80 text-solar">
                  <Icon name={purpose.icon} size={24} />
                </span>
                <div>
                  <h2 className="text-xl font-extrabold text-primary">{purpose.label}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-primary/80">
                    {purpose.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
