import { div } from "framer-motion/client";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import ProductDetailsComponent from "@/components/pages/ProductDetailsComponent";
import { GetStaticPaths, GetStaticProps } from "next";

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
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const plants = data.plants;
  console.log("Data from API from get path:", data);
  console.log("Plants:", plants);

  const paths = plants.flatMap((plant: any) =>
    plant.items.map((item: any) => ({
      params: { id: item.id.toString() },
    }))
  );
  console.log("Generated paths:", paths);

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("CÁI NÀY LÀ CÁI GÌ ĐÂY:", params)
  const { id } = params!;
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const plants = data.plants;

  // Log dữ liệu lấy từ API và id truyền vào
  console.log("Data from API:", data);
  console.log("ID received:", id);

  const plant = plants
    .flatMap((plant: any) => plant.items)
    .find((item: any) => item.id.toString() === id);

  console.log("Found plant:", plant);

  return {
    props: {
      plant,
    },
  };
};

export default ProductDetail;
