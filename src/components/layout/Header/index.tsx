import useWindowSize from "@/hooks/common/useWindowSize";
// import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useCallback, useEffect, useState } from "react";
import shoppingCart from "@/assets/icons/shopping-cart.svg";
import userAccount from "@/assets/icons/user-account.svg";
import Link from "next/link";
import { routerName } from "@/constants/router.constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScreen, setIsScreen] = useState(false);
  const { width } = useWindowSize();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    if (width > 768) {
      setIsScreen(true);
    }
    if (width <= 768) {
      setIsScreen(false);
    }
  }, [width]);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
    // setIsPopupFundrising(false)
  }, [isOpen]);
  const onSearch = (value: any) => {
    console.log(value);
  };
  const oncancel = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isScreen && isOpen) {
      setIsOpen(false);
    }
  }, [isScreen, isOpen]);

  const renderMenuIcon = () => (
    <div
      className={`${!isOpen ? "" : ""} mt-3 `}
      onClick={toggleMenu}
      onKeyDown={(e) => {
        if (e.key === "Esc" || e.key === " ") {
          toggleMenu();
        }
      }}
      role="button"
      tabIndex={0}
    >
      &#9776;
    </div>
  );
  const headerBottom = () => {
    if (isOpen || !isScreen) return null;
    return (
      <div className="flex h-full w-[50%] justify-center items-center ">
        <div id="wrapper" className="w-full h-full">
          <div id="header" className="h-full">
            <nav className="h-full">
              <ul id="main-menu" className="flex w-full justify-between h-full pt-3">
                <li>
                  <Link href={routerName.DashBoard}>
                    <p>Trang chủ</p>
                  </Link>
                </li>
                {/* <li>
                  <Link href={routerName.Products}>
                    <p>Cây cảnh</p>
                  </Link>
                </li> */}
                <li className="relative group h-full">
                  {/* Phần tử kích hoạt dropdown */}
                  <Link href={routerName.Products}>
                    <p className="cursor-pointer ">Cây cảnh</p>
                  </Link>

                  {/* Dropdown menu */}
                  <ul className="absolute left-0 top-8 hidden mt-2 w-40 bg-white shadow-lg group-hover:flex flex-col ">
                    <li>
                      <Link href="/product1">
                        <p className="block px-4 py-2 hover:bg-gray-200">
                          Cây cảnh 1
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/product2">
                        <p className="block px-4 py-2 hover:bg-gray-200">
                          Cây cảnh 2
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/product3">
                        <p className="block px-4 py-2 hover:bg-gray-200">
                          Cây cảnh 3
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href={routerName.Products}>
                    <p>Phụ kiện</p>
                  </Link>
                </li>
                <li>
                  <Link href={routerName.Careers}>
                    <p>Tuyển dụng</p>
                  </Link>
                </li>
                <li>
                  <Link href={routerName.Contact}>
                    <p>Giới thiệu</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  };

  const sideBar = () => (
    <div className="flex h-full w-[50%]">
      <div
        id="wrapper"
        className={`fixed left-0 top-0 z-20 flex h-[450px] max-h-[100vh] w-[75%] max-w-[1170px] transform flex-col rounded-[20px] bg-white px-3 shadow-md transition-transform duration-500 ease-in-out md:left-auto md:gap-2 md:py-6
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div id="header" className="flex justify-between p-8">
          <nav>
            <ul
              id="main-menu"
              className={`${isOpen}flex w-full justify-between`}
            >
              <li>
                <Link href={routerName.DashBoard}>
                  <p>Trang chủ</p>
                </Link>
              </li>
              <li>
                <Link href={routerName.Products}>
                  <p>Cây cảnh</p>
                </Link>{" "}
              </li>
              <li>
                <Link href={routerName.Products}>
                  <p>Phụ kiện</p>
                </Link>
              </li>
              <li>
                <Link href={routerName.Careers}>
                  <p>Tuyển dụng</p>
                </Link>
              </li>
              <li>
                <Link href={routerName.Contact}>
                  <p>Giới thiệu</p>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="cancel" onClick={oncancel}>
            X
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <header id="header" className="">
      <div className="header_top_sale bg-[#f5f5f5] h-[41px]  justify-center hidden md:flex border-t border-b border-solid border-[#F2F2F2]">
        <div className="w-[90%] flex justify-start items-center">
          <p>Get 30% Off On Selected Items</p>
        </div>
      </div>
      <div className="header_main flex h-[82px] justify-center border-t border-solid border-[#F2F2F2]">
        <div className="header-top h-full w-[93%] ">
          <div className="header_container h-full items-center justify-between md:flex">
            <div className="header_left w-[10%]">
              <div className="Logo flex  h-full w-[100px]  md:w-[140px]">
                {!isScreen && renderMenuIcon()}
                <img
                  className="w-full"
                  src="./assets/LogoPlant_2.jpg"
                  alt="LogoPlants"
                />
              </div>
            </div>
            <div className="header_right w-[80%]">
              <div className="header_cart flex justify-end">
                <div className="header-search inline-block h-full max-h-[45px] w-full px-1 md:w-[75%] ">
                  <input
                    type="text"
                    className="w-[126%] md:w-[90%] border border-[#F2F2F2] outline-none h-[40px] rounded-lg"
                  />
                </div>
                <div className="acount-cart absolute right-[24px] top-3 inline-block whitespace-nowrap md:static md:w-[25%]">
                  <div className="flex h-full items-center justify-evenly">
                    <div className="Account mr-2 inline-block ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        color="#000000"
                        fill="none"
                        className="inline-block"
                      >
                        <path
                          d="M4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L19.6591 16.8781C19.249 19.3264 19.044 20.5505 18.2319 21.2752C17.4199 22 16.2534 22 13.9204 22H10.0796C7.74664 22 6.58014 22 5.76809 21.2752C4.95603 20.5505 4.75097 19.3264 4.34085 16.8781Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                        <path
                          d="M4.5 17.5H19.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                      </svg>
                      <p className=" hidden md:inline-block text-black">
                        Account
                      </p>
                    </div>
                    <div className="Cart inline-block">
                      {/* <img className="inline-block" src={shoppingCart} alt="" /> */}
                      <svg
                        className="inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        color="#000000"
                        fill="none"
                      >
                        <path
                          d="M14 8.99988H18"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M14 12.4999H17"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <rect
                          x="2"
                          y="2.99988"
                          width="20"
                          height="18"
                          rx="5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 15.9999C6.20831 13.4188 10.7122 13.249 12 15.9999"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.5 8.99988C10.5 10.1044 9.60457 10.9999 8.5 10.9999C7.39543 10.9999 6.5 10.1044 6.5 8.99988C6.5 7.89531 7.39543 6.99988 8.5 6.99988C9.60457 6.99988 10.5 7.89531 10.5 8.99988Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                        />
                      </svg>
                      <p className="hidden md:inline-block text-black">Cart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom flex h-[52px] justify-center border-t border-b border-solid border-[#F2F2F2]">
        {isOpen ? sideBar() : headerBottom()}
      </div>
    </header>
  );
};

export default Header;
