// import { Button, Carousel } from "@material-tailwind/react";
import {
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Slider from "react-slick";
// import image from "";
const settings = {
  accessibility: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
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
        slidesToShow: 2,
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

const DashboardComponent = () => {
  const titleImage_1 = "Text Reveal Animation 💫";
  const titleImage_2 = "Text Reveal Animation_2 💫";

  return (
    <div className="h-full">
      <div className="image_slider">
        <Carousel
          autoplay={true}
          loop={true}
          // autoplayDelay={3000}
          className="rounded-sm w-full max-w-full h-full"
        >
          {/* Image 1 */}
          <div className="relative w-full  h-full ">
            <img
              src="https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/31.webp"
              alt="image 1"
              className="h-full w-full "
            />
            {/* Nội dung chiếm một nửa chiều rộng bên phải */}
            <div className="absolute top-0 right-0 w-1/2 h-full text-black p-6 flex flex-col justify-center items-center">
              <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
                {titleImage_1.match(/./gu)!.map((char, index) => (
                  <span
                    className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <p className="mt-2">Mô tả cho ảnh này</p>
              <Button className="bg-[#014e37]">Shop Now</Button>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-full w-full">
            <img
              src="https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/31.webp"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            {/* Nội dung chiếm một nửa chiều rộng bên phải */}
            <div className="absolute top-0 right-0 w-1/2 h-full text-black p-6 flex flex-col justify-center items-center">
              <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
                {titleImage_2.match(/./gu)!.map((char, index) => (
                  <span
                    className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <p className="mt-2">Mô tả cho ảnh này</p>
              <Button className="bg-[#014e37]">Shop Now</Button>
            </div>
          </div>
        </Carousel>
      </div>
      {/* 3 card image */}
      <div className="flex h-full w-full justify-center mb-4">
        <div className="md:flex justify-center md:justify-evenly gap-3 w-[100%] h-full py-3 md:py-7 ">
          <div className="w-full h-full md:max-w-[550px] md:max-h-[300px]">
            <div className="relative pb-3 px-3 md:pb-0 md:px-0">
              <img
                className="h-full w-full rounded-md"
                src="https://elementor.dostguru.com/plantishdemo/wp-content/uploads/2021/07/33.webp"
                alt=""
              />
              <div className="absolute pl-3 top-0 left-1 w-1/2 h-full text-black flex flex-col justify-center items-center">
                {/* <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
                  aa
                </h1> */}
                <p className="mt-2 mb-3 sm:mb-7 text-[14px] sm:text-[16px] font-semibold">
                  Thuốc bảo vệ thực vật
                </p>
                {/* <Button className="bg-[#014e37]">Shop Now</Button> */}
                <Button
                  variant="outlined"
                  className="text-[#20624C] text-[9px] md:text-[12px]"
                  size="sm"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:max-w-[550px] md:max-h-[300px]">
            <div className="relative pb-3 px-3 md:pb-0 md:px-0">
              <img
                className="h-full w-full rounded-md"
                src="https://elementor.dostguru.com/plantishdemo/wp-content/uploads/2021/07/34.webp"
                alt=""
              />
              <div className="absolute pl-3 top-0 left-1 w-1/2 h-full text-black flex flex-col justify-center items-center">
                {/* <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
                  aa
                </h1> */}
                <p className="mt-2 mb-3 sm:mb-7 text-[14px] sm:text-[16px] font-semibold">
                  Thuốc bảo vệ thực vật
                </p>
                {/* <Button className="bg-[#014e37]">Shop Now</Button> */}
                <Button
                  variant="outlined"
                  className="text-[#20624C] text-[9px] md:text-[12px]"
                  size="sm"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="relative px-3 md:px-0"> */}

          <div className="w-full h-full md:max-w-[550px] md:max-h-[300px]">
            <div className="relative px-3 md:px-0">
              <img
                className="h-full w-full rounded-md"
                src="https://elementor.dostguru.com/plantishdemo/wp-content/uploads/2021/07/35.webp"
                alt=""
              />
              <div className="absolute pl-3 top-0 left-1 w-1/2 h-full text-black flex flex-col justify-center items-center">
                {/* <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
                  aa
                </h1> */}
                <p className="mt-2 mb-3 sm:mb-7 text-[14px] sm:text-[16px] font-semibold">
                  Thuốc bảo vệ thực vật
                </p>
                {/* <Button className="bg-[#014e37]">Shop Now</Button> */}
                <Button
                  variant="outlined"
                  className="text-[#20624C] text-[9px] md:text-[12px]"
                  size="sm"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {Quản cáo sản phẩm } */}
      <div className="w-full flex justify-center">
        <div className="">
          <p className="text-center font-semibold text-3xl">
            Một số sản phẩm nổi bật
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

      <div className=" flex justify-center items-center w-full mb-3">
        <div className="w-[93%] flex-col">
          <div className="flex justify-evenly mb-5">
            <div className="slider-container max-w-[90vw]">
              <Slider {...settings} arrows={false}>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_2.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_1.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
                <div>
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_3.png"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
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
                      {/* <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter> */}
                  </Card>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <Button className="flex items-center gap-2 text-[#ffffff] bg-[#014e37]">
          Xem thêm các sản phẩm khác
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

      {/* //ss */}
    </div>
  );
};
export default DashboardComponent;
