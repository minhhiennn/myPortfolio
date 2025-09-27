"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import MainWorking from "@/assets/images/developerActivity.svg";
import { useTranslations } from "next-intl";
import { softwareSkills } from "./skills";
import { cn } from "@/lib/utils";

export default function AboutDetails() {
  const { theme } = useTheme();
  const about = useTranslations("About");

  const skillSection: any = about.raw("skillSection");

  return (
    <div className="flex flex-row justify-between items-start gap-3">
      <Fade direction="left" duration={1000}>
        <div className="w-[100%] h-auto">
          <Image alt="Man Working" src={MainWorking} />
        </div>
      </Fade>
      <Fade direction="right" duration={1000}>
        <div className="">
          <h1 className="text-[30px] text-center md:text-left md:text-[40px] xl:text-[56px] font-normal">
            {skillSection.title}
          </h1>
          <p className="text-[16px] text-left text-[#868e96]">
            {skillSection.subTitle}
          </p>
          <div>
            <div className="">
              <ul className="flex flex-row justify-center items-center flex-wrap mt-[19px]">
                {softwareSkills.map((skill) => {
                  const Icon = skill.icon; // lưu component vào biến
                  return (
                    <li
                      key={skill.skillName}
                      className="flex flex-col justify-start items-center mr-[20px] mb-[20px]"
                    >
                      <Icon className="text-4xl" />
                      <p className="mt-1 text-[10px] text-[#868e96]">
                        {skill.skillName}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            {skillSection.skills.map((skill: any, i: number) => {
              return (
                <p
                  key={i}
                  className={cn(
                    "my-2 text-[19px] text-[#868e96]",
                    theme === "dark" ? "text-white" : ""
                  )}
                >
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}
