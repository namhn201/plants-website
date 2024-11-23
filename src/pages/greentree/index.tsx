import Layout from "@/components/layout/Layout";
import GreenTreeComponent from "@/components/pages/GreentreeComponent";
import ProductComponent from "@/components/pages/ProductComponent";
import handler from '@/pages/api/data';

const GreenTree = (props: any) => {
  return (
    <div>
      <Layout>
        <GreenTreeComponent props={props} />
      </Layout>
    </div>
  );
};
// export const getStaticProps = async () => {
//     const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000" 
//       : process.env.NEXT_PUBLIC_BASE_URL; 
      
//   console.log(
//     "I'm in serverrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
//   );
//   const res = await fetch(`${baseUrl}/api/data`);
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       data, // Dữ liệu artist được lấy từ API
//       message: "I'm runningg", // Thông điệp
//     },
//   };
// };
// export const getStaticProps = async () => {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Lấy từ biến môi trường hoặc sử dụng localhost

//   console.log("Base URL:", baseUrl);
//   console.log("Fetching data...");

//   try {
//     const res = await fetch(`${baseUrl}/api/data`);

//     // Kiểm tra xem phản hồi có OK (mã trạng thái 200-299) không
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log("Fetched data:", data);

//     return {
//       props: {
//         data,
//         message: "I'm running",
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         data: null,
//         message: "Error fetching data",
//       },
//     };
//   }
// };

export const getStaticProps = async () => {
    try {
      // Tạo một đối tượng giả lập cho req và res
      const req = {}; // Bạn có thể thêm các thuộc tính cần thiết nếu cần
      const res = {
        json: (data:any) => Promise.resolve(data), // Giả lập phương thức json
        status: (statusCode:any) => ({
          json: (data:any) => Promise.resolve({ statusCode, data }), // Giả lập phương thức status
        }),
      };
  
      // Gọi hàm handler
      const data = await handler(req, res);
  
      // Kiểm tra nếu có lỗi
      if (!data) {
        throw new Error('No data returned from handler');
      }
  
      return {
        props: {
          data, // Dữ liệu từ API
          message: "I'm runningg", // Thông điệp
        },
      };
    } catch (error) {
      console.error("Error in getStaticProps:", error);
      return {
        props: {
          data: null, // Nếu có lỗi, trả về null
          message: error || "An error occurred",
        },
      };
    }
  };
export default GreenTree;
