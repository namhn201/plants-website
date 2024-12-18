import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BOSupervisorsComponent = (data: any) => {
  console.log("Props from BOSupervisorsComponent", data);
  const [topDirector, ...bottomDirectors] = data.props;
  console.log("topDirector", topDirector);
  console.log("bottomDirectors", bottomDirectors);
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
    AOS.refresh();
  });
  return (
    <div className="w-full max-w-[1600px]">
      <p className="text-center text-3xl">BAN KIỂM SOÁT</p>

      {/* TOp */}
       <div className="w-full grid grid-cols-1 justify-items-center sm:my-10">
          {/* //Card */}
          <div
            data-aos="fade-up"
            className="min-w-[300px] w-full h-[480px] sm:w-[640px] sm:h-[280px] bg-[#C3D2CE] rounded-2xl flex justify-center items-center mb-10"
            >
            <div className=" bg-white w-[90%] h-[91%] rounded-2xl sm:flex">
              <div className="sm:w-1/2 px-12 sm:pl-4">
                <div className="relative w-full h-[230px]  sm:w-[230px] sm:h-[223px] mt-4">
                  <Image
                    loading="eager"
                    layout="fill"
                    className="rounded-2xl object-cover"
                    src={topDirector.image}
                    alt={topDirector.name}
                  />
                </div>
              </div>
              <div className="sm:w-1/2 sm:h-[80%] px-5 sm:px-0">
                <div className="content mt-6 flex justify-start h-full text-xl">
                  <div>
                    <p className="text-base sm:text-xl font-bold">
                      {topDirector.name}
                    </p>
                    <p className="text-base sm:text-lg">Năm sinh: 1988</p>
                    <p className="text-lg sm:text-xl w-full ">
                      {topDirector.position}
                    </p>
                    <p className="text-base sm:text-lg">{topDirector.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* /Bottom */}
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full justify-items-center mb-10">
        {bottomDirectors.map((member: any, index: any) => (
          <div
            data-aos="fade-up"
            key={index}
            className="min-w-[300px] w-full h-[480px] sm:w-[640px] sm:h-[280px] bg-[#C3D2CE] rounded-2xl flex justify-center items-center mb-10"
            >
            <div className=" bg-white w-[90%] h-[91%] rounded-2xl sm:flex">
              <div className="sm:w-1/2 px-12 sm:pl-4">
                <div className="relative w-full h-[230px]  sm:w-[230px] sm:h-[223px] mt-4">
                  <Image
                    loading="eager"
                    layout="fill"
                    className="rounded-2xl w-full h-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
              </div>
              <div className="sm:w-1/2 sm:h-[80%] px-5 sm:p-0">
                <div className="content mt-6 flex justify-start h-full text-xl w-full">
                  <div className="w-full">
                    <p>{member.gender === "Female" ? "Bà:" : "Ông:"}</p>
                    <p className="text-base sm:text-xl font-bold">
                      {member.name}
                    </p>
                    <p className="text-base sm:text-lg">Năm sinh: 1988</p>
                    <p className="text-lg sm:text-xl w-full ">
                      {member.position}
                    </p>
                    <p className="text-base sm:text-lg">{member.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BOSupervisorsComponent;
