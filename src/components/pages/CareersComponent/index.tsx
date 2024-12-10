import Breadcrumb from "@/components/breadcrumb";
import { routerName } from "@/constants/router.constant";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "@material-tailwind/react";

const CareersComponent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      AOS.init({
        easing: "ease-in-out",
        duration: 550,
      });
      AOS.refresh();
    }
  }, [imageLoaded]);
  return (
    <div className="w-full">
      <div className="w-full flex justify-center mb-10 ">
        <div className="w-[100%]">
          <div className="relative w-full h-[60vh]">
            <Image
              data-aos="zoom-out"
              loading="eager"
              layout="fill"
              className="w-full h-full object-cover"
              src="/assets/lichsuhinhthanh.jpg"
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
                    <nav className="flex justify-center mb-5">
                      <ul className="flex gap-2 w-[100%] text-xs sm:text-base">
                        <li>
                          <Link href={routerName.DashBoard}>
                            <p>Trang chủ</p>
                          </Link>
                        </li>
                        <li>
                          <Link href={routerName.Careers}>
                            <p>/ Tuyển dụng </p>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <p>Tuyển dụng</p>
                    <p className="text-base sm:w-[40%] ">
                      Gieo mầm, nuôi dưỡng tương lai – Cùng chúng tôi phát triển
                      không gian xanh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-10">
        <div className="w-[93%] max-w-[1600px] lg:flex gap-6">
          <div className="lg:w-1/3 rounded-xl shadow-lg pb-3 ">
            <p className="text-2xl font-semibold m-6">Thông tin tìm kiếm</p>
            <div className="m-5 mt-6">
              <Input color="teal" size="lg" label="Chức danh" />
            </div>
            <div className="m-5 mt-6 ">
              <Input
                className="rounded-lg"
                size="lg"
                color="teal"
                label="Công ty"
              />
            </div>
            <div className="m-5 mt-6 ">
              <Input
                className="rounded-lg"
                size="lg"
                color="teal"
                label="Địa điểm"
              />
            </div>
            <div className=" m-5">
              <div className="w-[100%] flex mb-5">
                <button
                  className="flex w-full items-center justify-center rounded-md border border-[#3E7160] border-slate-300 py-2 px-4 text-center text-[#3E7160] text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#3E7160] hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Ứng tuyển
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1.5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-[100%] flex ">
                <button
                  className="flex w-full items-center justify-center rounded-md border border-[#B3B3B3] border-slate-300 py-2 px-4 text-center text-[#B3B3B3] text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#D13238] hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Huỷ
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1.5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className=" lg:w-2/3 rounded-xl shadow-lg">
            <div className="lg:h-56 shadow-xl bg-white m-5 rounded-lg py-10 hover:border-b-[12px] sm:hover:border-b-0 sm:hover:border-l-[12px] border-[#3E7160] transition-all duration-300 ">
              <p className="px-10 text-2xl font-semibold">
                Tập đoàn NamHuynhGarden
              </p>
              <p className="px-10 text-lg font-semibold">
                Chuyên Viên Truyền Thông và Marketing
              </p>
              <div className="px-16 text-lg">
                <p>
                  + Lên kế hoạch và thực hiện các chiến dịch quảng bá về giải
                  pháp xanh.
                </p>
                <p>
                  + Phối hợp với các công ty con để tăng nhận diện thương hiệu.
                </p>
              </div>
              <p className="text-end px-5">11-11-2024</p>
              {/* <div className="w-[68%] flex justify-end">
                <button
                  className="flex items-center rounded-md border border-[#3E7160] border-slate-300 py-2 px-4 text-center text-[#3E7160] text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#3E7160] hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Ứng tuyển
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1.5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
            <div className="lg:h-56 shadow-xl bg-white m-5 rounded-lg py-10 hover:border-b-[12px] sm:hover:border-b-0 sm:hover:border-l-[12px] border-[#3E7160] transition-all duration-300 ">
              <p className="px-10 text-2xl font-semibold">
                Tập đoàn NamHuynhGarden
              </p>
              <p className="px-10 text-lg font-semibold">
                Chuyên Viên Truyền Thông và Marketing
              </p>
              <div className="px-16 text-lg">
                <p>
                  + Lên kế hoạch và thực hiện các chiến dịch quảng bá về giải
                  pháp xanh.
                </p>
                <p>
                  + Phối hợp với các công ty con để tăng nhận diện thương hiệu.
                </p>
              </div>
              <p className="text-end px-5">11-11-2024</p>
            </div>
            <div className="lg:h-56 shadow-xl bg-white m-5 rounded-lg py-10 hover:border-b-[12px] sm:hover:border-b-0 sm:hover:border-l-[12px] border-[#3E7160] transition-all duration-300 ">
              <p className="px-10 text-2xl font-semibold">
                Tập đoàn NamHuynhGarden
              </p>
              <p className="px-10 text-lg font-semibold">
                Chuyên Viên Truyền Thông và Marketing
              </p>
              <div className="px-16 text-lg">
                <p>
                  + Lên kế hoạch và thực hiện các chiến dịch quảng bá về giải
                  pháp xanh.
                </p>
                <p>
                  + Phối hợp với các công ty con để tăng nhận diện thương hiệu.
                </p>
              </div>
              <p className="text-end px-5">11-11-2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#C3D2CE] h-12 my-5">
        <p className=" flex items-center justify-center h-full w-full text-2xl">
          Quy Trình Ứng Tuyển
        </p>
      </div>
      <div className="w-full flex justify-center mb-10 h-full">
        <div className="w-[93%] max-w-[1600px]">
          <div className="w-full flex flex-col-reverse  lg:flex-row lg:h-[32rem] bg-white">
            <div className="lg:w-1/2 bg-transparent">
              <div className=" p-16 h-full ">
                <p className="text-3xl">Ứng tuyển</p>
                <p className="text-xl pl-6">
                  + Các ứng viên quan tâm có thể ứng tuyền thông qua trang tuyển
                  dụng bằng gmail
                </p>
                <p className="text-xl pl-6">
                  + Gửi hồ sơ ứng viên hoặc Sơ yếu lý lịch (CV) có đầy đủ thông
                  tin cá nhân, quá trình học tập, kinh nghiệm làm việc, mục tiêu
                  nghề nghiệp và sở thích cá nhân tới Bộ phận Tuyển dụng theo
                  các hướng dẫn được nêu trong các tin đăng tuyển dụng.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 p-10 bg-transparent">
              <Image
                className="object-cover w-full h-full  "
                width={800}
                height={690}
                src="/assets/step1.jpg"
                alt=""
              />
            </div>
          </div>
          {/* //Step2 */}
          <div className="w-full flex flex-col-reverse lg:flex-row lg:h-[32rem] bg-[#f2f4f4]">
            <div className="lg:w-1/2 p-10 bg-transparent">
              <Image
                className="object-cover w-full h-full shadow-lg "
                width={800}
                height={690}
                src="/assets/step2.jpg"
                alt=""
              />
            </div>
            <div className="lg:w-1/2 bg-transparent">
              <div className=" p-16 h-full">
                <p className="text-3xl">Ứng tuyển</p>
                <p className="text-xl pl-6">
                  + Các ứng viên quan tâm có thể ứng tuyền thông qua trang tuyển
                  dụng bằng gmail
                </p>
                <p className="text-xl pl-6">
                  + Gửi hồ sơ ứng viên hoặc Sơ yếu lý lịch (CV) có đầy đủ thông
                  tin cá nhân, quá trình học tập, kinh nghiệm làm việc, mục tiêu
                  nghề nghiệp và sở thích cá nhân tới Bộ phận Tuyển dụng theo
                  các hướng dẫn được nêu trong các tin đăng tuyển dụng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareersComponent;
