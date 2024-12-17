import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ECComponent = (data: any) => {
  console.log("Props from ECComponent ", data);
  // console.log("Props from BOSupervisorsComponent", data);
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
      <p className="text-center text-3xl">BAN ĐIỀU HÀNH</p>

      {/* TOp */}
      <div className="w-full grid grid-cols-1 justify-items-center my-10">
        {/* //Card */}
        <div
          data-aos="fade-up"
          className="Top min-w-[300px] w-full  h-[212px] sm:w-[640px] sm:h-[315px] bg-[#C3D2CE] rounded-2xl flex justify-center items-center"
        >
          <div className=" bg-white w-[90%] h-[81%] rounded-2xl flex">
            <div className="w-1/2 pl-4">
              <div className="relative w-full h-[140px]  sm:w-[230px] sm:h-[223px] mt-4">
                <Image
                  loading="eager"
                  layout="fill"
                  className="rounded-2xl object-cover"
                  src={topDirector.image}
                  alt={topDirector.name}
                />
              </div>
            </div>
            <div className="w-1/2 h-[80%] pl-1">
              <div className="content mt-6 flex justify-start h-full text-xl">
                <div>
                  <p>{topDirector.gender === "Female" ? "Bà:" : "Ông:"}</p>
                  <p className="text-base sm:text-xl font-bold">
                    {topDirector.name}
                  </p>
                  <p className="text-base sm:text-lg">Năm sinh: 1988</p>
                  <p className="text-lg sm:text-xl w-full ">
                    {topDirector.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Bottom */}
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full  justify-items-center mb-10">
        {bottomDirectors.map((member: any, index: any) => (
          <div
            data-aos="fade-up"
            key={index}
            className="min-w-[300px] w-full  h-[212px] sm:w-[640px] sm:h-[315px] bg-[#C3D2CE] rounded-2xl flex justify-center items-center mb-10"
          >
            <div className=" bg-white w-[90%] h-[81%] rounded-2xl flex">
              <div className="w-1/2 pl-4">
                <div className="relative w-full h-[140px]  sm:w-[230px] sm:h-[223px] mt-4">
                  <Image
                    loading="eager"
                    layout="fill"
                    className="rounded-2xl object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
              </div>
              <div className="w-1/2 h-[80%] pl-1">
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
                    {/* <p className="text-[0.8rem] sm:text-lg">{member.contact}</p> */}
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
export default ECComponent;
