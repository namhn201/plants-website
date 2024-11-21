import { Button } from "@material-tailwind/react";

const GreenTreeComponent = () => {
  console.log("Listening from GreenTreeComponent");
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[93%] h-full flex justify-center bg-[#D9E5E1] rounded-2xl mb-10">
        <div className="w-full h-full p-5">
          <div className="w-full h-full flex justify-center">
            <div className="w-full h-full lg:flex gap-5">
              <div className="lg:w-[75%]  h-full">
                <div className="w-full h-full rounded-2xl flex gap-5 mb-5">
                  <div className="w-[30%]  rounded-2xl">
                    <div className="h-[30%] rounded-2xl">
                      <img
                        className="w-full h-full object-cover rounded-2xl pb-5"
                        src="/assets/caybanglang_side_1.jpg"
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
                        >
                          <source
                            src="/assets/caybanglangvideo_2.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      {/* <img
                      className="w-full h-full object-cover rounded-2xl"
                      src="/assets/caybanglang_side_2.jpg"
                      alt="image_product_right"
                    /> */}
                    </div>
                  </div>
                  <div className="w-[70%] h-full bg-green-300 rounded-2xl">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src="/assets/caybanglang.jpg"
                      alt="image_main_products"
                    />
                  </div>
                </div>
                <div className="w-full h-full bg-brown-500 rounded-2xl flex-col">
                  <div className="h-[380px]">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src="/assets/caybanglang_side_2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-[25%]  rounded-3xl  p-3 flex flex-col bg-[#EDEDED] mt-5 lg:mt-0">
                <div className=" p-5 h-[20%] w-full border-b border-solid">
                  <p className="font-semibold text-2xl">CÂY BẰNG LĂNG</p>
                  <div className="mt-3 font-semibold">
                    <p>Tên gọi khác: Bằng Lăng Tím, Bằng Lăng Nước</p>
                    <p>Tên khoa học : Lagerstroemia speciosa (L.) Pers</p>
                    <p>Nguồn gốc : Ấn Độ</p>
                  </div>
                </div>
                <div className="w-full h-[80%] p-5">
                  <div className="w-full h-full">
                    <p className="font-semibold">ĐẶC TRƯNG</p>
                    <hr className="mb-3" />

                    <div className="mt-5">
                      <p>
                        Cây Bằng Lăng là cây thân gỗ, tán dày, lá xanh hình
                        oval, dài 8-15 cm, rụng vào mùa thu. Hoa tím hoặc tím
                        nhạt, mọc thành chùm dài 20-30 cm, nở rộ vào mùa hè, mỗi
                        bông 6 cánh mỏng. Quả hình cầu, đường kính 1,5-2 cm,
                        chuyển từ tím nhạt sang nâu cứng khi chín. Ngoài hoa
                        tím, còn có các giống hoa màu hồng, tím sậm, tím trắng.
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
                      <p>
                        Cây Bằng Lăng là cây thân gỗ, tán dày, lá xanh hình
                        oval, dài 8-15 cm, rụng vào mùa thu. Hoa tím hoặc tím
                        nhạt, mọc thành chùm dài 20-30 cm, nở rộ vào mùa hè, mỗi
                        bông 6 cánh mỏng. Quả hình cầu, đường kính 1,5-2 cm,
                        chuyển từ tím nhạt sang nâu cứng khi chín. Ngoài hoa
                        tím, còn có các giống hoa màu hồng, tím sậm, tím trắng.
                      </p>
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
              HƯỚNG DẪN CÁCH TRỒNG VÀ CHĂM SÓC CÂY BẰNG LĂNG
            </p>
            <p>
              Đặc thù của cây bằng lăng là sống ngoài trời, thích hợp với nơi có
              nhiều ánh sáng mặt trời. Nó sinh trưởng tốt trên đất tơi xốp,
              thoáng khí và dễ thoát nước. Trước khi trồng cây bằng lăng tầm 1
              tháng, bạn nên bón phân cho đất trồng. Mục đích của việc này là
              cung cấp nguồn dinh dưỡng cần thiết cho cây bằng lăng (ngay khi nó
              được trồng).
            </p>
            <p>
              Thời điểm thích hợp nhất để trồng cây bằng lăng là khoảng tháng 5
              – tháng 6 (nên trồng vào đầu mùa mưa). Có nhiều nước cây sẽ lớn
              nhanh và xanh tốt quanh năm. Để cây bằng lăng ra hoa đẹp, bạn nên
              chăm chút nhiều hơn đất trồng. Cụ thể như sau: mỗi năm nhặt cỏ
              xung quanh gốc cây 2-3 lần, kết hợp với đó là xới đất và vun gốc.
              Mỗi năm bón phân hữu cơ 1-2 lần. Cây bằng lăng không yêu cầu bạn
              tưới nước nhiều, cũng không cầu kỳ trong chăm sóc. Giống cây này
              đẹp nhất khi ra hoa. Hoa bằng lăng đạt hiệu quả cao trong làm đẹp.
              Không loài hoa nào đạt được tính lãng mạn và thanh tao của hoa
              bằng lăng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GreenTreeComponent;
