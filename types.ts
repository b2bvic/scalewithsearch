export interface TimelineEvent {
  year: string;
  title: string;
  location: string;
  description: string;
  category: 'foundation' | 'grinding' | 'awakening' | 'crucible' | 'mastery';
  stats?: string[];
}

export interface Principle {
  id: number;
  title: string;
  description: string;
}

export interface Venture {
  name: string;
  role: string;
  description: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface ExtendedVenture extends Venture {
  id: string;
  color: string;
  cta: string;
  features: string[];
  audience: string[];
  level?: string;
  isComingSoon?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  context: string;
}

export interface IndustrySector {
  id: string;
  sector: string;
  description: string;
  clients: string[];
}