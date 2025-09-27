import { ExperienceCard } from "@/app/[locale]/experiences/ExperienceCard";
import { Locale } from "@/i18n/routing";
import { getExperiences } from "@/lib/getExperiences";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Fade } from "react-awesome-reveal";

type Params = Promise<{ locale: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Experience" });

  return constructMetadata({
    page: "Experience",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/experience`,
    canonicalUrl: `/experience`,
  });
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const { experiences } = await getExperiences(locale);

  const t = await getTranslations("Experience");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>
      <Fade direction="up" duration={1000}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.slug}
              locale={locale}
              experience={experience}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}
