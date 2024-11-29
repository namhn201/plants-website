import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Slider from "react-slick";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";
import GreenTreeComponent from "../GreentreeComponent";
import router from "next/router";
import { routerName } from "@/constants/router.constant";
import { useState } from "react";
import Image from "next/image";

const ProductComponent = (dataPlants: any) => {
  console.log(
    "propssssssssss from ProductComponent",
    dataPlants.props.filteredProducts
  );
  const [isRender, setisRender] = useState(false);
  // const handleNavigation = () => {
  //   router.push(routerName.GreenTree);
  // };
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000, // Thời gian giữa các slide (tính bằng ms)
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3, // Tùy chỉnh số lượng card hiển thị khi chiều rộng màn hình <= 1424px
          slidesToScroll: 2, // Số lượng card cuộn mỗi lần
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-full w-full">
      <div className="w-full flex justify-center mb-14">
        <div className="md:w-[100%]">
          <div className="relative w-full h-[60vh]">
            {/* <div className="w-full h-full"> */}
            <Image
              loading="eager"
              sizes="w-full h-full"
              // loading="lazy"
              className="object-cover"
              src="/assets/danhmucsanpham_bg_1.jpg"
              alt="Ảnh nền"
              layout="fill"
            />
            {/* </div> */}
            {/* <div className="relative w-full h-64">
              <Image
                src="/assets/danhmucsanpham_bg_1.jpg"
                alt="Ảnh nền"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div> */}

            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="absolute text-white text-4xl md:text-6xl top-0 right-0 w-full h-full">
              <div className="w-full flex justify-center items-center h-full ">
                <div className="w-[86%]">
                  <nav className="flex justify-center mb-5">
                    <ul className="flex gap-2 w-full text-xs sm:text-base mb-5">
                      <li>
                        <Link href={routerName.DashBoard}>
                          <p>Trang chủ</p>
                        </Link>
                      </li>
                      <li>
                        <Link href={routerName.Products}>
                          <p>/ Sản phẩm </p>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <p>Danh mục sản phẩm</p>
                  <p className="text-base  sm:w-[40%] ">
                    Sự lựa chọn hoàn hảo từ danh mục sản phẩm hàng đầu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Line ngăng giữa */}
      <div className="w-full flex justify-center mb-2">
        <div className="">
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
      <div className="w-full flex justify-center mb-5">
        <div className="flex md:w-[50%] justify-evenly gap-3 sm:gap-5 font-semibold">
          <Link
            href={routerName.GreenTree}
            className=" active:border-[#014e37] hover:text-[#014e37]"
          >
            <div className="flex justify-center">
              <img loading="lazy" src="/assets/icon-cayxanh.svg" alt="" />
            </div>
            <div className="text-center pt-3 text-sm sm:text-base w-20 sm:w-28 h-11 rounded-lg  active:border-[#014e37] hover:text-[#014e37]">
              Cây Xanh
            </div>
          </Link>

          <Link
            href={routerName.Decorativeplant}
            className=" active:border-[#014e37] hover:text-[#014e37]"
          >
            <div className="flex justify-center">
              <img loading="lazy" src="/assets/icon-caycanh.svg" alt="" />
            </div>
            <div className="text-center pt-3 text-sm sm:text-base w-20 sm:w-28 h-11 rounded-lg  hover:border-[#014e37] active:border-[#014e37] hover:text-[#014e37]">
              Cây Cảnh
            </div>
            {/* <button className="text-sm sm:text-base w-20 sm:w-28 h-11 rounded-lg border border-solid text-[#393939] border-[#E5E5E5] hover:border-[#014e37] active:border-[#014e37] hover:text-[#014e37]">
            </button> */}
          </Link>
          <Link
            href={routerName.PlantProtect}
            className=" hover:border-[#014e37] active:border-[#014e37] hover:text-[#014e37]"
          >
            <div className="flex justify-center">
              <img loading="lazy" src="/assets/icon-thuoc.svg" alt="" />
            </div>
            <div className="text-center pt-3 text-sm sm:text-base w-20 sm:w-28 h-11 rounded-lg ">
              Thuốc trừ sâu
            </div>
          </Link>
        </div>
      </div>
      {/* Line ngăng giữa */}
      <div className="w-full flex justify-center mb-8 mt-8">
        <div className="">
          <div className="flex justify-center items-center mb-7">
            <div className="w-[300px] flex justify-center items-center">
              <img
                loading="lazy"
                className="rounded-full w-[full] rotate-180"
                src="./assets/liner_flower.png"
                alt=""
              />
            </div>
          </div>
          <p className="text-center font-semibold text-2xl sm:text-3xl">
            Sản phẩm tiêu biểu
          </p>
        </div>
      </div>
      {/* Line ngăng giữa */}
      {/* <div className="flex justify-center"> */}
      <div className="flex justify-center">
        <div className="flex w-full max-w-[90vw] h-full justify-center">
          <Slider arrows={false} {...settings} className="w-full">
            {dataPlants.props.filteredProducts.map((plantTypical: any) => (
              <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-xl overflow-hidden group cursor-pointer ">
                {/* Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 w-full bg-[#4E8D78] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                  <Typography
                    color="white"
                    className="text-sm pl-5 text-white flex-col"
                  >
                    {plantTypical.name}
                  </Typography>
                  <Typography
                    color="white"
                    className="text-sm pl-5 text-white flex-col"
                  >
                    Nguồn gốc:{plantTypical.origin}
                  </Typography>

                  <Link
                    href={`/products/${plantTypical.category}/${plantTypical.id}`}
                  >
                    <Button
                      variant="text"
                      className="flex items-center gap-2 text-white"
                    >
                      Xem thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>

                {/* Card Header */}
                <CardHeader shadow={false} floated={false} className="h-96 m-0">
                  <Image
                    layout="fill"
                    src={plantTypical.images[2]}
                    alt="card-image"
                    className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                  />
                </CardHeader>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default ProductComponent;
