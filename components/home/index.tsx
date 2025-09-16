import GreetingDetails from "@/components/home/GreetingDetails";
import GreetingImage from "@/components/home/GreetingImage";
import { Fade } from "react-awesome-reveal";

export default function HomeComponent() {
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
