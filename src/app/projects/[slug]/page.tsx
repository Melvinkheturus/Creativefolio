import { Project, CasestudyType } from '@/types/project';

const projectQuery = `*[_type == "casestudy" && project->slug.current == $slug][0]{
  title,
  subtitle,
  category,
  techStack,
  thumbnail{
    alt,
    asset->{
      _ref
    }
  },
  summary,
  problem,
  solution,
  features,
  processPhases,
  results,
  technologies,
  links,
  visualShowcase,
  mobileShowcase,
  mobileFeatures,
  project->{
    title,
    slug,
    projectType,
    position,
    thumbnail{
      alt,
      asset->{
        _ref
      }
    }
  }
}`;import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

import ProjectHero from '@/components/section/projectdetail/ProjectHero';
import ProjectTechStack from '@/components/section/projectdetail/ProjectTechStack';
import ProjectSummary from '@/components/section/projectdetail/ProjectSummary';
import ProjectProblemSolution from '@/components/section/projectdetail/ProjectProblemSolution';
import ProjectFeatures from '@/components/section/projectdetail/ProjectFeatures';
import ProjectProcess from '@/components/section/projectdetail/ProjectProcess';
import ProjectResults from '@/components/section/projectdetail/ProjectResults';
import ProjectLinks from '@/components/section/projectdetail/ProjectLinks';
import ProjectVisualShowcase from '@/components/section/projectdetail/ProjectVisualShowcase';
import MobileVisualShowcase from '@/components/section/projectdetail/MobileVisualShowcase';
import ClientShowcase from '@/components/section/projectdetail/ClientShowcase';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const DEFAULT_CASESTUDY: CasestudyType = {
  title: "",
  subtitle: "",
  category: "",
  techStack: [],
  thumbnail: { alt: "", asset: { _ref: "", _type: "reference" } },
  summary: [],
  problem: [],
  solution: [],
  features: [],
  processPhases: [],
  results: [],
  technologies: [],
  links: [],
  visualShowcase: [],
  mobileShowcase: [],
  mobileFeatures: [],

};

export default async function ProjectPage({ params: rawParams }: ProjectPageProps) {
  const resolvedParams = await rawParams;
  const slug = resolvedParams.slug;
  const { data: casestudy } = await sanityFetch<CasestudyType>(
    projectQuery,
    DEFAULT_CASESTUDY,
    { slug }
  );

  console.log("Fetched casestudy thumbnail:", JSON.stringify(casestudy.thumbnail, null, 2));

  if (!casestudy || Object.keys(casestudy).length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <ProjectHero project={casestudy} />

        {/* Tech Stack Section */}
        {casestudy.techStack && (
          <ProjectTechStack project={casestudy} />
        )}

        {/* Summary Section */}
        {casestudy.summary && (
          <ProjectSummary project={casestudy} />
        )}

        {/* Problem/Solution Section */}
        {casestudy.problem && casestudy.solution && (
          <ProjectProblemSolution project={casestudy} />
        )}

        {/* Visual Showcase Section */}
        <ClientShowcase casestudy={casestudy} />

        {/* Features Section */}
        {casestudy.features && (
          <ProjectFeatures project={casestudy} />
        )}

        {/* Process Section */}
        {casestudy.processPhases && (
          <ProjectProcess project={casestudy} />
        )}

        {/* Results Section */}
        {casestudy.results && (
          <ProjectResults project={casestudy} />
        )}

        {/* Links Section */}
        {casestudy.links && (
          <ProjectLinks project={casestudy} />
        )}
      </div>
    </main>
  );
}