import { routerName } from "@/constants/router.constant";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HistoryComponent = () => {
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
    <div className="w-full h-full">
      <div className="w-full flex justify-center mb-10 ">
        <div className="w-[100%]">
          <div className="relative w-full h-[60vh]">
            <Image
              data-aos="zoom-out"
              loading="eager"
              layout="fill"
              className="w-full h-full object-cover"
              src="/assets/greentree_bg_2.jpg"
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
                          <Link href={routerName.History}>
                            <p>/ Lịch sử hình thành </p>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <p>LỊCH SỬ HÌNH THÀNH</p>
                    {/* <p className="text-base  sm:w-[40%] ">
                      Khám phá vẻ đẹp tự nhiên cho khu vườn – Tạo dựng một không
                      gian sống xanh mát và đầy năng lượng!
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="w-full text-center p-3 bg-[#C3D2CE]">
          <p className="text-2xl md:text-3xl font-semibold">Tổng quan</p>
        </div>
        <div className="w-full flex flex-col px-10 pt-6 pb-10 text-xl">
          <p className="">
            Tập đoàn đã đạt được những thành tựu quan trọng trong việc xây dựng
            không gian xanh bền vững và cung cấp giải pháp môi trường toàn diện.
            Từ những bước đầu khiêm tốn đến việc trở thành một hệ sinh thái các
            công ty chuyên biệt, tập đoàn đã đóng góp vào:
          </p>
          <p> + Thay đổi cảnh quan đô thị với cây xanh chất lượng cao. </p>
          <p>
            + Mở rộng hoạt động sang nhiều lĩnh vực chuyên biệt như cây cảnh,
            dịch vụ tư vấn, và các sản phẩm sinh học.
          </p>
          <p>
            + Góp phần nâng cao nhận thức về môi trường bền vững và đổi mới
            xanh.
          </p>
        </div>
      </div>
      <div className="flex justify-center h-full">
        <div className="md:flex justify-center w-[93%] max-w-[1600px] h-full flex-col">
          {/* 2000 */}
          <div className="w-full h-full  grid grid-cols-[1rem_minmax(1px,1fr)] md:grid-cols-[minmax(1px,_1fr)_0.8rem_minmax(1px,_1fr)] grid-rows-[auto]">
            {/* Cột A */}
            <div
              data-aos="fade-up-right"
              className=" text-white z-10 text-center h-full"
            >
              <div className="w-full flex justify-start md:justify-end mt-4">
                <div className=" relative bg-[#3E7160] p-2  rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-none rounded-bl-none h-20 w-24">
                  <p className=" absolute z-10 bottom-[35%] right-[12%]  rotate-[-38deg]">
                    Năm 2000
                  </p>
                </div>
              </div>
              <div className="text-left text-black w-full flex justify-center md:justify-end p-10">
                <p className="w-[80%]">
                  Công Ty Namhuynh Garden thành lập với sứ mệnh thúc đẩy không
                  gian xanh bền vững bằng cách cung cấp cây xanh chất lượng cao
                  và các sản phẩm thân thiện với môi trường. Trụ sở chính đặt
                  tại Thành phố HỒ CHÍ MINH, đánh dấu sự khởi đầu của hành trình
                  thay đổi cảnh quan đô thị.
                </p>
              </div>
            </div>
            {/* Cột B */}
            <div
              className=" z-10 bg-[#354E33] text-white text-center h-full row-start-1 col-start-1 row-span-3 col-span-1 md:col-start-2"
              // style={{ gridArea: "1 / 1 / 3 / 1" }}
            ></div>
            {/* Cột C */}
            <div
              data-aos="fade-up-left"
              className=" text-white p-4 text-center flex justify-center col-start-2 md:col-start-3 md:col-span-2 "
              // style={{ gridArea: "2 / 2 / 3 / 3" }}
            >
              <Image
                className="object-cover h-full max-h-[350px] rounded-xl"
                width={705}
                height={591}
                src="/assets/company.jpg"
                alt=""
              />
            </div>
            {/* CỘT D */}
            <div className=" col-start-2 md:col-start-1 col-span-1 h-14"></div>
          </div>
          {/* 2005 */}
          <div className="w-full h-full  grid grid-cols-[1rem_minmax(1px,1fr)] md:grid-cols-[minmax(1px,_1fr)_0.8rem_minmax(1px,_1fr)] grid-rows-[auto]">
            <div
              data-aos="fade-up-right"
              data-aos-delay={200}
              className=" text-white p-4 text-center flex justify-center z-10 "
              // style={{ gridArea: "2 / 2 / 3 / 3" }}
            >
              <Image
                className="object-cover h-full max-h-[350px] rounded-xl"
                width={1000}
                height={500}
                src="/assets/greentreecompany.jpg"
                alt=""
              />
            </div>
            <div
              className="bg-[#354E33] z-10 text-white text-center h-full row-start-1 col-start-1 row-span-3 col-span-1 md:col-start-2"
              // style={{ gridArea: "1 / 1 / 3 / 1" }}
            ></div>

            <div
              data-aos="fade-up-left"
              data-aos-delay={200}
              className=" text-white z-10 text-center h-full row-start-1 md:col-start-3 md:col-span-2"
              // style={{ gridArea: "1 / 2 / 2 / 3" }}
            >
              <div className="w-full flex justify-start">
                <div className=" relative bg-[#3E7160] p-2  rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-none rounded-bl-none h-20 w-24">
                  <p className=" absolute z-10 bottom-[35%] right-[12%]  rotate-[-38deg]">
                    Năm 2005
                  </p>
                </div>
              </div>
              <div className="text-left text-black w-full flex justify-center md:justify-start p-10">
                <div className="w-[80%]">
                  <div className="text-lg font-semibold">
                    Ra Mắt Công Ty GreenTree
                  </div>
                  GreenTree, công ty con đầu tiên của Tập đoàn Giải Pháp Xanh,
                  được ra mắt nhằm tập trung cung cấp các loại cây xanh đa dạng.
                  Các lĩnh vực chuyên môn bao gồm: - Cây xanh trong nhà và ngoài
                  trời cho không gian sống và làm việc. - Cung cấp số lượng lớn
                  cho các dự án cảnh quan. - Giải pháp tùy chỉnh cho các sáng
                  kiến phủ xanh đô thị.
                </div>
              </div>
            </div>
            <div className=" col-start-2 md:col-start-1 col-span-1 h-14"></div>
          </div>
          {/* 2010 */}
          <div className="w-full h-full  grid grid-cols-[1rem_minmax(1px,1fr)] md:grid-cols-[minmax(1px,_1fr)_0.8rem_minmax(1px,_1fr)] grid-rows-[auto]">
            {/* Cột A */}
            <div
              data-aos="fade-up-right"
              className=" text-white z-10 text-center h-full"
            >
              <div className="w-full flex justify-start md:justify-end">
                <div className=" relative bg-[#3E7160] p-2  rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-none rounded-bl-none h-20 w-24">
                  <p className=" absolute z-10 bottom-[35%] right-[12%]  rotate-[-38deg]">
                    Năm 2010
                  </p>
                </div>
              </div>
              <div className="text-left text-black w-full flex justify-center md:justify-end p-10">
                <div className="w-[80%]">
                  <div className="text-lg font-semibold">
                    Thành Lập Công Ty DecorativePlant
                  </div>
                  Nhận thấy nhu cầu ngày càng tăng đối với cây cảnh, Công ty
                  DecorativePlant được thành lập. Các lĩnh vực hoạt động chính
                  bao gồm: - Cây bonsai và cây cảnh độc đáo cho nhà sưu tập. -
                  Các loại cây theo mùa và cây quý hiếm để làm đẹp không gian
                  sống.
                </div>
              </div>
            </div>
            {/* Cột B */}
            <div
              className=" bg-[#354E33] text-white text-center h-full row-start-1 col-start-1 row-span-3 col-span-1 md:col-start-2"
              // style={{ gridArea: "1 / 1 / 3 / 1" }}
            ></div>
            {/* Cột C */}
            <div
              data-aos="fade-up-left"
              className=" text-white p-4 text-center flex justify-center col-start-2 md:col-start-3 md:col-span-2 "
              // style={{ gridArea: "2 / 2 / 3 / 3" }}
            >
              <Image
                className="object-cover h-full max-h-[350px] rounded-xl"
                width={1000}
                height={500}
                src="/assets/decorativeplantcompany.jpg"
                alt=""
              />
            </div>
            {/* CỘT D */}
            <div className=" col-start-2 md:col-start-1 col-span-1 h-14"></div>
          </div>
          {/* 2015*/}
          <div className="w-full h-full  grid grid-cols-[1rem_minmax(1px,1fr)] md:grid-cols-[minmax(1px,_1fr)_0.8rem_minmax(1px,_1fr)] grid-rows-[auto]">
            <div
              data-aos="fade-up-right"
              className=" text-white p-4 text-center flex justify-center z-10 "
              // style={{ gridArea: "2 / 2 / 3 / 3" }}
            >
              <Image
                className="object-cover h-full max-h-[350px] rounded-xl"
                width={1000}
                height={500}
                src="/assets/protectplantcompany.jpg"
                alt=""
              />
            </div>
            <div
              className="bg-[#354E33]  text-white text-center h-full row-start-1 col-start-1 row-span-3 col-span-1 md:col-start-2"
              // style={{ gridArea: "1 / 1 / 3 / 1" }}
            ></div>

            <div
              data-aos="fade-up-left"
              className=" text-white z-10 text-center h-full row-start-1 md:col-start-3 md:col-span-2"
              // style={{ gridArea: "1 / 2 / 2 / 3" }}
            >
              <div className="w-full flex justify-start">
                <div className=" relative bg-[#3E7160] p-2  rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-none rounded-bl-none h-20 w-24">
                  <p className=" absolute z-10 bottom-[35%] right-[12%]  rotate-[-38deg]">
                    Năm 2015
                  </p>
                </div>
              </div>
              <div className="text-left text-black w-full flex justify-center md:justify-start p-10">
                <div className="w-[80%]">
                  <div className="text-lg font-semibold">
                    Ra Mắt Công Ty PlantProtect
                  </div>
                  Đáp ứng nhu cầu của ngành nông nghiệp về các giải pháp kiểm
                  soát sâu bệnh bền vững, PlantProtect được ra mắt. Các sản phẩm
                  và dịch vụ chính gồm: - Thuốc trừ sâu và cỏ dại thân thiện với
                  môi trường. - Chương trình đào tạo sử dụng an toàn và hiệu
                  quả. - Nghiên cứu và phát triển các giải pháp hữu cơ thay thế.
                </div>
              </div>
            </div>
            <div className=" col-start-2 md:col-start-1 col-span-1 h-14"></div>
          </div>
          {/* 2020 */}
          <div className="w-full h-full  grid grid-cols-[1rem_minmax(1px,1fr)] md:grid-cols-[minmax(1px,_1fr)_0.8rem_minmax(1px,_1fr)] grid-rows-[auto]">
            {/* Cột A */}
            <div
              data-aos="fade-up-right"
              className=" text-white z-10 text-center h-full"
            >
              <div className="w-full flex justify-start md:justify-end">
                <div className=" relative bg-[#3E7160] p-2  rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-none rounded-bl-none h-20 w-24">
                  <p className=" absolute z-10 bottom-[35%] right-[12%]  rotate-[-38deg]">
                    Năm 2020
                  </p>
                </div>
              </div>
              <div className="text-left text-black w-full flex justify-center md:justify-end p-10">
                <p className="w-[80%]">
                  Tập đoàn đã đầu tư mạnh mẽ vào đổi mới để tích hợp công nghệ
                  với các giải pháp xanh. Các sáng kiến chính bao gồm: - Phát
                  triển ứng dụng di động hỗ trợ chăm sóc cây và quản lý sâu
                  bệnh. - Tạo tường xanh và vườn thẳng đứng cho không gian đô
                  thị. - Hợp tác với các viện nghiên cứu để thúc đẩy đa dạng
                  sinh học.
                </p>
              </div>
            </div>
            {/* Cột B */}
            <div
              className=" bg-[#354E33] text-white text-center h-full row-start-1 col-start-1 row-span-3 col-span-1 md:col-start-2"
              // style={{ gridArea: "1 / 1 / 3 / 1" }}
            ></div>
            {/* Cột C */}
            <div
              data-aos="fade-up-left"
              className=" text-white p-4 text-center flex justify-center col-start-2 md:col-start-3 md:col-span-2 "
              // style={{ gridArea: "2 / 2 / 3 / 3" }}
            >
              <Image
                className="object-cover h-full max-h-[350px] rounded-xl"
                width={1000}
                height={500}
                src="/assets/phattrienvadoimoi.jpg"
                alt=""
              />
            </div>
            {/* CỘT D */}
            <div className=" col-start-2 md:col-start-1 col-span-1 h-14"></div>
          </div>
          {/* 2024 */}
          <div className="w-full h-full  grid grid-cols-[1rem_minmax(1px,1fr)] md:grid-cols-[minmax(1px,_1fr)_0.8rem_minmax(1px,_1fr)] grid-rows-[auto]">
            <div
              data-aos="fade-up-right"
              className=" text-white p-4 text-center flex justify-center z-10 "
              // style={{ gridArea: "2 / 2 / 3 / 3" }}
            >
              <Image
                className="object-cover h-full max-h-[350px] rounded-xl"
                width={1000}
                height={500}
                src="/assets/morongtoancau.jpg"
                alt=""
              />
            </div>
            <div
              className="bg-[#354E33]  text-white text-center h-full row-start-1 col-start-1 row-span-3 col-span-1 md:col-start-2"
              // style={{ gridArea: "1 / 1 / 3 / 1" }}
            ></div>

            <div
              data-aos="fade-up-left"
              className=" text-white z-10 text-center h-full row-start-1 md:col-start-3 md:col-span-2"
              // style={{ gridArea: "1 / 2 / 2 / 3" }}
            >
              <div className="w-full flex justify-start">
                <div className=" relative bg-[#3E7160] p-2  rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-none rounded-bl-none h-20 w-24">
                  <p className=" absolute z-10 bottom-[35%] right-[12%]  rotate-[-38deg]">
                    Năm 2024
                  </p>
                </div>
              </div>
              <div className="text-left text-black w-full flex justify-center md:justify-start p-10">
                <p className="w-[80%]">
                  Tập đoàn Giải Pháp Xanh mở rộng hoạt động ra quốc tế, hợp tác
                  với các đối tác toàn cầu và triển khai chương trình xuất khẩu.
                  Đây là bước đánh dấu một kỷ nguyên mới: - Chia sẻ kiến thức và
                  công nghệ xanh trên toàn thế giới. - Góp phần vào các mục tiêu
                  bền vững toàn cầu. - Tăng khả năng tiếp cận sản phẩm xanh chất
                  lượng cao.
                </p>
              </div>
            </div>
            <div className=" col-start-2 md:col-start-1 col-span-1 h-14"></div>
          </div>
          {/* Tầm nhìn */}
          <div className="w-full h-full  grid grid-cols-[1rem_minmax(1px,1fr)] md:grid-cols-[minmax(1px,_1fr)_0.8rem_minmax(1px,_1fr)] grid-rows-[auto]">
            {/* Cột A */}
            <div
              data-aos="fade-up-right"
              className=" text-white z-10 text-center h-full"
            >
              <div className="w-full flex justify-start md:justify-end">
                <p className="bg-[#3E7160] p-2 w-36">Tầm Nhìn</p>
              </div>
              <div className="text-left text-black w-full flex justify-center md:justify-end p-10">
                <p className="w-[80%]">
                  Tập đoàn Giải Pháp Xanh tiếp tục dẫn đầu trong việc cung cấp
                  các giải pháp xanh toàn diện. Với cam kết bền vững, đổi mới và
                  tạo tác động cộng đồng, tập đoàn hướng đến một tương lai xanh
                  hơn cho các thế hệ mai sau.
                </p>
              </div>
            </div>
            {/* Cột B */}
            <div
              className=" bg-[#354E33] text-white text-center h-full row-start-1 col-start-1 row-span-3 col-span-1 md:col-start-2"
              // style={{ gridArea: "1 / 1 / 3 / 1" }}
            ></div>
            {/* Cột C */}
            <div
              data-aos="fade-up-left"
              className=" text-white p-4 text-center flex justify-center col-start-2 md:col-start-3 md:col-span-2 "
              // style={{ gridArea: "2 / 2 / 3 / 3" }}
            >
              <Image
                className="object-cover h-full max-h-[350px] rounded-xl"
                width={705}
                height={591}
                src="/assets/tamnhintuonglai.jpg"
                alt=""
              />
            </div>
            {/* CỘT D */}
            <div className=" col-start-2 md:col-start-1 col-span-1 h-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryComponent;
