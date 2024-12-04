import Breadcrumb from "@/components/breadcrumb";
import { routerName } from "@/constants/router.constant";
import { Button, Carousel } from "@material-tailwind/react";
import { AnyNaptrRecord } from "dns";
import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductDetailsComponent = (dataPlant: any) => {
  if (!dataPlant) {
    return <div>Không tìm thấy cây này.</div>;
  }
  console.log("DATA", dataPlant.data);
  const plantDetails = dataPlant.data.plant;
  console.log("PLantDetails", plantDetails.id);
  useEffect(() => {
    // Kiểm tra xem có phải đang chạy trên client-side không
    if (typeof window !== "undefined") {
      const callback = function (entries: any) {
        entries.forEach((entry: any) => {
          console.log(entry);

          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          } else {
            entry.target.classList.remove("animate-fadeIn");
          }
        });
      };

      const observer = new IntersectionObserver(callback);

      const targets = document.querySelectorAll(".js-show-on-scroll");
      targets.forEach(function (target) {
        target.classList.add("opacity-0");
        observer.observe(target);
      });
    }
  }, []);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      AOS.init({
        easing: "ease-in-out",
        duration: 550
      });
      AOS.refresh();
    }
  }, [imageLoaded]);
  return (
    <div>
      <div className="w-full flex justify-center ">
        <div className="w-[100%]">
          <div className="relative w-full h-[50vh]">
            <Image
              data-aos="zoom-out"
              loading="eager"
              layout="fill"
              className="w-full h-full object-cover"
              src={plantDetails.images[1]}
              alt=""
              onLoadingComplete={() => {
                console.log("Ảnh đã tải xong");
                setImageLoaded(true);
              }}
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="absolute text-white text-4xl md:text-6xl top-0 right-0 w-full h-full">
              <div className="w-full flex justify-center items-center h-full ">
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
                          <p>Sản phẩm /</p>
                        </Link>
                      </li>
                      <li>
                        <a href="#URL">{plantDetails.name}</a>
                      </li>
                    </ul>
                  </nav>
                  <p>{plantDetails.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 flex justify-center h-full mb-10">
        <div className="w-[93%] max-w-[1600px] bg-[#C3D2CE] p-7 rounded-2xl h-full">
          <div
            className={`w-full lg:flex rounded-2xl gap-7 mb-7 h-full ${
              !plantDetails?.careInstructions ? "lg:h-full" : "lg:h-[488px]"
            }`}
          >
            <div className="bg-[#EDEDED] lg:w-[40%] rounded-2xl mb-7 lg:mb-0">
              <Carousel
                // autoplay={true}
                loop={true}
                autoplayDelay={6000}
                className="w-full h-full rounded-2xl"
              >
                <Image
                  width={736}
                  height={985}
                  src={plantDetails.images[2]}
                  className="w-full max-h-[450px] lg:max-h-[700px] object-cover h-full rounded-2xl"
                  alt=""
                />
                  <Image
                  width={736}
                  height={985}
                  src={plantDetails.images[3]}
                  className="w-full max-h-[450px] lg:max-h-[700px] object-cover h-full rounded-2xl"
                  alt=""
                />
                  <Image
                  width={736}
                  height={985}
                  src={plantDetails.images[4]}
                  className="w-full max-h-[450px] lg:max-h-[700px] object-cover h-full rounded-2xl"
                  alt=""
                />
               
              </Carousel>
            </div>
            <div
            data-aos="fade-up" 
              className={`bg-[#EDEDED] lg:w-[60%] rounded-2xl ${
                !plantDetails?.careInstructions ? "lg:h-[700px]" : "h-full"
              }`}
            >
              <div data-aos="fade-up" data-aos-delay="140" className=" p-5 w-full  ">
                <p className="font-semibold text-2xl">{plantDetails.name}</p>
                <div data-aos="fade-up" className="mt-3 font-semibold">
                  <p>Tên gọi khác: {plantDetails.otherNames}</p>
                  <p>Tên khoa học : {plantDetails.scientificName}</p>
                  <p>Nguồn gốc : {plantDetails.origin}</p>
                </div>
              </div>
              <div className="w-full pl-5">
                <div className="w-full">
                  <p data-aos="fade-up" data-aos-delay="150"className="font-semibold">
                    ĐẶC TRƯNG
                  </p>
                  <hr className="" />

                  <div data-aos="fade-up" data-aos-delay="160" className="mt-2">
                    <p>{plantDetails.characteristics}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              !plantDetails?.careInstructions
                ? "hidden"
                : "w-full flex flex-col-reverse lg:flex-row  rounded-2xl gap-7 mb-7 h-full lg:h-[290px]"
            }
          >
            <div data-aos="fade-up" className="bg-[#EDEDED] lg:w-[40%] h-full rounded-2xl p-5 lg:mb-0">
              <p data-aos="fade-up" data-aos-delay="140" className="font-semibold">
                CÔNG DỤNG
              </p>
              <hr className="mb-3" />

              <div data-aos="fade-up" data-aos-delay="150">
                <p>{plantDetails.usage}</p>
              </div>
            </div>
            <div className="bg-[#EDEDED] lg:w-[60%] h-full rounded-2xl">
              <div>
                <Image
                  width={500}
                  height={290}
                  src={plantDetails.images[0]}
                  className="w-full h-[290px] rounded-2xl object-cover"
                  alt="image_product_left"
                />
              </div>
            </div>
          </div>
          <div
            className={
              !plantDetails?.careInstructions
                ? "hidden"
                : "w-full lg:flex rounded-2xl gap-7 h-full"
            }
          >
            <div className="bg-[#EDEDED] lg:w-[40%] h-full  rounded-2xl mb-7 lg:mb-0 lg:h-[488px]">
              <div className="Video h-full sm:h-[55%] rounded-2xl">
                <div className="relative w-full lg:h-[488px] overflow-hidden mb-5">
                  <video
                    className="sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:min-w-full sm:min-h-full object-cover h-full max-h-[350px] w-full rounded-2xl"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src={plantDetails.video} type="video/mp4" />
                    Loading...
                  </video>
                </div>
              </div>
            </div>
            <div data-aos="fade-up"  className="bg-[#EDEDED] lg:w-[60%] h-full rounded-2xl p-5 2xl:h-[488px]">
              <p data-aos="fade-up" data-aos-delay="140" className="text-2xl mb-3 font-semibold ">
                HƯỚNG DẪN CÁCH TRỒNG VÀ CHĂM SÓC CÂY BẰNG LĂNG
              </p>
              <p data-aos="fade-up" data-aos-delay="150" className="pl-1">
                - {plantDetails.careInstructions?.step1}
              </p>
              <p data-aos="fade-up" data-aos-delay="160" className="pl-1">
                - {plantDetails.careInstructions?.step2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsComponent;
