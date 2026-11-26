import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import AppImage from '@/components/ui/AppImage';

const LEADERS = [
  {
    name: 'S.K. Mahapatra',
    role: 'Managing Director and Founder',
    tenure: '25+ yrs',
    focus:
      'R&D, power electronics, corporate strategy and utility-scale solar execution across Northern India.',
    email: 'asysippl@gmail.com',
  },
  {
    name: 'Prashant Pradhan',
    role: 'Director, Business Development and Projects',
    tenure: '14+ yrs',
    focus:
      'Strategic business development, corporate partnerships, turnkey project execution and client management.',
    email: 'prashant@asys.co.in',
  },
];

export default function AboutLeadershipSection({
  showIntro = true,
  standalone = false,
}: {
  showIntro?: boolean;
  standalone?: boolean;
}) {
  return (
    <section
      id={showIntro ? 'about' : 'leadership'}
      className={`surface-grid scroll-mt-28 bg-background pb-16 ${
        standalone ? 'pt-28 md:pb-24 md:pt-36' : 'pt-12 md:pb-24 md:pt-16'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        {showIntro && (
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
              <Reveal>
                <div className="relative h-[260px] overflow-hidden rounded-xl bg-secondary shadow-lg md:h-[340px]">
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
                <p className="font-mono-label text-[10px] text-solar md:text-xs">About ASYS Insta Power</p>
                <h2 className="text-display-md mt-3 font-extrabold text-primary md:mt-4 md:text-3xl">
                  Clean power engineering, led by the people who design it.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground md:mt-5 md:text-base">
                  ASYS Insta Power was founded by seasoned power electrical and electronics specialists.
                  Our mission is to translate green initiatives into high-performance rooftop and
                  ground-mounted solar plants that protect the environment and cut energy overheads.
                </p>

                <ul className="mt-4 space-y-3 md:mt-5">
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-solar">
                      <Icon name="CpuChipIcon" size={14} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-primary">Tier-1 equipment synergy</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        Direct integration with leading Indian module and inverter makers.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-solar">
                      <Icon name="MapPinIcon" size={14} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-primary">Multi-state execution</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        Teams across Uttar Pradesh, Delhi-NCR and Bhubaneswar, Odisha.
                      </p>
                    </div>
                  </li>
                </ul>

                <a
                  href="#leadership"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg md:mt-6"
                >
                  Read the company profile and meet the team
                  <Icon name="ArrowRightIcon" size={15} />
                </a>
              </Reveal>
          </div>
        )}
        <div
          id={showIntro ? 'leadership' : undefined}
          className={`${showIntro ? 'mt-16 ' : ''}grid gap-10 lg:grid-cols-12 lg:gap-16`}
        >
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono-label text-xs text-solar">
                {standalone ? 'Our people' : 'Leadership'}
              </p>
              {standalone && (
                <h1 className="text-display-md mt-3 font-extrabold text-primary">
                  Leadership at ASYS Insta Power
                </h1>
              )}
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                {LEADERS.map((leader, i) => (
                  <Reveal key={leader.name} delay={i * 120}>
                    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-solar hover:shadow-lg md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-extrabold text-primary">{leader.name}</h3>
                          <p className="mt-1 text-sm font-semibold text-solar">{leader.role}</p>
                        </div>
                        <span className="font-mono-num shrink-0 rounded-md bg-secondary px-3 py-1.5 text-sm font-bold text-primary">
                          {leader.tenure}
                        </span>
                      </div>
                      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                        {leader.focus}
                      </p>
                      <a
                        href={`mailto:${leader.email}`}
                        className="mt-6 inline-flex items-center gap-2 py-2 text-sm font-semibold text-primary hover:text-solar"
                      >
                        <Icon name="EnvelopeIcon" size={16} />
                        {leader.email}
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-lg bg-primary p-8 text-primary-foreground md:p-10">
                <div className="panel-grid absolute inset-0" />
                <div className="relative">
                  <p className="font-mono-label text-[11px] text-accent">Company facts</p>
                  <dl className="mt-8 space-y-7">
                    <div>
                      <dt className="text-sm text-white/70">Registered office</dt>
                      <dd className="mt-2 text-base font-semibold leading-relaxed">
                        A-301, Milan Vihar-1, Abhay Khand-3, Indirapuram, Ghaziabad, Uttar Pradesh-201014
                      </dd>
                    </div>
                    <div className="border-t border-primary-foreground/15 pt-7">
                      <dt className="text-sm text-white/70">Eastern regional command</dt>
                      <dd className="mt-2 text-base font-semibold leading-relaxed">
                        Plot No-282/B4, Kalyani Nagar, Tamando, Bhubaneswar, Khordha, Odisha-752054
                      </dd>
                    </div>
                    <div className="border-t border-primary-foreground/15 pt-7">
                      <dt className="text-sm text-white/70">Corporate identity number</dt>
                      <dd className="font-mono-num mt-2 text-base font-bold">U31901UP2017PTC089003</dd>
                    </div>
                  </dl>
                  <a
                    href="/contact"
                    className="mt-9 inline-flex min-h-[48px] items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Request a DPR
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}