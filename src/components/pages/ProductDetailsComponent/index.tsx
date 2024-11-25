import Breadcrumb from "@/components/breadcrumb";
import { routerName } from "@/constants/router.constant";
import { Button } from "@material-tailwind/react";
import { AnyNaptrRecord } from "dns";
import { div } from "framer-motion/client";
import Link from "next/link";
import { useEffect } from "react";

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
  return (
    <div>
      <nav className="flex justify-center mb-5">
        <ul className="flex gap-1 w-[93%]">
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
          {/* <li>
            <Link href={routerName.GreenTree}>
              <p>{plantDetails.categoryType} /</p>
            </Link>
          </li> */}
          <li>
            <a href="#URL">{plantDetails.name}</a>
          </li>
          {/* <li>Current Page</li> */}
        </ul>
      </nav>
      <div className="w-full h-full flex justify-center">
        <div className="w-[93%] h-full flex-col ">
          {/* Sản phẩm 1 */}
          <div className="w-full h-full flex justify-center bg-[#D9E5E1] rounded-2xl mb-10">
            <div className="w-full h-full p-5">
              <div className="w-full h-full flex justify-center">
                <div className="w-full h-full lg:flex gap-5">
                  <div className="lg:w-[70%]  h-full">
                    <div className="w-full h-full rounded-2xl flex gap-5 mb-5">
                      <div className={`w-[30%]  rounded-2xl ${!plantDetails?.careInstructions ? "hidden" : "" }`}>
                        <div className="h-[30%] rounded-2xl">
                          <img
                            className="w-full h-full object-cover rounded-2xl pb-5"
                            src={plantDetails.images[0]}
                            alt="image_product_left"
                          />
                        </div>
                        <div className="h-[70%] rounded-2xl">
                          <div className="relative w-full h-full overflow-hidden ">
                            <video
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover h-full w-full rounded-2xl"
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
                      <div className={` ${!plantDetails?.careInstructions ? "w-[100%]":"w-[70%]"}  h-full bg-green-300 rounded-2xl`}>
                        <img
                          className="w-full h-full object-cover rounded-2xl"
                          src={plantDetails.images[2]}
                          alt="image_main_products"
                        />
                      </div>
                    </div>
                    <div className={`w-full h-full bg-brown-500 rounded-2xl flex-col ${!plantDetails?.careInstructions ? "hidden" : "" }`}>
                      <div className="h-[380px]">
                        <img
                          className="w-full h-full object-cover rounded-2xl"
                          src={plantDetails.images[1]}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[30%]  rounded-3xl  p-3 flex flex-col bg-[#EDEDED] mt-5 lg:mt-0">
                    <div className=" p-5 h-[20%] w-full border-b border-solid">
                      <p className="font-semibold text-2xl">
                        {plantDetails.name}
                      </p>
                      <div className="mt-3 font-semibold">
                        <p>Tên gọi khác: {plantDetails.otherNames}</p>
                        <p>Tên khoa học : {plantDetails.scientificName}</p>
                        <p>Nguồn gốc : {plantDetails.origin}</p>
                      </div>
                    </div>
                    <div className="w-full h-[80%] p-5">
                      <div className="w-full h-full">
                        <p className="font-semibold">ĐẶC TRƯNG</p>
                        <hr className="mb-3" />

                        <div className="mt-5">
                          <p>{plantDetails.characteristics}</p>
                        </div>
                        <p className="font-semibold mt-5">DANH MỤC</p>
                        <hr className="mb-3" />
                        <div>
                          <p>{plantDetails.categoryType}</p>
                        </div>
                        <p className="font-semibold mt-5">CÔNG DỤNG</p>
                        <hr className="mb-3" />

                        <div>
                          <p>{plantDetails.usage}</p>
                        </div>
                        <Link href={routerName.Contact}>
                          <Button className="bg-[#014e37] mt-5 w-full ">
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
                <p className="text-2xl mb-3 font-semibold ">
                  HƯỚNG DẪN CÁCH TRỒNG VÀ CHĂM SÓC CÂY BẰNG LĂNG
                </p>
                <p className="pl-1">- {plantDetails.careInstructions?.step1}</p>
                <p className="pl-1">- {plantDetails.careInstructions?.step2}</p>
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
                    className="rounded-full w-[full]"
                    src="./assets/liner_flower.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Line ngăng giữa */}

          {/* Sản Phẩm 2 */}
          {/* <div className="w-full h-full flex justify-center bg-[#D9E5E1] rounded-2xl mb-10 js-show-on-scroll">
          <div className="w-full h-full p-5">
            <div className="w-full h-full flex justify-center">
              <div className="w-full h-full lg:flex gap-5">
                <div className="lg:w-[70%]  h-full">
                  <div className="w-full h-full rounded-2xl flex gap-5 mb-5">
                    <div className="w-[30%]  rounded-2xl">
                      <div className="h-[30%] rounded-2xl">
                        <img
                          className="w-full h-full object-cover rounded-2xl pb-5"
                          src="/assets/caychuongvang_side_1.jpg"
                          alt="image_product_left"
                        />
                      </div>
                      <div className="h-[70%] rounded-2xl">
                        <div className="relative w-full h-full overflow-hidden ">
                          <video
                            className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover h-full w-full rounded-2xl"
                            controls
                            autoPlay
                            muted
                            loop
                          >
                            <source
                              src="/assets/caychuongvangvideo.mp4"
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                    <div className="w-[70%] h-full bg-green-300 rounded-2xl">
                      <img
                        className="w-full h-full object-cover rounded-2xl"
                        src="/assets/caychuongvang.jpg"
                        alt="image_main_products"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full bg-brown-500 rounded-2xl flex-col">
                    <div className="h-[380px]">
                      <img
                        className="w-full h-full object-cover rounded-2xl"
                        src="/assets/caychuongvang_side_2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:w-[30%]  rounded-3xl  p-3 flex flex-col bg-[#EDEDED] mt-5 lg:mt-0">
                  <div className=" p-5 h-[20%] w-full border-b border-solid">
                    <p className="font-semibold text-2xl">CÂY CHUÔNG VÀNG</p>
                    <div className="mt-3 font-semibold">
                      <p>
                        Tên gọi khác : Cây hoa chuông vàng, cây hoàng yến
                        chuông vàng, cây huỳnh liên
                      </p>
                      <p>Tên khoa học : Tabebuia argentea</p>
                      <p>Nguồn gốc : Ấn Độ</p>
                    </div>
                  </div>
                  <div className="w-full h-[80%] p-5">
                    <div className="w-full h-full">
                      <p className="font-semibold">ĐẶC TRƯNG</p>
                      <hr className="mb-3" />

                      <div className="mt-5">
                        <p>
                          Cây chuông vàng là loài thân gỗ nhỏ. Thân cây màu
                          xám trắng; thân có lằn sọc. Chiều cao phổ biến của
                          cây trưởng thành thường từ 5-8m. Nếu được chăm sóc
                          tốt, có những cây có thể phát triển đến 15m Tốc độ
                          sinh trưởng của cây khá nhanh; lại ít sâu bệnh. Loài
                          cây này ưa sáng; có bộ rễ khỏe mạnh nên hấp thu tốt
                          chất dinh dưỡng và nước từ đất. Ở nước ta, thời gian
                          lý tưởng nhất để trồng cây Chuông Vàng là vào mùa
                          xuân – đối với các tỉnh phía Bắc và bắt đầu mùa mưa
                          (tháng tư) – đối với các tỉnh phía Nam.
                        </p>
                      </div>
                      <p className="font-semibold mt-5">DANH MỤC</p>
                      <hr className="mb-3" />
                      <div>
                        <p>Cây xanh</p>
                      </div>
                      <p className="font-semibold mt-5">CÔNG DỤNG</p>
                      <hr className="mb-3" />

                      <div>
                        <p>...</p>
                      </div>
                      <Button className="bg-[#014e37] mt-5 w-full ">
                        Liên hệ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full] bg-[#EDEDED] rounded-2xl mt-5 p-10">
              <p className="text-2xl mb-3 font-semibold">
                HƯỚNG DẪN CÁCH TRỒNG VÀ CHĂM SÓC CÂY CHUÔNG VÀNG
              </p>
              <p>
                Cây thích hợp với môi trường có ánh sáng (nhưng không quá
                nắng). Chính vì vậy, người ta thường trồng hoa chuông đan xen
                với những giống cây xanh khác. Về chế độ nước, bạn nên tưới
                nước cho cây 1-2 lần/1 ngày. Lưu ý lượng nước vừa đủ, không
                quá nhiều. Khi tưới cây, bạn chọn khoảng cách thích hợp để
                phun nước. Tốt nhất nên phun nước cách xa hoa và lá cây chừng
                10cm. Nếu phun nước quá gần, hoa chuông vàng có thể bị nát.
              </p>
              <p>
                Trồng cây chuông vàng hơi phức tạp một chút. Đặc điểm của nó
                là không sống được trong chậu (như các giống cây cảnh khác).
                Bạn buộc phải trồng nó trên đất. Đấy là lý do tại sao: cây
                chuông vàng có nhiều ở công viên, vỉa hè hay sân vườn biệt
                thự. Có 2 cách nhân giống cây chuông vàng: bằng hạt hoặc giâm
                cành. Khi cây còn nhỏ, phải che chắn kỹ càng. Trước khi trồng
                cây xuống đất, phải đào hố trước 1 tuần. Công đoạn này không
                mấy dễ dàng. Đất trồng phải có độ tơi xốp nhất định. Để cây
                chuông vàng sinh trưởng tốt, người ta thường trộn các loại tro
                trấu, đất mùn, phân xanh,… vào đất trồng.
              </p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsComponent;
