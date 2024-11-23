import { div } from "framer-motion/client";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import ProductDetailsComponent from "@/components/pages/ProductDetailsComponent";
import { GetStaticPaths, GetStaticProps } from "next";
import handler from '@/pages/api/data';


const ProductDetail = (plant: any) => {
  if (!plant) {
    return <div>Không tìm thấy cây này.</div>;
  }
  return (
    <div>
      <Layout>
        <ProductDetailsComponent data={plant} />
      </Layout>
    </div>
  );
};
// export const getStaticPaths: GetStaticPaths = async () => {
//   const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000" 
//       : process.env.NEXT_PUBLIC_BASE_URL; 
      
//   const res = await fetch(`${baseUrl}/api/data`);
//   const data = await res.json();
//   const plants = data.plants;
//   console.log("Data from API from get path:", data);
//   console.log("Plants:", plants);

//   const paths = plants.flatMap((plant: any) =>
//     plant.items.map((item: any) => ({
//       params: { id: item.id.toString() },
//     }))
//   );
//   console.log("Generated paths:", paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000" 
//       : process.env.NEXT_PUBLIC_BASE_URL; 
      
//     console.log("CÁI NÀY LÀ CÁI GÌ ĐÂY:", params);
//   const { id } = params!;
//   const res = await fetch(`${baseUrl}/api/data`);
//   const data = await res.json();
//   const plants = data.plants;

//   console.log("Data from API:", data);
//   console.log("ID received:", id);

//   const plant = plants
//     .flatMap((plant: any) => plant.items)
//     .find((item: any) => item.id.toString() === id);

//   console.log("Found plant:", plant);

//   return {
//     props: {
//       plant,
//     },
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Tạo một đối tượng giả lập cho req và res
    const req = {}; // Bạn có thể thêm các thuộc tính cần thiết nếu cần
    const res = {
      json: (data: any) => Promise.resolve(data), // Giả lập phương thức json
      status: (statusCode: any) => ({
        json: (data: any) => Promise.resolve({ statusCode, data }), // Giả lập phương thức status
      }),
    };

    // Gọi hàm handler
    const data = await handler(req, res);

    // Kiểm tra nếu có lỗi
    if (!data) {
      throw new Error('No data returned from handler');
    }

    const plants = data.plants;

    const paths = plants.flatMap((plant: any) =>
      plant.items.map((item: any) => ({
        params: { id: item.id.toString() },
      }))
    );

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    // Tạo một đối tượng giả lập cho req và res
    const req = {}; // Bạn có thể thêm các thuộc tính cần thiết nếu cần
    const res = {
      json: (data: any) => Promise.resolve(data), // Giả lập phương thức json
      status: (statusCode: any) => ({
        json: (data: any) => Promise.resolve({ statusCode, data }), // Giả lập phương thức status
      }),
    };

    const { id } = params!;
    const data = await handler(req, res);

    // Kiểm tra nếu có lỗi
    if (!data) {
      throw new Error('No data returned from handler');
    }

    const plants = data.plants;

    const plant = plants
      .flatMap((plant: any) => plant.items)
      .find((item: any) => item.id.toString() === id);

    if (!plant) {
      return {
        notFound: true, // Trả về 404 nếu không tìm thấy
      };
    }

    return {
      props: {
        plant,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        plant: null, // Nếu có lỗi, trả về null
      },
    };
  }
};

export default ProductDetail;
