import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import ClienteleSection from '@/app/components/ClienteleSection';

export const metadata: Metadata = {
  title: 'Clients | ASYS Insta Power',
  description:
    'Discover the government, PSU, institutional and healthcare clients served by ASYS Insta Power.',
};

export default function ClientsPage() {
  return (
    <SiteShell>
      <main>
        <ClienteleSection standalone />
      </main>
    </SiteShell>
  );
}
