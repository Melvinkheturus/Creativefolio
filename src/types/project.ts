import { Image as SanityImage } from 'sanity';

export interface ImageType {
  url: string;
  alt: string;
  caption?: string;
}

export interface FeatureType {
  title: string;
  description: string;
  icon: string;
}

export interface TechItemType {
  name: string;
  icon?: string;
}

export interface LinkType {
  label: string;
  url: string;
  icon: string;
}

export interface ArtifactType {
  type: string;
  url: string;
}

export interface ProcessPhaseType {
  title: string;
  description: string;
  artifacts?: ArtifactType[];
}

export interface ResultType {
  title: string;
  description: string;
  icon: string;
}

export interface CasestudyType {
  title: string;
  subtitle?: string;
  category: string;
  techStack?: TechItemType[];
  thumbnail: SanityImage & { alt: string };
  summary?: any[];
  problem?: any[];
  solution?: any[];
  features?: FeatureType[];
  processPhases?: ProcessPhaseType[];
  results?: ResultType[];
  technologies?: TechItemType[];
  links?: LinkType[];
  visualShowcase?: ImageType[];
  mobileShowcase?: ImageType[];
  mobileFeatures?: FeatureType[];
}

export interface Project {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "project";
  title: string;
  slug: string;
  projectType: string;
  position: number;
  thumbnail: SanityImage & { alt: string };
  casestudy?: CasestudyType;
}