"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import emoji from "react-easy-emoji";

export default function GreetingDetails() {
  const { theme } = useTheme();
  const greeting = useTranslations("Greeting");

  return (
    <div className="w-full">
      <div>
        <h1
          className={cn(
            "text-[70px] text-black leading-[1.1] my-12",
            theme === "dark" ? "text-white" : ""
          )}
        >
          {" "}
          {greeting("title")}{" "}
          <span className="inline-block animate-wave [transform-origin:70%_70%]">
            {emoji("👋")}
          </span>
        </h1>
        <p className={cn("text-[30px] leading-10 text-[#868e96] font-[350]")}>
          {greeting("subTitle")}
        </p>

        <p className={cn("my-[40px] text-[30px] leading-10 text-[#868e96]")}>
          <span className="inline-block animate-bounce text-red-500">W</span>
          <span className="inline-block animate-bounce delay-100 text-orange-500">
            e
          </span>
          <span className="inline-block animate-bounce delay-200 text-yellow-500">
            l
          </span>
          <span className="inline-block animate-bounce delay-300 text-green-500">
            c
          </span>
          <span className="inline-block animate-bounce delay-400 text-blue-500">
            o
          </span>
          <span className="inline-block animate-bounce delay-500 text-indigo-500">
            m
          </span>
          <span className="inline-block animate-bounce delay-600 text-violet-500">
            e
          </span>

          <span className="ml-2">{greeting("welcome")}</span>
        </p>
      </div>
    </div>
  );
}
