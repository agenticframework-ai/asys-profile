import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import ProjectsSection from '@/app/components/ProjectsSection';

export const metadata: Metadata = {
  title: 'Project Portfolio | ASYS Insta Power',
  description:
    'Review ASYS Insta Power solar project portfolio, including utility-scale and agricultural feeder solar plants.',
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main>
        <ProjectsSection standalone />
      </main>
    </SiteShell>
  );
}
