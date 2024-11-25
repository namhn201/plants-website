import Layout from "@/components/layout/Layout";
import DecorativePlantComponent from "@/components/pages/DecorativeplantComponent";
import ProductComponent from "@/components/pages/ProductComponent";
import handler from "@/pages/api/data";

const DecorativePlant = (props: any) => {
  return (
    <div>
      <Layout>
        <DecorativePlantComponent props={props} />
      </Layout>
    </div>
  );
};
export const getStaticProps = async () => {
  try {
    const req = {}; 
    const res = {
      json: (data: any) => Promise.resolve(data), 
      status: (statusCode: any) => ({
        json: (data: any) => Promise.resolve({ statusCode, data }), 
      }),
    };

    const data = await handler(req, res);

    if (!data) {
      throw new Error("No data returned from handler");
    }

    return {
      props: {
        data, 
        message: "I'm runningg", 
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        data: null,
        message: error || "An error occurred",
      },
    };
  }
};
export default DecorativePlant;
