export type ExperiencesPost = {
  locale?: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
  date: string;
  content: string;
  metadata: {
    [key: string]: any;
  };
};
