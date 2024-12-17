import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";
import { routerName } from "@/constants/router.constant";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import useWindowSize from "@/hooks/common/useWindowSize";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactComponent = () => {
  const { width } = useWindowSize();
  const [isLargescreen, setLargescreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (width > 768) {
      setLargescreen(true);
    }
    if (width <= 768) {
      setLargescreen(false);
    }
    console.log("IS SMALL SCREEN", isLargescreen);
  }, [width]);

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
    <div className="h-full">
      <div className="w-full flex justify-center ">
        <div className="w-[100%]">
          <div className="relative w-full h-full">
            {/* Nội dung  */}
            <div className="relative text-white text-4xl md:text-6xl w-full h-[50vh] bg-[#3E7160] flex justify-center">
              <Image
                layout="fill"
                className={
                  isLargescreen ? "hidden" : "w-full h-full object-cover"
                }
                src="/assets/contact_bg_2.jpg"
                alt=""
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80 via-black/5 rounded-2xl"></div> */}
              <div
                className={
                  isLargescreen
                    ? "hidden"
                    : "absolute inset-0 bg-black opacity-20"
                }
              ></div>
              <div className="absolute top-0  w-full flex justify-center items-center h-full max-w-[1600px]">
                <div className=" w-[86%]">
                  <nav className="flex justify-center mb-5">
                    <ul className="flex gap-2 w-full text-xs sm:text-base">
                      <li>
                        <Link href={routerName.DashBoard}>
                          <p>Trang chủ</p>
                        </Link>
                      </li>
                      <li>
                        <Link href={routerName.Contact}>
                          <p>/ Sản phẩm </p>
                        </Link>
                      </li>
                      {/* <li>
            <a href="#URL">Cây xanh</a>
          </li> */}
                      {/* <li>Current Page</li> */}
                    </ul>
                  </nav>
                  <p>LIÊN HỆ</p>
                  <p className="text-base  sm:w-[40%] ">
                    Khám phá vẻ đẹp tự nhiên cho khu vườn – Tạo dựng một không
                    gian sống xanh mát và đầy năng lượng!
                  </p>
                </div>
                <div
                  data-aos="flip-right"
                  className={
                    !isLargescreen
                      ? "hidden"
                      : "WINDOWIMAGE absolute top-36 lg:top-28 right-4 lg:right-10 xl:right-32 md:h-[600px] md:w-[315px] lg:h-[750px] lg:w-[415px] rounded-t-full"
                  }
                >
                  <Image
                    layout="fill"
                    loading="eager"
                    src="/assets/contact_bg_2.jpg"
                    className="rounded-t-full shadow-2xl object-cover h-full w-full"
                    alt=""
                    onLoadingComplete={() => {
                      console.log("Ảnh đã tải xong");
                      setImageLoaded(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="info flex justify-center w-full mt-20"
      >
        <div className="w-[93%] max-w-[1600px] pl-7 lg:pl-20">
          <div className="mb-6">
            <p className="text-3xl font-semibold">Thông tin liên hệ</p>
            <p className="md:w-[40%]">
              Đừng ngần ngại liên hệ để nhận tư vấn và hỗ trợ từ đội ngũ chuyên
              gia của chúng tôi.
            </p>
          </div>
          {/* 3 icon  */}
          <div className="lg:flex w-1/2  xl:gap-16 mb-10">
            <div>
              <div className="lg:flex justify-center mb-3">
                <div className="w-11 h-11 bg-[#527F71] text-white rounded-t-full flex justify-center items-center">
                  <div>
                    <PhoneIcon className="w-8 h-8 " />
                  </div>
                </div>
              </div>
              <p>000.000.000</p>
            </div>
            <div>
              <div className="lg:flex justify-center mb-3">
                <div className="w-11 h-11 bg-[#527F71] text-white rounded-t-full flex justify-center items-center">
                  <div>
                    <EnvelopeIcon className="w-8 h-8 " />
                  </div>
                </div>
              </div>

              <p>info@gmail.garden.com</p>
            </div>
            <div>
              <div className="lg:flex justify-center mb-3">
                <div className="w-11 h-11 bg-[#527F71] text-white rounded-t-full flex justify-center items-center">
                  <div>
                    <MapPinIcon className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <p>100, quan 1, TP.HCM</p>
            </div>
          </div>
          <div className="lg:flex w-1/3 justify-evenly lg:ml-5 xl:gap-16">
            <div>
              <div className="lg:flex justify-center mb-3">
                <div className="w-11 h-11 bg-[#527F71] text-white rounded-t-full flex justify-center items-center">
                  <div>
                    <MapPinIcon className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <p>102, quan 1, TP.HCM</p>
            </div>
            <div>
              <div className="lg:flex justify-center mb-3">
                <div className="w-11 h-11 bg-[#527F71] text-white rounded-t-full flex justify-center items-center">
                  <div>
                    <MapPinIcon className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <p>101, quan 1, TP.HCM</p>
            </div>
          </div>
          {/* SOCIAL MEDIA */}
          <div className="mt-9 mb-3">
            <p className="text-2xl font-semibold">Mạng xã hội</p>
          </div>
          <div className="flex w-1/2 gap-5">
            <button className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-xl shadow-gray-200 group transition-all duration-300">
              <svg
                className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path
                  d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                  fill=""
                />
              </svg>
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
            <button className="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-xl shadow-gray-200 group transition-all duration-300">
              <svg
                className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path
                  d="M61.1026 23.7185C60.5048 21.471 58.7363 19.6981 56.4863 19.0904C52.4181 18 36.0951 18 36.0951 18C36.0951 18 19.7805 18 15.7039 19.0904C13.4622 19.6897 11.6937 21.4627 11.0876 23.7185C10 27.7971 10 36.3124 10 36.3124C10 36.3124 10 44.8276 11.0876 48.9063C11.6854 51.1537 13.4539 52.9267 15.7039 53.5343C19.7805 54.6247 36.0951 54.6247 36.0951 54.6247C36.0951 54.6247 52.4181 54.6247 56.4863 53.5343C58.728 52.935 60.4965 51.162 61.1026 48.9063C62.1902 44.8276 62.1902 36.3124 62.1902 36.3124C62.1902 36.3124 62.1902 27.7971 61.1026 23.7185Z"
                  fill=""
                />
                <path
                  className="fill-white transition-all duration-300 group-hover:fill-[#FF3000]"
                  d="M30.8811 44.1617L44.4392 36.3124L30.8811 28.463V44.1617Z"
                  fill="white"
                />
              </svg>
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#FF3000] z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="w-full flex justify-center mt-32 mb-20">
        <div className="w-[90%] max-w-[1600px] h-full bg-[#C3D2CE] rounded-2xl p-7 sm:p-16">
          <div className="bg-[#FFFFFF] rounded-2xl p-10">
            <p className="text-2xl font-semibold mb-3">
              Gửi Thông Điệp Của Bạn
            </p>
            <p className="md:w-2/3 mb-5">
              Nếu bạn có bất kỳ câu hỏi, gợi ý hoặc muốn liên hệ với chúng tôi,
              hãy điền thông tin và nội dung vào mẫu dưới đây. Chúng tôi sẽ phản
              hồi lại bạn trong thời gian sớm nhất có thể."
            </p>
            <input
              type="text"
              placeholder="Email"
              className="bg-[#EDEDED] w-[100%] h-12 rounded-3xl p-5 outline-none mb-5"
            />
            <input
              type="text"
              placeholder="Tên"
              className="bg-[#EDEDED] w-[100%] h-12 rounded-3xl p-5 outline-none mb-5"
            />
            <textarea
              name=""
              id="message"
              rows={5}
              className="bg-[#EDEDED] w-full rounded-3xl p-5"
            ></textarea>
            {/* <textarea id="message" rows={5} className="bg-[#EDEDED] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
             */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactComponent;
