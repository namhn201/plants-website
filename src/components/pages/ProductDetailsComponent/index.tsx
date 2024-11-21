import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/breadcrumb";
import { Carousel } from "@material-tailwind/react";

const ProductDetailsComponent = () => {
  return (
    <div className="w-full">
      <Breadcrumb />
      <div className="w-full flex justify-center">
        <div className="w-[70%] flex justify-center">
          <div className=" w-[40%] h-650px]">
            <div className="w-full h-full ">
              <Carousel
                autoplay={true}
                loop={true}
                autoplayDelay={10000}
                // navigation={false}
                className="rounded-sm w-full max-w-full h-full overflow-y-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src="/assets/caybanglang.jpg"
                  alt=""
                />
                <img
                  className="w-full h-full object-cover"
                  src="/assets/caychuongvang.jpg"
                  alt=""
                />
              </Carousel>
            </div>
            {/* <div className="w-full h-1/6 flex justify-center">
              <div className="w-[70%] flex gap-5">
                <div className="w-1/3 h-full bg-purple-400">a</div>
                <div className="w-1/3 h-full bg-red-400">a</div>
                <div className="w-1/3 h-full bg-purple-800">a</div>
              </div>
            </div> */}
          </div>
          <div className="w-[60%] border-l border-solid border-[#EDEDED] pl-6">
            <div className="py-4">
              <p className="text-2xl font-semibold">Cây Bằng Lăng</p>
            </div>
            <div className="border-t border-solid border-[#EDEDED] py-4">
              <p>Tên gọi khác: Bằng Lăng Tím, Bằng Lăng Nước</p>
              <p>Tên khoa học : Lagerstroemia speciosa (L.) Pers</p>
              <p>Nguồn gốc : Ấn Độ</p>
            </div>
            <div className="border-t border-solid border-[#EDEDED] py-4">
              <p>
                Cây bằng lăng là loại cây bóng mát trên đường phố, các công
                viên, bóng mát ở sân vườn nhà, tạo mảng xanh cho khu nhà máy, xí
                nghiệp… Với sắc hoa tím đặc trưng và rực rỡ, cây Bằng lăng tím
                trở thành cây bóng mát ưa chuộng tại các khu đô thị.
              </p>
            </div>
            <div className="border-t border-solid border-[#EDEDED] py-4">
              Danh mục: Cây xanh
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center my-6">
        <div className="w-[70%] border border-solid border-[#EDEDED] rounded-md">
          <p className="text-2xl p-4">Mô tả</p>
          <div className="px-6 pb-6">
            <div className="Dacdiem">
              <p className="text-xl font-semibold mb-3">
                ĐẶC ĐIỂM CÂY BẰNG LĂNG
              </p>
              <p>
                Cây Bằng Lăng là cây thân gỗ, thẳng, thân khá nhẵn nhụi, phân
                nhánh cao, tán dày. Lá có màu xanh, dài từ 8-15 cm, rộng từ 3-7
                cm, có hình oval hoặc elip, thường rụng vào mùa thu.
              </p>
              <p>
                Hoa Bằng Lăng có màu tím hoặc tím nhạt, mọc thành từng chùm trên
                đầu mỗi nhánh, mỗi chùm dài từ 20-30 cm, hoa thường nở vào mùa
                hè. Mỗi bông hoa có 6 cánh, cánh hoa mỏng manh như xác pháo. Quả
                có hình cầu, đường kính 1,5 -2 cm, ban đầu quả có màu tím nhạt
                pha xanh, mềm khi già chuyển sang màu nâu gỗ, cứng. Đối với loài
                cây này, ngoài giống hoa tím, cây còn có nhiều giống hoa với
                nhiều màu sắc khác nhau như tím trắng, hồng, tím sậm…
              </p>
            </div>
            <div className="cong dung">
              <p className="text-xl font-semibold my-3">
                CÔNG DỤNG CÂY BẰNG LĂNG
              </p>
              <p>
                Đối với một số nước Châu Á, dùng lá cây Bằng Lăng Nước nấu uống
                như nước trà sẽ có công dụng chữa bệnh tiểu đường và đau bao tử.
                Ngoài ra, trong lá cây bằng lăng còn có chất làm giảm nguy cơ
                béo phì.
              </p>
              <p>
                Bằng Lăng là cây có hoa đẹp, cho bóng mát nên thường được trồng
                làm hoa cảnh, thường thấy cây trồng hai bên vỉa hè đường phố,
                công viên, trồng lấy bóng mát ở sân vườn nhà, tạo mảng xanh cho
                khu nhà máy, xí nghiệp…
              </p>
            </div>
            <div className="huongdan">
              <p className="text-xl font-semibold my-3">
                HƯỚNG DẪN CÁCH TRỒNG VÀ CHĂM SÓC CÂY BẰNG LĂNG
              </p>
              <p>
                Đặc thù của cây bằng lăng là sống ngoài trời, thích hợp với nơi
                có nhiều ánh sáng mặt trời. Nó sinh trưởng tốt trên đất tơi xốp,
                thoáng khí và dễ thoát nước. Trước khi trồng cây bằng lăng tầm 1
                tháng, bạn nên bón phân cho đất trồng. Mục đích của việc này là
                cung cấp nguồn dinh dưỡng cần thiết cho cây bằng lăng (ngay khi
                nó được trồng).
              </p>
              <p>
                Thời điểm thích hợp nhất để trồng cây bằng lăng là khoảng tháng
                5 – tháng 6 (nên trồng vào đầu mùa mưa). Có nhiều nước cây sẽ
                lớn nhanh và xanh tốt quanh năm. Để cây bằng lăng ra hoa đẹp,
                bạn nên chăm chút nhiều hơn đất trồng. Cụ thể như sau: mỗi năm
                nhặt cỏ xung quanh gốc cây 2-3 lần, kết hợp với đó là xới đất và
                vun gốc. Mỗi năm bón phân hữu cơ 1-2 lần. Cây bằng lăng không
                yêu cầu bạn tưới nước nhiều, cũng không cầu kỳ trong chăm sóc.
                Giống cây này đẹp nhất khi ra hoa. Hoa bằng lăng đạt hiệu quả
                cao trong làm đẹp. Không loài hoa nào đạt được tính lãng mạn và
                thanh tao của hoa bằng lăng.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[800px] h-[300px] bg-black rounded-md">
        <video className="h-full w-[300px] rounded-lg" controls autoPlay>
          <source src="/assets/cangbanglangvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
export default ProductDetailsComponent;
