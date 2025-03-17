export interface CommandResponse {
  status: number;
  message: string;
  data?: any;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}