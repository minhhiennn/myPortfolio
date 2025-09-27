import { DEFAULT_LOCALE } from "@/i18n/routing";
import { ExperiencesPost } from "@/types/experiences";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_BATCH_SIZE = 10;

export async function getExperiences(
  locale: string = DEFAULT_LOCALE
): Promise<{ experiences: ExperiencesPost[] }> {
  const experiencesDirectory = path.join(process.cwd(), "experiences", locale);

  // is directory exist
  if (!fs.existsSync(experiencesDirectory)) {
    return { experiences: [] };
  }

  let filenames = await fs.promises.readdir(experiencesDirectory);
  filenames = filenames.reverse();

  let allExperiences: ExperiencesPost[] = [];

  // read file by batch
  for (let i = 0; i < filenames.length; i += POSTS_BATCH_SIZE) {
    const batchFilenames = filenames.slice(i, i + POSTS_BATCH_SIZE);

    const batchExperiences: ExperiencesPost[] = await Promise.all(
      batchFilenames.map(async (filename) => {
        const fullPath = path.join(experiencesDirectory, filename);
        const fileContents = await fs.promises.readFile(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        return {
          locale, // use locale parameter
          title: data.title,
          slug: data.slug,
          description: data.description,
          image: data.image || "",
          date: data.date,
          content,
          metadata: data,
        };
      })
    );

    allExperiences.push(...batchExperiences);
  }

  // sort experiences by date
  allExperiences = allExperiences.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    experiences: allExperiences,
  };
}
