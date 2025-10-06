'use client';

import { CasestudyType } from '@/types/project';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import ProjectVisualShowcase from './ProjectVisualShowcase';
import MobileVisualShowcase from './MobileVisualShowcase';

interface ClientShowcaseProps {
  casestudy: CasestudyType;
}

export default function ClientShowcase({ casestudy }: ClientShowcaseProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? (
        casestudy.mobileShowcase && <MobileVisualShowcase project={casestudy} />
      ) : (
        casestudy.visualShowcase && <ProjectVisualShowcase project={casestudy} />
      )}
    </>
  );
}