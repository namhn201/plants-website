import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
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
