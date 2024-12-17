import Image from "next/image";

const SubsidiariesComponent = (data: any) => {
  console.log("Props from ECComponent ", data.props);
  // console.log("Props from BOSupervisorsComponent", data);

  return (
    <div className="w-full max-w-[1600px]">
      <p className="text-center text-2xl sm:text-3xl mb-10">
        BAN ĐIỀU HÀNH CÔNG TY THÀNH VIÊN
      </p>
      {/* /Bottom */}
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full  justify-items-center mb-10">
        {data.props.map((member: any, index: any) => (
          <div
            data-aos="fade-up"
            key={index}
            className="Top min-w-[300px] w-full  h-[212px] sm:w-[640px] sm:h-[315px] bg-[#C3D2CE] rounded-2xl flex justify-center items-center mb-10"
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
                    <p className="text-base sm:text-xl w-full ">
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
export default SubsidiariesComponent;
