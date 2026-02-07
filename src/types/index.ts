export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl: string;
  image?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location?: string;
  achievements: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  courses?: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  url?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
