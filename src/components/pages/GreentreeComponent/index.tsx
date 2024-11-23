import Breadcrumb from "@/components/breadcrumb";
import { routerName } from "@/constants/router.constant";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { div } from "framer-motion/client";
import Link from "next/link";
import { useEffect } from "react";

const GreenTreeComponent = (dataplants: any) => {
  console.log("Listening from GreenTreeComponent");
  // console.log("propssssssssss", dataplants.props.data.plants[0].items);
  // const half = Math.ceil(dataplants.props.data.plants.length / 2); // Làm tròn lên để chia đều
  // console.log("làm tròn", half);

  return (
    <div className=" w-full">
      <div className="relative w-full h-[90dvh]">
        <img
          className="w-full h-full object-cover"
          src="/assets/greentree_bg_1.jpg"
          alt=""
        />
        <div className="absolute top-1/3 right-[32%] text-white text-5xl md:text-6xl">
          <div className="w-full text-center">
            <p>CÂY XANH</p>
            <p>CÂY XANH CÔNG TRÌNH</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[70%]">
          {/* <div className="w-full sm:flex justify-center mb-5 gap-8">
            <div>
              <div className="relative w-full sm:max-w-[280px] h-[540px] lg:max-w-[430px] lg:h-[640px] my-5">
                <div className="image h-full w-full rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src="/assets/caybanglang.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 content p-5 w-full">
                  <p className=" text-xl font-semibold text-white shadow-md bg-black bg-opacity-40 p-1 rounded-2xl mb-2 w-full text-center">
                    CÂY BẰNG LĂNG
                  </p>

                  <Button className="rounded-full bg-white text-black hover:bg-gray-400 w-full">
                    Xem thêm
                  </Button>
                </div>
              </div>
              <div className="relative w-full sm:max-w-[280px] h-[540px] lg:max-w-[430px] lg:h-[640px] mb-5">
                <div className="image h-full w-full rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src="/assets/caybanglang.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 content p-5 w-full">
                  <p className=" text-xl font-semibold text-white shadow-md bg-black bg-opacity-40 p-1 rounded-2xl mb-2 w-full text-center">
                    CÂY BẰNG LĂNG
                  </p>

                  <Button className="rounded-full bg-white text-black hover:bg-gray-400 w-full">
                    Xem thêm
                  </Button>
                </div>
              </div>
              <div className="relative w-full sm:max-w-[280px] h-[380px] lg:max-w-[430px] lg:h-[480px]">
                <div className="image h-full w-full rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src="/assets/caybanglang.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 content p-5 w-full">
                  <p className=" text-xl font-semibold text-white shadow-md bg-black bg-opacity-40 p-1 rounded-2xl mb-2 w-full text-center">
                    CÂY BẰNG LĂNG
                  </p>

                  <Button className="rounded-full bg-white text-black hover:bg-gray-400 w-full">
                    Xem thêm
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="relative w-full sm:max-w-[280px] h-[380px] lg:max-w-[430px] lg:h-[480px] my-5">
                <div className="image h-full w-full rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src="/assets/caybanglang.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 content p-5 w-full">
                  <p className=" text-xl font-semibold text-white shadow-md bg-black bg-opacity-40 p-1 rounded-2xl mb-2 w-full text-center">
                    CÂY BẰNG LĂNG
                  </p>

                  <Button className="rounded-full bg-white text-black hover:bg-gray-400 w-full">
                    Xem thêm
                  </Button>
                </div>
              </div>
              <div className="relative w-full sm:max-w-[280px] h-[540px] lg:max-w-[430px] lg:h-[640px] mb-5">
                <div className="image h-full w-full rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src="/assets/caybanglang.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 content p-5 w-full">
                  <p className=" text-xl font-semibold text-white shadow-md bg-black bg-opacity-40 p-1 rounded-2xl mb-2 w-full text-center">
                    CÂY BẰNG LĂNG
                  </p>

                  <Button className="rounded-full bg-white text-black hover:bg-gray-400 w-full">
                    Xem thêm
                  </Button>
                </div>
              </div>
              <div className="relative w-full sm:max-w-[280px] h-[540px] lg:max-w-[430px] lg:h-[640px]">
                <div className="image h-full w-full rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src="/assets/caybanglang.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 content p-5 w-full">
                  <p className=" text-xl font-semibold text-white shadow-md bg-black bg-opacity-40 p-1 rounded-2xl mb-2 w-full text-center">
                    CÂY BẰNG LĂNG
                  </p>

                  <Button className="rounded-full bg-white text-black hover:bg-gray-400 w-full">
                    Xem thêm
                  </Button>
                </div>
              </div>
            </div>
            
          </div> */}

          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center mt-10">
            {dataplants.props.data.plants[0].items.map(
              (plant: any, index: any) => (
                <div
                  key={index}
                  className="relative product-card sm:max-w-[280px] h-[540px] lg:max-w-[430px] lg:h-[640px] mb-8"
                >
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={plant.images[2] ? plant.images[2] : plant.images[0]} // Dùng ảnh đầu tiên nếu ảnh thứ 3 không tồn tại
                    alt="Sản phẩm 1"
                  />
                  <div className="absolute bottom-0 content p-5 w-full">
                    <p className=" text-xl font-semibold text-white shadow-md bg-black bg-opacity-40 p-1 rounded-2xl mb-2 w-full text-center">
                      {plant.name}
                    </p>
                    <Link href={`/products/${plant.id}`}>
                      <Button className="rounded-full bg-white text-black hover:bg-gray-400 w-full">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GreenTreeComponent;

<Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
  {/* Gradient Effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
  {/* Hover Content */}
  <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
    <Typography color="white" className="text-sm pl-5 text-white flex-col">
      CÂY CAU ĐUÔI CHỒN
    </Typography>
    <Typography color="white" className="text-sm pl-5 text-white flex-col">
      Nguồn gốc: Australia
    </Typography>

    <Typography color="white" className="text-sm pl-5 text-white">
      Chi tiết:Cây cau đuôi chồn là một loài cây sống lâu năm, ưa sáng và có khả
      năng chịu hạn rất tốt. Do đó loại cây này rất được ưa chuộng để sử dụng
      làm công trình cảnh quan, trang trí biệt thự, công viên hoặc trên các
      tuyến đường đi đô thị…
    </Typography>
    <Button variant="text" className="flex items-center gap-2 text-white">
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
  </div>

  {/* Card Header */}
  <CardHeader shadow={false} floated={false} className="h-96 mb-4">
    <img
      src="./assets/plant_7.png"
      alt="card-image"
      className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
    />
  </CardHeader>
</Card>;
