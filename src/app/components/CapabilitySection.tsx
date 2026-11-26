import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';

const CLIENTS = [
  { name: 'NHAI', fullName: 'National Highways Authority of India (NHAI)', icon: 'TruckIcon' },
  { name: 'GAIL', fullName: 'GAIL (India) Limited', icon: 'FireIcon' },
  { name: 'DMRC', fullName: 'Delhi Metro Rail Corporation (DMRC)', icon: 'BuildingOffice2Icon' },
  {
    name: 'KUSUM',
    fullName: 'KUSUM projects driven by various State Governments',
    icon: 'BoltIcon',
  },
  { name: 'DRI', fullName: 'Deendayal Shodh Sansthan (DRI)', icon: 'AcademicCapIcon' },
  { name: 'SUPREME', fullName: 'Supreme Hospital', icon: 'HeartIcon' },
];

export default function CapabilitySection() {
  return (
    <section className="relative z-10 bg-primary px-4 py-5 sm:h-[88px] sm:py-0 md:px-8">
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col items-center sm:flex-row">
        <Reveal className="w-full sm:w-[62%] md:w-[68%]">
          <div className="client-marquee relative overflow-hidden" aria-label="ASYS customers">
            <div className="client-marquee-track flex w-max items-center">
              {[false, true].map((duplicate) => (
                <ul
                  key={duplicate ? 'duplicate' : 'clients'}
                  aria-label={duplicate ? undefined : 'Client companies'}
                  aria-hidden={duplicate}
                  className="flex shrink-0 items-center gap-4 pr-4 md:gap-6 md:pr-6"
                >
                  {CLIENTS.map((client) => (
                    <li
                      key={client.name}
                      aria-label={client.fullName}
                      className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/85"
                    >
                      <Icon name={client.icon} size={18} className="text-accent" aria-hidden="true" />
                      <span className="whitespace-nowrap text-xs font-semibold md:text-sm">
                        {client.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="relative mt-5 w-full rounded-xl bg-gradient-to-br from-[#477ac4] to-[#172653] p-5 text-primary-foreground shadow-xl sm:absolute sm:right-0 sm:top-[-20px] sm:mt-0 sm:w-[235px] md:right-[4%] md:top-[-24px] md:w-[280px] md:p-6"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-accent">
            <Icon name="BoltIcon" size={20} />
          </span>
          <h2 className="mt-3 text-base font-extrabold">Clean and Renewable Energy</h2>
          <p className="mt-1 text-xs leading-relaxed text-white/75">
            Solar PV and BESS solutions for a cleaner, more energy-efficient future.
          </p>
          <a
            href="/services"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground transition-colors hover:bg-white hover:text-primary"
          >
            Learn More
            <Icon name="ArrowRightIcon" size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}