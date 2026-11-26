import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';

/*
 * BENTO GRID AUDIT
 * STEP 1: Array has 3 cards: [10 MW, 5.0 MW, 2.4 MW]
 * STEP 2 (lg, 12 cols): Row 1: [col-1..12: 10 MW cs-12 (featured, split layout)]
 *                       Row 2: [col-1..6: 5.0 MW cs-6] [col-7..12: 2.4 MW cs-6]
 * STEP 3: Placed 3/3 cards, no empty cells.
 * md/mobile: 1 col stack.
 */
const PROJECTS = [
{
  key: 'p10',
  capacity: '10 MW',
  title: 'KUSUM 10 MW utility-scale grid solar power plant',
  meta: 'Ground mounted, 10,000 kWp | Rajasthan / Western agrarian corridor',
  desc: 'Utility-scale plant commissioned under PM-KUSUM. Bifacial monocrystalline modules, central string inverters, a dedicated 33 kV substation bay for evacuation, and cloud SCADA telemetry.',
  capex: '₹41.5 Cr',
  revenue: '₹5.25 Cr/yr',
  irr: '19.6%',
  payback: '~4.1 yrs',
  image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  alt: 'Aerial view of a large ground-mounted utility-scale solar power plant with long rows of panels',
  span: 'lg:col-span-12',
  featured: true
},
{
  key: 'p5',
  capacity: '5.0 MW',
  title: 'KUSUM 5.0 MW agricultural feeder solar plant',
  meta: 'Ground mounted, 5,000 kWp | Madhya Pradesh / Haryana agri-zone',
  desc: 'Decentralized plant dedicated to agricultural feeder solarization, giving farmers uninterrupted daytime power for irrigation while exporting surplus to the grid.',
  capex: '₹21.0 Cr',
  revenue: '₹2.65 Cr/yr',
  irr: '19.2%',
  payback: '~4.2 yrs',
  image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
  alt: 'Solar panels installed on open agricultural land beneath a clear sky',
  span: 'lg:col-span-6',
  featured: false
},
{
  key: 'p24',
  capacity: '2.4 MW',
  title: 'KUSUM 2.4 MW decentralized ground solar plant',
  meta: 'Ground mounted, 2,400 kWp | North-Western agrarian zone',
  desc: 'Plant interconnected directly to a rural 11 kV / 33 kV distribution substation, with hot-dip galvanized mounting structures and remote telemetry.',
  capex: '₹10.2 Cr',
  revenue: '₹1.28 Cr/yr',
  irr: '18.9%',
  payback: '~4.3 yrs',
  image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
  alt: 'Decentralized solar plant with galvanized mounting structures on level ground',
  span: 'lg:col-span-6',
  featured: false
}];


function Metric({ label, value }: {label: string;value: string;}) {
  return (
    <div className="bg-card p-4">
      <dt className="font-mono-label text-[10px] text-muted-foreground">{label}</dt>
      <dd className="font-mono-num mt-2 text-lg font-bold text-primary md:text-xl">{value}</dd>
    </div>);

}

export default function ProjectsSection({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? 'h1' : 'h2';

  return (
    <section
      id="projects"
      className={`surface-grid scroll-mt-28 bg-background ${
        standalone ? 'pb-16 pt-28 md:pb-24 md:pt-36' : 'py-16 md:py-24'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <p className="font-mono-label text-xs text-solar">Proven field execution</p>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Title className="text-display-lg max-w-3xl font-extrabold text-primary">
              Project portfolio, with the financials in plain view.
            </Title>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Scale in MW, total CAPEX, annual revenue, IRR and payback. Figures are company-reported
              and subject to confirmation.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {PROJECTS.map((p, i) =>
          <Reveal key={p.key} delay={i * 100} className={p.span}>
              <article
              className={`group h-full overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-300 hover:shadow-xl ${
              p.featured ? 'grid lg:grid-cols-2' : 'flex flex-col'}`
              }>
              
                <div
                className={`relative overflow-hidden bg-foreground ${
                p.featured ? 'min-h-[280px] lg:min-h-[480px]' : 'h-[240px]'}`
                }>
                
                  <AppImage
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <span className="font-mono-num absolute left-5 top-5 rounded-md bg-accent px-3 py-1.5 text-sm font-bold text-accent-foreground">
                    {p.capacity}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-9">
                  <p className="text-xs font-semibold text-solar">{p.meta}</p>
                  <h3
                  className={`mt-3 font-extrabold text-primary ${
                  p.featured ? 'text-display-md' : 'text-xl md:text-2xl'}`
                  }>
                  
                    {p.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>

                  <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
                    <Metric label="Total CAPEX" value={p.capex} />
                    <Metric label="Annual revenue" value={p.revenue} />
                    <Metric label="Project IRR" value={p.irr} />
                    <Metric label="ROI payback" value={p.payback} />
                  </dl>

                  <a
                  href="/contact"
                  className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 self-start rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-solar">
                  
                    Inspect full financial schedule
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}