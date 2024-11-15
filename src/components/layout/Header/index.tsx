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
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const Header = () => {
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
      className={`${!isOpen ? "" : ""} my-2 cursor-pointer w-[30px] h-[30px] text-[1.2rem] `}
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
      <div className="header_bottom flex h-[52px] justify-center border-t border-b border-solid border-[#F2F2F2]">
        <div className="flex h-full w-[50%] justify-center items-center ">
          <div id="wrapper" className="w-full h-full">
            <div id="header" className="h-full">
              <nav className="h-full">
                <ul
                  id="main-menu"
                  className="flex w-full justify-between h-full pt-3"
                >
                  <li className="text-[#090909] hover:text-[#014E37]">
                    <Link href={routerName.DashBoard}>
                      <p>Trang chủ</p>
                    </Link>
                  </li>
                  <li className="relative group h-full text-[#090909] hover:text-[#014E37]">
                    <Link href={routerName.Products}>
                      <p className="cursor-pointer ">Cây cảnh</p>
                    </Link>

                    {/* Dropdown menu */}
                    <ul className=" z-50 absolute left-0 top-[1.9rem] hidden mt-2 w-40 bg-white shadow-lg group-hover:flex flex-col ">
                      <li>
                        <Link href="/product1">
                          <p className="block px-4 py-2 hover:text-[#014E37]">
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

                  <li className="text-[#090909] hover:text-[#014E37]">
                    <Link href={routerName.Products}>
                      <p>Phụ kiện</p>
                    </Link>
                  </li>
                  <li className="text-[#090909] hover:text-[#014E37]">
                    <Link href={routerName.Careers}>
                      <p>Tuyển dụng</p>
                    </Link>
                  </li>
                  <li className="text-[#090909] hover:text-[#014E37]">
                    <Link href={routerName.Contact}>
                      <p>Giới thiệu</p>
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
    // <div className="flex h-full w-[50%] md:hidden">
    //   <div
    //     id="wrapper"
    //     className={`fixed left-0 top-0 z-20 flex h-[450px] max-h-[100vh] w-[75%] max-w-[1170px] transform flex-col rounded-[20px] bg-white px-3 shadow-md transition-transform duration-500 ease-in-out md:left-auto md:gap-2 md:py-6
    //       ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    //   >
    //     <div id="header" className="flex justify-between p-8">
    //       <nav>
    //         <ul
    //           id="main-menu"
    //           className={`${isOpen}flex w-full justify-between`}
    //         >
    //           <li>
    //             <Link href={routerName.DashBoard}>
    //               <p>Trang chủ</p>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href={routerName.Products}>
    //               <p>Cây cảnh</p>
    //             </Link>{" "}
    //           </li>
    //           <li>
    //             <Link href={routerName.Products}>
    //               <p>Phụ kiện</p>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href={routerName.Careers}>
    //               <p>Tuyển dụng</p>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href={routerName.Contact}>
    //               <p>Giới thiệu</p>
    //             </Link>
    //           </li>
    //         </ul>
    //       </nav>
    //       <div className="cancel cursor-pointer" onClick={oncancel}>
    //         X
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      id="wrapper"
      className={` md:hidden fixed left-0 top-0 z-20 flex h-full max-h-[100vh] w-[75%] max-w-[300px] transform flex-col rounded-[20px] bg-white px-3 shadow-md transition-transform duration-500 ease-in-out md:left-auto md:gap-2 md:py-6
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem]  py-4 pl-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 py-4 pl-4 pr-2 flex justify-between ">
          <Typography variant="h5" color="blue-gray">
            Sidebar
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
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Product
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Analytics
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Reporting
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Projects
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contact
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <Accordion
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
          </Accordion>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
  return (
    <header id="header" className="">
      <div className="header_top_sale bg-[#f5f5f5] h-[41px]  justify-center hidden md:flex border-t border-b border-solid border-[#F2F2F2]">
        <div className="w-[90%] flex justify-start items-center">
          <p>Hot Sale 30% Today</p>
        </div>
      </div>
      <div className="header_main flex h-[90px] md:h-[82px]  justify-center border-t border-solid border-[#F2F2F2]">
        <div className="header-top h-full w-[93%] ">
          <div className="header_container h-full items-center justify-between md:flex">
            <div className="header_left w-[16%]">
              <div className="Logo flex  h-full max-w-[100px] min-w-[80px]  md:max-w-[140px]">
                {!isScreen && renderMenuIcon()}
                <img
                  className="w-full cursor-pointer hidden  md:block "
                  src="./assets/LogoPlant_2.jpg"
                  alt="LogoPlants"
                />
              </div>
            </div>
            <div className="header_right w-[84%]">
              <div className="header_cart flex justify-end">
                <div className="header-search inline-block h-full max-h-[45px] w-full px-1 md:w-[75%] ">
                  {/* <input
                    type="text"
                    className="w-[120%] mt-2 md:mt-0 md:w-[90%] border border-[#F2F2F2] outline-none h-[40px] rounded-lg"
                  /> */}
                  <div className=" w-[120%] md:w-full min-w-[100px]">
                    <div className="relative">
                      <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="UI Kits, Dashboards..."
                      />
                      <button
                        className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 mr-2"
                          color="#000000"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="acount-cart absolute right-[24px] top-1 inline-block whitespace-nowrap md:static md:w-[25%]">
                  <div className="flex h-full items-center justify-end  gap-2 md:gap-5 lg:gap-0 lg:justify-evenly">
                    <div className="Account lg:mr-2 inline-block ">
                      <div className="flex gap-1">
                        <Menu>
                          <MenuHandler>
                            <IconButton className="bg-[#014E37] w-[30px] h-[30px] md:w-[2.5rem] md:h-[2.5rem]">
                              <svg
                                className="inline-block w-[20px] h-[20px] md:w-[25px] md:h-[25px] "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                color="#ffffff"
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
                            </IconButton>
                          </MenuHandler>
                          <MenuList>
                            <MenuItem>Menu Item 1</MenuItem>
                            <MenuItem>Menu Item 2</MenuItem>
                            <MenuItem>Menu Item 3</MenuItem>
                          </MenuList>
                        </Menu>

                        <p className=" hidden lg:inline-block text-black">
                          My Account
                        </p>
                      </div>
                    </div>
                    <div className="Cart inline-block">
                      {/* <img className="inline-block" src={shoppingCart} alt="" /> */}
                      <div className="flex gap-1">
                        <IconButton className="bg-[#014E37] w-[30px] h-[30px] md:w-[2.5rem] md:h-[2.5rem]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            color="#ffffff"
                            fill="none"
                            className="inline-block w-[20px] h-[20px] md:w-[25px] md:h-[25px] "
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
                        </IconButton>

                        <p className="hidden lg:inline-block text-black">
                          Cart
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="header_bottom flex h-[52px] justify-center border-t border-b border-solid border-[#F2F2F2]"> */}
      {/* {isOpen ? sideBar() : headerBottom()} */}
      {headerBottom()}
      {/* </div> */}
      {sideBar()}
    </header>
  );
};

export default Header;
