import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';

/*
 * BENTO GRID AUDIT
 * STEP 1: Array has 4 cards: [Turnkey EPC, Installation and Commissioning, O and M, Consultancy]
 * STEP 2 (lg, 6 cols, 2 rows):
 *   Row 1: [col-1: EPC cs-4 rs-1] [col-2: EPC] [col-3: EPC] [col-4: EPC] [col-5: I&C cs-2 rs-2] [col-6: I&C]
 *   Row 2: [col-1: O&M cs-2 rs-1] [col-2: O&M] [col-3: Consultancy cs-2] [col-4: Consultancy] [col-5: I&C (row-span)] [col-6: I&C (row-span)]
 * STEP 3: Placed 4/4 cards, no empty cells.
 * md (2 cols): EPC cs-2, I&C cs-1, O&M cs-1, Consultancy cs-2 = rows: [EPC EPC] [I&C O&M] [Consultancy Consultancy]. No empty cells.
 * mobile (1 col): all cs-1.
 */
const SERVICES = [
  {
    key: 'epc',
    icon: 'BoltIcon',
    title: 'Turnkey Solar EPC Services',
    sub: 'End-to-end engineering, procurement and construction',
    body: 'We deliver turnkey solar PV plants from feasibility study to grid synchronization for residential, commercial and industrial clients, and utility-scale developers.',
    span: 'md:col-span-2 lg:col-span-4',
    tone: 'bg-primary text-primary-foreground',
    sub_tone: 'text-accent',
    body_tone: 'text-white/80',
    featured: true,
  },
  {
    key: 'ic',
    icon: 'WrenchScrewdriverIcon',
    title: 'Installation and Commissioning',
    sub: 'Precision mechanical and electrical deployment',
    body: 'Certified I and C teams install and energize every component, from civil foundations and module mounting structures to transformers and SCADA systems, with full safety discipline.',
    span: 'md:col-span-1 lg:col-span-2 lg:row-span-2',
    tone: 'bg-card text-card-foreground border border-border',
    sub_tone: 'text-solar',
    body_tone: 'text-muted-foreground',
    featured: false,
  },
  {
    key: 'om',
    icon: 'ChartBarIcon',
    title: 'Operation and Maintenance',
    sub: 'Data-driven asset lifecycle management',
    body: 'Proactive, sensor-driven operations that protect your investment and keep energy yield high across seasons, targeting 99%+ plant uptime.',
    span: 'md:col-span-1 lg:col-span-2',
    tone: 'bg-secondary text-secondary-foreground border border-border',
    sub_tone: 'text-solar',
    body_tone: 'text-muted-foreground',
    featured: false,
  },
  {
    key: 'consult',
    icon: 'DocumentTextIcon',
    title: 'Solar Project Consultancy',
    sub: 'Pre-bid estimation, procurement and design',
    body: 'Strategic advisory for developers, EPC contractors and institutional buyers who need viable projects, competitive bids and bankable documentation.',
    span: 'md:col-span-2 lg:col-span-2',
    tone: 'bg-card text-card-foreground border border-border',
    sub_tone: 'text-solar',
    body_tone: 'text-muted-foreground',
    featured: false,
  },
];

export default function ServicesSection({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? 'h1' : 'h2';

  return (
    <section
      id="services"
      className={`scroll-mt-28 bg-secondary ${
        standalone ? 'pb-16 pt-28 md:pb-24 md:pt-36' : 'py-16 md:py-24'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono-label text-xs text-solar">Core offerings</p>
              <Title className="text-display-lg mt-5 font-extrabold text-primary">
                Solar engineering and EPC, from DPR to lifetime upkeep.
              </Title>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Feasibility, Tier-1 procurement, certified installation and proactive maintenance under
              one accountable team.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={i * 90} className={s.span}>
              <article
                className={`group flex h-full flex-col rounded-lg p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9 ${s.tone}`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-md ${
                    s.featured ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <Icon name={s.icon as 'BoltIcon'} size={24} />
                </span>
                <h3
                  className={`mt-8 font-extrabold ${
                    s.featured ? 'text-display-md' : 'text-xl md:text-2xl'
                  }`}
                >
                  {s.title}
                </h3>
                <p className={`mt-2 text-sm font-semibold ${s.sub_tone}`}>{s.sub}</p>
                <p className={`mt-4 flex-1 text-[15px] leading-relaxed ${s.body_tone}`}>{s.body}</p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 py-2 text-sm font-bold text-accent transition-all group-hover:gap-3"
                >
                  View service scope
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}