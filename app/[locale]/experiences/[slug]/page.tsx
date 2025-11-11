import { Locale, LOCALES } from "@/i18n/routing";
import { getExperiences } from "@/lib/getExperiences";
import { constructMetadata } from "@/lib/metadata";
import { ExperiencesPost } from "@/types/experiences";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { Fade } from "react-awesome-reveal";
import ProjectList from "@/components/experiences/ProjectList";
import MDXComponents from "@/components/mdx/MDXComponents";
import { MDXRemote } from "next-mdx-remote-client/rsc";

type Params = Promise<{
  locale: string;
  slug: string;
}>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await params;
  let { experiences }: { experiences: ExperiencesPost[] } =
    await getExperiences(locale);
  const experience = experiences.find(
    (experience) => experience.slug === "/" + slug
  );

  if (!experience) {
    return constructMetadata({
      title: "404",
      description: "Page not found",
      noIndex: true,
      locale: locale as Locale,
      path: `/experience/${slug}`,
      canonicalUrl: `/experience/${slug}`,
    });
  }

  return constructMetadata({
    page: "experience",
    title: experience.title,
    description: experience.description,
    images: experience.image ? [experience.image] : [],
    locale: locale as Locale,
    path: `/experience/${slug}`,
    canonicalUrl: `/experience/${slug}`,
  });
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Params;
}) {
  const { locale, slug } = await params;
  let { experiences }: { experiences: ExperiencesPost[] } =
    await getExperiences(locale);

  const experience = experiences.find(
    (experience) => experience.slug === "/" + slug
  );

  if (!experience) {
    return notFound();
  }

  return (
    <div className="w-full md:w-3/5 px-2 md:px-12 pb-6">
      <h1 className="break-words text-4xl font-bold mt-6 mb-4 text-center">
        <AnimatedTitle title={experience.title} />
        <div className="block w-full">
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 text-center">
            {experience.date}
          </p>
        </div>
      </h1>

      {/* MDX Content */}
      <div className="">
        <Fade direction="up" duration={1000} triggerOnce fraction={0} cascade>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <MDXRemote source={experience.content} components={MDXComponents} />
          </div>
        </Fade>
      </div>

      {/* Projects List */}
      {experience.metadata?.projects && (
        <ProjectList projects={experience.metadata.projects} />
      )}
    </div>
  );
}

export async function generateStaticParams() {
  let experiences = (await getExperiences()).experiences;

  // Filter out experiences without a slug
  experiences = experiences.filter((experience) => experience.slug);

  return LOCALES.flatMap((locale) =>
    experiences.map((experience) => {
      const slugPart = experience.slug
        .replace(/^\//, "")
        .replace(/^experiences\//, "");

      return {
        locale,
        slug: slugPart,
      };
    })
  );
}
