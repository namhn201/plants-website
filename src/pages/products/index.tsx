import Layout from "@/components/layout/Layout";
import ProductComponent from "@/components/pages/ProductComponent";
import handler from '@/pages/api/data';

const Products = (props: any) => {
  return (
    <div>
      <Layout>
        <ProductComponent props={props} />
      </Layout>
    </div>
  );
};
// export const getStaticProps = async () => {
//   const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000" 
//       : process.env.NEXT_PUBLIC_BASE_URL; 
      
    
//   console.log(
//     "I'm in serverrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
//   );
//   const res = await fetch(`${baseUrl}/api/data`);
//   const data = await res.json();
// // Kiểm tra kiểu dữ liệu của data
// console.log("Data:", data);

// const filteredProducts = data.plants.flatMap((plant:any) => 
//   plant.items.filter((item:any) => item["typical products"] >= 50)
// );

//   console.log("Filtered Products:", filteredProducts);

//   return {
//     props: {
//       filteredProducts, // Dữ liệu artist được lấy từ API
//       message: "I'm runningg", // Thông điệp
//     },
//   };
// };

export const getStaticProps = async () => {
  try {
    // Tạo một đối tượng giả lập cho req và res
    const req = {}; // Bạn có thể thêm các thuộc tính cần thiết nếu cần
    const res = {
      json: (data: any) => Promise.resolve(data), // Giả lập phương thức json
      status: (statusCode: any) => ({
        json: (data: any) => Promise.resolve({ statusCode, data }), // Giả lập phương thức status
      }),
    };

    console.log("I'm in serverrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");

    // Gọi hàm handler
    const data = await handler(req, res);

    // Kiểm tra nếu có lỗi
    if (!data) {
      throw new Error('No data returned from handler');
    }

    // Kiểm tra kiểu dữ liệu của data
    console.log("Data:", data);

    const filteredProducts = data.plants.flatMap((plant: any) => 
      plant.items.filter((item: any) => item["typical products"] >= 50)
    );

    console.log("Filtered Products:", filteredProducts);

    return {
      props: {
        filteredProducts, // Dữ liệu artist được lấy từ API
        message: "I'm runningg", // Thông điệp
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        filteredProducts: [], // Nếu có lỗi, trả về mảng rỗng
        message: error || "An error occurred",
      },
    };
  }
};
export default Products;
