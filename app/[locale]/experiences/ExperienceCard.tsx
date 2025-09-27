import { Link as I18nLink } from "@/i18n/routing";
import { ExperiencesPost } from "@/types/experiences";
import Image from "next/image";

export function ExperienceCard({
  experience,
  locale,
}: {
  experience: ExperiencesPost;
  locale: string;
}) {
  return (
    <I18nLink
      href={`/experience/${experience.slug}`}
      prefetch={false}
      className="bg-transparent rounded-lg hover:underline"
    >
      <div className="relative rounded-xl shadow-md  pt-[56.25%]">
        <Image
          src={experience.image || "/placeholder.svg"}
          alt={experience.title || ""}
          fill
          className="object-cover shadow-sm w-full rounded hover:shadow-lg transition-shadow duration-200 h-[200p]"
        />
      </div>
      <div className="py-3 flex-1 flex flex-col">
        <h2 className="text-lg font-500 line-clamp-2 flex-grow text-center">
          {experience.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 text-center">
          {experience.date}
        </p>
      </div>
    </I18nLink>
  );
}
