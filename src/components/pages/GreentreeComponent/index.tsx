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
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GreenTreeComponent = (dataplants: any) => {
  console.log("Listening from GreenTreeComponent");
  console.log(
    "propssssssssss from GreenTreeComponent",
    dataplants.props.data.plants
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      AOS.init({
        easing: "ease-in-out",
      });
      AOS.refresh();
    }
  }, [imageLoaded]);
  return (
    <div className=" w-full ">
      <div className="w-full flex justify-center ">
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
                console.log('Ảnh đã tải xong');
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
                        <li>
                          <Link href={routerName.GreenTree}>
                            <p>/ Cây xanh </p>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <p>CÂY XANH CÔNG TRÌNH</p>
                    <p className="text-base  sm:w-[40%] ">
                      Khám phá vẻ đẹp tự nhiên cho khu vườn – Tạo dựng một không
                      gian sống xanh mát và đầy năng lượng!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] md:w-[70%] flex justify-center">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center mt-10 w-full max-w-[1000px]">
            {dataplants.props.data.plants[0].items.map(
              (plant: any, index: any) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  key={index}
                  className="relative w-full product-card sm:max-w-[280px] h-[540px] lg:max-w-[430px] lg:h-[640px] mb-8 shadow-[0_8px_24px_rgba(0,0,0,0.8)] rounded-2xl transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.9)]"
                >
                  <Image
                    layout="fill"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl"
                    src={plant.images[2] ? plant.images[2] : plant.images[0]}
                    alt="Sản phẩm 1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80 via-black/5 rounded-2xl"></div>

                  <div className="absolute bottom-0 content p-5 w-full">
                    {/* <p className=" text-xl font-semibold text-white shadow-md bg-black bg-opacity-40 p-1 rounded-2xl mb-2 w-full text-center"> */}
                    <p className=" text-xl font-semibold text-white shadow-md p-1 rounded-2xl mb-2 w-full text-center">
                      {plant.name}
                    </p>
                    <Link href={`/products/${plant.category}/${plant.id}`}>
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
