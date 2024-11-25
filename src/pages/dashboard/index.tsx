import Layout from '@/components/layout/Layout'
import DashboardComponent from '@/components/pages/Dashboard'
import handler from "@/pages/api/data";

const DashBoard = (props:any) => {
    return (
      <div>
        {/* <Layout> */}
          <DashboardComponent props={props} />
        {/* </Layout> */}
      </div>
    )
  }
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
      const decorativeplantCatagory = data.plants[1]?.items.slice(0, 4);
      console.log("data from dashboard component",decorativeplantCatagory)
      // {data.plants[1]?.items.slice(0, 4).map((decorativeplant: any) => {
      //   console.log("decorativeplantCatagory",decorativeplant)
      // })}

      if (!data) {
        throw new Error("No data returned from handler");
      }
  
      return {
        props: {
          decorativeplantCatagory, 
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
  export default DashBoard