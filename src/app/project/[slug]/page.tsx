import { projects } from "@/data/projects";
import ProjectHero from "@/app/components/project/ProjectHero";
import ProjectFeatures from "@/app/components/project/ProjectFeatures";
import ProjectResults from "@/app/components/project/ProjectResults";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  return {
    title: `${project?.title || "Project"} | Melvin's Portfolio`,
    description: project?.description || "Project details",
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen w-full bg-[#0a0912] text-white">
      <ProjectHero project={project} />
      <ProjectFeatures project={project} />
      <ProjectResults project={project} />
    </main>
  );
} 