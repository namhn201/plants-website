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

const ProductComponent = () => {
  const [isRender, setisRender] = useState(false)
  const handleNavigation = () => {
    console.log("Listening from ProductsComponent");
    setisRender(true)
    // router.push(routerName.GreenTree); 
  };
  if(isRender){
    return <GreenTreeComponent />
  }
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
      <Breadcrumb />

      {/* Line ngăng giữa */}
      <div className="w-full flex justify-center mb-2">
        <div className="">
          <p className="text-center font-semibold text-2xl sm:text-3xl">
            Danh Mục Sản Phẩm
          </p>
          <div className="flex justify-center items-center mb-7">
            <div className="w-[300px] flex justify-center items-center pl-1">
              <img
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
        <div className="flex w-[50%] justify-evenly font-semibold">
          <button
            onClick={handleNavigation}
            className="w-28 h-11 rounded-lg border border-solid text-[#393939] border-[#E5E5E5] hover:border-[#014e37] active:border-[#014e37] hover:text-[#014e37]"
          >
            Cây Xanh
          </button>
          <button className="w-28 h-11 rounded-lg border border-solid text-[#393939] border-[#E5E5E5] hover:border-[#014e37] active:border-[#014e37] hover:text-[#014e37]">
            Cây Cảnh
          </button>
          <button className="w-28 h-11 rounded-lg border border-solid text-[#393939] border-[#E5E5E5] hover:border-[#014e37] active:border-[#014e37] hover:text-[#014e37]">
            Thuốc
          </button>
        </div>
      </div>
      {/* Line ngăng giữa */}
      <div className="w-full flex justify-center mb-8 mt-8">
        <div className="">
          <div className="flex justify-center items-center mb-7">
            <div className="w-[300px] flex justify-center items-center pl-1">
              <img
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
            {/* <Card className="w-64 h-full border-solid border border-[#E5E5E5] rounded-lg">
              <CardHeader shadow={false} floated={false} className="h-96">
                <img
                  src="./assets/plant_1.png"
                  alt="card-image"
                  className="h-full w-full shadow-2xl shadow-blue-gray-800"
                />
              </CardHeader>
              <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div>
              <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody>
            </Card> */}
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  CÂY CAU ĐUÔI CHỒN
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Nguồn gốc: Australia
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết:Cây cau đuôi chồn là một loài cây sống lâu năm, ưa
                  sáng và có khả năng chịu hạn rất tốt. Do đó loại cây này rất
                  được ưa chuộng để sử dụng làm công trình cảnh quan, trang trí
                  biệt thự, công viên hoặc trên các tuyến đường đi đô thị…
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/plant_7.png"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  CÂY CÁNH PHƯỢNG
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Nguồn gốc: Australia
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết: Cây Cánh Phượng cũng thường được thấy ở nhiều vườn
                  Quốc Gia trên thế giới và cả ở Việt Nam. Với lá màu xanh đậm
                  và hoa màu cam vàng hình bàn chải lớn nở rộ vào mùa xuân và
                  mùa hạ tạo nên khung cảnh rực rỡ. Cây có tán lớn, tạo bóng mát
                  rất hiệu quả nên khá được yêu thích.
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/caycanhphuong.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  CÂY CHUỒNG VÀNG
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Nguồn gốc: Nam mỹ
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết: Cây chuông vàng với hoa có hình gần giống chiếc
                  chuông, hoa màu vàng có hương thơm đặc trưng, màu hoa nổi bật
                  đem tới sự tươi mới, sặc sỡ và đặc biệt là cây có bóng mát nên
                  cây chuông vàng được trồng trên khắp các con đường, trong
                  khuôn viên trường học, biệt thự hay khu đô thị nhà máy.
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/caychuongvang.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  CÂY CAU VUA
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Nguồn gốc: Từ phía nam Florida, Mexico, một phần Trung Mỹ.
                  Hiện nay rất phổ biến tại Việt Nam
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết: Bên cạnh công dụng làm cây bóng mát, cây trang trí
                  cảnh quan sân vườn, cây cau vua còn được biết đến nhiều như là
                  một loại cây mang ý nghĩa phong thủy đặc biệt. Với dáng đứng
                  thẳng, trang nghiêm, cây cau vua tượng trưng cho sự bề thế,
                  quý phái. Theo phong thủy, cây cau vua trồng trong nhà sẽ cải
                  thiện được dương khí, đem đến nhiều may mắn, tài lộc cho gia
                  chủ.
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/caycauvua.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  CÂY BẰNG LĂNG
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Nguồn gốc: Ấn Độ
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết: Cây bằng lăng là loại cây bóng mát trên đường phố,
                  các công viên, bóng mát ở sân vườn nhà, tạo mảng xanh cho khu
                  nhà máy, xí nghiệp… Với sắc hoa tím đặc trưng và rực rỡ, cây
                  Bằng lăng tím trở thành cây bóng mát ưa chuộng tại các khu đô
                  thị.
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/caybanglang.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  CÂY ĐUÔI CÔNG
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Nguồn gốc: Từ vùng nhiệt đới Nam Mỹ. Hiện nay, loài cây này
                  được trồng phổ biến ở nhiều quốc gia, trong đó có Việt Nam.
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết: Nói đến Cây đuôi công người ta sẽ liên tưởng đến
                  ngay loài chim công đang múa, ai cũng phải ngỡ ngàng vì vẻ đẹp
                  ấn tượng, rực rỡ của nó. Cây đuôi công cũng vậy, những chiếc
                  lá nhiều hoa văn với nhiều màu sắc rực rỡ thể hiện sự kỳ diệu
                  của thiên nhiên. Không chỉ đẹp về hình dáng mà cây đuôi công
                  với bộ lá to còn giúp điều hòa không khí hiệu quả, ngăn chặn
                  dị ứng
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/cayduoicong.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  MONSTERA ĐỘT BIẾN
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  ...
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết: Monstera là tên của 1 chi thực vật gồm khoảng 50
                  loài (nhưng hiện tại biến thể lên hơn trăm loại khác nhau).
                  Borsigiana 1 loài mới (hình như chưa được cập nhật vào chi
                  Monstera) phân biệt với Monstera Deliciosa bằng thân (dài hơn
                  và cần được leo trèo), cuốn lá, dáng lá,…. Variegata gọi sang
                  sang là đột biến, còn dân giả như mình thì là chiếc lá 2,3 màu
                  cứ gọi là Var
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/plant_product_2.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  CÂY VẠN LỘC
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Nguồn gốc: Từ Thái Lan, Indonesia, cây được nhân giống và
                  trồng tại nhiều quốc gia châu Á.
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết: Trong vạn lộc thì từ vạn có nghĩa là nhiều, chỉ một
                  số lượng rất lớn, từ lộc có nghĩa là phúc lộc, tiền bạc và sự
                  may mắn. Kết hợp 2 từ này lại, ta có thể hiểu vạn lộc có ý
                  nghĩa rằng sự may mắn, phúc lộc sẽ đến không bao giờ hết, đặc
                  biệt là khi cây ra hoa. Đây là một điềm lành báo hiệu tài lộc
                  nảy nở trong gia đình.
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/cayvanloc.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
            <Card className="relative w-64 h-full border-solid border border-[#E5E5E5] rounded-lg overflow-hidden group">
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#014e37]/10 to-[#014e37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#014e37] bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Cheestar 50WG – thuốc đặc trị các loài rầy rệp hại cây trồng{" "}
                </Typography>
                <Typography
                  color="white"
                  className="text-sm pl-5 text-white flex-col"
                >
                  Nguồn gốc: Nicotex
                </Typography>

                <Typography color="white" className="text-sm pl-5 text-white">
                  Chi tiết:Cheestar 50WG là thuốc trừ sâu tác động nội hấp, thấm
                  sâu có tác dụng phòng trừ các loài rầy – rệp, hiệu quả kéo dài
                  đến 2 tuần.
                </Typography>
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
              </div>

              {/* Card Header */}
              <CardHeader shadow={false} floated={false} className="h-96 mb-4">
                <img
                  src="./assets/Cheestar_15g.png"
                  alt="card-image"
                  className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
              </CardHeader>

              {/* Additional Content */}
              {/* <div className="flex justify-center items-center">
                <img
                  className="w-44"
                  src="./assets/liner_flower_products_3.jpg"
                  alt=""
                />
              </div> */}
              {/* <CardBody>
                <div className="mb-2 text-center">
                  <Typography color="blue-gray" className="font-semibold">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold">
                    $95.00
                  </Typography>
                </div>
              </CardBody> */}
            </Card>
          </Slider>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default ProductComponent;
