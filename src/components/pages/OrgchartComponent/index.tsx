import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { div } from "framer-motion/client";

const OrgchartComponent = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
    AOS.refresh();
  });
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] max-w-[1600px]">
        <p className="text-center w-full text-3xl">Sơ đồ cấu trúc</p>
        <div className="flex justify-center items-center">
          <Image
            width={960}
            height={540}
            src="/assets/sodococautochuc.jpg"
            className="my-5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default OrgchartComponent;
