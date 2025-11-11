import { Project } from "@/types/experiences";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const t = useTranslations("ProjectList");

  if (!projects || projects.length === 0) {
    return null;
  }

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
            {t("status.completed")}
          </span>
        );
      case "ongoing":
        return (
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
            {t("status.ongoing")}
          </span>
        );
      case "paused":
        return (
          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">
            {t("status.paused")}
          </span>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "short",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="mt-8">
      <Fade direction="up" duration={1300} triggerOnce fraction={0} cascade>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          {t("title")}
        </h2>
      </Fade>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Fade
            key={index}
            direction="up"
            duration={800}
            triggerOnce
            delay={index * 100}
            fraction={0}
          >
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-0">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  {getStatusBadge(project.status)}
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(project.startDate)} -{" "}
                    {project.endDate
                      ? formatDate(project.endDate)
                      : t("present")}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Contributions */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {t("contributions")}
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {project.contributions.map((contribution, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {t("technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
