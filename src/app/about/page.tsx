import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import AboutPageSection from '@/app/components/AboutPageSection';

export const metadata: Metadata = {
  title: 'About Us | ASYS Insta Power',
  description:
    'Learn about ASYS integrated engineering, renewable energy, BESS, BMS, asset management and company values.',
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <AboutPageSection />
      </main>
    </SiteShell>
  );
}
