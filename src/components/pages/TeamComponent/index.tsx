import { routerName } from "@/constants/router.constant";
import Link from "next/link";

const TeamComponent = () => {
  return (
    <div>
      <nav className="flex justify-center mb-5">
        <ul className="flex gap-2 w-[93%]">
          <li>
            <Link href={routerName.DashBoard}>
              <p>Trang chủ</p>
            </Link>
          </li>
          <li>
            <Link href={routerName.Team}>
              <p>/ Cơ cấu tổ chức </p>
            </Link>
          </li>
          {/* <li>
            <a href="#URL">Cây xanh</a>
          </li> */}
          {/* <li>Current Page</li> */}
        </ul>
      </nav>
      <h1>Welcome to TeamComponent</h1>
    </div>
  );
};
export default TeamComponent;
