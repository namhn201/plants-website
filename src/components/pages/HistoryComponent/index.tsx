import { routerName } from "@/constants/router.constant";
import Link from "next/link";

const HistoryComponent = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-center mb-5">
        <ul className="flex gap-2 w-[93%] text-xs sm:text-base">
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
          {/* <li>
            <a href="#URL">Cây xanh</a>
          </li> */}
          {/* <li>Current Page</li> */}
        </ul>
      </nav>
      <div className="flex justify-center">
        <h1>Welcome to HistoryComponent</h1>
      </div>
    </div>
  );
};
export default HistoryComponent;
