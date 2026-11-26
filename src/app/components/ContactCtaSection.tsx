import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';

const CONTACTS = [
  {
    name: 'S.K. Mahapatra',
    role: 'Managing Director and Founder',
    email: 'asysippl@gmail.com',
  },
  {
    name: 'Prashant Pradhan',
    role: 'Director, Business Development and Projects',
    email: 'prashant@asys.co.in',
  },
];

export default function ContactCtaSection({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? 'h1' : 'h2';

  return (
    <section
      id="contact"
      className={`surface-grid scroll-mt-28 bg-background ${
        standalone ? 'pb-16 pt-28 md:pb-24 md:pt-36' : 'py-16 md:py-24'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-primary px-6 py-14 text-primary-foreground md:px-14 md:py-20">
            <div className="panel-grid absolute inset-0" />
            <div className="blob-amber pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] opacity-30" />
            <div className="grain pointer-events-none absolute inset-0" />

            <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="font-mono-label text-xs text-accent">Direct access to leadership</p>
                <Title className="text-display-lg mt-5 font-extrabold">
                  Ready to lower your energy overheads with Tier-1 solar engineering?
                </Title>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                  Write to the Managing Director or the Director of Business Development for pre-bid
                  estimation, site feasibility assessments, or a turnkey EPC proposal.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:prashant@asys.co.in?subject=Request%20for%20DPR%20and%20quote"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Request DPR and quote
                    <Icon name="ArrowRightIcon" size={18} />
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-primary-foreground/40 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    Interactive solar calculator
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ul className="space-y-4">
                  {CONTACTS?.map((c) => (
                    <li
                      key={c?.email}
                      className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-6 backdrop-blur-sm"
                    >
                      <p className="text-lg font-extrabold">{c?.name}</p>
                      <p className="mt-1 text-sm text-white/70">{c?.role}</p>
                      <a
                        href={`mailto:${c?.email}`}
                        className="mt-4 inline-flex items-center gap-2 py-2 text-base font-semibold text-accent hover:underline"
                      >
                        <Icon name="EnvelopeIcon" size={18} />
                        {c?.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}