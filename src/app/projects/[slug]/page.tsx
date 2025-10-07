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
  
  return (
    <main className="min-h-screen bg-[#000000] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link 
            href="/" 
            className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
        
        <div className="space-y-6">
          <ProjectHero project={currentProject} />
          
          <ProjectTechStack project={currentProject} />
          
          <ProjectSummary project={currentProject} />
          
          {currentProject.problem && currentProject.solution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          
          {currentProject.visualShowcase && (
            <ProjectVisualShowcase images={currentProject.visualShowcase} />
          )}
          
          {currentProject.features && (
            <ProjectFeatures features={currentProject.features} />
          )}
          
          {currentProject.processPhases && (
            <ProjectProcess 
              process={currentProject.processPhases} 
              projectType={currentProject.category} 
            />
          )}
          
          {currentProject.results && (
            <ProjectResults results={currentProject.results} />
          )}
          
          {currentProject.links && (
            <ProjectLinks links={currentProject.links} />
          )}
        </div>
      </div>
    </main>
  );
}