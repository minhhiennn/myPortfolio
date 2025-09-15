import GreetingDetails from "@/components/home/GreetingDetails";
import GreetingImage from "@/components/home/GreetingImage";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";

export default function HomeComponent() {
  const t = useTranslations("Home");

  return (
    <>
      <Fade direction="up" duration={1000}>
        <div className="w-[90%] py-5 px-2.5 mx-auto my-0 mt-8">
          <div className="flex flex-row justify-between items-start">
            <GreetingDetails />
            <GreetingImage />
          </div>
        </div>
      </Fade>
    </>
  );
}

const WEBSITE_LOGO_DEMO = [
  { name: "J Blog", url: "https://weijunext.com/" },
  { name: "OG Image Generator", url: "https://ogimage.click/" },
  { name: "newTab", url: "https://ntab.dev/" },
  { name: "NextJS 中文文档", url: "https://nextjscn.org/" },
];
