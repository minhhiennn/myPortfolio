export interface Project {
  name: string;
  startDate: string;
  endDate?: string;
  description: string;
  contributions: string[];
  technologies?: string[];
  status?: "completed" | "ongoing" | "paused";
  demoUrl?: string;
  githubUrl?: string;
}

export type ExperiencesPost = {
  locale?: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
  tags?: string;
  date: string;
  content: string;
  projects?: Project[];
  metadata: {
    [key: string]: any;
  };
};
