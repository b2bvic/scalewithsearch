// Legacy course data — retained for type compatibility only.
// Course marketplace removed. Site now presents single consulting offer.
// See components/Courses.tsx for current system capabilities.

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export interface CourseData {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceValue: number;
  modules: number;
  runtime: string;
  stripeLink: string;
  h1: string;
  h1Sub: string;
  problem: { headline: string; pain: string[]; cost: string; } | null;
  agitate: { headline: string; consequences: string[]; stakes: string; } | null;
  solution: { headline: string; transformation: string; mechanism: string; } | null;
  authority: { headline: string; proof: string[]; credibility: string; } | null;
  intrigue: { headline: string; hooks: string[]; openLoop: string; } | null;
  desire: { headline: string; futureState: string[]; identity: string; } | null;
  action: { headline: string; cta: string; urgency: string; };
  curriculum: CourseModule[];
  testimonial: { quote: string; name: string; title: string; result: string; };
  faq: { q: string; a: string }[];
}

export const courses: CourseData[] = [];

export const getCourseBySlug = (slug: string): CourseData | undefined => {
  return courses.find(c => c.slug === slug);
};

export const getCourseById = (id: string): CourseData | undefined => {
  return courses.find(c => c.id === id);
};
