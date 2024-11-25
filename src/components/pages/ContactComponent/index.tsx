import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";
import { routerName } from "@/constants/router.constant";

const ContactComponent = () => {
  return (
    <div className="h-full">
      <nav className="flex justify-center mb-5">
        <ul className="flex gap-2 w-[93%]">
          <li>
            <Link href={routerName.DashBoard}>
              <p>Trang chủ</p>
            </Link>
          </li>
          <li>
            <Link href={routerName.Contact}>
              <p>/ Sản phẩm </p>
            </Link>
          </li>
          {/* <li>
            <a href="#URL">Cây xanh</a>
          </li> */}
          {/* <li>Current Page</li> */}
        </ul>
      </nav>      <h1>Welcome to ContactComponent</h1>
   
    </div>
  );
};
export default ContactComponent;
