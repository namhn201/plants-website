import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
  // const [showHeader, setShowHeader] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("Cuộn chưa")
  //     // Kiểm tra vị trí cuộn trang
  //     if (window.scrollY > 100) { // Điều chỉnh giá trị này tùy theo nhu cầu
  //       setShowHeader(true); // Hiển thị header
  //     } else {
  //       setShowHeader(false); // Ẩn header
  //     }
  //   };

  //   // Gắn sự kiện cuộn trang
  //   window.addEventListener("scroll", handleScroll);

  //   // Dọn dẹp sự kiện khi component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="h-[100dvh] min-w-[250px] ">
      <Header />
      <section className=" relative Layout flex flex-1 flex-col items-center gap-x-10 sm:p-0 overflow-x-hidden overflow-y-hidden scroll-smooth">
        <div className="w-full z-10 ">{children}</div>
        <div className="absolute top-[50%] right-[-100px] hidden sm:block">
          <img className="w-[300px] h-full" src="/assets/plant_side_bg_2.jpg" alt="" />
        </div>
        <div className="absolute top-[70%] left-[-100px] hidden sm:block rotate-180">
          <img className="w-[300px] h-full" src="/assets/plant_side_bg_2.jpg" alt="" />
        </div>
         <div className="absolute bottom-[-10px] right-[-20px] hidden sm:block">
          <img className="w-[400px] h-full" src="/assets/plant_side_bg_1.jpg" alt="" />
        </div>
     
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
