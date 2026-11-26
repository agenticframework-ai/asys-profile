import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import AboutLeadershipSection from '@/app/components/AboutLeadershipSection';

export const metadata: Metadata = {
  title: 'Leadership | ASYS Insta Power',
  description:
    'Meet the leadership team behind ASYS Insta Power and learn more about the company.',
};

export default function LeadershipPage() {
  return (
    <SiteShell>
      <main>
        <AboutLeadershipSection showIntro={false} standalone />
      </main>
    </SiteShell>
  );
}
