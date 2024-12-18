import { routerName } from "@/constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BODirectorsComponent from "@/components/pages/BODirectorsComponent";
import BOSupervisorsComponent from "@/components/pages/BOSupervisorsComponent";
import ECComponent from "@/components/pages/ECComponent";
import SubsidiariesComponent from "@/components/pages/SubsidiariesComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import OrgchartComponent from "@/components/pages/OrgchartComponent";

const TeamComponent = (dataplants: any) => {
  console.log(
    "Dataanyplant from teamComponent",
    dataplants.props.data.subsidiaries
  );
  const boardOfDirectors =
    dataplants.props.data.greenGardenHouse.boardOfDirectors;
  const auditCommittee = dataplants.props.data.greenGardenHouse.auditCommittee;
  const executiveTeam = dataplants.props.data.greenGardenHouse.executiveTeam;
  const subsidiaries = dataplants.props.data.subsidiaries;
  const [activeContent, setActiveContent] = useState("BODComponent");

  const handleMenuClick = (content: any) => {
    console.log("content", content);
    setActiveContent(content);
  };
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      AOS.init({
        easing: "ease-in-out",
      });
      AOS.refresh();
    }
  }, [imageLoaded]);
  return (
    <div className="">
      <div className="w-full flex justify-center ">
        <div className="w-[100%]">
          <div className="relative w-full h-[60vh] max-h-[1000px]">
            <Image
              data-aos="zoom-out"
              loading="eager"
              layout="fill"
              className="w-full h-full object-cover"
              src="/assets/greentree_bg_2.jpg"
              alt=""
              onLoadingComplete={() => {
                console.log("Ảnh đã tải xong");
                setImageLoaded(true);
              }}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80 via-black/5 rounded-2xl"></div> */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="absolute text-white text-4xl md:text-5xl top-0 right-0 w-full h-full">
              <div className="w-full flex items-center h-full ">
                {/* <p>CÂY XANH CÔNG TRÌNH</p> */}
                <div className="w-full flex justify-center">
                  <div className="w-[86%] max-w-[1600px]">
                    <nav className="flex justify-center mb-5 w-full">
                      <ul className="flex gap-1 w-full text-xs sm:text-base">
                        <li>
                          <Link href={routerName.DashBoard}>
                            <p>Trang chủ /</p>
                          </Link>
                        </li>
                        <li>
                          <Link href={routerName.Products}>
                            <p>Cơ cấu tổ chức</p>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <p>CƠ CẤU TỔ CHỨC</p>
                    {/* <p className="text-base  sm:w-[40%] ">
                      Khám phá vẻ đẹp tự nhiên cho khu vườn – Tạo dựng một không
                      gian sống xanh mát và đầy năng lượng!
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Navbar_bottom w-full flex justify-start h-full lg:h-10 items-center bg-[#C3D2CE] my-5">
        {/* <div className="md:w-[100%] md:flex md:justify-evenly p-5 gap-10 md:p-0">
          <div className="w-[40%] md:flex justify-end gap-10">
            <div
              className="cursor-pointer whitespace-nowrap"
              onClick={() => handleMenuClick("BODComponent")}
            >
              HỘI ĐỒNG QUẢN TRỊ
            </div>
            <div
              className="cursor-pointer whitespace-nowrap"
              onClick={() => handleMenuClick("BOSComponent")}
            >
              BAN KIỂM SOÁT
            </div>
          </div>
          <div className="w-[60%] lg:flex gap-10">
            <div
              className="cursor-pointer whitespace-nowrap"
              onClick={() => handleMenuClick("ECComponent")}
            >
              BAN ĐIỀU HÀNH
            </div>
            <div
              className="cursor-pointer whitespace-nowrap"
              onClick={() => handleMenuClick("SubsidiariesComponent")}
            >
              BAN ĐIỀU HÀNH CÔNG TY THÀNH VIÊN
            </div>
            <div
              className="cursor-pointer whitespace-nowrap"
              onClick={() => handleMenuClick("OrgchartComponent")}
            >
              SƠ ĐỒ TỔ CHỨC
            </div>
          </div>
        </div> */}
        {/* <div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div
            className="cursor-pointer whitespace-nowrap"
            onClick={() => handleMenuClick("BODComponent")}
          >
            HỘI ĐỒNG QUẢN TRỊ
          </div>
          <div
            className="cursor-pointer whitespace-nowrap"
            onClick={() => handleMenuClick("BOSComponent")}
          >
            BAN KIỂM SOÁT
          </div>
          <div
            className="cursor-pointer whitespace-nowrap"
            onClick={() => handleMenuClick("ECComponent")}
          >
            BAN ĐIỀU HÀNH
          </div>
          <div
            className="cursor-pointer whitespace-nowrap"
            onClick={() => handleMenuClick("SubsidiariesComponent")}
          >
            BAN ĐIỀU HÀNH CÔNG TY THÀNH VIÊN
          </div>
          <div
            className="cursor-pointer whitespace-nowrap"
            onClick={() => handleMenuClick("OrgchartComponent")}
          >
            SƠ ĐỒ TỔ CHỨC
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full min-w-0">
          <div
            onClick={() => handleMenuClick("BODComponent")}
            className="cursor-pointer whitespace-nowrap text-center"
          >
            HỘI ĐỒNG QUẢN TRỊ
          </div>
          <div
            onClick={() => handleMenuClick("BOSComponent")}
            className="cursor-pointer whitespace-nowrap text-center"
          >
            BAN KIỂM SOÁT
          </div>
          <div
            onClick={() => handleMenuClick("ECComponent")}
            className="cursor-pointer whitespace-nowrap text-center"
          >
            BAN ĐIỀU HÀNH
          </div>
          <div
            onClick={() => handleMenuClick("SubsidiariesComponent")}
            className="cursor-pointer whitespace-nowrap text-center"
          >
            BĐH CÔNG TY THÀNH VIÊN
          </div>
          <div
            onClick={() => handleMenuClick("OrgchartComponent")}
            className="cursor-pointer whitespace-nowrap text-center"
          >
            SƠ ĐỒ TỔ CHỨC
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        {activeContent === "BODComponent" && (
          <BODirectorsComponent props={boardOfDirectors} />
        )}
        {activeContent === "BOSComponent" && (
          <BOSupervisorsComponent props={auditCommittee} />
        )}
        {activeContent === "ECComponent" && (
          <ECComponent props={executiveTeam} />
        )}
        {activeContent === "SubsidiariesComponent" && (
          <SubsidiariesComponent props={subsidiaries} />
        )}
        {activeContent === "OrgchartComponent" && <OrgchartComponent />}
      </div>
    </div>
  );
};
export default TeamComponent;
