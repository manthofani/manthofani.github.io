export interface Profile {
  name: string;
  title: string;
  roleDescription: string;
  location: string;
  workExperienceContext: string;
  yearsOfExperience: number;
  statusText: string;
  email: string;
  phone?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    year: string;
  }[];
  languages: {
    name: string;
    proficiency: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  clientContext?: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  expandedDetails: {
    systemScope: string;
    keyDeliverables: string[];
    observabilityAndReliability?: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  category: 'Mobile' | 'Web & Enterprise' | 'Systems & Integrations';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  year: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  architectureNotes?: string;
  metrics?: string[];
  imagePlaceholderColor?: string;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Core';
    highlight?: boolean;
    description?: string;
  }[];
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  tech: string[];
  description: string;
  status: 'operational' | 'monitoring' | 'high-throughput';
  details: string;
}
