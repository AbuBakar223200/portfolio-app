export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: "web" | "backend" | "ai" | "mobile" | "other";
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level: number; // 1-100
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "education" | "work" | "achievement";
}

export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
