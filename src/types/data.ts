export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  languages?: Language[];
  socials: SocialLink[];
}

export interface Language {
  name: string;
  level: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProjectHighlight {
  icon: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
  image?: string;
  featured: boolean;
  disabled?: boolean;
  highlights?: ProjectHighlight[];
  media?: MediaItem[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  website?: string;
  highlights: string[];
  techUsed: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  year: string;
}

export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credentialId?: string;
  verifyUrl?: string;
  fileUrl?: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
}

export interface BlogPostFull extends BlogPostMeta {
  content: string;
  wordCount: number;
}
