import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { div } from "framer-motion/client";

const BODirectorsComponent = (data: any) => {
  console.log("Props from BODirectorsComponent ", data.props);
  const [topDirector, ...bottomDirectors] = data.props;
  // const [topDirector, ...bottomDirectors] = boardOfDirectors;
  console.log("topDirector", topDirector);
  console.log("bottomDirectors", bottomDirectors);
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
    AOS.refresh();
  });

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [dataPopup, setDataPopup] = useState<any>({});
  const handleOpenPopup = (data: any) => {
    setDataPopup(data);
    setIsOpenPopup(true);
    console.log("data", data);
  };
  useEffect(() => {
    console.log("dataPopup", typeof dataPopup);
  }, [dataPopup]);
  return (
    <div className="w-full max-w-[1600px]">
      <div
        onClick={() => setIsOpenPopup(false)}
        className={
          isOpenPopup
            ? "z-10 top-0 fixed w-full h-full flex justify-center items-center"
            : "hidden"
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-[73%] h-[80vh] bg-white rounded-2xl shadow-2xl overflow-auto "
        >
          <div className="flex flex-col-reverse lg:flex-row p-10 lg:h-full">
            <div className="lg:w-2/3">
              <p className="text-2xl mt-3 mb-6">Quá trình công tác</p>
              {dataPopup.careerProgress?.map((data: any) => (
                <div className="mb-5">
                  Vào năm {data.year}: Ông đảm nhận vị trí {data.position} của{" "}
                  {data.company}
                </div>
              ))}
            </div>
            <div className="lg:w-1/3 flex lg:pl-9 lg:border-l-2">
              <div className="leading-8">
                <Image
                  width={200}
                  height={200}
                  src={dataPopup.image}
                  alt={dataPopup.role}
                  className="rounded-md"
                />
                <p>{dataPopup.position}</p>
                <p>{dataPopup.name}</p>
                <p>Năm sinh: {dataPopup.birthYear}</p>
                <p>{dataPopup.contact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-3xl">HỘI ĐỘNG QUẢN TRỊ</p>

        {/* Top */}
        <div className="w-full grid grid-cols-1 justify-items-center sm:my-10">
          {/* //Card */}
          <div
            onClick={() => handleOpenPopup(topDirector)}
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
                    <p className="text-base sm:text-lg">
                      {topDirector.contact}
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
              onClick={() => handleOpenPopup(member)}
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
                      className="rounded-2xl object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 sm:h-[80%] px-5 sm:px-0">
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
    </div>
  );
};
export default BODirectorsComponent;
