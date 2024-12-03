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
      });
      AOS.refresh();
    }
  }, [imageLoaded]);
  return (
    <div className="">
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
                  {/* <div className="text-base  sm:w-[40%] ">
                      <p>Tên gọi khác: {plantDetails.otherNames}</p>
                      <p>Tên khoa học : {plantDetails.scientificName}</p>
                      <p>Nguồn gốc : {plantDetails.origin}</p>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-center mt-10">
        <div className="w-[93%] h-full flex-col max-w-[1400px]">
          {/* Sản phẩm 1 */}
          <div className="w-full h-full flex justify-center bg-[#C3D2CE] rounded-2xl mb-10">
            <div className="w-full h-full p-5">
              <div className="w-full h-full flex justify-center">
                <div className="w-full h-full lg:flex gap-5">
                  <div
                    className={`${
                      !plantDetails?.careInstructions
                        ? "lg:w-[45%]"
                        : "lg:w-[70%]"
                    }  h-full`}
                  >
                    <div className="w-full h-full rounded-2xl flex flex-col-reverse sm:flex sm:flex-row gap-5 mb-5">
                      {/* ảnh và video */}
                      <div
                        className={`w-[100%] sm:w-[45%]  rounded-2xl ${
                          !plantDetails?.careInstructions ? "hidden" : ""
                        }`}
                      >
                        <div className="relative ImageSide1 h-[45%] rounded-2xl hidden sm:block">
                          <Image
                            layout="fill"
                            loading="lazy"
                            className="w-full h-full max-h-[300px] object-cover rounded-2xl pb-5"
                            src={plantDetails.images[0]}
                            alt="image_product_left"
                          />
                        </div>
                        <div className="Video h-full sm:h-[55%] rounded-2xl">
                          <div className="relative w-full h-full overflow-hidden mb-5">
                            <video
                              className="sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:min-w-full sm:min-h-full object-cover h-full max-h-[350px] w-full rounded-2xl"
                              controls
                              autoPlay
                              muted
                              loop
                            >
                              <source
                                src={plantDetails.video}
                                type="video/mp4"
                              />
                              Loading...
                            </video>
                          </div>
                        </div>
                      </div>
                      {/* ảnh chính */}

                      <div
                        className={`ImageMain ${
                          !plantDetails?.careInstructions
                            ? "flex justify-center w-[100%]"
                            : "w-[100%] sm:w-[55%]"
                        }  h-full rounded-2xl`}
                      >
                        <Carousel
                          // autoplay={true}
                          loop={true}
                          autoplayDelay={6000}
                          className={` ${
                            !plantDetails?.careInstructions
                              ? " md:w-[80%] lg:w-[100%]"
                              : "w-full "
                          }  h-full `}
                        >
                          <img
                            loading="lazy"
                            className={`${
                              !plantDetails?.careInstructions
                                ? "w-full sm:h-[700px] object-cover sm:object-fill"
                                : "w-full max-h-[650px] object-cover"
                            }  h-full  rounded-2xl`}
                            src={plantDetails.images[2]}
                            alt="image_main_products"
                          />
                          <img
                            loading="lazy"
                            className={`${
                              !plantDetails?.careInstructions
                                ? "w-full sm:h-[700px] object-cover sm:object-fill"
                                : "w-full max-h-[650px] object-cover"
                            }  h-full  rounded-2xl`}
                            src={plantDetails.images[3]}
                            alt="image_main_products"
                          />
                          <img
                            loading="lazy"
                            className={`${
                              !plantDetails?.careInstructions
                                ? "w-full sm:h-[700px] object-cover sm:object-fill"
                                : "w-full max-h-[650px] object-cover"
                            }  h-full  rounded-2xl`}
                            src={plantDetails.images[4]}
                            alt="image_main_products"
                          />
                        </Carousel>
                      </div>
                    </div>
                    <div
                      className={`w-full h-full bg-brown-500 rounded-2xl flex-col ${
                        !plantDetails?.careInstructions ? "hidden" : ""
                      }`}
                    >
                      <div className="relative w-full h-[380px]">
                        <Image
                          layout="fill"
                          className="w-full h-full object-cover rounded-2xl"
                          src={plantDetails.images[1]}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      !plantDetails?.careInstructions
                        ? "lg:w-[55%] "
                        : "lg:w-[30%] "
                    } lg:w-[30%]  rounded-3xl  p-3 flex flex-col bg-[#EDEDED] mt-5 lg:mt-0`}
                  >
                    <div
                      data-aos="fade-up"
                      className=" p-5 h-[20%] w-full border-b border-solid"
                    >
                      <p className="font-semibold text-2xl">
                        {plantDetails.name}
                      </p>
                      <div data-aos="fade-up" className="mt-3 font-semibold">
                        <p>Tên gọi khác: {plantDetails.otherNames}</p>
                        <p>Tên khoa học : {plantDetails.scientificName}</p>
                        <p>Nguồn gốc : {plantDetails.origin}</p>
                      </div>
                    </div>
                    <div className="w-full h-[80%] p-5">
                      <div className="w-full h-full ">
                        <p data-aos="fade-up" className="font-semibold">
                          ĐẶC TRƯNG
                        </p>
                        <hr className="mb-3" />

                        <div data-aos="fade-up" className="mt-5">
                          <p>{plantDetails.characteristics}</p>
                        </div>
                        <p data-aos="fade-up" className="font-semibold mt-5">
                          DANH MỤC
                        </p>
                        <hr className="mb-3" />
                        <div data-aos="fade-up">
                          <p>{plantDetails.categoryType}</p>
                        </div>
                        <p data-aos="fade-up" className="font-semibold mt-5">
                          CÔNG DỤNG
                        </p>
                        <hr className="mb-3" />

                        <div data-aos="fade-up">
                          <p>{plantDetails.usage}</p>
                        </div>
                        <Link href={routerName.Contact}>
                          <Button
                            data-aos="fade-up"
                            className="bg-[#4E8D78] hover:bg-[#014e37] mt-5 w-full "
                          >
                            Liên hệ
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`w-full bg-[#EDEDED] rounded-2xl mt-5 p-10 ${
                  !plantDetails?.careInstructions ? "hidden" : ""
                }`}
              >
                <p data-aos="fade-up" className="text-2xl mb-3 font-semibold ">
                  HƯỚNG DẪN CÁCH TRỒNG VÀ CHĂM SÓC CÂY BẰNG LĂNG
                </p>
                <p data-aos="fade-up" className="pl-1">
                  - {plantDetails.careInstructions?.step1}
                </p>
                <p data-aos="fade-up" className="pl-1">
                  - {plantDetails.careInstructions?.step2}
                </p>
              </div>
            </div>
          </div>

          {/* Line ngăng giữa */}
          <div className="w-full flex justify-center mb-2">
            <div className="">
              {/* <p className="text-center font-semibold text-2xl sm:text-3xl">

        </p> */}
              <div className="flex justify-center items-center mb-7">
                <div className="w-[300px] flex justify-center items-center pl-1">
                  <img
                    loading="lazy"
                    className="rounded-full w-[full]"
                    src="./assets/liner_flower.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Line ngăng giữa */}
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsComponent;
