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
// const settings = {
//   accessibility: true,
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 2,
//   rows: 2,
//   responsive: [
//     {
//       breakpoint: 1424,
//       settings: {
//         slidesToShow: 3, // Tùy chỉnh số lượng card hiển thị khi chiều rộng màn hình <= 1424px
//         slidesToScroll: 2, // Số lượng card cuộn mỗi lần
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 700,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

const DashboardComponent = () => {
  const titleImage_1 = "Text Reveal Animation 💫";
  const titleImage_2 = "Text Reveal Animation_2 💫";

  return (
    <div className="h-full">
      {/* Slider */}
      <div className="image_slider">
        <Carousel
          autoplay={true}
          loop={true}
          // autoplayDelay={3000}
          className="rounded-sm w-full max-w-full h-full overflow-y-hidden"
        >
          {/* Image 1 */}
          <div className="relative w-full  h-full ">
            <img
              src="./assets/plant_slider_4.jpg"
              alt="image 1"
              className="h-full w-full "
            />
            {/* Nội dung chiếm một nửa chiều rộng bên phải */}
            <div className="absolute top-0 right-0 w-full h-full text-black p-6 flex flex-col justify-center h-[100%]">
              <div className=" text-sm sm:text-xl md:text-3xl font-bold text-[#014E37] mb-6 w-[60%]">
                {/* <p>Nature's Embrace, </p>
                <p>Right at Home</p> */}
                <p className="">NamHuynh Garden</p>
                <p>Mang thiên nhiên vào từng không gian sống.</p>
              </div>
              <p className="sm:text-lg font-semibold text-[#202121] w-[50%] lg:block hidden">
                NamHuynh Garden là doanh nghiệp với đam mê làm vườn, chuyên cung
                cấp cây trồng trong nhà chất lượng cao, dễ tiếp cận mà không cần
                số lượng lớn, mang đến không gian sống tươi mới và gần gũi với
                thiên nhiên
              </p>
              <Button className="bg-[#014e37] text-[10px] pt-1 h-[25px] w-[35%] lg:text-[14px]  md:pt-1 lg:pt-3 lg:h-[2.6rem] lg:w-[40%] lg:mt-4">
                Liên hệ
              </Button>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-full w-full">
            <img
              src="./assets/plant_slider_4.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            {/* Nội dung chiếm một nửa chiều rộng bên phải */}
            <div className="absolute top-0 right-0 w-full h-full text-black p-6 flex flex-col justify-center h-[100%]">
              <div className=" text-sm sm:text-xl md:text-3xl font-bold text-[#014E37] mb-6 w-[60%]">
                {/* <p>Nature's Embrace, </p>
                <p>Right at Home</p> */}
                <p className="">NamHuynh Garden</p>
                <p>Cung cấp các loại cây cảnh</p>
              </div>
              <p className="sm:text-lg font-semibold text-[#202121] w-[50%] lg:block hidden">
                Chúng tôi cam kết mang đến những sản phẩm cây xanh chất lượng
                nhất, không chỉ giúp không gian sống thêm tươi mới mà còn góp
                phần bảo vệ môi trường.
              </p>
              <Button className="bg-[#014e37] text-[10px] pt-1 h-[25px] w-[35%] lg:text-[14px]  md:pt-1 lg:pt-3 lg:h-[2.6rem] lg:w-[40%] lg:mt-4">
                Liên hệ
              </Button>
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
                <p className="text-[15px] sm:text-[15px] font-semibold text-center">
                  Cung cấp các loại cây xanh
                </p>
                {/* <Button className="bg-[#014e37]">Shop Now</Button> */}
                <Button
                  variant="outlined"
                  className="text-[#014E37] text-[9px] md:text-[12px] border-[#014E37] md:mt-2"
                  size="sm"
                >
                  Xem thêm
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
                <p className=" text-[14px] sm:text-[15px] font-semibold text-center lg:w-[80%]">
                  Cung cấp nhiều loại cây cảnh khác.
                </p>
                {/* <Button className="bg-[#014e37]">Shop Now</Button> */}
                <Button
                  variant="outlined"
                  className="text-[#014E37] text-[9px] md:text-[12px] border-[#014E37]  md:mt-2"
                  size="sm"
                >
                  Xem thêm
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
                <p className=" text-[14px] sm:text-[15px] font-semibold text-center">
                  Và các loại Thuốc bảo vệ thực vật
                </p>
                {/* <Button className="bg-[#014e37]">Shop Now</Button> */}
                <Button
                  variant="outlined"
                  className="text-[#014E37] text-[9px] md:text-[12px] border-[#014E37] md:mt-2"
                  size="sm"
                >
                  Xem thêm
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

      <div className="w-full h-full flex justify-center mb-5">
        <div className="w-[93%] md:flex justify-evenly items-center h-full ">
          <div className=" md:w-[35%] flex md:h-full py-6">
            <div className="flex flex-col justify-center w-[100%]">
              <div className="flex justify-center md:justify-start text-4xl text-[#014e37] font-semibold mb-5 md:mb-10">
                CÂY CẢNH ĐỘT BIẾN
              </div>
              <div className="lg:w-[86%] font-medium text-lg">
                <p className="w-full">
                  Cây đột biến là những loại cây mang vẻ đẹp độc nhất, được tạo
                  nên bởi sự thay đổi tự nhiên hoặc nhân tạo trong cấu trúc gen.
                  Những đột biến này mang lại sự khác biệt nổi bật ở màu sắc,
                  hình dáng hoặc hoa văn, khiến chúng trở thành tâm điểm của sự
                  chú ý và là lựa chọn hoàn hảo cho người yêu cây cảnh.
                </p>
                <p>
                  Cây lá đột biến: Các loài như Monstera Variegata hay
                  Philodendron Pink Princess, với lá mang các mảng màu trắng,
                  vàng hoặc hồng xen lẫn.
                </p>
                <p>
                  Cây hoa đột biến: Những bông hoa với màu sắc, hình dạng hoặc
                  kích thước khác biệt, tạo nên vẻ đẹp tinh tế và mới lạ.
                </p>
                <p>
                  Cây hình dáng độc đáo: Những loại cây có thân hoặc nhánh phát
                  triển theo cách đặc biệt, ví dụ như xương rồng đột biến
                </p>
              </div>
              <Button className="flex justify-center items-center gap-2 text-[#ffffff] bg-[#014e37] md:w-[80%] mt-5">
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
          </div>
          <div className="md:w-[60%] ">
            <div className="flex justify-center items-center w-full sm:block">
              <div className="sm:flex justify-center gap-5">
                <div className="sm:w-[50%] mb-5 sm:mb-0">
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg w-full">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_product_1.jpg"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
                      />
                    </CardHeader>
                    {/* <div className="flex justify-center items-center">
                    <img
                      className="w-44"
                      src="./assets/liner_flower_products_3.jpg"
                      alt=""
                    />
                  </div> */}
                    <CardBody>
                      <div className="mb-2 text-center flex justify-center">
                        <Typography
                          color="blue-gray"
                          className="font-semibold w-100% sm:w-[50%] whitespace-nowrap sm:whitespace-pre-line"
                        >
                          MONSTERA ĐỘT BIẾN
                        </Typography>
                        {/* <Typography color="blue-gray" className="font-semibold">
                        $95.00
                      </Typography> */}
                      </div>
                    </CardBody>
                  </Card>
                </div>
                <div className="sm:w-[50%]">
                  <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg w-full">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="h-[370px]"
                    >
                      <img
                        src="./assets/plant_product_2.jpg"
                        alt="card-image"
                        className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
                      />
                    </CardHeader>

                    <CardBody>
                      <div className="mb-2 text-center flex justify-center">
                        <Typography color="blue-gray" className="font-semibold">
                          MONSTERA ADANSONII INDONESIAN VARIEGATED{" "}
                        </Typography>
                        {/* <Typography color="blue-gray" className="font-semibold">
                        $95.00
                      </Typography> */}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center">
        <div className=" lg:flex justify-center  w-[93%] md:w-[90%] gap-4">
          <div className=" lg:w-[50%] sm:flex gap-5 mb-5">
            <div className=" sm:w-1/2 mb-5 sm:mb-0">
              <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg w-full">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-[370px]"
                >
                  <img
                    src="./assets/plant_product_7.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
                  />
                </CardHeader>
                {/* <div className="flex justify-center items-center">
                    <img
                      className="w-44"
                      src="./assets/liner_flower_products_3.jpg"
                      alt=""
                    />
                  </div> */}
                <CardBody>
                  <div className="mb-2 text-center flex justify-center">
                    <Typography
                      color="blue-gray"
                      className="font-semibold w-100% sm:w-[50%] whitespace-nowrap sm:whitespace-pre-line"
                    >
                      CÂY HOA CHUỐI MỎ KÉT
                    </Typography>
                    {/* <Typography color="blue-gray" className="font-semibold">
                        $95.00
                      </Typography> */}
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className=" sm:w-1/2">
              <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg w-full">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-[370px]"
                >
                  <img
                    src="./assets/plant_product_8.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
                  />
                </CardHeader>
                {/* <div className="flex justify-center items-center">
                    <img
                      className="w-44"
                      src="./assets/liner_flower_products_3.jpg"
                      alt=""
                    />
                  </div> */}
                <CardBody>
                  <div className="mb-2 text-center flex justify-center">
                    <Typography
                      color="blue-gray"
                      className="font-semibold w-100% sm:w-[50%] whitespace-nowrap sm:whitespace-pre-line"
                    >
                      CÂY HOA GIẤY CẨM THẠCH
                    </Typography>
                    {/* <Typography color="blue-gray" className="font-semibold">
                        $95.00
                      </Typography> */}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className=" lg:w-[50%] sm:flex gap-5 mb-5  ">
            <div className=" sm:w-1/2 mb-5 sm:mb-0">
              <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg w-full">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-[370px]"
                >
                  <img
                    src="./assets/plant_product_9.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
                  />
                </CardHeader>
                {/* <div className="flex justify-center items-center">
                    <img
                      className="w-44"
                      src="./assets/liner_flower_products_3.jpg"
                      alt=""
                    />
                  </div> */}
                <CardBody>
                  <div className="mb-2 text-center flex justify-center">
                    <Typography
                      color="blue-gray"
                      className="font-semibold w-100% sm:w-[50%] whitespace-nowrap sm:whitespace-pre-line"
                    >
                      CÂY ỔI CẨM THẠCH
                    </Typography>
                    {/* <Typography color="blue-gray" className="font-semibold">
                        $95.00
                      </Typography> */}
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className=" sm:w-1/2">
              <Card className="h-full border-solid border-0 border border-[#E5E5E5] rounded-lg w-full">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-[370px]"
                >
                  <img
                    src="./assets/plant_product_10.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover shadow-2xl shadow-blue-gray-800"
                  />
                </CardHeader>
                {/* <div className="flex justify-center items-center">
                    <img
                      className="w-44"
                      src="./assets/liner_flower_products_3.jpg"
                      alt=""
                    />
                  </div> */}
                <CardBody>
                  <div className="mb-2 text-center flex justify-center">
                    <Typography
                      color="blue-gray"
                      className="font-semibold w-100% sm:w-[50%] whitespace-nowrap sm:whitespace-pre-line"
                    >
                      NGŨ GIA BÌ
                    </Typography>
                    {/* <Typography color="blue-gray" className="font-semibold">
                        $95.00
                      </Typography> */}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center mb-5">
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
      </div> */}

      {/* //ss */}
      {/* Aboutus */}
      {/* Line ngăng giữa */}
      <div className="w-full flex justify-center">
        <div className="">
          <p className="text-center font-semibold text-3xl">
            Đội ngũ của chúng tôi
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

      <div className="w-full  flex justify-center">
        <div className="w-[93%] lg:flex justify-center lg:justify-evenly items-center">
          <div className=" lg:w-[50%] flex justify-center ">
            <div className="flex justify-center md:min-h-[500px] max-w-[800px] h-full ">
              <img className=" w-full" src="./assets/plant_bg_2.jpg" alt="" />
            </div>
          </div>
          <div className="lg:w-[40%] ">
            <div className="flex flex-col w-[98%] xl:w-[70%]">
              <div>
                <h1 className="text-xl xl:text-3xl text-[#014e37] font-semibold mb-3">
                  Cung cấp cây xanh
                </h1>
                <p className="font-semibold mb-3">
                  Chúng tôi cung cấp cây xanh chất lượng cao, đa dạng chủng loại
                  từ các nhà vườn uy tín. Những sản phẩm của chúng tôi không chỉ
                  làm đẹp không gian mà còn cải thiện môi trường sống, mang lại
                  sự tươi mới và thư thái.
                </p>
              </div>
              <div>
                <h1 className="text-xl xl:text-3xl text-[#014e37] font-semibold mb-3">
                  Cây cảnh kiểng– Sự độc đáo trong từng chiếc lá
                </h1>
                <p className="font-semibold mb-3">
                  Các dòng cây cảnh đột biến của chúng tôi mang vẻ đẹp hiếm có,
                  độc đáo và được chăm sóc kỹ lưỡng, phù hợp với những người yêu
                  cây tìm kiếm sự khác biệt.
                </p>
              </div>
              <div>
                <h1 className="text-xl xl:text-3xl text-[#014e37] font-semibold mb-3">
                  Thuốc bảo vệ cây trồng – Giải pháp an toàn, hiệu quả
                </h1>
                <p className="font-semibold">
                  Ngoài cây xanh và cây cảnh, chúng tôi còn cung cấp các sản
                  phẩm thuốc trừ sâu an toàn, thân thiện với môi trường. Các
                  giải pháp bảo vệ cây trồng giúp duy trì sự phát
                  triển khỏe mạnh và bền vững cho cây cối, giảm thiểu
                  tác động đến môi trường xung quanh.
                </p>
              </div>
              <div className="w-full">
                <Button className="flex justify-center items-center gap-2 text-[#ffffff] bg-[#014e37]  w-[100%] mt-5">
                  VỀ CÔNG TY NHÀ MÁY
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardComponent;
