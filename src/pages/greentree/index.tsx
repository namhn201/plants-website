import Layout from "@/components/layout/Layout";
import GreenTreeComponent from "@/components/pages/GreentreeComponent";
import ProductComponent from "@/components/pages/ProductComponent";

const GreenTree = (props: any) => {
  return (
    <div>
      <Layout>
        <GreenTreeComponent props={props} />
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
  console.log(data);

  return {
    props: {
      data, // Dữ liệu artist được lấy từ API
      message: "I'm runningg", // Thông điệp
    },
  };
};
export default GreenTree;
