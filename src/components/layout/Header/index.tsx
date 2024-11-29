import useWindowSize from "@/hooks/common/useWindowSize";
// import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import shoppingCart from "@/assets/icons/shopping-cart.svg";
import userAccount from "@/assets/icons/user-account.svg";
import Link from "next/link";
import { routerName } from "@/constants/router.constant";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  BookOpenIcon,
  BuildingOffice2Icon,
  TagIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const Header = () => {
  // console.log("Listening from HeaderComponent", showHeader);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(0);

  const [isScreen, setIsScreen] = useState(false);
  const { width } = useWindowSize();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

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
      className={`${
        !isOpen ? "" : ""
      } my-2 cursor-pointer w-[30px] h-[30px] text-[1.3rem] `}
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
      <div className="header_bottom flex w-[100%] h-full mt-5 ">
        <div className="flex h-full w-full">
          <div id="wrapper" className="w-full h-full">
            <div id="header" className="h-full ">
              <nav className="h-full">
                <ul
                  id="main-menu"
                  className="flex w-full justify-evenly h-full text-lg font-semibold"
                >
            
                  <li className={` text-white ${showHeader ? "  transition-transform transform hover:scale-105": "text-white"} relative group h-full `}>
                    <Link href={routerName.Team}>
                      <p className="cursor-pointer ">Giới thiệu</p>
                    </Link>

                    {/* Dropdown menu */}
                    <ul className=" w-60 z-50 absolute left-[-1.5rem] text-black top-[2.7rem] hidden mt-2 w-40 bg-white shadow-lg group-hover:flex flex-col ">
                      <li>
                        <Link href={routerName.History}>
                          <p className="block px-4 py-2 text-lg font-light hover:text-[#014E37]">
                            <p>Lịch sử hình thành</p>
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link href={routerName.Team}>
                          <p className="block px-4 py-2 text-lg font-light hover:text-[#014E37]">
                            <p>Cơ cấu tổ chức</p>
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={` text-white ${showHeader ? " transition-transform transform hover:scale-105": ""} `}>
                    <Link href={routerName.Products}>
                      <p>Sản phẩm</p>
                    </Link>
                  </li>
                  <li className={` text-white ${showHeader ? " transition-transform transform hover:scale-105": "text-white"} `}>
                    <Link href={routerName.Careers}>
                      <p>Tuyển dụng</p>
                    </Link>
                  </li>
                  <li className={`text-white ${showHeader ? " transition-transform transform hover:scale-105": "text-white"} `}>
                    <Link href={routerName.Contact}>
                      <p>Liên hệ</p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const sideBar = () => (
    <div
      id="wrapper"
      className={` md:hidden fixed left-0 top-0 z-20 flex h-[100dvh] w-[75%] max-w-[300px] transform flex-col rounded-[20px] bg-white px-3 shadow-md transition-transform duration-500 ease-in-out md:left-auto md:gap-2 md:py-6
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem]  py-4 pl-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 py-4 pl-4 pr-2 flex justify-between ">
          <Typography variant="h5" color="blue-gray">
            {Logo()}
          </Typography>
          <button
            className="font-bold rounded-md border border-transparent px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={oncancel}
          >
            X
          </button>
        </div>
        <List className="min-w-[100px]">
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <Link href={routerName.Products}>
              <ListItem>
                <ListItemPrefix>
                  <TagIcon className="h-5 w-5" />
                </ListItemPrefix>
                Sản phẩm
              </ListItem>
            </Link>

            {/* <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Danh mục
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Cây xanh
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Cây cảnh
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Thuốc bảo vệ thực vật
                </ListItem>
              </List>
            </AccordionBody> */}
          </Accordion>

          <Link href={routerName.Contact}>
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Liên hệ
              <ListItemSuffix>
                <Chip
                  value="0"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>

          {/* <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Phụ kiện
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion> */}
          <Link href={routerName.Team}>
            <ListItem>
              <ListItemPrefix>
                <BuildingOffice2Icon className="h-5 w-5" />
              </ListItemPrefix>
              Cơ cấu tổ chức
            </ListItem>
          </Link>

          <Link href={routerName.History}>
            <ListItem>
              <ListItemPrefix>
                <BookOpenIcon className="h-5 w-5" />
              </ListItemPrefix>
              Lịch sử hình thành
            </ListItem>
          </Link>

          <Link href={routerName.Careers}>
            <ListItem>
              <ListItemPrefix>
                <BellIcon className="h-5 w-5" />
              </ListItemPrefix>
              Tuyển dụng
            </ListItem>
          </Link>

          {/* <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem> */}
          {/* <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem> */}
        </List>
      </Card>
    </div>
  );
  const Logo = () => (
    <Link href={routerName.DashBoard}>
      <img
        className=" cursor-pointer absolute w-[110px] h-[50px] md:static md:h-full md:w-full"
        src="/assets/LogoPlantPng_6.png"
        alt="LogoPlants"
      />
    </Link>
  );
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
     console.log("Vừa được mount ")
    const handleScroll = () => {
      console.log("đang chạy handleScroll nè")
      if (window.scrollY > 50) {
        setShowHeader(true); 
      } else {
        setShowHeader(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log("Sự kiện scroll đã được thêm vào window");

    
  }, []);

  return (
    <div
    className={`transition-all duration-500 ${
      showHeader ? "bg-[#3E7160]" : "bg-transparent"
    } fixed top-0 left-0 w-full z-50`}
    id="header"
  >
     <header id="header" className="">
      <div className="header_main flex justify-center">
        <div className="header-top h-full w-[93%]  h-16 ">
          <div className="relative header_container h-full items-center justify-between flex">
            <div className="header_left w-[35%]">
              <div className=" Logo flex  h-full max-w-[100px] min-w-[80px] md:max-w-[140px]">
                {!isScreen && renderMenuIcon()}
                {Logo()}
              </div>
            </div>
            <div className="header_right w-[75%] h-full">{headerBottom()}</div>
          </div>
        </div>
      </div>
      {sideBar()}
    </header>
  </div>

   
  );
};

export default Header;
