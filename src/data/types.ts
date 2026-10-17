export interface ContactInfo {
  website?: { label: string; href: string };
  email?: { label: string; href: string };
  github?: { label: string; href: string };
  linkedin?: { label: string; href: string };
  phone?: string;
  location?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  techStack?: string[];
  summary?: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  link?: { label: string; href: string };
  period?: string;
  techStack?: string[];
  summary?: string;
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  gpa?: string;
  period: string;
  honors?: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary?: string;
  skills: SkillCategory[];
  experiences: WorkExperience[];
  projects: ProjectItem[];
  education: Education[];
}

export type PaperSize = 'a4' | 'letter';
export type ZoomScale = 'fit' | '100' | '90' | '80';
