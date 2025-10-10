import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectHero from '@/components/section/projectdetail/ProjectHero';
import ProjectTechStack from '@/components/section/projectdetail/ProjectTechStack';
import ProjectSummary from '@/components/section/projectdetail/ProjectSummary';
import ProjectProblemSolution from '@/components/section/projectdetail/ProjectProblemSolution';
import ProjectFeatures from '@/components/section/projectdetail/ProjectFeatures';
import ProjectProcess from '@/components/section/projectdetail/ProjectProcess';
import ProjectResults from '@/components/section/projectdetail/ProjectResults';
import ProjectLinks from '@/components/section/projectdetail/ProjectLinks';
import ProjectVisualShowcase from '@/components/section/projectdetail/ProjectVisualShowcase';
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { casestudyBySlugQuery } from '@/sanity/schemaTypes/dynamic/projectdetail/casestudy';

export default async function ProjectDetail({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  // CRITICAL: Await params in Next.js 15+
  const { slug } = await params;

  const { data: currentProject, error, isFromCMS } = await sanityFetch<any>(
    casestudyBySlugQuery,
    null,
    { slug }
  );

  // Debug logs
  console.log('Fetching project with slug:', slug);
  console.log('Is from CMS:', isFromCMS);
  console.log('Error:', error);
  console.log('Project found:', !!currentProject);

  if (!currentProject) {
    notFound();
  }

  // Build sections array dynamically based on available content
  const sections = [
    { id: 'hero', label: 'Overview' },
  ];

  // Only add sections if they have content
  if ((currentProject.techStack && currentProject.techStack.length > 0) || currentProject.projectType || currentProject.role || currentProject.timeline) {
    sections.push({ id: 'techstack', label: 'Tech Stack' });
  }

  if (currentProject.summary) {
    sections.push({ id: 'summary', label: 'Summary' });
  }

  if (currentProject.problem && currentProject.solution) {
    sections.push({ id: 'problem-solution', label: 'Problem & Solution' });
  }

  if (currentProject.features && currentProject.features.length > 0) {
    sections.push({ id: 'features', label: 'Features' });
  }

  if (currentProject.visualShowcase && currentProject.visualShowcase.length > 0) {
    sections.push({ id: 'showcase', label: 'Showcase' });
  }

  if (currentProject.processPhases && currentProject.processPhases.length > 0) {
    sections.push({ id: 'process', label: 'Process' });
  }

  if (currentProject.results && currentProject.results.length > 0) {
    sections.push({ id: 'results', label: 'Results' });
  }

  if (currentProject.links && currentProject.links.length > 0) {
    sections.push({ id: 'links', label: 'Links' });
  }

  return (
    <main className="min-h-screen bg-[#000000] py-6 px-4 md:px-8">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator sections={sections} />

      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex items-center">
          <Link
            href="/"
            className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <div className="space-y-6">
          <div id="hero">
            <ProjectHero project={currentProject} />
          </div>

          {(currentProject.techStack && currentProject.techStack.length > 0) || currentProject.projectType || currentProject.role || currentProject.timeline ? (
            <div id="techstack">
              <ProjectTechStack project={currentProject} />
            </div>
          ) : null}

          {currentProject.summary && (
            <div id="summary">
              <ProjectSummary project={currentProject} />
            </div>
          )}

          {currentProject.problem && currentProject.solution && (
            <div id="problem-solution" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectProblemSolution
                title="Problem"
                content={currentProject.problem}
                color="#ff5e5e"
              />
              <ProjectProblemSolution
                title="Solution"
                content={currentProject.solution}
                color="#4caf50"
              />
            </div>
          )}

          {currentProject.features && currentProject.features.length > 0 && (
            <div id="features">
              <ProjectFeatures features={currentProject.features} />
            </div>
          )}

          {currentProject.visualShowcase && currentProject.visualShowcase.length > 0 && (
            <div id="showcase">
              <ProjectVisualShowcase images={currentProject.visualShowcase} />
            </div>
          )}

          {currentProject.processPhases && currentProject.processPhases.length > 0 && (
            <div id="process">
              <ProjectProcess
                process={currentProject.processPhases}
                projectType={currentProject.category}
              />
            </div>
          )}

          {currentProject.results && currentProject.results.length > 0 && (
            <div id="results">
              <ProjectResults results={currentProject.results} />
            </div>
          )}

          {currentProject.links && currentProject.links.length > 0 && (
            <div id="links">
              <ProjectLinks links={currentProject.links} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}