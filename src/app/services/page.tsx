import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import ServicesSection from '@/app/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Solar Services | ASYS Insta Power',
  description:
    'Explore ASYS solar EPC, installation and commissioning, operation and maintenance, and project consultancy services.',
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <ServicesSection standalone />
      </main>
    </SiteShell>
  );
}
