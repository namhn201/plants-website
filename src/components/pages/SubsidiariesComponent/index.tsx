import Image from "next/image";

const SubsidiariesComponent = (data:any) => {
    console.log("Props from ECComponent ", data.props)
    // console.log("Props from BOSupervisorsComponent", data);
  
    return (
        <div className="w-full max-w-[1600px]">
          <p className="text-center text-3xl mb-10">BAN ĐIỀU HÀNH CÔNG TY THÀNH VIÊN</p>
          {/* /Bottom */}
          <div className="grid grid-cols-1 xl:grid-cols-2 w-full  justify-items-center mb-10">
            {data.props.map((member: any, index: any) => (
              <div
                key={index}
                className="Top w-[640px] h-[315px] bg-[#C3D2CE] rounded-2xl flex justify-center items-center mb-10"
              >
                <div className=" bg-white w-[90%] h-[81%] rounded-2xl flex">
                  <div className="w-1/2 pl-4">
                    <div className="relative w-[230px] h-[223px] mt-4">
                      <Image
                        loading="eager"
                        layout="fill"
                        className="rounded-2xl"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 h-[80%]">
                    <div className="content mt-6 flex justify-start h-full text-xl w-full">
                      <div className="w-full">
                        <p>{member.gender === "Female" ? "Bà:" : "Ông:"}</p>
                        <p className="font-bold">{member.name}</p>
                        <p className="text-lg">Năm sinh: 1988</p>
                        <p className="w-full ">{member.position}</p>
                        <p className="text-lg">{member.contact}</p>
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
