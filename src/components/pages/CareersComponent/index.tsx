import Breadcrumb from "@/components/breadcrumb";
import { routerName } from "@/constants/router.constant";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input, Select, Option } from "@material-tailwind/react";
import { Form } from "antd";
import { useForm, Controller } from "react-hook-form";

const CareersComponent = (data: any) => {
  console.log("data form CareersComponent client", data.props.careers);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [careersData, setCareersData] = useState<any[]>([]);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [careersDetailsPopup, setCareersDetailsPopup] = useState<any>({
    company: "",
    location: "",
    roles: [],
  });

  const [roleDetailsPopup, setRoleDetailsPopup] = useState<any>({
    title: "",
    responsibilities: [],
    deadline: "",
  });

  const handleOpenPopup = (careersDetails: any, roleDetails: any) => {
    console.log("handleOpenPopup CareersDetails", careersDetails);
    console.log("handleOpenPopup ROLE", roleDetails);
    setCareersDetailsPopup(careersDetails);
    setRoleDetailsPopup(roleDetails);
    setIsOpenPopup((prevState) => !prevState);
    console.log(
      "After setState CareersDetailsPopup",
      careersDetailsPopup.company
    );
    console.log("After setState RoleDetailsPopup", roleDetailsPopup);
  };
  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  useEffect(() => {
    if (data.props.careers) {
      setCareersData(data.props.careers);
      setFilterData(data.props.careers);
    }
  }, [data.props.careers]);
  console.log("careersData", careersData);
  console.log("setFilterData", filterData);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  // setValue("company", "");
  // setValue("location", "");

  useEffect(() => {
    if (imageLoaded) {
      AOS.init({
        easing: "ease-in-out",
        duration: 550,
      });
      AOS.refresh();
    }
  }, [imageLoaded]);
  const onSubmit = (formData: any) => {
    try {
      console.log("Form data submitted", formData);
      const filteredCareers = careersData
        .map((career: any) => {
          //SEARCH CHỨC VỤ
          if (formData.position) {
            const filteredRoles = career.roles.filter((role: any) => {
              return role.title?.includes(formData.position);
            });
            if (filteredRoles.length > 0) {
              return { ...career, roles: filteredRoles };
            }
          }
          //SEARCH COMPANY
          if (formData.company) {
            const companyMatch = career.company?.includes(formData.company);
            console.log("Company Match: ", career.company, ":", companyMatch);
            if (companyMatch) {
              console.log("Công ty match với nhau: ", career);
              return { ...career };
            }
          }
          //SEARCH Location
          if (formData.location) {
            const locationMatch = career.location?.includes(formData.location);
            console.log("Location Match: ", career.company, ":", locationMatch);
            if (locationMatch) {
              console.log("Địa chỉ match với nhau: ", career);
              return { ...career };
            }
          }
          return null;
        })
        .filter((career: any) => career !== null);

      console.log("Filtered Careers:", filteredCareers);
      setFilterData(filteredCareers);
    } catch (error) {
      console.error("An error occurred while searching:", error);
    }
  };

  // const onFinish = (values: any) => console.log("Form values: ", values);
  // const onSubmit = (formData: any) => console.log("SUBMIT", formData);
  // const onSubmit = (formData: any) => {
  //   console.log("Form data submitted", formData);
  //   const filteredCareers = careersData.filter((career: any) => {
  //     return career.roles.filter((role: any) => {
  //       console.log("career form filteredCareers ", career);
  //       console.log("role form filteredCareers ", role);

  //       // Log giá trị của career.position và formData.position trước khi so sánh
  //       console.log("role.position:", role.title);
  //       console.log("formDataSUbmit.position:", formData.position);

  //       const positionMatch =
  //       (role.title?.includes(formData.position) || !formData.position);
  //       console.log("Position match:", positionMatch);

  //       const companyMatch =
  //         career.company === formData.company || !formData.company;
  //       console.log("Company match:", companyMatch);

  //       const locationMatch =
  //         career.location === formData.location || !formData.location;
  //       console.log("Location match:", locationMatch);

  //       // Trả về kết quả của filter dựa trên tất cả các điều kiện
  //       return positionMatch && companyMatch && locationMatch;
  //     });
  //   });
  //   console.log("filteredCareersfilteredCareersfilteredCareers",filteredCareers)

  //   setFilterData(filteredCareers);
  // };
  const handleReset = () => {
    setFilterData(data.props.careers);
    reset();
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-center mb-10 ">
        <div className="w-[100%]">
          <div className="relative w-full h-[60vh]">
            <Image
              data-aos="zoom-out"
              loading="eager"
              layout="fill"
              className="w-full h-full object-cover"
              src="/assets/tuyendung.jpg"
              alt=""
              onLoadingComplete={() => {
                console.log("Ảnh đã tải xong");
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
                      <ul className="flex gap-2 w-[100%] text-xs sm:text-base">
                        <li>
                          <Link href={routerName.DashBoard}>
                            <p>Trang chủ</p>
                          </Link>
                        </li>
                        <li>
                          <Link href={routerName.Careers}>
                            <p>/ Tuyển dụng </p>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <p>Tuyển dụng</p>
                    <p className="pl-2 text-base sm:w-[40%] ">
                      Gieo mầm, nuôi dưỡng tương lai – Cùng chúng tôi phát triển
                      không gian xanh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-10">
        <div className="w-[93%] max-w-[1600px] lg:flex gap-6">
          <div className="lg:w-1/3 rounded-xl shadow-lg pb-3 ">
            <p className="text-2xl font-semibold m-6">Thông tin tìm kiếm</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="m-5 mt-6">
                <Input
                  {...register("position")}
                  color="teal"
                  size="lg"
                  label="Chức danh"
                />
              </div>
              <div className="m-5 mt-6 ">
                <Controller
                  name="company"
                  control={control}
                  // rules={{ required: "Chọn địa điểm là bắt buộc" }}
                  render={({ field }) => (
                    <Select {...field} color="teal" size="lg" label="Địa điểm">
                      <Option value="Tập Đoàn NamhuynhGarden">
                        Tập Đoàn NamhuynhGarden
                      </Option>
                      <Option value="Công ty TNHH Cung cấp Cây cảnh">
                        Công ty TNHH Cung cấp Cây cảnh
                      </Option>
                      <Option value="Công ty TNHH Cung cấp Cây kiểng">
                        Công ty TNHH Cung cấp Cây kiểng
                      </Option>
                      <Option value="Công ty TNHH Cung cấp Thuốc bảo vệ thực vật">
                        Công ty TNHH Cung cấp Thuốc bảo vệ thực vật
                      </Option>
                    </Select>
                  )}
                />
              </div>
              <div className="m-5 mt-6 ">
                <Controller
                  name="location"
                  control={control}
                  // rules={{ required: "Chọn địa điểm là bắt buộc" }}
                  render={({ field }) => (
                    <Select {...field} color="teal" size="lg" label="Địa điểm">
                      <Option value="TP HỒ CHÍ MINH">TP HỒ CHÍ MINH</Option>
                      <Option value="HÀ NỘI">HÀ NỘI</Option>
                    </Select>
                  )}
                />
              </div>
              <div className=" m-5">
                <div className="w-[100%] flex mb-5">
                  <button
                    onClick={handleSubmit(onSubmit)}
                    className="flex w-full items-center justify-center rounded-md border border-[#3E7160] border-slate-300 py-2 px-4 text-center text-[#3E7160] text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#3E7160] hover:border-slate-800 focus:text-white focus:bg-[#3E7160] focus:border-slate-800 active:border-slate-800 active:text-white active:bg-[#3E7160] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Áp dụng
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 ml-1.5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="w-[100%] flex ">
                  <button
                    onClick={handleReset}
                    className="flex w-full items-center justify-center rounded-md border border-[#B3B3B3] border-slate-300 py-2 px-4 text-center text-[#B3B3B3] text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#D13238] hover:border-slate-800 focus:text-white focus:bg-[#D13238] focus:border-slate-800 active:border-slate-800 active:text-white active:bg-[#D13238] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Huỷ
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" lg:w-2/3 rounded-xl shadow-lg lg:h-[750px] overflow-auto">
            {filterData.map((data: any) => {
              return data.roles.map((role: any) => (
                <div
                  onClick={() => {
                    handleOpenPopup(data, role);
                  }}
                  className="cursor-pointer 2xl:h-56 shadow-xl bg-white m-5 rounded-lg py-10 hover:border-b-[12px] sm:hover:border-b-0 sm:hover:border-l-[12px] border-[#3E7160] transition-all duration-300 "
                >
                  <p className="px-10 text-2xl font-semibold">{data.company}</p>
                  <p className=" px-10 text-lg font-semibold">{role.title}</p>
                  <div className="w-[80%] pl-16 text-lg">
                    <p>{role.responsibilities[0]}</p>
                    <p>{role.responsibilities[1]}</p>
                  </div>
                  <p className="text-end px-5">{role.deadline}</p>
                </div>
              ));
            })}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#C3D2CE] h-12 my-5">
        <p className=" flex items-center justify-center h-full w-full text-2xl">
          Quy Trình Ứng Tuyển
        </p>
      </div>
      <div className="w-full flex justify-center mb-10 h-full">
        <div className="w-[93%] max-w-[1600px]">
          {/* //Step1 */}
          <div className="w-full flex flex-col-reverse  lg:flex-row lg:h-[32rem] bg-white">
            <div className="lg:w-1/2 bg-transparent">
              <div data-aos="fade-up" className=" p-6 sm:p-16 h-full ">
                <p className="text-3xl">Đăng Tuyển Dụng và Nhận Hồ Sơ</p>
                <ul className="px-10 py-5 list-disc">
                  <li>
                    Công bố thông tin tuyển dụng trên website, mạng xã hội, và
                    các trang việc làm uy tín.
                  </li>
                  <li>
                    Ứng viên có thể nộp hồ sơ trực tuyến qua form trên website
                    hoặc gửi email tuyển dụng.
                  </li>
                  <li>
                    Sàng lọc hồ sơ ban đầu dựa trên các tiêu chí cơ bản như kinh
                    nghiệm, trình độ, kỹ năng.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 p-3 sm:p-10 bg-transparent">
              <Image
                className=" w-full h-full rounded-xl "
                width={800}
                height={690}
                src="/assets/step1.jpg"
                alt=""
              />
            </div>
          </div>
          {/* //Step2 */}
          <div className="w-full flex flex-col lg:flex-row lg:h-[32rem] bg-[#f2f4f4]">
            <div className="lg:w-1/2 p-3 sm:p-10 bg-transparent">
              <Image
                className=" w-full h-full rounded-xl "
                width={800}
                height={690}
                src="/assets/step2.jpg"
                alt=""
              />
            </div>
            <div className="lg:w-1/2 bg-transparent">
              <div data-aos="fade-up" className="p-6 sm:p-16 h-full">
                <p className="text-3xl">Tiếp Nhận và Sàng Lọc Hồ Sơ</p>
                <ul className="px-10 py-5 list-disc">
                  <li>
                    Nhận và kiểm tra hồ sơ ứng viên để xác minh các thông tin cơ
                    bản.
                  </li>
                  <li>
                    Sàng lọc hồ sơ dựa trên các tiêu chí đã đặt ra, loại bỏ
                    những hồ sơ không đáp ứng yêu cầu tối thiểu.
                  </li>
                  <li>
                    Sàng lọc hồ sơ dựa trên các tiêu chí đã đặt ra, loại bỏ
                    những hồ sơ không đáp ứng yêu cầu tối thiểu.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* //Step3 */}
          <div className="w-full flex flex-col-reverse  lg:flex-row lg:h-[32rem] bg-white">
            <div className="lg:w-1/2 bg-transparent">
              <div data-aos="fade-up" className=" p-6 sm:p-16 h-full ">
                <p className="text-3xl">Đánh Giá Năng Lực Chuyên Môn</p>
                <ul className="px-10 py-5 list-disc">
                  <li>
                    Hình thức: Bài kiểm tra chuyên môn hoặc thử thách thực tế.
                  </li>
                  <li>
                    Bài kiểm tra chuyên môn: Câu hỏi trắc nghiệm, viết luận,
                    hoặc các bài tập lý thuyết để đánh giá kiến thức và kỹ năng
                    chuyên môn.
                  </li>
                  <li>
                    Thử thách thực tế (nếu có): Đề bài mô phỏng tình huống thực
                    tế hoặc dự án để ứng viên áp dụng kiến thức và kỹ năng giải
                    quyết vấn đề.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 p-3 sm:p-10 bg-transparent">
              <Image
                className=" w-full h-full rounded-xl "
                width={800}
                height={690}
                src="/assets/step3.jpg"
                alt=""
              />
            </div>
          </div>
          {/* //Step4 */}
          <div className="w-full flex flex-col lg:flex-row lg:h-[32rem] bg-[#f2f4f4]">
            <div className="lg:w-1/2 p-3 sm:p-10 bg-transparent">
              <Image
                className=" w-full h-full rounded-xl "
                width={800}
                height={690}
                src="/assets/step4.jpg"
                alt=""
              />
            </div>
            <div className="lg:w-1/2 bg-transparent">
              <div data-aos="fade-up" className=" p-6 sm:p-16 h-full">
                <p className="text-3xl">Phỏng vấn</p>
                <ul className="px-4 sm:px-10 py-5 list-disc">
                  <li>
                    Phỏng vấn là buổi gặp gỡ chính thức giữa ứng viên và Công ty
                    để đánh giá sự phù hợp của ứng viên với công việc. Công ty
                    sẽ xem xét các yếu tố như khả năng giao tiếp, làm việc nhóm
                    hoặc độc lập, tổ chức công việc, tư duy và giải quyết vấn
                    đề, đồng thời kiểm tra thông tin trong hồ sơ (học vấn, kinh
                    nghiệm, kỹ năng). Ứng viên cũng có thể đặt câu hỏi về công
                    ty. Tùy từng vị trí, có thể có nhiều vòng phỏng vấn. Kết quả
                    sẽ được thông báo trong vòng 10 ngày sau buổi phỏng vấn.
                  </li>
                  <li>Thỏa thuận hợp đồng</li>
                  <li>
                    Hình thức: Phỏng vấn trực tiếp, qua điện thoại hoặc video
                    call.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* //Step5 */}
          <div className="w-full flex flex-col-reverse  lg:flex-row lg:h-[32rem] bg-white">
            <div className="lg:w-1/2 bg-transparent">
              <div data-aos="fade-up" className=" p-6 sm:p-16 h-full ">
                <p className="text-3xl"> Thông Báo Kết Quả</p>
                <ul className="px-10 py-5 list-disc">
                  <li>
                    Gửi thư mời nhận việc cho ứng viên trúng tuyển và thư cảm ơn
                    cho các ứng viên không đạt.
                  </li>
                  <li>
                    Tổ chức buổi định hướng (orientation) để giới thiệu về công
                    ty, chính sách, quy trình làm việc và phân công người cố vấn
                    cho nhân sự mới
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 p-3 sm:p-10 bg-transparent">
              <Image
                className=" w-full h-full rounded-xl "
                width={800}
                height={690}
                src="/assets/step5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isOpenPopup
            ? "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            : ""
        }
      >
        {isOpenPopup && (
          <div className="absolute top-[12%] left-4 right-4  h-[82vh] md:h-[80vh] bg-white rounded-xl overflow-auto">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 bg-gray-300 text-black rounded-full p-2"
            >
              X
            </button>
            <div className="w-full flex justify-center">
              <div className="w-[93%]">
                <div className="text-center pt-5">
                  {/* <p className="text-3xl">{careersDetailsPopup.company}</p> */}
                  <p className="text-lg">Vị trí tuyển dụng</p>
                  <p className="text-3xl text-[#3E7160]">
                    {roleDetailsPopup.title}
                  </p>
                  <p>{roleDetailsPopup.address}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-3">
                  <div className="">
                    <p>Số lượng cần tuyển: 1</p>
                    <p>Loại hình công việc: Toàn thờI gian</p>
                    <p>Đơn vị quản lý: {careersDetailsPopup.company}</p>
                  </div>
                  <div className="">
                    <p>Mức lương: Thoả thuận</p>
                    <p>Hạn nộp hồ sơ: {roleDetailsPopup.deadline}</p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="">
                    <p className="text-xl">Chi tiết công việc</p>
                    <ul className="px-4 sm:px-10 py-5 list-disc">
                      <li>{roleDetailsPopup.responsibilities[0]}</li>
                      <li>{roleDetailsPopup.responsibilities[1]}</li>
                    </ul>
                  </div>
                  <div className="">
                    <p className="text-xl">Yêu cầu công việc</p>
                    <ul className="px-4 sm:px-10 py-5 list-disc">
                      <li>{roleDetailsPopup.requirements[0]}</li>
                      <li>{roleDetailsPopup.requirements[1]}</li>
                    </ul>
                  </div>
                  <div className="">
                    <p className="text-xl">Phúc lợi</p>
                    <ul className="px-4 sm:px-10 py-5 list-disc">
                      <li>{roleDetailsPopup.benefits[0]}</li>
                      <li>{roleDetailsPopup.benefits[1]}</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    className="mb-5 flex w-full items-center justify-center rounded-md border border-[#3E7160] border-slate-300 py-2 px-4 text-center text-[#3E7160] text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#3E7160] hover:border-slate-800 focus:text-white focus:bg-[#3E7160] focus:border-slate-800 active:border-slate-800 active:text-white active:bg-[#3E7160] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Ứng tuyển
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 ml-1.5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Nội dung popup ở đây */}
          </div>
        )}
      </div>
    </div>
  );
};
export default CareersComponent;
