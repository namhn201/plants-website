import Breadcrumb from "@/components/breadcrumb";
import { routerName } from "@/constants/router.constant";
import Link from "next/link";

const CareersComponent = () => {
  return (
    <div className="w-full mt-24">
      <nav className="flex justify-center mb-5">
        <ul className="flex gap-2 w-[93%] text-xs sm:text-base">
          <li>
            <Link href={routerName.DashBoard}>
              <p>Trang chủ</p>
            </Link>
          </li>
          <li>
            <Link href={routerName.Careers}>
              <p>/ T  uyển dụng </p>
            </Link>
          </li>
          {/* <li>
            <a href="#URL">Cây xanh</a>
          </li> */}
          {/* <li>Current Page</li> */}
        </ul>
      </nav>{" "}
      <h1>Welcome to CareersComponent</h1>
 
    </div>
  );
};
export default CareersComponent;
