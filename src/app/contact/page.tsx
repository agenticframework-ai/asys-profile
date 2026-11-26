import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import ContactCtaSection from '@/app/components/ContactCtaSection';

export const metadata: Metadata = {
  title: 'Contact Us | ASYS Insta Power',
  description:
    'Contact ASYS Insta Power for solar project feasibility, pre-bid estimation, DPR and turnkey EPC proposals.',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <ContactCtaSection standalone />
      </main>
    </SiteShell>
  );
}
