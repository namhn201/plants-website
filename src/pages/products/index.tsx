import Layout from "@/components/layout/Layout";
import ProductComponent from "@/components/pages/ProductComponent";

const Products = (props: any) => {
  return (
    <div>
      <Layout>
        <ProductComponent props={props} />
      </Layout>
    </div>
  );
};
export const getStaticProps = async () => {
  const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000" 
    : "https://plants-website-taupe.vercel.app"; 
    
  console.log(
    "I'm in serverrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
  );
  const res = await fetch(`${baseUrl}/api/data`);
  const data = await res.json();
// Kiểm tra kiểu dữ liệu của data
console.log("Data:", data);

const filteredProducts = data.plants.flatMap((plant:any) => 
  plant.items.filter((item:any) => item["typical products"] >= 50)
);

  console.log("Filtered Products:", filteredProducts);

  return {
    props: {
      filteredProducts, // Dữ liệu artist được lấy từ API
      message: "I'm runningg", // Thông điệp
    },
  };
};
export default Products;
