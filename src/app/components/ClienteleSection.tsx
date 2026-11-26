import React from 'react';
import Reveal from '@/components/Reveal';

const CLIENTS = [
  { name: 'National Highways Authority of India (NHAI)', type: 'Government and PSU' },
  { name: 'GAIL (India) Limited', type: 'Government and PSU' },
  { name: 'Delhi Metro Rail Corporation (DMRC)', type: 'Government and PSU' },
  { name: 'KUSUM projects driven by various State Governments', type: 'Government and PSU' },
  { name: 'Deendayal Shodh Sansthan (DRI)', type: 'Education and Institutional' },
  { name: 'Supreme Hospital', type: 'Healthcare' },
];

export default function ClienteleSection({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? 'h1' : 'h2';

  return (
    <section
      id="clientele"
      className={`scroll-mt-28 bg-secondary ${
        standalone ? 'pb-16 pt-28 md:pb-24 md:pt-36' : 'py-16 md:py-24'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="font-mono-label text-xs text-solar">Clientele and partners</p>
            <Title className="text-display-lg mt-5 font-extrabold text-primary">
              From Maharatna PSUs to tertiary hospitals.
            </Title>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Institutional clients across highways, gas, metro rail, education and healthcare rely on
              ASYS for dependable solar engineering.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {CLIENTS?.map((client, i) => (
                <li key={client?.name}>
                  <Reveal delay={i * 70}>
                    <div className="group flex items-center gap-5 py-6 transition-colors hover:bg-card md:gap-8 md:px-4">
                      <span className="font-mono-num w-8 shrink-0 text-sm font-bold text-muted-foreground">
                        {String(i + 1)?.padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <p className="text-lg font-bold leading-snug text-primary md:text-xl">
                          {client?.name}
                        </p>
                      </div>
                      <span className="hidden shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground sm:inline-block">
                        {client?.type}
                      </span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}